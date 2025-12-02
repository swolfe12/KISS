import type {
  SiteContent,
  NavbarContent,
  HeroContent,
  GalleryContent,
  ContactContent,
} from "./types";

// JSON imports
import navbarJson from "./navbar.json";
import heroJson from "./hero.json";
import galleryJson from "./gallery.json";
import contactJson from "./contact.json";

export const siteContent: SiteContent = {
  navbar: navbarJson as NavbarContent,
  hero: heroJson as HeroContent,
  gallery: galleryJson as GalleryContent,
  contact: contactJson as ContactContent,
};
