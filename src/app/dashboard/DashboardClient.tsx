// app/dashboard/DashboardClient.tsx
"use client";

import { useState } from "react";
import { StatsCard } from "@/components/ui/StatsCard";
import { EntryOption } from "@/components/ui/EntryOption";
import Link from "next/link";

interface DashboardStats {
  currentStreak: number;
  totalEntries: number;
  timeSpent: number;
  moodAverage: number;
}

export default function DashboardClient({ stats }: { stats: DashboardStats }) {
  const [localStats] = useState(stats);

  return (
    <div className=" col-span-12 min-h-screen w-full space-y-16 ">
      {/* Stats Section */}
      <div className="flex h-fit w-full justify-between items-center lg:flex-nowrap sm:flex-wrap gap-4">
      {/* <div className="flex-1 min-w-[140px] max-w-full"> */}
        <StatsCard
          title="Current Streak"
          value={`${localStats.currentStreak.toString()} days`}
          icon="fire"
        />
        <StatsCard
          title="Total Entries"
          value={localStats.totalEntries.toString()}
          icon="book"
        />
        <StatsCard
          title="Time Spent"
          value={`${localStats.timeSpent} hrs`}
          icon="clock"
        />
        <StatsCard
          title="Mood Average"
          value={`${localStats.moodAverage.toFixed(1)}/5`}
          icon="smile"
        />
        {/* </div> */}
      </div>

      {/* New Entry Section */}
      <div className="col-span-12 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-white">New Entry</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <EntryOption
            title="Quick Notes"
            description="Capture quick thoughts and ideas"
            icon="pencil"
            href="/notes"
          />
          <EntryOption
            title="Prompted Journal"
            description="Write with guided prompts"
            icon="message-circle"
            href="/eraentry"
          />
          <EntryOption
            title="Long Journal"
            description="Deep dive into your thoughts"
            icon="edit"
            href="/longjournal"
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
  );
}
