import { Helmet } from 'react-helmet-async';

interface PageMetaProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  article?: {
    date: string;
    author?: string;
  };
}

const ORG_SCHEMA = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Matera',
  url: 'https://matera.com',
  logo: 'https://matera.com/matera-logo.svg',
  sameAs: [
    'https://br.linkedin.com/company/matera',
    'https://www.instagram.com/matera.oficial/',
    'https://www.youtube.com/@Materaoficial',
  ],
  description: 'Banking technology for stablecoins, instant payments, QR codes, and core modernization.',
  foundingDate: '1987',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 1100 },
  contactPoint: [
    { '@type': 'ContactPoint', telephone: '+1-646-833-0106', contactType: 'sales', areaServed: 'US', availableLanguage: 'English' },
    { '@type': 'ContactPoint', telephone: '+55-19-3794-7700', contactType: 'sales', areaServed: 'BR', availableLanguage: 'Portuguese' },
  ],
  address: [
    { '@type': 'PostalAddress', streetAddress: '19 W 24th Street, 4th Floor', addressLocality: 'New York', addressRegion: 'NY', postalCode: '10010', addressCountry: 'US' },
    { '@type': 'PostalAddress', streetAddress: 'Av. Selma Parada, 505 - 7º Andar', addressLocality: 'Campinas', addressRegion: 'SP', postalCode: '13091-605', addressCountry: 'BR' },
  ],
});

const WEBSITE_SCHEMA = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Matera',
  url: 'https://matera.com',
  inLanguage: ['en', 'pt-BR'],
});

export default function PageMeta({ title, description, image, url, article }: PageMetaProps) {
  const fullTitle = title === 'Matera' ? title : `${title} | Matera`;
  const baseUrl = 'https://matera.com';
  const fullUrl = url ? `${baseUrl}${url}` : undefined;
  const fullImage = image?.startsWith('http') ? image : image ? `${baseUrl}${image}` : `${baseUrl}/matera-logo.svg`;

  const isBR = url?.startsWith('/br');
  const lang = isBR ? 'pt-BR' : 'en';

  // Build breadcrumb from URL path
  const breadcrumbs = url ? buildBreadcrumbs(url, baseUrl) : null;

  // Article schema for blog/press/podcast content
  const articleSchema = article ? JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: fullImage,
    datePublished: article.date,
    author: article.author ? { '@type': 'Person', name: article.author } : { '@type': 'Organization', name: 'Matera' },
    publisher: { '@type': 'Organization', name: 'Matera', logo: { '@type': 'ImageObject', url: `${baseUrl}/matera-logo.svg` } },
    mainEntityOfPage: fullUrl,
  }) : null;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      {fullImage && <meta property="og:image" content={fullImage} />}
      {fullUrl && <meta property="og:url" content={fullUrl} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {fullImage && <meta name="twitter:image" content={fullImage} />}
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
      <link rel="alternate" hrefLang="pt-BR" href={`${baseUrl}/br`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en`} />
      <script type="application/ld+json">{ORG_SCHEMA}</script>
      <script type="application/ld+json">{WEBSITE_SCHEMA}</script>
      {breadcrumbs && <script type="application/ld+json">{breadcrumbs}</script>}
      {articleSchema && <script type="application/ld+json">{articleSchema}</script>}
    </Helmet>
  );
}

function buildBreadcrumbs(url: string, baseUrl: string): string {
  const segments = url.split('/').filter(Boolean);
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/${segments[0]}` }];

  let path = '';
  for (let i = 1; i < segments.length; i++) {
    path += '/' + segments[i];
    const name = segments[i]
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
    items.push({ '@type': 'ListItem', position: i + 1, name, item: `${baseUrl}/${segments[0]}${path}` });
  }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  });
}
