# Direction: murai

## Concept
- archetype: editorial-refined (premium clinical with editorial typography)
- one-line concept: "42 years of trusted dental care, told as an editorial cover story."
- niche: health (dental, premium)
- niche confidence: high. The site says "Odontologia Digital", emphasizes 42-year history, founder-led family practice, digital tech investments, "reinventar a experiência dentista" mission.

## Palette (preserve the lead's green, refine the rest)
- surface: #FAF7F2 (warm cream, not stark white, reinforces calm clinic feel)
- ink: #0F1B14 (very dark green-black, reads as premium ink, ties to the brand green)
- muted: #5C6B62 (warm gray-green for body)
- primary: #208F37 (the lead's actual green, kept verbatim)
- primary-fg: #FAF7F2 (the cream, readable on green)
- accent: #B89456 (warm gold, replaces the generic #007BFF blue, refined editorial pop)
- soft: #EFE9DD (off-cream, for subtle section bands)
- inferred: false
- source-note: "Primary kept from firecrawl branding extraction. Accent swapped from #007BFF (generic stock blue) to a warm editorial gold, surfaces cream-shifted to feel handmade rather than clinical-stock."

## Typography
- heading family: Fraunces (high-contrast serif, has the editorial weight + warmth a 42-year clinic deserves)
- body family: Inter (clean, modern, pairs cleanly with Fraunces for body legibility)
- @import URL: https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap
- heading scale ratio: 1.333
- body size: 17–18px desktop, 16px mobile
- line-height: 1.6 body, 1.05 headings

## Layout
- density: medium (editorial breathing room, never crowded)
- section vertical padding: py-24 desktop, py-16 mobile
- hero pattern: editorial (large oversized headline, founder/team photo as a side figure with caption)
- grid notes: asymmetric where it counts (hero 7/5 split, features in numbered single column, timeline in horizontal 4-step grid)

## Motion
- page load: single fade in, no staggered jumps
- hover/scroll triggers:
  - timeline year numbers gently brighten on scroll into view
  - hero figure caption appears 200 ms after the headline
  - WhatsApp float button gets a subtle pulse on first visible

## Sections (in order, mapped to shell variant names)
1. Nav: split (top utility row with phone/Instagram, then logo + nav + WhatsApp CTA)
2. Hero: editorial (oversized "42 years" framing + founder image + a single CTA)
3. Features: numbered (4 items, "o que muda" patient-experience differentiators)
4. About: timeline (1983 founding → today, the heritage payoff)
5. CTA: quote (the "REINVENTAR A EXPERIÊNCIA DENTISTA" mission line as a pull-quote)
6. Contact: split (WhatsApp card primary, Instagram + phone as secondary cards)
7. Footer: columns (clinic info + founders' Instagram + nav links)

## Anti-patterns deliberately avoided
- No Inter as the heading font (Fraunces is the differentiator)
- No purple gradient (we kept green + warm gold, both sourced from real positioning)
- No three-column generic feature card grid (numbered editorial list instead)
- No emoji feature icons (numbered 01..04, no glyphs)

## Open questions (don't block, flag for the user)
- Year of founding: site says "42 anos" today (2026), so founded 1984. Confirm with the lead.
- Logo URL: visible in markdown at /wp-content/themes/murai/images/logo-murai-top-2.jpg. I'll wire it but it may need a transparent-bg version for the dark hero variant.
- Email: not on the homepage. The contact section omits email; only WhatsApp + Instagram + phone surface.
- Real founder photo (Dr. Paulo Murai) is at /wp-content/themes/murai/images/paulo-murai.png. Using as hero figure.
