# Buy, Don't Build

The single biggest time sink for someone shipping with AI isn't writing the feature that makes their project special — it's rebuilding the plumbing every project needs. Auth. Payments. Image hosting. Email. An affiliate program. Scaling.

All of it is a **solved problem**. Someone runs it as a service, on a free tier, with better security and uptime than you'll manage alone. So the rule is simple:

> **Use what already exists. Build it yourself only when you've actually hit a wall the service can't clear — never before.**

Your time is the scarce resource. Spend it on the one thing that's actually *your* idea, and rent everything else. A weekend spent self-hosting images is a weekend you didn't spend on the product.

## The jobs to rent

Read the [Universal Toolbelt](./universal-toolbelt.md) first — some of these (auth, hosting, error monitoring) already live there. This page is the wider list of "don't build this" jobs you'll hit as your project grows.

| Job | Use this instead | Why you don't build it | Link |
|-----|------------------|------------------------|------|
| [Auth](./glossary.md#auth) & logins | Clerk | Sessions, social login, and password resets are a security minefield — one mistake leaks accounts. | [Clerk docs](https://clerk.com/docs) |
| Payments & subscriptions | Stripe (Lemon Squeezy / Polar to handle sales tax for you) | Handling cards yourself means PCI compliance; a merchant-of-record also files your taxes. | [Stripe docs](https://docs.stripe.com) |
| Image & file uploads | UploadThing (Cloudinary when you need resizing/transforms) | Hosting, CDN delivery, and resizing images yourself burns storage, bandwidth, and a weekend. | [UploadThing docs](https://docs.uploadthing.com) |
| Affiliate / referral program | Rewardful (or Tolt) | Tracking referrals and paying out commissions is a whole accounting system — plug one into Stripe instead. | [Rewardful](https://www.rewardful.com) |
| Transactional email | Resend | Running a mail server means fighting spam filters forever; deliverability is someone's full-time job. | [Resend docs](https://resend.com/docs) |
| Scaling & servers | [Serverless](./glossary.md#deployment) / [backend-as-a-service](./glossary.md#api) (Cloudflare Workers, Supabase) | Let the platform add capacity on demand instead of provisioning, load-balancing, and babysitting servers. | [Cloudflare Workers docs](https://developers.cloudflare.com/workers/) |
| [Background jobs](./backend.md) & cron | Inngest | A queue and scheduler are infrastructure to operate and debug; rent the reliability. | [Inngest docs](https://www.inngest.com/docs) |
| Full-text search | Algolia (or Typesense Cloud) | Building relevant, typo-tolerant, fast search is a research field, not a feature. | [Algolia docs](https://www.algolia.com/doc/) |
| Product analytics | PostHog | Events, funnels, and session replay on a free tier beat a `console.log` you grep by hand. | [PostHog docs](https://posthog.com/docs) |
| Content / blog (CMS) | Sanity | Don't hand-edit content in code and redeploy — give yourself (or a client) an editor. | [Sanity docs](https://www.sanity.io/docs) |

## When it's *actually* time to build

"Don't build it yet" isn't "never build it." Outsource by default, then bring a job in-house only when you can point to a concrete wall — not a hunch:

- **The cost stops making sense.** The service is now more expensive at your scale than running it yourself would be, and you've done the math (including your own time).
- **It can't do the one thing you need.** You've hit a hard limit of the product, not just a setting you haven't found. Check the docs and support first.
- **It *is* your product.** If the thing you'd be renting is the actual core of what makes your project special, that's the one place to build deeply.

Until one of those is true, the answer is the same: there's probably a service for that. Reach for it.
