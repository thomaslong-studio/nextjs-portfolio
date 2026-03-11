import WorkPageTemplate from "@/app/components/work-page-template";
import { ProjectDetailCard } from "@/app/components/work-project-details";

export default function Neighbor() {
  const cards: ProjectDetailCard[] = [
    {
      title: "The Problem",
      description: (
        <div className="flex flex-col gap-3">
          <p>Neighbor is a modern outdoor furniture brand focused on craftsmanship, comfort, and thoughtful design. Their website is a critical part of how customers discover products, explore configurations, and make purchasing decisions.</p>
          <p>As the brand continued to grow, the website needed improvements to support a better shopping experience. Product discovery, navigation, and cart interactions all presented opportunities to reduce friction and increase engagement. The challenge was to enhance these experiences while maintaining strong performance and building scalable front-end systems that could support ongoing growth.</p>
        </div>
      ),
    },
    {
      title: "Collaboration & Discovery",
      description: (
        <div className="flex flex-col gap-3">
          <p>Working closely with Neighbor’s internal design and product teams, the goal was to translate new UX concepts into reliable, high-performing front-end implementations.</p>
          <p>Designs provided by the internal team focused on improving key customer journeys such as browsing collections, evaluating product configurations, and increasing cart value through relevant upsells.</p>
          <p>My role was to ensure these designs translated into responsive, accessible, and performant components that integrated smoothly into the Shopify environment while remaining maintainable for future development.</p>
        </div>
      ),
    },
    {
      title: "UX Implementation",
      description: (
        <div className="flex flex-col gap-3">
          <p>Much of the work focused on improving critical moments in the shopping experience.</p>
          <p>Navigation and search were redesigned to help users discover products more easily through a flexible mega menu and improved search interactions.</p>
          <p>Product detail pages were enhanced with dynamic content sections and contextual add-ons, allowing customers to explore complementary products and configure purchases more naturally.</p>
          <p>The cart experience was also redesigned through the implementation of a cart drawer that introduces relevant upsells and add-ons without interrupting the shopping flow.</p>
          <p>Collection pages were rebuilt to support two browsing modes: editorial-driven pages designed for storytelling and inspiration, and product-focused layouts featuring filtering capabilities for efficient product discovery.</p>
        </div>
      ),
    },
    {
      title: "Engineering Approach",
      description: (
        <div className="flex flex-col gap-3">
          <p>The front-end architecture prioritized performance, scalability, and maintainability.</p>
          <p>Reusable components were developed using custom HTML elements (Web Components), allowing key interface patterns such as product cards and interactive modules to remain consistent and easy to extend across the site.</p>
          <p>Interactive features such as the 3D “Build Your Own Sectional” experience and the custom swatch kit builder were implemented to help customers better visualize products and order material samples in a streamlined way.</p>
          <p>Accessibility improvements were also implemented across interactive components to ensure the site remained usable for a wide range of users and devices.</p>
        </div>
      ),
    },
    {
      title: "Key Features",
      description: (
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>High-performing cart drawer with contextual upsells and add-ons</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Enhanced product detail pages with modular content and dynamic add-ons</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Flexible mega menu navigation and improved product search</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Dual collection page layouts supporting editorial storytelling and product filtering</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Reusable product card components for consistency and performance</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Interactive 3D sectional configurator</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Custom swatch kit builder for ordering material samples</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Results",
      description: (
        <div className="flex flex-col gap-3">
          <p>These improvements helped create a more intuitive and engaging shopping experience while strengthening the technical foundation of the site.</p>
          <p>The work introduced scalable front-end systems that support ongoing feature development, improved product discovery through enhanced navigation and search, and increased opportunities for higher cart value through contextual upsells.</p>
          <p>At the same time, the component-driven architecture ensured the site remained performant, accessible, and easier to maintain as the platform continues to evolve.</p>
        </div>
      ),
    },
    {
      title: "What This Project Demonstrates",
      description:
        "This project highlights the importance of translating strong UX concepts into well-engineered front-end systems. By focusing on reusable components, performance, and accessibility, the implementation ensured the experience not only matched the design vision but also remained scalable for future growth.",
    },
  ];

  return (
    <WorkPageTemplate
      title="neighbor"
      description="Enhancing Neighbor’s eCommerce experience through scalable front-end systems, improved product discovery, and conversion-focused interactions."
      what="Front-end development and UX implementation."
      why="Improve product discovery and increase conversion."
      how="Shopify, HTML, CSS, JavaScript, Web Components"
      imageSrc="/neighbor_2.webp"
      imageAlt="Neighbor project"
      liveSiteUrl="https://www.hineighbor.com/"
      cards={cards}
      headingText="development with impact"
    />
  );
}

