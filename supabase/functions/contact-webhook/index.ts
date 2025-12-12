import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.38.5";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  full_name: string;
  email: string;
  phone_number?: string;
  company_organization?: string;
  message?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const formData: ContactFormData = await req.json();

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing Supabase configuration");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: insertedData, error: insertError } = await supabase
      .from("contact_submissions")
      .insert([
        {
          full_name: formData.full_name,
          email: formData.email,
          phone_number: formData.phone_number || null,
          company_organization: formData.company_organization || null,
          message: formData.message || null,
          webhook_sent: false,
        },
      ])
      .select()
      .maybeSingle();

    if (insertError) {
      console.error("Database insert error:", insertError);
      throw new Error(`Failed to store submission: ${insertError.message}`);
    }

    const makeWebhookUrl = "https://hook.eu2.make.com/ubjoe44to3qqglo07w459fp65nvzjeth";

    try {
      const webhookResponse = await fetch(makeWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseText = await webhookResponse.text();

      if (insertedData && insertedData.id) {
        await supabase
          .from("contact_submissions")
          .update({
            webhook_sent: webhookResponse.ok,
            webhook_response: responseText || `Status: ${webhookResponse.status}`,
          })
          .eq("id", insertedData.id);
      }

      if (!webhookResponse.ok) {
        console.warn(`Make.com webhook returned status ${webhookResponse.status}`);
      }
    } catch (webhookError) {
      console.error("Webhook transmission error:", webhookError);
      if (insertedData && insertedData.id) {
        await supabase
          .from("contact_submissions")
          .update({
            webhook_sent: false,
            webhook_response: `Webhook error: ${webhookError instanceof Error ? webhookError.message : String(webhookError)}`,
          })
          .eq("id", insertedData.id);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact form submitted successfully",
        id: insertedData?.id,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "An unexpected error occurred",
      }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});