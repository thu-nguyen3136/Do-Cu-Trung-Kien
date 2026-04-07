// pages/access-denied-spam.js
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function AccessDenied() {
  const [rayId, setRayId] = useState('');

  useEffect(() => {
    // Tạo một mã Ray ID giả ngẫu nhiên cho giống hệt Cloudflare thật
    setRayId(Math.random().toString(36).substring(2, 15).toUpperCase());
  }, []);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', color: '#2c3e50', fontFamily: 'system-ui, sans-serif' }}>
      <Head>
        <title>Access Denied</title>
      </Head>

      <div style={{ textAlign: 'center', maxWidth: '600px', padding: '20px' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', margin: '0', color: '#e74c3c' }}>
          Error 1020
        </h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'normal', marginTop: '10px' }}>
          Access Denied
        </h2>

        <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid #eaeaea', textAlign: 'left', color: '#555', fontSize: '1rem', lineHeight: '1.6' }}>
          <p style={{ fontWeight: 'bold' }}>What happened?</p>
          <p>This website is using a security service to protect itself from online attacks. The action you just performed triggered the security solution. Your IP address has been flagged and permanently blocked from accessing this resource.</p>

          <div style={{ marginTop: '30px', fontSize: '0.85rem', color: '#999', fontFamily: 'monospace' }}>
            <p>Cloudflare Ray ID: {rayId}</p>
            <p>Your IP: •••••••••••</p>
            <p>Performance & security by Cloudflare</p>
          </div>
        </div>
      </div>
    </div>
  );
}