import Image from "next/image";

export default function SectionHero() {
  return (
    <div className="max-w-[1200px] flex self-stretch justify-center items-center flex-row px-[24px]">
      <div className="flex flex-1 justify-center items-start flex-col pb-[192px] pr-[36px]">
        <p className="self-stretch text-[#EDEDED] text-sm font-['Kode_Mono']">
          I’m a creative front-end developer with a knack for turning ideas into pixel-perfect realities. With 5 years of industry experience and a solid background in web design, I bridge the gap between functionality and aesthetics, building digital experiences that are as seamless as they are visually engaging.
        </p>
      </div>
      <div>
        <Image
          aria-hidden
          src="/thomas_l_hero.png"
          alt="Personal portfolio hero image."
          width={768}
          height={768}
        />
      </div>
      <div className="flex flex-1 self-stretch justify-center items-start flex-col">
        <div className="flex justify-start items-start flex-col pt-[92px]">
          <span className="text-[#EDEDED] text-[136px] font-['Big_Shoulders_Display'] font-semibold border-solid border-[#EDEDED] border">
            design.
          </span>
          <span className="font-['Big_Shoulders_Display'] border-solid border-[#EDEDED] border">
            develop.
          </span>
        </div>
      </div>
    </div>
  );
}