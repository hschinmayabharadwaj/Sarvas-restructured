import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { primeSession } from './api.js';
import App from './App.jsx';
import './styles.css';
import { startSmoothScroll } from './lib/motion';

startSmoothScroll();

// Server-rendered pages carry their session and data; without them (dev server, SSR fallback) render from scratch.
const ssr = document.getElementById('ssr-data');
const initial = ssr ? JSON.parse(ssr.textContent) : undefined;
const app = <StrictMode><App initial={initial} /></StrictMode>;
const root = document.getElementById('root');
if (initial) {
  primeSession(initial.session);
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
