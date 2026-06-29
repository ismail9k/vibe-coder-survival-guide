# The Default Mobile Stack

Here's the good news: **if you know the [web stack](./web.md), you already know most of mobile.** React Native lets you build real iOS and Android apps with the same [TypeScript](./glossary.md#type-checker--typescript) and React you use on the web, and your database and auth picks carry straight over.

Read the [Universal Toolbelt](./universal-toolbelt.md) first — these are the mobile-specific picks on top of it.

| Slot | Pick | Why this one | Without it you'd... | Link |
|------|------|--------------|---------------------|------|
| [Framework](./glossary.md#framework) | React Native via Expo | Reuses TypeScript + React for native iOS/Android, and Expo handles the painful native setup for you. | Manage Xcode and Android Studio toolchains by hand before you can run "hello world." | [Expo docs](https://docs.expo.dev) |
| Navigation | Expo Router | File-based routing just like Next.js, so screens map to files — a model you already know from web. | Wire up navigation stacks and pass routes around manually. | [Expo Router docs](https://docs.expo.dev/router/introduction/) |
| Backend / [DB](./glossary.md#database) | Supabase | The same database you'd use on web works from a mobile app with the same client. | Stand up a separate mobile backend and re-learn a second data layer. | [Supabase docs](https://supabase.com/docs) |
| [Auth](./glossary.md#auth) | Clerk | Drop-in sign-in with prebuilt React Native components and a free tier. | Hand-roll mobile login and token storage — easy to get insecure. | [Clerk Expo docs](https://clerk.com/docs/quickstarts/expo) |
| Build / [deploy](./glossary.md#deployment) | EAS (Expo Application Services) | Builds your iOS/Android binaries in the cloud and ships updates without a full app-store release. | Maintain Mac hardware and signing certificates just to produce an installable build. | [EAS docs](https://docs.expo.dev/eas/) |

## Don't bother yet

- **Native Swift / Kotlin** — writing separately for each platform doubles your work; React Native ships both from one codebase until you hit a rare native limit.
- **Bare React Native** (without Expo) — you'd take on all the native build config Expo handles for you, for no early benefit.
- **In-app purchases** before you have users — payments add app-store complexity; get people using the app first.
