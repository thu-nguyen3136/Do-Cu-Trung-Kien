import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FloatingContact } from '../components/FloatingContact';
import { Be_Vietnam_Pro } from 'next/font/google';
import GoogleAdsShield from '../components/GoogleAdsShield';
import { useEffect } from 'react';
import { useRouter } from 'next/router'; // <-- 1. Import thêm useRouter

const beVietnam = Be_Vietnam_Pro({
  subsets: ['vietnamese'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-be-vietnam',
});

export default function MyApp({ Component, pageProps }) {
  const router = useRouter(); // <-- 2. Khởi tạo router

  // BỘ ĐẾM CHỐNG F5 / RELOAD SPAM THÔNG MINH
  useEffect(() => {
    // 1. Nếu là bot của công cụ tìm kiếm (Googlebot, Bingbot, AdsBot...) thì miễn trừ 100% để không ảnh hưởng SEO
    if (typeof navigator !== 'undefined') {
      const ua = navigator.userAgent.toLowerCase();
      if (/googlebot|google-inspectiontool|adsbot-google|mediapartners-google|bingbot|ahrefsbot|semrushbot|facebookexternalhit/i.test(ua)) {
        return;
      }
    }

    const now = Date.now();

    // 2. Kiểm tra xem người dùng có đang trong thời gian bị phạt tạm thời không
    const bannedUntil = Number(localStorage.getItem('f5_banned_until') || 0);
    if (bannedUntil > now) {
      if (router.pathname !== '/access-denied-spam') {
        router.push('/access-denied-spam');
      }
      return;
    } else if (bannedUntil > 0) {
      // Hết thời gian phạt -> xóa bỏ trạng thái phạt
      localStorage.removeItem('f5_banned_until');
      localStorage.removeItem('user_visits');
    }

    // Nếu đang ở trang phạt rồi thì dừng lại
    if (router.pathname === '/access-denied-spam') {
      return;
    }

    // 3. Phân tích lịch sử lượt tải trang trong 10 giây gần nhất
    const SHORT_WINDOW = 10000; // 10 giây
    const MAX_SHORT_REQUESTS = 8; // Chỉ coi là spam nếu F5 liên tục > 8 lần trong 10 giây

    let visits = [];
    try {
      visits = JSON.parse(localStorage.getItem('user_visits') || '[]');
    } catch {
      visits = [];
    }

    // Lọc lại những lần truy cập trong 10 giây gần nhất
    visits = visits.filter(time => now - time < SHORT_WINDOW);
    visits.push(now);
    localStorage.setItem('user_visits', JSON.stringify(visits));

    // --- KIỂM TRA PHẠT ---
    if (visits.length > MAX_SHORT_REQUESTS) {
      console.warn('Phát hiện F5 dồn dập bất thường! Tạm khóa 30 giây...');
      // Tạm khóa trong 30 giây
      localStorage.setItem('f5_banned_until', String(now + 30000));
      localStorage.removeItem('user_visits');
      router.push('/access-denied-spam');
    }
  }, [router.pathname]);

  // 3. Kiểm tra xem có đang ở trang phạt không
  const isBanned = router.asPath === '/access-denied-spam';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      {/* Chèn lá chắn quảng cáo (Nó sẽ chạy ngầm) */}
      <GoogleAdsShield />

      <div className={`${beVietnam.variable} font-sans`}>
        {/* 4. Chỉ hiển thị Header nếu KHÔNG bị phạt */}
        {!isBanned && <Header />}

        <main>
          <Component {...pageProps} />
        </main>

        {/* 5. Chỉ hiển thị Footer và nút liên hệ nếu KHÔNG bị phạt */}
        {!isBanned && (
          <>
            <Footer />
            <FloatingContact />
          </>
        )}
      </div>
    </>
  );
}