# The Learning Path

A leveled, ordered path from "I've never written code" to shipping real software. Don't skip levels — each one assumes the last. Each level has a goal, the exact tech it introduces, and one free resource to learn it.

If a term is unfamiliar, check the [glossary](./glossary.md).

## Level 0 — Fundamentals

**Goal:** understand the ground everything else stands on, and get comfortable in the terminal.

Learn: how the web works (browser → server → response), the terminal / [CLI](./glossary.md#cli) basics, [Git + GitHub](./glossary.md#git--github), HTML & CSS, and JavaScript moving into [TypeScript](./glossary.md#type-checker--typescript).

Resource: [The Odin Project — Foundations](https://www.theodinproject.com/paths/foundations) (free, covers the web, command line, Git, HTML/CSS, and JavaScript end to end).

## Level 1 — Ship something

**Goal:** get a real, live URL on the internet as fast as possible. Nothing motivates like a thing that exists.

Learn: [Next.js](./web.md) + [Tailwind CSS](./web.md), then [deploy](./glossary.md#deployment) to [Vercel](./universal-toolbelt.md).

Resource: [Next.js Learn course](https://nextjs.org/learn) (free, official, builds and deploys a real app).

## Level 2 — Make it real

**Goal:** turn a static page into an app with accounts and saved data.

Learn: [Supabase](./web.md) for the [database](./glossary.md#database), [Clerk](./web.md) for [auth](./glossary.md#auth), [environment variables](./glossary.md#environment-variable-env) for your keys, and [Zod](./web.md) for forms and validation.

Resource: [Supabase — Build a Next.js app](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs) (free quickstart connecting a database to your app).

## Level 3 — Make it good

**Goal:** adopt the habits that separate a toy from real software. This is the [Universal Toolbelt](./universal-toolbelt.md) becoming muscle memory.

Learn: [Biome](./universal-toolbelt.md) as your [formatter](./glossary.md#formatter) + [linter](./glossary.md#linter), [type-check](./glossary.md#type-checker--typescript) discipline (stop ignoring the red squiggles), [Vitest](./universal-toolbelt.md) basics, and [Sentry](./universal-toolbelt.md) for [error monitoring](./glossary.md#error-monitoring).

Resource: [Vitest — Getting Started](https://vitest.dev/guide/) (free, the on-ramp to writing your first tests).

## Level 4 — Specialize

**Goal:** branch toward what you actually want to build. By now the core transfers, so each path is mostly new APIs, not a new language.

Pick a branch:
- **Mobile** → [React Native via Expo](./mobile.md) — reuse your TypeScript and React on phones.
- **AI apps** → [Vercel AI SDK + Claude](./ai-apps.md) — add a model call to a web app.
- **Backend** → [Hono](./backend.md) — build a standalone API when Next.js routes aren't enough.

Resource: open the [domain page](./README.md) for your chosen branch and build one small project end to end.
