import { createClient } from "@supabase/supabase-js"

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  console.error("Missing env.NEXT_PUBLIC_SUPABASE_URL")
} else if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.error("Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY")
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default supabase
