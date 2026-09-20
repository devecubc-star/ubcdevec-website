# Logos

Drop logo files directly into this folder with these exact filenames, and
`src/components/common/Logo.tsx` (used in the header, footer, and anywhere
else the logo appears) will pick them up automatically:

- `full.svg` (or `.png`) — full logo, e.g. mark + wordmark combined
- `mark.svg` — icon/symbol only, used in tight spaces (mobile nav, favicon-adjacent contexts)
- `wordmark.svg` — text-only logo, used where the mark would be redundant

No component code needs to change. Until a file is added, that slot renders
a placeholder box so layout doesn't shift when the real logo arrives.
