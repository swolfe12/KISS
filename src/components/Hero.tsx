import { siteContent } from "../content/siteContent";
import { Section } from "../components/Section";

export function Hero() {
  const { title, subtitle, primaryCta, secondaryCta } = siteContent.hero;

  return (
    <Section className="relative overflow-hidden bg-white">
      <div className="text-center">
        <h1 className="animate-fadeSlideIn translate-y-4 text-4xl font-bold tracking-tight text-gray-900 opacity-0 sm:text-6xl">
          {title}
        </h1>

        <p className="animate-fadeSlideIn mx-auto mt-6 max-w-2xl translate-y-4 text-lg text-gray-600 opacity-0 delay-200">
          {subtitle}
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href={primaryCta.href}
            className="animate-fadeSlideIn inline-block translate-y-4 rounded-lg bg-black px-8 py-3 text-base font-medium text-white opacity-0 transition-all delay-300 duration-300 hover:-translate-y-0.5 hover:bg-gray-800"
          >
            {primaryCta.label}
          </a>

          <a
            href={secondaryCta.href}
            className="animate-fadeSlideIn inline-block translate-y-4 rounded-lg border border-gray-300 px-8 py-3 text-base font-medium text-gray-700 opacity-0 transition-all delay-500 duration-300 hover:-translate-y-0.5 hover:bg-gray-50"
          >
            {secondaryCta.label}
          </a>
        </div>
      </div>
    </Section>
  );
}
