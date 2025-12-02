import { siteContent } from "../content/siteContent";
import type { HeroContent } from "../content/types";
import { Section } from "./Section";

export function Hero({ hero }: { hero?: HeroContent }) {
  const data = hero ?? siteContent.hero;
  const { layout, title, subtitle, primaryCta, secondaryCta, image } = data;

  // Shared CTA buttons (alignment changes depending on layout)
  const CTAs = (
    <div
      className={
        layout === "centered" || layout === "image-bg"
          ? "mt-10 flex justify-center gap-6"
          : layout === "image-left"
            ? "mt-10 flex justify-start gap-6"
            : "mt-10 flex justify-end gap-6"
      }
    >
      <a
        href={primaryCta.href}
        className="initial-fade inline-block rounded-lg bg-black px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800"
      >
        {primaryCta.label}
      </a>

      <a
        href={secondaryCta.href}
        className="initial-fade inline-block rounded-lg border border-gray-300 px-8 py-3 text-base font-medium text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50"
      >
        {secondaryCta.label}
      </a>
    </div>
  );

  // Shared text block
  const TextBlock = (
    <div
      className={
        layout === "centered" || layout === "image-bg"
          ? "text-center"
          : layout === "image-left"
            ? "text-left"
            : "text-right"
      }
    >
      <h1
        className={
          "initial-fade text-4xl font-bold tracking-tight sm:text-6xl " +
          (layout === "image-bg" ? "text-white" : "text-gray-900")
        }
      >
        {title}
      </h1>

      <p
        className={
          (layout === "image-right" ? "ml-auto " : "") +
          "initial-fade mt-6 max-w-2xl text-lg delay-200 " +
          (layout === "image-bg" ? "text-gray-200" : "text-gray-600")
        }
      >
        {subtitle}
      </p>

      {CTAs}
    </div>
  );

  // ------------------------------------------
  // 1️⃣ CENTERED HERO
  // ------------------------------------------
  if (layout === "centered") {
    return (
      <Section className="relative overflow-hidden bg-white">
        <div className="text-center">{TextBlock}</div>
      </Section>
    );
  }

  // ------------------------------------------
  // 2️⃣ IMAGE LEFT
  // ------------------------------------------
  if (layout === "image-left") {
    return (
      <Section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <img
            src={image}
            alt=""
            className="initial-fade order-1 w-full rounded-xl object-cover lg:order-none"
          />
          {TextBlock}
        </div>
      </Section>
    );
  }

  // ------------------------------------------
  // 3️⃣ IMAGE RIGHT
  // ------------------------------------------
  if (layout === "image-right") {
    return (
      <Section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {TextBlock}
          <img
            src={image}
            alt=""
            className="initial-fade w-full rounded-xl object-cover"
          />
        </div>
      </Section>
    );
  }

  // ------------------------------------------
  // 4️⃣ FULL BACKGROUND IMAGE + DARK OVERLAY
  // ------------------------------------------
  if (layout === "image-bg") {
    return (
      <section
        className="relative flex items-center justify-center px-6 py-40 text-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content (above overlay) */}
        <div className="relative z-10 p-10 text-white">{TextBlock}</div>
      </section>
    );
  }

  return null;
}
