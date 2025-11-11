import Image from "next/image";
import SectionHero from "./components/section-hero";
import SectionFeaturedTexts from "./components/section-featured-texts";
import SectionExperience from "./components/section-experience";
import WorkSlider from "./components/work-slider";
import SectionContact from "./components/section-contact";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col">
        <SectionHero />
        <SectionFeaturedTexts />
        <SectionExperience />
        <WorkSlider />
        <SectionContact />
      </main>
    </div>
  );
}
