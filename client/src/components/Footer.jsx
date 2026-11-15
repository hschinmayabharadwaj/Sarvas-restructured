import { Link } from '../router.jsx';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="bg-dark py-16 text-on-dark-soft">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-3 px-6 text-sm">
        <span className="flex items-center gap-2 font-medium text-on-dark"><Logo /> SARVAS</span>
        <span className="flex-1" />
        <span>AI coding agent for your GitHub repositories. Every change is a pull request your engineers approve.</span>
        <div className="mt-6 flex w-full flex-wrap gap-x-6 gap-y-2 border-t border-dark-elevated pt-6">
          <span>© {new Date().getFullYear()} SARVAS. @Chinmaya Bharadwaj</span>
          <span className="flex-1" />
          <Link to="/privacy" className="text-on-dark-soft hover:text-on-dark">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
