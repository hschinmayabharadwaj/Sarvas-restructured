import { createContext, useContext, useEffect, useState } from 'react';
import { withBase } from './routes.js';

export { canonical, match, withBase } from './routes.js';

// "/<login>" while signed in. Links read it from context (the server renders for many users at once);
// navigate() runs only in the browser, where one user is signed in, so a module variable will do.
export const UserBase = createContext('');
let clientBase = '';
export function setClientBase(base) { clientBase = base; }

// Minimal pushState router (no dependency). App paths like /tasks get the user's /<login> prefix.
export function navigate(to, { replace = false } = {}) {
  window.history[replace ? 'replaceState' : 'pushState']({}, '', withBase(clientBase, to));
  window.dispatchEvent(new PopStateEvent('popstate'));
}

// initial: the request path when rendering on the server (no window there).
export function usePath(initial) {
  const [path, setPath] = useState(() => initial ?? window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  return path;
}

export function Link({ to, children, className }) {
  const href = withBase(useContext(UserBase), to);
  return (
    <a href={href} className={className} onClick={(e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      navigate(href);
    }}>{children}</a>
  );
}
