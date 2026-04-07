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

  // BỘ ĐẾM CHỐNG F5 LIÊN TỤC
  useEffect(() => {
    // Nếu đang ở trang phạt rồi thì dừng lại, không chạy code bên dưới nữa
    if (router.pathname === '/access-denied-spam') {
      return;
    }

    const MAX_REQUESTS = 3;
    const TIME_WINDOW = 60000;

    const now = Date.now();
    let visits = JSON.parse(localStorage.getItem('user_visits') || '[]');

    // Lọc và chỉ giữ lại những lần truy cập trong vòng 1 phút đổ lại
    visits = visits.filter(time => now - time < TIME_WINDOW);

    // --- KIỂM TRA PHẠT ---
    if (visits.length >= MAX_REQUESTS) {
      console.log('Phát hiện F5 quá nhanh! Đang chặn...');
      // Chuyển hướng kẻ phá hoại sang trang báo lỗi
      router.push('/access-denied-spam');
      return;
    }

    // Ghi nhận lần truy cập mới này vào lịch sử
    visits.push(now);
    localStorage.setItem('user_visits', JSON.stringify(visits));
  }, []);

  // 3. Kiểm tra xem có đang ở trang phạt không
  const isBanned = router.asPath === '/access-denied-spam';

  return (
    <>
      <Head>
        <title>Đồ Cũ Trung Kiên - Thu Mua Giá Cao Tận Nơi</title>
        <meta name="description" content="Chuyên thu mua đồ gỗ, đồ cũ..." />
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