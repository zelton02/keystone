# <Product> Aesthetic Contract

> Read this before writing any UI. If a rule and the code disagree, fix whichever is wrong —
> do not fork a one-off at the call site.

## Stance (one sentence, must exclude something)

<e.g. "Quiet density: a lot of information, low visual noise.">

Because of that, this product will never: <1> · <2> · <3>

## Aphorisms (5–8, "A is better than B")

- ...
- ...

## Anti-rules (what this must never look like)

- Never looks like <product/category>.
- Never looks like <product/category>.
- Never uses <specific visual cliché>.

## The one extreme

<the single dimension taken further than anyone else, and the rule that enforces it>

## Exceptions (explicit, narrow)

- <data that is allowed to carry color, and exactly where it may appear>

## Tokens (the only place raw values live)

- color: ...
- space: ...
- radius: ...
- type: ...
- motion: ...

## Decision rules (intent → primitive)

- mutually exclusive, ≤5 options → ...
- more than 5 options → ...
- destructive confirmation → ...
- empty state → ...
- loading → ...

## Core primitives — when to use / when not to use

- `<Primitive>` — use when ...; do not use when ...

## Change protocol

1. Check existing primitives first.
2. If genuinely missing: propose, then change the primitive/token once.
3. Update this file in the same change.
4. Migrate call sites and delete the old path.
