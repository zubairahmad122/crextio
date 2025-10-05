# Whitepace - Project Management Landing Page

A modern, responsive landing page for Whitepace project management software built with Next.js 15, React 19, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**: 
  - Dynamic pricing slider with auto-scroll
  - Testimonials carousel with navigation
  - Dropdown navigation with hover effects
  - Sponsor logos section
- **Performance Optimized**: Built with Next.js 15 and React 19 for optimal performance
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Sliders**: Swiper.js
- **Language**: TypeScript
- **Package Manager**: npm

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main homepage
├── components/
│   ├── Navbar.tsx           # Navigation with dropdown menus
│   ├── Herosection.tsx      # Hero section with CTA
│   ├── ProjectManagement.tsx # Project management features
│   ├── WorkTogether.tsx     # Collaboration features
│   ├── CustomiseNeed.tsx    # Customization section
│   ├── PricingSection.tsx   # Pricing plans with slider
│   ├── YourWork.tsx         # Work anywhere section
│   ├── YourData.tsx         # Data management section
│   ├── Sponsors.tsx         # Sponsor logos
│   ├── WorkWithYourApps.tsx # App integrations
│   ├── TestimonialsSection.tsx # Customer testimonials
│   └── Footer.tsx           # Footer component
└── constants/
    └── index.ts             # Navigation items and testimonials data
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
