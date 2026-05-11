import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Corporate Video Production Company in Bangalore | Video Work',
  description:
    'NNC is a Best corporate video production company in Bangalore delivering professional brand, promotional, and business videos for better engagement and growth.',
  alternates: {
    canonical: `${SITE.url}/corporate-video-production-company-in-bangalore`,
  },
  keywords:
    'corporate video production company in bangalore, video production company bangalore, corporate film makers bangalore, brand film production bangalore, ad film production bangalore, drone video production bangalore, product video shoot bangalore, corporate video makers bangalore, commercial video production bangalore',
  openGraph: {
    title: 'Corporate Video Production Company in Bangalore | Video Work',
    description:
      'NNC is a Best corporate video production company in Bangalore delivering professional brand, promotional, and business videos for better engagement and growth.',
    url: `${SITE.url}/corporate-video-production-company-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Corporate Video Production Company in Bangalore – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Corporate Video Production Company in Bangalore | Video Work',
    description:
      'NNC is a Best corporate video production company in Bangalore delivering professional brand, promotional, and business videos for better engagement and growth.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Corporate Video Production Company in Bangalore',
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
    'Corporate Video Production',
    'Brand Film Production',
    'Ad Film Production',
    'Drone Video Production',
    'Product Video Shoot',
    'Commercial Video Production',
    'Corporate Film Making',
  ],
  description:
    'Corporate video production company in Bangalore — brand films, ad films, drone video production, product video shoots, corporate films and commercial video production for Bangalore businesses.',
  url: `${SITE.url}/corporate-video-production-company-in-bangalore`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Corporate Video Production Bangalore — Starter',
      price: '25000',
      priceCurrency: 'INR',
      description: 'Corporate video up to 2 minutes — scripting, shoot, editing, colour grade and music.',
    },
    {
      '@type': 'Offer',
      name: 'Brand Film & Ad Film Bangalore',
      price: '75000',
      priceCurrency: 'INR',
      description: 'Full brand film or ad film — concept, scripting, multi-day shoot, professional actors, colour grade and sound design.',
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
      name: 'Video & Animation',
      item: `${SITE.url}/video-production`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Corporate Video Production Company in Bangalore',
      item: `${SITE.url}/corporate-video-production-company-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best corporate video production company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Bangalore's top-rated corporate video production companies — 565+ projects delivered, 4.9★ Google rating, headquartered in Whitefield, Bangalore. We produce corporate films, brand films, ad films, drone videos, product video shoots and commercial video production for Bangalore businesses.",
      },
    },
    {
      '@type': 'Question',
      name: 'What video production services does NNC provide in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Bangalore provides full video production services — corporate films, brand films, ad films, product video shoots, drone video production, testimonial videos, event coverage, social media video content and commercial video production. Scripting, shoot, editing, colour grading and sound design all in-house.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you produce brand films for Bangalore businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC produces brand film production for Bangalore companies — concept development, scripting, location scouting, professional crew, multi-day shoots, colour grading and sound design. Brand films for website hero sections, investor decks, YouTube and trade shows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you produce ad films for Bangalore brands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC produces ad film production for Bangalore brands — TVCs, digital ad films for YouTube, Instagram and Facebook, product launch films and campaign videos. Full production with concept, scripting, casting, shoot and post-production.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer drone video production in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides drone video production for Bangalore businesses — aerial cinematography for real estate developments, construction sites, corporate campuses, events and brand films. Licensed drone operators with DGCA-compliant equipment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does corporate video production cost in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A corporate video up to 2 minutes in Bangalore starts from ₹25,000 — covering scripting, shoot, editing, colour grade and music. Full brand films and ad films with professional actors and multi-day shoots typically start from ₹75,000. All fixed-price — no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a video production office in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to discuss your video brief, review scripts, storyboards and previous work before confirming your production.',
      },
    },
  ],
}

const data = {
  badge: 'Corporate Video Production · Bangalore',
  h1: 'Corporate Video Production Company',
  h1Accent: 'in Bangalore',
  tagline:
    'Top corporate video production company in Bangalore — brand film production, ad film production, drone video production, product video shoot, corporate film makers, corporate video makers & commercial video production. Fixed price.',
  desc:
    'NNC Digital is a full-service corporate video production company in Bangalore producing brand films, ad films, corporate films, product video shoots, drone videos and commercial video content for startups, SMEs and enterprises across Bangalore. Every video is produced by our in-house Bangalore production team — concept, scripting, shoot, editing, colour grading and sound design — with zero outsourcing and fixed-price delivery.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'corporate video production in Bangalore',
  h2Features: 'Corporate Video Production Services in Bangalore',
  features: [
    {
      h3: 'Corporate Film Makers Bangalore',
      desc: 'Corporate film production for Bangalore businesses — company profile films, leadership message videos, investor films, office and facility tours and employee culture videos. Professional crew, scripting and post-production all in-house.',
    },
    {
      h3: 'Brand Film Production Bangalore',
      desc: 'Brand film production for Bangalore companies — concept development, scripting, location scouting, professional crew, colour grading and sound design. Brand films for website hero sections, investor decks, YouTube and trade shows.',
    },
    {
      h3: 'Ad Film Production Bangalore',
      desc: 'Ad film production for Bangalore brands — TVCs, digital ad films for YouTube, Instagram and Facebook, product launch films and campaign videos. Full production with concept, scripting, casting, shoot and post-production.',
    },
    {
      h3: 'Drone Video Production Bangalore',
      desc: 'Drone video production for Bangalore businesses — aerial cinematography for real estate, construction sites, corporate campuses, events and brand films. DGCA-compliant licensed drone operators with professional cinema-grade equipment.',
    },
    {
      h3: 'Product Video Shoot Bangalore',
      desc: 'Product video shoots for Bangalore brands — product demo videos, unboxing videos, feature highlight reels, ecommerce product videos and social media product content. Studio shoot or on-location depending on product requirements.',
    },
    {
      h3: 'Corporate Video Makers Bangalore',
      desc: 'Corporate video production for Bangalore companies — training videos, internal communication films, CSR videos, annual report films, event highlight reels and testimonial videos. Fast turnaround, fixed price.',
    },
    {
      h3: 'Commercial Video Production Bangalore',
      desc: 'Commercial video production for Bangalore brands — retail commercials, service commercials, festive campaign videos and digital-first commercial content for YouTube, Instagram Reels and Facebook.',
    },
    {
      h3: 'Video Production Bangalore — Social Media Content',
      desc: 'Short-form video content production for Bangalore brands — Instagram Reels, YouTube Shorts, LinkedIn video posts and Facebook video content. Scripted, shot and edited for each platform\'s specific format and audience.',
    },
    {
      h3: 'Video Production Bangalore — Post Production',
      desc: 'Professional post-production for Bangalore video projects — editing, colour grading (DaVinci Resolve), sound design, motion graphics, subtitles and format exports for broadcast, web, social and OTT platforms.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Corporate Video Production Company in Bangalore?',
  why: [
    {
      n: '01',
      h3: 'Bangalore headquarters — review scripts and storyboards in person',
      body: 'NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore. Visit us to go through your video brief, review scripts and storyboards and meet the production team before shoot day.',
    },
    {
      n: '02',
      h3: 'In-house production team — zero outsourcing',
      body: 'Every director, cinematographer, editor and motion graphics artist is a full-time NNC employee. Consistent creative team from brief to final delivery — no freelancer crew assembled for each project.',
    },
    {
      n: '03',
      h3: 'Concept to delivery — full production under one roof',
      body: 'NNC handles everything in-house — concept, scripting, storyboarding, shoot, editing, colour grading, sound design and final delivery. One point of contact managing your entire video project.',
    },
    {
      n: '04',
      h3: 'Professional equipment — cinema-grade cameras and lenses',
      body: 'NNC shoots on cinema-grade cameras with professional lighting, sound and drone equipment. Production quality that matches Bangalore\'s most demanding brand and corporate requirements.',
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before production starts',
      body: 'Every video production project is scoped and priced upfront — scripting, shoot days, post-production hours and delivery formats. No surprise invoices after the edit.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has produced corporate videos, brand films and ad films for real estate, IT, healthcare, FMCG and manufacturing businesses across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Sony FX Series', 'DJI Drones', 'DaVinci Resolve', 'Adobe Premiere Pro', 'After Effects', 'Adobe Audition', 'Godox Lighting', 'Sennheiser Audio'],
  h2Tech: 'Video Production Equipment & Software',
  h2Faq: 'Corporate Video Production Company Bangalore — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best corporate video production company in Bangalore?',
      a: "NNC Digital is among Bangalore's top corporate video production companies — 565+ projects, 4.9★ Google rating, headquartered in Whitefield. Brand films, ad films, drone video, product shoots — all produced in-house.",
    },
    {
      q: 'Do you produce brand films for Bangalore companies?',
      a: 'Yes. NNC produces brand films for Bangalore companies — concept, scripting, multi-day shoot, colour grading and sound design. For website, YouTube and investor presentations.',
    },
    {
      q: 'Do you produce ad films for Bangalore brands?',
      a: 'Yes. NNC produces ad films for Bangalore brands — TVCs, digital ad films for YouTube, Instagram and Facebook. Full production from concept to final delivery.',
    },
    {
      q: 'Do you offer drone video production in Bangalore?',
      a: 'Yes. NNC provides drone video production in Bangalore — aerial cinematography with DGCA-compliant licensed operators for real estate, construction and brand films.',
    },
    {
      q: 'How much does corporate video production cost in Bangalore?',
      a: 'Corporate videos start from ₹25,000. Brand films and ad films start from ₹75,000. All fixed-price — no hourly billing.',
    },
    {
      q: 'Do you have a video production office in Bangalore?',
      a: 'Yes. NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review scripts, storyboards and previous work.',
    },
  ],
}

export default function CorporateVideoProductionBangalorePage() {
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
