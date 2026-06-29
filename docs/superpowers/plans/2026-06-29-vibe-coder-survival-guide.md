# The Vibe Coder's Survival Guide — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce an opinionated, AI-friendly markdown guide that tells beginners the exact stack to use per domain, surfaces the tooling they don't know exists, and gives an ordered learning path.

**Architecture:** A multi-file markdown repo. One README index, one cross-cutting "universal toolbelt" page, four domain pages (web, mobile, backend, AI), one leveled learning path, and a glossary. Domain pages share one table format. Files cross-link to the glossary for jargon.

**Tech Stack:** Markdown only. No build step in v1. Git for version control.

---

## Shared conventions (read before any task)

**Domain-page stack table** — every domain page uses exactly this format:

```markdown
| Slot | Pick | Why this one | Without it you'd... | Link |
|------|------|--------------|---------------------|------|
```

- One row per slot, **one** Pick per row.
- "Why this one" = a single line tied to the stance (AI-friendly / beginner-friendly / free tier).
- "Without it you'd..." = the manual pain it removes (the "didn't know I needed it" hook).
- "Link" = a real canonical docs/tutorial URL.
- At most one alternative may be mentioned inside "Why this one" in a half-sentence. No comparison tables.

**Definition of Done (applies to every content file):**
- Uses the shared table format where applicable.
- Every Pick row has a non-empty Why, Without-it, and Link.
- All jargon links to `glossary.md` on first use.
- No "it depends" hedging; no TODO/TBD.
- File renders as valid GitHub-flavored markdown (tables aligned, links bracketed).

**Commit convention:** one commit per task, message `docs: add <file>` (or `docs: update <file>`).

---

## File Structure

- Create: `README.md` — what this is, who it's for, how to use it, index/links to all pages.
- Create: `glossary.md` — plain-language term definitions (referenced by all pages).
- Create: `universal-toolbelt.md` — cross-cutting tools every project needs.
- Create: `web.md` — default web stack.
- Create: `mobile.md` — default mobile stack.
- Create: `backend.md` — default backend/API stack.
- Create: `ai-apps.md` — default LLM-app stack.
- Create: `learning-path.md` — leveled, ordered path.

Build order is dependency-driven: glossary first (everything links to it), then toolbelt and domains, then learning path (references all of them), then README index last (links everything), then a cross-link/QA pass.

---

### Task 1: Glossary

**Files:**
- Create: `glossary.md`

- [ ] **Step 1: Write the glossary**

One short paragraph per term, alphabet:
- API, Auth, CI/CD, CLI, Database, Deployment, Environment variable (`.env`), Error monitoring, Formatter, Framework, Git / GitHub, Linter, ORM, Package manager, RAG, Type checker / TypeScript, Vector database, Version control.

Each entry: plain language, no jargon-to-explain-jargon, one concrete example. Example:
> **Formatter** — a tool that automatically rewrites your code into a consistent style (spacing, quotes, line breaks) every time you save. You stop arguing with yourself about formatting and never ask the AI to "make it neat" again. Example: Biome, Prettier.

- [ ] **Step 2: Verify Definition of Done**

Check: every term above present, each has an example, no term defined using an undefined term.

- [ ] **Step 3: Commit**

```bash
git add glossary.md && git commit -m "docs: add glossary"
```

---

### Task 2: Universal Toolbelt

**Files:**
- Create: `universal-toolbelt.md`

- [ ] **Step 1: Write intro framing**

2-3 sentences: these are the tools every project needs no matter what you're building, and the ones beginners most often don't know exist. This page is the heart of "you don't know what you don't know."

- [ ] **Step 2: Write the toolbelt table**

Use the shared table format. Rows (Slot → Pick):
- Editor + AI assistant → VS Code or Cursor + Claude Code
- Version control → Git + GitHub
- Package manager → pnpm
- Formatter + linter → Biome (note: Prettier + ESLint is the common alternative)
- Type checker → TypeScript
- Env / secrets → `.env` files + `.gitignore`
- Testing → Vitest
- Deployment → Vercel
- Error monitoring → Sentry

Fill "Why this one", "Without it you'd...", and a real Link for each. Link jargon to `glossary.md`.

- [ ] **Step 3: Verify Definition of Done, then commit**

```bash
git add universal-toolbelt.md && git commit -m "docs: add universal toolbelt"
```

---

### Task 3: Web stack

**Files:**
- Create: `web.md`

- [ ] **Step 1: Write intro + stack table**

Use the shared format. Rows:
- Language → TypeScript
- Framework → Next.js (note: Astro for content-only sites)
- Styling → Tailwind CSS
- UI components → shadcn/ui
- Database → Supabase (Postgres)
- ORM → Drizzle
- Auth → Clerk
- Validation → Zod
- Hosting → Vercel

- [ ] **Step 2: Add "Don't bother yet" list**

With one-line reasons: microservices, Kubernetes, hand-rolled auth, GraphQL, monorepos, custom CI before you have tests.

- [ ] **Step 3: Verify Definition of Done, then commit**

```bash
git add web.md && git commit -m "docs: add web stack"
```

---

### Task 4: Mobile stack

**Files:**
- Create: `mobile.md`

- [ ] **Step 1: Write intro + stack table**

Lead with: if you know the web stack, mobile reuses TypeScript + React. Rows:
- Framework → React Native via Expo
- Navigation → Expo Router
- Backend / DB → Supabase
- Auth → Clerk
- Build / deploy → EAS (Expo Application Services)

- [ ] **Step 2: Add "Don't bother yet" list**

E.g. native Swift/Kotlin, bare React Native (without Expo), in-app purchases before you have users.

- [ ] **Step 3: Verify Definition of Done, then commit**

```bash
git add mobile.md && git commit -m "docs: add mobile stack"
```

---

### Task 5: Backend / API stack

**Files:**
- Create: `backend.md`

- [ ] **Step 1: Write intro + stack table**

Lead with: most beginners don't need a separate backend — Next.js API routes cover it. This page is for when you do. Rows:
- Language → TypeScript (Node)
- Framework → Hono (note: Next.js API routes when full-stack)
- Database → Supabase (Postgres)
- ORM → Drizzle
- Auth → Clerk / Supabase Auth
- Background jobs → Inngest
- Hosting → Vercel / Railway

- [ ] **Step 2: Add "Don't bother yet" list**

E.g. microservices, message queues, Kubernetes, gRPC, self-hosted databases.

- [ ] **Step 3: Verify Definition of Done, then commit**

```bash
git add backend.md && git commit -m "docs: add backend stack"
```

---

### Task 6: AI / LLM apps stack

**Files:**
- Create: `ai-apps.md`

- [ ] **Step 1: Write intro + stack table**

Lead with: an AI app is mostly a normal web app that calls a model. Rows:
- Model → Claude (Anthropic), latest Opus/Sonnet
- App SDK → Vercel AI SDK (+ Anthropic SDK)
- Vector store → Supabase pgvector
- Hosting → Vercel

- [ ] **Step 2: Add "Don't bother yet" list**

E.g. heavy orchestration frameworks (LangChain) at first, fine-tuning, self-hosted models, separate vector DB vendor, multi-agent setups before a single call works.

- [ ] **Step 3: Verify Definition of Done, then commit**

```bash
git add ai-apps.md && git commit -m "docs: add AI apps stack"
```

---

### Task 7: Learning path

**Files:**
- Create: `learning-path.md`

- [ ] **Step 1: Write the leveled path**

Each level: goal sentence, exact tech introduced, one linked free resource. Levels:
- **Level 0 — Fundamentals:** how the web works, terminal/CLI, Git + GitHub, HTML/CSS, JS → TS basics.
- **Level 1 — Ship something:** Next.js + Tailwind, deploy to Vercel, get a live URL.
- **Level 2 — Make it real:** Supabase (database), Clerk (auth), env vars, Zod (forms/validation).
- **Level 3 — Make it good:** formatter + linter (Biome), type-check discipline, Vitest basics, Sentry.
- **Level 4 — Specialize:** branch to Mobile (Expo), AI apps (Vercel AI SDK + Claude), or Backend (Hono).

Each tech name links to its domain page or the universal toolbelt.

- [ ] **Step 2: Verify Definition of Done, then commit**

```bash
git add learning-path.md && git commit -m "docs: add learning path"
```

---

### Task 8: README index

**Files:**
- Create: `README.md`

- [ ] **Step 1: Write README**

Sections:
- Title: **The Vibe Coder's Survival Guide** + tagline.
- "Who this is for" — people building with AI who don't know what they don't know.
- "How to use this" — start with the learning path if new; jump to your domain if you know what you're building; read the universal toolbelt regardless.
- "The opinion" — AI-friendly, beginner-friendly, free-tier; one language (TypeScript) end to end; ship fast over enterprise scale.
- Index with links: Universal Toolbelt, Web, Mobile, Backend, AI Apps, Learning Path, Glossary.

- [ ] **Step 2: Verify all index links resolve, then commit**

```bash
git add README.md && git commit -m "docs: add README index"
```

---

### Task 9: Cross-link & QA pass

**Files:**
- Modify: all `.md` files as needed.

- [ ] **Step 1: Link audit**

Grep for bare jargon and ensure first uses link to `glossary.md`. Verify every internal link points to an existing file/anchor:

```bash
grep -rno "(\./[a-z-]*\.md" . --include=*.md
```

- [ ] **Step 2: Consistency audit**

Confirm all four domain pages use the identical table header and each has a "Don't bother yet" list. Confirm no "it depends" / "TODO" / "TBD" remains:

```bash
grep -rniE "it depends|todo|tbd" . --include=*.md
```

- [ ] **Step 3: Fix any findings, then commit**

```bash
git add -A && git commit -m "docs: cross-link and QA pass"
```

---

## Self-Review (completed by plan author)

- **Spec coverage:** README ✓ (Task 8), universal-toolbelt ✓ (Task 2), web/mobile/backend/ai ✓ (Tasks 3–6), learning-path ✓ (Task 7), glossary ✓ (Task 1), "Don't bother yet" lists ✓ (Tasks 3–6), shared table format ✓ (conventions). All spec picks mapped to a task.
- **Placeholder scan:** No TODO/TBD; each task names exact rows and content.
- **Type/name consistency:** File names, table header, and pick names match the spec exactly across tasks.
