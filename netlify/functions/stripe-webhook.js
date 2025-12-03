// netlify/functions/stripe-webhook.js

import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export async function handler(event) {
  const sig = event.headers["stripe-signature"];

  try {
    const webhook = stripe.webhooks.constructEvent(
      event.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET,
    );

    if (webhook.type === "checkout.session.completed") {
      const session = webhook.data.object;

      // Update order status
      await supabase
        .from("orders")
        .update({ status: "paid" })
        .eq("stripe_session_id", session.id);
    }

    return { statusCode: 200, body: "OK" };
  } catch (e) {
    return { statusCode: 400, body: `Webhook error: ${e.message}` };
  }
}
