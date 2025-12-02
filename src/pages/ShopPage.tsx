import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Card } from "../components/Card";
import { Section } from "../components/Section";

type Product = {
  id: string;
  title: string;
  description: string | null;
  price: number | null; // in cents
  image: string | null;
};

export function ShopPage() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error("Error loading products:", error);
      setProducts(data);
      setLoading(false);
    }

    loadProducts();
  }, []);

  return (
    <>
      <Section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Shop</h1>
        <p className="mt-4 text-gray-600">Products synced from Stripe</p>
      </Section>

      {loading && (
        <Section className="text-center">
          <p className="text-gray-500">Loading products…</p>
        </Section>
      )}

      {!loading && products && products.length === 0 && (
        <Section className="text-center">
          <p className="text-gray-500">No products yet.</p>
        </Section>
      )}

      <Section className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {products?.map((p) => (
          <Card
            key={p.id}
            title={p.title}
            description={p.description ?? ""}
            image={p.image ?? ""}
            href={`/shop/${p.id}`}
            tags={[`$${(p.price ?? 0) / 100}`]}
          />
        ))}
      </Section>
    </>
  );
}
