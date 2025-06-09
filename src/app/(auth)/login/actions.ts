'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { routes } from '@/lib/routes'

import { createClient } from '../../../utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath(routes.home, 'layout')
  redirect(routes.dashboard)
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath(routes.home, 'layout')
  redirect(routes.home)
}

// ✅ Reset password action
export async function resetPassword(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://localhost:3000/update-password', // ✅ Use full URL for local dev
    // In production:
    // redirectTo: 'https://your-domain.com/update-password',
  })

  if (error) {
    redirect('/error')
  }

  redirect('/password-reset-sent')
}


// ✅ Update password action after redirect from email
export async function updatePassword(formData: FormData) {
  const supabase = await createClient()
  const newPassword = formData.get('new_password') as string

  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  })

  if (error) {
    return { success: false, message: error.message }
  }

  return { success: true, message: 'Password updated successfully' }
}

