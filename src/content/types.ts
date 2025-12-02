export type SectionLayout =
  | "full"
  | "float"
  | "edge"
  | "tight"
  | "none"
  | "split"
  | "wide";

export type HeroLayout = "centered" | "image-left" | "image-right" | "image-bg";

export interface NavbarContent {
  brand: string;
  links: { label: string; href: string }[];
}

export interface HeroContent {
  layout: HeroLayout;
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface GalleryItem {
  title: string;
  image: string;
  description?: string;
  tags?: string[];
  href?: string;
}

export interface GalleryContent {
  layout: SectionLayout;
  background?: string;
  title: string;
  subtitle?: string;
  items: GalleryItem[];
}

export interface ContactContent {
  layout: SectionLayout;
  background?: string;
  title: string;
  subtitle: string;
  fields: { name: string; email: string; message: string };
  submitLabel: string;
  successMessage: string;
}

export interface SiteContent {
  navbar: NavbarContent;
  hero: HeroContent;
  gallery: GalleryContent;
  contact: ContactContent;
}
