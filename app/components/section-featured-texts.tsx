import AnimatedElement from "./animated-section";

export default function SectionFeaturedTexts() {
  return (
    <div className="wrapper flex flex-col gap-10 lg:gap-16">
      <AnimatedElement className="flex flex-col gap-5 lg:gap-7 md:max-w-2/3">
        <h2 className="font-heading font-semibold text-5xl lg:text-7xl">
          my approach to UX.
        </h2>
        <p className="text-sm lg:text-base">
          Good UX is about removing friction and making complexity feel simple. I start by understanding the user’s goal and the context in which they’re interacting with a product.
        </p>
        <p className="text-sm lg:text-base">
          From there, I focus on clarity — structuring interfaces with thoughtful hierarchy, clear interactions, and deliberate visual decisions that guide users naturally through a flow.
        </p>
        <p className="text-sm lg:text-base">
          Because I work across design and engineering, I also think about UX as a system. Strong products rely on scalable components, consistent patterns, and front-end architecture that supports the experience long-term.        </p>
      </AnimatedElement>
      <AnimatedElement delay={0.1} className="flex flex-col gap-5 lg:gap-7 md:max-w-2/3 ml-auto">
        <h2 className="font-heading font-semibold text-5xl lg:text-7xl">
          my approach to engineering.
        </h2>
        <p className="text-sm lg:text-base">
          Good engineering is about building systems that are scalable and dependable. I focus on writing code that’s clear, maintainable, and easy for teams to extend — favoring simple solutions, consistent patterns, and thoughtful structure.
        </p>
        <p className="text-sm lg:text-base">
          Rather than treating features as isolated tasks, I approach front-end work as part of a larger system. Reusable components and well-organized architecture allow products to evolve without introducing unnecessary complexity.
        </p>
        <p className="text-sm lg:text-base">
          Because I work closely with design and product, I also see engineering as a key part of the user experience. Performance, accessibility, and responsiveness are considered from the start, helping ensure the final product feels polished and reliable.
        </p>
      </AnimatedElement>
    </div>
  );
}
