# Nikhil Khambhayta — Portfolio

The active website is a Next.js portfolio using the charcoal and blue redesign.

Run `npm install` and `npm run dev` to preview it. Run `npm run build` for a production build, then `npm start` to serve it.

The Next.js entry is `app/page.jsx`, which renders `components/PortfolioPage.jsx`. Reconciled project and certification content lives in `data/portfolio.js`. Styling is in `app/globals.css` and `app/redesign.css`; the original charcoal and blue palette is unchanged. Local images are in `public/assets/`.

The original app, components, Vite source, public files, and configuration are preserved in `backups/before-redesign-2026-10-06/`.

The hosted static version is in `personal-site/dist/`.

After a root production build, `node scripts/prepare-hosted-site.cjs` synchronizes the rendered Next.js HTML and assets into that hosted directory and validates navigation, local assets, content counts, legacy details, and palette preservation. The hosting identity stays in `personal-site/.openai/hosting.json`.

Content provenance and missing education, résumé, repository links, and release status are documented in `docs/content-sources.md`. `docs/validation.md` records the checks completed for this redesign.

## Original template notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
