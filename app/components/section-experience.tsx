export default function SectionExperience() {
  return (
    <div className="wrapper flex flex-col gap-10 lg:gap-16 w-full">
      <h2 className="font-heading font-semibold text-5xl lg:text-7xl">
        experience
      </h2>
      <div className="flex self-stretch justify-start items-start flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 flex border-solid border-[#2B2B2B] border-b py-3">
          <p className="flex-1 text-accent-light text-sm font-['Kode_Mono']">
            August 2022 – Present
          </p>
        </div>
        <div className="flex flex-1 w-full justify-start items-start flex-col gap-2.5">
          <div className="flex self-stretch justify-start items-start flex-col">
            <div className="flex self-stretch justify-start items-start flex-row border-solid border-[#2B2B2B] border-b">
              <div className="flex flex-1 justify-center items-center flex-row gap-2.5 py-3">
                <p className="flex-1 text-link-green text-sm font-['Kode_Mono']">
                  Front-End Developer
                </p>
              </div>
              <div className="flex flex-1 justify-start items-center flex-row gap-2.5 py-3">
                <p className="flex-1 text-accent text-sm font-['Kode_Mono'] text-right">
                  Theory Digital
                </p>
              </div>
            </div>
            <div className="flex self-stretch justify-start items-start flex-row">
              <div className="flex flex-1 justify-center items-center flex-row gap-2.5 py-3 border-solid border-[#2B2B2B] border-b">
                <p className="flex-1 text-sm font-['Kode_Mono']">
                  Develop custom Shopify themes from scratch using Liquid
                  template language
                </p>
              </div>
            </div>
            <div className="flex self-stretch justify-start items-start flex-row">
              <div className="flex flex-1 justify-center items-center flex-row gap-2.5 py-3 border-solid border-[#2B2B2B] border-b">
                <p className="flex-1 text-sm font-['Kode_Mono']">
                  Develop custom features for Shopify themes using Vue.js and
                  Web components for Shopify themes using Vue.js and Web
                  components
                </p>
              </div>
            </div>
            <div className="flex self-stretch justify-start items-start flex-row">
              <div className="flex flex-1 justify-center items-center flex-row gap-2.5 py-3 border-solid border-[#2B2B2B] border-b">
                <p className="flex-1 text-sm font-['Kode_Mono']">
                  Coordinate with clients, manage tasks and meet project
                  deadlines
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
