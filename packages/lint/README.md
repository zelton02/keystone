# @sistem/lint

Two layers:

- **`audit.mjs`** — zero dependency, runs in CI or pre-commit. Flags raw hex, arbitrary
  spacing, and `!important`. This is the gate.
- **`stylelint.config.mjs`** — editor feedback for projects already using stylelint.

Exit code 1 on findings. Exceptions are declared in `AESTHETIC.md` and passed with
`--allow color:#0b6b3a`, so every bypass is visible in review.
