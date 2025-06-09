'use client';

import { useActionState } from 'react';
import { signup } from './actions';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const initialState: { error: string | null; success: boolean } = {
  error: null,
  success: false,
};

export default function SignUpPage() {
  const [state, formAction] = useActionState(signup, initialState);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  

  useEffect(() => {
    if (state.success) {
      setShowPopup(true);
      const timer = setTimeout(() => {
        setShowPopup(false);
        router.push('/login');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.success, router]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    const confirm = (form.elements.namedItem('confirm_password') as HTMLInputElement).value;

    if (password !== confirm) {
      e.preventDefault();
      setPasswordMatch(false);
    }
  };

  return (
    <div className="grid col-span-12 min-h-screen w-full place-items-center bg-transparent px-4">
      <form
        action={formAction}
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl text-primary"
      >
        <h1 className="text-3xl font-bold text-center mb-2">🖊️ JournalMind</h1>
        <h2 className="text-lg text-center mb-4 text-primary/90">Create your account</h2>
        <p className="text-sm text-center mb-6 text-primary/70">Fill in the details to get started</p>

        <div className="space-y-5">
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

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="bg-white/5 placeholder-white/50 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm_password">Confirm Password</Label>
            <Input
              id="confirm_password"
              name="confirm_password"
              type="password"
              required
              placeholder="••••••••"
              className="bg-white/5 placeholder-white/50 text-white"
            />
          </div>

          {!passwordMatch && (
            <p className="text-red-500 text-sm">Passwords do not match.</p>
          )}

          {state.error && (
            <p className="text-red-500 text-sm">{state.error}</p>
          )}

          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </div>

        <p className="text-sm text-center text-white/70 mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-white underline hover:text-white/90">
            Sign in
          </a>
        </p>
      </form>

      {showPopup && (
        <div className="absolute top-4 px-6 py-3 bg-green-600 text-white rounded shadow-lg transition-all duration-300">
          Sign up successful! Redirecting...
        </div>
      )}
    </div>
  );
}
