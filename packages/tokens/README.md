# @keystone/tokens

Zero-dependency token builder.

- `tokens.json` — neutral defaults (the schema every project starts from).
- `build.mjs` — deep-merges a project `theme.json` over the defaults and writes CSS variables.

```bash
node build.mjs --theme design/theme.json --out src/styles/tokens.css
```

Output shape:

```css
:root {
  /* color */
  --color-ink: #14161a;
  ...
}
```

The generated file is committed so a fresh clone renders without a build step, but it is
never edited by hand. `npm run tokens` regenerates it.
