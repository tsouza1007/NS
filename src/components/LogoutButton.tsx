'use client'

import { useFormStatus } from 'react-dom'
import { signOut } from '@/app/(auth)/logout/actions'

export default function LogoutButton() {
  const { pending } = useFormStatus()

  return (
    <form action={signOut}>
      <button
        type="submit"
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        disabled={pending}
      >
        {pending ? 'Logging out...' : 'Logout'}
      </button>
    </form>
  )
}
