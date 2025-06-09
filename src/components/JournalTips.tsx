import { FC } from "react";
import { LucideIcon } from "lucide-react";

interface JournalTips {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Props {
  items: JournalTips[];
}

const JournalTips: FC<Props> = ({ items }) => {
  return (
    <section id="about" className="col-start-1 col-end-13 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6 text-foreground">Tips of Journaling</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {items.map(({ icon: Icon, title, description }, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border bg-background text-foreground shadow-sm"
          >
            <Icon className="w-6 h-6 mb-2" />
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
//card for the journal tips
export default JournalTips;
