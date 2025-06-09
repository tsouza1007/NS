// app/auth/signup/actions.ts
'use server'

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function signup(
  _: any,
  formData: FormData
): Promise<{ error: string | null; success: boolean }> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signUp({ email, password })

  if (error) {
    return { error: error.message, success: false }
  }

  return { error: null, success: true }
}
