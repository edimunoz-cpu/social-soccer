---
name: SocialSoccer
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363941'
  surface-container-lowest: '#0b0e15'
  surface-container-low: '#191b23'
  surface-container: '#1d2027'
  surface-container-high: '#272a31'
  surface-container-highest: '#32353c'
  on-surface: '#e0e2ec'
  on-surface-variant: '#bfcaba'
  inverse-surface: '#e0e2ec'
  inverse-on-surface: '#2d3038'
  outline: '#8a9485'
  outline-variant: '#40493d'
  surface-tint: '#88d982'
  primary: '#88d982'
  on-primary: '#003909'
  primary-container: '#2e7d32'
  on-primary-container: '#cbffc2'
  inverse-primary: '#1b6d24'
  secondary: '#ffb691'
  on-secondary: '#552000'
  secondary-container: '#ff751b'
  on-secondary-container: '#5d2400'
  tertiary: '#ffb1c7'
  on-tertiary: '#610931'
  tertiary-container: '#b14b6f'
  on-tertiary-container: '#ffedf0'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a3f69c'
  primary-fixed-dim: '#88d982'
  on-primary-fixed: '#002204'
  on-primary-fixed-variant: '#005312'
  secondary-fixed: '#ffdbcb'
  secondary-fixed-dim: '#ffb691'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#793100'
  tertiary-fixed: '#ffd9e2'
  tertiary-fixed-dim: '#ffb1c7'
  on-tertiary-fixed: '#3f001c'
  on-tertiary-fixed-variant: '#7f2448'
  background: '#10131a'
  on-background: '#e0e2ec'
  surface-variant: '#32353c'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  stats-number:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is engineered for a high-energy, community-driven soccer league platform. The brand personality is athletic, authoritative, and social. It balances the grit of the pitch with the precision of modern sports analytics.

The design style follows a **Corporate / Modern** approach with **High-Contrast** accents. It utilizes a deep, atmospheric dark mode to make player stats and match highlights pop. Expect heavy use of vertical rhythms, crisp borders, and strategic splashes of vibrant color to denote action and urgency. The interface should feel like a premium digital stadium—dark, focused, and electrifying.

## Colors

The palette is anchored by a deep "Pitch Black" surface (`#10131A`) to ensure maximum legibility for high-contrast white text. 

- **Primary Green (`#2E7D32`):** Used for "field" actions, success states, and primary branding elements. It represents the grass and the game's foundation.
- **Accent Orange (`#FF6F00`):** Used sparingly for high-energy touchpoints: live match indicators, "Join Game" calls-to-action, and critical alerts.
- **Neutral Scale:** Utilizes dark grays for surface elevation and muted slates for secondary metadata to maintain a clear hierarchy against the high-contrast headers.

## Typography

This design system leverages **Inter** for its incredible legibility and "technical-athletic" feel. 

- **Headlines:** Use Bold and ExtraBold weights with tight letter-spacing to mimic sports broadcast graphics.
- **Labels:** Small labels should use SemiBold weight and uppercase transformation to differentiate from body copy.
- **Stats:** For jersey numbers and scoreboards, enable tabular figures (`tnum`) to ensure numerical alignment in tables and live tickers.
- **Mobile scaling:** Display and large headlines drop in size but maintain their heavy weight to preserve the brand's "loud" voice on smaller screens.

## Layout & Spacing

The layout uses a **Fluid Grid** system based on an 8px base unit, ensuring a consistent rhythmic "beat" throughout the UI.

- **Desktop (12-column):** 40px side margins with 24px gutters. Content is centered with a max-width of 1280px for standard views.
- **Tablet (8-column):** 24px side margins with 20px gutters.
- **Mobile (4-column):** 16px side margins with 16px gutters.

Use "Large" (48px) spacing between major sections (e.g., Team Standings vs. Top Scorers) and "Small" (12px) spacing for internal card elements (e.g., Player Name vs. Position).

## Elevation & Depth

Depth is communicated through **Tonal Layers** rather than heavy shadows to keep the UI feeling fast and modern.

- **Level 0 (Floor):** The main background (`#10131A`).
- **Level 1 (Cards):** Surface color is 4% lighter than the floor. Used for the primary content containers.
- **Level 2 (Modals/Popovers):** Surface color is 8% lighter than the floor, accompanied by a subtle 1px stroke (Color: White, Opacity: 10%) to define edges against the dark background.
- **Active State:** Elements like pressed buttons or active navigation items use the Primary Green as a glow effect (soft blur, low opacity) rather than a traditional drop shadow.

## Shapes

The design system uses a **Rounded** shape language to soften the aggressive high-contrast color palette, making the social aspects of the app feel more approachable.

- **Buttons & Small Inputs:** 0.5rem (8px) corner radius.
- **Cards & Containers:** 1rem (16px) corner radius.
- **Avatars:** Always circular to distinguish people/players from tactical elements like league badges or field diagrams.

## Components

### Buttons
- **Primary:** Solid Primary Green with White text. Bold weight.
- **Secondary:** Outlined with Accent Orange. Used for social actions or secondary "View Stats."
- **Ghost:** No background, White text. Used for navigation or utility actions.

### Cards
Cards are the primary vehicle for player profiles and match previews. They use a 1px border (`rgba(255,255,255,0.1)`) and a subtle gradient from the top-left to the bottom-right to simulate a slight light source.

### Chips
Used for match status (e.g., "LIVE", "FT", "POSTPONED"). 
- **Live:** Solid Accent Orange with white text.
- **Standard:** Dark gray background with white text.

### Input Fields
Darker than the card surface to create a "well" effect. On focus, the border transitions to Primary Green with a subtle outer glow.

### Additional Components
- **Match Ticker:** A horizontal scrolling bar for live scores, featuring high-contrast text and the Accent Orange for timing indicators.
- **Stat Bars:** Horizontal progress bars using Primary Green for the filled state and a dark neutral for the track, used for ball possession and shot accuracy.