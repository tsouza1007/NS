// "use client";

// import { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import { StatsCard } from '@/components/ui/StatsCard';
// import { EntryOption } from '@/components/ui/EntryOption';
// import { redirect } from 'next/navigation'
// import { createClient } from '@/utils/supabase/server'
// import LogoutButton from '@/components/LogoutButton'

// interface DashboardStats {
//   currentStreak: number;
//   totalEntries: number;
//   timeSpent: number;
//   moodAverage: number;
// }

// export default async function Dashboard() {
//   const supabase = await createClient()
//   const { data: { user } } = await supabase.auth.getUser()

//   if (!user) {
//     redirect('/login')
//   }

//   const [stats] = useState<DashboardStats>({
//     currentStreak: 2,
//     totalEntries: 6,
//     timeSpent: 1 ,
//     moodAverage: 4.2,
//   });

//   return (
//     <>
//       <Head>
//         <title>JournalMind Dashboard</title>
//         <meta name="description" content="Track your journaling progress" />
//       </Head>

//       <div className="grid grid-cols-12 min-h-screen w-full bg-black px-[50px]">
//         {/* Stats Section */}
//         <div className="col-span-12 grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//           <StatsCard title="Current Streak" value={`${stats.currentStreak} days`} icon="fire" />
//           <StatsCard title="Total Entries" value={stats.totalEntries.toString()} icon="book" />
//           <StatsCard title="Time Spent" value={`${stats.timeSpent} hrs`} icon="clock" />
//           <StatsCard title="Mood Average" value={`${stats.moodAverage}/5`} icon="smile" />
//         </div>

//         {/* New Entry Section */}
//         <div className="col-span-12 mb-8">
//           <h2 className="text-xl font-semibold mb-4 text-white">New Entry</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <EntryOption
//               title="Quick Notes"
//               description="Capture quick thoughts and ideas"
//               icon="pencil"
//               href="/journals/notes"
//             />
//             <EntryOption
//               title="Prompted Journal"
//               description="Write with guided prompts"
//               icon="message-circle"
//               href="/journals/eraentry"
//             />
//             <EntryOption
//               title="Long Journal"
//               description="Deep dive into your thoughts"
//               icon="edit"
//               href="/journals/longjournal"
//             />
//           </div>
//         </div>

//         {/* Redirect to Long Journal Entries */}
//         <div className="col-span-12 text-right mt-8">
//           <Link
//             href="/dashboard/pastentries/longjourn"
//             className="text-blue-400 hover:underline text-sm"
//           >
//             View Long Journal Entries →
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }
// app/dashboard/page.tsx
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
      <div className="flex justify-end p-4">
        <LogoutButton />
      </div>
      <DashboardClient stats={stats} />
    </>
  )
}
