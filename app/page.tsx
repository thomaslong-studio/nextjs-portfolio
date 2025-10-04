import Image from "next/image";
import SectionHero from "./components/section-hero";
import SectionFeaturedTexts from "./components/section-featured-texts";
import SectionExperience from "./components/section-experience";
import SectionContact from "./components/section-contact";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <SectionHero />
        <SectionFeaturedTexts />
        <SectionExperience />
        <SectionContact />
      </main>
    </div>
  );
}
