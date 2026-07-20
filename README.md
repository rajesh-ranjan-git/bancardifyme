# bancardifyme

Welcome to bancardifyme! This is a modern finance/banking dashboard platform built with Next.js, giving users a unified view of their bank accounts, transactions, and payment transfers.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation Guide](#installation-guide)
- [Environment Variables](#environment-variables)
- [Running Locally](#running-locally)
- [Build](#build)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Author](#author)

## Project Overview

bancardifyme is a Next.js (App Router) banking dashboard. Users sign up / sign in, securely link their real bank accounts via Plaid, view balances and recent transactions across linked banks, transfer funds between accounts using Dwolla, and track their full transaction history.

## Features

- **Authentication:** Sign-up and sign-in flows backed by Appwrite accounts.
- **Bank Linking:** Securely connect bank accounts via Plaid Link.
- **My Banks:** View all linked bank accounts and their details.
- **Transaction History:** Browse historical transactions per linked account, with pagination.
- **Payment Transfer:** Transfer funds between accounts using Dwolla as the payment processor.
- **Dashboard Overview:** Total balance summary, animated counters, and a doughnut chart breakdown of balances by bank.
- **Error Monitoring:** Sentry integration for client, server, and edge runtime error tracking.

## Tech Stack

- **Frontend:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Radix UI, shadcn/ui-style components
- **Forms/Validation:** React Hook Form, Zod
- **Charts:** Chart.js, react-chartjs-2
- **Backend/Auth/Database:** Appwrite (accounts, database, users)
- **Banking Integrations:** Plaid (account linking, transactions), Dwolla (fund transfers)
- **Monitoring:** Sentry (`@sentry/nextjs`)

## Folder Structure

```bash
bancardifyme/
├── app/
│   ├── (auth)/              # Sign-in / sign-up routes and layout
│   ├── (root)/              # Authenticated app routes
│   │   ├── my-banks/         # Linked bank accounts page
│   │   ├── payment-transfer/  # Fund transfer page
│   │   ├── transaction-history/  # Transaction history page
│   │   └── page.tsx          # Dashboard home page
│   ├── api/                 # Route handlers (e.g. Sentry example API)
│   └── layout.tsx           # Root layout
├── components/              # UI components (BankCard, PlaidLink, TransactionsTable, Sidebar, etc.)
│   └── ui/                   # Base UI primitives (button, input, form, table, tabs, etc.)
├── constants/                # App-wide constants
├── lib/
│   ├── actions/              # Server actions (bank, dwolla, transaction, user)
│   ├── appwrite.ts           # Appwrite session/admin client setup
│   ├── plaid.ts              # Plaid client setup
│   └── utils.ts              # Shared utility functions
├── public/icons/              # SVG/icon assets
├── types/                    # Shared TypeScript types
├── sentry.client.config.ts
├── sentry.edge.config.ts
├── sentry.server.config.ts
└── next.config.mjs
```

## Installation Guide

### Prerequisites

- Node.js (v18 or later recommended)
- An [Appwrite](https://appwrite.io/) project (with a database and User/Bank/Transaction collections)
- A [Plaid](https://plaid.com/) developer account (Sandbox credentials are sufficient for local development)
- A [Dwolla](https://www.dwolla.com/) sandbox account

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/rajesh-ranjan-git/bancardifyme.git
   cd bancardifyme
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables (see below).

4. Start the development server:

   ```bash
   npm run dev
   ```

5. The app should now be running at http://localhost:3000

## Environment Variables

Create a `.env.local` file in the root directory with:

```bash
# Appwrite
NEXT_PUBLIC_APPWRITE_ENDPOINT=<your-appwrite-endpoint>
NEXT_PUBLIC_APPWRITE_PROJECT=<your-appwrite-project-id>
NEXT_APPWRITE_KEY=<your-appwrite-api-key>
APPWRITE_DATABASE_ID=<your-appwrite-database-id>
APPWRITE_USER_COLLECTION_ID=<your-appwrite-user-collection-id>
APPWRITE_BANK_COLLECTION_ID=<your-appwrite-bank-collection-id>
APPWRITE_TRANSACTION_COLLECTION_ID=<your-appwrite-transaction-collection-id>

# Plaid
PLAID_CLIENT_ID=<your-plaid-client-id>
PLAID_SECRET=<your-plaid-secret>

# Dwolla
DWOLLA_KEY=<your-dwolla-key>
DWOLLA_SECRET=<your-dwolla-secret>
DWOLLA_ENV=<sandbox-or-production>
```

## Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You can start editing the dashboard by modifying `app/(root)/page.tsx`; the page auto-updates as you edit.

## Build

```bash
npm run build
npm run start
```

## Scripts

| Script          | Description                              |
| ---------------- | ----------------------------------------- |
| `npm run dev`   | Start the Next.js development server      |
| `npm run build` | Build the app for production              |
| `npm run start` | Start the production server               |
| `npm run lint`  | Run Next.js's ESLint configuration        |

## Deployment

The easiest way to deploy this Next.js app is via the [Vercel Platform](https://vercel.com/new). Error tracking is wired up through Sentry (`@sentry/nextjs`) for client, server, and edge runtimes.

## Author

- **Rajesh Ranjan** — [GitHub @rajesh-ranjan-git](https://github.com/rajesh-ranjan-git)

---
