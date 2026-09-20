# UBC Development Economics Club — Website

The public website for the Development Economics Club at the University of
British Columbia. Live at [ubcdevec.org](https://ubcdevec.org) once DNS is
connected.

## Stack

React + TypeScript + Vite, styled with Tailwind CSS v4, deployed to GitHub
Pages via GitHub Actions on every push to `main`.

## Local development

Requires Node 20 (see `.nvmrc`).

```bash
npm install
npm run dev
```

```bash
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build locally
npm run lint      # oxlint
```

## Editing content

Almost all page content lives in plain data files under `src/data/` — no
component code needs to change to add an event, a research entry, a project,
or an alumni story:

| To change... | Edit... |
|---|---|
| Upcoming events (shown on Home + Events) | `src/data/events.ts` |
| Flagship event series (DevTalks, etc.) | `src/data/flagshipEvents.ts` |
| Research listed on the Story page | `src/data/research.ts` |
| Projects | `src/data/projects.ts` |
| Alumni stories | `src/data/alumni.ts` |
| Story page charts/maps | `src/data/story/*.ts` (see in-file source comments — these are curated approximations, verify against the cited OWID/World Bank sources before treating as final) |

## Logos

Drop logo files into `src/assets/logos/` — see the README there for exact
filenames. Every place the logo appears picks it up automatically.

## Fonts

None of the three brand fonts ship in this repo yet — all three render via
system-font fallbacks until real files are dropped in:

- **Open Sauce Sans** is free/open-source, but the build environment this
  site was scaffolded in couldn't fetch a working font binary from any
  source tried. See `src/assets/fonts/open-sauce/README.md` — it's a quick
  manual download.
- **Agrandir** and **Youngest Serif** are commercial (Pangram Pangram) —
  see `src/assets/fonts/agrandir/README.md` and
  `src/assets/fonts/youngest-serif/README.md` for how to add the licensed
  files once purchased.

All three follow the same pattern: drop the `.woff2` file(s) in the matching
folder, no code changes needed.

## Deployment

Every push to `main` builds and deploys automatically via
`.github/workflows/deploy.yml`. One manual one-time step is required in the
repo settings: **Settings → Pages → Source → GitHub Actions**.

The custom domain (`ubcdevec.org`) is set via `public/CNAME`. Pointing DNS at
GitHub Pages (via Namecheap) is a separate manual step — see GitHub's docs on
[managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
