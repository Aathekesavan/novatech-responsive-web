# NovaTech E-Commerce Platform — Responsive Web Page Design

**Course:** Full Stack Web Development  
**Task:** Task 1 — Responsive Web Page Design using HTML5 & CSS3  
**Assessment/Submission Due:** 23.09.2026  
**Bloom's Taxonomy Level:** K2 (Understand), K3 (Apply)  
**Author:** Course Student  

---

## 1. Project Overview & Objectives

**NovaTech** is a modern, responsive, multi-page E-Commerce web application dedicated to high-performance electronics, computing hardware, audio peripherals, and smart lifestyle accessories.

This project fulfills all requirements for **Task 1 (HTML5 & CSS3)** while intentionally architecting modular layouts that cleanly transition into **React components (Task 2)**, **Spring Boot REST APIs with SQL/JDBC (Task 3)**, and **Cloud-native Microservices (Task 4)**.

### Bloom's Taxonomy Competencies Demonstrated:
- **K2 (Understand):**
  - Semantic HTML5 structure vs. generic `<div>` soup.
  - Browser rendering engine flow, box model dynamics, and CSS specificity.
  - Principles of accessible web design (WCAG compliance, ARIA landmarks, keyboard focus, readable contrast).
- **K3 (Apply):**
  - Implementing modern **CSS Grid** for two-dimensional product catalogs and **Flexbox** for one-dimensional layouts.
  - Developing a **Mobile-First Responsive System** with CSS custom properties (design tokens) and responsive `@media` breakpoints.
  - Building responsive data tables and mobile navigation drawers with pure CSS and lightweight vanilla JavaScript.

---

## 2. Directory Structure

```
d:/FS asi/task-1-responsive-web/
├── index.html               # Homepage (Hero, Categories, Best Sellers, Promos, Testimonials)
├── products.html            # Product Catalog with responsive sidebar filters & sorting
├── product-detail.html      # Flagship product view with interactive gallery & specs table
├── cart.html                # Shopping cart with responsive tabular line items & summary
├── contact.html             # Support portal with inquiry form and accordion FAQ
├── css/
│   ├── variables.css        # Design tokens: color palette, typography scale, spacing, radii, shadows
│   ├── base.css             # CSS reset, normalize, typography rules, accessibility (.sr-only)
│   ├── components.css       # Buttons, badges, product cards, category cards, forms, steppers, accordion
│   ├── layout.css           # Header, navbar, hero, grid systems, catalog layouts, footer
│   └── responsive.css       # Mobile-first breakpoint rules (<540px, 541-768px, 769-1024px, >1024px)
├── js/
│   └── main.js              # Accessible mobile drawer, tab switching, gallery switcher, toast feedback
└── assets/
    └── images/              # High-resolution, retina-sharp SVG product illustrations
        ├── headphones.svg
        ├── smartwatch.svg
        ├── laptop.svg
        ├── earbuds.svg
        ├── speaker.svg
        ├── camera.svg
        ├── keyboard.svg
        └── drone.svg
```

---

## 3. Implemented Pages Breakdown

### 1. Home Page (`index.html`)
- **Top Announcement Bar:** Contextual discount alert and auxiliary utility links.
- **Header & Navigation:** Sticky brand banner, search bar, active navigation indicator, cart counter badge, and mobile drawer toggle.
- **Hero Banner:** Compelling split hero featuring value proposition, dual CTA buttons, and a highlighted floating glassmorphism product card with real-time specs.
- **Value Propositions Strip:** 4 trust pillars (Free Shipping, 2-Year Warranty, 30-Day Money Back, 24/7 Support).
- **Curated Categories:** Responsive 4-column department cards with hover elevation.
- **Trending Products Grid:** 8 rich product cards featuring discount badges, star ratings, dynamic prices, and quick-add actions.
- **Promo Banners:** High-contrast dual banners for targeted marketing promotions.
- **Customer Testimonials & Newsletter:** Social proof from verified buyers and a newsletter subscription with email input validation.

### 2. Product Catalog (`products.html`)
- **Breadcrumb Navigation:** Clear spatial hierarchy.
- **Responsive Aside Filters:**
  - Department selection checkboxes.
  - Dynamic price range slider ($50 – $2,000) with interactive live value label.
  - Brand filters (NovaTech, Aether, Zenith, SonicAir, Lumina).
  - Star rating filter and stock availability switches.
- **Catalog Toolbar:** Live item count and Sort-By dropdown selector.
- **3-to-4 Column Grid:** Dynamic product cards with hover micro-interactions.
- **Pagination Controls:** Accessible pagination navigation.

### 3. Product Detail Page (`product-detail.html`)
- **Product Gallery:** High-resolution display with synchronized interactive thumbnail preview switcher.
- **Product Meta & Actions:** Price calculation, SKU, stock status badge, color variant picker, and quantity stepper.
- **Dual CTAs:** "Add to Cart" and "Buy Now" with interactive feedback.
- **Tabbed Information Matrix:**
  - *Tab 1: Technical Specifications* (Semantic HTML table covering acoustic drivers, battery, codecs, and frequency response).
  - *Tab 2: In-Depth Overview* (Architectural description and craftsmanship details).
  - *Tab 3: Customer Reviews* (Summary rating metrics and verified buyer reviews).
- **Frequently Paired Accessories Grid:** Suggested cross-sell items.

### 4. Shopping Cart (`cart.html`)
- **Free Shipping Qualification Bar:** Dynamic visual confirmation.
- **Responsive Cart Table:**
  - Desktop view: Semantic HTML table with Product thumbnail, Unit Price, Quantity Stepper, Total, and Remove action.
  - Mobile view: Automatically converts into stacked responsive cards using `data-label` pseudo-elements.
- **Order Summary Aside:**
  - Subtotal, free shipping qualifier, tax estimation, and promo code entry (e.g. `TECH20`).
  - Total calculation and primary checkout CTA.
  - SSL 256-bit security guarantees and payment icons.

### 5. Contact & Support Page (`contact.html`)
- **Support Info Cards:** Corporate address, direct phone numbers, email addresses, and live chat status indicator.
- **Interactive Support Form:**
  - Form validation for required fields, email syntax, telephone formatting, and department routing.
  - Responsive two-column grid that collapses gracefully on smaller screens.
- **Accordion FAQ Section:** Interactive collapsible items addressing warranty coverage, shipping times, returns, and compatibility.

---

## 4. Key CSS3 Techniques & Responsive Strategy

1. **CSS Custom Properties (Variables):**
   - Centralized color tokens, typography scales, spacing multipliers, and border-radii in `css/variables.css` for effortless theming.
2. **CSS Grid & Flexbox:**
   - Grid used for 2D catalog lists (`grid-template-columns: repeat(4, minmax(0, 1fr))`), catalog split layouts, and footer columns.
   - Flexbox used for 1D navigation alignment, product card footers, stepper controls, and rating rows.
3. **Fluid Typography & Responsive Breakpoints:**
   - `@media (max-width: 1024px)`: Laptops & tablets (2-column grids, collapsed aside).
   - `@media (max-width: 768px)`: Tablets & mobile landscape (off-canvas mobile drawer navigation, stacked forms).
   - `@media (max-width: 540px)`: Smartphones (single column layouts, full-width touch buttons, card-transformed tables).
4. **Accessible Micro-Interactions:**
   - Smooth transform elevation on cards (`transform: translateY(-4px)`).
   - Glow shadows, button hover states, focus outlines for keyboard navigation (`:focus-visible`).

---

## 5. How to Run & Verify

1. Open the project folder in any web browser:
   - Double-click `d:\FS asi\task-1-responsive-web\index.html` (or right click -> *Open with Google Chrome / Microsoft Edge / Firefox*).
2. Alternatively, serve via any local static server (e.g., VS Code Live Server or Python):
   ```bash
   cd "d:\FS asi\task-1-responsive-web"
   python -m http.server 3000
   ```
3. Test responsiveness by opening Developer Tools (`F12`), toggling the device toolbar (`Ctrl + Shift + M`), and testing:
   - **Mobile (375px / 412px)**
   - **Tablet (768px / 820px)**
   - **Desktop (1280px / 1920px)**

---

## 6. Roadmap: Evolution to Tasks 2, 3 & 4

- **Task 2 (React Application):** Convert HTML pages into reusable React components (`ProductCard.jsx`, `Navbar.jsx`, `FilterSidebar.jsx`, `CartContext.jsx`).
- **Task 3 (Spring Boot + SQL/JDBC):** Build backend entities (`Product`, `Category`, `CartItem`, `Order`) and expose RESTful endpoints (`/api/v1/products`, `/api/v1/cart`).
- **Task 4 (Full Stack Microservices):** Decompose into `Auth-Service`, `Product-Catalog-Service`, `Order-Service`, and `API-Gateway`.
