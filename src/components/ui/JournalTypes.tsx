
import { FC } from "react";
import { LucideIcon } from "lucide-react";

interface JournalType {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Props {
  items: JournalType[];
}

const JournalTypes: FC<Props> = ({ items }) => {
  return (
    <section className=" col-start-1 col-end-13 flex-col items-center flex">
      <h2 className="text-2xl font-semibold mb-6 text-foreground">
        Different Types of Journaling
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, description }, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border bg-background text-foreground shadow-sm flex flex-col justify-start h-48 w-full"
          >
            <Icon className="w-6 h-6 mb-2" />
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JournalTypes;
