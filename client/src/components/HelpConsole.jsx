import { MessageCircleQuestion, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { answerHelp } from '../lib/help.js';
import { cn } from '../lib/utils';
import Logo from './Logo.jsx';
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input';

const PLACEHOLDERS = ['How do I sign in?', 'Who merges the pull request?', 'Is my code sent to an AI?', 'What is SARVAS?'];

// Floating "Ask SARVAS" console: answers questions about SARVAS and says plainly when one is out of context.
export default function HelpConsole() {
  const [open, setOpen] = useState(false);
  const [log, setLog] = useState([]);
  const panel = useRef(null);
  const end = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    panel.current?.querySelector('input')?.focus();
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  useEffect(() => { end.current?.scrollIntoView({ block: 'nearest' }); }, [log]);

  const ask = (question) => setLog((l) => [...l, { id: l.length, question, ...answerHelp(question) }]);

  return (
    <>
      {open && (
        <div ref={panel} role="dialog" aria-label="Ask SARVAS"
          className="fixed right-4 bottom-20 z-50 flex max-h-[min(32rem,calc(100dvh-7rem))] w-[min(24rem,calc(100vw-2rem))] flex-col rounded-xl border bg-card shadow-2xl">
          <div className="flex items-center gap-2 border-b px-4 py-3 font-medium text-foreground">
            <Logo className="size-6" /> Ask SARVAS
            <span className="flex-1" />
            <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="text-muted-foreground hover:text-foreground">
              <X className="size-4" />
            </button>
          </div>
          <div role="log" aria-live="polite" className="flex-1 space-y-4 overflow-y-auto px-4 py-4 text-sm">
            {log.length === 0 && <p className="text-muted-foreground">Ask anything about using SARVAS.</p>}
            {log.map((m) => (
              <div key={m.id} className="space-y-2">
                <p className="ml-auto w-fit max-w-[85%] rounded-lg bg-primary px-3 py-2 text-primary-foreground">{m.question}</p>
                <p className={cn('max-w-[90%] rounded-lg px-3 py-2', m.status === 'outside_context' ? 'border border-bad/30 bg-bad/10 text-bad' : 'bg-muted text-body')}>
                  {m.answer}
                </p>
              </div>
            ))}
            <div ref={end} />
          </div>
          <div className="border-t p-3">
            <PlaceholdersAndVanishInput placeholders={PLACEHOLDERS} ariaLabel="Your question about SARVAS" maxLength={300}
              onSubmit={(_, q) => ask(q.trim())} />
          </div>
        </div>
      )}
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label={open ? 'Close help' : 'Ask SARVAS a question'}
        className="btn btn-primary fixed right-4 bottom-4 z-50 h-12 rounded-full px-5 shadow-lg">
        <MessageCircleQuestion className="size-5" aria-hidden="true" /><span className="hidden sm:inline">Ask SARVAS</span>
      </button>
    </>
  );
}
