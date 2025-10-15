# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the React + TypeScript source; group shared UI in `src/components/` and data helpers under `src/lib/` as they grow.
- `public/` holds static assets served as-is; reference them with absolute paths like `/logo.png`.
- `docs/` stores the source material displayed on the page (currently `docs/Guía de Trabajo_ Acuerdo Smarketing 2026.docx`). Keep additions in this folder so the UI can surface them.
- Top-level config (`vite.config.ts`, `tailwind.config.js`, `postcss.config.js`) and `index.html` define the build pipeline; never edit generated `dist/` output manually.

## Build, Test, and Development Commands
- `npm install` — install dependencies; run whenever `package.json` changes.
- `npm run dev` — start the Vite dev server at `http://localhost:5173` with hot reload.
- `npm run build` — run TypeScript project references (`tsc -b`) and emit the production bundle into `dist/`; required before deploying to GitHub Pages.
- `npm run preview` — serve the built assets locally to confirm GitHub Pages behavior.

## Coding Style & Naming Conventions
- Stick to TypeScript, functional components, and React hooks; new files use the `.tsx` extension.
- Components and hooks follow PascalCase (`TeamGrid.tsx`) and camelCase (`useDocsContent.ts`) naming.
- Styling prefers Tailwind utilities; fall back to scoped CSS modules stored alongside components when utilities are insufficient.
- Use two-space indentation, single quotes, and keep imports sorted: React first, then local modules.

## Testing Guidelines
- Automated tests are not present yet; introduce `vitest` + React Testing Library when adding coverage.
- Place specs in `src/__tests__/` or next to components as `<Name>.test.tsx`; mirror the component structure.
- Cover parsing of `docs/` content and the rendering pipeline; block merges until affected logic has at least smoke coverage.

## Commit & Pull Request Guidelines
- Follow Conventional Commits (`feat:`, `fix:`, `chore:`) as established in history; keep scopes short.
- Ensure each commit passes type checks and build; avoid committing `dist/` artifacts or editor clutter.
- PRs must include a summary, screenshots or GIFs for UI work, and links to the tracked issue or task.
- Confirm `npm run build` (and new tests when added) succeeds before requesting review; call out known gaps explicitly.

## Deployment Notes
- GitHub Pages serves the Vite `dist/` directory from `main`; confirm CI runs `npm run build` before merge.
- After updating `docs/`, run `npm run preview` to verify the latest content renders correctly before pushing.
