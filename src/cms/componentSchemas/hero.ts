import { CMS_TABLES } from "../tables";

export const HERO_SCHEMA = {
  label: "Hero Sections",
  table: CMS_TABLES.heroSections,
  componentType: "hero",
  fields: {
    component_id: {
      label: "Component",
      type: "relation",
      table: CMS_TABLES.components,
      filter: { type: "hero" },
      required: true,
    },
    title: { label: "Title", type: "text", required: true },
    subtitle: { label: "Subtitle", type: "text" },
    layout: {
      label: "Layout",
      type: "select",
      options: ["centered", "image-left", "image-right", "image-bg"],
      required: true,
    },
    primary_cta_label: { label: "Primary CTA Label", type: "text" },
    primary_cta_href: { label: "Primary CTA Link", type: "text" },
    secondary_cta_label: { label: "Secondary CTA Label", type: "text" },
    secondary_cta_href: { label: "Secondary CTA Link", type: "text" },
    background_image: { label: "Background Image", type: "image" },
  },
};
