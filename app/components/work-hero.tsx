import Image from "next/image";

interface WorkHeroProps {
  title: string;
  description: string;
  what: string;
  why: string;
  how: string;
  imageSrc: string;
  imageAlt: string;
}

export default function WorkHero({
  title,
  description,
  what,
  why,
  how,
  imageSrc,
  imageAlt,
}: WorkHeroProps) {
  return (
    <div className="wrapper w-full flex flex-col gap-10 lg:gap-16">
      {/* Title and Description */}
      <div className="flex flex-col items-center text-center gap-5 lg:gap-7">
        <h1 className="font-heading font-semibold text-8xl lg:text-9xl">
          {title}
        </h1>
        <p className="text-sm lg:text-base max-w-lg">
          {description}
        </p>
      </div>

      {/* What, Why, How Boxes */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-5xl mx-auto">
        <div className="flex-1 bg-accent-soft/50 text-center p-4 lg:p-6">
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-heading">
              what
            </span>
            <span className="text-sm">{what}</span>
          </div>
        </div>
        <div className="flex-1 bg-accent-soft/50 text-center bg p-4 lg:p-6">
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-heading">
              why
            </span>
            <span className="text-sm">{why}</span>
          </div>
        </div>
        <div className="flex-1 bg-accent-soft/50 text-center bg p-4 lg:p-6">
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-heading">
              how
            </span>
            <span className="text-sm">{how}</span>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

