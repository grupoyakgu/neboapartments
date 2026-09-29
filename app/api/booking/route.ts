import { NextResponse } from "next/server";
import { getApartment } from "@/lib/apartments";

// First-stage booking endpoint: validates the request and returns a reference.
// TODO: persist (e.g. Supabase), email the guest/host, block availability and add payment.
export async function POST(req: Request) {
  let b: any;
  try { b = await req.json(); } catch { return NextResponse.json({ error: "bad_json" }, { status: 400 }); }

  const apt = getApartment(String(b.slug));
  const nights = Math.round((+new Date(b.checkout) - +new Date(b.checkin)) / 86400000);
  const guests = Number(b.guests);
  const ok =
    apt && nights >= 1 && nights <= 365 &&
    guests >= 1 && guests <= apt.guests &&
    typeof b.name === "string" && b.name.trim().length >= 2 && b.name.length <= 120 &&
    typeof b.email === "string" && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(b.email) &&
    typeof b.phone === "string" && b.phone.trim().length >= 5 && b.phone.length <= 30 &&
    String(b.notes ?? "").length <= 1000;
  if (!ok) return NextResponse.json({ error: "invalid" }, { status: 400 });

  const reference = "NB-" + Math.random().toString(36).slice(2, 8).toUpperCase();
  console.log("booking_request", { reference, slug: b.slug, checkin: b.checkin, checkout: b.checkout, guests });
  return NextResponse.json({ reference, total: apt.price * nights });
}
