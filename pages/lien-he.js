import Head from 'next/head';
import Link from 'next/link';

export default function LienHe() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-8">
      <Head>
        <title>Liên Hệ | Đồ Cũ Trung Kiên</title>
        <meta name="description" content="Liên hệ Đồ Cũ Trung Kiên - Thu mua đồ cũ, thanh lý nhà hàng, đồ gỗ tại TP.HCM. Hotline 24/7: 0398.771.444" />
      </Head>

      {/* Hero Section (Nhỏ gọn hơn) */}
      <div className="bg-[#111827] relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2e7d32]/20 to-transparent opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2e7d32]/20 via-transparent to-transparent blur-3xl pointer-events-none"></div>
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase mb-4 tracking-wider drop-shadow-lg">
            Liên Hệ <span className="text-[#388e3c]">Trung Kiên</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Hệ thống cửa hàng thu mua đồ cũ uy tín hàng đầu TP.HCM. Chúng tôi luôn sẵn sàng hỗ trợ khảo sát và tiến hành thu dọn 24/7 mọi nơi.
          </p>
        </div>
      </div>

      {/* Thay vì kéo dãn 1400px, chỉnh lại 1100px để tạo độ thuôn mượt */}
      <main className="max-w-[1100px] mx-auto px-6 md:px-10 py-12 md:py-16 -mt-10 md:-mt-14 relative z-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

          {/* Cột Trái: Hotline, Zalo, Email */}
          <div className="flex flex-col h-full bg-[#111827] rounded-3xl p-6 md:p-8 shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#388e3c]/20 blur-2xl rounded-full transition-transform duration-700 group-hover:scale-125"></div>

            <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 uppercase text-gray-100 flex items-center gap-3 relative z-10">
              <span className="w-1.5 h-6 bg-[#388e3c] rounded-full inline-block"></span>
              Tư Vấn Trực Tiếp
            </h3>

            <div className="relative z-10 flex flex-col gap-4 md:gap-5 flex-grow justify-center">

              {/* Điện Thoại */}
              <a href="tel:0398771444" className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#388e3c]/50 hover:bg-white/10 transition-all group/btn">
                <div className="bg-[#388e3c] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover/btn:scale-105 transition-transform relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#388e3c] opacity-50"></span>
                  <span className="text-lg md:text-xl relative z-10">📞</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[11px] md:text-[12px] uppercase font-bold tracking-widest mb-0.5 shadow-sm">Hotline Nhận Báo Giá</span>
                  <span className="text-white font-black text-xl md:text-2xl tracking-wider group-hover/btn:text-[#388e3c] transition-colors drop-shadow-md">0398.771.444</span>
                  <span className="text-gray-300 text-[12px] md:text-[13px] mt-0.5 font-medium italic">(Mr. Trung Kiên)</span>
                </div>
              </a>

              {/* Zalo */}
              <a href="https://zalo.me/0398771444" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#0068ff]/50 hover:bg-[#0068ff]/10 transition-all group/btn">
                <div className="bg-[#0068ff] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover/btn:scale-105 transition-transform shadow-[0_0_15px_rgba(0,104,255,0.4)]">
                  <span className="text-white font-black text-[12px] md:text-[14px]">Zalo</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[11px] md:text-[12px] uppercase font-bold tracking-widest mb-0.5 shadow-sm">Gửi Hình Ảnh Qua Zalo</span>
                  <span className="text-white font-black text-xl md:text-2xl tracking-wider group-hover/btn:text-[#0068ff] transition-colors drop-shadow-md">0398.771.444</span>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:docutrungkien@gmail.com" className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#388e3c]/50 hover:bg-white/10 transition-all group/btn">
                <div className="bg-[#2e7d32] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover/btn:scale-105 transition-transform">
                  <span className="text-lg md:text-xl">✉️</span>
                </div>
                <div className="flex flex-col items-start overflow-hidden">
                  <span className="text-gray-400 text-[11px] md:text-[12px] uppercase font-bold tracking-widest mb-0.5 shadow-sm">Địa Chỉ Email</span>
                  <span className="text-white font-medium text-[13px] md:text-[15px] group-hover/btn:text-[#388e3c] transition-colors truncate max-w-full">docutrungkien@gmail.com</span>
                </div>
              </a>

            </div>
          </div>

          {/* Cột Phải: Hệ Thống Chi Nhánh */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full justify-center">
            <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 uppercase text-gray-800 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#2e7d32] rounded-full inline-block"></span>
              Hệ Thống Chi Nhánh
            </h3>

            <ul className="flex flex-col flex-grow justify-center">
              <li className="flex items-start gap-3 md:gap-4 pb-4 md:pb-5 border-b border-gray-100 mb-4 md:mb-5 last:border-0 last:pb-0 last:mb-0">
                <div className="text-[#2e7d32] text-lg bg-orange-50 w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0">📍</div>
                <div className="leading-relaxed">
                  <strong className="text-gray-800 flex items-center gap-2 text-[14px] md:text-[15px] mb-1 uppercase font-black tracking-wide">
                    Chi Nhánh 1
                  </strong>
                  <span className="text-gray-600 text-[13px] md:text-[14px]">271 Bình Long, Phường Bình Hưng Hòa, Quận Bình Tân, TP.HCM</span>
                </div>
              </li>

              <li className="flex items-start gap-3 md:gap-4 pb-4 md:pb-5 border-b border-gray-100 mb-4 md:mb-5 last:border-0 last:pb-0 last:mb-0">
                <div className="text-gray-400 text-lg bg-gray-50 w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0">🏪</div>
                <div className="leading-relaxed">
                  <strong className="text-gray-800 flex items-center gap-2 text-[14px] md:text-[15px] mb-1 uppercase font-black tracking-wide">
                    Chi Nhánh 2
                  </strong>
                  <span className="text-gray-600 text-[13px] md:text-[14px]">207 Nơ Trang Long, Phường 12, Quận Bình Thạnh, TP.HCM</span>
                </div>
              </li>

              <li className="flex items-start gap-3 md:gap-4 pb-4 md:pb-5 border-b border-gray-100 mb-4 md:mb-5 last:border-0 last:pb-0 last:mb-0">
                <div className="text-gray-400 text-lg bg-gray-50 w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0">🏪</div>
                <div className="leading-relaxed">
                  <strong className="text-gray-800 flex items-center gap-2 text-[14px] md:text-[15px] mb-1 uppercase font-black tracking-wide">
                    Chi Nhánh 3
                  </strong>
                  <span className="text-gray-600 text-[13px] md:text-[14px]">553 Kha Vạn Cân, Phường Linh Đông, Quận Thủ Đức, TPHCM</span>
                </div>
              </li>

              <li className="flex items-start gap-3 md:gap-4 pb-4 md:pb-5 border-b border-gray-100 mb-4 md:mb-5 last:border-0 last:pb-0 last:mb-0">
                <div className="text-gray-400 text-lg bg-gray-50 w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0">🏪</div>
                <div className="leading-relaxed">
                  <strong className="text-gray-800 flex items-center gap-2 text-[14px] md:text-[15px] mb-1 uppercase font-black tracking-wide">
                    Chi Nhánh 4
                  </strong>
                  <span className="text-gray-600 text-[13px] md:text-[14px]">136 Đường Số 10, Phường Tân Quy, Quận 7, TPHCM</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bản Đồ Section (Thu nhỏ lại) */}
        <div className="mt-10 md:mt-12 bg-white rounded-3xl p-4 shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-gray-100 relative">
          <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 uppercase text-gray-800 text-center relative max-w-max mx-auto px-4 mt-4">
            Bản Đồ Cửa Hàng
            <div className="absolute -bottom-2 lg:-bottom-3 left-1/2 -translate-x-1/2 w-1/3 h-[3px] bg-gradient-to-r from-[#2e7d32] to-[#388e3c] rounded-full"></div>
          </h3>
          <div className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
            <iframe
              src="https://www.google.com/maps?q=271+Bình+Long,+Phường+Bình+Hưng+Hòa,+Quận+Bình+Tân,+TP.HCM&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3xl shadow-lg border border-gray-200"
            ></iframe>
          </div>
        </div>

      </main>
    </div>
  );
}
