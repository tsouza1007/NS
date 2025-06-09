import DrawSvg from "@/app/playground/_components/draw-svg";

type HeroProps = {
  title: string;
  subtitle: string;
  primaryAction: {
    label: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  illustrationText?: string;
};

const Hero = ({
  title,
  subtitle,
  primaryAction,
  secondaryAction, 
}: HeroProps) => {
  return (
    <section className="grid grid-cols-12 col-span-12 col-start-1 col-end-13 w-full">
      {/* Image above text on mobile, side by side on md+ */}
      <div className="col-span-12 md:col-span-6 order-1 md:order-2 flex justify-center items-start mt-10 md:mt-0">
        <DrawSvg />
      </div>
      <div className="col-span-12 md:col-span-6 order-2 md:order-1 flex flex-col justify-center space-y-6 mt-10">
        <h1 className="text-4xl md:text-5xl  text-foreground font-extralight">{title}</h1>
        <p className="text-lg text-muted-foreground">{subtitle}</p>
        <div className="flex items-center gap-4">
          <button
            onClick={primaryAction.onClick}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"
          >
            {primaryAction.label}
          </button>
          {secondaryAction && (
            <a
              href={secondaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline text-muted-foreground hover:text-foreground transition"
            >
              {secondaryAction.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;