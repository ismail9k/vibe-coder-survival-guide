# The Default Web Stack

If you're building anything that runs in a browser — a SaaS app, a dashboard, a side project — this is the stack. It's all one language ([TypeScript](./glossary.md#type-checker--typescript)) end to end, every piece is something AI assistants know well, and every pick has a free tier.

Read the [Universal Toolbelt](./universal-toolbelt.md) first — these are the picks *specific* to web on top of it.

| Slot | Pick | Why this one | Without it you'd... | Link |
|------|------|--------------|---------------------|------|
| Language | [TypeScript](./glossary.md#type-checker--typescript) | One language across your whole stack, and the one AI writes most reliably. | Hit type bugs at runtime and switch mental models between front and back end. | [TypeScript docs](https://www.typescriptlang.org/docs/) |
| [Framework](./glossary.md#framework) | Next.js (React) | The default full-stack React framework: pages, [API](./glossary.md#api) routes, and rendering in one place (use Astro instead for content-only sites). | Wire up routing, bundling, and a server by hand before writing a single feature. | [Next.js docs](https://nextjs.org/docs) |
| Styling | Tailwind CSS | Style directly in your markup with classes the AI knows by heart, so you skip naming things. | Maintain sprawling CSS files and invent class names like `.container-wrapper-2`. | [Tailwind docs](https://tailwindcss.com/docs) |
| UI components | shadcn/ui | Accessible, good-looking components copied *into* your repo so you own and can edit them. | Hand-build buttons, dialogs, and dropdowns — and get the accessibility details wrong. | [shadcn/ui docs](https://ui.shadcn.com/docs) |
| [Database](./glossary.md#database) | Supabase (Postgres) | Real Postgres with auth, storage, and a dashboard on a free tier — no server to run. | Install and administer a database server yourself just to store a list of users. | [Supabase docs](https://supabase.com/docs) |
| [ORM](./glossary.md#orm) | Drizzle | Talk to Postgres in TypeScript with full autocomplete and type-safe queries. | Write raw SQL strings by hand and find typos only when a query fails in production. | [Drizzle docs](https://orm.drizzle.team/docs/overview) |
| [Auth](./glossary.md#auth) | Clerk | Drop-in sign-in, sign-up, and user management with a free tier — the part that's dangerous to DIY. | Hand-roll password hashing and sessions and risk leaking everyone's accounts. | [Clerk docs](https://clerk.com/docs) |
| Validation | Zod | Validate forms and API input in TypeScript, with types inferred automatically. | Trust user input, write fragile manual checks, and let bad data reach your database. | [Zod docs](https://zod.dev) |
| Hosting | Vercel | Built by the Next.js team; connect GitHub and deploy on every push for free. | Manually configure and babysit a server every time you ship a change. | [Vercel docs](https://vercel.com/docs) |

## Don't bother yet

You'll see these online and feel behind. You're not. Skip them until a real problem forces your hand.

- **Microservices** — splitting your app into many services adds huge complexity; one app (a "monolith") is correct until you have a team and scale problems.
- **Kubernetes** — an orchestration system for fleets of servers. Vercel runs your app for you; you do not have a fleet.
- **Hand-rolled auth** — security you'll get subtly wrong. Use Clerk or Supabase Auth.
- **GraphQL** — a flexible API query layer that pays off at scale; Next.js API routes are simpler and enough.
- **Monorepos** — tooling for managing many packages in one repo; you have one app, so you don't need it.
- **Custom CI** before you have tests — [CI](./glossary.md#cicd) automates running tests. Write tests first; automate them later.
