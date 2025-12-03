// src/lib/componentData.ts
import { supabase } from "./supabaseClient";
import type { ComponentType } from "./pageContent";

export async function loadComponentData(type: ComponentType, componentId: string) {
  switch (type) {
    case "navbar": {
      const { data, error } = await supabase
        .from("navbars")
        .select("*, nav_links(*)")
        .eq("component_id", componentId)
        .maybeSingle();
      if (error) throw error;
      if (data?.nav_links) {
        data.nav_links.sort((a: any, b: any) => a.order_index - b.order_index);
      }
      return data;
    }

    case "hero": {
      const { data, error } = await supabase
        .from("hero_sections")
        .select("*")
        .eq("component_id", componentId)
        .maybeSingle();
      if (error) throw error;
      return data;
    }

    case "gallery": {
      const { data, error } = await supabase
        .from("galleries")
        .select("*, gallery_items(*)")
        .eq("component_id", componentId)
        .maybeSingle();
      if (error) throw error;
      if (data?.gallery_items) {
        data.gallery_items.sort((a: any, b: any) => a.order_index - b.order_index);
      }
      return data;
    }

    case "contact_form": {
      const { data, error } = await supabase
        .from("contact_forms")
        .select("*")
        .eq("component_id", componentId)
        .maybeSingle();
      if (error) throw error;
      return data;
    }

    default:
      return null;
  }
}
