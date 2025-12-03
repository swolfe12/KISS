export const COMPONENT_TYPES = [
  "hero",
  "navbar",
  "gallery",
  "contact_form",
] as const;

export type ComponentType = (typeof COMPONENT_TYPES)[number];
