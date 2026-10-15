# Moh Rifkan — Portfolio

Source code for [goggxi.github.io](https://goggxi.github.io).

Built with Next.js, Tailwind CSS, shadcn/ui and Magic UI, based on the [portfolio template by Dillion Verma](https://github.com/dillionverma/portfolio).

## Development

```bash
pnpm install
pnpm dev
```

All content (profile, work experience, education, skills, projects) lives in [`src/data/resume.tsx`](./src/data/resume.tsx).

## Deploy

The site is exported as static HTML (`output: "export"`) and published to the [`goggxi.github.io`](https://github.com/Goggxi/goggxi.github.io) repository:

```bash
pnpm run deploy
```

This builds `out/` and syncs it into `../goggxi.github.io` (override with `SITE_REPO=...`), then commits and pushes.
