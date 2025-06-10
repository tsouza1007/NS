// components/ui/EntryOption.tsx
'use client'

import { LucideIcon, Pencil, MessageCircle, Edit } from 'lucide-react';
import Link from 'next/link';

interface EntryOptionProps {
  title: string;
  description: string;
  icon: 'pencil' | 'message-circle' | 'edit';
  href: string;
}

const iconMap: Record<EntryOptionProps['icon'], LucideIcon> = {
  pencil: Pencil,
  'message-circle': MessageCircle,
  edit: Edit,
};

export const EntryOption: React.FC<EntryOptionProps> = ({
  title,
  description,
  icon,
  href,
}) => {
  const Icon = iconMap[icon];

  return (
    <Link href={href} className="bg-white/10 rounded-2xl p-6 text-white shadow-lg hover:bg-white/20 transition duration-200">
      <div className="flex flex-col gap-2">
        <Icon className="w-6 h-6 text-blue-400" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </Link>
  );
};
