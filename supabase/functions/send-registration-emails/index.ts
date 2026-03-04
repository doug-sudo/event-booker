import { corsHeaders } from "../_shared/cors.ts"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")
const ADMIN_EMAILS = ["elise.finger@sidelineswap.com", "doug@sidelineswap.com"]
const FROM_EMAIL = "SidelineSwap Events <events@sidelineswap.com>"

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    const payload = await req.json()
    const {
      store_name,
      contact_name,
      email,
      phone,
      region_name,
      address_1,
      address_2,
      city,
      state,
      zip,
      preferred_dates,
      foot_traffic,
      slot_type,
      include_friday,
      special_notes,
      event_requirements,
      has_loading_dock,
    } = payload

    const datesDisplay =
      Array.isArray(preferred_dates) && preferred_dates.length > 0
        ? preferred_dates.join(", ")
        : "No specific dates selected"

    const addressParts = [address_1, address_2].filter(Boolean).join(", ")
    const fullAddress = `${addressParts}, ${city}, ${state} ${zip}`

    const confirmationHtml = buildConfirmationEmail({
      contact_name,
      store_name,
      region_name,
      datesDisplay,
      fullAddress,
    })

    const adminHtml = buildAdminNotificationEmail({
      store_name,
      contact_name,
      email,
      phone,
      region_name,
      fullAddress,
      datesDisplay,
      foot_traffic,
      slot_type,
      include_friday,
      special_notes,
      event_requirements,
      has_loading_dock,
    })

    const [confirmResult, adminResult] = await Promise.allSettled([
      sendEmail({
        from: FROM_EMAIL,
        to: email,
        subject: "SidelineSwap Event Registration Received",
        html: confirmationHtml,
      }),
      sendEmail({
        from: FROM_EMAIL,
        to: ADMIN_EMAILS,
        subject: `New Registration: ${store_name} — ${region_name}`,
        html: adminHtml,
      }),
    ])

    return new Response(
      JSON.stringify({
        confirmation: confirmResult.status,
        admin: adminResult.status,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    )
  }
})

async function sendEmail({
  from,
  to,
  subject,
  html,
}: {
  from: string
  to: string | string[]
  subject: string
  html: string
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({ from, to, subject, html }),
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Resend API error (${res.status}): ${body}`)
  }

  return res.json()
}

function buildConfirmationEmail({
  contact_name,
  store_name,
  region_name,
  datesDisplay,
  fullAddress,
}: {
  contact_name: string
  store_name: string
  region_name: string
  datesDisplay: string
  fullAddress: string
}) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f0f2f0;font-family:'Inter',Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:24px;">
    <div style="background-color:#0c2218;border-radius:12px 12px 0 0;padding:32px 24px;text-align:center;">
      <h1 style="color:#ffffff;font-size:24px;margin:0;">SidelineSwap</h1>
      <p style="color:#a7f3d0;font-size:14px;margin:8px 0 0;">Partner Events</p>
    </div>
    <div style="background-color:#ffffff;padding:32px 24px;border-radius:0 0 12px 12px;">
      <h1 style="color:#0c2218;font-size:24px;margin:0 0 16px;">Registration Received!</h1>
      <p style="color:#4b5563;font-size:16px;line-height:1.6;margin:0 0 24px;">
        Hi ${contact_name},
      </p>
      <p style="color:#4b5563;font-size:16px;line-height:1.6;margin:0 0 24px;">
        Thank you for registering <strong>${store_name}</strong> for a SidelineSwap
        trade-in event. We have received your application and our team will review it shortly.
      </p>
      <div style="background-color:#f9fafb;border-radius:8px;padding:20px;margin:0 0 24px;">
        <h2 style="color:#0c2218;font-size:16px;margin:0 0 12px;">Registration Summary</h2>
        <table style="width:100%;font-size:14px;color:#4b5563;">
          <tr>
            <td style="padding:4px 0;font-weight:600;">Region:</td>
            <td style="padding:4px 0;">${region_name}</td>
          </tr>
          <tr>
            <td style="padding:4px 0;font-weight:600;">Location:</td>
            <td style="padding:4px 0;">${fullAddress}</td>
          </tr>
          <tr>
            <td style="padding:4px 0;font-weight:600;">Preferred Dates:</td>
            <td style="padding:4px 0;">${datesDisplay}</td>
          </tr>
        </table>
      </div>
      <h2 style="color:#0c2218;font-size:16px;margin:0 0 12px;">What Happens Next</h2>
      <ol style="color:#4b5563;font-size:14px;line-height:1.8;padding-left:20px;margin:0 0 24px;">
        <li>Our team will review your registration</li>
        <li>We will confirm your event date (or suggest alternate dates)</li>
        <li>Marketing assets and event playbook will be shared</li>
      </ol>
      <p style="color:#4b5563;font-size:14px;line-height:1.6;">
        Questions? Reach out to
        <a href="mailto:elise.finger@sidelineswap.com" style="color:#16a34a;text-decoration:none;">
          elise.finger@sidelineswap.com
        </a>
      </p>
    </div>
    <div style="text-align:center;padding:24px;color:#9ca3af;font-size:12px;">
      <p>&copy; ${new Date().getFullYear()} SidelineSwap. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`
}

function buildAdminNotificationEmail({
  store_name,
  contact_name,
  email,
  phone,
  region_name,
  fullAddress,
  datesDisplay,
  foot_traffic,
  slot_type,
  include_friday,
  special_notes,
  event_requirements,
  has_loading_dock,
}: {
  store_name: string
  contact_name: string
  email: string
  phone: string
  region_name: string
  fullAddress: string
  datesDisplay: string
  foot_traffic: string
  slot_type: string
  include_friday: boolean
  special_notes: string
  event_requirements: string[]
  has_loading_dock: boolean | null
}) {
  const requirementsList =
    Array.isArray(event_requirements) && event_requirements.length > 0
      ? event_requirements.map((r: string) => `<li>${r}</li>`).join("")
      : "<li>None confirmed</li>"

  const slotDisplay =
    slot_type === "weekend"
      ? include_friday
        ? "Weekend (Fri-Sun)"
        : "Weekend (Sat-Sun)"
      : "Weekday"

  const dockDisplay =
    has_loading_dock === true
      ? "Yes"
      : has_loading_dock === false
        ? "No"
        : "Not specified"

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f0f2f0;font-family:'Inter',Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:24px;">
    <div style="background-color:#16a34a;border-radius:12px 12px 0 0;padding:20px 24px;">
      <h1 style="color:#ffffff;font-size:20px;margin:0;">New Registration: ${store_name}</h1>
    </div>
    <div style="background-color:#ffffff;padding:24px;border-radius:0 0 12px 12px;">
      <h2 style="font-size:14px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 8px;">
        Contact Information
      </h2>
      <table style="width:100%;font-size:14px;color:#1f2937;margin:0 0 20px;">
        <tr><td style="padding:3px 0;width:120px;color:#6b7280;">Store:</td><td style="padding:3px 0;font-weight:600;">${store_name}</td></tr>
        <tr><td style="padding:3px 0;color:#6b7280;">Contact:</td><td style="padding:3px 0;">${contact_name}</td></tr>
        <tr><td style="padding:3px 0;color:#6b7280;">Email:</td><td style="padding:3px 0;"><a href="mailto:${email}" style="color:#16a34a;">${email}</a></td></tr>
        <tr><td style="padding:3px 0;color:#6b7280;">Phone:</td><td style="padding:3px 0;">${phone || "Not provided"}</td></tr>
        <tr><td style="padding:3px 0;color:#6b7280;">Address:</td><td style="padding:3px 0;">${fullAddress}</td></tr>
      </table>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
      <h2 style="font-size:14px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 8px;">
        Event Details
      </h2>
      <table style="width:100%;font-size:14px;color:#1f2937;margin:0 0 20px;">
        <tr><td style="padding:3px 0;width:120px;color:#6b7280;">Region:</td><td style="padding:3px 0;font-weight:600;">${region_name}</td></tr>
        <tr><td style="padding:3px 0;color:#6b7280;">Slot Type:</td><td style="padding:3px 0;">${slotDisplay}</td></tr>
        <tr><td style="padding:3px 0;color:#6b7280;">Dates:</td><td style="padding:3px 0;">${datesDisplay}</td></tr>
        <tr><td style="padding:3px 0;color:#6b7280;">Foot Traffic:</td><td style="padding:3px 0;">${foot_traffic || "Not specified"}</td></tr>
        <tr><td style="padding:3px 0;color:#6b7280;">Loading Dock:</td><td style="padding:3px 0;">${dockDisplay}</td></tr>
      </table>
      <h2 style="font-size:14px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 8px;">
        Confirmed Requirements
      </h2>
      <ul style="font-size:14px;color:#1f2937;padding-left:20px;margin:0 0 20px;">
        ${requirementsList}
      </ul>
      ${
        special_notes
          ? `<h2 style="font-size:14px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 8px;">Special Notes</h2>
      <p style="font-size:14px;color:#1f2937;background:#f9fafb;padding:12px;border-radius:6px;margin:0 0 20px;">${special_notes}</p>`
          : ""
      }
      <div style="text-align:center;margin-top:24px;">
        <a href="https://sidelineswap-partner-portal.vercel.app/admin"
           style="display:inline-block;background-color:#16a34a;color:#ffffff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">
          View in Admin Dashboard
        </a>
      </div>
    </div>
  </div>
</body>
</html>`
}
