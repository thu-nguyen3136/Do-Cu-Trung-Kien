import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// Import component Sidebar của bạn
import Sidebar from '../components/Sidebar';

export default function ThanhLyNhaHangPage() {

  const hotline = "0398.771.444"; // Hotline cụ thể trong bài viết

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
        <title>Thanh Lý Nhà Hàng Trọn Gói Giá Cao TPHCM | Đồ Cũ TRung Kiên</title>
        <meta name="description" content="Đồ Cũ TRung Kiên chuyên thanh lý nhà hàng, thu mua trọn gói bàn ghế, thiết bị bếp công nghiệp, tủ đông tủ mát giá cao nhất TPHCM. Khảo sát nhanh 20 phút, tháo dỡ vận chuyển miễn phí." />
        <meta name="keywords" content="thanh lý nhà hàng, thu mua đồ cũ nhà hàng, thanh lý thiết bị bếp nhà hàng, đồ cũ TRung Kiên, thu mua bàn ghế nhà hàng giá cao" />
        <link rel="canonical" href="https://thumuadocutrungkien.com/thanh-ly-nha-hang" />
        <meta property="og:title" content="Dịch Vụ Thanh Lý Nhà Hàng Giá Cao Trọn Gói Tại TPHCM - TRung Kiên" />
        <meta property="og:description" content="Bạn cần thanh lý nhà hàng? TRung Kiên thu mua trọn gói tất cả nội thất, thiết bị bếp giá cao nhất thị trường. Thanh toán 1 lần, dọn dẹp sạch sẽ." />
        <meta property="og:type" content="article" />
      </Head>

      <main className="flex-grow">

        {/* ================= BREADCRUMB ================= */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#388e3c]">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Nhà Hàng</span>
          </div>
        </div>

        {/* ================= MAIN LAYOUT (GRID Layout an toàn) ================= */}
        <section className="max-w-[1200px] mx-auto px-4 py-8 md:py-12">
          {/* Lưới chia màn hình làm 4 phần: 3 phần bên trái cho Nội dung, 1 phần bên phải cho Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH (Chiếm 3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

              <h1 className="text-3xl md:text-5xl font-black text-[#111827] uppercase leading-tight tracking-tight mb-4 animate-fade-in">
                Thanh Lý Nhà Hàng
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-[#388e3c] mb-8 leading-snug border-l-4 border-[#388e3c] pl-4 animate-fade-in animation-delay-100">
                Thanh Lý Nhà Hàng - Dịch Vụ Thu Mua Nội Thất Giá Cao Tại TPHCM
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-10 space-y-4">
                <p>
                  Bạn đang có nhu cầu <strong className="text-[#111827]">thanh lý nhà hàng</strong> do thay đổi mô hình kinh doanh, sang nhượng mặt bằng, cải tạo lại không gian hay ngừng kinh doanh? Việc xử lý toàn bộ bàn ghế, thiết bị bếp, tủ lạnh, quầy bar, nội thất… luôn là bài toán khiến nhiều chủ đầu tư đau đầu. Hiểu được điều đó, <strong className="text-[#388e3c]">Đồ Cũ TRung Kiên</strong> tự hào là đơn vị hàng đầu chuyên thu mua toàn bộ nội thất nhà hàng, quán ăn, quán cafe với mức giá cao nhất thị trường.
                </p>
                <p className="border-l-4 border-gray-200 pl-6 italic font-medium">
                  Với dịch vụ chuyên nghiệp "không ngại đường xa, không lo về giá", chúng tôi cam kết mang đến giải pháp thanh lý nhanh chóng, trọn gói và tối ưu lợi ích cho khách hàng.
                </p>
              </div>

              {/* --- ẢNH 1: Tổng quan thanh lý nhà hàng --- */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-nha-hang.jpg"
                  alt="Dịch vụ thanh lý nhà hàng trọn gói giá cao Đồ Cũ TRung Kiên"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"; }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-sm text-center">
                  TRung Kiên thu mua trọn gói nội thất, thiết bị nhà hàng chuyên nghiệp
                </div>
              </div>

              {/* SECTION: Các Loại Nội Thất Được Thu Mua */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Các Loại Nội Thất Nhà Hàng Được Thu Mua Giá Cao
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Đồ Cũ TRung Kiên chuyên thu mua đa dạng các loại nội thất và thiết bị nhà hàng với nhiều chất liệu, kích thước khác nhau:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 text-gray-700 PROSE PROSE-LG max-w-none">
                  <div className="flex gap-3">
                    <span className="text-[#388e3c] mt-1 flex-shrink-0">🔹</span>
                    <p><strong className="text-[#111827]">Bàn ghế nhà hàng:</strong> Bàn ghế gỗ, bàn ghế giả mây, chân sắt, chân inox, ghế bọc nệm, plastic, bàn mặt đá, kính...</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#388e3c] mt-1 flex-shrink-0">🔹</span>
                    <p><strong className="text-[#111827]">Nội thất quầy bar & kệ:</strong> Quầy bar, tủ trưng bày, kệ rượu, quầy thu ngân...</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#388e3c] mt-1 flex-shrink-0">🔹</span>
                    <p><strong className="text-[#111827]">Thiết bị bếp nhà hàng:</strong> Bếp công nghiệp, tủ hút khói, lò nướng, tủ đông, tủ mát, máy rửa chén...</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#388e3c] mt-1 flex-shrink-0">🔹</span>
                    <p><strong className="text-[#111827]">Đồ dùng nhà hàng:</strong> Tủ lạnh, máy lạnh âm trần, tủ chén, xe đẩy thức ăn, dụng cụ pha chế...</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-6 flex gap-3">
                  <span className="text-[#388e3c] mt-1 flex-shrink-0">🔹</span>
                  <p><strong className="text-[#111827]">Đa dạng số lượng:</strong> Nhận thanh lý từ vài bộ bàn ghế đến toàn bộ hệ thống nhà hàng quy mô lớn.</p>
                </p>

                <p className="text-[#388e3c] leading-relaxed mt-8 font-medium italic bg-[#388e3c]/5 p-4 rounded-xl border border-[#388e3c]/10 flex items-center gap-3">
                  <svg className="w-10 h-10 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                  Chúng tôi đặc biệt ưu tiên thu mua các sản phẩm còn mới, chất lượng tốt, phù hợp để tái sử dụng.
                </p>
              </section>

              {/* --- ẢNH 2: Kho thiết bị bếp công nghiệp --- */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-nha-hang-uy-tin.jpg"
                  alt="Thu mua thiết bị bếp nhà hàng cũ giá cao TRung Kiên"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1581012772322-a6f99059f6b4?q=80&w=2000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Quy Trình Nhanh Gọn */}
              <section className="mb-12 bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 relative overflow-hidden">
                {/* Hiệu ứng nền */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#388e3c 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 relative z-10 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Quy Trình Thanh Lý Nhà Hàng Nhanh Gọn – Chuyên Nghiệp
                </h3>
                <p className="text-gray-700 leading-relaxed mb-10 relative z-10">
                  Quy trình thanh lý tại Đồ Cũ TRung Kiên được thiết kế đơn giản, minh bạch và nhanh chóng:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 relative z-10">
                  {[
                    { step: "1", title: "Tiếp nhận yêu cầu", desc: `Liên hệ qua Hotline ${hotline} hoặc gửi hình ảnh qua Zalo để được hỗ trợ ngay.` },
                    { step: "2", title: "Khảo sát thực tế", desc: "Nhân viên đến khảo sát thực tế tại nhà hàng (nếu cần) và báo giá chính xác." },
                    { step: "3", title: "Ký kết hợp đồng", desc: "Hai bên thống nhất mức giá và ký kết hợp đồng thanh lý." },
                    { step: "4", title: "Tháo dỡ & Thanh toán", desc: "Đội ngũ tháo dỡ, vận chuyển toàn bộ nội thất và thanh toán 100% giá trị ngay sau đó." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group">
                      <div className="w-14 h-14 bg-white border-4 border-[#388e3c]/20 text-[#388e3c] rounded-full flex items-center justify-center text-3xl font-black flex-shrink-0 group-hover:bg-[#388e3c] group-hover:text-white group-hover:border-[#388e3c] transition-all duration-300 shadow-md">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] text-lg uppercase group-hover:text-[#388e3c] transition-colors">{item.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 3: Vận chuyển, tháo dỡ nội thất nhà hàng --- */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-12 shadow-lg group w-full md:w-3/4 mx-auto">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-nha-hang-uy-tin.jpg"
                  alt="Đội ngũ TRung Kiên tháo dỡ vận chuyển nội thất nhà hàng chuyên nghiệp"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1600100236111-2d7c0f1352e8?q=80&w=2000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Cam Kết Dịch Vụ */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-10 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Cam Kết Dịch Vụ Thanh Lý Nhà Hàng Uy Tín
                </h3>
                <p className="text-gray-700 leading-relaxed mb-10">
                  Đồ Cũ TRung Kiên đặt uy tín làm kim chỉ nam và cam kết mang đến dịch vụ <strong className="text-[#111827]">thanh lý nhà hàng</strong> tốt nhất với những điều khoản rõ ràng:
                </p>

                <div className="space-y-6">
                  {[
                    { title: "Cam kết giá cao nhất:", desc: "Giá thu mua luôn cao hơn so với mặt bằng chung thị trường." },
                    { title: "Cam kết không phát sinh chi phí:", desc: "Miễn phí 100% chi phí tháo dỡ, vận chuyển, nhân công." },
                    { title: "Cam kết thanh toán nhanh chóng:", desc: "Thanh toán trọn gói một lần bằng tiền mặt hoặc chuyển khoản." },
                    { title: "Cam kết phục vụ tận nơi:", desc: "Nhận thu mua tại tất cả các quận/huyện trong TPHCM, Đồng Nai, Bình Dương..." },
                    { title: "Cam kết hoạt động 24/7:", desc: "Phục vụ mọi lúc, kể cả ngày lễ, cuối tuần, đáp ứng nhu cầu thanh lý gấp." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 items-start bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#388e3c]/20 hover:shadow-sm transition-all group">
                      <div className="w-10 h-10 rounded-full bg-[#388e3c]/10 flex items-center justify-center flex-shrink-0 text-[#388e3c]">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      </div>
                      <p className="text-gray-700 text-base leading-relaxed pt-1">
                        <strong className="text-[#111827] font-bold text-lg">{item.title}</strong> {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 4: Liên hệ báo giá siêu tốc --- */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-nha-hang-gia-cao.jpg"
                  alt="Liên hệ Đồ Cũ TRung Kiên thanh lý nhà hàng giá cao"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Khu Vực */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Khu Vực Chuyên Thu Mua - Có Mặt Sau 20 Phút
                </h3>
                <p className="text-gray-700 leading-relaxed mb-10 prose prose-lg max-w-none">
                  Đồ Cũ TRung Kiên hoạt động rộng khắp với đội ngũ nhân viên được phân bố tại nhiều khu vực, sẵn sàng có mặt chỉ sau <strong className="text-[#388e3c] font-black">20 phút</strong> khi nhận được cuộc gọi từ khách hàng.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 text-sm md:text-base text-gray-700">
                  <div className="space-y-3 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#388e3c]/10">
                    <p><strong className="text-[#111827] text-lg font-black uppercase tracking-wider block mb-3 border-b border-[#388e3c]/20 pb-2">TPHCM</strong></p>
                    <p>Tất cả các quận huyện từ trung tâm đến ngoại thành: Quận 1-12, Bình Thạnh, Phú Nhuận, Gò Vấp, Tân Bình, Tân Phú, Bình Tân, Thủ Đức, Hóc Môn, Củ Chi, Nhà Bè, Cần Giờ.</p>
                  </div>
                  <div className="space-y-3 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#388e3c]/10">
                    <p><strong className="text-[#111827] text-lg font-black uppercase tracking-wider block mb-3 border-b border-[#388e3c]/20 pb-2">Đồng Nai</strong></p>
                    <p>Biên Hòa, Long Khánh, Trảng Bom, Long Thành, Nhơn Trạch, Xuân Lộc.</p>
                  </div>
                  <div className="space-y-3 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#388e3c]/10">
                    <p><strong className="text-[#111827] text-lg font-black uppercase tracking-wider block mb-3 border-b border-[#388e3c]/20 pb-2">Bình Dương</strong></p>
                    <p>Thủ Dầu Một, Dĩ An, Thuận An, Bến Cát, Tân Uyên, Bàu Bàng, Dầu Tiếng, Phú Giáo, Bắc Tân Uyên.</p>
                  </div>
                  <div className="space-y-3 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#388e3c]/10">
                    <p><strong className="text-[#111827] text-lg font-black uppercase tracking-wider block mb-3 border-b border-[#388e3c]/20 pb-2">Các Tỉnh Lân Cận</strong></p>
                    <p>Long An, Tây Ninh, Bà Rịa - Vũng Tàu, Tiền Giang và các khu vực lân cận khác.</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mt-10 italic font-medium bg-[#111827] text-white p-6 rounded-2xl border border-gray-100">
                  Không ngại đường xa, không phân biệt quận huyện xa trung tâm, chỉ cần bạn có nhu cầu, chúng tôi đều sẵn sàng đến khảo sát và báo giá tận nơi.
                </p>
              </section>

              {/* Nút Gọi Ngay cuối bài */}
              <div className="mt-16 text-center border-t border-gray-100 pt-12 animate-fade-in-up animation-delay-300">
                <p className="text-xl font-bold text-[#111827] mb-6">Bạn cần thanh lý nhà hàng trọn gói? Kết nối ngay với TRung Kiên!</p>
                <a href={`tel:${hotline}`} className="group inline-flex items-center gap-4 bg-[#388e3c] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-lg hover:bg-[#2e7d32] transition-all shadow-[0_15px_30px_rgba(136,13,17,0.3)] hover:-translate-y-1">
                  <span className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">📞</span>
                  Gọi Ngay: {hotline}
                </a>
              </div>

            </article>

            {/* --- CỘT PHẢI: SIDEBAR (Chiếm 1/4) --- */}
            {/* Nhờ cấu trúc GridLayout và asidemin-w-0, Sidebar sẽ nằm đúng vị trí và không bị bóp méo */}
            <aside className="lg:col-span-1 w-full min-w-0 h-fit sticky top-[100px]">
              <Sidebar />
            </aside>

          </div>
        </section>

      </main>
    </div>
  );
}