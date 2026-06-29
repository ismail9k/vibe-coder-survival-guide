# Glossary

Plain-language definitions of the terms used across this guide. If a page throws a word at you that you don't recognize, it's probably here.

### API

A way for one program to ask another program for something. When your app "calls an API," it sends a request over the internet and gets data back. Example: your weather app calls a weather service's API to get today's forecast.

### Auth

Short for authentication and authorization: proving *who* a user is (login) and deciding *what* they're allowed to do. Getting this wrong leaks people's accounts, so you use a service instead of building it yourself. Example: Clerk, Supabase Auth.

### CI/CD

Continuous Integration / Continuous Deployment: robots that automatically run your tests and ship your code every time you push to GitHub, so "it works on my machine" stops being a sentence you say. Example: GitHub Actions.

### CLI

Command-line interface: a text-based way to control programs by typing commands instead of clicking buttons. The black terminal window. Example: typing `git push` to upload your code.

### Database

The organized place your app stores data so it survives after you close the browser tab — users, posts, orders, anything. Example: Postgres (often via Supabase).

### Deployment

Putting your app on the public internet so other people can actually use it at a real URL, instead of it only running on your laptop. Example: pushing to Vercel and getting `myapp.vercel.app`.

### Environment variable (`.env`)

A setting your code reads at runtime — like an API key or database password — kept in a separate `.env` file instead of hard-coded in your source. You keep this file out of [version control](#version-control) so you don't leak secrets. Example: `OPENAI_API_KEY=sk-...` in a `.env` file.

### Error monitoring

A service that catches crashes and bugs that happen for *real users* in production and tells you about them — with the exact line of code — so you don't find out from an angry tweet. Example: Sentry.

### Formatter

A tool that automatically rewrites your code into a consistent style (spacing, quotes, line breaks) every time you save. You stop arguing with yourself about formatting and never ask the AI to "make it neat" again. Example: Biome, Prettier.

### Framework

A pre-built skeleton for your app that handles the common, boring parts (routing, rendering, structure) so you only write the parts unique to your idea. Example: Next.js for web, Expo for mobile.

### Git / GitHub

Git is the tool that tracks every change to your code so you can undo mistakes and see history; GitHub is the website where you store that code online and collaborate. Git is the engine, GitHub is the garage. Example: `git commit` saves a snapshot; pushing it to GitHub backs it up.

### Linter

A tool that reads your code and flags likely bugs and bad patterns *before* you run it — like spellcheck for logic. Different from a [formatter](#formatter): a formatter fixes how code *looks*, a linter warns about what it *does*. Example: Biome, ESLint.

### ORM

Object-Relational Mapper: a layer that lets you talk to your [database](#database) using normal code instead of writing raw SQL strings by hand, with autocomplete and type safety. Example: Drizzle.

### Package manager

A tool that downloads and tracks the third-party code libraries your project depends on, and keeps everyone on the same versions. Without it you'd copy-paste libraries by hand and break things. Example: pnpm.

### RAG

Retrieval-Augmented Generation: a technique where you fetch relevant documents first and hand them to an [LLM](#api) as context, so it answers from *your* data instead of making things up. Example: a chatbot that answers questions about your company docs by looking them up before replying.

### Type checker / TypeScript

TypeScript is JavaScript with labels on your data ("this is a number, this is a user"), and the type checker is the tool that catches when those labels don't match — finding whole categories of bugs before you run the code. Example: passing a string where a number was expected gets flagged as you type.

### Vector database

A [database](#database) built to store the "meaning" of text as long lists of numbers (embeddings) and find the most *similar* items fast — the backbone of search and [RAG](#rag) in AI apps. Example: Supabase pgvector.

### Version control

The general practice (done with [Git](#git--github)) of tracking changes to your code over time, so you can roll back, branch, and never lose work to a bad save. Example: reverting to yesterday's version after a change breaks everything.
