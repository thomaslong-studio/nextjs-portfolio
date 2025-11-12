import Image from "next/image";
import SectionHero from "./components/section-hero";
import SectionFeaturedTexts from "./components/section-featured-texts";
import SectionExperience from "./components/section-experience";
import WorkSlider from "./components/work-slider";
import SectionMarquee from "./components/section-marquee";
import SectionContact from "./components/section-contact";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col">
        <SectionHero />
        <SectionFeaturedTexts />
        <SectionExperience />
        <WorkSlider />
        <SectionMarquee items={[
          "Creative Development",
          "Design-Driven Code",
          "Interactive Experiences",
          "Scalable Architecture",
          "Clean Code",
          "Collaboration",
          "Detail-Oriented",
          "User-Centered Design"
        ]} />
        <SectionContact />
      </main>
    </div>
  );
}
