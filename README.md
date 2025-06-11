# 🎧 Brutify

A minimalist Spotify-powered web app built with React, TypeScript, and Vite.

Brutify lets you authenticate with your Spotify account, fetches your top tracks, and presents them in a clean, brutalist layout. The project was built to explore OAuth2 PKCE flows, TypeScript-driven APIs, and modern SPA structure.

## 🚀 Live Demo

[brutify.online](brutify.online)

## 🔧 Tech Stack

- **React** with **TypeScript**
- **Vite** for fast dev builds
- **Spotify Web API**
- **OAuth2 with PKCE** (no external libraries)
- **Scoped component styles**
- **LocalStorage** for session persistence
- **Vercel** for deployment

## 🔐 Authentication

This app uses the PKCE OAuth2 flow:
- Generates `code_verifier` and `code_challenge`
- Redirects to Spotify login
- Exchanges token on callback
- Access token stored in `localStorage`

See `src/auth.ts` for implementation.

## 🧩 App Structure
rc/
├── auth.ts                # OAuth logic
├── main.tsx               # App entry point
├── types.d.ts             # Custom TypeScript types
├── components/
│   ├── app/
│   ├── login/
│   ├── nav/
│   ├── sidebar/
│   ├── trackinfo/
│   └── …
└── styles.ts              # Grid + layout styling

## 📈 Future Improvements

- Add refresh token handling
- Break out API logic into hooks
- Introduce global state (Zustand or Context API)
- Add unit tests and loading states

## 📄 License

MIT
