# TDS Mobile Typography Foundation

## Overview

Typography is a core element of the Toss Design System, ensuring readability, consistent direction, and brand identity across platforms. The system supports dynamic scaling through larger text accessibility settings on iOS and Android.

## Token Hierarchy

Typography tokens are abstracted into a hierarchical system. Developers should use the token names rather than hardcoding specific pixel values, as this allows the system to respond dynamically to accessibility settings.

**Key principle**: "Do not hardcode values directly. Use the design system tokens to ensure flexibility when larger text modes are activated."

### Base Typography Styles

The system includes 13 main typography levels (Typography 1–7) and subtypes (sub Typography 1–13) with corresponding font sizes and line heights:

| Style | Font Size | Line Height | Primary Use |
|-------|-----------|------------|------------|
| Typography 1 | 30px | 40px | Very large heading |
| Typography 2 | 26px | 35px | Large heading |
| Typography 3 | 22px | 31px | Standard heading |
| Typography 4 | 20px | 29px | Small heading |
| Typography 5 | 17px | 25.5px | Larger body |
| Typography 6 | 15px | 22.5px | Standard body |
| Typography 7 | 13px | 19.5px | Small body |

Subtitle variants range from f11–f42 (11px–42px).

## Larger Text Accessibility

### iOS Settings

iOS provides limited scaling steps mapped to web percentages:

| Native Setting | Scale % | Web Typography |
|---|---|---|
| Large | 100% | Standard |
| xLarge | 110% | A11y_Small |
| xxLarge | 120% | A11y_Medium |
| xxxLarge | 135% | A11y_Large |
| Accessibility modes | 160%–310% | A11y_xLarge+ |

### Android Scaling

Android supports continuous scaling with this formula:

```
Computed Size = Base Size × NN% × 0.01
```

Example: Typography 1 at 110% = 30 × 110 × 0.01 = 33px

Maximum scaling caps at 310% for the largest typography tokens.

## Implementation Guidance

- Use CSS custom properties or design tokens, never hardcoded pixel values
- Ensure all text respects the platform's native text scaling settings
- Test across iOS, Android, and web for consistent rendering
- Maintain line height proportions when scaling applies

---

*Reference: TDS Mobile Foundation—Typography documentation*
