import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = "https://" + process.env.NEXT_PUBLIC_SUPABASE_URL ?? ""
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""

export default createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
    }
})