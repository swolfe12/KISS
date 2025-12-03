
import { CMS_TABLES } from "./../tables";
export const NAVBAR_SCHEMA = {
  label: "Navbars",
  table: CMS_TABLES.navbars,
  componentType: "navbar",
  fields: {
    component_id: {
      label: "Component",
      type: "relation",
      table: CMS_TABLES.components,
      filter: { type: "navbar" },
      required: true,
    },
    brand: { label: "Brand Text", type: "text" },
    logo: { label: "Logo", type: "image" },
    sticky: { label: "Sticky Navbar", type: "boolean" },
  },
};
