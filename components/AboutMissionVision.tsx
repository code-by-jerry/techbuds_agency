import { ABOUT_MISSION_BLOCK, ABOUT_VISION_BLOCK } from "@/lib/about";

type MissionVisionBlockProps = {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  theme: "light" | "dark";
  layout: "image-left" | "image-right";
};

function MissionVisionBlock({
  eyebrow,
  heading,
  headingAccent,
  image,
  imageAlt,
  paragraphs,
  theme,
  layout,
}: MissionVisionBlockProps) {
  const isLight = theme === "light";
  const imageFirst = layout === "image-left";

  const content = (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
        {eyebrow}
      </p>
      <h2
        className={`text-2xl font-bold md:text-4xl ${
          isLight ? "text-[#1e293b]" : "text-primary"
        }`}
      >
        {heading}{" "}
        <span className="text-accent-secondary">{headingAccent}</span>
      </h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-accent-secondary" />

      {paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className={`mt-5 text-sm leading-relaxed md:text-base ${
            isLight ? "text-[#475569]" : "text-secondary/85"
          }`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );

  const imageBlock = (
    <div className="flex items-center justify-center">
      <img
        src={image}
        alt={imageAlt}
        className="h-auto w-full max-w-lg rounded-2xl object-contain lg:max-w-none"
      />
    </div>
  );

  return (
    <section
      className={
        isLight
          ? "border-y border-[#e2e8f0] bg-[#f8fafc]"
          : "border-y border-custom bg-[#081124]"
      }
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          {imageFirst ? (
            <>
              {imageBlock}
              {content}
            </>
          ) : (
            <>
              {content}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default function AboutMissionVision() {
  return (
    <>
      <MissionVisionBlock
        {...ABOUT_MISSION_BLOCK}
        theme="light"
        layout="image-left"
      />
      <MissionVisionBlock
        {...ABOUT_VISION_BLOCK}
        theme="dark"
        layout="image-right"
      />
    </>
  );
}
