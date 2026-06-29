# The Universal Toolbelt

These are the tools *every* project needs no matter what you're building — web, mobile, backend, or AI. They're also the ones beginners most often don't know exist, which is how you end up asking the AI to "make my code neat" instead of installing a [formatter](./glossary.md#formatter).

This page is the whole point of the guide: **you don't know what you don't know.** Install these once and they become invisible habits.

| Slot | Pick | Why this one | Without it you'd... | Link |
|------|------|--------------|---------------------|------|
| Editor + AI assistant | VS Code (or Cursor) + Claude Code | The editors AI assistants integrate with best; Claude Code edits your project directly from the terminal. | Paste code back and forth into a chat window and lose all context. | [Claude Code](https://docs.claude.com/en/docs/claude-code) |
| [Version control](./glossary.md#version-control) | [Git](./glossary.md#git--github) + GitHub | The universal standard; every tool and AI assistant assumes it, and it's a free backup of your work. | Keep `final_v2_REAL.zip` folders and lose work when a change breaks everything. | [GitHub Getting Started](https://docs.github.com/en/get-started) |
| [Package manager](./glossary.md#package-manager) | pnpm | Fast, disk-efficient, and strict about versions so installs are reproducible. | Copy libraries by hand and hit "works on my machine" version mismatches. | [pnpm docs](https://pnpm.io) |
| [Formatter](./glossary.md#formatter) + [linter](./glossary.md#linter) | Biome | One fast tool does both jobs with near-zero config (Prettier + ESLint is the common two-tool alternative). | Argue with yourself about spacing and ship avoidable bugs the linter would've caught. | [Biome docs](https://biomejs.dev) |
| [Type checker](./glossary.md#type-checker--typescript) | TypeScript | Catches a whole category of bugs as you type, and AI assistants write it far more reliably than plain JS. | Discover that a value was the wrong type only when the app crashes for a user. | [TypeScript docs](https://www.typescriptlang.org/docs/) |
| Env / secrets | [`.env`](./glossary.md#environment-variable-env) files + `.gitignore` | Keeps API keys out of your code and out of GitHub — the #1 way beginners leak credentials. | Hard-code a secret key, push it to a public repo, and get billed for someone else's usage. | [dotenv](https://github.com/motdotla/dotenv) |
| Testing | Vitest | Fast, TypeScript-native, and the default for the Vite/Next ecosystem this guide uses. | Manually click through your whole app every time you change one line. | [Vitest docs](https://vitest.dev) |
| [Deployment](./glossary.md#deployment) | Cloudflare Pages | Connect a GitHub repo and you have a live URL on a global edge network in minutes, with a generous free tier. | SSH into a server and configure nginx by hand just to show someone your project. | [Cloudflare Pages docs](https://developers.cloudflare.com/pages/) |
| [Error monitoring](./glossary.md#error-monitoring) | Sentry | Tells you about real crashes in production with the exact line of code, on a free tier. | Find out your app is broken from an angry user instead of from your dashboard. | [Sentry docs](https://docs.sentry.io) |
