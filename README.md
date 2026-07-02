# Cydah Network Services — Website

Multi-page React + Vite site for Cydah Network Services LLC, with each nav link as its own route/page:

- `/` — Home
- `/services` — Services
- `/markets` — Markets
- `/process` — Our Process
- `/about` — About
- `/contact` — Contact

## Run locally / in StackBlitz

```bash
npm install
npm run dev
```

To import into StackBlitz: create a new "Vite + React" project, then replace the generated files with the
contents of this folder (or upload this folder as a zip/GitHub repo and open it directly in StackBlitz).

## Stack

- React 18
- React Router v6 (client-side routing between pages)
- Vite
- Plain CSS + inline styles (no external UI framework) — colors/fonts match the original brand: Archivo for
  headings, Inter Tight for body, brand red `#a32121`.
