import { ArrowLeft } from 'lucide-react';
import Logo from '../components/Logo.jsx';
import { Link } from '../router.jsx';

export default function NotFound() {
  return (
    <div className="grid place-items-center py-16 text-center">
      <Logo className="size-16" />
      <p className="label mt-8 text-primary">Error 404</p>
      <h1 className="mt-3">This page doesn't exist</h1>
      <p className="mt-4 max-w-md">The link may be broken, or the page may have moved. Check the address, or head back to the start.</p>
      <Link to="/" className="btn btn-primary mt-8 h-11 px-6"><ArrowLeft className="size-4" aria-hidden="true" /> Back to SARVAS</Link>
    </div>
  );
}
