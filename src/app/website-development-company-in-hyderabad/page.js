import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Website Development Company in Hyderabad | Business Website',
  description:
    'Choose our website development company in Hyderabad to build fast and scalable websites, with NNC delivering modern design and business focused solutions.',
  alternates: {
    canonical: `${SITE.url}/website-development-company-in-hyderabad`,
  },
  keywords:
    'website development company in hyderabad, website development hyderabad, web development company hyderabad, website developers hyderabad, website design company hyderabad, business website development hyderabad, custom website development hyderabad, web design and development hyderabad, best website development company hyderabad',
  openGraph: {
    title: 'Website Development Company in Hyderabad | Business Website',
    description:
      'Choose our website development company in Hyderabad to build fast and scalable websites, with NNC delivering modern design and business focused solutions.',
    url: `${SITE.url}/website-development-company-in-hyderabad`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Website Development Company in Hyderabad – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Website Development Company in Hyderabad | Business Website',
    description:
      'Choose our website development company in Hyderabad to build fast and scalable websites, with NNC delivering modern design and business focused solutions.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Development Company in Hyderabad',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4th Floor, Skootr, Salarpuria Sattva Knowledge City',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500081',
      addressCountry: 'IN',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Hyderabad' },
    { '@type': 'City', name: 'Secunderabad' },
    { '@type': 'City', name: 'HITEC City' },
    { '@type': 'City', name: 'Gachibowli' },
    { '@type': 'City', name: 'Banjara Hills' },
  ],
  serviceType: [
    'Website Development',
    'Business Website Development',
    'Custom Website Development',
    'Web Design and Development',
    'Next JS Development',
    'React JS Development',
    'Full Stack Web Development',
  ],
  description:
    'Website development company in Hyderabad — fast, scalable and modern business websites with business-focused solutions. In-house team serving HITEC City and Hyderabad.',
  url: `${SITE.url}/website-development-company-in-hyderabad`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Development Hyderabad',
      price: '24999',
      priceCurrency: 'INR',
      description: 'Custom business website — Next JS, mobile responsive, PageSpeed 90+ and SEO setup.',
    },
    {
      '@type': 'Offer',
      name: 'Corporate Website Development Hyderabad',
      price: '49999',
      priceCurrency: 'INR',
      description: 'Full corporate website with custom UI/UX design, CMS integration and SEO setup.',
    },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Website Development Company',
      item: `${SITE.url}/website-development-company-in-bangalore`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Website Development Company in Hyderabad',
      item: `${SITE.url}/website-development-company-in-hyderabad`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best website development company in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Hyderabad's top-rated website development companies — 565+ projects delivered, 4.9★ Google rating. We build fast, scalable and modern business websites with business-focused solutions for Hyderabad startups, SMEs and enterprises.",
      },
    },
    {
      '@type': 'Question',
      name: 'What website development services does NNC offer in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC provides full website development services in Hyderabad — custom business websites, corporate websites, landing pages, ecommerce websites, web applications, Next JS development and website redesigns. All built with modern design and business-focused architecture.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does website development cost in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom business website starts from ₹24,999. A corporate website starts from ₹49,999. A full stack web application starts from ₹75,000. All projects are fixed-price — fully scoped before development begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build fast and scalable websites for Hyderabad businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds fast and scalable websites for Hyderabad businesses using Next JS — server-side rendering, static generation, image optimisation and code splitting. PageSpeed 90+ on mobile and desktop is contractually guaranteed on every project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build business-focused websites for Hyderabad companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC designs and develops every website with a clear business objective — lead generation, ecommerce sales, brand credibility or user retention. Conversion-optimised layouts, clear CTAs and SEO-ready architecture are standard on every Hyderabad project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer website development for HITEC City businesses in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC serves HITEC City, Gachibowli, Banjara Hills and Secunderabad businesses with full website development services — tech startups, IT companies, SaaS products and enterprise portals across Hyderabad.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire dedicated website developers for my Hyderabad project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. You can hire dedicated website developers from NNC on a project or retainer basis. All are full-time NNC employees — not freelancers. Regular progress updates and demo reviews keep you fully aligned throughout your Hyderabad project.",
      },
    },
  ],
}

const data = {
  badge: 'Website Development · Hyderabad',
  h1: 'Website Development Company',
  h1Accent: 'in Hyderabad',
  tagline:
    'Top website development company in Hyderabad — fast, scalable and modern business websites with business-focused design and development solutions. Next JS, React, fixed price.',
  desc:
    'NNC Digital is a website development company serving Hyderabad — building fast, scalable and modern business websites for startups, SMEs and enterprises across Hyderabad, HITEC City, Gachibowli and Secunderabad. Our in-house development team delivers custom websites using Next JS and React with modern design, PageSpeed 90+, full SEO setup and business-focused architecture — zero outsourcing, fixed-price contracts and complete source code ownership on delivery.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'website development in Hyderabad',
  h2Features: 'Website Development Services in Hyderabad',
  features: [
    {
      h3: 'Custom Business Website Development Hyderabad',
      desc: 'Custom business websites built from scratch — no templates. Modern design, Next JS development, mobile-first responsiveness and PageSpeed 90+ for Hyderabad businesses that want a fast, professional online presence.',
    },
    {
      h3: 'Corporate Website Development Hyderabad',
      desc: 'Corporate website development for Hyderabad companies — enterprise-level UI, multi-page architecture, CMS integration and service pages built to generate qualified leads for HITEC City and Hyderabad enterprises.',
    },
    {
      h3: 'Business Landing Page Development Hyderabad',
      desc: 'High converting landing pages for Hyderabad businesses — fast-loading Next JS with clear CTAs, lead capture forms and A/B test-ready structure optimised for Google Ads and Meta Ads campaigns.',
    },
    {
      h3: 'Ecommerce Website Development Hyderabad',
      desc: 'Ecommerce website development for Hyderabad online stores — Shopify, WooCommerce or custom-built with Razorpay/UPI integration, product management and conversion-optimised checkout.',
    },
    {
      h3: 'Next JS Website Development Hyderabad',
      desc: 'Next JS website development for Hyderabad businesses — SSR, SSG, App Router, API routes and full SEO optimisation. Fast, modern and scalable Next JS sites built by in-house developers.',
    },
    {
      h3: 'React JS Web Application Hyderabad',
      desc: 'React JS web applications for Hyderabad businesses — SPAs, dashboards, portals and SaaS frontends with user authentication, state management and REST API integration.',
    },
    {
      h3: 'Full Stack Web Development Hyderabad',
      desc: 'Full stack web development for Hyderabad — React JS frontend, Node JS backend, database integration (MongoDB/PostgreSQL) and AWS cloud deployment. Single team, single contract.',
    },
    {
      h3: 'Website Redesign Hyderabad',
      desc: 'Website redesign for Hyderabad businesses — modern design, improved UX, Next JS rebuild, Core Web Vitals fixes and PageSpeed 90+ without disrupting existing SEO rankings.',
    },
    {
      h3: 'Hire Website Developers Hyderabad',
      desc: 'Hire dedicated website developers for your Hyderabad project on a project or retainer basis. Full-time in-house engineers — not freelancers. Regular demos and full source code ownership.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Website Development Company in Hyderabad?',
  why: [
    {
      n: '01',
      h3: 'Serving Hyderabad — HITEC City to Gachibowli',
      body: "NNC serves Hyderabad's entire tech and business corridor — HITEC City, Gachibowli, Banjara Hills and Secunderabad. Remote-first engagement with regular video check-ins, live demos and full project transparency.",
    },
    {
      n: '02',
      h3: 'Modern design + scalable development — same team',
      body: 'NNC handles UI design and development in-house — Figma mockups to Next JS code by the same team. No handoff issues, consistent quality and complete accountability for your Hyderabad website.',
    },
    {
      n: '03',
      h3: 'Fast & scalable — Next JS, PageSpeed 90+',
      body: 'Every NNC website is built with Next JS for fast load times and PageSpeed 90+ on mobile and desktop. Scalable architecture with clean code that grows with your Hyderabad business.',
    },
    {
      n: '04',
      h3: 'Business-focused — built to generate leads',
      body: 'NNC designs every website with a clear business objective — conversion-optimised layouts, compelling CTAs, trust-building content and SEO-ready structure that turns visitors into Hyderabad customers.',
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before work starts',
      body: 'Every project is scoped and priced upfront — design, development, SEO setup and deployment included. No hourly billing, no scope creep charges, no surprise invoices.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has built websites for startups, SaaS companies, ecommerce brands and enterprises. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Next JS', 'React JS', 'Node JS', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'AWS'],
  h2Tech: 'Website Development Technology Stack',
  h2Faq: 'Website Development Company Hyderabad — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best website development company in Hyderabad?',
      a: "NNC Digital — 565+ projects, 4.9★ Google rating. Fast, scalable and modern business websites with business-focused design and development solutions for Hyderabad.",
    },
    {
      q: 'How much does website development cost in Hyderabad?',
      a: 'Business website from ₹24,999. Corporate website from ₹49,999. Full stack web application from ₹75,000. All fixed-price — fully scoped before development begins.',
    },
    {
      q: 'Do you build fast and scalable websites for Hyderabad businesses?',
      a: 'Yes. Next JS development with PageSpeed 90+ guaranteed. Scalable architecture built for growth from launch through to high-traffic scale.',
    },
    {
      q: 'Do you build business-focused websites for Hyderabad?',
      a: 'Yes. Every website is built for a business objective — lead generation, ecommerce or brand credibility. Conversion-optimised layouts and SEO-ready structure as standard.',
    },
    {
      q: 'Do you serve HITEC City businesses in Hyderabad?',
      a: 'Yes. NNC serves HITEC City, Gachibowli, Banjara Hills and Secunderabad — tech startups, IT companies, SaaS products and enterprise portals.',
    },
    {
      q: 'Can I hire dedicated website developers for my Hyderabad project?',
      a: 'Yes. Hire dedicated developers on a project or retainer. Full-time NNC employees — not freelancers. Regular demos and full source code ownership.',
    },
  ],
}

export default function WebsiteDevelopmentHyderabadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        <ServicePageContent data={data} />
      </main>
      <SeoKeywords />
      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
