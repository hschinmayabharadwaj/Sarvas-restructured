// URL rules, kept free of React so they can be tested with `node --test`.
// Signed-in pages live under the user's login: /<login>, /<login>/tasks, /<login>/repos/<owner>/<name> …
// The old unprefixed paths (/tasks/7) still match, and the app rewrites them to the prefixed form.
const APP = /^\/(?:repos|changes|tasks|activity|admin)(?:\/|$)/;
const RESERVED = new Set(['repos', 'changes', 'tasks', 'activity', 'admin', 'privacy', 'auth', 'api']);

// base: "/<login>" (encoded) or "" when signed out. Leaves /privacy, /auth/… and prefixed paths alone.
export function withBase(base, to) {
  if (!base) return to;
  if (to === '/') return base;
  return APP.test(to) ? base + to : to;
}

function page(path) {
  let m;
  if ((m = path.match(/^\/repos\/([^/]+)\/([^/]+)\/?$/))) {
    return { page: 'repo', owner: decodeURIComponent(m[1]), name: decodeURIComponent(m[2]) };
  }
  if ((m = path.match(/^\/changes\/([^/]+)\/?$/))) return { page: 'proposal', id: decodeURIComponent(m[1]) };
  if ((m = path.match(/^\/tasks\/([^/]+)\/?$/))) return { page: 'task', id: decodeURIComponent(m[1]) };
  if (path === '/tasks') return { page: 'tasks' };
  if (path === '/activity') return { page: 'activity' };
  if (path === '/admin') return { page: 'admin' };
  if (path === '/privacy') return { page: 'privacy' };
  if (path === '/') return { page: 'home' };
  return { page: 'notFound' };
}

// login: the signed-in user's login, if any. `rest` is the path without the /<login> prefix.
export function match(path, login) {
  const m = path.match(/^\/([^/]+)(\/.*)?$/);
  let user = null;
  if (m && !RESERVED.has(m[1])) {
    try { user = decodeURIComponent(m[1]); } catch { return { page: 'notFound', user: null, rest: path }; }
  }
  if (!user) return { ...page(path), user, rest: path };
  const rest = m[2] || '/';
  // Under a user prefix only app pages exist. Someone else's /<login>/tasks/7 opens as your own
  // (a shared link), but a bare /<word> that isn't you is a 404.
  const other = login && user.toLowerCase() !== login.toLowerCase();
  if ((rest !== '/' && !APP.test(rest)) || (rest === '/' && other)) return { page: 'notFound', user, rest };
  return { ...page(rest), user, rest };
}

// Where the browser should be for this route, or null if the current path is already right.
export function canonical(path, route, base) {
  if (!base || route.page === 'notFound' || route.page === 'privacy') return null;
  const want = withBase(base, route.rest);
  return want === path ? null : want;
}
