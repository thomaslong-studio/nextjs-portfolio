import WorkPageTemplate from "@/app/components/work-page-template";
import { ProjectDetailCard } from "@/app/components/work-project-details";

export default function RentPanda() {
  const cards: ProjectDetailCard[] = [
    {
      title: "project overview",
      description:
        "Rent Panda is a modern rental platform helping renters and landlords connect across Ontario. With tools for tenant and landlord verification, in-app messaging, and secure rent payments, Rent Panda is redefining what it means to rent locally. The goal of this project was to enhance usability and functionality, creating a more intuitive and trustworthy experience for users on both sides of the rental process.",
    },
    {
      title: "my role",
      description:
        "I contributed to both the UI design and front-end development of Rent Panda's platform, working closely with the design team and CTO to bring new features and visual updates to life.",
    },
    {
      title: "key contributions",
      description: (
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Landing Pages:</strong> Designed and developed new landing pages that reflect the brand's tone and improve conversion.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>App Flow Customization:</strong> Translated UX designs from Figma into functional React components, refining user journeys and interface consistency.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Analytics & SEO Enhancements:</strong> Implemented Google Analytics (gtags) and improved page titles and routing structure across the app for better tracking and visibility.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Markup Improvements:</strong> Enhanced semantic structure and accessibility across several site areas.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Collaboration:</strong> Worked closely with the design team, developers, and company leadership to align product vision and implementation.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Visual & Motion Design:</strong> Created and animated visual assets for both web and social media, using tools like Adobe XD, Illustrator, Photoshop, and After Effects.</span>
          </li>
        </ul>
      ),
    },
    {
      title: "technical highlights",
      description: (
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Built with React and SASS for modular, maintainable front-end code.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Collaborated via Git, GitHub, and Bitbucket for version control and deployment.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Designed using Figma and Adobe Creative Suite for consistent, branded visuals.</span>
          </li>
        </ul>
      ),
    },
    {
      title: "outcome",
      description:
        "The result was a cleaner, faster, and more engaging rental experience — giving Rent Panda the polished, functional foundation it needed as it grew into one of Ontario's most trusted rental platforms.",
    },
  ];

  return (
    <WorkPageTemplate
      title="rent panda"
      description="A modern rental platform helping renters and landlords connect across Ontario — redefining what it means to rent locally."
      what="UI Design & Development"
      why="Platform Enhancement"
      how="React, SASS, Figma, Adobe Creative Suite"
      imageSrc="/rent_panda_2.webp"
      imageAlt="Rent Panda project"
      cards={cards}
      headingText="concept, design, and development"
      liveSiteUrl="https://rentpanda.ca/"
    />
  );
}

