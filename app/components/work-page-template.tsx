import WorkHero from "./work-hero";
import WorkProjectDetails, { ProjectDetailCard } from "./work-project-details";
import SectionContact from "./section-contact";
import SectionMarquee from "./section-marquee";

interface WorkPageTemplateProps {
  title: string;
  description: string;
  what: string;
  why: string;
  how: string;
  imageSrc: string;
  imageAlt: string;
  liveSiteUrl?: string;
  cards: ProjectDetailCard[];
}

export default function WorkPageTemplate({
  title,
  description,
  what,
  why,
  how,
  imageSrc,
  imageAlt,
  liveSiteUrl,
  cards,
}: WorkPageTemplateProps) {
  return (
    <div className="font-sans">
      <main className="flex flex-col">
        <div className="flex flex-col w-full">
          <WorkHero
            title={title}
            description={description}
            what={what}
            why={why}
            how={how}
            imageSrc={imageSrc}
            imageAlt={imageAlt}
          />
          
          <WorkProjectDetails
            liveSiteUrl={liveSiteUrl}
            cards={cards}
          />
          <SectionMarquee items={[
            "Creative Development",
            "Design-Driven Code",
            "Interactive Experiences",
            "Scalable Architecture",
            "Clean Code",
            "Collaboration",
            "Detail-Oriented",
            "User-Centered Design"
          ]} />
          <SectionContact />
        </div>
      </main>
    </div>
  );
}

