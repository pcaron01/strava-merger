import Link from 'next/link';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-text">Strava Merger</h1>
        <p className="text-lg text-gray-600 mb-8">
          Merge and clean your Strava activity files
        </p>
        <Link
          href="/auth/signin"
          className="inline-block px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-opacity-90 transition"
        >
          Sign in with Email
        </Link>
      </div>
    </div>
  );
}
