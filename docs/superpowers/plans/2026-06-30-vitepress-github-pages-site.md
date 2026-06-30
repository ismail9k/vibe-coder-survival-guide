# VitePress GitHub Pages Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the existing root-level Markdown guide into an elegant VitePress documentation site that auto-deploys to GitHub Pages.

**Architecture:** VitePress reads the existing `.md` files from the repo root (`srcDir: '.'`). Config, theme overrides, and a designed home page live under `.vitepress/`. A GitHub Actions workflow builds on push to `main` and publishes to Pages. Content is not rewritten — only a new `index.md` home page is added.

**Tech Stack:** VitePress 1.x, pnpm, TypeScript config, GitHub Actions.

**Note on testing:** This is a static documentation site, so "tests" are build/dev-server verifications and the VitePress dead-link checker (which fails the build on broken internal links), not unit tests.

---

### Task 1: Initialize the Node project and install VitePress

**Files:**
- Create: `package.json`
- Modify: `.gitignore`
- Create: `pnpm-lock.yaml` (generated)

- [ ] **Step 1: Create `package.json`**

Create `package.json` at the repo root:

```json
{
  "name": "vibe-coder-survival-guide",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "docs:dev": "vitepress dev",
    "docs:build": "vitepress build",
    "docs:preview": "vitepress preview"
  },
  "devDependencies": {
    "vitepress": "^1.6.3"
  }
}
```

- [ ] **Step 2: Install dependencies**

Run: `pnpm install`
Expected: pnpm resolves and installs `vitepress` and its peers, creates `node_modules/` and `pnpm-lock.yaml`.

- [ ] **Step 3: Update `.gitignore`**

The current `.gitignore` contains only `docs/**`. Replace its full contents with:

```gitignore
docs/**
node_modules/
.vitepress/dist/
.vitepress/cache/
```

- [ ] **Step 4: Verify VitePress is installed**

Run: `pnpm vitepress --version`
Expected: prints a `vitepress/1.x.x` version line with no error.

- [ ] **Step 5: Commit**

```bash
git add package.json pnpm-lock.yaml .gitignore
git commit -m "chore: add VitePress and pnpm project setup"
```

---

### Task 2: Create the VitePress config (nav, sidebar, search, base path)

**Files:**
- Create: `.vitepress/config.ts`

- [ ] **Step 1: Create `.vitepress/config.ts`**

Create `.vitepress/config.ts` with the exact content below. `srcExclude` keeps the gitignored `docs/` working notes and `CONTRIBUTING.md` out of the built site.

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "The Vibe Coder's Survival Guide",
  description:
    'The opinionated, AI-friendly stack and learning path for people who build with AI.',
  base: '/vibe-coder-survival-guide/',
  srcDir: '.',
  srcExclude: ['README.md', 'CONTRIBUTING.md', 'docs/**'],
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Learning Path', link: '/learning-path' },
      {
        text: 'Stacks',
        items: [
          { text: 'Web', link: '/web' },
          { text: 'Mobile', link: '/mobile' },
          { text: 'Backend', link: '/backend' },
          { text: 'AI Apps', link: '/ai-apps' },
        ],
      },
      { text: 'Glossary', link: '/glossary' },
    ],
    sidebar: [
      {
        text: 'Start here',
        items: [
          { text: 'Universal Toolbelt', link: '/universal-toolbelt' },
          { text: "Buy, Don't Build", link: '/buy-dont-build' },
        ],
      },
      {
        text: 'Pick your stack',
        items: [
          { text: 'Web', link: '/web' },
          { text: 'Mobile', link: '/mobile' },
          { text: 'Backend', link: '/backend' },
          { text: 'AI Apps', link: '/ai-apps' },
        ],
      },
      {
        text: 'Learn & reference',
        items: [
          { text: 'Learning Path', link: '/learning-path' },
          { text: 'Skills & Plugins', link: '/skills-plugins' },
          { text: 'Glossary', link: '/glossary' },
        ],
      },
    ],
    search: { provider: 'local' },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ismail9k/vibe-coder-survival-guide',
      },
    ],
    editLink: {
      pattern:
        'https://github.com/ismail9k/vibe-coder-survival-guide/edit/main/:path',
      text: 'Edit this page on GitHub',
    },
  },
})
```

- [ ] **Step 2: Start the dev server and verify it boots**

Run: `pnpm docs:dev`
Expected: VitePress prints a local URL (e.g. `http://localhost:5173/vibe-coder-survival-guide/`) and starts without config errors. Open it; the existing pages (Web, Glossary, etc.) render with the top nav and sidebar. Stop the server with Ctrl+C.

- [ ] **Step 3: Commit**

```bash
git add .vitepress/config.ts
git commit -m "feat: add VitePress config with nav, sidebar, and local search"
```

---

### Task 3: Create the designed home page

**Files:**
- Create: `index.md`

- [ ] **Step 1: Create `index.md`**

Create `index.md` at the repo root with the home layout, hero, and feature cards. Links use `cleanUrls` paths (no `.md`):

```md
---
layout: home

hero:
  name: The Vibe Coder's Survival Guide
  text: The AI-friendly stack for people who build with AI.
  tagline: One default pick per job — not a menu. Close the gap between "it works" and "it's a real project."
  actions:
    - theme: brand
      text: Start the Learning Path
      link: /learning-path
    - theme: alt
      text: Jump to your stack
      link: /web

features:
  - title: Universal Toolbelt
    details: The tools every project needs — and the ones beginners most often miss. Read this first.
    link: /universal-toolbelt
  - title: Buy, Don't Build
    details: The jobs to outsource — auth, payments, email, scaling — instead of building yourself.
    link: /buy-dont-build
  - title: Web
    details: The default web stack, end to end in TypeScript.
    link: /web
  - title: Mobile
    details: The default mobile stack for shipping to phones.
    link: /mobile
  - title: Backend
    details: The default backend and API stack.
    link: /backend
  - title: AI Apps
    details: The default stack for building LLM-powered apps.
    link: /ai-apps
  - title: Learning Path
    details: A leveled, ordered route from fundamentals to shipping.
    link: /learning-path
  - title: Glossary
    details: Plain-language definitions for every bit of jargon in the guide.
    link: /glossary
---
```

- [ ] **Step 2: Verify the home page renders**

Run: `pnpm docs:dev`
Expected: the root URL shows the hero with two buttons and a grid of eight feature cards; each card links to its page. Stop the server with Ctrl+C.

- [ ] **Step 3: Commit**

```bash
git add index.md
git commit -m "feat: add designed home page with hero and section cards"
```

---

### Task 4: Apply the light custom branding (accent color)

**Files:**
- Create: `.vitepress/theme/index.ts`
- Create: `.vitepress/theme/custom.css`

- [ ] **Step 1: Create the theme entry `.vitepress/theme/index.ts`**

```ts
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```

- [ ] **Step 2: Create `.vitepress/theme/custom.css`**

Override the brand CSS variables with an emerald accent (works in light and dark mode):

```css
:root {
  --vp-c-brand-1: #0d9f6e;
  --vp-c-brand-2: #0b8a5f;
  --vp-c-brand-3: #0a7a54;
  --vp-c-brand-soft: rgba(13, 159, 110, 0.14);

  --vp-home-hero-name-color: var(--vp-c-brand-1);
}

.dark {
  --vp-c-brand-1: #2dd4a7;
  --vp-c-brand-2: #25c099;
  --vp-c-brand-3: #1fae8b;
  --vp-c-brand-soft: rgba(45, 212, 167, 0.16);
}
```

- [ ] **Step 3: Verify the accent color applies**

Run: `pnpm docs:dev`
Expected: hero name, buttons, and links use the emerald accent. Toggle dark mode (top-right) and confirm the brighter dark-mode variant applies. Stop the server with Ctrl+C.

- [ ] **Step 4: Commit**

```bash
git add .vitepress/theme/index.ts .vitepress/theme/custom.css
git commit -m "feat: add emerald accent color theme"
```

---

### Task 5: Verify a full production build (dead-link check)

**Files:** none (verification + fixes only)

- [ ] **Step 1: Run the production build**

Run: `pnpm docs:build`
Expected: build completes and writes to `.vitepress/dist`. VitePress fails the build if it finds dead internal links — if it reports any, fix the offending link in the source `.md` file (most likely a stale relative path) and re-run until the build is clean.

- [ ] **Step 2: Preview the built site**

Run: `pnpm docs:preview`
Expected: serves the built site at a local URL under `/vibe-coder-survival-guide/`; nav, sidebar, search, and all pages work. Stop with Ctrl+C.

- [ ] **Step 3: Commit (only if a link fix was needed)**

```bash
git add -A
git commit -m "fix: correct internal links flagged by VitePress build"
```

If no fixes were needed, skip this commit.

---

### Task 6: Add the GitHub Actions deploy workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create `.github/workflows/deploy.yml`**

```yaml
name: Deploy docs to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: pnpm/action-setup@v4
        with:
          version: 10
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - run: pnpm docs:build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .vitepress/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Validate the workflow YAML locally**

Run: `node -e "require('node:fs').readFileSync('.github/workflows/deploy.yml','utf8')" && echo OK`
Expected: prints `OK` (confirms the file exists and is readable). Visually confirm indentation matches the block above.

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: deploy VitePress site to GitHub Pages on push to main"
```

---

### Task 7: Document the one-time Pages setup and link the live site

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Add a "Read it online" + deployment note to `README.md`**

Insert the following block immediately after the blockquote tagline line (after line 3, `> The opinionated, AI-friendly stack...`) in `README.md`:

```md

📖 **Read it online:** https://ismail9k.github.io/vibe-coder-survival-guide/

> **Maintainers:** this site is built with [VitePress](https://vitepress.dev) and
> deploys automatically on every push to `main`. One-time setup: in the repo,
> go to **Settings → Pages → Build and deployment → Source** and select
> **GitHub Actions**. Run the site locally with `pnpm install` then
> `pnpm docs:dev`.
```

- [ ] **Step 2: Verify the README still renders as valid Markdown**

Run: `pnpm docs:build`
Expected: build stays clean (README is excluded from the site via `srcExclude`, but this confirms nothing else broke).

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "docs: link live site and document GitHub Pages setup"
```

- [ ] **Step 4: Push and confirm deployment**

```bash
git push origin main
```

Then (manual, one-time): in GitHub repo **Settings → Pages → Source: GitHub Actions**. Watch the **Actions** tab for the "Deploy docs to GitHub Pages" run to go green, then open https://ismail9k.github.io/vibe-coder-survival-guide/ and confirm the home page, navigation, search, and accent color all work.

---

## Self-Review

**Spec coverage:**
- Generator = VitePress, pnpm → Task 1 ✓
- Content at root, `README.md` kept, new `index.md` home → Tasks 1–3 ✓
- Build artifacts gitignored → Task 1 ✓
- Nav + grouped sidebar + local search → Task 2 ✓
- Home hero + two CTAs + 8 feature cards → Task 3 ✓
- Light branding / accent color + dark mode → Task 4 ✓
- Dead-link-clean build → Task 5 ✓
- GitHub Actions deploy + base path → Task 2 (base) + Task 6 ✓
- Documented one-time Pages toggle → Task 7 ✓
- Success criteria (dev serves, build clean, push deploys) → Tasks 2, 5, 6, 7 ✓

**Placeholder scan:** No TBD/TODO/"handle edge cases" — every file's full content is given. ✓

**Type/name consistency:** `base`, `srcDir`, script names (`docs:dev`/`docs:build`/`docs:preview`), and the dist path (`.vitepress/dist`) are identical across the config, package.json, gitignore, and workflow. ✓
