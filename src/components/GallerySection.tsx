import { Section } from "./Section";
import { Card } from "./Card";

type GalleryItem = {
  image_url: string;
  title?: string;
  description?: string;
};

type GalleryProps = {
  title?: string;
  subtitle?: string;
  gallery_items?: GalleryItem[];
};

export function GallerySection({
  title,
  subtitle,
  gallery_items = [],
}: GalleryProps) {
  return (
    <Section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {title && (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
        )}

        {subtitle && (
          <p className="mx-auto mt-4 max-w-xl text-gray-600">{subtitle}</p>
        )}
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {gallery_items.map((item, i) => (
          <Card
            key={i}
            image={item.image_url}
            title={item.title ?? ""}
            description={item.description ?? ""}
          />
        ))}
      </div>
    </Section>
  );
}
