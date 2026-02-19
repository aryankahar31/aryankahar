```
ENGINEERING
THE NEXT
STANDARD
```

# ARYAN KAHAR — CINEMATIC PORTFOLIO

System-grade interface for a cinematic, brutalist personal site. Built for speed, clarity, and presence.

**Visual Theme**
```
PALETTE:  #F2F2F2  #111111  #E6FF00
TYPE:     HEAVY DISPLAY + MONO LABELS
MOTION:   CONTROLLED / CINEMATIC
```

**What This Is**
- A single-page portfolio with a cinematic hero, rotating cylinder gallery, and data-forward layout.
- High-contrast, terminal-inspired typography and motion.
- Clean project index, skills matrix, and experience log.
 - Bold sectioning with brutalist grid overlays and scanline effects.

**Tech Stack**
- `React 19`
- `Vite 6`
- `TypeScript`
- `Tailwind (CDN)`

**Key Sections**
- Hero with cylinder carousel and custom cursor
- About and methodology
- Projects index with live previews
- Skills capability matrix
- Experience legacy logs
- Footer contact channel + social links

**Local Run**
```bash
npm install
npm run dev
```

**Build**
```bash
npm run build
```

**Structure**
- `App.tsx` main layout and sections
- `components/` UI modules (navigation, cursor, carousel, background)
- `constants.tsx` content payloads (projects, skills, experience)

**Style Notes**
- Cinematic brutalist layout
- Heavy typography + monospace labels
- Neon yellow accent (`#E6FF00`)
- Controlled motion and hover states
 - High contrast, large-format headlines

**Content Editing**
- Update personal data in `constants.tsx`
- Add or reorder sections in `App.tsx`
- Swap carousel images in `components/CylinderCarousel.tsx`

**Accessibility**
- External links include `rel="noopener noreferrer"` and labels
- Default cursor restored on mobile and for form elements
