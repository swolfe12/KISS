// =======================================================
// 🧱 Layout Type
// =======================================================
export type LayoutType =
  | "full"
  | "float"
  | "edge"
  | "tight"
  | "none"
  | "split"
  | "wide";

// =======================================================
// 🧱 Section Interfaces
// =======================================================

export interface NavbarContent {
  brand: string;
  links: { label: string; href: string }[];
}

export interface HeroContent {
  layout: LayoutType;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface ContactContent {
  layout: LayoutType;
  title: string;
  subtitle: string;
  fields: {
    name: string;
    email: string;
    message: string;
  };
  submitLabel: string;
  successMessage: string;
}

export interface GalleryItem {
  title: string;
  tags?: string[];
  description?: string;
  image: string;
  href?: string;
}

export interface GalleryContent {
  layout: LayoutType;
  title: string;
  subtitle?: string;
  items: GalleryItem[];
}

// =======================================================
// 🧱 Root Site Content Schema
// =======================================================

export interface SiteContentSchema {
  navbar: NavbarContent;
  hero: HeroContent;
  contact: ContactContent;
  gallery: GalleryContent;

  // ✨ Easily add more sections later:
  // about?: AboutContent;
  // features?: FeaturesContent;
  // testimonials?: TestimonialsContent;
  // footer?: FooterContent;
}

// =======================================================
// 🌟 SITE CONTENT (typed + safe)
// =======================================================

export const siteContent: SiteContentSchema = {
  navbar: {
    brand: "My Project",
    links: [
      { label: "Home", href: "#" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },

  hero: {
    layout: "full",
    eyebrow: "Introducing",
    title: "Build Something Beautiful",
    subtitle:
      "A clean and minimal starter kit to help you design and develop modern web experiences.",
    primaryCta: { label: "Get Started", href: "#" },
    secondaryCta: { label: "Learn More", href: "#" },
  },

  contact: {
    layout: "float",
    title: "Get in Touch",
    subtitle:
      "Have a question or want to work together? Send me a message and I’ll get back to you soon!",
    fields: {
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
    },
    submitLabel: "Send Message",
    successMessage: "Thanks! I have received your message.",
  },

  gallery: {
    layout: "full",
    title: "Gallery",
    subtitle: "A collection of curated images and projects.",
    items: [
      {
        title: "Beautiful Landscape",
        tags: ["Photography", "Nature"],
        description: "Mountains at sunrise in a soft golden glow.",
        image: "/images/default.jpg",
        href: "#",
      },
      {
        title: "Urban Cityscape",
        tags: ["City", "Architecture"],
        description: "Skyscrapers and evening lights.",
        image: "/images/default.jpg",
      },
      {
        title: "Minimal Product Shot",
        tags: ["Product", "Studio"],
        description: "Clean aesthetic with soft shadows.",
        image: "/images/default.jpg",
      },
    ],
  },
};
