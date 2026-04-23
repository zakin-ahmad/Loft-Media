# Components Documentation

This document describes all reusable UI components used across the LF Loft Media website.

---

## 1. Navbar.jsx

### Purpose
Top navigation bar with dynamic links based on current route.

### Features
- Scroll-based background blur
- Route-aware links
- Mobile responsive menu
- Smooth anchor navigation
- CTA button ("Start Project")

---

## 2. Hero.jsx

### Purpose
Main landing section with strong visual identity.

### Features
- Parallax mouse movement
- Animated headline
- Gradient orbs (purple/blue system)
- Rotating ring effects
- CTA buttons (scroll navigation)
- Scroll indicator

---

## 3. Services.jsx

### Purpose
Displays core service categories.

### Features
- Clickable service cards
- Hover animations with glow effects
- Technology tags
- Page navigation integration
- Reveal on scroll animation

---

## 4. WhyUs.jsx

### Purpose
Explains unique value proposition of LF Loft.

### Features
- Grid layout
- Large background numbering
- Hover transitions with neon accents
- Clean typography system

---

## 5. StatsBar.jsx

### Purpose
Displays key performance metrics.

### Features
- Animated counter (count-up effect)
- Intersection Observer trigger
- Responsive grid layout
- Divider styling between stats

---

## 6. Portfolio.jsx

### Purpose
Showcases selected projects.

### Features
- Mixed grid layout (large + small cards)
- Hover zoom + glow effect
- Category + metadata display
- Cinematic presentation style

---

## 7. About.jsx

### Purpose
Studio explanation and system overview.

### Features
- Two-column layout
- Visual identity block (LF logo frame)
- Bullet-point system explanation
- Scroll-based reveal animation

---

## 8. Contact.jsx

### Purpose
Final call-to-action section.

### Features
- Email CTA link
- Social media icons
- Radial purple/blue glow background
- Animated text reveal

---

## 9. Footer.jsx

### Purpose
Website footer with navigation and contact info.

### Features
- Multi-column layout
- Service links
- Studio links
- Contact details
- Social media icons
- Copyright bar

---

## 10. Cursor.jsx

### Purpose
Custom animated cursor system.

### Features
- Dot + ring cursor design
- Smooth trailing animation
- Hover-based scaling effects
- Global mouse tracking

---

## 11. Preloader.jsx

### Purpose
Initial loading animation screen.

### Features
- Brand animation
- Scan line effect
- Auto-dismiss after delay
- Fade-out transition

---

## 12. Ticker.jsx

### Purpose
Scrolling keyword marquee.

### Features
- Infinite horizontal scroll
- Repeating items
- Branding keywords animation

---

## 🎨 Design System (UPDATED)

- Dark premium UI system
- Background layers: `bg / bg2 / bg3`
- Primary accent system:
  - Purple: `#7c58ff`
  - Blue: `#3882ff`
- Gradient system (purple → blue → violet)
- Glassmorphism surfaces (`surface`, `surface2`)
- Neon glow borders and shadows
- High contrast text system (`text`, `muted`, `dim`)
- Interactive hover glow states instead of gold accents

---

## ⚡ Animation System

- IntersectionObserver → `reveal` class
- Smooth hover glow transitions
- Gradient shifting effects (purple/blue)
- Cursor-based micro-interactions
- Keyframe animations (ticker, preloader, cursor)