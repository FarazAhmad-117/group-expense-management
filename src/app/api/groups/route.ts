import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const getSupabase = async () => {
  const cookieStore = await cookies(); // ✅ Await cookies before using
  const token = cookieStore.get("sb-access-token")?.value;

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    },
  });

  return supabase;
};

export async function POST(req: Request) {
  const supabase = await getSupabase();
  const result = await supabase.auth.getUser();
  const { data: user, error: sessionError } = await supabase.auth.getUser();

  if (sessionError || !user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name } = await req.json();
  if (!name)
    return NextResponse.json(
      { error: "Group name is required" },
      { status: 400 }
    );

  const { data, error } = await supabase
    .from("groups")
    .insert([{ name, created_by: user.id }])
    .select()
    .single();

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data, { status: 201 });
}

export async function GET() {
  const supabase = await getSupabase();
  const { data: user, error: sessionError } = await supabase.auth.getUser();

  if (sessionError || !user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await supabase
    .from("groups")
    .select("*")
    .eq("created_by", user.id);

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data, { status: 200 });
}
