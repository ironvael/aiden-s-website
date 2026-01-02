import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: "website" | "article";
  article?: {
    publishedTime?: string;
    author?: string;
    tags?: string[];
  };
  structuredData?: object | object[];
}

const SEO = ({
  title,
  description,
  url,
  image = "https://aidenhovren.com/og-image.jpg",
  type = "website",
  article,
  structuredData,
}: SEOProps) => {
  const fullTitle = `${title} | Aiden Hovren`;
  const fullUrl = `https://aidenhovren.com${url}`;

  // Handle both single object and array of structured data
  const renderStructuredData = () => {
    if (!structuredData) return null;
    
    if (Array.isArray(structuredData)) {
      return structuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ));
    }
    
    return (
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    );
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Aiden Hovren" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@theaidenhovren" />

      {/* Article-specific meta tags */}
      {type === "article" && article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {type === "article" && article?.author && (
        <meta property="article:author" content={article.author} />
      )}
      {type === "article" && article?.tags?.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Structured Data */}
      {renderStructuredData()}
    </Helmet>
  );
};

export default SEO;
