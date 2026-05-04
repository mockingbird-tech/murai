## Astro shell: landing-builder template

Data-driven Astro 5 + Tailwind 4 shell. Every visible string, color, font, and section variant is configured from `src/data/site.ts`. Don't edit components for content; edit `data/site.ts` and the components react.

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # ./dist
```

### Component variants

Each section has multiple variants. The renderer in `src/pages/index.astro` reads `site.variants.*` and dispatches to the matching component:

| Section | Variants |
|---|---|
| Nav | `simple`, `centered`, `split` |
| Hero | `split`, `fullbleed`, `editorial`, `brutalist`, `productmock` |
| Features | `grid`, `numbered`, `alternating`, `bento` |
| About | `split`, `timeline`, `stats` |
| CTA | `banner`, `quote` |
| Contact | `split`, `centered`, `cards` |
| Footer | `minimal`, `columns` |

### Theme tokens

Palette and font families are CSS variables on `:root`, set inline by `Layout.astro` from `site.palette` and `site.typography`. Tailwind 4's `@theme` block in `src/styles/global.css` aliases each utility (`bg-primary`, `text-ink`, `font-heading`, ...) to those variables. Change palette by editing `data/site.ts`. No CSS rebuild needed beyond the next `bun run build`.
