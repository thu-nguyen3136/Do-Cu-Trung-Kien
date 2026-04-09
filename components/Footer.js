import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#111827] to-[#0a0f1a] pt-16 pb-6 font-sans text-gray-300 border-t-[4px] border-[#388e3c] relative overflow-hidden">

      {/* Background decoration - Orbs phát sáng */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#388e3c]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#388e3c]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10">

        {/* === PHẦN TRÊN: BOX LIÊN HỆ KÍNH MỜ (Glassmorphism) === */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 md:p-10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">

          {/* Logo (Đã được làm to hơn) */}
          <div className="flex-shrink-0">
            <div className="bg-white p-2 rounded-2xl shadow-xl relative w-[260px] md:w-[300px] h-[80px] md:h-[95px] hover:scale-105 transition-transform duration-500">
              <Image src="/logo-dai-trung-kien.jpg" alt="Đồ Cũ Trung Kiên" fill className="object-contain p-1" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-12 w-full lg:w-auto">
            {/* Box Email */}
            <a href="mailto:docutrungkien@gmail.com" className="flex items-center gap-4 xl:gap-5 group w-full lg:w-auto lg:min-w-[320px] xl:min-w-[380px] bg-white/5 px-5 py-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-all overflow-hidden">
              <div className="bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(56,142,60,0.3)] group-hover:shadow-[0_0_25px_rgba(56,142,60,0.6)] transition-all">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="overflow-x-auto custom-scrollbar-hide">
                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest mb-1">Gửi Email Liên Hệ</p>
                <span className="text-white font-bold text-[15px] xl:text-[17px] whitespace-nowrap group-hover:text-[#4caf50] transition-colors">docutrungkien@gmail.com</span>
              </div>
            </a>

            {/* Box Hotline */}
            <a href="tel:0398771444" className="flex items-center gap-5 group flex-1 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-all">
              <div className="bg-gradient-to-br from-[#4caf50] to-[#2e7d32] w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 relative shadow-[0_0_15px_rgba(76,175,80,0.3)]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4caf50] opacity-40"></span>
                <svg className="w-6 h-6 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest mb-1">Hotline Phục Vụ 24/7</p>
                <span className="text-white font-black text-[22px] tracking-wide group-hover:text-[#4caf50] transition-colors">0398.771.444</span>
              </div>
            </a>
          </div>
        </div>

        {/* === PHẦN DƯỚI: LƯỚI CHIA 3 CỘT === */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-16">

          {/* Cột 1: Giới thiệu (Chiếm 4 cột grid) */}
          <div className="md:col-span-4">
            <h3 className="text-white font-bold text-xl mb-6 relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-[#4caf50] after:rounded-full uppercase tracking-wide">
              Về Chúng Tôi
            </h3>
            <p className="text-gray-400 leading-relaxed text-[15px] text-justify mb-6">
              <strong className="text-white font-semibold">Đồ Cũ Trung Kiên</strong> là đơn vị hàng đầu chuyên thu mua đồ cũ, cửa cũ, đồ gỗ, và nhận thanh lý nhà hàng, quán ăn, khách sạn, kho xưởng với giá cao nhất tại TP.HCM.
            </p>
            <div className="bg-[#388e3c]/10 border border-[#388e3c]/20 p-4 rounded-xl">
              <p className="text-gray-300 text-[14px] m-0 italic flex items-start gap-2">
                Phương châm làm việc: <span className="text-white font-bold">Uy tín - Nhanh chóng - Chuyên nghiệp.</span>
              </p>
            </div>
          </div>

          {/* Cột 2: Hệ Thống Cửa Hàng (Chiếm 5 cột grid) */}
          <div className="md:col-span-5">
            <h3 className="text-white font-bold text-xl mb-6 relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-[#4caf50] after:rounded-full uppercase tracking-wide">
              Hệ Thống Cửa Hàng
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Chi Nhánh 1", addr: "271 Bình Long, P. Bình Hưng Hòa, Q. Bình Tân, TP.HCM" },
                { label: "Chi Nhánh 2", addr: "207 Nơ Trang Long, Phường 12, Q. Bình Thạnh, TP.HCM" },
                { label: "Chi Nhánh 3", addr: "553 Kha Vạn Cân, Phường Linh Đông, Q. Thủ Đức, TPHCM" },
                { label: "Chi Nhánh 4", addr: "136 Đường Số 10, Phường Tân Quy, Quận 7, TPHCM" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group cursor-default">
                  <div className="text-[#4caf50] mt-0.5 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-white font-bold text-[13px] uppercase mb-0.5 tracking-wider">{item.label}</span>
                    <span className="text-gray-400 text-[14px] leading-snug">{item.addr}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Dịch vụ mới nhất (Chiếm 3 cột grid) */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold text-xl mb-6 relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-[#4caf50] after:rounded-full uppercase tracking-wide">
              Dịch Vụ Nổi Bật
            </h3>
            <ul className="space-y-1">
              {[

                { title: "Thanh Lý Quán Cafe", href: "/thanh-ly-quan-cafe" },
                { title: "Thanh Lý Nhà Hàng", href: "/thanh-ly-nha-hang" },
                { title: "Thu Mua Tủ Đông, Tủ Mát", href: "/thu-mua-tu-dong-tu-mat" },
                { title: "Thu Mua Đồ Cũ Gia Đình", href: "/thu-mua-do-cu-gia-dinh" },
                { title: "Thu Mua Nội Thất Khách Sạn", href: "/thu-mua-noi-that-khach-san" }
              ].map((svc, idx) => (
                <li key={idx}>
                  <Link href={svc.href} className="group flex items-start gap-3 py-2 text-gray-400 hover:text-white transition-colors">
                    <span className="text-[#4caf50] mt-0.5 group-hover:translate-x-1 transition-transform">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="text-[14.5px] font-medium group-hover:translate-x-1 transition-transform">{svc.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* === DÒNG BẢN QUYỀN (Đã canh giữa hoàn toàn) === */}
        <div className="border-t border-white/10 pt-6 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-gray-500 text-[14px]">
            Copyright © {new Date().getFullYear()} <span className="text-[#4caf50] font-bold tracking-wider">ĐỒ CŨ TRUNG KIÊN</span>. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Điều khoản dịch vụ</span>
            <span className="text-gray-700">|</span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Chính sách bảo mật</span>
          </div>
        </div>
      </div>

      {/* Admin Login Link (Ẩn) */}
      <a href="/admin-dashboard-access" style={{ display: 'none' }} aria-hidden="true">
        Admin Login
      </a>
    </footer>
  );
}