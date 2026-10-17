# alexknipfer.com

Personal portfolio site built with [TanStack Start](https://tanstack.com/start), React 19, Tailwind CSS v4, and Biome. Previously Next.js (see `AGENTS.md` for migration notes).

## Running locally

```bash
pnpm install
pnpm dev
```

Optional: set `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, and `SPOTIFY_REFRESH_TOKEN` (for example in `.env.local`) to enable the footer's "Now Playing" widget.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Dev server on http://localhost:3000 |
| `pnpm build` / `pnpm start` | Production build / run it |
| `pnpm test` | Vitest |
| `pnpm typecheck` | TypeScript |
| `pnpm check` | Biome lint + format check |

Deployed on Vercel (`vercel.json`, Nitro).
