// Drop logo files into this folder using the names below and they show up
// across the whole site automatically — no code changes needed anywhere else.
// See README.md in this folder for exact filenames.

const files = import.meta.glob<{ default: string }>('./*.{svg,png}', {
  eager: true,
});

function find(name: string): string | null {
  const match = Object.entries(files).find(([path]) => path.includes(`/${name}.`));
  return match ? match[1].default : null;
}

export const logos = {
  full: find('full'),
  mark: find('mark'),
  wordmark: find('wordmark'),
};

export type LogoVariant = keyof typeof logos;
