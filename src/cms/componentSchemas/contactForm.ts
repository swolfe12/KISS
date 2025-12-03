import { CMS_TABLES } from "../tables";

export const CONTACT_FORM_SCHEMA = {
  label: "Contact Forms",
  table: CMS_TABLES.contactForms,
  componentType: "contact_form",
  fields: {
    component_id: {
      label: "Component",
      type: "relation",
      table: CMS_TABLES.components,
      filter: { type: "contact_form" },
      required: true,
    },
    heading: { label: "Heading", type: "text" },
    subheading: { label: "Subheading", type: "text" },
    recipient_email: { label: "Recipient Email", type: "text", required: true },
    success_message: { label: "Success Message", type: "text" },
    submit_label: { label: "Submit Label", type: "text" },
  },
};
