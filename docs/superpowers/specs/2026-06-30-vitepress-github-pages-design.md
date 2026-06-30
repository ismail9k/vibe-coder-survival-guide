# Design: VitePress docs site on GitHub Pages

**Date:** 2026-06-30
**Status:** Approved

## Goal

Turn the existing collection of root-level Markdown files (the Vibe Coder's
Survival Guide) into an elegant, navigable documentation site hosted on GitHub
Pages — without rewriting the content.

## Decisions

- **Generator:** VitePress (latest v1). Chosen for its TypeScript/Vue base,
  minimal config, elegant default theme with dark mode + bundled local search,
  and because it dogfoods the guide's own "AI-friendly, TypeScript end-to-end,
  buy-don't-build" ethos.
- **Package manager:** pnpm (matches the guide's recommendation).
- **Branding level:** light — default theme plus a custom accent color, site
  title, and a designed home page. No custom components, fonts, or logo.

## Architecture

- **Source content** stays as the existing `.md` files at the repo root.
  VitePress `srcDir` is the repo root.
- **Config:** `.vitepress/config.ts` (TypeScript).
- **`README.md`** remains the GitHub repo landing page. A new **`index.md`** is
  the site home page (VitePress treats `README.md` as an ordinary page, so there
  is no home-page collision).
- **Build artifacts** (`.vitepress/dist`, `.vitepress/cache`) and
  `node_modules/` are gitignored.
- Existing relative cross-links (`./web.md`, `./glossary.md#formatter`) work
  unchanged in VitePress.

## Site structure & navigation

- **Top nav:** Home · Learning Path · Stacks (dropdown: Web / Mobile / Backend /
  AI Apps) · Glossary · GitHub link.
- **Sidebar** (shown on content pages), grouped:
  - *Start here* — Universal Toolbelt, Buy Don't Build
  - *Pick your stack* — Web, Mobile, Backend, AI Apps
  - *Learn & reference* — Learning Path, Skills & Plugins, Glossary
- **Search:** VitePress built-in local search (bundled minisearch). No external
  service.

## Home page

`index.md` with `layout: home` frontmatter:

- **Hero:** title "The Vibe Coder's Survival Guide", the existing tagline, and
  two action buttons — *Start the Learning Path* (→ learning-path) and *Jump to
  your stack* (→ a stacks section/anchor).
- **Feature cards:** one per major section — Universal Toolbelt, Buy Don't
  Build, Web, Mobile, Backend, AI Apps, Learning Path, Glossary — each with a
  one-line hook drawn from the existing README index.
- **Theme:** default theme + custom accent color via theme CSS variables; dark
  mode included for free.

## Deployment

- **GitHub Actions workflow** at `.github/workflows/deploy.yml`: builds on push
  to `main` and publishes to GitHub Pages (using `actions/configure-pages`,
  `actions/upload-pages-artifact`, `actions/deploy-pages`).
- **Base path:** `base: '/vibe-coder-survival-guide/'` in config, for project
  pages at `ismail9k.github.io/vibe-coder-survival-guide/`. If a custom domain or
  org-root is added later, this becomes `'/'` (one-line change).
- **One-time manual step (documented, not automatable here):** repo
  **Settings → Pages → Source: GitHub Actions**.

## Out of scope (YAGNI)

Custom Vue components, blog, i18n, analytics, custom fonts/logo. All can be added
later; none are needed to ship an elegant site.

## Success criteria

- `pnpm docs:dev` serves the site locally with working nav, sidebar, and search.
- `pnpm docs:build` produces a static site with no dead internal links.
- Pushing to `main` deploys automatically; the live site renders all sections
  with the designed home page and the chosen accent color in both light and dark
  mode.
