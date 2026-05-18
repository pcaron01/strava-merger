import { signIn } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="max-w-sm w-full bg-white border border-border rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-text">Sign in</h2>
        <form
          action={async (formData) => {
            'use server';
            await signIn('resend', formData);
            redirect('/auth/verify-request');
          }}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text mb-2"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-accent text-white font-medium rounded-lg hover:bg-opacity-90 transition"
          >
            Send magic link
          </button>
        </form>
      </div>
    </div>
  );
}
