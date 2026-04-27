# Pages Documentation

This project consists of **five main pages**, each representing a core vertical of LF Loft Media. Each page is built using reusable UI components and optimized with **React lazy loading (Suspense + Preloader fallback)** for performance.

---

# ⚡ Lazy Loading System

All pages are loaded using React lazy loading to improve performance and reduce initial bundle size.

### Implementation:

```jsx
<Suspense fallback={<Preloader />}>
  <Routes>
    ...
  </Routes>
</Suspense>
```

## 1. Home.jsx

### Purpose
The main landing page of the website. It introduces the brand, showcases services, builds trust, and drives users toward action.

### Sections (Component Flow)
- Navbar
- Cursor (global effect)
- Preloader (initial loading animation)
- Hero (main headline + CTA)
- Ticker (scrolling keywords strip)
- Services (core offerings)
- WhyUs (value proposition)
- StatsBar (metrics + credibility)
- Portfolio (work showcase)
- About (studio description)
- Contact (CTA + email + socials)
- Footer

### Key Features
- Smooth scrolling navigation
- Intersection-based animations (`reveal` classes)
- Parallax mouse movement (Hero)
- Custom cursor interaction
- Animated stats counter
- Fully responsive layout
- Purple/blue neon theme system

---

## 2. OurTools.jsx

### Purpose
Dedicated page for AI tools and automation services.

### Suggested Sections
- Hero (Tools-focused headline)
- Tools Overview (grid of tools)
- Workflow Explanation (pipeline system)
- Client Results / Case Studies
- Pricing (optional)
- FAQ
- Contact CTA
- Footer

### Key Focus
- AI tools (Midjourney, Runway, Claude, etc.)
- Automation pipelines
- Prompt engineering systems
- Neon-accent UI interactions

---

## 3. DigitalProducts.jsx

### Purpose
Showcase and sell digital assets and products.

### Suggested Sections
- Hero (Product-focused)
- Product Library (grid/cards)
- Categories (templates, kits, etc.)
- Pricing / Packages
- Reviews / Testimonials
- FAQ
- Contact CTA
- Footer

### Key Focus
- Reusable assets
- Templates & systems
- Monetizable digital products
- Consistent purple/blue visual identity

---

## 4. InhouseProduction.jsx

### Purpose
Highlight full-scale production capabilities.

### Suggested Sections
- Hero (Production-focused)
- Services (video, documentary, series)
- Portfolio (expanded work showcase)
- Production Process (step-by-step)
- Packages / Pricing
- Results / Case Studies
- FAQ
- Contact CTA
- Footer

### Key Focus
- Cinematic production
- AI video pipelines
- Series & documentaries
- Neon cinematic UI styling

---

## 🎨 Routing Structure

```jsx
<Route path="/" element={<Home />} />
<Route path="/ai-house" element={<AIPage />} />
<Route path="/tools" element={<OurTools />} />
<Route path="/products" element={<DigitalProducts />} />
<Route path="/production" element={<InhouseProduction />} />