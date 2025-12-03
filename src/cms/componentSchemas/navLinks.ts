import { CMS_TABLES } from "./../tables";
export const NAV_LINK_SCHEMA = {
  label: "Nav Links",
  table: CMS_TABLES.navLinks,
  fields: {
    navbar_id: {
      label: "Navbar",
      type: "relation",
      table: CMS_TABLES.navbars,
      displayField: "brand",
      required: true,
    },
    label: { label: "Label", type: "text", required: true },
    url: { label: "URL", type: "text", required: true },
    order_index: {
      label: "Order",
      type: "number",
      widget: "drag-sort",
    },
  },
};
