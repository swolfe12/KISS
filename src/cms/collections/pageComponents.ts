import { CMS_TABLES } from "../tables";
export const PAGE_COMPONENTS_SCHEMA = {
  label: "Page Components",
  table: CMS_TABLES.pageComponents,
  fields: {
    page_id: {
      label: "Page",
      type: "relation",
      table: CMS_TABLES.pages,
      displayField: "title",
      required: true,
    },
    component_id: {
      label: "Component",
      type: "relation",
      table: CMS_TABLES.components,
      displayField: "label",
      required: true,
    },
    position: {
      label: "Order",
      type: "number",
      required: true,
      widget: "drag-sort",
    },
  },
};
