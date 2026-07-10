# Enshored — Landing Page (Web Design Skills Test)

A pixel-accurate, fully responsive landing page built for Enshored's frontend developer skills assessment, based on the provided Figma design.

**Live Site:** [https://ahadona-enshored.vercel.app/](#)

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules (component-scoped) + global utility classes
- **Animation:** Framer Motion (scroll-triggered reveals, parallax, modal transitions)
- **Forms:** React Hook Form + Zod validation, submitted via Formspree
- **Icons:** Lucide React
- **Fonts:** Inter (body) & Space Grotesk (headings), self-hosted via `next/font/google`

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, global modal provider
│   ├── page.tsx            # Page composition — imports all sections
│   └── globals.css         # Design tokens, resets, shared utility classes
├── components/
│   ├── Nav.tsx              # Header, desktop/mobile nav, quote CTA
│   ├── Hero.tsx              # Hero section with background image + CTA
│   ├── About.tsx             # About section with parallax image + stats
│   ├── Sales.tsx             # Sales & installation banner section
│   ├── Services.tsx          # "Our Process" timeline wrapper
│   ├── ServiceStep.tsx       # Individual timeline step with scroll animation
│   ├── Testimonials.tsx      # Auto-scrolling testimonial carousel
│   ├── Contact.tsx           # Contact form section
│   ├── Footer.tsx            # Site footer
│   ├── Modal.tsx             # Reusable modal shell (animated open/close)
│   └── QuoteModal.tsx        # Quote request form rendered inside Modal
└── context/
    └── QuoteModalContext.tsx # Global state for opening/closing the quote modal
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

```bash
# Production build
npm run build
npm start
```

---

## Notes

- Navigation, footer, and social links are placeholder (`#`) per the brief's scope — only primary CTA buttons (Get A Quote, Contact form submit) are functional.
- Contact and Quote forms both submit through Formspree, which handles validation feedback and sends a confirmation email on successful submission.
- Built and tested across Chrome, Firefox, and Safari at mobile, tablet, and desktop breakpoints.
