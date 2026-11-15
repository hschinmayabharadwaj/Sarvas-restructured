import { useEffect, useState } from 'react';
import { api } from '../api.js';
import AuditTable from '../components/AuditTable.jsx';
import { useServerData } from '../ssr.js';

export default function Activity({ onError }) {
  const ssr = useServerData();
  const [events, setEvents] = useState(ssr.activity?.events ?? null);
  useEffect(() => { if (!ssr.activity) api.activity().then((d) => setEvents(d.events)).catch(onError); }, [onError]);

  return (
    <section className="card">
      <h1>Your activity</h1>
      <p className="mt-1 text-sm text-muted-foreground">Audit log of everything done with your account through this page.</p>
      <AuditTable events={events} />
    </section>
  );
}
