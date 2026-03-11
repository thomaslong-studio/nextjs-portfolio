import WorkPageTemplate from "@/app/components/work-page-template";
import { ProjectDetailCard } from "@/app/components/work-project-details";

export default function HouseOfXM() {
  const cards: ProjectDetailCard[] = [
    {
      title: "the problem",
      description:
        "House of XM is an experiential marketing agency known for creating high-energy brand activations and immersive campaigns. Their previous website no longer reflected the quality of their work or the personality of the brand. The site lacked clear storytelling around their projects, navigation was difficult to scan, and the overall experience did not effectively communicate the creativity and scale of the agency's work. Additionally, the rebuild needed to preserve the SEO value the existing site had accumulated while improving performance and accessibility. The challenge was to design and build a modern, expressive website that captured the agency's energy while remaining intuitive, fast, and easy for the client to manage.",
    },
    {
      title: "research & discovery",
      description:
        "The project began with a discovery phase working closely with the client to understand their goals, audience, and how potential clients evaluate experiential agencies. Through discussions and competitive analysis, several priorities became clear:",
    },
    {
      title: "research priorities",
      description: (
        <ul className="flex flex-col gap-1">
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>The work needed to take center stage through strong visual storytelling</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>Visitors needed to quickly understand the agency's capabilities and services</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>Navigation had to be simplified so users could easily explore projects and services</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>The site needed to support full bilingual content (English and French)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>The rebuild needed to preserve existing SEO value and search rankings</span>
          </li>
        </ul>
      ),
    },
    {
      title: "ux strategy",
      description:
        "The UX approach focused on clarity, storytelling, and discoverability. The information architecture was restructured to guide users through the agency's work and capabilities in a natural progression. Navigation patterns were simplified, and the header and mega menu were designed to make key sections immediately accessible. Special attention was given to how visitors explore agency work. Case studies and visual content were prioritized so users could quickly understand the scale and creativity of the projects House of XM produces. Accessibility and usability were also considered from the beginning to ensure the experience worked seamlessly across devices and audiences.",
    },
    {
      title: "design",
      description: (
        <ul className="flex flex-col gap-1">
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>Page layouts and visual hierarchy</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>Responsive behavior across breakpoints</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>Navigation and interaction patterns</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>Content modules and reusable UI components</span>
          </li>
        </ul>
      ),
    },
    {
      title: "engineering",
      description:
        "The site was built using Next.js, Tailwind CSS, and Prismic CMS to deliver a fast, scalable, and flexible platform. Performance was optimized through server-side rendering, optimized assets, and efficient component patterns, resulting in strong Lighthouse scores. SEO preservation was handled through careful URL structures, metadata, and redirects to maintain existing rankings. Full bilingual support was implemented with an integrated language switcher in the header and translation-aware content structures in the CMS. A modular content system in Prismic allows the client to create new pages and update content without developer support.",
    },
    {
      title: "key features",
      description: (
        <ul className="flex flex-col gap-1">
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>Responsive header with expandable mega menu</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>Integrated English / French language switching</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>Dynamic multi-step intake forms for new client inquiries</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>Flexible modular content sections via Prismic CMS</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-link-green">•</span>
            <span>Reusable component architecture for long-term scalability</span>
          </li>
        </ul>
      ),
    },
    {
      title: "results",
      description:
        "The final website successfully translates House of XM's creative energy into a modern digital experience. The rebuild delivered a clear and intuitive user experience, strong SEO continuity from the previous site, high Lighthouse performance scores with fast load times, and a flexible CMS that allows the client to easily manage content. The result is a site that not only showcases the agency's work effectively but also provides a scalable platform for future growth.",
    },
    {
      title: "what i learned",
      description:
        "This project reinforced the importance of designing expressive websites without sacrificing clarity. Capturing the personality of the brand was important, but the experience still needed to remain intuitive and structured for users exploring the agency's work. Planning the entire experience in Figma before development also proved invaluable. It allowed for faster iteration with the client and ensured the final build closely matched the intended design system. Finally, rebuilding an established website highlighted how critical SEO continuity and performance optimization are. Maintaining search visibility while delivering a significantly faster experience required thoughtful planning, but it ultimately resulted in a stronger platform for the agency moving forward.",
    },
  ];

  return (
    <WorkPageTemplate
      title="house of xm"
      description="A bilingual marketing website designed and engineered to showcase House of XM’s experiential work while delivering strong UX, preserved SEO value, and high-performance page speeds."
      what="UI/UX Design & Front-End Development"
      why="To launch a fast, bilingual site that showcases the agency’s new brand."
      how="Figma, Next.js, Tailwind & Prismic"
      imageSrc="/house_of_xm_2.webp"
      imageAlt="House of XM project"
      liveSiteUrl="https://houseofxm.com"
      cards={cards}
      headingText="concept, design, and development"
    />
  );
}

