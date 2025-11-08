# Changelog

## 1.2.0 - 2025-11-09
### Added
- Hero rotating/typed keyword with reduced-motion fallback.
- AI Playground (`ModelDemo`) section with tabbed demo placeholders.
- Client-side `Analytics` and `WebVitals` components (lazy loaded via Suspense).
- Expanded footer: multi-column layout (About, Resources, Connect, Newsletter, Credits) + tooltips.
- Tooltips for social/action icons across TeamCard, Footer, and consistent focus-visible rings.
- Skeleton loading states in TeamSection for initial mount and filter transitions.
- Unified interactive card styling (TeamCard, EventCard, ProjectCard): gradient overlay + glow + hover motion.
- Accessibility improvements: ARIA list semantics for Events, Projects, Team; listitem wrappers; improved focus states.

### Changed
- Upgraded card component hover/focus variants for visual consistency.
- Adjusted gradients to a unified neon palette across cards.
- Version bump from 1.1.0 to 1.2.0.

### Performance / Config
- Prepared image configuration (AVIF/WebP formats listed while retaining unoptimized flag for GitHub Pages static export).
- Dynamic imports for heavy/interactive components including ModelDemo and analytics modules.

### Notes
- Further opportunities: real model inference in AI Playground, server-side analytics provider integration, heading hierarchy audit of all sections, replace placeholder register links.

## 1.1.0 - Previous Release
Baseline stable version after rollback and accessibility enhancements.
