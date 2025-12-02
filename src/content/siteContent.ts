import navbar from "../content/navbar.json";
import hero from "../content/hero.json";
import gallery from "../content/gallery.json";
import contact from "../content/contact.json";

export type HeroLayout = "centered" | "image-left" | "image-right" | "image-bg";

export const siteContent = {
  navbar,
  hero,
  gallery,
  contact,
};
