// src/lib/pageContent.ts
import { supabase } from "./supabaseClient";

export type ComponentType = "navbar" | "hero" | "gallery" | "contact_form";

export type LayoutComponentRef = {
  componentId: string;
  type: ComponentType;
  label: string;
  position: number;
};

export async function getPageLayout(slug: string) {
  const { data: page, error } = await supabase
    .from("pages")
    .select(
      `
      id,
      page_components (
        position,
        components (
          id,
          type,
          label
        )
      )
    `
    )
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  if (!page) return [];

  return page.page_components
    .map((pc: any) => ({
      componentId: pc.components.id,
      type: pc.components.type as ComponentType,
      label: pc.components.label,
      position: pc.position as number
    }))
    .sort((a, b) => a.position - b.position);
}
