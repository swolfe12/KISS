import { CMS_TABLES } from "./../tables";
export const GALLERY_ITEM_SCHEMA = {
  label: "Gallery Items",
  table: CMS_TABLES.galleryItems,
  fields: {
    gallery_id: {
      label: "Gallery",
      type: "relation",
      table: CMS_TABLES.galleries,
      displayField: "title",
      required: true,
    },
    image_url: { label: "Image", type: "image", required: true },
    title: { label: "Title", type: "text" },
    description: { label: "Description", type: "text" },
    order_index: { label: "Order", type: "number", widget: "drag-sort" },
  },
};
