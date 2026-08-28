---
name: SocialSoccer
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363940'
  surface-container-lowest: '#0b0e14'
  surface-container-low: '#191c22'
  surface-container: '#1d2026'
  surface-container-high: '#272a31'
  surface-container-highest: '#32353c'
  on-surface: '#e0e2eb'
  on-surface-variant: '#c1c7d2'
  inverse-surface: '#e0e2eb'
  inverse-on-surface: '#2d3037'
  outline: '#8b919c'
  outline-variant: '#414751'
  surface-tint: '#a2c9ff'
  primary: '#a2c9ff'
  on-primary: '#00315b'
  primary-container: '#0b5fa5'
  on-primary-container: '#bfd9ff'
  inverse-primary: '#0e60a6'
  secondary: '#ffb59d'
  on-secondary: '#5d1900'
  secondary-container: '#b83900'
  on-secondary-container: '#ffddd2'
  tertiary: '#ffb3b1'
  on-tertiary: '#680011'
  tertiary-container: '#b9132b'
  on-tertiary-container: '#ffcac8'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d3e4ff'
  primary-fixed-dim: '#a2c9ff'
  on-primary-fixed: '#001c38'
  on-primary-fixed-variant: '#004881'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#ffb59d'
  on-secondary-fixed: '#390c00'
  on-secondary-fixed-variant: '#832600'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3b1'
  on-tertiary-fixed: '#410007'
  on-tertiary-fixed-variant: '#92001c'
  background: '#10131a'
  on-background: '#e0e2eb'
  surface-variant: '#32353c'
typography:
  display-score:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  stats-numeric:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 12px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The design system is engineered for a high-performance athletic environment, specifically tailored for the fast-paced world of soccer. The brand personality is energetic, authoritative, and precise. It draws from **Modern Corporate** and **High-Contrast** aesthetics to ensure that complex statistics and live data are instantly digestible.

The target audience consists of passionate fans and players who require real-time updates. The UI should evoke a sense of professional urgency and reliability, utilizing heavy-weighted typography and a structured dark environment to make "Energy" accents pop. Visuals are clean and systematic, prioritizing legibility and data density without feeling cluttered.

## Colors
The palette is rooted in a deep **Charcoal Gray (#2E3138)** background to reduce eye strain during night games and provide a high-contrast foundation. 

- **Trust Blue (#0B5FA5)**: Used for primary actions, navigation states, and brand-identifiable elements.
- **Energy Orange (#FF6B35)**: Reserved for "Live" indicators, score updates, and interactive badges to draw immediate attention.
- **Red (#E63946)**: Strictly for critical alerts, red cards, and "Loss" indicators in form guides.
- **Neutral Hierarchy**: Use the background color for the main canvas, while a slightly lighter `#3E424B` should be used for cards and surface containers to create depth.

## Typography
This design system utilizes **Inter** for its exceptional legibility and modern, technical feel. It is a systematic typeface that excels in data-heavy environments like league tables and match stats.

- **Emphasis**: Use Bold (700) and ExtraBold (800) for scores and headers to mirror the intensity of the sport.
- **Numbers**: Enable tabular figures (`tnum`) for all statistical tables to ensure numerical columns align perfectly.
- **Hierarchy**: Use `label-caps` for section headers (e.g., "STANDINGS", "LINEUPS") to provide a clear structural break between content blocks.

## Layout & Spacing
The layout follows a **Fluid Grid** model optimized for mobile-first consumption. 

- **Grid**: A 4-column grid for mobile and a 12-column grid for tablet/desktop. 
- **Rhythm**: All spacing must be multiples of 4px. Use `16px (md)` for standard padding inside cards and `12px` for gutters between table columns to maximize horizontal space for data.
- **Safe Areas**: Ensure bottom navigation accounts for device home indicators with a minimum of 34px bottom padding on modern smartphones.

## Elevation & Depth
In this dark-mode-first system, depth is communicated through **Tonal Layers** rather than heavy shadows.

- **Level 0 (Base)**: Charcoal Gray (#2E3138) for the main app background.
- **Level 1 (Cards/Surfaces)**: A lighter gray (#3E424B) with a subtle 1px inner border of #FFFFFF (10% opacity) to define edges.
- **Level 2 (Modals/Popovers)**: Elevated surfaces should use a very soft ambient shadow (0px 8px 24px rgba(0,0,0,0.4)) and a backdrop blur of 12px for overlays.
- **Dividers**: Use high-precision 1px lines at 10% white opacity for table rows and list items.

## Shapes
The design system uses a **Soft (0.25rem/4px)** roundedness philosophy. This creates a geometric, professional look that feels "engineered" rather than "playful."

- **Standard Elements**: Buttons and Input fields use 4px corners.
- **Cards**: Use `rounded-lg` (8px) to create a clear container distinction.
- **Live Badges**: These are the only exception, using a **Pill-shaped** radius to stand out as dynamic, status-driven elements.

## Components
- **Tables (Standings)**: Use a condensed layout. The team name/crest column is fixed to the left. Alternating row colors are not used; instead, use 1px dividers. Highlighting the user's favorite team with a subtle Blue left-border accent.
- **Live Badges**: High-contrast Energy Orange background with white `label-caps` text. Include a "pulsing" dot icon for active matches.
- **Bottom Navigation**: Solid Charcoal background with a 1px top border. Active states use Trust Blue for the icon and label. Icons should be 24px stroke-based.
- **Buttons**:
    - *Primary*: Trust Blue background, White text, 4px radius.
    - *Secondary*: Outlined Trust Blue with 1px border.
- **Input Fields**: Darker surface than the card (#1A1C20), 4px radius, with 16px horizontal padding. Focus state uses a 2px Trust Blue border.
- **Match Cards**: Feature large score displays using `display-score`. Use the secondary color (#FF6B35) for the match clock if the game is live.