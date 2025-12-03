import Stripe from "https://esm.sh/stripe@12.18.0?target=deno";
import { serve } from "https://deno.land/std@0.203.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2?target=deno";

export const config = {
  auth: false,
};

// INIT STRIPE + SUPABASE
const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, {
  apiVersion: "2023-10-16",
});

const supabase = createClient(
  Deno.env.get("SB_URL")!,
  Deno.env.get("SB_SERVICE_ROLE")!,
);

// WEBHOOK ENDPOINT
serve(async (req) => {
  try {
    const signature = req.headers.get("stripe-signature");
    const body = await req.text();

    if (!signature) {
      console.error("❌ Missing Stripe signature header");
      return new Response("Missing signature", { status: 400 });
    }

    // 🔥 MUST use async constructor in Deno
    const event = await stripe.webhooks.constructEventAsync(
      body,
      signature,
      Deno.env.get("STRIPE_WEBHOOK_SECRET")!
    );

    console.log("🔥 Webhook event:", event.type);

    // Only sync product events
    if (
      event.type !== "product.created" &&
      event.type !== "product.updated"
    ) {
      return new Response("ignored", { status: 200 });
    }

    const product = event.data.object;

    // Fetch price from Stripe
    let price = null;
    if (product.default_price) {
      const p = await stripe.prices.retrieve(product.default_price);
      price = p.unit_amount;
    }

    // Push to Supabase
    const { error } = await supabase.from("products").upsert({
      id: product.id,
      title: product.name,
      description: product.description ?? "",
      price,
      image: product.images?.[0] ?? null,
    });

    if (error) throw error;

    console.log("✅ Synced product", product.id);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("❌ Webhook error:", err.message);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
});
