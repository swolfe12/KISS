import { useEffect, useState } from "react";
import { getPageLayout } from "../lib/getPageLayout";
import { getComponentData } from "../lib/getComponentData";
import { COMPONENT_REGISTRY } from "../components/registry";

export function DynamicPage({ slug }: { slug: string }) {
  const [blocks, setBlocks] = useState<{ type: string; data: any }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);

      const layout = await getPageLayout(slug);

      const resolved = await Promise.all(
        layout.map(async (item) => {
          const data = await getComponentData(item.type, item.componentId);
          return { type: item.type, data };
        }),
      );

      if (!cancelled) {
        setBlocks(resolved);
        setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {blocks.map((block, i) => {
        const Component = COMPONENT_REGISTRY[block.type];
        if (!Component) return null;
        return <Component key={i} {...block.data} />;
      })}
    </>
  );
}
