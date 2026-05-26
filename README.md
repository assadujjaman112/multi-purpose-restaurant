# Bermiz — Multi-Purpose Restaurant Client

React frontend for a restaurant website with menu browsing, cart, checkout, table booking, and Firebase authentication. It talks to a separate REST API backend for menu data, carts, bookings, and user records.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- [pnpm](https://pnpm.io/) (recommended) or npm
- A [Firebase](https://firebase.google.com/) project with **Email/Password** and **Google** sign-in enabled
- A running REST API backend (see [Backend API](#backend-api))

## Quick start

### 1. Clone and install

```bash
git clone <repository-url>
cd multi-purpose-restaurant
pnpm install
```

### 2. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

Vite loads `.env.local` automatically. **Restart the dev server** after changing env vars.

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_API_URL` | Yes | REST API base URL, no trailing slash (e.g. `http://localhost:5000`) |
| `VITE_FIREBASE_API_KEY` | Yes | Firebase web app config |
| `VITE_FIREBASE_AUTH_DOMAIN` | Yes | Firebase web app config |
| `VITE_FIREBASE_PROJECT_ID` | Yes | Firebase web app config |
| `VITE_FIREBASE_STORAGE_BUCKET` | Yes | Firebase web app config |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Yes | Firebase web app config |
| `VITE_FIREBASE_APP_ID` | Yes | Firebase web app config |
| `VITE_TAX_RATE` | No | Tax as a decimal (default `0.1` = 10%) |
| `VITE_DELIVERY_CHARGE` | No | Default delivery fee (default `0`) |
| `VITE_PHONE` | No | Restaurant phone shown in reservation CTAs |

Example `.env.local`:

```env
VITE_API_URL=http://localhost:5000
VITE_TAX_RATE=0.1
VITE_DELIVERY_CHARGE=0
VITE_PHONE=+1234567890

VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
```

### 3. Set up Firebase

1. Open [Firebase Console](https://console.firebase.google.com/) → your project → **Project settings** → **Your apps** → add a **Web** app if you have not already.
2. Copy the config values into `.env.local` (see above).
3. Go to **Authentication** → **Sign-in method** and enable:
   - Email/Password
   - Google
4. Add your dev origin (e.g. `http://localhost:5173`) under **Authentication** → **Settings** → **Authorized domains** if needed.

### 4. Start the backend

The client expects a REST API at `VITE_API_URL`. Start your backend before running the frontend. The default local URL is `http://localhost:5000`.

### 5. Run the dev server

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Vite dev server with HMR |
| `pnpm build` | Production build to `dist/` |
| `pnpm preview` | Serve the production build locally |
| `pnpm lint` | Run ESLint |

## Backend API

The frontend uses these endpoints (relative to `VITE_API_URL`):

| Method | Endpoint | Used for |
|--------|----------|----------|
| `GET` | `/foods` | Menu listing |
| `POST` | `/foods` | Add menu item (authenticated) |
| `GET` | `/carts?email=` | Fetch user cart |
| `POST` | `/carts` | Add item to cart |
| `PATCH` | `/carts/:id` | Update cart quantity |
| `DELETE` | `/carts/:id` | Remove cart item |
| `POST` | `/users` | Register user in backend after Firebase signup |
| `POST` | `/bookings` | Table reservation |

This repository contains only the client. The API server is a separate project and must be running for menu, cart, booking, and signup flows to work.

## Deploy to Firebase Hosting

The project includes Firebase Hosting config (`firebase.json`). Build first, then deploy:

```bash
pnpm build
firebase deploy --only hosting
```

Make sure you are logged in (`firebase login`) and using the correct project (`firebase use`).

For production, set the same `VITE_*` variables in your CI/build environment before running `pnpm build`. Env vars are baked into the bundle at build time.

## Project structure

```
src/
├── components/     # UI components (cart, checkout, shared layout)
├── firebase/       # Firebase app initialization
├── hooks/          # useCart, useMenu
├── layout/         # MainLayout (navbar + footer)
├── lib/            # api client, helpers, env, alerts
├── pages/          # Route pages
├── providers/      # AuthProvider (Firebase auth context)
└── routes/         # React Router config + PrivateRoute
```

## Tech stack

- React 18 + Vite
- React Router 6
- Tailwind CSS 3
- Firebase Authentication
- Axios
- SweetAlert2

## Troubleshooting

**App crashes on load with an env error**  
Check that `.env.local` exists and all required `VITE_*` variables are set, then restart `pnpm dev`.

**Login works but menu/cart fails**  
Confirm the backend is running and `VITE_API_URL` points to it. Check the browser Network tab for failed requests.

**Google sign-in popup blocked or fails**  
Verify Google is enabled in Firebase Authentication and your domain is authorized.

**Blank page after deploy**  
Ensure Firebase Hosting rewrites are configured (already in `firebase.json`) and you ran `pnpm build` before deploying.
