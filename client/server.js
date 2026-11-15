// SSR renderer. FastAPI (server/sarvas_web) starts it and forwards page requests to it on
// loopback; it never faces the internet. Needs `npm run build` (dist/ and dist-ssr/).
import { readFileSync } from 'node:fs';
import http from 'node:http';
import { render } from './dist-ssr/entry-server.js';

const template = readFileSync(new URL('./dist/index.html', import.meta.url), 'utf8');
const api = process.env.SARVAS_API_URL || 'http://127.0.0.1:8765';
const port = Number(process.env.SARVAS_SSR_PORT || 8767);

http.createServer(async (req, res) => {
  try {
    const { status, html } = await render(req.url, req.headers.cookie || '', api, template);
    res.writeHead(status, { 'content-type': 'text/html; charset=utf-8' }).end(html);
  } catch (e) {
    // FastAPI falls back to the plain browser-rendered page on any error.
    console.error('SSR failed:', req.url.split('?')[0], e.message);
    res.writeHead(500).end();
  }
}).listen(port, '127.0.0.1', () => console.log(`SSR renderer on 127.0.0.1:${port}`));

// Started by FastAPI with a pipe on stdin: it closes when FastAPI exits, however it exits.
if (process.env.SARVAS_SSR_PARENT_PIPE) process.stdin.on('end', () => process.exit(0)).resume();
