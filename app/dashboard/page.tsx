import { auth, signOut } from '@/lib/auth';
import { redirect } from 'next/navigation';
import DropZone from '@/components/DropZone';
import FileList from '@/components/FileList';
import { useState } from 'react';

export default async function Dashboard() {
  const session = await auth();

  if (!session?.user) {
    redirect('/auth/signin');
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Nav Bar */}
      <nav className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-text">Strava Merger</h1>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button className="text-sm text-gray-600 hover:text-text transition">
              Sign out
            </button>
          </form>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <p className="text-gray-600">
            Welcome back, <span className="font-medium">{session.user.email}</span>
          </p>
        </div>

        {/* Upload Zone */}
        <div className="bg-white border border-border rounded-lg p-8 mb-8">
          <DropZone />
        </div>

        {/* Merge Button */}
        <div className="flex gap-4">
          <button
            disabled
            className="px-6 py-2 bg-accent text-white font-medium rounded-lg opacity-50 cursor-not-allowed"
          >
            Merge Files
          </button>
        </div>
      </div>
    </div>
  );
}
