import { supabase } from "./supabaseClient";

export async function getComponentData(type: string, componentId: string) {
  switch (type) {
    case "hero": {
      const { data } = await supabase
        .from("hero_sections")
        .select("*")
        .eq("component_id", componentId)
        .maybeSingle();

      return {
        title: data?.title,
        subtitle: data?.subtitle,
        layout: data?.layout || "centered",
        primary_cta_label: data?.primary_cta_label,
        primary_cta_href: data?.primary_cta_href,
        secondary_cta_label: data?.secondary_cta_label,
        secondary_cta_href: data?.secondary_cta_href,
        image: data?.background_image,
      };
    }

    case "navbar": {
      const { data } = await supabase
        .from("navbars")
        .select("*, nav_links(*)")
        .eq("component_id", componentId)
        .maybeSingle();

      return {
        brand: data?.brand || "Brand",
        links: data?.nav_links?.map((l: any) => ({
          label: l.label,
          href: l.url,
        })),
      };
    }

    case "gallery": {
      const { data } = await supabase
        .from("galleries")
        .select("*, gallery_items(*)")
        .eq("component_id", componentId)
        .maybeSingle();

      return {
        title: data?.title,
        subtitle: data?.subtitle,
        gallery_items: data?.gallery_items?.map((item: any) => ({
          image_url: item.image_url,
          title: item.title,
          description: item.description,
        })),
      };
    }

    case "contact_form": {
      const { data } = await supabase
        .from("contact_forms")
        .select("*")
        .eq("component_id", componentId)
        .maybeSingle();

      return {
        heading: data?.heading,
        subheading: data?.subheading,
        recipient_email: data?.recipient_email,
        success_message: data?.success_message,
        submit_label: data?.submit_label,
      };
    }

    default:
      return null;
  }
}
