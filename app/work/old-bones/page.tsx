import WorkPageTemplate from "@/app/components/work-page-template";
import { ProjectDetailCard } from "@/app/components/work-project-details";

export default function OldBones() {
  const cards: ProjectDetailCard[] = [
    {
      title: "project overview",
      description:
        "Old Bones Therapy is a brand built for the athletes who never quit — providing protective gear, braces, and recovery tools for skaters, BMX riders, and action sports enthusiasts who want to stay active at any age. Their site needed to evolve alongside their growing customer base, improving usability, discoverability, and conversion without losing its rugged, authentic vibe.",
    },
    {
      title: "my role",
      description:
        "I focused on enhancing the Shopify storefront through a mix of custom front-end development and UX improvements, helping to modernize the experience while keeping it fast, modular, and scalable for the brand's needs.",
    },
    {
      title: "key contributions",
      description: (
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Header & Mega Menu:</strong> Designed and built a new navigation system with asynchronous search, allowing for quick product discovery without page reloads.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Custom Cart Drawer:</strong> Developed a smooth, interactive cart drawer to improve checkout flow and showcase upsells in context.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Collections Page:</strong> Created a new collections template featuring collection cards with swatch pickers, giving customers a more visual, intuitive way to shop.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Product Detail Page Enhancements:</strong> Added upsells and add-ons to increase AOV and create a more dynamic shopping experience.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span><strong>Modular Shopify Sections:</strong> Built flexible, reusable sections to make ongoing site updates faster and easier for the Old Bones team.</span>
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
            <span>Built with Shopify + Liquid, leveraging JavaScript for async features and interactivity.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Focused on performance, maintainability, and reusable modular structures across all components.</span>
          </li>
        </ul>
      ),
    },
    {
      title: "outcome",
      description:
        "The result is a smoother, more interactive shopping experience that helps Old Bones Therapy's customers find the right gear faster — while giving the brand a scalable, future-proof foundation to continue growing their e-commerce presence.",
    },
  ];

  return (
    <WorkPageTemplate
      title="old bones"
      description="Old Bones Therapy creates protective gear and recovery products for action sports enthusiasts who never slow down. I helped modernize their Shopify storefront with new navigation, cart features, and interactive product experiences."
      what="Front-end Dev"
      why="Improve usability and performance"
      how="Shopify, HTML, CSS, JavaScript, Web Components"
      imageSrc="/old_bones_2.webp"
      imageAlt="Old Bones project"
      liveSiteUrl="https://oldbonestherapy.com/"
      cards={cards}
      headingText="development with impact"
    />
  );
}

