# The Default AI / LLM Apps Stack

Here's the reframe that saves beginners weeks: **an AI app is mostly a normal web app that calls a model.** It's the [web stack](./web.md) plus one [API](./glossary.md#api) call to an [LLM](./glossary.md#llm). Don't reach for exotic infrastructure — build the web app, add the model call, ship.

Read the [Universal Toolbelt](./universal-toolbelt.md) and [web stack](./web.md) first — this page is just the AI-specific layer on top. And keep the rule above the stack in mind: **[buy or glue, don't build](./buy-dont-build.md)** — call a hosted model instead of training your own, and rent the rest of the plumbing too.

| Slot | Pick | Why this one | Without it you'd... | Link |
|------|------|--------------|---------------------|------|
| Model | Claude (Anthropic) — latest Opus/Sonnet | The latest Claude models (Opus 4.8, Sonnet 4.6) are top-tier at coding and reasoning, with excellent docs the AI knows well; start with Sonnet for cost, move to Opus for hard tasks. | Train and host your own model — months of work and GPU bills for something worse. | [Anthropic API docs](https://docs.claude.com/en/api/overview) |
| App [SDK](./glossary.md#sdk) | AI SDK (+ Anthropic SDK) | TypeScript-native streaming and chat UI helpers that turn a model call into a few lines, in the same Next.js app you already have — and it's vendor-neutral, so it runs on Cloudflare. | Hand-wire streaming responses and message state, and get the edge cases wrong. | [AI SDK docs](https://ai-sdk.dev/docs) |
| Vector store | Supabase pgvector | Store embeddings for [RAG](./glossary.md#rag) in the same Postgres you already use — no second database vendor to learn. | Run a separate [vector database](./glossary.md#vector-database) service and sync data between two systems. | [pgvector docs](https://supabase.com/docs/guides/ai) |
| Hosting | Cloudflare | Deploy the whole AI app — UI, API routes, and model calls — to a global edge network from one GitHub push. | Stitch together separate hosts for the front end and the model-calling back end. | [Cloudflare Workers docs](https://developers.cloudflare.com/workers/) |

## Don't bother yet

The AI space is loud and full of tooling that beginners over-adopt. Get one model call working first, then add complexity only when a real problem demands it.

- **Heavy orchestration frameworks** (LangChain, etc.) — abstractions you don't need yet; a direct SDK call is simpler and easier to debug. Add one only when your chains genuinely outgrow plain code.
- **Fine-tuning** — expensive and slow; good prompting plus [RAG](./glossary.md#rag) solves the vast majority of cases. Fine-tune only after you've proven prompting isn't enough.
- **Self-hosted models** — running your own model means GPUs and ops work; a hosted API is cheaper and better until you have serious scale or privacy requirements.
- **A separate vector DB vendor** — pgvector in your existing Supabase covers early RAG; don't add a Pinecone/Weaviate bill before you've hit its limits.
- **Multi-agent setups** — orchestrating many agents before a single model call works reliably is running before you can walk. Make one call solid first.
