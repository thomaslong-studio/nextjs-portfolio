import WorkPageTemplate from "@/app/components/work-page-template";
import { ProjectDetailCard } from "@/app/components/work-project-details";

export default function Highland() {
  const cards: ProjectDetailCard[] = [
    {
      title: "The Problem",
      description: (
        <div className="flex flex-col gap-3">
          <p>Highland is a non-toxic, all-natural haircare brand founded by college friends who set out to create cleaner, more sustainable products without compromising performance. As the brand continued to grow, their digital presence needed to better reflect the quality and intentionality behind their products.</p>
          <p>The challenge was to elevate the website experience while maintaining the brand’s simple, natural aesthetic. The site also needed to become more flexible so the Highland team could easily update content, expand product storytelling, and evolve the storefront without relying on developer support for every change.</p>
        </div>
      ),
    },
    {
      title: "Collaboration & Discovery",
      description: (
        <div className="flex flex-col gap-3">
          <p>The project involved close collaboration with the brand team to align the website experience with Highland’s evolving identity.</p>
          <p>Through discussions and iterative design work, the focus became creating a digital experience that felt clean, approachable, and authentic to the brand. Navigation needed to highlight Highland’s products and story more clearly, while the overall interface required refinements to spacing, hierarchy, and visual balance.</p>
          <p>My role involved translating these design ideas into scalable Shopify components while ensuring the experience remained cohesive across the entire storefront.</p>
        </div>
      ),
    },
    {
      title: "UX Implementation",
      description: (
        <div className="flex flex-col gap-3">
          <p>Much of the work focused on improving how users explore products and navigate the site.</p>
          <p>A new header and mega menu were designed and developed to create a clear, intuitive navigation structure that highlights product collections and key brand content.</p>
          <p>Product detail pages were enhanced with updated layouts and integrated user-generated video content. This allowed real customer experiences to appear directly within the product page, helping visitors better understand the products and how they perform.</p>
          <p>Across the site, various design refinements were implemented to improve visual hierarchy, spacing, and overall flow, creating a more polished and cohesive user experience.</p>
        </div>
      ),
    },
    {
      title: "Engineering Approach",
      description: (
        <div className="flex flex-col gap-3">
          <p>The front-end architecture focused on flexibility, scalability, and maintainability.</p>
          <p>Using Shopify’s section-based architecture, a library of reusable modular sections was developed to allow the Highland team to easily build and update pages without needing custom development.</p>
          <p>These modular components ensured that new pages and content could be created while maintaining visual consistency and performance across the site.</p>
          <p>The site was developed using Shopify, Liquid, and JavaScript, with a strong emphasis on reusable components and clean front-end structure.</p>
        </div>
      ),
    },
    {
      title: "Key Features",
      description: (
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Clean header and mega menu highlighting collections and brand storytelling</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Flexible Shopify sections for building pages and updating content</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Enhanced product detail pages with integrated UGC video content</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Design refinements across the site to improve hierarchy, spacing, and flow</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-link-green mt-1">•</span>
            <span>Modular component system supporting long-term scalability</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Results",
      description: (
        <div className="flex flex-col gap-3">
          <p>The updated website provides Highland with a more polished and cohesive digital experience that aligns with their brand values.</p>
          <p>The modular section architecture allows the team to easily update content and create new pages as the brand grows, while design refinements across navigation and product pages improve usability and product discovery.</p>
          <p>The result is a Shopify storefront that feels clean, flexible, and thoughtfully built—mirroring the simplicity and intentionality of Highland’s products.</p>
        </div>
      ),
    },
  ];

  return (
    <WorkPageTemplate
      title="highland"
      description="Elevating Highland’s Shopify storefront through refined design implementation, modular components, and a scalable content system."
      what="Shopify front-end development and design implementation."
      why="Improve brand presentation and site flexibility."
      how="Shopify Liquid, HTML, CSS, JavaScript, Web Components"
      imageSrc="/highland_2.webp"
      imageAlt="Highland project"
      liveSiteUrl="https://www.highland.style/"
      cards={cards}
      headingText="development with impact"
    />
  );
}

