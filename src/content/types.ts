// ============================
// Section-level layout (padding, width, spacing)
// ============================
export type SectionLayout =
  | "full"
  | "float"
  | "edge"
  | "tight"
  | "none"
  | "split"
  | "wide";

// ============================
// Hero-specific layout models
// ============================
export type HeroLayout = "centered" | "image-left" | "image-right" | "image-bg";

// ============================
// Navbar
// ============================
export interface NavbarContent {
  brand: string;
  links: { label: string; href: string }[];
}

// ============================
// Hero
// ============================
export interface HeroContent {
  layout: HeroLayout;
  eyebrow?: string;
  title: string;
  subtitle: string;
  image?: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

// ============================
// Gallery
// ============================
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

// ============================
// Contact
// ============================
export interface ContactContent {
  layout: SectionLayout;
  background?: string;
  title: string;
  subtitle: string;
  fields: { name: string; email: string; message: string };
  submitLabel: string;
  successMessage: string;
}

// ============================
// Root Site Content schema
// ============================
export interface SiteContent {
  navbar: NavbarContent;
  hero: HeroContent;
  gallery: GalleryContent;
  contact: ContactContent;

  // Add future pages later:
  // about?: AboutSection;
  // features?: FeaturesSection;
}
