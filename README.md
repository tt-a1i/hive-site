# Hive — Website

Marketing site for [Hive](https://github.com/tt-a1i/hive), a browser-native hive-mind for CLI coding agents.

Built with **Astro 5** + **Tailwind v4** + **Fraunces / Inter / JetBrains Mono** variable fonts.

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:4321
```

## Build

```bash
pnpm build        # outputs to dist/
pnpm preview      # preview the built site locally
```

## Deployment

The site is a static build — point any static host (Cloudflare Pages / Vercel / GitHub Pages / Netlify) at the `dist/` folder.

**Cloudflare Pages config:**
- Build command: `pnpm install && pnpm build`
- Build output directory: `dist`
- Node version: `22`

## License

BSL 1.1 — same as the parent [Hive](https://github.com/tt-a1i/hive) project.
