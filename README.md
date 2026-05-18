# Strava Merger

A clean, minimal Next.js web app for merging and cleaning Strava activity files.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Auth:** NextAuth.js with Email (magic link) provider
- **Styling:** Tailwind CSS
- **Database:** Vercel Postgres (via Prisma)
- **Email:** Resend
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- A Vercel Postgres database
- A Resend API key

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.local.example .env.local
```

Fill in the required values:
- `NEXTAUTH_URL`: Your application URL (e.g., `http://localhost:3000` for development)
- `NEXTAUTH_SECRET`: Generate with `openssl rand -base64 32`
- `RESEND_API_KEY`: Get from [Resend](https://resend.com)
- `DATABASE_URL`: Your Vercel Postgres connection string

4. Set up the database:

```bash
npx prisma migrate deploy
```

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Landing Page**: Clean hero with sign-in CTA
- **Email Authentication**: Magic link sign-in via Resend
- **Dashboard**: File upload with drag-and-drop support for `.gpx` and `.fit` files
- **Minimal Design**: Light, clean UI inspired by Vercel and Claude.ai

## Project Structure

```
/app                           # Next.js app directory
  /page.tsx                    # Landing page
  /dashboard/page.tsx          # Main app (protected)
  /auth
    /signin/page.tsx           # Sign in page
    /verify-request/page.tsx   # Email verification message
  /api/auth/[...nextauth]      # NextAuth route handler
  /globals.css                 # Global styles
  /layout.tsx                  # Root layout

/components                    # React components
  DropZone.tsx                 # File upload component
  FileList.tsx                 # Uploaded files list

/lib
  /auth.ts                     # NextAuth configuration
  /prisma.ts                   # Prisma client

/prisma
  /schema.prisma               # Database schema
```

## Environment Variables

See `.env.local.example` for all required variables.

## Deployment

Deploy to Vercel:

```bash
vercel
```

Make sure to add the environment variables to your Vercel project settings.
