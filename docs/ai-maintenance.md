# Keeping AI from drifting

The failure mode is never "the agent wrote an ugly button". It is:

1. **Local optimum.** Every change looks reasonable alone; twenty changes later the product
   has three spacing systems.
2. **Invention at the call site.** No primitive fits, so the agent builds a local one that
   looks fine in isolation.
3. **Silent rule violation.** The rule exists in prose; nothing checks it.

## Countermeasures, in order of leverage

1. **Five hard invariants**, machine-checked. Not fifty soft ones.
2. **Decision rules** (intent → primitive), because choosing wrong is worse than styling wrong.
3. **An escape hatch with a gate** — propose a primitive; never fork one inline.
4. **Contract in the repo**, layered `AGENTS.md` files, line one points at `AESTHETIC.md`.
5. **Delete as part of done.** Otherwise you get two systems within two years.
6. **Scheduled drift audit** — raw colors, arbitrary values, duplicate primitives, token coverage.
   Give this to the agent; humans stop doing it after week three.

## What not to bother with

- A giant rulebook. It gets skimmed.
- Figma as the only source. Agents cannot read it; values must live in code.
- Relying on review to catch drift. Review sees one PR; drift is cumulative.
