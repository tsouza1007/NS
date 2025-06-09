'use client'

import { useState } from 'react'
import { updatePassword } from '../login/actions'

export default function UpdatePasswordPage() {
  const [passwordMatch, setPasswordMatch] = useState(true)
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState<boolean | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const password = (form.elements.namedItem('new_password') as HTMLInputElement).value
    const confirm = (form.elements.namedItem('confirm_password') as HTMLInputElement).value

    if (password !== confirm) {
      setPasswordMatch(false)
      return
    }

    setPasswordMatch(true)

    const formData = new FormData(form)
    const result = await updatePassword(formData)

    if (result.success) {
      setSuccess(true)
      setMessage(result.message)
      form.reset()
    } else {
      setSuccess(false)
      setMessage(result.message)
    }
  }

  return (
    <div className="grid min-h-screen place-items-center px-4 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black w-full max-w-md p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-semibold text-center mb-4">Set New Password</h1>
        <p className="text-sm text-center text-gray-500 mb-6">
          Enter your new password below.
        </p>

        <div className="space-y-4">
          <div>
            <label htmlFor="new_password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              id="new_password"
              name="new_password"
              type="password"
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirm_password"
              name="confirm_password"
              type="password"
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {!passwordMatch && (
            <p className="text-red-500 text-sm">Passwords do not match.</p>
          )}

          {success !== null && (
            <p className={`text-sm ${success ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  )
}
