# The Vibe Coder Stack — Design Spec

**Date:** 2026-06-29
**Status:** Draft for review

## Problem

People building software with AI assistants ("vibe coders") ship real things
without a mental model of the tooling a real project needs. They don't know what
they don't know. The classic tell: asking the AI to *format* their code instead
of installing a formatter, because they don't know formatters exist. The same gap
applies to linters, type checkers, version control hygiene, env/secret handling,
testing, deployment, and error monitoring.

## Goal

A shareable, opinionated reference that:

1. Tells beginners the **exact** technologies to use per domain (web, mobile,
   backend, AI apps) — one default pick per slot, not a menu.
2. Surfaces the **categories of tooling they don't know exist** (the "universal
   toolbelt").
3. Gives an **ordered learning path** — what to learn, in what sequence.
4. Links each pick to a canonical, free resource.

## Stance (the "opinion")

Picks are driven by three criteria, in this priority:

1. **AI-friendly** — popular, well-documented, TypeScript-heavy tools that AI
   coding assistants handle well. (A vibe coder's productivity is bottlenecked by
   how well the AI knows the tool.)
2. **Beginner-friendly** — gentle curve, great docs, large community.
3. **Low-cost / free tier** — ship without a credit card.

Production-readiness is explicitly **not** a gate. We favor "ship fast and learn"
over enterprise scale. The bias is one language end-to-end (**TypeScript**) so a
beginner reuses the same knowledge across web, mobile, backend, and AI apps.

Non-goals: exhaustive comparisons, "it depends" hedging, enterprise/at-scale
architecture, niche or cutting-edge tools the AI won't know well.

## Deliverable

A multi-file markdown repo (can grow into a static site later):

```
README.md             # what this is, who it's for, how to use it, index
universal-toolbelt.md # the "you didn't know you needed these" layer
web.md                # default web stack
mobile.md             # default mobile stack
backend.md            # default backend/API stack
ai-apps.md            # default LLM-app stack
learning-path.md      # ordered: what to learn, in what order
glossary.md           # plain-language terms (linter? ORM? CI? env var?)
```

## Page formats

### Domain pages (web / mobile / backend / ai-apps)

A single "default stack" table, one row per slot:

| Slot | Pick | Why this one | Without it you'd... | Link |
|------|------|--------------|---------------------|------|

- **Slot** — the job to be done (e.g. "Styling", "Database", "Auth").
- **Pick** — the single recommended technology.
- **Why this one** — one line tied to the stance.
- **Without it you'd...** — names the manual pain the tool removes (this is the
  "didn't know I needed it" hook).
- **Link** — canonical free docs/tutorial.

Each domain page ends with a **"Don't bother yet"** list — things beginners
over-reach for (e.g. microservices, Kubernetes, hand-rolled auth, GraphQL,
monorepos) with a one-line reason to wait.

### Universal toolbelt

Same table format, for cross-cutting tools every project needs regardless of
domain: editor + AI assistant, version control, package manager, formatter,
linter, type checker, env/secret handling, testing, deployment, error monitoring.

### Learning path

Leveled and ordered. Each level states the goal, the exact tech introduced, and a
linked free resource. Proposed levels:

- **Level 0 — Fundamentals:** how the web works, terminal/CLI basics, Git +
  GitHub, HTML/CSS, JavaScript → TypeScript basics.
- **Level 1 — Ship something:** Next.js + Tailwind, deploy to Vercel. Get a live
  URL fast.
- **Level 2 — Make it real:** database (Supabase), auth (Clerk), env vars, forms
  + validation (Zod).
- **Level 3 — Make it good:** formatter, linter, type checking discipline, basic
  tests, error monitoring (the universal toolbelt as habits).
- **Level 4 — Specialize:** branch into mobile (Expo), AI apps (Vercel AI SDK +
  Claude), or standalone backend APIs (Hono).

### Glossary

Plain-language, one-paragraph definitions of terms used across the guide, so a
beginner can read any page without getting stuck.

## Proposed picks (subject to review)

These are the concrete recommendations the content will be written around.

**Universal toolbelt**
- Editor + AI assistant: VS Code or Cursor + Claude Code
- Version control: Git + GitHub
- Package manager: pnpm (Node/JS)
- Formatter + linter: Biome (one tool for both; Prettier + ESLint as the
  widely-used alternative)
- Type checker: TypeScript
- Env/secrets: `.env` files + `.gitignore` (never commit secrets)
- Testing: Vitest
- Deployment: Vercel
- Error monitoring: Sentry

**Web**
- Language: TypeScript
- Framework: Next.js (React); Astro noted for content-only sites
- Styling: Tailwind CSS
- UI components: shadcn/ui
- Database: Supabase (Postgres)
- ORM: Drizzle
- Auth: Clerk
- Validation: Zod
- Hosting: Vercel

**Mobile**
- Framework: React Native via Expo (reuses TS/React)
- Navigation: Expo Router
- Backend/DB: Supabase
- Auth: Clerk
- Build/deploy: EAS (Expo Application Services)

**Backend / APIs**
- Language: TypeScript (Node)
- Framework: Hono (standalone APIs); Next.js API routes when full-stack
- Database: Supabase (Postgres)
- ORM: Drizzle
- Auth: Clerk / Supabase Auth
- Background jobs: Inngest
- Hosting: Vercel / Railway

**AI / LLM apps**
- Model: Claude (Anthropic) — latest Opus/Sonnet
- App SDK: Vercel AI SDK (streaming, chat UI) + Anthropic SDK
- Vector store: Supabase pgvector (stay in one database)
- Keep simple: avoid heavy orchestration frameworks (e.g. LangChain) at first
- Hosting: Vercel

## Success criteria

- A beginner can pick a domain, read one page, and know exactly what to install.
- Every pick answers "why this" and "what it saves you from."
- The learning path gives a clear next step at any skill level.
- No "it depends." One default per slot, alternatives mentioned in at most one line.

## Out of scope (v1)

- Desktop apps, games, data/ML pipelines, automation scripting.
- A built static website (markdown only for v1).
- Maintaining version pins / changelog of the stack.
