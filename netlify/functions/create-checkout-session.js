// netlify/functions/create-checkout-session.js

import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export async function handler(event) {
  try {
    const { productId, email } = JSON.parse(event.body);

    // Get product info
    const { data: product, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", productId)
      .single();

    if (error) throw error;

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: product.title },
            unit_amount: product.price, // all prices in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.URL}/success`,
      cancel_url: `${process.env.URL}/cancelled`,
    });

    // Create pending order in your DB
    await supabase.from("orders").insert([
      {
        product_id: productId,
        amount: product.price,
        email,
        stripe_session_id: session.id,
      },
    ]);

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
