// components/ui/card.tsx
import { ReactNode } from "react";
import  {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { FireExtinguisher } from "lucide-react";

type DashboardCardProps = {
  title?: string;
  value?: string | number;
  icon?: ReactNode;
};

export default function DashboardCard({ title, value, icon }: DashboardCardProps) {
  return (
    // <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm p-4 w-full flex flex-col justify-between gap-2">
    //   <div className="flex items-center justify-between">
    //     <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h2>
    //     <div className="text-xl">{icon}</div>
    //   </div>
    //   <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
    // </div>
    <Card className="col-span-3">
  <CardHeader>
    <CardTitle className="flex justify-between">Card Title <FireExtinguisher/></CardTitle>
    {/* <CardDescription>Card Description</CardDescription> */}
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
  );
}
