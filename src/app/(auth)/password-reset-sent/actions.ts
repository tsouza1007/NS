'use server'

import { createClient } from '../../../utils/supabase/server'

export async function resendPasswordReset(email: string) {
  const supabase = await createClient();
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    // You may want to update the redirectTo URL for production
    redirectTo: 'http://localhost:3000/auth/update-password',
  });
  if (error) {
    return { success: false, message: error.message };
  }
  return { success: true, message: 'Password reset email sent.' };
}