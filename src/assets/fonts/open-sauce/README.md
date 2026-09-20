# Open Sauce Sans (placeholder slot)

Open Sauce Sans is a genuinely free, open-source typeface (OFL-1.1) — unlike
Agrandir and Youngest Serif, no license needs to be purchased for it. The
build environment used to scaffold this repo could not fetch a working
`.woff2` binary for it (every source tried — the Fontshare CDN, the
`@fontsource/open-sauce-sans` npm package, Google Fonts — either failed or
returned unusable data in that sandbox), so this folder is currently empty
and the site falls back to the system sans-serif stack in the meantime.

## To activate

1. Download the real font from one of:
   - https://www.fontshare.com/fonts/open-sauce-sans (official source, free)
   - `npm install @fontsource/open-sauce-sans` and copy the `.woff2` files
     from `node_modules/@fontsource/open-sauce-sans/files/`
2. Drop the files here, named to match what `src/styles/fonts.css` expects:
   - `OpenSauceSans-Regular.woff2` (weight 400)
   - `OpenSauceSans-Medium.woff2` (weight 500)
   - `OpenSauceSans-SemiBold.woff2` (weight 600)
   - `OpenSauceSans-Bold.woff2` (weight 700)

No component code needs to change — the `font-sans` Tailwind utility already
points at "Open Sauce Sans" with a system-font fallback (see
`src/styles/index.css`), so it picks up the real font automatically once the
files land here.
