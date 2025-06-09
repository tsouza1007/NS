// app/dashboard/longjournal/page.tsx
import { redirect } from 'next/navigation'
import { createClient } from '../../../utils/supabase/server'
import JournalClient from './JournalClient' // Your journal component

export default async function LongJournalPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login') // If no user, redirect to login
  }

  return <JournalClient user={user} /> // Pass user to the Journal component
}