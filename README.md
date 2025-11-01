Product Page – React/Next.js (TypeScript)

## Getting Started

1) Install dependencies

```bash
npm install
```

2) Configure environment

Create a `.env.local` file with:

```bash
NEXT_PUBLIC_API_BASE_URL=YOUR_API_BASE_URL
```

3) Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/lib/api.ts` – API client and endpoint helpers
- `src/types` – TypeScript types (Product, Category)
- `src/components/ui` – Reusable UI components
- `src/context/cart-context.tsx` – Cart state with localStorage
- `src/app/products` – Product listing and detail pages
- `src/app/providers.tsx` – App providers (Cart)

## Deployment

Render/Railway settings:

- Build: `npm run build`
- Start: `npm start`

Set `NEXT_PUBLIC_API_BASE_URL` in the host’s environment settings.
