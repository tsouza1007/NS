'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
// Option 1: Use a relative path (update as needed based on your folder structure)
import { createClient } from '../../../utils/supabase/server'

// Option 2: If you want to use the '@' alias, ensure your tsconfig.json and next.config.js are configured for path aliases.

export async function signOut() {
  const supabase = await createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/login') // 🔁 Redirect to login after logout
}
