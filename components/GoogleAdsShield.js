import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function GoogleAdsShield() {
  const [canLoad, setCanLoad] = useState(false);
  const GA_ID = ''; // 👈 Thay ID thật của bạn ở đây cho gọn

  useEffect(() => {
    const startLoading = () => {
      setCanLoad(true);
      // Gỡ bỏ sự kiện ngay lập tức sau khi kích hoạt lần đầu
      window.removeEventListener('mousemove', startLoading);
      window.removeEventListener('scroll', startLoading);
      window.removeEventListener('touchstart', startLoading);
    };

    // Thêm { passive: true } để web cuộn mượt hơn
    window.addEventListener('mousemove', startLoading, { passive: true });
    window.addEventListener('scroll', startLoading, { passive: true });
    window.addEventListener('touchstart', startLoading, { passive: true });

    return () => {
      window.removeEventListener('mousemove', startLoading);
      window.removeEventListener('scroll', startLoading);
      window.removeEventListener('touchstart', startLoading);
    };
  }, []);

  if (!canLoad) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
