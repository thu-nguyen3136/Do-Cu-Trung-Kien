import Head from 'next/head';

export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://thumuadocutrungkien.com/banner-do-cu-trung-kien.jpg",
  ogType = "website",
  publishedTime,
  modifiedTime,
  noindex = false
}) {
  const domain = "https://thumuadocutrungkien.com";
  const fullCanonical = canonical
    ? (canonical.startsWith('http') ? canonical : `${domain}${canonical.startsWith('/') ? canonical : '/' + canonical}`)
    : domain;

  const fullOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${domain}${ogImage.startsWith('/') ? ogImage : '/' + ogImage}`;

  return (
    <Head>
      {/* --- TIÊU ĐỀ & MÔ TẢ CĂN BẢN (GOOGLE SEARCH ENGINE) --- */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* --- DIRECTIVE CHO BOT TÌM KIẾM --- */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}

      {/* --- OPEN GRAPH / FACEBOOK / ZALO --- */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:secure_url" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Đồ Cũ Trung Kiên" />
      <meta property="og:locale" content="vi_VN" />

      {/* --- TWITTER CARDS --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* --- ARTICLE SCHEMA DATES --- */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {ogType === 'article' && <meta property="article:author" content="Đồ Cũ Trung Kiên" />}
    </Head>
  );
}
