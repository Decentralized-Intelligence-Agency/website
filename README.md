# Decentralized Intelligence Agency (DIA) Website

The official website for the Decentralized Intelligence Agency, a 501(c)(3) scientific non-profit organization dedicated to advancing collective intelligence through rigorous research, open-source tools, and global community building.

## 🌟 Overview

This website serves as the primary digital presence for the DIA, providing information about our research, facilitating donations and community engagement, and showcasing our mission to advance human and machine collaboration.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Custom components with Radix UI primitives
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Deployment:** Vercel

## 📁 Project Structure

```
dia-website/
├── src/
│   ├── app/                    # Next.js app directory (pages & routes)
│   │   ├── page.tsx           # Homepage
│   │   ├── about/             # About page
│   │   ├── research/          # Research page
│   │   ├── get-involved/      # Get Involved page
│   │   ├── contact/           # Contact page
│   │   ├── privacy/           # Privacy policy
│   │   ├── terms/             # Terms of service
│   │   ├── donation-policy/   # Donation policy
│   │   ├── layout.tsx         # Root layout with fonts
│   │   └── globals.css        # Global styles & design tokens
│   ├── components/
│   │   ├── ui/                # Reusable UI components (Button, Card, etc.)
│   │   └── layout/            # Layout components (Navbar, Footer)
│   └── lib/
│       ├── utils.ts           # Utility functions (cn helper)
│       └── site-config.ts     # Site-wide configuration
├── public/                     # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json                # Vercel deployment configuration
```

## 🎨 Design System

The website uses a comprehensive design system based on the DIA brand kit:

### Colors
- **Primary Blue:** #1e3a8a - Trust, authority
- **Accent Purple:** #9333ea - Innovation, complexity
- **Teal:** #0d9488 - Collaboration, harmony
- **Coral:** #e11d48 - CTAs, important highlights
- **Slate Grayscale:** Neutral backgrounds and text

### Typography
- **Primary:** Inter (body text, UI elements)
- **Display:** Space Grotesk (headlines, hero text)
- **Monospace:** JetBrains Mono (code, technical content)

### Design Tokens
- Spacing scale based on 4px grid
- Border radius for consistent rounded corners
- Shadow system for elevation
- Responsive breakpoints for mobile-first design

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dia-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy is using Vercel:

1. Push your code to GitHub/GitLab/Bitbucket
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure deployment

### Manual Deployment

Build the project:
```bash
npm run build
```

The built files will be in `.next/` directory.

### Environment Variables

For production deployment, you may want to configure:

- `NEXT_PUBLIC_SITE_URL` - Your production domain
- `NEXT_PUBLIC_ANALYTICS_ID` - Analytics tracking ID
- Payment processor API keys (Stripe, etc.)
- Email service API keys (Resend, SendGrid, etc.)

## 🎯 Key Features

### Pages
- **Homepage:** Hero section, impact metrics, featured research, newsletter signup
- **About:** Mission, vision, team, financial transparency
- **Research:** Current projects, publications, open-source tools, datasets
- **Get Involved:** Donation tiers, volunteer opportunities, partnerships, careers
- **Contact:** Contact form, office locations, community links

### Design Features
- Fully responsive (mobile, tablet, desktop)
- Dark mode support
- Accessible (WCAG 2.1 AA compliant)
- Optimized performance (fast page loads, optimized images)
- SEO-friendly (meta tags, structured data, sitemap)

### Interactive Components
- Responsive navigation with mobile menu
- Newsletter subscription forms
- Contact form with validation
- Donation tier selection
- Interactive cards and hover effects

## 🔧 Customization

### Updating Site Configuration

Edit `src/lib/site-config.ts` to update:
- Navigation items
- Footer links
- Social media links
- Contact information

### Updating Brand Colors

Edit `src/app/globals.css` to modify:
- Color palette
- Design tokens
- Font families
- Custom styles

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Export a default component
4. Add navigation link in `site-config.ts`

Example:
```typescript
// src/app/new-page/page.tsx
export default function NewPage() {
  return (
    <div>
      <h1>New Page</h1>
    </div>
  );
}
```

## 📊 Performance

The website is optimized for:
- **Fast Load Times:** <3 seconds on 3G connections
- **Lighthouse Score:** 90+ across all categories
- **Core Web Vitals:** Passing all metrics
- **SEO:** Optimized meta tags and structured data

## ♿ Accessibility

We're committed to accessibility:
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Screen reader optimization
- Focus indicators
- Color contrast compliance (WCAG 2.1 AA)
- Respects `prefers-reduced-motion`

## 🔒 Security

- HTTPS enforced on all pages
- Secure headers configured (CSP, XSS protection, etc.)
- No sensitive data exposed in client code
- Payment processing handled by PCI-compliant providers
- Regular dependency updates

## 📈 Analytics & Monitoring

The site uses privacy-friendly analytics (Vercel Analytics or Plausible) to track:
- Page views
- User demographics
- Traffic sources
- Conversion rates

## 🤝 Contributing

This is the official website of the DIA. For contributions:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

Copyright © 2026 Decentralized Intelligence Agency. All rights reserved.

## 📞 Contact

- **Website:** https://dia.org
- **Email:** info@dia.org
- **GitHub:** https://github.com/DIA-org
- **Twitter:** [@DIA_org](https://twitter.com/DIA_org)

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)

---

**Note:** This is a template website. Before production deployment, ensure all placeholder content (names, addresses, phone numbers, etc.) is replaced with actual information.
