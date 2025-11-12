import WorkPageTemplate from "@/app/components/work-page-template";
import { ProjectDetailCard } from "@/app/components/work-project-details";

export default function Neighbor() {
  const cards: ProjectDetailCard[] = [
    {
      title: "project overview",
      description:
        "This is a placeholder for the Neighbor project overview. Add your project details, case study, and any relevant information here.",
    },
    {
      title: "my role",
      description:
        "This is a placeholder for my role in the Neighbor project. Add your role details here.",
    },
    {
      title: "key contributions",
      description: (
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Contribution one description goes here</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Contribution two description goes here</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Contribution three description goes here</span>
          </li>
        </ul>
      ),
    },
    {
      title: "highlights",
      description: (
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Highlight one description goes here</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Highlight two description goes here</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Highlight three description goes here</span>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <WorkPageTemplate
      title="neighbor"
      description="This is a placeholder for the Neighbor project description. Add your project details, case study, and any relevant information here."
      what="Development"
      why="Project goal"
      how="Technologies used"
      imageSrc="/thomas_l_hero.png"
      imageAlt="Neighbor project"
      liveSiteUrl="https://neighbor.com"
      cards={cards}
    />
  );
}

