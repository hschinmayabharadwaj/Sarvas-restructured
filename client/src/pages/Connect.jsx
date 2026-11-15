import { ArrowRight, ExternalLink, GitPullRequest, KeyRound, MessageSquareCode, ShieldCheck, Wand2 } from 'lucide-react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { api } from '../api.js';
import Footer from '../components/Footer.jsx';
import Logo, { GitHubMark } from '../components/Logo.jsx';
import Stagger from '../components/Stagger.jsx';
import { SplitText } from 'gsap/SplitText';
import { gsap } from '../lib/motion';
import { reducedMotion } from '../lib/utils';

gsap.registerPlugin(SplitText);

const MESSAGES = {
  state: "The sign-in link expired or didn't come from this page. Please try again.",
  cancelled: 'GitHub authorization was cancelled.',
  not_allowed: "Your GitHub account isn't on this SARVAS's list of allowed users. Ask an administrator to add your GitHub username.",
};

// Optional Spline scene, embedded through Spline's own viewer so its code runs
// on Spline's origin, never ours (the CSP allows only this frame host).
const SPLINE = import.meta.env.VITE_SPLINE_URL?.startsWith('https://my.spline.design/') ? import.meta.env.VITE_SPLINE_URL : null;

const FEATURES = [
  [MessageSquareCode, 'Ask the codebase', 'Plain-English answers that link to the exact lines they came from.'],
  [Wand2, 'Request a change', 'Describe what you want. The agent plans it and asks when something is unclear.'],
  [ShieldCheck, 'Sandboxed and checked', "Every change is made in an isolated container and run against your repository's checks."],
  [GitPullRequest, 'Always a pull request', 'Nothing touches your default branch. An engineer reviews and merges.'],
];

// Full-page navigation: the OAuth redirect must not be a fetch.
function ConnectButton({ className = 'btn-primary' }) {
  return (
    <a href="/auth/login" className={`btn ${className} h-11 px-6`}>
      <GitHubMark /> Connect GitHub <ArrowRight className="size-4" aria-hidden="true" />
    </a>
  );
}

// Signs in as the shared demo visitor (no GitHub account), confined to one demo repository.
function DemoButton() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const start = () => {
    setBusy(true);
    api.demo().then(() => window.location.assign('/'), (e) => { setError(e.message); setBusy(false); });
  };
  return (
    <>
      <button type="button" onClick={start} disabled={busy} className="btn h-11 px-6">
        {busy ? 'Starting demo…' : 'Try the demo, no GitHub needed'}
      </button>
      {error && <span role="alert" className="text-sm text-bad">{error}</span>}
    </>
  );
}

export default function Connect({ authError, installUrl, demo }) {
  const hero = useRef(null);
  const video = useRef(null);

  // Muted autoplay loop; reduced-motion users get controls instead.
  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (reducedMotion()) v.controls = true;
    else v.play().catch(() => {});
  }, []);

  // Headline rises in line by line; the rest follows.
  useLayoutEffect(() => {
    if (reducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      const split = SplitText.create('[data-split]', { type: 'lines', mask: 'lines', aria: 'auto' });
      gsap.timeline({ defaults: { ease: 'power4.out' } })
        .from(split.lines, { yPercent: 110, duration: 1.1, stagger: 0.09 })
        .from('[data-fade]', { autoAlpha: 0, y: 18, duration: 0.8, stagger: 0.08 }, '-=0.7');
      gsap.to('[data-float]', { y: -14, duration: 3, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    }, hero);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-dvh bg-background">
      <header className="mx-auto flex h-16 max-w-[1200px] items-center gap-2 px-6 font-medium text-foreground">
        <Logo /> SARVAS
        <span className="flex-1" />
        <a href="/auth/login" className="btn btn-ghost hidden sm:inline-flex">Sign in</a>
      </header>

      <section ref={hero} className="backdrop-grid mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h1 data-split className="display text-[2.5rem] leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[4.25rem]">
            Your repositories, with you in charge.
          </h1>
          <p data-fade className="mt-6 max-w-xl text-lg text-body">
            Describe a change; SARVAS plans, builds, tests and opens a pull request.
          </p>
          {authError && (
            <p data-fade role="alert" className="mt-6 rounded-md border border-bad/30 bg-bad/10 px-3.5 py-2.5 text-sm text-bad">
              {MESSAGES[authError] ?? 'Sign-in failed.'}
            </p>
          )}
          <div data-fade className="mt-8 flex flex-wrap items-center gap-5">
            <ConnectButton />
            {demo && <DemoButton />}
            {installUrl && (
              <a href={installUrl} target="_blank" rel="noopener noreferrer" className="btn h-11 px-6"
                 title="Opens GitHub, where you choose which repositories SARVAS can access">
                Install the GitHub App <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            )}
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <KeyRound className="size-4" aria-hidden="true" /> Never asks for your password
            </span>
          </div>
        </div>
        <div data-fade>
          {SPLINE ? (
            <iframe src={SPLINE} title="Decorative 3D scene" loading="lazy" referrerPolicy="no-referrer"
              sandbox="allow-scripts allow-same-origin" tabIndex={-1} aria-hidden="true"
              className="aspect-square w-full rounded-xl border-0" />
          ) : (
            <div data-float>
              <video ref={video} src="/videos/sarvas-demo.mp4" muted loop playsInline
                aria-label="SARVAS demo: from a request to a pull request"
                className="aspect-video w-full rounded-xl border bg-dark object-cover shadow-2xl transition-[scale,box-shadow] duration-500 hover:scale-[1.03] hover:shadow-primary/30" />
            </div>
          )}
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="display max-w-2xl text-4xl leading-[1.08] tracking-[-0.04em] sm:text-5xl">
            Every change is planned, checked and reviewed.
          </h2>
          <Stagger onScroll className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(([Icon, title, text]) => (
              <div key={title} className="rounded-lg bg-background p-8">
                <Icon className="size-5 text-primary" aria-hidden="true" />
                <p className="mt-5 text-lg font-medium text-foreground">{title}</p>
                <p className="mt-2 text-body">{text}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <Stagger onScroll className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="card backdrop-grid px-8 py-14 sm:px-16 sm:py-16">
          <h2 className="display max-w-2xl text-3xl leading-[1.15] tracking-[-0.03em] sm:text-4xl">
            Acts with your GitHub permissions, only where the app is installed.
          </h2>
          <p className="mt-4 max-w-xl">
            You approve the plan and the diff. An engineer merges the pull request. The agent can’t approve or merge its own work.
          </p>
          <div className="mt-8"><ConnectButton /></div>
        </div>
      </Stagger>

      <Footer />
    </div>
  );
}
