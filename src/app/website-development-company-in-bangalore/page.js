import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Website Development Company in Bangalore | NNC Digital',
  description:
    'Top website development company in Bangalore. Web development company, website design company, website developers, best website development, custom website development, React JS, Next JS, responsive web design & affordable website development. Office in Bangalore. Fixed price.',
  alternates: {
    canonical: `${SITE.url}/website-development-company-in-bangalore`,
  },
  keywords:
    'website development company in bangalore, web development company in bangalore, website design company in bangalore, website developers in bangalore, best website development company bangalore, top website development company bangalore, custom website development bangalore, corporate website development bangalore, business website design bangalore, react js development company bangalore, next js development company bangalore, website maker in bangalore, website design services bangalore, affordable website development bangalore, professional website design bangalore, responsive website development bangalore, website development services bangalore, website company bangalore, hire web developers bangalore, web design agency bangalore',
  openGraph: {
    title: 'Website Development Company in Bangalore | NNC Digital',
    description:
      'Website development company in Bangalore — custom website development, React JS, Next JS, responsive web design, corporate website development & affordable website development services.',
    url: `${SITE.url}/website-development-company-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Website Development Company in Bangalore – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Website Development Company in Bangalore | NNC Digital',
    description:
      'Website development company in Bangalore — custom websites, React JS, Next JS, responsive design, corporate & business website development. Fixed price.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Development Company in Bangalore',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7th Floor, Magnolia, Prestige Shantiniketan',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560048',
      addressCountry: 'IN',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Whitefield' },
    { '@type': 'City', name: 'Electronic City' },
    { '@type': 'City', name: 'Koramangala' },
    { '@type': 'City', name: 'Indiranagar' },
  ],
  serviceType: [
    'Website Development',
    'Web Development',
    'Website Design',
    'Custom Website Development',
    'Corporate Website Development',
    'React JS Development',
    'Next JS Development',
    'Responsive Web Design',
  ],
  description:
    'Full-service website development company in Bangalore — custom website development, corporate website development, React JS, Next JS, responsive web design and affordable website development services for Bangalore businesses.',
  url: `${SITE.url}/website-development-company-in-bangalore`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Bangalore — Starter',
      price: '25000',
      priceCurrency: 'INR',
      description: 'Professional business website — up to 10 pages, responsive design, CMS, contact forms and basic SEO setup.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Website Development Bangalore',
      price: '60000',
      priceCurrency: 'INR',
      description: 'Custom website with React JS or Next JS — bespoke design, advanced functionality, CMS integration and performance optimisation.',
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
      name: 'Website Development',
      item: `${SITE.url}/website-development`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Website Development Company in Bangalore',
      item: `${SITE.url}/website-development-company-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best website development company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Bangalore's top-rated website development companies — 565+ projects delivered, 4.9★ Google rating, office in Bangalore. We build custom websites, corporate websites, React JS and Next JS web applications, responsive designs and ecommerce stores for Bangalore businesses across all industries.",
      },
    },
    {
      '@type': 'Question',
      name: 'What website development services does NNC provide in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Bangalore provides full website development services — custom website design and development, corporate website development, business website design, React JS development, Next JS development, responsive web development, CMS websites, landing pages and website maintenance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build React JS and Next JS websites in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC is a React JS and Next JS development company in Bangalore — building fast, SEO-friendly web applications with server-side rendering (SSR), static site generation (SSG) and dynamic routing. Suitable for SaaS platforms, corporate websites, portals and high-traffic web applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build corporate and business websites in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds corporate website development and business website design for Bangalore companies — multi-page corporate sites, service pages, team pages, blog and news sections, contact forms, Google Analytics integration and SEO-ready structure. Built to reflect your brand and convert visitors into enquiries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer responsive website development in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every website NNC builds in Bangalore is fully responsive — designed and tested across mobile, tablet and desktop. Fast-loading, mobile-first design with Core Web Vitals optimisation for Google ranking.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does website development cost in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A professional business website in Bangalore starts from ₹25,000 — covering up to 10 pages, responsive design, CMS and basic SEO setup. Custom website development with React JS or Next JS starts from ₹60,000. All fixed-price — no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a website development office in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital is headquartered in Bangalore — office at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review website wireframes, approve designs on screen and meet the development team building your website.',
      },
    },
  ],
}

const data = {
  badge: 'Website Development · Bangalore',
  h1: 'Website Development Company',
  h1Accent: 'in Bangalore',
  tagline:
    'Top website development company in Bangalore — custom website development, corporate website development, business website design, React JS, Next JS, responsive website development, website design services & affordable website development. Fixed price.',
  desc:
    'NNC Digital is a full-service website development company in Bangalore building custom websites, corporate websites, React JS and Next JS web applications and responsive business websites for startups, SMEs and enterprises. From website design and development to CMS integration, SEO setup and post-launch maintenance — every website is built by our in-house Bangalore web development team with zero outsourcing. Fixed-price projects with transparent timelines and complete source code ownership.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'website development in Bangalore',
  h2Features: 'Website Development Services in Bangalore',
  features: [
    {
      h3: 'Custom Website Development Bangalore',
      desc: 'Custom website development for Bangalore businesses — bespoke design, tailored functionality, CMS integration and performance-optimised build. No templates, no page builders — every element coded to your exact specifications.',
    },
    {
      h3: 'Corporate Website Development Bangalore',
      desc: 'Corporate website development for Bangalore companies — multi-page corporate sites with service pages, team profiles, case studies, blog and contact forms. Built to reflect your brand and generate qualified enquiries.',
    },
    {
      h3: 'Business Website Design Bangalore',
      desc: 'Professional business website design for Bangalore SMEs and startups — clean, conversion-focused design with strong calls-to-action, fast load times and mobile-first responsive layouts that work across all devices.',
    },
    {
      h3: 'React JS Development Company Bangalore',
      desc: 'React JS development for Bangalore businesses — dynamic single-page applications, interactive dashboards, web portals and component-based websites. Fast, scalable and easy to maintain with a modern JavaScript stack.',
    },
    {
      h3: 'Next JS Development Company Bangalore',
      desc: 'Next JS development for Bangalore businesses — server-side rendering (SSR), static site generation (SSG) and incremental static regeneration for fast, SEO-friendly websites and web applications with excellent Core Web Vitals scores.',
    },
    {
      h3: 'Responsive Website Development Bangalore',
      desc: 'Fully responsive website development for Bangalore — mobile-first design tested across all screen sizes. Fast-loading pages with Core Web Vitals optimisation and Google-friendly performance scores.',
    },
    {
      h3: 'Website Design Services Bangalore',
      desc: 'End-to-end website design services in Bangalore — UX research, wireframing, UI design in Figma, design handoff and pixel-perfect front-end development. Strategy-led design built around your audience and conversion goals.',
    },
    {
      h3: 'Affordable Website Development Bangalore',
      desc: 'Affordable website development for Bangalore SMEs and startups — professional, feature-complete websites starting from ₹25,000. Fixed price with full scope defined upfront. No hidden charges, no hourly billing.',
    },
    {
      h3: 'Hire Web Developers Bangalore',
      desc: 'Hire dedicated web developers in Bangalore from NNC — React JS, Next JS, Node JS and full-stack developers available on project or monthly retainer basis. In-house team, transparent reporting and consistent code quality.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Website Development Company in Bangalore?',
  why: [
    {
      n: '01',
      h3: 'Bangalore headquarters — review designs in person',
      body: 'NNC is headquartered in Bangalore at Prestige Shantiniketan, Whitefield. Visit us to review wireframes, approve designs on screen and meet the development team building your website.',
    },
    {
      n: '02',
      h3: 'In-house team — zero outsourcing',
      body: 'Every designer, developer and project manager is a full-time NNC employee based in Bangalore. Consistent team from brief to launch — no freelancers, no offshore outsourcing, no quality inconsistency.',
    },
    {
      n: '03',
      h3: 'React JS & Next JS expertise — modern tech stack',
      body: 'NNC builds websites on modern JavaScript frameworks — React JS and Next JS — delivering fast, scalable, SEO-friendly websites that outperform WordPress and template-based builds on Core Web Vitals.',
    },
    {
      n: '04',
      h3: 'Fixed price — fully scoped before development starts',
      body: 'Every website project is scoped in detail and priced upfront. No hourly billing, no scope creep charges. You know the exact cost, timeline and deliverables before a single line of code is written.',
    },
    {
      n: '05',
      h3: 'Source code ownership — no lock-in',
      body: 'You own the source code, design files and hosting credentials on delivery. No platform lock-in, no monthly licensing fees. Take the code anywhere, hand it to any developer.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered websites for startups, ecommerce brands, corporates, healthcare companies and SaaS businesses across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['React JS', 'Next JS', 'Node JS', 'Tailwind CSS', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Figma'],
  h2Tech: 'Website Development Technology Stack',
  h2Faq: 'Website Development Company Bangalore — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best website development company in Bangalore?',
      a: "NNC Digital is among Bangalore's top website development companies — 565+ projects, 4.9★ Google rating, headquartered in Whitefield, Bangalore. Custom websites, React JS, Next JS, corporate and business websites — all built in-house.",
    },
    {
      q: 'Do you build React JS and Next JS websites in Bangalore?',
      a: 'Yes. NNC is a React JS and Next JS development company in Bangalore — building fast, SEO-friendly web applications with SSR, SSG and dynamic routing.',
    },
    {
      q: 'Do you build corporate websites in Bangalore?',
      a: 'Yes. NNC builds corporate website development for Bangalore companies — multi-page sites with service pages, team profiles, blog and contact forms.',
    },
    {
      q: 'Do you offer responsive website development in Bangalore?',
      a: 'Yes. Every website NNC builds is fully responsive — mobile-first design tested across all devices with Core Web Vitals optimisation.',
    },
    {
      q: 'How much does website development cost in Bangalore?',
      a: 'Business websites start from ₹25,000. Custom React JS/Next JS websites start from ₹60,000. All fixed-price — no hourly billing.',
    },
    {
      q: 'Do you have a website development office in Bangalore?',
      a: 'Yes. NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review wireframes and meet the development team.',
    },
  ],
}

export default function WebsiteDevelopmentCompanyBangalorePage() {
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
