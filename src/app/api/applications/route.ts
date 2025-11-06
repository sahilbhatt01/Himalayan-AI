import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "../../../../lib/supabaseServer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate required fields
    if (!body.name || !body.email || !body.program || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await supabaseServer.from("applications").insert([
      {
        name: body.name,
        email: body.email,
        phone: body.phone,
        program: body.program,
        message: body.message,
      },
    ]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Supabase insert error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
