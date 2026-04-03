import { Helmet } from 'react-helmet-async';

interface PageMetaProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export default function PageMeta({ title, description, image, url }: PageMetaProps) {
  const fullTitle = title === 'Matera' ? title : `${title} | Matera`;
  const baseUrl = 'https://matera.com';
  const fullUrl = url ? `${baseUrl}${url}` : undefined;
  const fullImage = image?.startsWith('http') ? image : image ? `${baseUrl}${image}` : `${baseUrl}/matera-logo.svg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {fullImage && <meta property="og:image" content={fullImage} />}
      {fullUrl && <meta property="og:url" content={fullUrl} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {fullImage && <meta name="twitter:image" content={fullImage} />}
    </Helmet>
  );
}
