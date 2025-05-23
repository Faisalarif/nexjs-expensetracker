import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // ⚠️ Secure it in env
)

export async function GET() {
  const sql = `
    create table if not exists products (
      id bigserial primary key,
      name text not null,
      description text,
      price numeric not null,
      created_at timestamp with time zone default now()
    );
  `

  const { error } = await supabase.rpc('execute_sql', { sql })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ message: 'Table created!' })
}