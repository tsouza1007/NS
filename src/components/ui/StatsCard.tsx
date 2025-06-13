// components/ui/StatsCard.tsx
'use client'

import { LucideIcon, Flame, Book, Clock, Smile } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: 'fire' | 'book' | 'clock' | 'smile';
}

const iconMap: Record<StatsCardProps['icon'], LucideIcon> = {
  fire: Flame,
  book: Book,
  clock: Clock,
  smile: Smile,
};

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon }) => {
  const Icon = iconMap[icon];

  return (
    <div className="bg-white/10 w-full rounded-2xl p-6 text-black dark:text-white shadow-lg flex flex-col items-start gap-2">
      <Icon className="w-6 h-6 text-blue-400" />
      <h3 className="text-sm text-black dark:text-white">{title}</h3>
      <p className="text-4xl font-semibold text-black dark:text-white mt-4">{value}</p>
    </div>
  );
};
