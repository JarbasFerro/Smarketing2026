# Smarketing2026

This repository contains a small web app that explains the **ABB Smarketing 2026 working guide** in a very visual and easy-to-read way.

If you are new to coding, think of this project like this:
- `docs/` = source material (the original content files)
- `src/` = the website code
- `public/` = static files shown directly on the site (like logos)
- `dist/` = final website files generated automatically when building

---

## What this project is for

The app shows an internal guide about how Sales and Marketing work together (“Smarketing”).

It includes:
- A **Spanish** version
- An **English** version
- A language switcher button in the page header
- A clean, responsive layout built with React + Tailwind CSS

---

## Tech stack (simple explanation)

- **React**: used to build the page UI with reusable components
- **TypeScript**: helps catch mistakes while coding
- **Vite**: fast development server and production build tool
- **Tailwind CSS**: utility classes for styling
- **GitHub Pages**: where the built site can be published

---

## Project structure

```text
Smarketing2026/
├─ docs/                         # Original source documents/content
├─ public/                       # Static files served as-is
├─ src/                          # Main application code
│  ├─ App.tsx                    # Chooses Spanish or English page
│  ├─ ABBSmarketing2026.tsx      # Spanish page content
│  ├─ ABBSmarketing2026EN.tsx    # English page content
│  ├─ main.tsx                   # App entry point
│  ├─ index.css                  # Global styles + ABB fonts
│  └─ assets/fonts/              # Local font files
├─ index.html                    # HTML shell for Vite app
├─ vite.config.ts                # Vite config (includes GitHub Pages base path)
├─ package.json                  # Scripts + dependencies
└─ README.md                     # This file
```

---

## Requirements

Install these on your computer:
- **Node.js 18+** (recommended)
- **npm** (comes with Node.js)

Check versions:

```bash
node -v
npm -v
```

---

## How to run locally (step by step)

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open the URL shown in terminal (usually `http://localhost:5173`).

This mode auto-refreshes when you change files.

---

## Build for production

Create an optimized build:

```bash
npm run build
```

This generates the `dist/` folder (final website output).

Preview that production build locally:

```bash
npm run preview
```

---

## Deploy to GitHub Pages

This repository is configured for GitHub Pages with base path:

- `/Smarketing2026/`

That setting is in `vite.config.ts`.

Typical flow:
1. Push changes to the repository.
2. GitHub Actions runs the deploy workflow.
3. GitHub Pages serves the generated `dist/` output.

In GitHub settings, Pages source should be **GitHub Actions**.

---

## Content and language behavior

- `App.tsx` decides whether to render Spanish or English content.
- Spanish content lives in `src/ABBSmarketing2026.tsx`.
- English content lives in `src/ABBSmarketing2026EN.tsx`.
- Language buttons switch between `es` and `en`.

---

## Styling and fonts

- Main styles are in `src/index.css`.
- Tailwind is enabled through PostCSS/Tailwind config files.
- ABB brand fonts are loaded from `src/assets/fonts/` with `@font-face`.

---

## Useful npm scripts

- `npm run dev` → start local dev server
- `npm run build` → type-check + production build
- `npm run preview` → preview production build locally

---

## Notes for contributors

- Use TypeScript (`.ts` / `.tsx`) for new code.
- Keep components as functional React components.
- Prefer Tailwind classes for styling.
- Do **not** edit `dist/` manually (it is generated).
- Keep source documents in `docs/` so content stays organized.

---

## Troubleshooting

### The site loads but styles/fonts look wrong
- Run `npm install` again.
- Confirm font files exist in `src/assets/fonts/`.
- Restart `npm run dev`.

### Images or links break on GitHub Pages
- Check paths are compatible with base path `/Smarketing2026/`.
- Confirm Vite config still has `base: '/Smarketing2026/'`.

### Build fails
- Run:

```bash
npm run build
```

- Read the TypeScript error message and fix the file/line shown.

---

## Quick start (copy/paste)

```bash
npm install
npm run dev
```

Then later:

```bash
npm run build
npm run preview
```

