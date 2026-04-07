import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1a1515] pt-16 pb-8 font-sans text-gray-100 border-t-4 border-[#388e3c] relative overflow-hidden">

      {/* Background decoration - Giữ nguyên hiệu ứng mờ đỏ */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#388e3c]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#388e3c]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">

        {/* === PHẦN TRÊN: BOX LIÊN HỆ NỔI BẬT (Ngắt khỏi cột 1) === */}
        <div className="bg-[#111827]/50 border border-white/10 rounded-3xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex-shrink-0">
            {/* Logo đã được chuyển lên đây để cân đối với khung liên hệ */}
            <div className="bg-white px-5 py-3 rounded-xl shadow-lg relative w-[180px] h-[50px]">
              <Image src="/logo-dai-trung-kien.jpg" alt="Đồ Cũ Trung Kiên" fill className="object-contain" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
            {/* Box Email */}
            <a href="mailto:docutrungkien@gmail.com" className="flex items-center gap-4 group">
              <div className="bg-[#2e7d32] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg border border-[#388e3c]">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Gửi Email</p>
                <span className="text-white font-medium text-[15px] group-hover:text-[#4caf50] transition-colors">docutrungkien@gmail.com</span>
              </div>
            </a>

            {/* Box Hotline */}
            <a href="tel:0398771444" className="flex items-center gap-4 group">
              <div className="bg-[#388e3c] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform relative shadow-lg">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#388e3c] opacity-50"></span>
                <svg className="w-5 h-5 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Hotline 24/7</p>
                <span className="text-white font-black text-[18px] tracking-wider group-hover:text-[#4caf50] transition-colors">0398.771.444</span>
              </div>
            </a>
          </div>
        </div>

        {/* === PHẦN DƯỚI: LƯỚI CHIA 3 CỘT (Đã cân bằng chiều cao) === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12">

          {/* Cột 1: Giới thiệu (Đã gọt gọn) */}
          <div className="transition-transform duration-300">
            <h3 className="text-white font-black text-[18px] md:text-[20px] mb-6 md:mb-8 uppercase flex items-center gap-3">
              <span className="w-2 h-6 bg-[#388e3c] rounded-sm inline-block"></span>
              Về Chúng Tôi
            </h3>
            <p className="text-gray-300 leading-relaxed text-[15px] text-justify drop-shadow-sm">
              <strong className="text-white">Đồ Cũ Trung Kiên</strong> là đơn vị hàng đầu chuyên thu mua đồ cũ, cửa cũ, đồ gỗ, và nhận thanh lý nhà hàng, quán ăn, khách sạn, kho xưởng với giá cao nhất tại TP.HCM.
            </p>
            <p className="text-gray-300 leading-relaxed text-[15px] mt-4 border-l-2 border-[#388e3c] pl-4 italic">
              Phương châm làm việc: <span className="text-[#4caf50] font-bold">Uy tín - Nhanh chóng - Chuyên nghiệp.</span>
            </p>
          </div>

          {/* Cột 2: Hệ Thống Cửa Hàng */}
          <div className="transition-transform duration-300">
            <h3 className="text-white font-black text-[18px] md:text-[20px] mb-6 md:mb-8 uppercase flex items-center gap-3">
              <span className="w-2 h-6 bg-[#388e3c] rounded-sm inline-block"></span>
              Hệ Thống Cửa Hàng
            </h3>
            <ul className="space-y-5 text-gray-100 text-[14px] md:text-[15px]">
              {[
                { label: "Chi Nhánh 1", addr: "271 Bình Long, Phường Bình Hưng Hòa, Quận Bình Tân, TP.HCM" },
                { label: "Chi Nhánh 2", addr: "207 Nơ Trang Long, Phường 12, Quận Bình Thạnh, TP.HCM" },
                { label: "Chi Nhánh 3", addr: "553 Kha Vạn Cân, Phường Linh Đông, Quận Thủ Đức, TPHCM" },
                { label: "Chi Nhánh 4", addr: "136 Đường Số 10, Phường Tân Quy, Quận 7, TPHCM" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group cursor-default">
                  <div className="bg-[#388e3c] mt-1 p-1.5 rounded-lg shadow-md flex-shrink-0 group-hover:bg-[#4caf50] transition-all">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="drop-shadow-sm leading-snug">
                    <strong className="text-white block sm:inline font-bold uppercase text-[13px]">{item.label}:</strong> {item.addr}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Dịch vụ mới nhất */}
          <div className="transition-transform duration-300">
            <h3 className="text-white font-black text-[18px] md:text-[20px] mb-6 md:mb-8 uppercase flex items-center gap-3">
              <span className="w-2 h-6 bg-[#388e3c] rounded-sm inline-block"></span>
              Dịch Vụ Nổi Bật
            </h3>
            <ul className="space-y-4 text-white text-[15px] font-medium">
              {[
                { title: "Thu Mua Nội Thất Khách Sạn", href: "/thu-mua-noi-that-khach-san" },
                { title: "Thanh Lý Quán Cafe", href: "/thanh-ly-quan-cafe" },
                { title: "Thanh Lý Nhà Hàng, Quán Ăn", href: "/thanh-ly-nha-hang" },
                { title: "Thu Mua Tủ Đông, Tủ Mát", href: "/thu-mua-tu-dong-tu-mat" },
                { title: "Thu Mua Đồ Cũ Gia Đình", href: "/thu-mua-do-cu-gia-dinh" }
              ].map((svc, idx) => (
                <li key={idx}>
                  <Link href={svc.href} className="flex items-center gap-3 hover:text-[#4caf50] hover:translate-x-2 transition-all group">
                    <span className="w-2 h-2 rounded-full bg-[#388e3c] group-hover:bg-[#4caf50] transition-colors shadow-sm"></span>
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* === DÒNG BẢN QUYỀN === */}
        <div className="border-t border-white/10 pt-8 pb-2 text-center flex flex-col items-center">
          <p className="text-gray-400 text-[14px]">
            Copyright © {new Date().getFullYear()} <span className="text-[#4caf50] font-bold tracking-wider">ĐỒ CŨ TRUNG KIÊN</span>. All rights reserved.
          </p>
        </div>
      </div>
      <a
        href="/admin-dashboard-access"
        style={{ display: 'none' }}
        aria-hidden="true"
      >
        Admin Login
      </a>

    </footer>
  );
}
