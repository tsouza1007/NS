// app/dashboard/DashboardClient.tsx
'use client'

import { useState } from 'react'
import { StatsCard } from '@/components/ui/StatsCard'
import { EntryOption } from '@/components/ui/EntryOption'
import Link from 'next/link'

interface DashboardStats {
  currentStreak: number;
  totalEntries: number;
  timeSpent: number;
  moodAverage: number;
}

export default function DashboardClient({ stats }: { stats: DashboardStats }) {
  const [localStats] = useState(stats)

  return (
    <div className="grid grid-cols-12 min-h-screen w-full bg-black px-[50px]">
      {/* Stats Section */}
      <div className="col-span-12 grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatsCard title="Current Streak" value={`${localStats.currentStreak} days`} icon="fire" />
        <StatsCard title="Total Entries" value={localStats.totalEntries.toString()} icon="book" />
        <StatsCard title="Time Spent" value={`${localStats.timeSpent} hrs`} icon="clock" />
        <StatsCard title="Mood Average" value={`${localStats.moodAverage}/5`} icon="smile" />
      </div>

      {/* New Entry Section */}
      <div className="col-span-12 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-white">New Entry</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <EntryOption
            title="Quick Notes"
            description="Capture quick thoughts and ideas"
            icon="pencil"
            href="/journals/notes"
          />
          <EntryOption
            title="Prompted Journal"
            description="Write with guided prompts"
            icon="message-circle"
            href="/journals/eraentry"
          />
          <EntryOption
            title="Long Journal"
            description="Deep dive into your thoughts"
            icon="edit"
            href="/journals/longjournal"
          />
        </div>
      </div>

      {/* Redirect to Long Journal Entries */}
      <div className="col-span-12 text-right mt-8">
        <Link
          href="/dashboard/pastentries/longjourn"
          className="text-blue-400 hover:underline text-sm"
        >
          View Long Journal Entries →
        </Link>
      </div>
    </div>
  )
}
