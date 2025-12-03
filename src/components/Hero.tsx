import { Section } from "./Section";

type HeroProps = {
  title: string;
  subtitle?: string;
  layout: "centered" | "image-left" | "image-right" | "image-bg";
  primary_cta_label?: string;
  primary_cta_href?: string;
  secondary_cta_label?: string;
  secondary_cta_href?: string;
  image?: string;
};

export function Hero(data: HeroProps) {
  const {
    title,
    subtitle,
    layout,
    primary_cta_label,
    primary_cta_href,
    secondary_cta_label,
    secondary_cta_href,
    image,
  } = data;

  // CTA buttons
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
      {primary_cta_label && primary_cta_href && (
        <a
          href={primary_cta_href}
          className="initial-fade inline-block rounded-lg bg-black px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800"
        >
          {primary_cta_label}
        </a>
      )}

      {secondary_cta_label && secondary_cta_href && (
        <a
          href={secondary_cta_href}
          className="initial-fade inline-block rounded-lg border border-gray-300 px-8 py-3 text-base font-medium text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50"
        >
          {secondary_cta_label}
        </a>
      )}
    </div>
  );

  // Shared text
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

      {subtitle && (
        <p
          className={
            (layout === "image-right" ? "ml-auto " : "") +
            "initial-fade mt-6 max-w-2xl text-lg delay-200 " +
            (layout === "image-bg" ? "text-gray-200" : "text-gray-600")
          }
        >
          {subtitle}
        </p>
      )}

      {CTAs}
    </div>
  );

  // Layout variations identical to your code:

  if (layout === "centered") {
    return (
      <Section className="relative overflow-hidden bg-white">
        <div className="text-center">{TextBlock}</div>
      </Section>
    );
  }

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
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 p-10 text-white">{TextBlock}</div>
      </section>
    );
  }

  return null;
}
