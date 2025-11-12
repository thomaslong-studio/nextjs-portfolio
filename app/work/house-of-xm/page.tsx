import WorkPageTemplate from "@/app/components/work-page-template";
import { ProjectDetailCard } from "@/app/components/work-project-details";

export default function HouseOfXM() {
  const cards: ProjectDetailCard[] = [
    {
      title: "project overview",
      description:
        "House of XM is an experience marketing agency, and the goal of the new website was to capture their energy online with sleek design, intuitive navigation, and personality.",
    },
    {
      title: "my role",
      description:
        "I was responsible for both design (Figma, visuals, structure) and development (Next.js, Tailwind CSS, Prismic CMS), emphasizing performance, flexibility, and ease of client updates.",
    },
    {
      title: "key contributions",
      description: (
        <ul className="flex flex-col gap-1">
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>Responsive header & mega menu</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>Bilingual footer & language selector (EN/FR)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>Dynamic multi-step intake forms</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>Flexible content sections via Prismic</span>
          </li>
        </ul>
      ),
    },
    {
      title: "highlights",
      description: (
        <ul className="flex flex-col gap-1">
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>Balanced design precision</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>Delivering a site reflecting House of XM's creative energy</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>Building reusable components for long-term maintainability</span>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <WorkPageTemplate
      title="house of xm"
      description="House of XM is an experiential marketing agency creating impactful experiences for cool a** brands."
      what="Design & Development"
      why="Rebrand"
      how="Next.js, Tailwind & Prismic"
      imageSrc="/house_of_xm.webp"
      imageAlt="House of XM project"
      liveSiteUrl="https://houseofxm.com"
      cards={cards}
    />
  );
}

