'use client';

import { resetPassword } from '../login/actions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function ForgotPasswordPage() {
  return (
    <div className="grid min-h-screen place-items-center px-4 bg-transparent text-primary">
      <form
        action={resetPassword}
        className="w-full max-w-md border border-white/10 backdrop-blur-md bg-transparent p-8 rounded-2xl shadow-xl"
      >
        <h1 className="text-3xl font-bold text-center mb-2">Reset Password</h1>
        <p className="text-sm text-center text-white/70 mb-6">
          Enter your email to receive a reset link
        </p>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="bg-white/5 placeholder-white/50 text-white"
            />
          </div>

          <Button type="submit" className="w-full">
            Send Reset Link
          </Button>
        </div>
      </form>
    </div>
  );
}
