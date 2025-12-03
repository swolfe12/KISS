import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import type { HeroContent, HeroLayout } from "../content/types";
import { siteContent } from "../content/siteContent";

const heroLayouts: HeroLayout[] = [
  "centered",
  "image-left",
  "image-right",
  "image-bg",
];

export function HerosPage() {
  const baseHero: HeroContent = siteContent.hero;

  return (
    <div className="">
      <Section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Hero Layouts</h1>
        <p className="mt-4 text-gray-600">
          Preview all available hero layout options.
        </p>
      </Section>

      {heroLayouts.map((layout) => {
        const modifiedHero: HeroContent = { ...baseHero, layout };

        return (
          <div key={layout} className="p-6">
            <Section className="bg-[theme(colors.paper-light)] mb-10 text-center">
              <h2 className="text-2xl font-semibold tracking-tight capitalize">
                {layout.replace("-", " ")}:
              </h2>
            </Section>
            <div className="border shadow-sm">
              <Hero {...modifiedHero} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
