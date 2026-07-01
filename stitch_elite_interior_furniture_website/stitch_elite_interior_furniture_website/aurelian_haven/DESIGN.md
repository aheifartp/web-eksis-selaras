---
name: Aurelian Haven
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4e453a'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#807568'
  outline-variant: '#d2c4b5'
  surface-tint: '#785926'
  primary: '#785926'
  on-primary: '#ffffff'
  primary-container: '#b8935a'
  on-primary-container: '#442c00'
  inverse-primary: '#e9c083'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#5d5f5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#989999'
  on-tertiary-container: '#303132'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffddae'
  primary-fixed-dim: '#e9c083'
  on-primary-fixed: '#281800'
  on-primary-fixed-variant: '#5d4210'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  button:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system is engineered to evoke a sense of "Minimalist-Premium" luxury. It targets a high-end demographic seeking bespoke interior solutions and architectural furniture. The brand personality is rooted in editorial elegance, balancing the classic authority of high-contrast serif typography with the clean, functional breathability of modern minimalism. 

The visual style leans into a high-end lifestyle aesthetic, utilizing generous whitespace to allow product photography to serve as the primary focal point. It avoids clutter in favor of precision, using thin gold accents to guide the eye and signal quality. The emotional response is one of calm, curated sophistication and unwavering professionalism.

## Colors
The palette is a classic "Noir et Or" (Black and Gold) arrangement, grounded by pure white for an expansive, airy feel.

- **Primary (Elegant Gold):** Used sparingly for accents, call-to-action buttons, and active states to denote value and exclusivity.
- **Secondary (Deep Black):** Reserved for primary typography, navigation, and the footer to provide a solid structural anchor to the layout.
- **Tertiary (Light Grey):** Utilized for structural borders, background alternates for section breaks, and disabled states.
- **Background (White):** The canvas for the system, ensuring maximum legibility and a clean, gallery-like presentation.

## Typography
This design system pairs the traditional elegance of **Playfair Display** with the contemporary clarity of **Plus Jakarta Sans** (a modern alternative to Poppins that offers better legibility at smaller scales).

- **Headlines:** Use Playfair Display for all headings. The high contrast between thick and thin strokes mirrors luxury fashion and editorial design. 
- **Body & Interface:** Use Plus Jakarta Sans for all functional text. It provides a neutral, breathable counterpoint to the decorative serif.
- **Styling Note:** Navigation items and buttons must always use the `label-caps` or `button` styles with expanded letter-spacing to emphasize the premium feel.

## Elevation & Depth
This design system rejects heavy shadows in favor of **Tonal Layers** and **Low-contrast outlines**. 

- **Surfaces:** Depth is created through color blocking (switching between white and light-grey backgrounds) rather than shadows.
- **Borders:** Use thin (1px) borders in `#E5E5E5` for cards and input fields.
- **Interactive Depth:** On hover, cards do not lift via shadows; instead, they utilize a subtle interior image scale (zoom) and the appearance of a thin gold border to indicate focus.

## Shapes
The shape language is "Soft" yet structured. 

- **Components:** Standard buttons and input fields use a 4px to 8px corner radius. This prevents the interface from feeling "sharp" or "hostile" while remaining more professional than fully rounded/pill shapes.
- **Imagery:** Furniture and portfolio images should maintain crisp, sharp edges (0px) to mirror the precision of architectural design, while the containers around them (cards) follow the soft radius.

## Components
- **Buttons:** 
  - *Primary:* Solid Gold (#B8935A) background, White (#FFFFFF) text. No shadow.
  - *Secondary:* Ghost style with a Black (#1A1A1A) 1px border and Black text.
- **Dividers:** Distinctive thin gold (#B8935A) lines (1px) used beneath section headings. Usually 60px wide, centered or left-aligned depending on text alignment.
- **Cards:** 
  - Minimalist 1:1 or 4:5 ratios. 
  - No visible border at rest. 
  - Title and category text appear below the image in a clean stack. 
  - Hover state: Image scales 5% inward; thin gold border appears.
- **Navigation:** Fixed top bar, White background. Links are Black, transitioning to Gold on hover. A simple gold underline (2px) indicates the active page.
- **Input Fields:** 1px Light Grey (#E5E5E5) border, 4px radius. On focus, the border transitions to Gold (#B8935A).
- **Footer:** Deep Black (#1A1A1A) background with White (#FFFFFF) text. Social icons and legal links should use Gold (#B8935A) for hover states.