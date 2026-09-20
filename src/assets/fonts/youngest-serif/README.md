# Youngest Serif (placeholder slot)

Youngest Serif is a commercial typeface from the Pangram Pangram foundry and
its files are not included in this repo. This folder is where the licensed
`.woff2` files go once purchased.

## To activate

1. Drop the licensed file(s) here, named to match what `src/styles/fonts.css`
   expects — currently:
   - `YoungestSerif-Regular.woff2`
2. If your license includes additional weights, add matching `@font-face`
   blocks in `src/styles/fonts.css` (copy the existing Youngest Serif block
   as a template).

Until files are added here, the `font-serif` Tailwind utility falls back to
the system serif stack defined in `src/styles/index.css` (`--font-serif`) —
nothing breaks, serif text just renders in the fallback font.
