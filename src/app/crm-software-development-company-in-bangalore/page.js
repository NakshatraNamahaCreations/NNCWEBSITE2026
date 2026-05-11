import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'CRM Software Development Company in Bangalore | NNC Digital',
  description:
    'Top CRM software development company in Bangalore. CRM development company, CRM software, custom CRM software, enterprise CRM development, sales CRM software, CRM developers, SaaS CRM development, lead management software, CRM system development, Zoho alternative CRM & Salesforce alternative. Fixed price.',
  alternates: {
    canonical: `${SITE.url}/crm-software-development-company-in-bangalore`,
  },
  keywords:
    'crm software development company in bangalore, crm development company in bangalore, crm software bangalore, custom crm software bangalore, enterprise crm development bangalore, sales crm software bangalore, crm developers bangalore, saas crm development bangalore, lead management software bangalore, crm system development bangalore, zoho alternative crm bangalore, salesforce alternative bangalore',
  openGraph: {
    title: 'CRM Software Development Company in Bangalore | NNC Digital',
    description:
      'CRM software development company in Bangalore — custom CRM software, enterprise CRM, sales CRM, SaaS CRM, lead management software, Zoho alternative & Salesforce alternative. Fixed price.',
    url: `${SITE.url}/crm-software-development-company-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'CRM Software Development Company in Bangalore – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'CRM Software Development Company in Bangalore | NNC Digital',
    description:
      'CRM software development company in Bangalore — custom CRM, enterprise CRM, sales CRM, SaaS CRM & lead management software. Fixed price.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'CRM Software Development Company in Bangalore',
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
    'CRM Software Development',
    'Custom CRM Software',
    'Enterprise CRM Development',
    'SaaS CRM Development',
    'Sales CRM Software',
    'Lead Management Software',
    'CRM System Development',
  ],
  description:
    'CRM software development company in Bangalore — custom CRM software, enterprise CRM development, sales CRM, SaaS CRM, lead management software and CRM system development for Bangalore businesses. Zoho and Salesforce alternative.',
  url: `${SITE.url}/crm-software-development-company-in-bangalore`,
  offers: [
    {
      '@type': 'Offer',
      name: 'CRM Software Bangalore — Starter',
      price: '75000',
      priceCurrency: 'INR',
      description: 'Custom CRM with lead management, pipeline, contact database, task management and reporting dashboard.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise CRM Development Bangalore',
      price: '200000',
      priceCurrency: 'INR',
      description: 'Enterprise CRM with multi-team workflows, role-based access, API integrations, automation and advanced analytics.',
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
      name: 'Custom CRM Development',
      item: `${SITE.url}/custom-crm-development`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'CRM Software Development Company in Bangalore',
      item: `${SITE.url}/crm-software-development-company-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best CRM software development company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Bangalore's top-rated CRM software development companies — 565+ projects delivered, 4.9★ Google rating, headquartered in Whitefield, Bangalore. We build custom CRM software, enterprise CRM systems, sales CRM, SaaS CRM and lead management software for Bangalore businesses across all industries.",
      },
    },
    {
      '@type': 'Question',
      name: 'What CRM software does NNC develop for Bangalore businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC develops custom CRM software in Bangalore — lead management, sales pipeline management, contact database, task and activity tracking, email integration, reporting dashboards, role-based access control, workflow automation and mobile CRM apps. Built entirely around your Bangalore business processes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a custom CRM better than Zoho or Salesforce for Bangalore businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A custom CRM from NNC is a true Zoho alternative and Salesforce alternative for Bangalore businesses — zero monthly SaaS fees, no unused modules, 100% source code ownership and workflows built around your exact process. For Bangalore teams of 10+ users, a custom CRM typically pays for itself within 18–24 months compared to Zoho or Salesforce licensing costs.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build enterprise CRM systems for Bangalore companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds enterprise CRM development for Bangalore corporates — multi-department workflows, territory management, complex approval chains, role-based access, ERP/accounting integrations, advanced reporting and executive dashboards. Built to handle hundreds of users and millions of records.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build SaaS CRM software for Bangalore startups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds SaaS CRM development for Bangalore startups — multi-tenant CRM platforms with subscription billing (Razorpay/Stripe), onboarding flows, usage-based feature gating, white-label options and scalable cloud infrastructure on AWS.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does CRM software development cost in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom CRM starter build in Bangalore starts from ₹75,000 — covering lead management, pipeline, contact database and reporting. Enterprise CRM systems with complex workflows and integrations typically cost ₹2,00,000–₹5,00,000. All fixed-price — no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a CRM development office in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital is headquartered in Bangalore at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to map your sales process, review CRM wireframes and meet the development team building your custom CRM software.',
      },
    },
  ],
}

const data = {
  badge: 'CRM Software Development · Bangalore',
  h1: 'CRM Software Development Company',
  h1Accent: 'in Bangalore',
  tagline:
    'Top CRM software development company in Bangalore — custom CRM software, enterprise CRM development, sales CRM software, SaaS CRM development, lead management software, CRM system development, Zoho alternative CRM & Salesforce alternative. Fixed price.',
  desc:
    'NNC Digital is a specialist CRM software development company in Bangalore building custom CRM systems, enterprise CRM platforms, sales CRM software and SaaS CRM products for startups, SMEs and large enterprises. Every CRM is built from scratch around your Bangalore business workflows — no generic modules, no monthly SaaS fees, 100% source code ownership. A true Zoho alternative and Salesforce alternative that pays for itself within months.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'CRM software development in Bangalore',
  h2Features: 'CRM Software Development Services in Bangalore',
  features: [
    {
      h3: 'Custom CRM Software Bangalore',
      desc: 'Fully custom CRM software for Bangalore businesses — every pipeline stage, field, workflow and report designed around how your team actually works. No generic templates, no unused modules, no monthly licensing fees.',
    },
    {
      h3: 'Enterprise CRM Development Bangalore',
      desc: 'Enterprise CRM development for Bangalore corporates — multi-department workflows, territory management, complex approval chains, role-based access control, ERP integrations and executive reporting dashboards.',
    },
    {
      h3: 'Sales CRM Software Bangalore',
      desc: 'Sales CRM software for Bangalore sales teams — lead capture, pipeline management, deal tracking, activity logging, follow-up reminders, quotation generation and sales performance reporting by rep, team and period.',
    },
    {
      h3: 'SaaS CRM Development Bangalore',
      desc: 'SaaS CRM development for Bangalore startups — multi-tenant CRM platforms with subscription billing, onboarding flows, feature gating, white-label options and scalable AWS infrastructure ready for thousands of users.',
    },
    {
      h3: 'Lead Management Software Bangalore',
      desc: 'Lead management software for Bangalore businesses — lead capture from website, WhatsApp, email and portals, auto-assignment rules, lead scoring, stage-wise follow-up workflows and conversion reporting.',
    },
    {
      h3: 'CRM System Development Bangalore',
      desc: 'End-to-end CRM system development in Bangalore — requirements discovery, UX design, development, data migration from spreadsheets or legacy systems, staff training and post-launch support. Complete delivery with zero outsourcing.',
    },
    {
      h3: 'Zoho Alternative CRM Bangalore',
      desc: 'NNC builds custom Zoho alternative CRM for Bangalore businesses — all the functionality you actually use, none of the modules you pay for but never open. Zero monthly fees, 100% source code ownership, built around your exact workflow.',
    },
    {
      h3: 'Salesforce Alternative Bangalore',
      desc: 'Custom Salesforce alternative for Bangalore businesses — enterprise-grade CRM without the ₹10,000+/user/month Salesforce licensing. Built on modern tech, hosted on your own AWS account, with no vendor lock-in.',
    },
    {
      h3: 'CRM with Mobile App Bangalore',
      desc: 'CRM with React Native mobile app for Bangalore field sales teams — offline-capable lead updates, GPS check-ins, call logging, meeting notes and real-time pipeline visibility on Android and iOS.',
    },
  ],
  h2Why: 'Why Choose NNC as Your CRM Software Development Company in Bangalore?',
  why: [
    {
      n: '01',
      h3: 'Bangalore headquarters — map your workflow in person',
      body: 'NNC is headquartered in Bangalore at Prestige Shantiniketan, Whitefield. Visit us to walk through your sales process, review CRM wireframes on screen and meet the developers building your custom CRM system.',
    },
    {
      n: '02',
      h3: 'Built 100% around your workflow — not a template',
      body: 'Every CRM NNC builds starts with a workflow mapping session. Pipeline stages, field names, assignment rules and reports are all designed around how your Bangalore team works — not the other way around.',
    },
    {
      n: '03',
      h3: 'Zero monthly SaaS fees — you own it outright',
      body: 'No Zoho, Salesforce or HubSpot licensing. Your custom CRM is yours — source code, database and hosting credentials handed over on delivery. For Bangalore teams of 10+ users the saving over 2 years typically exceeds the build cost.',
    },
    {
      n: '04',
      h3: 'In-house CRM development team — zero outsourcing',
      body: 'Every CRM developer, UX designer and QA engineer is a full-time NNC employee in Bangalore. Consistent team from discovery to delivery — no freelancers, no offshore outsourcing.',
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before development starts',
      body: 'Every CRM project is scoped in detail and priced upfront. No hourly billing, no change orders for extra fields or reports within agreed scope.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered CRM systems for real estate, healthcare, manufacturing, logistics and B2B businesses across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['React JS', 'Node JS', 'MongoDB', 'PostgreSQL', 'Redis', 'Razorpay', 'AWS', 'REST APIs'],
  h2Tech: 'CRM Development Technology Stack',
  h2Faq: 'CRM Software Development Company Bangalore — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best CRM software development company in Bangalore?',
      a: "NNC Digital is among Bangalore's top CRM software development companies — 565+ projects, 4.9★ Google rating, headquartered in Whitefield. Custom CRM, enterprise CRM, SaaS CRM — all built in-house.",
    },
    {
      q: 'Is a custom CRM better than Zoho or Salesforce for Bangalore businesses?',
      a: 'Yes for most Bangalore teams of 10+ users. Zero monthly fees, no unused modules, 100% source code ownership. Typically pays for itself within 18–24 months vs Zoho or Salesforce licensing.',
    },
    {
      q: 'Do you build enterprise CRM systems in Bangalore?',
      a: 'Yes. NNC builds enterprise CRM for Bangalore corporates — multi-department workflows, territory management, ERP integrations and advanced reporting.',
    },
    {
      q: 'Do you build SaaS CRM for Bangalore startups?',
      a: 'Yes. NNC builds multi-tenant SaaS CRM platforms with subscription billing, onboarding flows and scalable AWS infrastructure.',
    },
    {
      q: 'How much does CRM software development cost in Bangalore?',
      a: 'Starter CRM from ₹75,000. Enterprise CRM systems from ₹2,00,000. All fixed-price — no hourly billing.',
    },
    {
      q: 'Do you have a CRM development office in Bangalore?',
      a: 'Yes. NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to map your workflow and review CRM wireframes.',
    },
  ],
}

export default function CrmSoftwareDevelopmentBangalorePage() {
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
