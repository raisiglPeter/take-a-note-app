# Take-a-note

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_App-blue?style=for-the-badge&logo=vibe)](https://take-a-note-app-raisigl.vercel.app/)

Take-a-note is a responsive note-taking application inspired by Google Keep, paired with an effort/progress tracker. <br/>

I created this project to serve two primary goals:

1. **Personal Utility:** Build a completely free, privacy-focused alternative to Google Keep that runs cleanly locally and ensures zero data scraping.
2. **Skill Up:** A real-world project to improve my full-stack TypeScript skills with a focus on strict type safety across database schemas, APIs and React in general.

---

## Key Features

- **Masonry Notes Layout** Google Keep-like layout with filters, tags and search.
- **Rich Notes** Notes allow all content from text, to check-boxes and images.
- **Progress Effort Tracker:** Progress tracking system based on my own daily time-block logging.

---

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Vanilla CSS
- **Backend & Database:** Supabase (PostgreSQL, Auth, RLS)
- **State & Data Layer:** Custom React Hooks and modular API services

---

## Project Structure

```text
src/
├── components/          # UI components (Masonry grid, Progress dashboard, Auth forms)
├── context/             # Global Auth Context and Session Providers
├── hooks/               # Custom React hooks (useNotes, useProgress, useAuth)
├── lib/                 # Third-party client configurations (supabaseClient.ts)
├── services/            # Isolated database access layers (notesService, progressService)
├── types/               # TypeScript interfaces and Supabase schema types
└── App.tsx              # Core layout and route management
```
