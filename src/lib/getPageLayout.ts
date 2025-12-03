import { supabase } from "./supabaseClient";

export type PageComponentRef = {
  componentId: string;
  type: string;
  position: number;
};

export async function getPageLayout(slug: string): Promise<PageComponentRef[]> {
  const { data: page, error } = await supabase
    .from("pages")
    .select(
      `
      id,
      page_components (
        position,
        components (
          id,
          type
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
      type: pc.components.type,
      position: pc.position,
    }))
    .sort((a, b) => a.position - b.position);
}
