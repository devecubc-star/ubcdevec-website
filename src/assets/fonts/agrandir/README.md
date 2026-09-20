# Agrandir (placeholder slot)

Agrandir is a commercial typeface from the Pangram Pangram foundry and its
files are not included in this repo. This folder is where the licensed
`.woff2` files go once purchased.

## To activate

1. Drop the licensed files here, named to match what `src/styles/fonts.css`
   expects — currently:
   - `Agrandir-Bold.woff2`
2. If your license includes additional weights, add matching `@font-face`
   blocks in `src/styles/fonts.css` (copy the existing Agrandir block as a
   template).

Until files are added here, the `font-display` Tailwind utility falls back
to the system stack defined in `src/styles/index.css` (`--font-display`) —
nothing breaks, headings just render in the fallback font.
