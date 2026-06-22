# Activum Design System

## Overview

**Activum** is a Spanish real estate project management firm specialising in high-quality residential developments. Their mission is to help clients develop residential real estate projects that are efficient, up-to-date and high quality — through strategic solutions, specialised expertise, and resource optimisation, maximising project success.

**Brand personality:** Personified as an active, modern, elegant woman — detail-oriented, warm, trustworthy, motivating. Pillars: elegance & discretion, sophistication (jewellery metaphor), light & motivation, versatility, solid relationships.

**Market position:** Premium/luxury residential real estate management. National reference in Spain.

Source: *Activum Guía de Estilo | Rebranding 2025* (39 pages)

### Sources Provided
- `uploads/activum-logo-positve.svg` — Full-color positive logo (crimson + near-black)
- `uploads/activum-logo-negative.svg` — All-white negative/inverse logo
- `uploads/activum-logo-mono black.svg` — Monochrome black logo
- `uploads/pattern-dark.svg` — Dark background repeating logo-mark pattern (1508×912px)
- `uploads/pattern-light.svg` — Light background repeating logo-mark pattern (1508×912px)
- `uploads/ICONO 1–5.svg` — Five custom abstract brand icons
- `uploads/Screenshot 2026-04-20 at 09.28.52.png` — Color palette reference showing named swatches

No codebase or Figma link was provided.

---

## Color System

Source: *Guía de Estilo pg 21–25*

| Token | Hex | Pantone | Usage |
|---|---|---|---|
| `--color-blanco` | `#F5F3F2` | P179-1 | **50%** — dominant surface |
| `--color-beige-1` | `#EBE3DB` | P51-1C | **20%** — secondary surface |
| `--color-beige-2` | `#D4C3B3` | 4755 | **10%** — tertiary/strong |
| `--color-negro` | `#1F1D1A` | Black 6C | **10%** — dark surfaces & text |
| `--color-acento` | `#8E2D44` | 194 | **10%** — crimson/burgundy accent |

Brand philosophy: *"Activum es elegancia, luz y transparencia con cierto matiz cálido."* Predominantly light, with negro and acento creating subtle contrast, harmonised by nude tones providing warmth.

All tokens plus semantic, tint/shade, spacing, radius, shadow, and transition vars are in `colors_and_type.css`.

---

## Typography

Source: *Guía de Estilo pg 27–29*

| Role | Family | Weight | Notes |
|---|---|---|---|
| Isotipo / icon mark | Albert Sans | Medium (500) | Brand guide pg 27 — isotipo and structural modifications only |
| Headings / Display | Roboto Serif | 300–500 + italic | Brand guide pg 28–29 — logotipo wordmark and all headings |
| Concepts / Emphasis | Roboto Serif Italic | 300–400 | "Conceptos destacados" — italic pull-quotes and callouts |
| Body / UI | Roboto | 300–500 | All body text, labels, navigation, forms |

All three are available on Google Fonts. No custom font files were provided with the brand guide.

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Elegant and spare.** Copy is minimal — every word earns its place. No filler, no bullet-point overload.
- **First-person voice is avoided** at the brand level; communications speak directly to "you" (the client/reader).
- **No emoji.** The brand is formal; emoji would undermine its premium register.
- **Sentence case** for all headings and UI labels, except for the all-caps `LABEL` / `EYEBROW` type styles used for category tags and section markers.
- **Spanish-inflected naming** (Negro, Blanco, Beige, Acento) signals cultural/regional specificity; copy likely bilingual (ES/EN) or primarily Spanish.
- **Casing:** Proper nouns are capitalized; headings use sentence case; all-caps reserved for small eyebrow labels only.
- **Numbers & data:** Presented cleanly, without excess ornamentation.
- **Vibe:** Confident, calm, unhurried. Premium without being cold.

---

## VISUAL FOUNDATIONS

### Colors
A five-color palette of extreme restraint. Near-black and warm off-whites form the base; two beige tones provide warmth and layering depth; a single crimson accent (`#8E2D44`) creates focus without noise. The palette has a warm, slightly dusty quality — not clinical white, not pure black.

### Typography
Large, light-weight display serif (**Roboto Serif**, 300–400) for headings — refined, modern, slightly geometric with optical size axis. Body in **Roboto** (300–400) for clean readability and excellent legibility at small sizes. Eyebrow labels in all-caps Roboto Medium with wide tracking (`0.18em`). **Albert Sans Medium** is reserved exclusively for the isotipo (icon mark) per the brand guide — never used for general copy. No monospace usage. The brand leans light: weight 500 is the heaviest used in body, 300 is the default for display.

### Backgrounds
Two primary surface modes:
- **Light surface:** `#F5F3F2` base with `#EBE3DB` / `#D4C5B2` layering
- **Dark surface:** `#1F1D1A` base

Both surfaces feature the **logo-mark tile pattern** (`pattern-dark.svg`, `pattern-light.svg`) at low opacity as a texture layer — the repeated "aa" mark creates rhythm without distraction.

### Cards
Cards use `var(--bg-muted)` or `var(--bg-subtle)` fills. Subtle border `rgba(31,29,26,0.10)`. Shadow: `0 4px 20px rgba(31,29,26,0.12)`. Corner radius: `--radius-lg` (16px) for content cards; `--radius-xl` (28px) for large feature cards. No colored left-border accents.

### Borders & Dividers
Hairline borders in warm near-black at low opacity (10–18%). No heavy rules. Dividers are often absent — whitespace does the separating.

### Spacing
Generous whitespace is a primary design tool. Sections breathe; content is not packed. Minimum padding on containers: 32–64px. Layout uses wide gutters.

### Shadows
Warm-toned shadows (based on `#1F1D1A`, not neutral black). Never harsh drop shadows; always soft, diffused.

### Corner Radii
- Small UI elements: 4–8px
- Cards: 16px
- Large feature panels: 28px
- Pills / tags: 9999px (full)

### Hover States
Opacity reduction (to ~0.75) for links and icon buttons. Background color shift (beige-1 → beige-2) for card hovers. Accent elements darken to `--color-acento-dark` (`#6B1F32`). No scale transforms on hover.

### Press / Active States
Slight darkening. No scale-down animations.

### Animations & Easing
Subtle and deliberate. Fade-ins on entry. Duration: 300ms standard; 150ms for micro-interactions. Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out) — content arrives gently, never bounces. No spring physics.

### Imagery
Warm, high-contrast photography. Muted color grading with earthy tones matching the palette. No grain treatment specified. Architecture, space, texture likely.

### Patterns & Textures
The repeating logo-mark pattern is a core brand texture — used as full-bleed backgrounds for hero sections and dark/light panel backgrounds.

### Use of Transparency & Blur
Glass/blur effects not defined in provided assets. Transparency used for pattern overlays (16% opacity in dark mode).

### Layout Rules
Content width restrained; generous margins. Fixed navigation expected at top. Full-bleed pattern panels punctuate content.

---

## ICONOGRAPHY

Activum has **5 custom abstract SVG icons** (ICONO 1–5), all stored in `assets/icons/`. These icons share a common visual language: abstract, geometric paths within a square/rounded-square container. They appear to reference botanical or organic forms — possibly related to services, features, or product categories.

- Icons use `cls-1` / `cls-2` CSS classes — fill/stroke must be applied via CSS when embedding inline.
- No external icon system (Lucide, Heroicons, etc.) is referenced — the brand relies on its own custom set.
- No icon font or sprite sheet provided.
- Unicode / emoji icons are **not** used.
- Icon sizing: 48–64px at standard usage; 32px at compact density.

**Usage note:** When embedding these icons, inject `fill="none" stroke="currentColor" stroke-width="1.5"` inline for consistent rendering with the brand's refined, thin-line aesthetic.

---

## File Index

```
README.md                  ← This file
colors_and_type.css        ← All CSS custom properties (colors, type, spacing, etc.)
SKILL.md                   ← Agent skill definition

assets/
  logo-positive.svg        ← Full-color logo (crimson + black)
  logo-negative.svg        ← All-white logo (for dark backgrounds)
  logo-mono-black.svg      ← Monochrome black logo
  pattern-dark.svg         ← Dark background repeating pattern
  pattern-light.svg        ← Light background repeating pattern
  icons/
    icono-1.svg            ← Custom brand icon 1
    icono-2.svg            ← Custom brand icon 2
    icono-3.svg            ← Custom brand icon 3
    icono-4.svg            ← Custom brand icon 4
    icono-5.svg            ← Custom brand icon 5

preview/
  colors-base.html         ← Base color palette swatches
  colors-semantic.html     ← Semantic color tokens
  type-display.html        ← Display type specimens (h1–h4)
  type-body.html           ← Body & UI type specimens
  type-scale.html          ← Full type scale
  spacing-tokens.html      ← Spacing & radius tokens
  shadows.html             ← Shadow system
  logos.html               ← Logo variants
  patterns.html            ← Background patterns
  icons.html               ← Brand icon set
  buttons.html             ← Button components
  cards.html               ← Card components
  forms.html               ← Form inputs
  tags-badges.html         ← Tags & badges

ui_kits/
  activum/
    index.html             ← Interactive UI kit — main product view
    Header.jsx             ← Navigation header
    Hero.jsx               ← Hero / landing section
    Cards.jsx              ← Property / service cards
    Footer.jsx             ← Footer component
```
