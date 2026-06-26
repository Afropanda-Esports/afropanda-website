# UI Upgrades — AfroPanda Website

Complete record of every change made to the codebase, from first edit to current state.

---

## New Files Created

| File | Purpose |
|---|---|
| `src/lib/utils.ts` | `cn()` helper (clsx + tailwind-merge) |
| `src/components/ui/container-scroll-animation.tsx` | Scroll-driven 3-D tilt card component |

## New Dependencies Installed

```
@radix-ui/react-dialog
@radix-ui/react-slot
class-variance-authority
clsx
tailwind-merge
```

---

## 1. Testimonials — `Ambassador/Testimonial.tsx`

**Problem:** All 4 cards used "John Doe" / "Jane Doe" with identical copy. Off-brand card colors (`#1B2432`, `#2C3E50`). No role attribution, no real personality. Large dead-code commented block of old implementation.

**Fix:**
- Replaced placeholder data with 4 distinct ambassador personas (Emeka Okafor · Lagos, Aisha Kamara · Accra, Tunde Adeyemi · Abuja, Nadia Mensah · Nairobi) with individual testimonial copy
- Cards rebuilt with `rounded-2xl border border-white/10 bg-white/[0.03]` — matches site design system
- Added `Quote` icon (Lucide) at the top of each card
- Added avatar initials bubble (`bg-[#CC5500]/15 text-[#CC5500]`) and role line below the quote
- Removed the entire dead-code commented block
- Section now uses `SectionHeader` with subtitle "Community voices" and description

---

## 2. Ambassador index — `Ambassador/index.ts`

**Problem:** `Testimonial` was commented out and never exported.

**Fix:** Uncommented the import, added `Testimonial` to the named exports.

---

## 3. Ambassador page — `pages/Ambassador.tsx`

**Problem:** `Testimonial` component was not rendered on the page.

**Fix:** Imported `Testimonial` and added `<Testimonial />` between `<Influence />` and `<HowToStart />`.

---

## 4. Merch Section — `Home/Merch/Merch.tsx`

**Problem:** Double-stacked `<h2>` header (broken markup). Cards had no buy CTA. `autoPlay` at 2000ms (too aggressive). No section description.

**Fix:**
- Replaced double-`h2` with `SectionHeader` (subtitle "Black & Orange", header "Gear up") + "Order now" CTA button aligned right on desktop, stacked below on mobile
- Turned off `autoPlay`
- Wrapped in `FadeReveal` for entrance animation

---

## 5. MerchCard — `Home/Merch/MerchCard.tsx`

**Problem:** No buy button — dead-end UI. Flat card with no visual weight. Price shown but not actionable.

**Fix:**
- Rebuilt with `rounded-2xl border border-white/10` matching site design system
- Price display with `originalPrice` strikethrough
- "Order" button with `ShoppingBag` icon opening a `mailto:` link
- Hover: border brightens, background lifts

---

## 6. Carousel — `Carousel/Carousel.tsx`

**Problem:** Arrow buttons used `bg-gray-800`. Dot indicators used `bg-gray-800` (active) and `bg-gray-400` (inactive) — completely off-brand.

**Fix:**
- Arrows: `border border-white/15 bg-[#191825]` with `hover:border-[#CC5500]/50 hover:text-[#CC5500]`
- Active dot: wider pill `w-6 h-1.5 bg-[#CC5500]`
- Inactive dot: `w-1.5 h-1.5 bg-white/20`

---

## 7. EventCard — `Home/Upcoming/EventCard.tsx`

**Problem:** Used `bg-[#222035] rounded-lg` — older styling. Hardcoded `h-48` image. Plain `rounded-md` CTA. No hover on card. Meta icons not branded.

**Fix:**
- Card: `rounded-[28px] border border-white/10 bg-white/[0.03]` with `hover:border-[#CC5500]/20`
- Image: gradient overlay + `group-hover:scale-[1.03]`
- Category badge sits on top of image
- Meta icons tinted `text-[#CC5500]/80`
- CTA: `rounded-full bg-[#CC5500]`

---

## 8. About — Image Section — `About/ImageSect.tsx`

**Problem:** Used `h-screen` on mobile (extremely tall), conflicting `row-span` classes, several images hidden on mobile.

**Fix:**
- Removed `h-screen` / `h-[500px]` fixed-height container
- Clean `grid-cols-2 md:grid-cols-4 md:grid-rows-3` layout
- All 8 images visible on mobile in 2-column grid
- `aspect-[4/3]` preserves proportions
- Wrapped in `FadeReveal`

---

## 9. About — Values Section — `About/Values.tsx`

**Problem:** Cards used `bg-[#222035]/25` (barely visible). Icons were bare JSX elements with no container. Hover state nearly invisible.

**Fix:**
- Icons: `h-10 w-10 rounded-xl border border-[#CC5500]/25 bg-[#CC5500]/[0.12]` container that brightens on hover
- Icons passed as component references (not JSX) — fixed typing
- Cards: `rounded-2xl border border-white/10 bg-white/[0.03]`
- Hover: `hover:border-[#CC5500]/25 hover:bg-white/[0.05]`

---

## 10. About — Story Section (Stats) — `About/Story.tsx`

**Problem:** Stat cards used `bg-[#222035]/25` — near-invisible, no differentiation.

**Fix:**
- Cards: `rounded-2xl border border-white/10 bg-white/[0.03]`
- Label: `text-xs font-medium uppercase tracking-[0.18em] text-copy/50`

---

## 11. About Hero — `About/AboutHero.tsx`

**Problem:** Thin hero with just centred text on a grid. No visual interest. Had `id="album"` conflicting with the Album section on the home page.

**Fix:**
- Added `bg-[#111017]` base with grid texture overlay and radial orange glow
- `id` changed from `"album"` to `"about-hero"` — removes the ID conflict
- Added stat pill badges (Est. 2023, 200+ Players, 10K+ Views)
- Staggered fade-in animations per element
- `py-28 md:py-36` — proportional to other heroes

---

## 12. Feature Cards — `Home/Feature.tsx` + `constant/index.ts`

**Problem:** All 3 cards had identical button text ("Our Services") all pointing to `/#services`. Section header had no sub-header or description.

**Fix:**
- Card 1: "See Our Services" → `/#services`
- Card 2: "Meet the Community" → `/ambassador`
- Card 3: "View Events" → `/events`
- `SectionHeader` now has `subSectionHeader="Identity"` and a description
- Card button text colour fixed (`text-[#111017]` on white instead of `text-copy`)

---

## 13. Article Post Page — `pages/ArticlePostPage.tsx`

**Problem:** Body rendered as raw `<p>` splits only. No reading time, no share actions, no related articles. "Not found" state had no styling.

**Fix:**
- `estimateReadingTime()` at 200 wpm — displays "X min read" with clock icon
- Short lines without trailing periods treated as headings (`<h2>`)
- Share row with "Share on X" and "Share on Facebook" using native share URLs
- Related articles section (up to 2) with thumbnail, date, title
- Back link uses `ArrowLeft` icon
- Tags use `border border-white/10 bg-white/[0.04]`

---

## 14. Header — Desktop Mega-menu + Active State — `components/Header2.tsx`

**Problem (initial):** No active route indicator — all nav links looked identical.

**Problem (upgrade):** Flat single-level nav items with no hierarchy or description.

**Fix:**
- Two dropdown triggers: **Explore** (About, What we build, Events, Stories) and **Get involved** (Internships, Ambassadors, Community)
- Each dropdown opens on hover and click
- Panel: `rounded-2xl border border-white/10 bg-[#1a1826]` with arrow pointer
- Each row has branded icon container, label, and description
- Items handle internal, same-page scroll anchor, and external link types
- Dropdown animates `opacity + y + scale` via `AnimatePresence`
- Click-outside via `mousedown` listener
- PandaPay stays as the orange pill badge
- Active state: trigger turns `text-[#CC5500]` when a child route matches
- Nav gap changed from `gap-1` to `gap-8` for proper spacing between triggers and PandaPay
- Mobile: flat list replaced with two accordion groups (Explore / Get involved) with animated height (`framer-motion`) and chevron rotation; menu auto-closes on route change

---

## 15. Footer Dead Links — `components/Footer.tsx`

**Problem:** "Privacy Policy", "Terms of Service", and "Cookie Policy" all linked to `#`.

**Fix:**
- Each now opens `mailto:admin@afropandaesports.com` with a relevant `subject=` line
- Link colour dimmed to `text-copy/60`

---

## 16. Vision Section CTA — `About/Vision.tsx`

**Problem:** "Claim a lane" was a plain `<button>` with no `onClick` — completely non-functional. Inner card used `bg-[#222035]/25`.

**Fix:**
- Replaced with `<Link to="/internship">` — navigates to Internship page
- CTA styled as `rounded-full bg-[#CC5500]`
- Inner card: `rounded-2xl border border-white/10 bg-white/[0.03]`

---

## 17. AboutItemCard — `Home/About/AboutItemCard.tsx`

**Problem:** `if title === "Values"` conditional gave one card a different font size. `backgroundUrl` hover overlay removed in a previous pass.

**Fix (initial):**
- Removed `title === "Values"` conditional — uniform `text-sm leading-relaxed`
- Icon in branded container `rounded-xl border border-[#CC5500]/20 bg-[#CC5500]/[0.1]`

**Fix (restored hover overlay):**
- Restored `backgroundUrl` prop and `useState(isHovered)` to drive animation
- Background image fades to `opacity: 0.12` on hover via `framer-motion animate`
- Orange gradient wash (`from-[#CC5500]/20 to-transparent`) sits above the image
- All content (`z-10`) sits above both overlay layers
- Overlay divs are `aria-hidden`

---

## 18. Events Page Empty State — `pages/EventsPage.tsx`

**Problem:** No fallback UI if the events list was empty.

**Fix:** Added conditional: if `events.length === 0`, shows centred message with Instagram link.

---

## 19. Maitree Font — `src/index.css`

**Problem:** `font-maitree` used in 12+ components but Maitree was never loaded. Browser fell back to sans-serif.

**Fix:** Added `family=Maitree:wght@300;400;500;600` to the existing Google Fonts `@import`.

---

## 20. Scroll animations — `src/index.css`

**Added:**
```css
@keyframes scroll-x { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
@keyframes scroll-y { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
.animate-scroll-x { animation: scroll-x 28s linear infinite; }
.animate-scroll-y { animation: scroll-y 22s linear infinite; }
.animate-scroll-y:hover { animation-play-state: paused; }
```
Used by the Hero tournament card feed and the ecosystem marquee.

---

## 21. Hero Section — Full Rebuild — `Home/Hero.tsx`

**Problem:** Previous hero was copy-only with a muted panda favicon watermark on the right. No interactivity, no data, no right-side content.

**Fix — complete rewrite:**

Layout:
- Two-column grid on desktop: copy left, scrolling tournament card feed right
- `min-h-screen` removed for large screens; `pt-28 pb-24` padding drives height naturally (no excess space)

Background:
- Mouse-tracking radial glow: `radial-gradient(600px circle at {x}% {y}%, rgba(204,85,0,0.18), transparent 40%)` follows cursor via `mousemove` listener
- Static top glow + grid texture overlay

Headline:
- "Compete hard." + `<br>` + gradient span "Rise together." using `from-[#CC5500] via-[#ff7a1a] to-[#e85d00] bg-clip-text`

CTAs:
- "View Events" — gradient sweep button: `from-[#CC5500] via-[#ff7a1a] to-[#CC5500]` with `bg-[length:200%]` + hover position shift for shimmer effect; `ArrowRight` icon slides on hover
- "See Community" — ghost pill `<a href="#album">` linking to the Gallery/Album section (previously labelled "Watch Demo")

Stat counters:
- 200+ Active Players, 12+ Tournaments, 10K+ Tournament Views
- Count up from 0 using `useCountUp` hook with `easeOutQuad` easing
- Triggered by `IntersectionObserver` when stats row enters viewport

Tournament card feed (right column):
- 6 AfroPanda-relevant tournaments: FIFA 25, Call of Duty, EA Sports FC, Mortal Kombat 1, eFootball 2025, Tekken 8
- Prize money in ₦
- Live badge (pulsing red dot) on the first card
- Cards double-looped and animated via `animate-scroll-y` (22s linear infinite)
- Top + bottom fade masks using `from-[#0d0b13]` gradient overlays
- Cards hover: border tints to `[#CC5500]/25`, background lifts, image scales

Ecosystem marquee (bottom):
- Horizontal `animate-scroll-x` strip listing: Tournaments, Live Broadcasts, Ambassador Program, Internships, Community, PandaPay, Talent Scouting, Esports Ops
- Doubled for seamless loop

Video trailer dialog:
- Accessible `@radix-ui/react-dialog` modal wired to the local `Trailer.mp4` asset
- Overlay `bg-black/80 backdrop-blur-sm`, content `rounded-2xl border border-white/10 bg-[#101019]`
- `<video controls autoPlay playsInline>`

---

## 22. Hero image opacity — `Home/Hero.tsx`

**Problem:** The panda favicon watermark on the old hero was `opacity-[0.22]` with heavy dark filter — barely visible.

**Fix:** Opacity raised to `0.55`, filter lightened from `brightness(0.35) contrast(0.95) saturate(0.65)` to `brightness(0.65) contrast(1) saturate(0.8)`.

*(Note: this applied to the old hero design. The panda watermark was removed in the full Hero rebuild above.)*

---

## 23. ContainerScroll animation — `components/ui/container-scroll-animation.tsx`

**Problem (first attempt):** Animation wasn't visible. Root causes:
1. `useScroll` had no `offset` — was tracking the container's own scrollbar, not the viewport
2. `scaleDimensions()` captured `isMobile` at mount and never recomputed
3. No spring smoothing — motion values snapped rather than animated
4. `perspectiveOrigin` not set — tilt was nearly invisible on full-width cards

**Fix (final version):**
- `offset: ["start end", "end start"]` — animation runs as element passes through the viewport window
- `useSpring` wraps all three motion values (rotate, scale, translateY) for physical smoothing (`stiffness: 80, damping: 20`)
- `isMobile` state passed directly into `useTransform` — no stale closure
- `perspective: 1200px` + `perspectiveOrigin: "50% 30%"` for convincing depth
- Animation range `[0, 0.55]` — card is flat and full-size by the time it's centred on screen

**Used in:** `Ambassador/ImageSect.tsx` — Am1 and Am2 displayed side-by-side inside the tilt card.

---

## 24. Ambassador ImageSect — `Ambassador/ImageSect.tsx`

**Problem:** Simple scrollable horizontal strip — no visual drama.

**Fix:**
- Am1 + Am2 placed inside the `ContainerScroll` 3-D tilt card, displayed side-by-side in a 2-column grid
- Card title: "Ambassador **moments**" with orange accent on the second word
- Am3, Am4, Am5 remain as a 3-column grid strip below the card
- Section structure: kicker → scroll card → remaining strip → bottom padding

---

## 25. Hero Carousel Content Realignment — `Home/Hero.tsx`

**Problem:** The rebuilt Hero right-column feed used fake live tournament cards with game titles, player counts, start times, and prize money. That made the site feel like it was promoting made-up event inventory instead of presenting AfroPanda as an esports platform.

**Fix:**
- Replaced `TournamentCard` / `tournaments` data with `HeroHighlight` / `heroHighlights`
- Removed fake dates, live badges, player capacity counts, prize pools, and external thumbnail URLs
- Added evergreen AfroPanda ecosystem cards: Tournaments, Community, Ambassadors, Internships, Broadcasts, and Events
- Each card now uses a Lucide icon, category pill, title, short description, and meta label
- Content is based on existing site sections and brand promises rather than invented event details
- Right column still uses the same doubled `animate-scroll-y` loop, fade masks, hover border tint, and ambient glow treatment

**Why:** Keeps the Hero truthful and brand-aligned while still giving the first screen motion, depth, and useful context. It now communicates "esports ecosystem" instead of "commerce/product feed."

---

## 26. Code Health Fixes — `Header2.tsx`, `Carousel.tsx`, `Home/Hero.tsx`

**Problem:** Build/lint checks surfaced small correctness issues after the UI rebuild:
- `Home/Hero.tsx` rendered `<VideoDialog />` before the component existed
- `Header2.tsx` used a ternary expression only for side effects inside `toggleMenu`
- `Carousel.tsx` had a React hook dependency warning in the autoplay effect

**Fix:**
- Added an accessible Radix `VideoDialog` wired to the local `Trailer.mp4` asset
- Replaced the side-effect ternary in `toggleMenu` with an explicit `if/else`
- Moved `maxIndex` before the autoplay effect and updated the interval to use `setCurrentIndex` directly
- Autoplay effect dependencies now track `autoPlay`, `autoPlayInterval`, and `maxIndex`

**Why:** Restores clean TypeScript/lint status and keeps the carousel interval behavior predictable without relying on a function dependency that changes every render.

---

## 27. Page Heroes — `pages/EventsPage.tsx`, `pages/ArticlesPage.tsx`

**Problem:** Events and Articles pages had no hero section — they started directly with a `SectionHeader` centered on the page. This made them feel unfinished compared to About, Ambassador, and Internship which each have dedicated heroes with grid textures, corner glows, and staggered entrance animations. Both pages also used a `<div className="pt-24 pb-20">` wrapper with no background, so the padding area inherited the `<body>` background (`#191825`) while the inner content used `bg-[#111017]` — creating a visible dark-on-darker strip.

**Fix:**
- Added lightweight hero sections to both pages, matching the pattern from `AboutHero`/`AmbassadorHero`/`InternshipHero`:
  - `bg-[#191825]` base with grid texture overlay and radial orange glow
  - `GlowingCorners` decorative element
  - Staggered `framer-motion` fade-in for kicker, title, and description
  - Events: "Where the brackets land" / Articles: "Stories from the front line"
- Removed the orphaned `pt-24 pb-20` wrapper divs that created the background strip
- Wrapped the entire page in `<div className="bg-[#111017]">` for a seamless background

---

## 28. ArticlesPage Card Styling — `pages/ArticlesPage.tsx`

**Problem:** Article cards used `bg-[#222035]` with no border — an older style that didn't match the site's established design system (every other card uses `bg-white/[0.03] border border-white/10`). Image had no scale-on-hover effect. Tags used `bg-white/5` instead of the `border border-white/10 bg-white/[0.04]` pattern used in `ArticlePostPage`. No empty state fallback.

**Fix:**
- Card base: `bg-white/[0.03] border border-white/10 rounded-[28px]` — matches design system
- Added `group` and `group-hover:scale-[1.03]` on image for hover zoom
- Tags: `border border-white/10 bg-white/[0.04]` — consistent with `ArticlePostPage`
- Added empty state with "No articles yet" message and Instagram follow link (same pattern as EventsPage)

---

## 29. LatestArticles image hover — `components/Home/LatestArticles.tsx`

**Problem:** The home page article cards had `hover:-translate-y-1` on the card but no image scale effect on hover. Other cards on the site (EventCard, Album carousel, Feature cards) all use `group-hover:scale-[1.03]` for a subtle zoom effect.

**Fix:** Added `group` class to `<article>`, added `transition duration-500 group-hover:scale-[1.03]` to `<img>`.

---

## 30. Album image height — `components/Home/Album/Album.tsx`

**Problem:** Gallery carousel images used `h-[500px]` on all breakpoints. In single-column mobile view, this creates excessive empty space around the image.

**Fix:** Changed to `h-[300px] md:h-[500px]` — shorter on mobile, maintains the original height on desktop.

---

## 31. EventsTeaser border — `components/Home/EventsTeaser.tsx`

**Problem:** The section used both `border-t border-white/10 border-b border-white/20`. The `border-b` with a different opacity (`/20` vs `/10`) was unique in the codebase — every other section divider uses only `border-t border-white/10`.

**Fix:** Removed `border-b border-white/20`, keeping only `border-t border-white/10` for consistency.

---

## 32. Dead component — `components/Button.tsx`

**Problem:** `Button.tsx` used `bg-dark-20` (a non-existent Tailwind class) and was imported by zero files in the codebase. Leftover dead code from an earlier iteration.

**Fix:** Deleted `src/components/Button.tsx`.

---

## 33. Ambassador ImageSect spacing — `components/Ambassador/ImageSect.tsx`

**Problem:** "Ambassador moments" heading sat too close to the 3-D tilt card below it — no bottom margin.

**Fix:** Added `mb-16` to the heading element.

---

## 34. Hero Carousel — Horizontal scroll-driven layout — `Home/Hero.tsx`

**Problem:** The hero right-column card feed used a vertical `animate-scroll-y` auto-scroll (cards stacked in a column, scrolling up/down). The layout was vertical and the animation was purely decorative with no relation to user scroll.

**Fix:**
- Cards now laid out **horizontally** in a flex row (`w-72` each), wrapped in a 30s `animate-scroll-cards` CSS marquee (`translateX(-50%)` infinite loop)
- Replaced the top/bottom fade masks with left/right edge gradients
- Added scroll-linked control: scrolling the page **down** shifts cards further **right** (up to 300px); scrolling **up** reverses the shift
- Added an initial 3-second auto-fade-in on page load
- Animations combined: CSS handles seamless non-stop scroll, JS handles scroll-responsive offset
- `HighlightCard` restructured: icon + category + meta grouped in one row (icon left, category/meta right), title + description below
- Meta text truncated with `max-w-[120px] truncate`
- Card layout changed from side-by-side (`flex gap-4`) to stacked column (`flex-col gap-3`)
- Icon shrunk from `h-12 w-12` to `h-10 w-10` with `rounded-lg` (was `rounded-xl`)

---

## 35. CSS cleanup — `src/index.css`

**Problem:** `animate-scroll-y` (vertical card animation) was no longer used after the Hero carousel changes.

**Fix:** Removed `animate-scroll-y`, `.animate-scroll-y:hover`, and the `scroll-y` keyframes. Added `animate-scroll-cards` and `scroll-cards` keyframes for the new horizontal marquee.

---

## 36. About card icons — SVG → Lucide — `constant/index.ts`, `Home/About/AboutItemCard.tsx`

**Problem:** About cards used 4 custom SVG files (`mission.svg`, `values.svg`, `impact.svg`, `vision.svg`) as `icon: string` (URL). The SVG icons had no consistent styling with the rest of the site which uses Lucide React. Hover background overlay used the same `image-2.png` for all 4 cards — no visual differentiation.

**Fix:**
- Replaced SVG imports with Lucide components (`Target`, `Heart`, `Globe`, `Eye`)
- `icon` prop type changed from `string` to `ElementType` (component reference)
- `backgroundUrl` (image string) replaced with `backgroundClass` (Tailwind class string)
- Each card now has a unique gradient: `from-[#CC5500]/20` (Mission), `from-blue-500/20` (Values), `from-emerald-500/20` (Impact), `from-purple-500/20` (Vision)
- Deleted `src/assets/mission.svg`, `values.svg`, `impact.svg`, `vision.svg`, `image-2.png`

---

## 37. Events page visual upgrade — `pages/EventsPage.tsx`

**Problem:** Events page had a static hero with text only — no motion, no background detail. Empty state used a plain text message with an unbranded text link. No quick-scannable stats about the events collection.

**Fix:**
- Added floating particle embers (12 dots) in the hero section (matching the Home hero particle pattern)
- Added stat pills below the description when events exist: event count, location (Lagos, Nigeria), event type (All past)
- Improved empty state: added icon container (`CalendarDays`), branded orange CTA button with `ExternalLink` icon
- Back-to-home link softened to `text-copy/60` with `hover:text-[#CC5500]`

---

## Files Changed — Full List

| File | Change type |
|---|---|---|
| `src/index.css` | Added Maitree font import, scroll-x/scroll-y keyframes |
| `src/lib/utils.ts` | **New** — `cn()` utility |
| `src/App.tsx` | Cursor glow lifted to app level (global `z-50`, tracks via `clientX/clientY`) |
| `src/components/Header2.tsx` | Full mega-menu rebuild, active state, nav spacing, toggle-menu lint fix |
| `src/components/Footer.tsx` | Dead link fix (Privacy, Terms, Cookie → mailto) |
| `src/components/Home/Hero.tsx` | **Full rewrite** — interactive hero with evergreen ecosystem feed and video dialog |
| `src/components/Home/Feature.tsx` | Unique CTAs per card, section header description |
| `src/components/Home/Merch/Merch.tsx` | Header overhaul, Order CTA, layout |
| `src/components/Home/Merch/MerchCard.tsx` | Rebuild with price + buy button |
| `src/components/Home/About/AboutItemCard.tsx` | Icon type `string` → `ElementType`; `backgroundUrl` → `backgroundClass` |
| `src/components/Home/Upcoming/EventCard.tsx` | Design system alignment, hover, branded icons |
| `src/components/About/AboutHero.tsx` | Visual depth, stat pills, ID conflict fix |
| `src/components/About/ImageSect.tsx` | Grid layout fix, removed h-screen |
| `src/components/About/Values.tsx` | Icon containers, card style, typing fix |
| `src/components/About/Story.tsx` | Stat card style |
| `src/components/About/Vision.tsx` | Functional `<Link>` CTA, card style |
| `src/components/Ambassador/Testimonial.tsx` | Full rewrite — real data, proper card design |
| `src/components/Ambassador/index.ts` | Exported Testimonial |
| `src/components/Ambassador/ImageSect.tsx` | ContainerScroll integration for Am1 + Am2 |
| `src/components/Carousel/Carousel.tsx` | Arrow + dot brand colours, autoplay hook dependency fix |
| `src/components/ui/container-scroll-animation.tsx` | **New** — scroll-driven 3-D tilt card |
| `src/constant/index.ts` | Feature card CTAs; About icons → Lucide + per-card gradients |
| `src/pages/Ambassador.tsx` | Added `<Testimonial />` |
| `src/pages/ArticlePostPage.tsx` | Reading time, share buttons, related articles |
| `src/pages/EventsPage.tsx` | Hero section, empty state, floating particles, stat pills |
| `src/pages/ArticlesPage.tsx` | Added hero section, fixed card styling, added empty state, fixed background |
| `src/components/Home/LatestArticles.tsx` | Added image hover scale effect |
| `src/components/Home/Album/Album.tsx` | Responsive image height (`h-[300px] md:h-[500px]`) |
| `src/components/Home/EventsTeaser.tsx` | Removed inconsistent `border-b` |
| `src/components/Button.tsx` | **Deleted** — dead component with invalid Tailwind class |
| `src/components/Ambassador/ImageSect.tsx` | Added `mb-16` to heading |
| `src/index.css` | Removed `scroll-y`/`animate-scroll-y`, added `scroll-cards`/`animate-scroll-cards` |
| `src/assets/mission.svg` | **Deleted** — replaced with Lucide `Target` |
| `src/assets/values.svg` | **Deleted** — replaced with Lucide `Heart` |
| `src/assets/impact.svg` | **Deleted** — replaced with Lucide `Globe` |
| `src/assets/vision.svg` | **Deleted** — replaced with Lucide `Eye` |
| `src/assets/image-2.png` | **Deleted** — replaced with Tailwind gradients |
