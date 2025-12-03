
import { CMS_TABLES } from "../tables";
import { COMPONENT_TYPES } from "../componentTypes";

export const COMPONENT_SCHEMA = {
  label: "Components",
  table: CMS_TABLES.components,
  fields: {
    label: { label: "Label", type: "text", required: true },
    type: {
      label: "Type",
      type: "select",
      options: COMPONENT_TYPES,
      required: true,
    },
    site_id: {
      label: "Site",
      type: "relation",
      table: CMS_TABLES.sites,
      displayField: "name",
    },
  },
};
