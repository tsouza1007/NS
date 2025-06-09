import { Flame, BookText, Clock, Smile } from "lucide-react";

export const dashboardCardData = [
  {
    title: "Current Streak",
    value: "7 days",
    icon: Flame,
    iconClassName: "text-orange-500",
  },
  {
    title: "Total Entries",
    value: 42,
    icon: BookText,
    iconClassName: "text-blue-500",
  },
  {
    title: "Time Spent",
    value: "12.5 hrs",
    icon: Clock,
    iconClassName: "text-green-500",
  },
  {
    title: "Mood Average",
    value: "4.2/5",
    icon: Smile,
    iconClassName: "text-yellow-500",
  },
]