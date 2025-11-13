import WorkPageTemplate from "@/app/components/work-page-template";
import { ProjectDetailCard } from "@/app/components/work-project-details";

export default function Revant() {
  const cards: ProjectDetailCard[] = [
    {
      title: "project overview",
      description:
        "Revant Cosmetics is a beauty brand redefining makeup for women as they age — offering products developed through years of research, testing, and refinement. Their focus on thoughtful formulas and ageless confidence extends to their digital presence, where the site needed to feel elegant, modern, and empowering.",
    },
    {
      title: "my role",
      description:
        "As part of the development team, I worked on feature development and feature-specific design, helping to elevate both functionality and visual polish across the site. My work combined modular flexibility with a strong attention to brand detail, ensuring each feature looked and felt seamless within the Revant experience.",
    },
    {
      title: "key contributions",
      description: (
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Mega Menu:</strong> Designed and developed a refined, easy-to-navigate menu structure for product discovery and brand storytelling.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Cart Drawer:</strong> Built an interactive cart drawer with integrated upsells to encourage product exploration and increase average order value.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Product Detail Pages:</strong> Enhanced PDPs with updated layouts and dynamic sections to better highlight product benefits and related items.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Flexible Shopify Sections:</strong> Created reusable, modular content sections to give the Revant team control over page composition and updates.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Bundle Builder (Hero Feature):</strong> Developed a fully custom bundle builder using Web Components and LitElement for state management and dynamic updates. This allowed customers to curate personalized product bundles with smooth, app-like interactivity — one of the site's standout experiences.</span>
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
            <span>Built on Shopify using Liquid, JavaScript, and LitElement for advanced component-driven functionality.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Combined custom design work in Figma with client-supplied assets for a consistent visual language.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Prioritized scalability, performance, and accessibility across all new components.</span>
          </li>
        </ul>
      ),
    },
    {
      title: "outcome",
      description:
        "The result is a sophisticated, performant e-commerce experience that captures Revant's mission — beauty built for every stage of life. The new interactive features not only improved conversion and engagement but also gave the brand's team more creative control and flexibility within Shopify.",
    },
  ];

  return (
    <WorkPageTemplate
      title="revant"
      description="Redefining makeup for women as they age — beauty built for every stage of life."
      what="Development & Design"
      why="Brand Elevation"
      how="Shopify, Liquid, JavaScript, LitElement"
      imageSrc="/revant_cosmetics.webp"
      imageAlt="Revant Cosmetics project"
      cards={cards}
      headingText="concept, design, and development"
      liveSiteUrl="https://revantcosmetics.com/"
    />
  );
}

