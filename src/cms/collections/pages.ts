import { CMS_TABLES } from "../tables";

export const PAGE_SCHEMA = {
  label: "Pages",
  table: CMS_TABLES.pages,
  fields: {
    title: { label: "Page Title", type: "text", required: true },
    slug: { label: "Slug", type: "text", required: true },
    site_id: {
      label: "Site",
      type: "relation",
      table: CMS_TABLES.sites,
      displayField: "name",
    },
  },
};
