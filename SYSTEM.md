# SYSTEM — how we turn taste into rules

> A design system's job is not to look consistent. It is to make the correct choice the
> cheapest path, and deviation impossible rather than merely discouraged.

## 0. Two words

- **Aesthetic** — what you like. It drifts with mood, fashion, and whatever you looked at last.
- **Taste** — the ability to say which of two options is better *and why*. A judgement, so it
  can be written down, taught, and checked.

Everything below turns taste into rules.

## 1. The layer model

| Layer | Contains | Change rate | Travels between projects? |
| --- | --- | --- | --- |
| Core | stance, 5–8 aphorisms, 3 anti-rules, one extreme | ~6 months | **No** — rewritten per project |
| Expression | color, type, radius, spacing, motion | quarterly | Values no; *naming* yes |
| Components | Button, Field, Row, Badge, EmptyState | slowly | Only characterless primitives |

A project swap is: rewrite Core, refill Expression, carry over neutral primitives, leave the
characterful ones behind.

## 2. Authoring procedure

1. **Collect stop moments, not a moodboard.** 20–30 screenshots; one line each on *what*
   stopped you. No reason attached = decoration, not evidence.
2. **Cluster by reason**, not by product. Three to five themes is normal.
3. **Write the stance sentence.** It must exclude something. If it cannot rule an option out,
   it is an advertisement, not a stance.
4. **Turn it into 5–8 aphorisms** in the form "A is better than B". This form sorts values
   instead of describing a style, so it resolves cases no rule predicted.
5. **Write 3 anti-rules.** "Never looks like X" closes whole branches of the solution space.
6. **Pick one extreme.** Style comes from an extreme, not from balance. One dimension taken
   further than anyone else; everything else stays quiet.
7. **Write the contract** (`AESTHETIC.md`) and put it where the agent reads code — root
   `AGENTS.md`, line one.
8. **Build one real page, then revise.** Rules that survive contact with a screen are rules;
   the rest were preferences.

## 3. What makes a rule usable

- Imperative, one rule per line, no adjectives. "Premium", "clean", "modern" are zero information.
- Numbers where possible: 100ms, 1px, 8px, 44px.
- Every primitive gets **when to use / when not to use**, not just an API table.
- Decision rules, not catalogs: `mutually exclusive ≤5 → SegmentedControl`, `confirmation →
  the one ConfirmDialog`, `no next step → EmptyState`.
- An explicit escape hatch: a new primitive needs a proposal; forking at the call site is forbidden.

## 4. AI-maintenance rules

- **Few and hard beats many and soft.** Five to eight invariants that never break; everything
  else is judgement. Long soft rulebooks get routed around.
- **Machine-checkable beats documented.** Turn the top rules into an audit: no raw hex, no
  arbitrary values, no bypassing a primitive. A rule an AI can violate silently is a suggestion.
- **Deletion is part of done.** Change the primitive/token once → update the contract in the
  same change → migrate call sites → delete the old path. AI is good at adding and bad at
  deleting; make deletion explicit.
- **A human owns the contract.** The agent uses the system freely and proposes changes; it never
  silently extends the language.
- **Audit on a schedule.** Raw colors, one-off shadows, duplicate primitives, token coverage.
  Boring, repetitive, cumulative — ideal for an agent.

## 5. Change protocol

1. Check existing primitives first.
2. If genuinely missing: propose, then change the primitive/token **once**.
3. Update `AESTHETIC.md` in the same change.
4. Migrate every call site.
5. Delete the old path.
6. Bump the contract version.

A PR that adds without deleting is not finished.

## 6. Files per project

```
my-app/
├── AGENTS.md          # line 1: "Read AESTHETIC.md before writing UI"
├── AESTHETIC.md       # core: stance, aphorisms, anti-rules, extreme, decisions
├── design/theme.json  # expression: the values
└── src/styles/tokens.css   # generated — never edited by hand
```
