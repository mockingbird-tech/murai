# Murai Odontologia · landing redesign summary

- Lead `_id`: `69f8bb36d964d4fcb45f3dba`
- Domain: `murai.com.br`
- Slug: `murai`
- Status: `DEVELOPING` (flips to `READY_TO_CONTACT` after publish)

## Direction

Editorial-refined for a 42-year São Paulo dental clinic. Real green primary preserved (`#208F37`), accent swapped from generic stock blue to a warm editorial gold. Heading set in Fraunces (high-contrast serif), body in Inter. Layout is asymmetric where it matters: editorial hero with founder photo as figure, numbered features list, horizontal 4-step timeline.

See `_design/direction.md` for the full brief.

## Variants used

| Section | Variant |
|---|---|
| Nav | split (utility row + logo + WhatsApp CTA) |
| Hero | editorial |
| Features | numbered (4 differentiators in editorial voice) |
| About | timeline (1984 → today) |
| CTA | quote (the "Reinventar a experiência dentista" mission line) |
| Contact | split (WhatsApp primary, phone, hours) |
| Footer | columns |

## Features added

1. Editorial typography (Fraunces + Inter), no Inter-on-white AI default.
2. Authentic green palette preserved from the lead's actual CSS, accent refined to warm gold.
3. 42-year heritage as a timeline, not buried in body copy.
4. WhatsApp-first CTA in nav, hero, contact, and a fixed float button.
5. Founder-led trust signals (Dr. Paulo Murai photo, three-generation family clinic positioning).
6. Mobile-first responsive layout, all variants tested at 390 px and 1440 px in the shell.

## Reference: original site

`_context/before.png` is the full-page screenshot of the original murai.com.br at scrape time. Use as the visual "before" if running side-by-side comparisons.

## What to test before deploy

Open `cd results/murai && bun run dev` (port 4321):

- Hero: "Reinventar a experiência dentista." renders in Fraunces, Dr. Paulo image visible at md+.
- Features: four numbered items with the editorial voice copy.
- Timeline: four cards, 1984/2005/2018/2026.
- CTA section: pull-quote with the mission.
- Contact: WhatsApp card primary, phone secondary. No email (not on the source).
- WhatsApp float bottom-right on every viewport.
- Mobile (390 px): all sections collapse cleanly, Fraunces holds at large headline sizes.
