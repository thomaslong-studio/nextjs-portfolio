import AnimatedElement from "./animated-section";

export default function SectionFeaturedTexts() {
  return (
    <div className="wrapper flex flex-col gap-10 lg:gap-16">
      <AnimatedElement className="flex flex-col gap-5 lg:gap-7 md:max-w-2/3">
        <h2 className="font-heading font-semibold text-5xl lg:text-7xl">
          a multifaceted skillset.
        </h2>
        <p className="text-sm lg:text-base">
          I blend front-end development, UX strategy, and design — but more
          than that, I craft clean, thoughtful code. Every project is an
          opportunity to build something intuitive, efficient, and built to
          last, with both performance and user experience in mind.
        </p>
      </AnimatedElement>
      <AnimatedElement delay={0.1} className="flex flex-col gap-5 lg:gap-7 md:max-w-2/3 ml-auto">
        <h2 className="font-heading font-semibold text-5xl lg:text-7xl">
          more than just technical skills.
        </h2>
        <p className="text-sm lg:text-base">
          Beyond the code, I bring a strong set of soft skills that keep
          projects running smoothly. I adapt quickly to new challenges,
          learn on the fly, and stay dependable under pressure. With a sharp
          eye for time management and a knack for critical thinking, I
          handle complex tasks with ease. Collaboration is at the heart of
          how I work—I thrive in team settings, value clear communication,
          and bring a positive, solutions-focused mindset to every project.
        </p>
      </AnimatedElement>
    </div>
  );
}
