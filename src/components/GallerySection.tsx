import { siteContent } from "../content/siteContent";
import { Section } from "../components/Section";
import { Card } from "../components/Card";

export function GallerySection() {
  const { title, subtitle, items } = siteContent.gallery;

  return (
    <Section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>

        {subtitle && (
          <p className="mx-auto mt-4 max-w-xl text-gray-600">{subtitle}</p>
        )}
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </Section>
  );
}
