# keystone

A design-system **engine**, not a component library.

Most design systems ship components. This one ships the part that survives a change of
project, stack, or AI model: a way to turn taste into rules that can be checked.

`jalan` (the transit app in the sibling repo) is the first consumer and the reference
implementation.

## What is in here

| Path | What it is |
| --- | --- |
| `SYSTEM.md` | The doctrine. Read this before authoring any design language. |
| `templates/AESTHETIC.md` | The per-project contract. Copy, fill, commit at the repo root. |
| `packages/tokens` | Token schema + zero-dependency builder (`tokens.json` -> CSS vars). |
| `packages/lint` | A token audit script, plus a stylelint config for later. |
| `docs/` | Why these rules exist, and how to keep AI from drifting. |

## The three layers

- **Core** — stance, aphorisms, anti-rules. Frozen ~6 months. Per project.
- **Expression** — color, type, radius, motion. Changes quarterly. Per project.
- **Components** — primitives. Grow slowly. Only the characterless ones travel between projects.

What is reusable is the *shape* of those layers and the tooling around them. The content
is rewritten per project, because taste is a judgement about a task, not a skin.

## Use it in a project

```bash
# 1. copy the contract template
cp keystone/templates/AESTHETIC.md ../my-app/AESTHETIC.md

# 2. write the project's values
cat > ../my-app/design/theme.json <<'JSON'
{ "color": { "ink": "#14161a", "paper": "#f7f5ef", "action": "#0b6b3a" } }
JSON

# 3. generate CSS variables
node keystone/packages/tokens/build.mjs --theme ../my-app/design/theme.json --out ../my-app/src/styles/tokens.css

# 4. audit drift
node keystone/packages/lint/audit.mjs ../my-app/src
```

## License

MIT. The point is for this to be copied, forked, and disagreed with.
