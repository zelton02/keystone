# Why these rules

Notes from reading how six teams actually codified their language.

## GitHub Primer

- **The Zen of GitHub** — 14 aphorisms used to resolve ambiguity when no rule covers the case.
  Examples: "Anything added dilutes everything else", "Favor focus over features",
  "Responsive is better than fast", "Approachable is better than simple".
- Structure: Product UI (guidelines, principles, patterns), Primitives (tokens), Octicons.
- **@primer/mcp** exposes the design system to AI agents as 20 callable tools, including
  `get_component_usage_guidelines`, `find_tokens`, `lint_css`, `review_alt_text`.
  The design system becomes a runtime dependency, not a document.

## IBM Carbon

- Five guiding principles: open, inclusive, modular and flexible, user first, consistency.
- Built on the IBM Design Language, whose ethos is two words: **Build Bonds**.
- Enforcement exists in code: `stylelint-plugin-carbon-tokens` rejects raw values in
  CSS/SCSS (`carbon/theme-use`, `carbon/layout-use`, `carbon/type-use`).

## Stripe

- Styling is **intentionally limited**: custom color is restricted to protect contrast and
  platform consistency. The only place open brand expression is allowed is the app indicator.
- Constraint is the design language.

## Vercel (Geist)

- Four parts only: components, colors, grid, typeface.
- High-contrast accessible color; a strict grid described as "a huge part of the new Vercel
  aesthetic". Three decisions taken far, nothing else.

## Linear

- Publicly: brand guidelines (naming, breathing room, monochrome wordmark, one desaturated blue).
- Third-party reverse-engineering (design-bites) shows the UI can be written down as rules:
  near-black canvas, single-digit luminance steps, Inter at weight 510, one accent
  `rgb(94,106,210)`, borders at `rgba(255,255,255,0.08)`.
- A consistent aesthetic can be reverse-engineered by a stranger. An inconsistent one cannot.

## Apple HIG

- Clarity, Deference, Depth. Ten-plus years old because they are judgements, not styles.

## The pattern

Primer and Carbon do **aphorisms + enforcement**. Stripe and Linear do **constraint + one
extreme**. Vercel does **three decisions, no more**. All of them write down "when not to use",
not just "how to use".
