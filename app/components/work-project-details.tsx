import Link from "next/link";
import { ReactNode } from "react";
import AnimatedElement from "./animated-section";

export interface ProjectDetailCard {
  title: string;
  description: ReactNode;
}

interface WorkProjectDetailsProps {
  liveSiteUrl?: string;
  cards: ProjectDetailCard[];
}

export default function WorkProjectDetails({
  liveSiteUrl,
  cards,
}: WorkProjectDetailsProps) {
  return (
    <div className="wrapper w-full flex flex-col lg:flex-row gap-10 lg:gap-16 relative">
      <AnimatedElement className="flex flex-col gap-6 lg:flex-1 lg:sticky lg:top-50 lg:self-start lg:h-fit">
        <h2 className="font-heading font-semibold text-5xl lg:text-7xl">
          concept, design, and development
        </h2>
        {liveSiteUrl && (
          <Link
            href={liveSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit gap-2 text-xl items-center px-6 py-2 text-background border border-foreground bg-foreground font-heading cursor-pointer transition-transform duration-200 ease-out transform shadow-[0_0_0_rgba(0,0,0,0)] hover:-translate-y-0.5 hover:shadow-[0_8px_14px_theme(colors.foreground/0.16)]"
          >
            view live site
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.54164 -1.38185e-05L0.54164 1.52748L6.59205 1.5329L-2.60558e-05 8.12497L1.08331 9.20831L7.67538 2.61623L7.6808 8.66664H9.20829V-1.38185e-05H0.54164Z" fill="#2B2B2B"/>
            </svg>
          </Link>
        )}
      </AnimatedElement>

      <div className="flex flex-col gap-6 lg:flex-1 lg:sticky lg:top-50 lg:self-start">
        {cards.map((card, index) => (
          <AnimatedElement key={index} delay={0.1 + index * 0.05}>
            <div className="border border-accent-soft p-4 lg:p-6 flex flex-col gap-3">
              <h3 className="font-heading font-semibold text-2xl">
                {card.title}
              </h3>
              <div className="text-sm text-accent-light">
                {card.description}
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </div>
  );
}

