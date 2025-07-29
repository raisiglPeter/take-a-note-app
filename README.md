# 🛠️ Project Roadmap: Dual-Mode To-Do App (Offline + Cloud Sync)

This document outlines the tech stack and architecture for building a free-to-use to-do app that supports both offline mode (local storage) and online mode (cloud backup + Google sign-in). The stack is designed to avoid hosting costs and paid services.

---

## 🧱 Stack Components

### 1. 🖥️ Frontend Hosting (Free)

| Platform       | Features                                                              |
|----------------|-----------------------------------------------------------------------|
| **Netlify**    | Free static hosting, custom domains, HTTPS, CI/CD from GitHub         |
| **Vercel**     | Free for personal projects, especially great for Next.js              |
| **GitHub Pages** | Good for plain React apps, but with limited configuration options  |

✅ **Recommended**: **Netlify** – Easy deploy, handles routing, environment variables, and CI/CD. Free tier is sufficient.

---

### 2. 🔐 Authentication (Free Google Sign-in)

| Service           | Notes                                                                 |
|-------------------|-----------------------------------------------------------------------|
| **Clerk.dev**     | Google sign-in + other providers; 5,000 MAUs free tier (as of 2025)   |
| **Supabase Auth** | Up to 50,000 monthly active users. Full OAuth support including Google|
| **Auth0**         | 7,000 active users – supports Google, GitHub, etc.                    |
| **NextAuth.js**   | Google login via OAuth, but requires a server to host it              |

✅ **Recommended**: **Clerk.dev** or **Supabase Auth** – Both offer easy integration and generous free tiers. Supabase also includes a built-in database.

---

### 3. ☁️ Cloud Data Storage (Free)

| Option             | Free Tier Description                                  |
|--------------------|--------------------------------------------------------|
| **Supabase**        | 500MB PostgreSQL DB, 1GB file storage, 50,000 MAUs     |
| **Appwrite**        | Self-hostable; free tier available on their cloud      |
| **PocketBase**      | Lightweight, self-hosted SQLite backend                |
| **Cloudflare D1**   | Free SQLite-compatible cloud database                  |
| **Planetscale**     | MySQL backend with 5GB free                            |

✅ **Recommended**: **Supabase** – Combines PostgreSQL, auth, and API access in one free platform.

---

### 4. 📦 Local Storage (Web + React Native)

#### Web:
- `localStorage`
- `IndexedDB` (for structured or larger datasets)

#### React Native:
- `@react-native-async-storage/async-storage` (basic key/value)
- `realm` or `watermelondb` (more advanced, performant options)

---

## ✅ Proposed Architecture

### Offline Mode:
- Store todos in `localStorage` (web) or `AsyncStorage` (React Native)
- No login required

### Cloud Mode:
- Enable Google sign-in via **Supabase Auth** or **Clerk.dev**
- Store todos in **Supabase DB**
- On login:
  - **Option A**: Sync local data to cloud only while logged in
  - **Option B**: On login, prompt user to merge local and cloud todos

---

## 🔥 Deployment Workflow (Fully Free)

- **Frontend**: Deploy React app to **Netlify** (from GitHub repo)
- **Backend/Auth/DB**: Use **Supabase** (Auth + PostgreSQL DB)
- **Domain**: Use Netlify subdomain or a free domain from **Freenom**
- **Cost**: $0 — No server or subscription required

---

## 🧠 Other Considerations

- ✅ Add **PWA support** for offline mode (React makes this simple)
- 🔒 Encrypt user data if handling sensitive content
- 📊 Be aware of **rate limits** and **quotas** in free tiers if you scale

---
