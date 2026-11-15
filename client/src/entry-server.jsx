// Server-side render of one page request. Built by `vite build --ssr` into dist-ssr/, run by server.js.
import { StrictMode } from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { Writable } from 'node:stream';
import App from './App.jsx';
import { match } from './router.jsx';

const enc = encodeURIComponent;

// API calls each page makes on mount (same keys the pages read with useServerData).
function loaders(route, session) {
  if (route.page === 'admin' && session.role === 'admin') return { audit: '/api/admin/audit', me: '/api/me' };
  if (route.page === 'repo') return { repo: `/api/repos/${enc(route.owner)}/${enc(route.name)}` };
  if (route.page === 'task') return { task: `/api/tasks/${enc(route.id)}` };
  if (route.page === 'proposal') return { proposal: `/api/proposals/${enc(route.id)}` };
  if (route.page === 'tasks') return { tasks: '/api/tasks' };
  if (route.page === 'activity') return { activity: '/api/activity' };
  if (route.page === 'home' || route.page === 'admin') return { me: '/api/me', repos: '/api/repos', tasks: '/api/tasks' };
  return {};
}

function toHtml(element) {
  return new Promise((resolve, reject) => {
    let html = '';
    const sink = new Writable({ write(chunk, _enc, done) { html += chunk; done(); } });
    sink.on('finish', () => resolve(html));
    // onAllReady waits for the lazy page chunks, so the HTML holds the whole page.
    const stream = renderToPipeableStream(element, { onAllReady: () => stream.pipe(sink), onShellError: reject });
  });
}

// cookie: only the session cookie, passed on by FastAPI; apiBase: FastAPI on loopback.
export async function render(url, cookie, apiBase, template) {
  const get = async (path) => {
    const res = await fetch(apiBase + path, { headers: { cookie }, signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`${path}: ${res.status}`);
    return res.json();
  };
  const { pathname, search } = new URL(url, 'http://localhost');
  const session = await get('/api/session');
  const route = match(pathname, session.login);
  const data = {};
  if (session.signedIn) {
    // A failed call is left out; that page then fetches it in the browser and shows the error there.
    await Promise.all(Object.entries(loaders(route, session)).map(([key, path]) =>
      get(path).then((d) => { data[key] = d; }, () => {})));
  }
  const initial = { path: pathname, search, session, data };
  const html = await toHtml(<StrictMode><App initial={initial} /></StrictMode>);
  // `<` escaped so the data can't close the script tag.
  const json = JSON.stringify(initial).replace(/</g, '\\u003c');
  return {
    status: route.page === 'notFound' ? 404 : 200,
    html: template
      .replace('<!--ssr-html-->', () => html)
      .replace('<!--ssr-data-->', () => `<script type="application/json" id="ssr-data">${json}</script>`),
  };
}
