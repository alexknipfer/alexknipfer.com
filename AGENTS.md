<!-- intent-skills:start -->

## Skill Loading

Use the repository’s installed Intent. If it is unavailable, report the missing dependency instead of downloading a replacement.
Before editing files for a substantial task:

- Run `pnpm --silent intent list` from the workspace root to see available local skills.
- If a listed skill matches the task, run `pnpm --silent intent load <package>#<skill>` before changing files.
- Use the loaded `SKILL.md` guidance while making the change.
- Multiple matches: prefer the most specific local skill for the package or concern you are changing; load additional skills only when the task spans multiple packages or concerns.
<!-- intent-skills:end -->

Note: use `pnpm intent` (the `package.json` script), not `pnpm exec intent`.

`@tanstack/devtools-vite` publishes a stray `bin/intent.js` that imports
`@tanstack/intent/intent-library` — a subpath that exists in no published version of
`@tanstack/intent` (verified 0.2.0–0.5.5). pnpm links that shim to `node_modules/.bin/intent`,
where it wins over the real CLI, so `pnpm exec intent` dies with
`ERR_PACKAGE_PATH_NOT_EXPORTED`. No pnpm setting reorders this: `publicHoistPattern` hoists the
package but does not relink the bin, and `devtools-vite` declares no `@tanstack/intent` dependency.

The `package.json` script sidesteps the shim by invoking the CLI by path. Consequences:

- Ignore the `pnpm exec intent load …` hints that `intent list` prints — the CLI generates them
  from a hardcoded `pnpm: "pnpm exec intent"` template and cannot know the bin is shadowed.
- `intent install` regenerates the block above with those same `pnpm exec` commands. Re-apply the
  `pnpm --silent intent …` form after running it.
- Re-check this note when `@tanstack/devtools-vite` is upgraded; if the stray bin is removed,
  `pnpm exec intent` starts working and the workaround can be dropped.

# alexknipfer.com (v2) — TanStack Start

Personal portfolio site for Alex Knipfer using TanStack Start.

## Stack

- React 19 + TanStack Start / TanStack Router (file-based routes in `src/routes`)
- Vite 8, Nitro (Vercel preset auto-detected on Vercel)
- Tailwind CSS v4 (CSS-first config in `src/styles.css`, class-based dark mode)
- Biome (lint + format), Vitest (unit tests), pnpm
- `vite-plugin-svgr` (SVG → React via `?react`), `@fontsource/monaspace-neon` (body) +
  `@fontsource/monaspace-krypton` (headings), `@vercel/analytics`, `clsx`

## Scripts

`pnpm dev` (port 3000) · `pnpm build` · `pnpm start` (runs `.output/server/index.mjs`) ·
`pnpm preview` · `pnpm test` · `pnpm typecheck` · `pnpm check` / `lint` / `format` ·
`pnpm generate-routes`

## Structure

```
src/
  routes/
    __root.tsx           document shell, head (favicons/meta), ThemeProvider, Nav, Footer, Analytics
    index.tsx            /            (legacy pages/index.tsx)
    timeline.tsx         /timeline    (legacy pages/timeline.tsx)
    experience.tsx       /experience  (legacy pages/experience.tsx)
    api/now-playing.ts   GET /api/now-playing (server route; legacy HTTP contract kept)
    sitemap[.]xml.ts     GET /sitemap.xml (replaces postbuild generate-sitemap script)
  components/            ported UI components (+ NowPlaying/)
  lib/                   theme (next-themes replacement), seo(), site config/nav, useDisclosure
  server/                Spotify service (*.server.ts), serializer, server fn (*.functions.ts), types
  assets/icons/          SVGs imported as components: `import X from "#/assets/icons/x.svg?react"`
public/static/           favicons + images (same URLs as legacy)
```

Imports use `#/*` → `src/*` (package.json `imports`).

## Environment variables

Server-only (never prefix with `VITE_`), read per request inside server code:

| Var                     | Purpose                                         |
| ----------------------- | ----------------------------------------------- |
| `SPOTIFY_CLIENT_ID`     | Spotify app client id                           |
| `SPOTIFY_CLIENT_SECRET` | Spotify app client secret                       |
| `SPOTIFY_REFRESH_TOKEN` | Refresh token for the "currently playing" scope |

Without them the site still works; the footer widget shows "Not currently playing"
and `/api/now-playing` returns 400 (same as legacy). Legacy CI also defined
`NEXT_PUBLIC_GOOGLE_ANALYTICS`, but no code used it — dropped.

## Deployment

- Vercel: `vercel.json` sets `"framework": "tanstack-start"`; Nitro builds to `.output`.
  Set the Spotify env vars in the Vercel project.
- Other Node hosts: `pnpm build && pnpm start`.
- Vercel Analytics via `<Analytics />` from `@vercel/analytics/react` in the root shell.

## Design system (redesign modeled on thomas-sanlis.com)

- Monospace type, neutral palette, accent `primary` = `#F8BA74`. Semantic tokens in
  `src/styles.css` (`surface`, `surface-elevated`, `fg`, `fg-muted`, `fg-highlighted`,
  `line`, …) swap values under `.dark`; use them instead of raw gray/zinc classes.
- Layout: `max-w-4xl` column with side borders (`sm:border-x`) in `__root.tsx`.
- Nav: fixed floating pill (`max-w-xl`) that morphs into a full-width blurred bar after
  20px of scroll; separate mobile bar with collapsing, staggered menu.
- Animations are CSS-only: `BlurIn` (mount: blur/scale/fade, staggered delays),
  `Reveal` (IntersectionObserver fade-up, `data-reveal`; a `<noscript>` style un-hides it),
  `Marquee` (tilted project screenshots, pauses on hover), `.link-animation` (accent underline).
  All disabled under `prefers-reduced-motion`.
- `DividerRow` renders the `label ──── value` list rows (projects, skills).
