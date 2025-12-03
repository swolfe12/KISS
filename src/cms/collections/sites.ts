import { CMS_TABLES } from "../tables";
export const SITE_SCHEMA = {
  label: "Sites",
  table: CMS_TABLES.sites,
  fields: {
    name: { label: "Site Name", type: "text", required: true },
    domain: { label: "Domain", type: "text" },
  }
};
