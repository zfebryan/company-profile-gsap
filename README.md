# 🚀 NexaFlow - Company Profile

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.3-61dafb?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/GSAP-3.14.2-88CE02?style=for-the-badge&logo=greensock" alt="GSAP" />
</p>

<p align="center">
  <strong>Modern & Premium Company Profile Landing Page</strong><br/>
  Built with Next.js 16, GSAP Animations, and Tailwind CSS 4
</p>

---

## ✨ Features

- **🎨 Premium UI/UX Design** - Modern glassmorphism, gradients, and micro-animations
- **⚡ Smooth Animations** - Powered by GSAP and Framer Motion for buttery-smooth transitions
- **📱 Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **🔍 SEO Ready** - Optimized meta tags, OpenGraph, and structured data
- **🧩 Modular Architecture** - Clean, reusable components structure
- **🎭 Dark Mode Design** - Elegant dark theme with accent colors
- **📧 Contact Form** - Ready-to-use contact section with validation

## 🎯 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Eye-catching hero section with animated background and CTA |
| **About** | Company introduction with mission and values |
| **Services** | Showcase of services with interactive cards |
| **Portfolio** | Project gallery with hover effects |
| **Testimonials** | Client testimonials carousel |
| **Pricing** | Pricing plans with comparison features |
| **Contact** | Contact form with validation and social links |

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.1.1 | React Framework |
| [React](https://react.dev/) | 19.2.3 | UI Library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type Safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Styling |
| [GSAP](https://greensock.com/gsap/) | 3.14.2 | Advanced Animations |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | React Animations |
| [Lucide React](https://lucide.dev/) | 0.562.0 | Icons |

## 📁 Project Structure

```
company-profile-gsap/
├── src/
│   ├── animations/          # Animation utilities
│   │   ├── gsap-effects.ts  # GSAP animation effects
│   │   ├── hooks.ts         # Custom animation hooks
│   │   └── motion-variants.ts # Framer Motion variants
│   │
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   │
│   ├── components/
│   │   ├── layout/          # Layout components
│   │   │   ├── Header.tsx   # Navigation header
│   │   │   └── Footer.tsx   # Footer component
│   │   │
│   │   ├── sections/        # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Pricing.tsx
│   │   │   └── Contact.tsx
│   │   │
│   │   └── ui/              # Reusable UI components
│   │
│   ├── config/              # Configuration files
│   │   ├── site.ts          # Site metadata & SEO config
│   │   ├── navigation.ts    # Navigation links
│   │   └── pricing.ts       # Pricing plans data
│   │
│   └── lib/                 # Utility functions
│
├── public/                  # Static assets
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zfrfrfzl/company-profile-gsap.git
   cd company-profile-gsap
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## ⚙️ Configuration

### Site Configuration

Edit `src/config/site.ts` to customize:

```typescript
export const siteConfig = {
  name: "NexaFlow",
  description: "Your company description",
  url: "https://your-domain.com",
  contact: {
    email: "hello@your-domain.com",
    phone: "+62 xxx xxxx xxxx",
    address: "Your address",
  },
  links: {
    twitter: "https://twitter.com/yourhandle",
    instagram: "https://instagram.com/yourhandle",
    linkedin: "https://linkedin.com/company/yourcompany",
  },
};
```

### Pricing Plans

Edit `src/config/pricing.ts` to customize pricing tiers.

### Navigation

Edit `src/config/navigation.ts` to customize menu items.

## 🎨 Customization

### Colors & Theme

Modify `src/app/globals.css` for:
- CSS custom properties (variables)
- Color scheme adjustments
- Typography settings

### Animations

- **GSAP Effects**: Modify `src/animations/gsap-effects.ts`
- **Framer Motion**: Modify `src/animations/motion-variants.ts`
- **Custom Hooks**: Use hooks from `src/animations/hooks.ts`

## 🚢 Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zfrfrfzl/company-profile-gsap)

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm run start
```

The build output can be deployed to any platform that supports Node.js or static hosting.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/zfrfrfzl">zfrfrfzl</a>
</p>
