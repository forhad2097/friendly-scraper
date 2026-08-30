---
name: frontend-design
description: Use when designing or building UI for this project — new pages or components, visual redesigns, marketing/landing sections, or reviewing a page for templated "AI-slop" tells before shipping. Covers aesthetic direction and a mechanical pre-flight checklist, tuned to this repo's actual stack and a trust-first healthcare audience.
---

# Frontend Design

Adapted for this repo from two external skills — full originals and licenses in
`references/` and `NOTICE.md`. Read those only for deep dives; this file is the
day-to-day guidance.

## Philosophy

Approach every screen as a design lead who gives each brief a visual identity
that couldn't be mistaken for a generic template. Ground choices in the real
subject: nursing care, patients, families, and the institutions that refer
them — not a generic "healthcare SaaS" stand-in. Name the page's one job before
designing it.

- **The hero is a thesis.** Open with the most characteristic thing in this
  subject's world, not a generic "big number + gradient" template.
- **Typography carries personality.** Pick a deliberate display/body pairing
  and a real type scale — don't leave it as an undifferentiated default.
- **Structure is information.** Numbering, eyebrows, and dividers should
  encode something true (a real sequence, a real category), never decorate.
- **Motion is deliberate or absent.** An orchestrated moment beats scattered
  effects; when in doubt for this audience, do less.
- **Match complexity to the vision.** Minimal directions need precision in
  spacing and detail; they are not an excuse for laziness.
- **Spend boldness in one place**, keep everything else quiet, and cut
  decoration that doesn't serve the brief. Build to a quality floor without
  announcing it: responsive to mobile, visible keyboard focus, reduced motion
  respected.
- **Copy is design material.** Write from the reader's side of the screen —
  name things by what a patient/family/nurse recognizes, not by internal
  system terms. Active voice; a control's label matches the confirmation it
  produces. Errors state what happened and how to fix it, without apologizing
  or being vague.

## This repo's actual stack — use it, don't reinvent it

- **Framework:** React 19 + TanStack Router/Start on Vite (`vite dev`). Not
  Next.js — ignore any guidance about Server Components/`"use client"`.
  Isolate scroll, pointer, or animation logic in dedicated leaf components so
  it doesn't force re-renders elsewhere.
- **Styling:** Tailwind v4 via `@tailwindcss/vite`, tokens defined in
  [styles.css](../../../src/styles.css) under `@theme inline`. Reuse the
  existing semantic tokens (`--color-primary`, `--color-secondary`,
  `--color-accent`, `--color-leaf`, `--color-forest`, `--color-cream`, etc.)
  instead of inventing new hex values inline.
- **Current palette (light mode only — no `.dark` block exists yet):** a
  cream/white base, forest-green secondary/accent family, and a
  coral-red primary/destructive (`oklch(0.53 0.21 27.5)`). If a design needs
  dark mode, that's new work — say so explicitly rather than assuming tokens
  exist.
- **Type:** `--font-sans` is `"Noto Sans Bengali", "Poppins", ui-sans-serif,
  system-ui`; `--font-display` is `"Poppins", "Noto Sans Bengali"`. This
  stack is chosen because the nav ships in Hindi/Bengali alongside English —
  keep any new type choice compatible with Bengali/Devanagari glyph coverage,
  don't swap in a Latin-only display face without checking it degrades
  gracefully for those scripts.
- **Components:** Radix UI primitives + local shadcn-style components
  (`class-variance-authority` + `tailwind-merge`, under `src/components/ui`
  presumably). Customize radii/shadows/spacing to this palette — never ship a
  default, unthemed shadcn look.
- **Icons:** `lucide-react` is already a dependency — use it. Don't add a
  second icon family for variety.
- **Forms:** `react-hook-form` + `zod` + `@hookform/resolvers` are already
  present — use them; don't hand-roll validation.
- **Data viz:** `recharts` is available for charts.
- **Motion:** no animation library is installed. Default to CSS
  transitions/Tailwind transitions and respect `prefers-reduced-motion`. Only
  reach for `motion` (Motion/Framer) or GSAP if a brief genuinely needs
  scroll-pinning or physics — and ask before adding a new dependency.
- **i18n:** copy changes must work in all three languages the nav already
  supports. Translated strings run longer or shorter than English — check
  layouts (button widths, hero line counts) against the longest expected
  string, not just the English draft.

## Domain read

Nursing/healthcare services: a trust-first audience of patients, families,
recruits, and referring institutions — not a consumer SaaS or creative-agency
audience. Default toward calmer, more legible choices than a marketing-site
baseline: moderate layout variance, restrained motion, comfortable (not
cramped, not cavernous) density. The "one aesthetic risk" the philosophy
above calls for should still read as calm and credible, never experimental
for its own sake. Accessibility and clarity outrank visual novelty here.

## Process

1. **State the read.** One line: what page/section, for which audience, doing
   what job.
2. **Plan before building.** Sketch a compact token set (which existing CSS
   variables you'll use, the type pairing, a layout concept in prose or ASCII,
   and the one signature element the section will be remembered by).
3. **Self-critique the plan against the generic default** — would this same
   plan come out of any similar healthcare-site prompt? If yes, revise it and
   say what changed. Watch specifically for the three clichéd AI looks: warm
   cream + high-contrast serif + terracotta accent; near-black + one acid
   accent; broadsheet hairline-rule newspaper columns. None of these fit this
   site's existing palette — don't drift toward them by default.
4. **Build**, deriving colors/type from the plan and the existing tokens, not
   improvised inline values.
5. **Run the pre-flight checklist below** before calling it done.

## Pre-flight checklist (mechanical, run before shipping)

**Content & copy**
- [ ] Zero em-dashes (`—` or `–` as a separator) anywhere visible — headlines,
      labels, buttons, captions, alt text. Use a period, comma, or hyphen.
- [ ] No filler verbs ("Elevate", "Seamless", "Unleash", "Revolutionize") or
      invented placeholder brand/person names left in shipped copy.
- [ ] Every visible string re-read once for grammar and sense — nothing that
      reads like unedited AI output.
- [ ] One CTA label per intent on the page (don't mix "Contact us" / "Get in
      touch" / "Reach out" for the same action).
- [ ] CTA button text fits one line at desktop; shorten the label or widen
      the button, don't let it wrap.

**Layout & hierarchy**
- [ ] Hero fits the initial viewport: headline ≤ 2 lines, supporting text
      short, CTA visible without scrolling.
- [ ] Max one small uppercase "eyebrow" label per ~3 sections — don't put one
      above every section heading.
- [ ] No 3+ consecutive sections using the same layout family (e.g.
      image-left/text-right repeated back to back).
- [ ] Long lists (>5 items) use a component suited to the content (grouped
      cards, tabs, grid) instead of a plain bulleted/divided list.
- [ ] One corner-radius scale and one accent color used consistently across
      the whole page/section — no drifting mid-page.

**Accessibility**
- [ ] Button and form text passes WCAG AA contrast against its background —
      check ghost/outline buttons over images especially.
- [ ] Any animation beyond a simple hover/focus transition respects
      `prefers-reduced-motion` and degrades to static.
- [ ] Keyboard focus is visible on every interactive element.
- [ ] Mobile collapse is explicit for every multi-column section (verify at a
      real narrow width, don't assume Tailwind handles it).

**Images**
- [ ] No div-built "fake screenshot" UI standing in for a real product shot.
- [ ] Real or clearly-placeholder images only — if none are available, leave
      a labeled placeholder and say so, don't fill the gap with decorative
      SVG.

If a box can't be honestly checked, the page isn't done — fix it, don't
rationalize it.

## Deep dives

- `references/anthropic-frontend-design.md` — the fuller philosophy/process
  narrative this file's Philosophy and Process sections were condensed from.
- `references/taste-skill-full.md` — the fuller mechanical rulebook (design
  system selection matrix for other stacks, a pattern-name vocabulary for
  hero/nav/scroll effects, GSAP sticky-stack/horizontal-pan code skeletons,
  and the complete "AI tells" catalogue) this file's stack notes and
  checklist were drawn from. Most of its design-system matrix (Fluent,
  Carbon, GOV.UK, etc.) doesn't apply here — this repo's system is Radix +
  Tailwind + local components — but the AI-tells catalogue and animation
  code skeletons are worth opening directly if you need them.
