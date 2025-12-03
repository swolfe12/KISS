import { CMS_TABLES } from "../tables";
export const GALLERY_SCHEMA = {
  label: "Galleries",
  table: CMS_TABLES.galleries,
  componentType: "gallery",
  fields: {
    component_id: {
      label: "Component",
      type: "relation",
      table: CMS_TABLES.components,
      filter: { type: "gallery" },
      required: true,
    },
    title: { label: "Title", type: "text" },
    subtitle: { label: "Subtitle", type: "text" },
    layout: {
      label: "Layout",
      type: "select",
      options: ["grid", "masonry", "carousel"],
    },
  },
};
