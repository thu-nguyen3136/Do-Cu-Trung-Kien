import Head from 'next/head';

export const BUSINESS_INFO = {
  name: 'Đồ Cũ Trung Kiên',
  alternateName: 'Thu Mua Đồ Cũ Giá Cao Trung Kiên',
  legalName: 'Cơ Sở Thu Mua Đồ Cũ Trung Kiên',
  url: 'https://thumuadocutrungkien.com/',
  logo: 'https://thumuadocutrungkien.com/logo-dai-trung-kien.png',
  image: 'https://thumuadocutrungkien.com/banner-do-cu-trung-kien.jpg',
  telephone: '0398771444',
  hotlineDisplay: '0398.771.444',
  email: 'docutrungkien@gmail.com',
  address: {
    streetAddress: '271 Bình Long, Phường Bình Hưng Hòa',
    addressLocality: 'Quận Bình Tân',
    addressRegion: 'Hồ Chí Minh',
    postalCode: '700000',
    addressCountry: 'VN'
  },
  geo: {
    latitude: 10.7954,
    longitude: 106.6082
  },
  priceRange: '100.000đ - 500.000.000đ'
};

// 1. LocalBusiness & WebSite Schema (Dùng cho Trang Chủ)
export function HomeSchema() {
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${BUSINESS_INFO.url}#localbusiness`,
    name: BUSINESS_INFO.name,
    alternateName: BUSINESS_INFO.alternateName,
    legalName: BUSINESS_INFO.legalName,
    url: BUSINESS_INFO.url,
    logo: BUSINESS_INFO.logo,
    image: [
      BUSINESS_INFO.image,
      'https://thumuadocutrungkien.com/anh-gioi-thieu-do-cu-trung-kien.jpg'
    ],
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    priceRange: BUSINESS_INFO.priceRange,
    currenciesAccepted: 'VND',
    paymentAccepted: 'Tiền mặt, Chuyển khoản',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    areaServed: [
      'Hồ Chí Minh',
      'Bình Dương',
      'Đồng Nai',
      'Long An',
      'Tây Ninh',
      'Bà Rịa - Vũng Tàu'
    ],
    description:
      'Đồ Cũ Trung Kiên chuyên thu mua đồ cũ giá cao tại TPHCM. Nhận thanh lý nhà hàng, khách sạn, quán cafe, quán ăn, quán nhậu, đồ gia đình, đồ inox, tủ đông tủ mát với giá cao nhất, khảo sát tận nơi sau 30 phút, thanh toán 100%.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '128',
      bestRating: '5',
      worstRating: '1'
    }
  };

  const webSiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BUSINESS_INFO.url}#website`,
    name: BUSINESS_INFO.name,
    alternateName: 'Thu Mua Đồ Cũ Trung Kiên TPHCM',
    url: BUSINESS_INFO.url,
    publisher: {
      '@id': `${BUSINESS_INFO.url}#localbusiness`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteData) }}
      />
    </>
  );
}

// 2. Breadcrumb Schema (Cho mọi trang con)
export function BreadcrumbSchema({ items }) {
  if (!items || items.length === 0) return null;

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}

// 3. Service Schema (Cho các trang dịch vụ)
export function ServiceSchema({ name, description, url, image }) {
  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    description: description,
    url: url,
    image: image || BUSINESS_INFO.image,
    serviceType: 'Thu Mua Thanh Lý Đồ Cũ',
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.telephone,
      url: BUSINESS_INFO.url,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.streetAddress,
        addressLocality: BUSINESS_INFO.address.addressLocality,
        addressRegion: BUSINESS_INFO.address.addressRegion,
        addressCountry: BUSINESS_INFO.address.addressCountry
      }
    },
    areaServed: {
      '@type': 'City',
      name: 'Hồ Chí Minh'
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'VND',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'VND',
        description: 'Giá thỏa thuận - Cam kết cao hơn thị trường 20%'
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
    />
  );
}

// 4. FAQ Schema (Rất quan trọng để hiển thị câu hỏi mở rộng trên Google)
export function FAQSchema({ faqs }) {
  if (!faqs || faqs.length === 0) return null;

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}

// 5. Article / BlogPosting Schema (Cho trang tin tức & bài viết)
export function ArticleSchema({
  title,
  description,
  url,
  image,
  datePublished = '2026-01-10T08:00:00+07:00',
  dateModified = '2026-09-25T08:00:00+07:00'
}) {
  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    headline: title,
    description: description,
    image: image ? [image] : [BUSINESS_INFO.image],
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Person',
      name: 'Đồ Cũ Trung Kiên'
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: BUSINESS_INFO.logo
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
    />
  );
}
