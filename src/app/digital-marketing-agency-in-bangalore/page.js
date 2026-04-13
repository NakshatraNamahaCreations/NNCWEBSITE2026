import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Digital Marketing Agency in Bangalore | Online Marketing',
  description:
    'NNC is a digital marketing agency in Bangalore offering online marketing services to boost visibility, generate quality leads, and grow your business.',
  alternates: {
    canonical: `${SITE.url}/digital-marketing-agency-in-bangalore`,
  },
  keywords:
    'digital marketing agency in bangalore, digital marketing company bangalore, digital marketing services bangalore, best digital marketing agency bangalore, top digital marketing company bangalore, digital marketing experts bangalore, online marketing agency bangalore, performance marketing agency bangalore, lead generation agency bangalore, digital marketing consultants bangalore',
  openGraph: {
    title: 'Digital Marketing Agency in Bangalore | Online Marketing',
    description:
      'NNC is a digital marketing agency in Bangalore offering online marketing services to boost visibility, generate quality leads, and grow your business.',
    url: `${SITE.url}/digital-marketing-agency-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Agency in Bangalore – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Digital Marketing Agency in Bangalore | Online Marketing',
    description:
      'NNC is a digital marketing agency in Bangalore offering online marketing services to boost visibility, generate quality leads, and grow your business.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Marketing Agency in Bangalore',
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
    'Digital Marketing',
    'SEO Services',
    'Google Ads Management',
    'Performance Marketing',
    'Lead Generation',
    'Social Media Marketing',
    'Content Marketing',
    'Online Marketing',
  ],
  description:
    'Full-service digital marketing agency in Bangalore — SEO, Google Ads, performance marketing, lead generation, social media marketing and digital marketing consultancy for Bangalore businesses.',
  url: `${SITE.url}/digital-marketing-agency-in-bangalore`,
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
      name: 'Digital Marketing Services',
      item: `${SITE.url}/digital-marketing-services`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Digital Marketing Agency in Bangalore',
      item: `${SITE.url}/digital-marketing-agency-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best digital marketing agency in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Bangalore's top-rated digital marketing agencies — 565+ projects delivered, 4.9★ Google rating, headquartered in Whitefield, Bangalore. We provide SEO, Google Ads, performance marketing, lead generation, social media marketing and digital marketing consultancy for Bangalore businesses across all industries.",
      },
    },
    {
      '@type': 'Question',
      name: 'What digital marketing services does NNC provide in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Bangalore provides full digital marketing services — SEO (technical, on-page, local, ecommerce), Google Ads management, Meta Ads, LinkedIn marketing, performance marketing, lead generation campaigns, social media marketing, content marketing and digital marketing strategy consulting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer performance marketing for Bangalore businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides performance marketing agency services for Bangalore businesses — Google Ads, Meta Ads and programmatic campaigns optimised for measurable outcomes: cost per lead, cost per acquisition and ROAS. Every campaign is reported on real business results, not vanity metrics.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide lead generation services for Bangalore businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC is a lead generation agency in Bangalore — running Google Ads, Meta Ads, LinkedIn Ads and SEO campaigns that deliver qualified leads into your CRM. Reported by cost per qualified lead, lead source and pipeline value.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer digital marketing consultancy in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides digital marketing consultants in Bangalore for strategy audits, channel selection, budget planning, competitor analysis and go-to-market planning. One-time engagements or ongoing advisory retainers for Bangalore marketing teams.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer online marketing for Bangalore ecommerce businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides full online marketing for Bangalore ecommerce brands — Google Shopping Ads, Meta Ads, ecommerce SEO, email marketing, retargeting and conversion rate optimisation. Campaigns focused on ROAS and revenue, not just traffic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a digital marketing office in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital is headquartered in Bangalore at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review your digital marketing strategy, go through campaign performance reports and meet the team managing your SEO, Google Ads and social media.',
      },
    },
  ],
}

const data = {
  badge: 'Digital Marketing · Bangalore',
  h1: 'Digital Marketing Agency',
  h1Accent: 'in Bangalore',
  tagline:
    'Top digital marketing agency in Bangalore — digital marketing services, best digital marketing company, digital marketing experts, online marketing agency, performance marketing agency, lead generation agency & digital marketing consultants. Headquartered in Whitefield.',
  desc:
    'NNC Digital is a full-service digital marketing agency in Bangalore delivering SEO, Google Ads, Meta Ads, LinkedIn marketing, performance marketing, lead generation and social media marketing for startups, SMEs and enterprises across Bangalore, Whitefield and Electronic City. Every campaign is managed by our in-house digital marketing experts with transparent reporting on leads, revenue and cost per acquisition — not just impressions and clicks.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'digital marketing in Bangalore',
  h2Features: 'Digital Marketing Services in Bangalore',
  features: [
    {
      h3: 'Digital Marketing Company Bangalore',
      desc: 'Full-service digital marketing for Bangalore businesses — SEO, Google Ads, Meta Ads, LinkedIn marketing, content marketing and social media management all under one roof. One agency, all channels, consistent strategy.',
    },
    {
      h3: 'SEO Services Bangalore',
      desc: 'SEO for Bangalore businesses — technical SEO, on page optimisation, local SEO, ecommerce SEO, link building and content strategy. Monthly reporting on keyword rankings, organic traffic and leads from search.',
    },
    {
      h3: 'Google Ads Management Bangalore',
      desc: 'Google Ads management for Bangalore businesses — Search, Display, Shopping, YouTube and Remarketing campaigns. Keyword research, ad copy, bid strategy and weekly reporting on leads and cost per acquisition.',
    },
    {
      h3: 'Performance Marketing Agency Bangalore',
      desc: 'Performance marketing for Bangalore businesses — Google Ads, Meta Ads and LinkedIn campaigns optimised entirely for measurable outcomes: cost per lead, cost per sale and ROAS. Every rupee tracked to a real result.',
    },
    {
      h3: 'Lead Generation Agency Bangalore',
      desc: 'Lead generation for Bangalore businesses — multi-channel campaigns across Google, Meta and LinkedIn delivering qualified leads into your CRM. Reported by cost per qualified lead, lead source breakdown and pipeline value.',
    },
    {
      h3: 'Online Marketing Agency Bangalore',
      desc: 'Online marketing for Bangalore brands — paid search, paid social, organic SEO, email marketing and conversion rate optimisation working together across the full customer journey from awareness to purchase.',
    },
    {
      h3: 'Digital Marketing Experts Bangalore',
      desc: "NNC's in-house digital marketing experts in Bangalore — certified Google Ads specialists, SEO strategists, Meta Ads managers and LinkedIn specialists working on your account full-time. No freelancers, no handoffs.",
    },
    {
      h3: 'Digital Marketing Consultants Bangalore',
      desc: 'Digital marketing consultancy for Bangalore businesses — strategy audits, channel selection, budget planning, competitor gap analysis and go-to-market planning. One-time engagements or ongoing advisory retainers.',
    },
    {
      h3: 'Social Media & Content Marketing Bangalore',
      desc: 'Social media marketing and content marketing for Bangalore brands — Instagram, Facebook, LinkedIn, YouTube channel management, content creation, paid social campaigns and influencer marketing.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Digital Marketing Agency in Bangalore?',
  why: [
    {
      n: '01',
      h3: 'Bangalore headquarters — review campaigns in person',
      body: 'NNC is headquartered in Bangalore at Prestige Shantiniketan, Whitefield. Visit us to review SEO rankings, Google Ads performance and social media results in person with the team managing your accounts.',
    },
    {
      n: '02',
      h3: 'Reported on leads and revenue — not vanity metrics',
      body: 'NNC reports what Bangalore business owners care about — number of qualified leads, cost per lead, revenue from digital channels and ROAS on paid campaigns. Not just impressions, clicks and follower counts.',
    },
    {
      n: '03',
      h3: 'All channels in-house — SEO, Ads, Social, Content',
      body: 'Every SEO expert, Google Ads manager, Meta Ads specialist and content strategist is a full-time NNC employee in Bangalore. All channels coordinated under one strategy — no briefing multiple agencies.',
    },
    {
      n: '04',
      h3: 'No long-term lock-in contracts',
      body: 'NNC operates on monthly retainers with no 12-month lock-in for digital marketing. Bangalore clients stay because campaigns are generating leads and revenue — not because they are contractually committed.',
    },
    {
      n: '05',
      h3: 'Transparent reporting — full access to your accounts',
      body: 'NNC gives every Bangalore client full access to their Google Ads, Analytics and Search Console accounts. You own your data. Monthly reports plus real-time dashboard access.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered digital marketing for ecommerce, real estate, healthcare, SaaS, education and B2B businesses across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Google Ads', 'Google Analytics 4', 'Google Search Console', 'Meta Ads Manager', 'SEMrush', 'Ahrefs', 'LinkedIn Campaign Manager', 'Looker Studio'],
  h2Tech: 'Digital Marketing Tools & Platforms',
  h2Faq: 'Digital Marketing Agency Bangalore — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best digital marketing agency in Bangalore?',
      a: "NNC Digital is among Bangalore's top digital marketing agencies — 565+ projects, 4.9★ Google rating, headquartered in Whitefield. SEO, Google Ads, performance marketing, lead generation — all in-house.",
    },
    {
      q: 'Do you offer performance marketing in Bangalore?',
      a: 'Yes. NNC provides performance marketing for Bangalore businesses — Google Ads, Meta Ads and LinkedIn campaigns optimised for cost per lead and ROAS.',
    },
    {
      q: 'Do you offer lead generation services in Bangalore?',
      a: 'Yes. NNC is a lead generation agency in Bangalore — Google Ads, Meta Ads, LinkedIn and SEO campaigns delivering qualified leads. Reported by cost per qualified lead.',
    },
    {
      q: 'Do you offer digital marketing consultancy in Bangalore?',
      a: 'Yes. NNC provides digital marketing consultants in Bangalore — strategy audits, channel selection, budget planning and competitor analysis.',
    },
    {
      q: 'Do you offer SEO and Google Ads in Bangalore?',
      a: 'Yes. NNC provides full SEO services and Google Ads management for Bangalore businesses — both channels managed in-house with monthly reporting on rankings, traffic and leads.',
    },
    {
      q: 'Do you have a digital marketing office in Bangalore?',
      a: 'Yes. NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review campaign performance and discuss your digital marketing strategy.',
    },
  ],
}

export default function DigitalMarketingAgencyBangalorePage() {
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
