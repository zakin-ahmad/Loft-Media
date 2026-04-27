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
- Auto-dismiss after delay (if used)
- Fade-out transition
- Used as Suspense fallback in lazy loading system

---

## 12. Ticker.jsx

### Purpose
Scrolling keyword marquee.

### Features
- Infinite horizontal scroll
- Repeating items
- Branding keywords animation

---

## 13. HomeCard.jsx (NEW)

### Purpose
Reusable card component used in **Home.jsx** to navigate to different studio divisions.

### Features
- Clickable navigation card
- Glassmorphism styling
- Hover glow effect (purple/blue theme)
- Icon + title + description layout
- Feature list display
- Route-based navigation integration

---

## 14. HomeHero.jsx (NEW)

### Purpose
Hero section specifically designed for the new Home page.

### Features
- Simplified landing hero layout
- Clean headline + CTA structure
- Subtle gradient background effects
- Focused on directing users to AI and 3D divisions
- Smooth entrance animations

---

## 15. HomeNavBar.jsx (NEW)

### Purpose
Navigation bar used specifically in Home page context.

### Features
- Simplified version of main Navbar
- Division-focused navigation links
- Lightweight layout for landing page
- Smooth scroll interactions
- Responsive mobile menu

---

# 🎨 Design System (UPDATED)

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

# ⚡ Animation System

- IntersectionObserver → `reveal` class
- Smooth hover glow transitions
- Gradient shifting effects (purple/blue)
- Cursor-based micro-interactions
- Keyframe animations (ticker, preloader, cursor)