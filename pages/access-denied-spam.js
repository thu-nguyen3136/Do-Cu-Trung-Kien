// pages/access-denied-spam.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SEOHead from '../components/SEOHead';

export default function AccessDenied() {
  const [rayId, setRayId] = useState('');
  const [countdown, setCountdown] = useState(30);
  const router = useRouter();

  useEffect(() => {
    setRayId(Math.random().toString(36).substring(2, 15).toUpperCase());

    const timer = setInterval(() => {
      const now = Date.now();
      const bannedUntil = Number(localStorage.getItem('f5_banned_until') || 0);

      if (bannedUntil <= now) {
        clearInterval(timer);
        localStorage.removeItem('f5_banned_until');
        localStorage.removeItem('user_visits');
        router.push('/');
      } else {
        const remaining = Math.max(0, Math.ceil((bannedUntil - now) / 1000));
        setCountdown(remaining);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  const handleRetry = () => {
    localStorage.removeItem('f5_banned_until');
    localStorage.removeItem('user_visits');
    router.push('/');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', color: '#2c3e50', fontFamily: 'system-ui, sans-serif', padding: '20px' }}>
      <SEOHead
        title="Truy Cập Bị Giới Hạn | Đồ Cũ Trung Kiên"
        description="Truy cập bị giới hạn tạm thời do thao tác tải lại trang quá nhanh."
        canonical="/access-denied-spam"
        noindex={true}
      />

      <div style={{ textAlign: 'center', maxWidth: '600px', width: '100%' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0', color: '#e74c3c' }}>
          Error 1020
        </h1>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 'normal', marginTop: '10px' }}>
          Access Temporarily Restricted
        </h2>

        <div style={{ marginTop: '30px', paddingTop: '25px', borderTop: '1px solid #eaeaea', textAlign: 'left', color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>
          <p style={{ fontWeight: 'bold' }}>Phát hiện thao tác tải lại trang quá nhanh!</p>
          <p>Hệ thống tự động tạm ngưng phiên truy cập của bạn để ngăn chặn các phần mềm tự động (bot) làm nghẽn máy chủ.</p>

          <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #388e3c' }}>
            <p style={{ margin: 0, fontWeight: '500', color: '#333' }}>
              Tự động mở khóa và quay lại trang chủ sau: <span style={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '1.1rem' }}>{countdown}</span> giây
            </p>
          </div>

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            {countdown === 0 ? (
              <button
                onClick={handleRetry}
                style={{ padding: '10px 24px', backgroundColor: '#388e3c', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Quay lại trang chủ ngay
              </button>
            ) : (
              <p style={{ fontSize: '0.85rem', color: '#888' }}>Vui lòng đợi đồng hồ đếm ngược kết thúc...</p>
            )}
          </div>

          <div style={{ marginTop: '30px', fontSize: '0.8rem', color: '#999', fontFamily: 'monospace' }}>
            <p>Security Ray ID: {rayId}</p>
            <p>Security verification by Antispam Shield</p>
          </div>
        </div>
      </div>
    </div>
  );
}