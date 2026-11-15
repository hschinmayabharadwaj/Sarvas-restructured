import { AlertCircle, History, LayoutDashboard, ListChecks, LogOut, Shield, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { api, getSession } from './api.js';
import { Link, UserBase, canonical, match, navigate, setClientBase, usePath } from './router.jsx';
import CommandBar from './components/CommandBar.jsx';
import Footer from './components/Footer.jsx';
import HelpConsole from './components/HelpConsole.jsx';
import Logo from './components/Logo.jsx';
import { PageLoading } from './components/Skeleton.jsx';
import ShimmerText from './components/kokonutui/shimmer-text';
import { scrollToTop } from './lib/motion';
import { cn } from './lib/utils';
import { ServerData } from './ssr.js';

// One chunk per page, so sign-in doesn't download the dashboard's charts.
const Activity = lazy(() => import('./pages/Activity.jsx'));
const Admin = lazy(() => import('./pages/Admin.jsx'));
const Connect = lazy(() => import('./pages/Connect.jsx'));
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const Privacy = lazy(() => import('./pages/Privacy.jsx'));
const Proposal = lazy(() => import('./pages/Proposal.jsx'));
const Repo = lazy(() => import('./pages/Repo.jsx'));
const Task = lazy(() => import('./pages/Task.jsx'));
const Tasks = lazy(() => import('./pages/Tasks.jsx'));

const NO_DATA = {};

// initial: what the server rendered with (path, query, session, page data); undefined without SSR.
export default function App({ initial }) {
  const path = usePath(initial?.path);
  const [session, setSession] = useState(initial?.session ?? null);
  const [error, setError] = useState('');
  const route = match(path, session?.login);
  const base = session?.signedIn ? `/${encodeURIComponent(session.login)}` : '';
  if (typeof window !== 'undefined') setClientBase(base);
  // Server-fetched data belongs to the first page only; dropped on the first navigation.
  // Keyed by the path without the /<login> prefix, so the prefix rewrite below keeps it.
  const [ssrRest, setSsrRest] = useState(() => initial && match(initial.path, initial.session?.login).rest);

  const refresh = useCallback(() => getSession().then(setSession).catch((e) => setError(e.message)), []);
  useEffect(() => { if (!initial) refresh(); }, [initial, refresh]);
  useEffect(() => {
    setError('');
    scrollToTop();
    setSsrRest((s) => (s === route.rest ? s : null));
  }, [route.rest]);
  // Signed in: show /<login>/… in the address bar (after sign-in "/", old links like /tasks/7).
  const want = canonical(path, route, base);
  useEffect(() => {
    if (want) navigate(want + window.location.search + window.location.hash, { replace: true });
  }, [want]);

  // Shared error handler for pages: a signed-out response returns to Connect.
  const onError = useCallback((e) => {
    if (e.signedOut) refresh();
    setError(e.message);
  }, [refresh]);

  if (!session) {
    return (
      <div className="grid min-h-dvh place-items-center">
        {error ? <p className="text-bad" role="alert">{error}</p> : <ShimmerText text="SARVAS" className="text-2xl" />}
      </div>
    );
  }

  const query = new URLSearchParams(typeof window === 'undefined' ? initial.search : window.location.search);
  if (!session.signedIn) {
    // Privacy and 404 are public; every other app page needs sign-in first.
    const Public = { privacy: Privacy, notFound: NotFound }[route.page];
    return (
      <Suspense fallback={null}>
        {Public ? (
          <div className="flex min-h-dvh flex-col">
            <header className="mx-auto flex h-16 w-full max-w-[1200px] items-center px-6">
              <Link to="/" className="flex items-center gap-2 font-medium text-foreground no-underline hover:no-underline"><Logo /> SARVAS</Link>
            </header>
            <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14"><Public /></main>
            <Footer />
          </div>
        ) : <Connect authError={query.get('error')} installUrl={session.installUrl} demo={session.demo} />}
        <HelpConsole />
      </Suspense>
    );
  }

  const isAdmin = session.role === 'admin';
  let page;
  if (route.page === 'repo') page = <Repo key={route.rest} owner={route.owner} name={route.name} onError={onError} />;
  else if (route.page === 'proposal') page = <Proposal key={route.rest} id={route.id} actions={session.actions} onError={onError} />;
  else if (route.page === 'task') page = <Task key={route.rest} id={route.id} onError={onError} />;
  else if (route.page === 'tasks') page = <Tasks onError={onError} />;
  else if (route.page === 'activity') page = <Activity onError={onError} />;
  else if (route.page === 'admin' && isAdmin) page = <Admin onError={onError} />;
  else if (route.page === 'privacy') page = <Privacy />;
  else if (route.page === 'notFound') page = <NotFound />;
  else page = <Dashboard onError={onError} installUrl={session.installUrl} />;

  const logout = async () => {
    try { await api.logout(); } finally { window.location.assign('/'); }
  };

  return (
    <UserBase.Provider value={base}>
    <ServerData.Provider value={route.rest === ssrRest ? initial.data : NO_DATA}>
    <div className="flex min-h-dvh flex-col">
      <Header path={route.rest} login={session.login} isAdmin={isAdmin} onLogout={logout} />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <AnimatePresence>
          {error && (
            <motion.div role="alert" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              className="mb-6 flex items-start gap-3 rounded-lg border border-bad/30 bg-bad/10 px-4 py-3 text-sm">
              <AlertCircle className="mt-0.5 size-4 shrink-0 text-bad" aria-hidden="true" />
              <span className="flex-1">{error}</span>
              <button type="button" onClick={() => setError('')} aria-label="Dismiss" className="text-muted-foreground hover:text-foreground">
                <X className="size-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <Suspense fallback={<PageLoading />}>{page}</Suspense>
      </main>
      <Footer />
      <HelpConsole />
      <Analytics />
    </div>
    </ServerData.Provider>
    </UserBase.Provider>
  );
}

function Header({ path, login, isAdmin, onLogout }) {
  const links = [
    ['/', 'Dashboard', LayoutDashboard],
    ['/tasks', 'Tasks', ListChecks],
    ['/activity', 'Activity', History],
    ...(isAdmin ? [['/admin', 'Admin', Shield]] : []),
  ];
  // Repository and README pages belong to the dashboard.
  const section = links.find(([to]) => to !== '/' && path.startsWith(to))?.[0] ?? '/';

  const nav = (pillId) => (
    <>
      {links.map(([to, label, Icon]) => (
        <Link key={to} to={to} className={cn('label relative flex items-center gap-1.5 rounded-md px-3.5 py-2 no-underline hover:no-underline',
          section === to ? 'text-foreground' : 'text-muted-foreground hover:text-foreground')}>
          {section === to && (
            <motion.span layoutId={pillId} className="absolute inset-0 rounded-md bg-muted" transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }} />
          )}
          <Icon className="relative size-4" aria-hidden="true" />
          <span className="relative">{label}</span>
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-medium text-foreground no-underline hover:no-underline">
          <Logo /> SARVAS
        </Link>
        <nav className="ml-3 hidden items-center gap-1 md:flex" aria-label="Main">{nav('pill')}</nav>
        <div className="flex-1" />
        <CommandBar isAdmin={isAdmin} className="hidden w-60 sm:block lg:w-72" />
        <span className="hidden text-sm text-muted-foreground lg:inline">@{login}</span>
        {/* Demo visitors switch accounts here; /auth/login starts a fresh session. Same name as DEMO_LOGIN on the server. */}
        {login === 'demo visitor' && <a href="/auth/login" className="btn btn-primary h-9 px-3.5">Sign in with GitHub</a>}
        <button type="button" className="btn btn-ghost px-2" onClick={onLogout} title="Disconnect">
          <LogOut className="size-4" aria-hidden="true" /><span className="sr-only sm:not-sr-only">Disconnect</span>
        </button>
      </div>
      <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 pb-2 md:hidden" aria-label="Main">{nav('pill-mobile')}</nav>
    </header>
  );
}
