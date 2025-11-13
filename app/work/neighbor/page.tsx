import WorkPageTemplate from "@/app/components/work-page-template";
import { ProjectDetailCard } from "@/app/components/work-project-details";

export default function Neighbor() {
  const cards: ProjectDetailCard[] = [
    {
      title: "project overview",
      description:
        "Neighbor is a modern outdoor furniture brand built around craftsmanship, comfort, and connection. Their website plays a key role in showcasing products and driving online growth. The goal of this project was to enhance the shopping experience through smarter design systems, intuitive interactions, and performance-focused development.",
    },
    {
      title: "my role",
      description:
        "As a front-end developer, I focused on building and refining high-impact features that directly improved user experience and conversion rates. While the design was provided by Neighbor's internal team, my work centered on bringing functionality, flexibility, and scalability to the site's front end.",
    },
    {
      title: "key contributions",
      description: (
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Cart Drawer:</strong> Built an intuitive, high-performing cart drawer with upsells and add-ons to encourage increased order value.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Product Detail Pages (PDP):</strong> Enhanced PDPs with dynamic upsells, add-ons, and modular content sections.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Navigation & Search:</strong> Rebuilt the main navigation with a flexible mega menu and improved site search for faster product discovery.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Collection Pages:</strong> Created two styles — one rich in editorial content and another featuring product filtering capabilities for a smoother browsing experience.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Product Cards:</strong> Improved visual consistency and performance with reusable, scalable components.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>3D "Build Your Own Sectional" Integration:</strong> Implemented an interactive experience for customers to visualize custom furniture configurations.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Custom Swatch Kit Builder:</strong> Developed a custom interface allowing users to order material samples in a streamlined way.</span>
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
            <span>Built with performance and scalability in mind, utilizing custom HTML elements (Web Components) for maintainability and reuse.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Implemented a variety of accessibility enhancements across interactive elements to ensure an inclusive user experience.</span>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <WorkPageTemplate
      title="neighbor"
      description="Bringing people together with thoughtfully designed outdoor furniture"
      what="Front-end Dev"
      why="Improve sales"
      how="Shopify, HTML, CSS, JavaScript, Web Components"
      imageSrc="/neighbor_2.webp"
      imageAlt="Neighbor project"
      liveSiteUrl="https://www.hineighbor.com/"
      cards={cards}
      headingText="development with impact"
    />
  );
}

