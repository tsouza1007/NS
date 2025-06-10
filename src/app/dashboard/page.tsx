
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import DashboardClient from './DashboardClient'
import Head from 'next/head'
import LogoutButton from '@/components/LogoutButton'


export default async function Dashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const stats = {
    currentStreak: 2,
    totalEntries: 6,
    timeSpent: 1,
    moodAverage: 4.2,
  }

  return (
    <>
      <Head>
        <title>JournalMind Dashboard</title>
        <meta name="description" content="Track your journaling progress" />
      </Head>
      <DashboardClient stats={stats} />
      <div className="flex justify-end p-4">
        <LogoutButton />
      </div>
    </>
  );
}
