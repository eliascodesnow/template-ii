# Business Website Template II

A production-ready React + TypeScript + Tailwind CSS template for service-based businesses (barber shops, salons, etc.).

## Features

- ✅ Responsive design (mobile-first)
- ✅ WhatsApp booking integration
- ✅ Service menu with pricing
- ✅ Team/staff showcase
- ✅ Customer testimonials
- ✅ Operating hours display
- ✅ Location information
- ✅ Gallery section
- ✅ Call-to-action buttons
- ✅ Dark mode ready

## Quick Start

### 1. Installation

```bash
npm install
npm run dev
```

### 2. Configuration

Update these files with client details:

#### `config.ts` - Business Information
- Shop name, tagline, location
- WhatsApp number (for bookings)
- Phone number
- Address and directions
- Operating hours
- Established year

#### `services.config.ts` - Services & Content
- Service offerings and prices
- Staff/team members
- Customer testimonials
- Operating hours
- Marquee items (featured text)

#### Image Replacements
Replace these placeholder images in the repo root:
- `hero.jpg` - Main hero image
- `barber-sam.jpg`, `barber-moe.jpg`, `barber-brian.jpg` - Staff photos
- `gallery-*.jpg` - Portfolio/gallery images (4 images)

### 3. Build & Deploy

```bash
npm run build
```

Output will be in `dist/` directory. Ready for:
- Static hosting (Netlify, Vercel, GitHub Pages)
- Traditional web servers
- Content delivery networks (CDN)

## Project Structure

```
├── App.tsx              # Main application component
├── main.tsx             # Entry point
├── index.html           # HTML template
├── config.ts            # ⚙️ CLIENT CONFIG (edit this)
├── services.config.ts   # ⚙️ SERVICES CONFIG (edit this)
├── data.ts              # (deprecated - use config.ts instead)
├── Components/
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx
│   ├── Team.tsx
│   ├── Testimonials.tsx
│   ├── Visit.tsx
│   ├── Cta.tsx
│   ├── Footer.tsx
│   ├── BookingModal.tsx
│   ├── Navbar.tsx
│   └── Icons.tsx
├── index.css            # Tailwind styles
└── package.json         # Dependencies
```

## Customization Guide

### 1. Business Colors
Edit `index.css` to change color scheme:
- `--color-brass` - Primary accent
- `--color-ink` - Dark background
- `--color-bone` - Light text
- `--color-sand` - Secondary text

### 2. Fonts
Update `index.html` and `tailwind.config` for custom fonts

### 3. Services & Pricing
Edit `services.config.ts` with actual services

### 4. Team Members
Update staff information and add their photos (max 3)

### 5. Testimonials
Replace with real customer reviews

## Deployment Checklist

- [ ] Update all fields in `config.ts`
- [ ] Update all services in `services.config.ts`
- [ ] Replace all images (hero, staff, gallery)
- [ ] Test WhatsApp link: click "Book on WhatsApp"
- [ ] Test responsive design on mobile
- [ ] Test all navigation links
- [ ] Verify business hours display correctly
- [ ] Test location/directions link
- [ ] Run `npm run build` without errors
- [ ] Deploy to hosting platform

## Support

For issues or questions about template setup, contact the developer.

## License

© 2024 - All rights reserved.
