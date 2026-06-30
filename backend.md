# The Default Backend / API Stack

First, a money-saving truth: **most beginners don't need a separate backend.** Next.js [API](./glossary.md#api) routes (see the [web stack](./web.md)) run server code right alongside your app and cover the vast majority of projects. This page is for when you *do* need a standalone API — a service shared by a mobile app and a web app, or a backend with no web front end at all.

Read the [Universal Toolbelt](./universal-toolbelt.md) first — these are the backend-specific picks on top of it. And keep the rule above the stack in mind: **[buy or glue, don't build](./buy-dont-build.md)** — a managed database, hosted auth, and a jobs service beat operating that infrastructure yourself.

| Slot | Pick | Why this one | Without it you'd... | Link |
|------|------|--------------|---------------------|------|
| Language | [TypeScript](./glossary.md#type-checker--typescript) (Node) | Same language as your front end, so you share types and skills across the whole stack. | Context-switch to a second language and re-implement your data types on the server. | [TypeScript docs](https://www.typescriptlang.org/docs/) |
| [Framework](./glossary.md#framework) | Hono | Tiny, fast, fully typed web framework that runs anywhere (use Next.js API routes instead when you're full-stack). | Hand-parse requests and responses and lose type safety at your API boundary. | [Hono docs](https://hono.dev/docs/) |
| [Database](./glossary.md#database) | Supabase (Postgres) | Managed Postgres with a free tier and a dashboard — same database as the rest of this guide. | Provision, secure, and back up a database server yourself. | [Supabase docs](https://supabase.com/docs) |
| [ORM](./glossary.md#orm) | Drizzle | Type-safe SQL in TypeScript with autocomplete, so queries are checked at compile time. | Concatenate SQL strings by hand and open yourself to injection bugs. | [Drizzle docs](https://orm.drizzle.team/docs/overview) |
| [Auth](./glossary.md#auth) | Clerk / Supabase Auth | Managed auth with a free tier; Supabase Auth is handy when you're already on Supabase. | Build and secure token handling yourself and risk leaking accounts. | [Clerk docs](https://clerk.com/docs) |
| Background jobs | Inngest | Run scheduled and queued work (emails, retries, cron) with no separate queue server to operate. | Hand-roll a job queue and cron infrastructure, then debug silent failures. | [Inngest docs](https://www.inngest.com/docs) |
| Hosting | Cloudflare Workers / Railway | Cloudflare Workers for [serverless](./glossary.md#serverless) APIs on the edge; Railway when you want a long-running server — both deploy from GitHub. | SSH into a VPS and configure the runtime, process manager, and TLS by hand. | [Cloudflare Workers docs](https://developers.cloudflare.com/workers/) · [Railway docs](https://docs.railway.com) |

## Don't bother yet

These show up in "real backend" tutorials and make you feel like you're missing something. You're not — skip them until scale actually forces the issue.

- **Microservices** — many small services to coordinate; one service is correct until you have a team and real scale pain.
- **Message queues** (Kafka, RabbitMQ) — heavy infrastructure for decoupling; Inngest covers background work without running a broker.
- **Kubernetes** — fleet orchestration you don't need when a platform runs your app for you.
- **gRPC** — a binary protocol for service-to-service calls at scale; plain HTTP/JSON is simpler and enough.
- **Self-hosted databases** — operating your own Postgres is a job; let Supabase do it on a free tier.
