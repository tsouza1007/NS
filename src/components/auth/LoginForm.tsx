'use client'

import React from 'react'
import { login } from '@/app/(auth)/login/actions'
import { Button } from '../ui/button'

const LoginForm: React.FC = () => {
  return (
    <form
       action={login}
      className="w-full max-w-md bg-card text-card-foreground backdrop-blur-md p-8 rounded-2xl shadow-xl border border-border"
    >
      <h1 className="text-3xl font-bold text-center mb-2">🖊️ JournalMind</h1>
      <h2 className="text-lg text-center mb-4">Welcome back</h2>
      <p className="text-sm text-center mb-6 text-muted-foreground">
        Enter your credentials to access your journal
      </p>

      <div className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full p-2 rounded-md bg-transparent border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full p-2 rounded-md bg-transparent border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="••••••••"
          />
        </div>

        <div className="flex justify-end text-sm text-muted-foreground">
          <a href="/forgot-password" className="hover:underline">
            Forgot password?
          </a>
        </div>

        {/* <button
          type="submit"
          className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition"
        >
          Sign in
        </button> */}
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </div>

      <p className="text-sm text-center text-muted-foreground mt-6">
        Don’t have an account?{' '}
        <a href="/signup" className="underline hover:text-foreground">
          Sign up
        </a>
      </p>
    </form>
  )
}

export default LoginForm
