# Contributing

Thanks for helping make **The Vibe Coder's Survival Guide** better. This is a content project — Markdown, no build step — so contributing is mostly writing clearly and keeping the opinion consistent.

## Ways to contribute

- **Fix something** — a typo, a broken link, a tool that's been renamed or deprecated.
- **Clarify something** — a definition that confused you, a step that skipped a detail.
- **Suggest a different default pick** — see [The bar for a pick](#the-bar-for-a-pick) below.
- **Add a glossary term** — if a page uses jargon that isn't in [glossary.md](./glossary.md).

For anything bigger than a fix (a new page, reworking a stack, changing a default pick), **open an issue first** so we can agree on the direction before you write it.

## The opinion (read this before suggesting picks)

This guide gives **one default pick per job, not a menu.** That's the whole point — beginners don't need ten options, they need a good first choice. Picks follow three rules, in order:

1. **AI-friendly** — popular, well-documented tools that AI assistants handle well.
2. **Beginner-friendly** — gentle learning curve, great docs, big community.
3. **Free tier** — ship without a credit card.

The bias is **ship fast and learn**, not enterprise scale. One language end to end: **TypeScript**.

### The bar for a pick

To replace or add a default pick, your proposal should show the new tool wins on the three rules above — not just that you personally prefer it. "It's more powerful" or "it scales better" usually argues *against* a pick here, since power and scale aren't what a beginner needs first. If a tool is genuinely better but overkill for now, it belongs in a **"Don't bother yet"** note, not as the default.

## Style guide

- **Plain language.** Assume no CS degree. Define jargon, or link it to the [glossary](./glossary.md).
- **Second person, active voice.** "You install a formatter," not "a formatter should be installed."
- **Concrete examples.** Every abstract term gets a real-world example, like the glossary entries do.
- **Keep the structure.** Match the headings and tone of the existing pages.
- **Link the first mention** of a glossary term to its anchor, e.g. `[formatter](./glossary.md#formatter)`.
- **Glossary entries** are alphabetical, use a `###` heading, and end with an `Example:` line.
- **Relative links only** between guide pages (`./web.md`), so they work on GitHub and anywhere the repo is mirrored.

## Making a change

1. Fork the repo and create a branch (`fix/typo-in-backend`, `content/add-testing-page`).
2. Make your edit. Check that links resolve and Markdown renders (GitHub's preview is enough).
3. Commit with a clear message. We use [Conventional Commits](https://www.conventionalcommits.org/): `docs: fix broken link on web page`, `content: add default pick for testing`.
4. Open a pull request describing **what changed and why** — and for a pick change, how it meets the three rules.

## Questions

Not sure if something fits? Open an issue and ask. Suggestions to *remove* complexity are as welcome as additions.
