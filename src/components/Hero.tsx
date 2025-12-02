import { siteContent } from "../content/siteContent";
import { Section } from "../components/Section";

export function Hero() {
  const hero = siteContent.hero;
  const { layout, title, subtitle, primaryCta, secondaryCta, image } = hero;

  // Shared CTA buttons
  const CTAs = (
    <div className="mt-10 flex justify-center gap-6">
      <a
        href={primaryCta.href}
        className="animate-fadeSlideIn inline-block rounded-lg bg-black px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800"
      >
        {primaryCta.label}
      </a>

      <a
        href={secondaryCta.href}
        className="animate-fadeSlideIn inline-block rounded-lg border border-gray-300 px-8 py-3 text-base font-medium text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50"
      >
        {secondaryCta.label}
      </a>
    </div>
  );

  // Shared text block
  const TextBlock = (
    <div className="text-center lg:text-left">
      <h1 className="animate-fadeSlideIn text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        {title}
      </h1>
      <p className="animate-fadeSlideIn mx-auto mt-6 max-w-2xl text-lg text-gray-600 delay-200">
        {subtitle}
      </p>
      {CTAs}
    </div>
  );

  // ------------------------------------------
  // 1️⃣ LAYOUT: CENTERED (default)
  // ------------------------------------------
  if (layout === "centered") {
    return (
      <Section className="relative overflow-hidden">
        <div className="text-center">{TextBlock}</div>
      </Section>
    );
  }

  // ------------------------------------------
  // 2️⃣ LAYOUT: IMAGE LEFT / TEXT RIGHT
  // ------------------------------------------
  if (layout === "image-left") {
    return (
      <Section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <img
            src={image}
            alt=""
            className="animate-fadeSlideIn order-1 w-full rounded-xl object-cover opacity-0 lg:order-none"
          />
          {TextBlock}
        </div>
      </Section>
    );
  }

  // ------------------------------------------
  // 3️⃣ LAYOUT: IMAGE RIGHT / TEXT LEFT
  // ------------------------------------------
  if (layout === "image-right") {
    return (
      <Section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {TextBlock}
          <img
            src={image}
            alt=""
            className="animate-fadeSlideIn w-full rounded-xl object-cover opacity-0"
          />
        </div>
      </Section>
    );
  }

  // ------------------------------------------
  // 4️⃣ LAYOUT: FULL BACKGROUND IMAGE
  // ------------------------------------------
  if (layout === "image-bg") {
    return (
      <section
        className="relative flex items-center justify-center px-6 py-40 text-center text-white"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="rounded-xl bg-black/30 p-10 backdrop-blur-sm">
          {TextBlock}
        </div>
      </section>
    );
  }

  // Fallback (shouldn't happen)
  return null;
}
