import WorkPageTemplate from "@/app/components/work-page-template";
import { ProjectDetailCard } from "@/app/components/work-project-details";

export default function Highland() {
  const cards: ProjectDetailCard[] = [
    {
      title: "project overview",
      description:
        "Highland is a non-toxic, all-natural haircare brand founded by college friends who set out to create cleaner, more sustainable products that actually perform. Their e-commerce site reflects that ethos — simple, natural, and thoughtfully crafted. The goal was to elevate their online presence with a design and development approach that felt as authentic and refined as their products.",
    },
    {
      title: "my role",
      description:
        "I contributed to both Shopify development and design implementation, helping to create a cohesive digital experience that aligned with Highland's growing brand identity. My work focused on building flexible, reusable components while maintaining a visually polished and consistent interface across the site.",
    },
    {
      title: "key contributions",
      description: (
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Header & Mega Menu:</strong> Designed and developed a clean, intuitive navigation system that highlights Highland's product collections and story.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Flexible Shopify Sections:</strong> Built reusable, modular sections to give the Highland team freedom to easily update content and create new pages without developer support.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Product Detail Pages (PDP):</strong> Enhanced PDPs with new layouts and UGC video content, allowing real customer experiences to come to life on the product page.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Design Enhancements:</strong> Collaborated on design refinements across multiple areas of the site to improve visual balance, spacing, and user flow.</span>
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
            <span>Fully developed on Shopify, leveraging Liquid, JavaScript, and modular section architecture for scalability.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Prioritized reusability, performance, and brand consistency across all new components.</span>
          </li>
        </ul>
      ),
    },
    {
      title: "outcome",
      description:
        "The result is a fast, flexible, and easy-to-manage Shopify storefront that grows with the brand. Highland's digital experience now matches their mission — clean, natural, and thoughtfully built.",
    },
  ];

  return (
    <WorkPageTemplate
      title="highland"
      description="Your hair’s health & style made effortless with Highland."
      what="Front-end Dev"
      why="Improve sales"
      how="Shopify, HTML, CSS, JavaScript, Web Components"
      imageSrc="/highland_2.webp"
      imageAlt="Highland project"
      liveSiteUrl="https://www.highland.style/"
      cards={cards}
      headingText="development with impact"
    />
  );
}

