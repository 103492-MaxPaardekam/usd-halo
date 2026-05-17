# USD Halo — Complete Design System & Implementation Reference

> **Purpose**: This document is the single source of truth for recreating the USD Halo visual language. It captures every color value, every Tailwind class, every inline style, every spacing decision, and every component structure from the existing landing page — verbatim. Hand this to an AI assistant and it should be able to produce new pages that are pixel-identical in style to the landing page.

---

## 1. Tech Stack (Exact Versions)

| Layer     | Tool         | Exact Version                     | Config Notes                                                                                                                                                                                               |
| --------- | ------------ | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework | React        | `^19.2.6`                         | Functional components only. Uses `React.Fragment` for keyed loops. `StrictMode` enabled in `main.tsx`.                                                                                                     |
| Language  | TypeScript   | `~6.0.2`                          | Strict mode. File extensions: `.tsx` for components, `.ts` for config.                                                                                                                                     |
| Styling   | Tailwind CSS | `v4.3.0`                          | Integrated via `@tailwindcss/vite` plugin — **there is NO `tailwind.config.js/ts` file**. Tailwind is imported in `index.css` via `@import "tailwindcss";`. All customisation is inline or in `index.css`. |
| Build     | Vite         | `^8.0.12`                         | Plugin: `@vitejs/plugin-react` + `@tailwindcss/vite`. Config is minimal — just the two plugins.                                                                                                            |
| Icons     | Lucide React | `^1.16.0`                         | Currently only `ArrowRight` is imported. When adding new icons, always use Lucide. Import individually: `import { IconName } from "lucide-react"`.                                                         |
| Fonts     | Self-hosted  | `.woff2` files in `public/fonts/` | Two weights of TT Norms Pro. Loaded via `@font-face` in `index.css`.                                                                                                                                       |
| PostCSS   | autoprefixer | `^10.5.0`                         | Standard setup.                                                                                                                                                                                            |

### Vite Config (exact)

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### Entry Point (`main.tsx`)

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

---

## 2. Global CSS (`index.css` — complete)

This is the **entire** contents of `index.css`. All global styles live here:

```css
@import "tailwindcss";

@font-face {
  font-family: "TT Norms Pro";
  src: url("/fonts/tt-norms-pro-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "TT Norms Pro";
  src: url("/fonts/tt-norms-pro-semibold.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

html,
body {
  font-family: "TT Norms Pro", ui-sans-serif, system-ui, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}

* {
  font-family: inherit;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes backers-marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 22s linear infinite;
}

.backers-track {
  display: flex;
  width: max-content;
  animation: backers-marquee 30s linear infinite;
}
```

**Key details:**

- `font-display: swap` — text renders immediately with fallback, swaps when font loads.
- `* { font-family: inherit; }` — ensures every element inherits TT Norms Pro. Critical because without this, form elements and buttons fall back to browser defaults.
- Two separate `@keyframes` (`marquee` and `backers-marquee`) that are functionally identical but named differently to allow independent speed control via the class.

---

## 3. Color System (Exhaustive)

### Background Colors

| Token                   | Value        | Tailwind Class         | Where Used                                            |
| ----------------------- | ------------ | ---------------------- | ----------------------------------------------------- |
| Page background         | `#F5F5F5`    | `bg-[#F5F5F5]`         | Root `<div>`, `<html>` body, every `<section>`        |
| Dark card background    | `#2B2644`    | `bg-[#2B2644]`         | Feature bento cards (the two single-width dark cards) |
| CTA button background   | black        | `bg-black`             | All pill buttons                                      |
| CTA button hover        | gray-800     | `hover:bg-gray-800`    | All pill buttons on hover                             |
| Arrow circle background | white        | `bg-white`             | Circle inside pill CTA buttons                        |
| Glass circle background | white at 80% | `bg-white/80`          | Arrow circle in use-case link (with `backdrop-blur`)  |
| Glass circle hover      | white        | `group-hover:bg-white` | Arrow circle in use-case link on parent hover         |

### Text Colors

| Token                | Value                    | Tailwind Class / CSS | Where Used                                                                                    |
| -------------------- | ------------------------ | -------------------- | --------------------------------------------------------------------------------------------- |
| Primary heading text | `#000000`                | `text-black`         | All headings on light backgrounds, logo text, CTA arrow icon                                  |
| Secondary body text  | `rgba(0,0,0,0.70)`       | `text-black/70`      | Hero subtitle, info section body paragraph, card descriptions on light bg, use-case card body |
| Tertiary text        | `rgba(0,0,0,0.60)`       | `text-black/60`      | Section category labels, use-case supporting paragraph, hero partner marquee names            |
| Muted text           | `rgba(0,0,0,0.50)`       | `text-black/50`      | Backer marquee names                                                                          |
| Navbar links (rest)  | Tailwind gray-700        | `text-gray-700`      | Navigation anchor links                                                                       |
| Navbar links (hover) | black                    | `hover:text-black`   | Navigation anchor links on hover                                                              |
| CTA button text      | white                    | `text-white`         | All pill button labels                                                                        |
| Dark card heading    | white                    | `text-white`         | Headings on `#2B2644` cards                                                                   |
| Dark card body       | `rgba(255,255,255,0.60)` | `text-white/60`      | Body text on `#2B2644` cards                                                                  |
| Backed-by label      | `rgba(0,0,0,0.70)`       | `text-black/70`      | "Funded by premier partners" text                                                             |

### The Opacity Hierarchy (Critical Pattern)

Text hierarchy is achieved **purely through opacity on black/white**, not through gray shades:

```
Headings:     text-black        (100% — full black)
Body copy:    text-black/70     (70% — primary readable body)
Supporting:   text-black/60     (60% — secondary / tertiary)
Subtle:       text-black/50     (50% — barely there, marquees)

On dark bg:
Headings:     text-white        (100%)
Body:         text-white/60     (60%)
```

**Never use** `text-gray-500`, `text-gray-600`, etc. for body text. The only place gray is used is `text-gray-700` on navbar links at rest.

---

## 4. Typography (Exhaustive)

### Font Loading

Two self-hosted `.woff2` files in `public/fonts/`:

- `tt-norms-pro-regular.woff2` → weight `400`
- `tt-norms-pro-semibold.woff2` → weight `600`

Global font stack: `'TT Norms Pro', ui-sans-serif, system-ui, sans-serif`

### Font Weight Usage Rules

| Tailwind Class  | CSS Weight | Where Used                                                                                 |
| --------------- | ---------- | ------------------------------------------------------------------------------------------ |
| `font-medium`   | 500        | **ALL headings**, navbar links, CTA button labels, logo text. This is the dominant weight. |
| (default / 400) | 400        | Body copy — no explicit class needed, it's the inherited default.                          |

**NEVER use `font-bold` (700) or `font-semibold` (600) on headings or UI elements.** The design is intentionally understated. `font-medium` (500) is the heaviest weight used in UI. Note: The loaded font files are 400 and 600, but Tailwind's `font-medium` maps to 500 which the browser interpolates.

### Heading Specifications (Exact)

#### Hero H1

```
className="text-black text-5xl md:text-6xl font-medium leading-tight max-w-xl mb-4"
style={{ letterSpacing: "-0.04em" }}
```

- Mobile: `text-5xl` (3rem / 48px)
- Desktop (`md:`): `text-6xl` (3.75rem / 60px)
- Line height: `leading-tight` (1.25)
- Letter spacing: `-0.04em` (tightest used anywhere)
- Max width: `max-w-xl` (36rem / 576px)
- Bottom margin: `mb-4` (1rem)
- Color: `text-black`

#### Section H2 — Declarative (e.g. "Meet USD Halo.")

```
className="text-black text-4xl md:text-5xl font-medium leading-tight mb-8"
style={{ letterSpacing: "-0.03em" }}
```

- Mobile: `text-4xl` (2.25rem / 36px)
- Desktop: `text-5xl` (3rem / 48px)
- Line height: `leading-tight` (1.25)
- Letter spacing: `-0.03em`
- Bottom margin: `mb-8` (2rem)

#### Section H2 — Display (e.g. "Use modes")

```
className="text-5xl md:text-6xl font-medium leading-none mb-6"
style={{ letterSpacing: "-0.04em" }}
```

- Same size as Hero H1
- Line height: `leading-none` (1.0) — tighter than hero because it's a short phrase
- Letter spacing: `-0.04em`
- Bottom margin: `mb-6` (1.5rem)
- **No color class** — inherits black from parent

#### Card H3 — Bento Cards (Light Background)

```
className="text-black text-2xl font-medium leading-snug"
style={{ letterSpacing: "-0.02em" }}
```

- Size: `text-2xl` (1.5rem / 24px) — does NOT scale with breakpoint
- Line height: `leading-snug` (1.375)
- Letter spacing: `-0.02em` (gentlest tracking)

#### Card H3 — Bento Cards (Dark Background)

```
className="text-white text-2xl font-medium whitespace-pre-line"
```

- Same size and weight as light card H3
- **No `letterSpacing` inline style** — only light-background card headings get inline letter-spacing
- Uses `whitespace-pre-line` for controlled line breaks via `{"\n"}` in JSX

#### Use-Case Video Card H3

```
className="text-black text-4xl md:text-5xl font-medium leading-tight mb-5"
style={{ letterSpacing: "-0.03em" }}
```

- Same typographic treatment as Section H2 Declarative
- Bottom margin: `mb-5` (1.25rem)

### Body Copy Specifications (Exact)

#### Hero Subtitle

```
className="text-black/70 text-base md:text-lg max-w-md mb-8 leading-relaxed"
style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
```

- **Uses Inter font** via inline style — the ONLY place Inter is used
- Mobile: `text-base` (1rem / 16px)
- Desktop: `text-lg` (1.125rem / 18px)
- Line height: `leading-relaxed` (1.625)
- Max width: `max-w-md` (28rem / 448px)
- Color: `text-black/70`

#### Info Section Large Body

```
className="text-black/70 text-2xl md:text-3xl leading-relaxed"
```

- Mobile: `text-2xl` (1.5rem / 24px)
- Desktop: `text-3xl` (1.875rem / 30px)
- No max-width constraint — fills its grid column
- Color: `text-black/70`

#### Card Body (Light Background)

```
className="text-black/70 text-base max-w-xs"
```

- Size: `text-base` (16px)
- Max width: `max-w-xs` (20rem / 320px)
- No explicit line-height class (uses default)

#### Card Body (Dark Background)

```
className="text-white/60 text-base"
```

- Size: `text-base` (16px)
- No max-width constraint

#### Use-Case Video Card Body

```
className="text-black/70 text-base max-w-md mb-8 leading-relaxed"
```

#### Section Category Label

```
className="text-black/60 text-sm mb-2 block"
```

- Size: `text-sm` (0.875rem / 14px)
- Display: `block` (since `<span>` is used)
- Bottom margin: `mb-2` (0.5rem)

#### Supporting Paragraph

```
className="text-black/60 text-base leading-relaxed max-w-sm"
```

- Max width: `max-w-sm` (24rem / 384px)

#### Backed-By Label

```
className="text-black/70 text-base leading-relaxed whitespace-pre-line"
```

- Uses `whitespace-pre-line` so `{"\n"}` creates a visible line break in JSX.

### Letter-Spacing Reference Table

| Value                       | Where Used                                                        |
| --------------------------- | ----------------------------------------------------------------- |
| `-0.04em`                   | Hero H1, Display H2 ("Use modes")                                 |
| `-0.03em`                   | Declarative H2 ("Meet USD Halo."), Use-case video H3 ("Commerce") |
| `-0.02em`                   | Bento card H3 ("Savings that bloom")                              |
| `tracking-tight` (Tailwind) | Logo text "Halo" — equivalent to `-0.025em`                       |

### Secondary Typeface: Inter

**Inter** is used once — on the hero subtitle only:

```ts
style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
```

It is NOT self-hosted. It relies on the user's system having Inter installed, or falls back to `ui-sans-serif, system-ui, sans-serif`. Use this sparingly — only for body copy that needs a slightly different texture from TT Norms Pro.

---

## 5. Layout System (Exact Specifications)

### Page Root

```tsx
<div className="flex flex-col bg-[#F5F5F5] min-h-screen">
```

- Flex column so sections stack naturally.
- `min-h-screen` ensures at least full viewport height.

### Content Container (Used Everywhere)

Every section uses this pattern:

```
<section className="bg-[#F5F5F5] px-6 py-{value}">
  <div className="max-w-[88rem] mx-auto">
    ...content...
  </div>
</section>
```

- **Max width**: `max-w-[88rem]` = **1408px**. This is a custom value, not a Tailwind default.
- **Horizontal padding**: `px-6` = 1.5rem = 24px on each side.
- **Centering**: `mx-auto`.

The hero section is slightly different — the `max-w-[88rem] mx-auto w-full` is on the inner flex wrapper, not a `<section>`.

### Section Vertical Padding

| Section Type                             | Tailwind     | Pixels                 |
| ---------------------------------------- | ------------ | ---------------------- |
| Major content sections (Info, Use Cases) | `py-24`      | 96px top + 96px bottom |
| Minor / breather sections (Backed By)    | `py-12`      | 48px top + 48px bottom |
| Hero wrapper                             | `pt-20 pb-6` | 80px top + 24px bottom |

### Hero Section Layout (Exact)

```tsx
{/* Outer wrapper: locks to viewport height */}
<div className="h-screen flex flex-col overflow-hidden relative">

  {/* Navbar floats above */}
  <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-5">
    <div className="max-w-[88rem] mx-auto flex items-center justify-between">
      ...
    </div>
  </nav>

  {/* Hero content: pushed to bottom of viewport */}
  <div className="flex-1 px-6 pt-20 pb-6 flex items-end max-w-[88rem] mx-auto w-full">

    {/* Video container: fills remaining space */}
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{ height: "calc(100vh - 96px)" }}
    >
      {/* Video: absolute-positioned, covers container */}
      <video ... className="object-cover absolute inset-0 w-full h-full" />

      {/* Content overlay: top-left positioned */}
      <div className="relative z-10 flex flex-col items-start justify-start h-full p-12 pt-36">
        ...heading, subtitle, CTA, marquee...
      </div>
    </div>
  </div>
</div>
```

**Key details:**

- The hero takes exactly `h-screen` (100vh).
- The video container height is `calc(100vh - 96px)` — this accounts for the navbar space. `py-5` on nav = 40px gives roughly 96px total navbar area.
- Content overlay padding: `p-12` (48px all sides) with `pt-36` override (144px top — pushes content well below the navbar).
- Content is aligned `items-start justify-start` — top-left.

### Grid Layouts (Exact)

#### Info Section — Row 1 (Heading + Body Split)

```
className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start"
```

- `gap-12` = 3rem = 48px
- `mb-16` = 4rem = 64px (space before the card grid)
- `items-start` — columns align to top

#### Info Section — Row 2 (Bento Card Grid)

```
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
```

- `gap-4` = 1rem = 16px (tight card spacing)
- First card: `lg:col-span-2` (wide card spans 2 of 4 columns)
- Three cards total in the grid: 1 wide + 2 narrow

#### Backed-By Section

```
className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center"
```

- Left column: `md:col-span-1`
- Right column (marquee): `md:col-span-3 overflow-hidden`
- `gap-8` = 2rem = 32px
- `items-center` — vertically centers label with marquee

#### Use-Cases Section

```
className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
```

- `gap-8` = 2rem = 32px
- Left column extra padding: `md:pr-12 md:pt-2`
- `items-start` — columns align to top

---

## 6. Component Specifications (Verbatim)

### 6.1 Logo

The logo is a custom SVG component + text:

```tsx
const LogoIcon = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" className="w-7 h-7 text-black">
    <path d="M 128.005 191.173 C 128.448 156.208 156.93 128 192 128 L 192 64 L 128 64 C 128 99.346 99.346 128 64 128 L 64 192 L 128 192 Z M 192 256 L 64 256 C 28.654 256 0 227.346 0 192 L 0 64 L 64 64 L 64 0 L 192 0 C 227.346 0 256 28.654 256 64 L 256 192 L 192 192 Z" />
  </svg>
);
```

- Icon size: `w-7 h-7` (1.75rem = 28px)
- Uses `fill="currentColor"` so `text-black` controls the color.
- The icon is an abstract geometric shape — rounded square with organic cutout.

Logo text:

```tsx
<span className="text-2xl font-medium tracking-tight text-black">Halo</span>
```

- `text-2xl` = 1.5rem / 24px
- `tracking-tight` = letter-spacing `-0.025em`
- Gap between icon and text: `gap-2` (0.5rem / 8px) on the parent flex.

### 6.2 Navbar (Complete Structure)

```tsx
<nav className="absolute top-0 left-0 right-0 z-20 px-6 py-5">
  <div className="max-w-[88rem] mx-auto flex items-center justify-between">
    {/* Left: Logo */}
    <div className="flex items-center gap-2">
      <LogoIcon />
      <span className="text-2xl font-medium tracking-tight text-black">
        Halo
      </span>
    </div>

    {/* Center: Navigation Links */}
    <div className="hidden md:flex items-center gap-8 text-base text-gray-700 font-medium">
      {["Network", "Ecosystem", "Rewards", "Help", "News"].map((item) => (
        <a
          key={item}
          href="#"
          className="hover:text-black transition-colors duration-200"
        >
          {item}
        </a>
      ))}
    </div>

    {/* Right: CTA Button */}
    <button className="bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200">
      Open Wallet
    </button>
  </div>
</nav>
```

**Exact navbar specifications:**

- Position: `absolute` (not fixed — scrolls away with hero). `z-20` to sit above video.
- Outer padding: `px-6 py-5` (24px horizontal, 20px vertical).
- Three-group layout: logo, links, button — `justify-between` spreads them to edges.
- Links hidden below `md:` (768px). No hamburger menu exists.
- Navigation items: `["Network", "Ecosystem", "Rewards", "Help", "News"]`
- Link gap: `gap-8` (2rem / 32px) between each link.
- Each link: `text-base text-gray-700 font-medium`, hover → `text-black`, `transition-colors duration-200`.

### 6.3 CTA Buttons (All Variants)

#### Variant A: Standard Pill (Navbar)

```tsx
<button className="bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200">
  Open Wallet
</button>
```

- Padding: `px-7 py-2.5` (28px horizontal, 10px vertical)
- Border radius: `rounded-full` (fully rounded — pill shape)

#### Variant B: Pill with Arrow Circle (Hero, Info Section)

```tsx
<button className="inline-flex items-center gap-3 bg-black text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
  Join us
  <div className="bg-white rounded-full p-2">
    <ArrowRight className="w-5 h-5 text-black" />
  </div>
</button>
```

**Exact measurements:**

- Left padding: `pl-8` (32px) — more room for text
- Right padding: `pr-2` (8px) — tight against the arrow circle
- Vertical padding: `py-2` (8px)
- Gap between text and circle: `gap-3` (12px)
- Arrow circle: `bg-white rounded-full p-2` (white circle, 8px padding around icon)
- Arrow icon: `w-5 h-5` (20px), `text-black`
- Text size: `text-base md:text-lg` on hero; just `text-base` on info section

The asymmetric padding (`pl-8` vs `pr-2`) creates the signature look where the white circle sits nearly flush with the pill's right edge.

**Info section variant** is identical except text is always `text-base` (no `md:text-lg`):

```tsx
<button className="inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
  Discover it
  <div className="bg-white rounded-full p-2">
    <ArrowRight className="w-5 h-5 text-black" />
  </div>
</button>
```

#### Variant C: Text Link with Glass Arrow Circle (Use-Case Card)

```tsx
<a
  href="#"
  className="inline-flex items-center gap-3 text-black text-base font-medium group"
>
  <div className="w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center group-hover:bg-white transition-colors duration-200">
    <ArrowRight className="w-4 h-4 text-black" />
  </div>
  Know more
</a>
```

**Key differences from pill buttons:**

- No background on the `<a>` — it's a text link.
- Arrow circle comes FIRST (left), label SECOND (right) — reverse order from pills.
- Circle: explicit `w-9 h-9` (36px), `bg-white/80 backdrop-blur` (glass effect).
- Smaller arrow icon: `w-4 h-4` (16px vs 20px in pills).
- Uses `group` / `group-hover:` pattern for hover state.

### 6.4 Feature Cards (Bento Grid)

#### Wide Card with Background Image

```tsx
<div
  className="lg:col-span-2 rounded-2xl p-7 min-h-80 flex flex-col justify-between"
  style={{
    backgroundImage: "url(...)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <h3
    className="text-black text-2xl font-medium leading-snug"
    style={{ letterSpacing: "-0.02em" }}
  >
    Savings that bloom
  </h3>
  <p className="text-black/70 text-base max-w-xs">
    Gain steady returns as your dollar tokens are routed into top-performing
    DeFi strategies.
  </p>
</div>
```

**Exact specs:**

- Grid span: `lg:col-span-2` (takes 2 of 4 columns on desktop)
- Border radius: `rounded-2xl` (1rem / 16px)
- Padding: `p-7` (1.75rem / 28px)
- Min height: `min-h-80` (20rem / 320px)
- Layout: `flex flex-col justify-between` — heading at top, body at bottom
- Background: inline style with `cover` and `center`
- Body max width: `max-w-xs` (20rem / 320px)

#### Dark Single Card

```tsx
<div className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
  <h3 className="text-white text-2xl font-medium whitespace-pre-line">
    Always fluid,{"\n"}always pegged.
  </h3>
  <p className="text-white/60 text-base">
    Keep fully dollar-anchored with on-demand access to funds — no lockups or
    waits.
  </p>
</div>
```

**Exact specs:**

- Background: `bg-[#2B2644]` (deep muted purple)
- Same structural classes: `rounded-2xl p-7 min-h-80 flex flex-col justify-between`
- Heading: `text-white`, uses `whitespace-pre-line` + `{"\n"}` for controlled line breaks
- **No `letterSpacing` inline style** on dark card headings — only light-background headings get it
- Body: `text-white/60`

### 6.5 Video Components

#### Hero Video Container

```tsx
<div
  className="relative w-full rounded-2xl overflow-hidden"
  style={{ height: "calc(100vh - 96px)" }}
>
  <video
    autoPlay
    muted
    loop
    playsInline
    className="object-cover absolute inset-0 w-full h-full"
  >
    <source src="..." type="video/mp4" />
  </video>

  <div className="relative z-10 flex flex-col items-start justify-start h-full p-12 pt-36">
    ...content...
  </div>
</div>
```

- Container: `rounded-2xl`, custom height via inline style
- Video: always `autoPlay muted loop playsInline` — all four attributes
- Video positioning: `object-cover absolute inset-0 w-full h-full`
- Content overlay: `relative z-10`, `p-12` with `pt-36` override

#### Use-Case Video Card

```tsx
<div className="relative rounded-3xl overflow-hidden min-h-[720px] w-full">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="object-cover absolute inset-0 w-full h-full"
  >
    <source src="..." type="video/mp4" />
  </video>

  <div className="relative z-10 p-10 md:p-12 h-full flex flex-col justify-end">
    ...content at bottom...
  </div>
</div>
```

**Key differences from hero:**

- Border radius: `rounded-3xl` (1.5rem / 24px) — **larger** than hero's `rounded-2xl`
- Min height: `min-h-[720px]` (custom fixed value)
- Content positioned at BOTTOM: `justify-end` (vs `justify-start` in hero)
- Content padding: `p-10 md:p-12` (responsive, vs hero's fixed `p-12 pt-36`)

### 6.6 Marquee / Scrolling Ticker

#### Hero Partner Marquee

```tsx
<div className="mt-24 w-full max-w-md overflow-hidden">
  <div className="marquee-track">
    {[...Array(2)].map((_, i) => (
      <React.Fragment key={i}>
        {/* Each brand as a styled span */}
      </React.Fragment>
    ))}
  </div>
</div>
```

**Container specs:**

- Top margin: `mt-24` (6rem / 96px) from the CTA button above
- Width: `w-full max-w-md` (fills available space, max 28rem / 448px)
- `overflow-hidden` clips the scrolling content

**Track:** `.marquee-track` class applies: `display:flex; width:max-content; animation: marquee 22s linear infinite;`

**Content duplication:** `[...Array(2)].map(...)` renders the items TWICE for seamless looping. The CSS `translateX(-50%)` scrolls exactly one set off-screen, then resets.

#### Backer Marquee

```tsx
<div className="md:col-span-3 overflow-hidden">
  <div className="backers-track">
    {[...Array(2)].map((_, i) => (
      <React.Fragment key={i}>
        {/* Each backer as a styled span */}
      </React.Fragment>
    ))}
  </div>
</div>
```

- `.backers-track` uses `animation: backers-marquee 30s linear infinite` (slower — 30s vs 22s)
- Container: fills 3 of 4 grid columns, `overflow-hidden`
- No max-width constraint (fills its grid cell)

#### Brand Name Styling Convention

Each brand/backer name is a `<span>` with:

- Common classes: `mx-{7|10} shrink-0 text-black/{60|50} whitespace-nowrap`
- Unique inline styles per brand: `fontFamily`, `fontWeight`, `letterSpacing`, `fontSize`
- Some add `uppercase` or `italic` Tailwind classes

**Hero partners** (`text-black/60`, `mx-7`):

| Brand     | fontFamily                           | fontWeight | letterSpacing | fontSize | Extra Classes |
| --------- | ------------------------------------ | ---------- | ------------- | -------- | ------------- |
| Stripe    | `Georgia, serif`                     | 700        | `-0.02em`     | `15px`   | —             |
| Coinbase  | `Arial, sans-serif`                  | 900        | `0.08em`      | `13px`   | `uppercase`   |
| Uniswap   | `"Trebuchet MS", sans-serif`         | 600        | `0.01em`      | `15px`   | `italic`      |
| Aave      | `"Courier New", monospace`           | 700        | `0.12em`      | `13px`   | `uppercase`   |
| Compound  | `Palatino, "Book Antiqua", serif`    | 400        | `-0.01em`     | `16px`   | —             |
| MakerDAO  | `Impact, "Arial Narrow", sans-serif` | 400        | `0.04em`      | `14px`   | —             |
| Chainlink | `Verdana, sans-serif`                | 700        | `-0.03em`     | `13px`   | —             |

**Backers** (`text-black/50`, `mx-10`):

| Brand            | fontFamily                  | fontWeight | letterSpacing | fontSize | Extra Classes |
| ---------------- | --------------------------- | ---------- | ------------- | -------- | ------------- |
| Fundamental Labs | `"Times New Roman", serif`  | 400        | `0.02em`      | `14px`   | —             |
| KUCOIN           | `"Arial Black", sans-serif` | 900        | `0.08em`      | `16px`   | —             |
| NGC              | `Impact, sans-serif`        | 700        | `0.05em`      | `18px`   | —             |
| NxGen            | `Georgia, serif`            | 600        | `-0.02em`     | `17px`   | —             |
| Matter Labs      | `Helvetica, sans-serif`     | 700        | `-0.01em`     | `15px`   | —             |
| DEXTools         | `Verdana, sans-serif`       | 700        | `0.06em`      | `14px`   | `uppercase`   |
| NGRAVE           | `"Courier New", monospace`  | 700        | `0.18em`      | `14px`   | —             |
| Polychain        | `Palatino, serif`           | 500        | `0.03em`      | `15px`   | —             |

**When adding new brand names to marquees**, follow this convention: pick a system font that visually echoes the real brand's logo, vary the weight and letter-spacing to create texture, and keep the font size between 13px–18px.

---

## 7. Border Radius Scale

| Tailwind Class | Value         | Where Used                                |
| -------------- | ------------- | ----------------------------------------- |
| `rounded-full` | 9999px        | Buttons (pill shape), icon circles        |
| `rounded-3xl`  | 1.5rem / 24px | Use-case video card only                  |
| `rounded-2xl`  | 1rem / 16px   | Hero video container, bento feature cards |

**There is no `rounded-xl`, `rounded-lg`, or `rounded-md` used anywhere.** The scale jumps from `rounded-2xl` to `rounded-full`. Do not introduce intermediate radii.

---

## 8. Transitions & Animation

### Interaction Transitions

Every interactive element uses the exact same transition:

```
transition-colors duration-200
```

- Property: `colors` only (not `all`)
- Duration: `200ms`
- Timing: default (ease)

No transforms, scales, or opacity transitions on hover. The design is intentionally restrained — hover states change color only.

### Marquee Animations (CSS)

Both marquees use identical mechanics with different speeds:

```css
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes backers-marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
```

- `translateX(-50%)` works because the content is duplicated — scrolling 50% of the track shifts exactly one full set of items out, then the animation loops seamlessly.
- `linear infinite` — constant speed, never stops.
- Hero marquee: **22 seconds** per cycle.
- Backer marquee: **30 seconds** per cycle.

### What Animations Do NOT Exist

- No scroll-triggered reveal/fade-in animations
- No parallax effects
- No hover scale/transform effects
- No page transition animations
- No loading animations
- No skeleton screens

---

## 9. Responsive Design (Exact Breakpoint Behavior)

### Breakpoints Used

| Prefix | Min Width | What Changes                                                                           |
| ------ | --------- | -------------------------------------------------------------------------------------- |
| `sm:`  | 640px     | Bento grid goes from 1 col → 2 cols                                                    |
| `md:`  | 768px     | Nav links appear; grids go 1 → 2 cols; headings scale up; video card padding increases |
| `lg:`  | 1024px    | Bento grid goes 2 → 4 cols; wide card gets `col-span-2`                                |

### Element-by-Element Responsive Changes

| Element            | Mobile (default) | `sm:` (640px) | `md:` (768px) | `lg:` (1024px) |
| ------------------ | ---------------- | ------------- | ------------- | -------------- |
| Nav links          | `hidden`         | —             | `flex`        | —              |
| Hero H1            | `text-5xl`       | —             | `text-6xl`    | —              |
| Hero subtitle      | `text-base`      | —             | `text-lg`     | —              |
| Hero CTA           | `text-base`      | —             | `text-lg`     | —              |
| Info H2            | `text-4xl`       | —             | `text-5xl`    | —              |
| Info body          | `text-2xl`       | —             | `text-3xl`    | —              |
| Info grid Row 1    | `grid-cols-1`    | —             | `grid-cols-2` | —              |
| Bento grid         | `grid-cols-1`    | `grid-cols-2` | —             | `grid-cols-4`  |
| Wide bento card    | spans 1          | spans 1       | —             | `col-span-2`   |
| Backed-by grid     | `grid-cols-1`    | —             | `grid-cols-4` | —              |
| Use-cases grid     | `grid-cols-1`    | —             | `grid-cols-2` | —              |
| Use-case left col  | no extra padding | —             | `pr-12 pt-2`  | —              |
| Display H2         | `text-5xl`       | —             | `text-6xl`    | —              |
| Video card padding | `p-10`           | —             | `p-12`        | —              |
| Use-case H3        | `text-4xl`       | —             | `text-5xl`    | —              |

**`xl:` and `2xl:` breakpoints are NOT used anywhere.** The design only uses `sm`, `md`, and `lg`.

---

## 10. Content & Copywriting Rules

### Voice & Tone

- **Concise**: Headings are 2–5 words. Body paragraphs are 1–2 sentences max.
- **Aspirational but grounded**: Uses financial language but avoids jargon ("reward-earning dollar coin" not "yield-bearing stablecoin protocol").
- **Active voice**: "Your Wealth Works" not "Wealth is grown".
- **Em dashes** (—) used for inline asides: "no lockups or waits", "letting your patrons earn with zero effort".

### Heading Style Rules

| Type                     | Pattern                                               | Examples                                                |
| ------------------------ | ----------------------------------------------------- | ------------------------------------------------------- |
| Hero H1                  | Fragmented, 2–3 words per line, uses `<br />`         | "Your Wealth`<br />`Works"                              |
| Section H2 (declarative) | Short sentence with period                            | "Meet USD Halo."                                        |
| Section H2 (display)     | 1–2 word noun/verb phrase, no period                  | "Use modes"                                             |
| Card H3 (poetic)         | Evocative phrase, may include line break via `{"\n"}` | "Savings that bloom", "Always fluid,`\n`always pegged." |
| Card H3 (factual)        | Short statement                                       | "Fully`\n`automated"                                    |

### CTA Label Vocabulary

| Context                    | Label         | Intent                        |
| -------------------------- | ------------- | ----------------------------- |
| Navbar (persistent action) | "Open Wallet" | Direct product action         |
| Hero (primary CTA)         | "Join us"     | Community / onboarding        |
| Section (exploration CTA)  | "Discover it" | Deeper dive into topic        |
| Card (detail link)         | "Know more"   | Learn about specific use case |

### Line Break Convention

In JSX, controlled line breaks use `{"\n"}` with `whitespace-pre-line` on the element:

```tsx
<h3 className="... whitespace-pre-line">Always fluid,{"\n"}always pegged.</h3>
```

In the backed-by label, same pattern:

```tsx
<p className="... whitespace-pre-line">
  Funded by premier partners{"\n"}and forward-thinking leaders.
</p>
```

Hero H1 uses `<br />` instead (because it doesn't use `whitespace-pre-line`):

```tsx
<h1>
  Your Wealth
  <br />
  Works
</h1>
```

---

## 11. Spacing Cheat Sheet

### Vertical Spacing Between Elements (Inside Sections)

| From → To                   | Margin                 | Tailwind | Pixels |
| --------------------------- | ---------------------- | -------- | ------ |
| H1 → subtitle               | `mb-4`                 | `mb-4`   | 16px   |
| Subtitle → CTA button       | `mb-8`                 | `mb-8`   | 32px   |
| CTA button → marquee        | `mt-24`                | `mt-24`  | 96px   |
| H2 → CTA button (info)      | `mb-8` on H2           | `mb-8`   | 32px   |
| Row 1 → Row 2 (info)        | `mb-16` on row wrapper | `mb-16`  | 64px   |
| Category label → display H2 | `mb-2`                 | `mb-2`   | 8px    |
| Display H2 → body paragraph | `mb-6`                 | `mb-6`   | 24px   |
| Video card H3 → body        | `mb-5`                 | `mb-5`   | 20px   |
| Video card body → link      | `mb-8`                 | `mb-8`   | 32px   |

### Padding Reference

| Context               | Tailwind         | Pixels              |
| --------------------- | ---------------- | ------------------- |
| Section horizontal    | `px-6`           | 24px each side      |
| Navbar outer          | `px-6 py-5`      | 24px / 20px         |
| Hero content overlay  | `p-12 pt-36`     | 48px all, 144px top |
| Video card content    | `p-10 md:p-12`   | 40px → 48px         |
| Bento card interior   | `p-7`            | 28px                |
| CTA pill (standard)   | `px-7 py-2.5`    | 28px / 10px         |
| CTA pill (with arrow) | `pl-8 pr-2 py-2` | 32px / 8px / 8px    |
| Arrow circle padding  | `p-2`            | 8px                 |

### Gap Reference

| Context                 | Tailwind | Pixels |
| ----------------------- | -------- | ------ |
| Logo icon ↔ text        | `gap-2`  | 8px    |
| Nav links               | `gap-8`  | 32px   |
| CTA text ↔ arrow circle | `gap-3`  | 12px   |
| Info row 1 columns      | `gap-12` | 48px   |
| Bento cards             | `gap-4`  | 16px   |
| Backed-by columns       | `gap-8`  | 32px   |
| Use-cases columns       | `gap-8`  | 32px   |
| Link icon ↔ text        | `gap-3`  | 12px   |

---

## 12. Section-by-Section Reconstruction Guide

Use these as templates when building new pages. Each section below is a complete copy-paste-ready pattern.

### Pattern A: Full-Screen Hero with Video

```tsx
<div className="h-screen flex flex-col overflow-hidden relative">
  {/* Navbar (see §6.2) */}
  <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-5">...</nav>

  <div className="flex-1 px-6 pt-20 pb-6 flex items-end max-w-[88rem] mx-auto w-full">
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{ height: "calc(100vh - 96px)" }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="object-cover absolute inset-0 w-full h-full"
      >
        <source src="..." type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col items-start justify-start h-full p-12 pt-36">
        {/* H1, subtitle, CTA, marquee */}
      </div>
    </div>
  </div>
</div>
```

### Pattern B: Two-Column Content Split

```tsx
<section className="bg-[#F5F5F5] px-6 py-24">
  <div className="max-w-[88rem] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
      <div>{/* Left: H2 heading + CTA button */}</div>
      <div>{/* Right: Large body text (text-2xl md:text-3xl) */}</div>
    </div>
  </div>
</section>
```

### Pattern C: Bento Card Grid

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Wide card */}
  <div
    className="lg:col-span-2 rounded-2xl p-7 min-h-80 flex flex-col justify-between"
    style={{
      backgroundImage: "url(...)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <h3
      className="text-black text-2xl font-medium leading-snug"
      style={{ letterSpacing: "-0.02em" }}
    >
      ...
    </h3>
    <p className="text-black/70 text-base max-w-xs">...</p>
  </div>

  {/* Dark card */}
  <div className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
    <h3 className="text-white text-2xl font-medium whitespace-pre-line">...</h3>
    <p className="text-white/60 text-base">...</p>
  </div>

  {/* Another dark card */}
  <div className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
    <h3 className="text-white text-2xl font-medium whitespace-pre-line">...</h3>
    <p className="text-white/60 text-base">...</p>
  </div>
</div>
```

### Pattern D: Marquee Trust Strip

```tsx
<section className="bg-[#F5F5F5] px-6 py-12">
  <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
    <div className="md:col-span-1">
      <p className="text-black/70 text-base leading-relaxed whitespace-pre-line">
        Label text here{"\n"}with a line break.
      </p>
    </div>
    <div className="md:col-span-3 overflow-hidden">
      <div className="backers-track">
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            {/* Brand spans with unique typography */}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
</section>
```

### Pattern E: Two-Column with Video Card

```tsx
<section className="bg-[#F5F5F5] px-6 py-24">
  <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    <div className="md:pr-12 md:pt-2">
      <span className="text-black/60 text-sm mb-2 block">Category Label</span>
      <h2
        className="text-5xl md:text-6xl font-medium leading-none mb-6"
        style={{ letterSpacing: "-0.04em" }}
      >
        Heading
      </h2>
      <p className="text-black/60 text-base leading-relaxed max-w-sm">
        Supporting text.
      </p>
    </div>

    <div className="relative rounded-3xl overflow-hidden min-h-[720px] w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="object-cover absolute inset-0 w-full h-full"
      >
        <source src="..." type="video/mp4" />
      </video>
      <div className="relative z-10 p-10 md:p-12 h-full flex flex-col justify-end">
        <h3
          className="text-black text-4xl md:text-5xl font-medium leading-tight mb-5"
          style={{ letterSpacing: "-0.03em" }}
        >
          Card Title
        </h3>
        <p className="text-black/70 text-base max-w-md mb-8 leading-relaxed">
          Card description.
        </p>
        <div>
          <a
            href="#"
            className="inline-flex items-center gap-3 text-black text-base font-medium group"
          >
            <div className="w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center group-hover:bg-white transition-colors duration-200">
              <ArrowRight className="w-4 h-4 text-black" />
            </div>
            Know more
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 13. Strict Rules — Do's and Don'ts

### ✅ ALWAYS

1. Use `font-medium` (500) for all headings — never `font-bold` or `font-semibold`.
2. Apply negative `letterSpacing` via inline `style` on every heading: `-0.04em`, `-0.03em`, or `-0.02em`.
3. Use `text-black/70` for primary body text, `text-black/60` for secondary, `text-black/50` for subtle.
4. Use `text-white/60` for body text on dark (`#2B2644`) backgrounds.
5. Constrain paragraph widths: `max-w-xs`, `max-w-sm`, `max-w-md`, or `max-w-xl`.
6. Use `max-w-[88rem] mx-auto` as the content container in every section.
7. Use `px-6` as horizontal padding on every section.
8. Use `py-24` for major sections, `py-12` for minor/breather sections.
9. Use `rounded-2xl` for cards and containers, `rounded-3xl` for large video cards, `rounded-full` for buttons and circles.
10. Use `transition-colors duration-200` on every interactive element.
11. Use `bg-[#F5F5F5]` as the background on every section and the page root.
12. Keep video elements as `autoPlay muted loop playsInline` with `object-cover absolute inset-0 w-full h-full`.
13. Use `flex flex-col justify-between` on all cards to pin heading to top, body to bottom.
14. Duplicate marquee content with `[...Array(2)].map(...)` for seamless looping.

### ❌ NEVER

1. **Never** use borders, outlines, or dividers — the design is completely borderless.
2. **Never** use box shadows or drop shadows on any element.
3. **Never** use `font-bold` (700) or `font-semibold` (600) on headings or UI.
4. **Never** use Tailwind gray scale (`text-gray-500`, `text-gray-600`) for body text — use black with opacity.
5. **Never** add scroll-triggered animations, fade-ins, parallax, or reveal effects.
6. **Never** add hover transforms (scale, translate, rotate) — hover only changes color.
7. **Never** introduce accent colors beyond the existing palette (`#F5F5F5`, `#000`, `#FFF`, `#2B2644`).
8. **Never** use `leading-normal` — headings use `leading-tight`/`leading-none`/`leading-snug`, body uses `leading-relaxed`.
9. **Never** use padding smaller than `p-7` on cards.
10. **Never** use a content max-width other than `max-w-[88rem]` for sections.
11. **Never** make the navbar `fixed` or `sticky` — it's `absolute` on the hero only. On non-hero pages, reconsider positioning but maintain the same visual weight.
12. **Never** use `rounded-xl`, `rounded-lg`, `rounded-md` — only `rounded-2xl`, `rounded-3xl`, and `rounded-full` exist in the design.

---

## 14. File Structure

### Current Structure

```
usd-halo/
├── index.html                          # Minimal shell: charset, viewport, favicon, #root
├── vite.config.ts                      # react() + tailwindcss() plugins only
├── tsconfig.json                       # Base config
├── tsconfig.app.json                   # App-specific TS config
├── tsconfig.node.json                  # Node-specific TS config
├── eslint.config.js                    # ESLint config
├── package.json                        # Dependencies listed in §1
├── public/
│   ├── favicon.svg                     # Purple lightning bolt SVG (brand icon)
│   ├── icons.svg                       # Icon sprite (unused currently)
│   └── fonts/
│       ├── tt-norms-pro-regular.woff2  # Weight 400
│       └── tt-norms-pro-semibold.woff2 # Weight 600
└── src/
    ├── main.tsx                        # React entry: StrictMode + createRoot
    ├── index.css                       # Font-face, keyframes, global resets (see §2)
    ├── App.tsx                         # Entire landing page in one component
    └── assets/
        ├── hero.png                    # Static hero fallback (not used — video is used)
        ├── react.svg                   # Default Vite template leftover
        └── vite.svg                    # Default Vite template leftover
```

### Recommended Multi-Page Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Extract from App.tsx (includes LogoIcon)
│   ├── Footer.tsx          # New — design should match navbar weight
│   ├── CTAButton.tsx       # Variants A (standard), B (with arrow), C (text link)
│   ├── Marquee.tsx         # Reusable: accepts items[], speed, itemSpacing
│   ├── VideoCard.tsx       # Video + overlay content, configurable justify
│   ├── BentoCard.tsx       # Feature card (light/dark variants)
│   └── SectionContainer.tsx # Wraps max-w-[88rem] mx-auto px-6 py-{n}
├── pages/
│   ├── Home.tsx            # Current landing page content
│   ├── Network.tsx         # New pages...
│   ├── Ecosystem.tsx
│   ├── Rewards.tsx
│   ├── Help.tsx
│   └── News.tsx
├── App.tsx                 # Router (react-router-dom)
├── index.css               # Unchanged
└── main.tsx                # Unchanged
```
