import { SITE } from './site';

export const defaultSEO = {
  title: 'S.S. Fasteners — Premium Stainless Steel Fasteners | Ahmedabad, India',
  description:
    'S.S. Fasteners, Ahmedabad — manufacturer & supplier of SS 201, 202, 304 & 316 stainless steel bolts, nuts, washers, spring washers & threaded rods. Factory pricing, pan-India dispatch.',
  keywords:
    'stainless steel fasteners, SS bolts Ahmedabad, SS nuts Gujarat, hex bolts, spring washers, flat washers, threaded rods, SS 304 fasteners, SS 316 marine bolts, SS 201, SS 202, industrial fasteners India',
  author: SITE.name,
  canonical: `${SITE.url}/`,
  og: {
    type: 'website',
    siteName: SITE.name,
    title: 'S.S. Fasteners — Premium Stainless Steel Fasteners | Ahmedabad',
    description:
      'Manufacturer of SS 201, 202, 304 & 316 bolts, nuts, washers, spring washers & rods in Ahmedabad. 25+ years experience. Get a quote today.',
    url: `${SITE.url}/`,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S.S. Fasteners — Stainless Steel Fasteners Ahmedabad',
    description:
      'SS bolts, nuts, washers & rods in grades 201, 202, 304 & 316. In-house manufacturing, tested every batch, pan-India dispatch.',
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  description:
    'Manufacturer and supplier of premium stainless steel bolts, nuts, washers, spring washers and threaded rods in SS 201, 202, 304 and 316 grades.',
  url: `${SITE.url}/`,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.0225,
    longitude: 72.5714,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
  ],
  areaServed: 'IN',
  foundingDate: String(SITE.foundingYear),
  priceRange: '₹₹',
  sameAs: [SITE.whatsapp],
};
