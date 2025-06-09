// app/dashboard/eraentry/page.tsx
import { redirect } from 'next/navigation';
import { createClient } from '../../../utils/supabase/server';
import EraClient from './EraClient'; // Adjust if the filename differs

export default async function EraEntryPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return <EraClient user={user} />;
}
