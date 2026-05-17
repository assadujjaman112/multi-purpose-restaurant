import { initializeApp } from "firebase/app";

const REQUIRED_VARS = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const missing = Object.entries(REQUIRED_VARS)
  .filter(([, value]) => !value)
  .map(([key]) => `VITE_FIREBASE_${key.replace(/([A-Z])/g, "_$1").toUpperCase()}`);

if (missing.length > 0) {
  throw new Error(
    `[env] Missing Firebase environment variable(s):\n  ${missing.join("\n  ")}\n` +
      "Add them to your .env.local file and restart the dev server."
  );
}

const app = initializeApp(REQUIRED_VARS);
export default app;
