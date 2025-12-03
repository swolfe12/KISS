import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { GallerySection } from "./GallerySection";
import { ContactForm } from "./ContactForm";

export const COMPONENT_REGISTRY: Record<string, React.ComponentType<any>> = {
  hero: Hero,
  navbar: Navbar,
  gallery: GallerySection,
  contact_form: ContactForm,
};
