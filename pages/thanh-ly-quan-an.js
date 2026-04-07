import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThanhLyQuanAnPage() {
  const hotline = "0398.771.444";

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
        <title>Thanh Lý Quán Ăn Giá Cao TPHCM | Thu Mua Trọn Gói TRung Kiên</title>
        <meta name="description" content="Đồ Cũ TRung Kiên chuyên thanh lý quán ăn, thu mua bàn ghế, nội thất quán ăn giá cao nhất TPHCM & các tỉnh. Khảo sát tận nơi sau 20 phút, tháo dỡ vận chuyển miễn phí." />
        <meta name="keywords" content="thanh lý quán ăn, thu mua bàn ghế quán ăn, thanh lý nội thất quán ăn, đồ cũ TRung Kiên, thanh lý quán ăn tphcm giá cao" />
        <link rel="canonical" href="https://thumuadocutrungkien.com/thanh-ly-quan-an" />
        <meta property="og:title" content="Dịch Vụ Thanh Lý Quán Ăn Trọn Gói Giá Cao TPHCM - TRung Kiên" />
        <meta property="og:description" content="Bạn cần thanh lý quán ăn? TRung Kiên thu mua trọn gói bàn ghế, thiết bị bếp, tủ lạnh giá cao nhất thị trường. Thanh toán 1 lần, dọn dẹp sạch sẽ." />
        <meta property="og:type" content="article" />
      </Head>

      <main className="flex-grow">

        {/* ================= BREADCRUMB ================= */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#388e3c] transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Quán Ăn</span>
          </div>
        </div>

        {/* ================= MAIN LAYOUT (GRID Layout 4 Cột An Toàn) ================= */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH (Chiếm 3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">

              <h1 className="text-3xl md:text-5xl font-black text-[#111827] uppercase leading-tight tracking-tight mb-4">
                Thanh Lý Quán Ăn
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-[#388e3c] mb-8 leading-snug border-l-4 border-[#388e3c] pl-4">
                Thanh Lý Quán Ăn - Dịch Vụ Thu Mua Nội Thất Giá Cao Tại TPHCM & Các Tỉnh
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-10 space-y-4">
                <p>
                  Bạn đang có nhu cầu <strong className="text-[#111827]">thanh lý quán ăn</strong>, đổi mới nội thất hay ngừng kinh doanh? Bạn lo lắng về giá cả, thủ tục phức tạp và chi phí vận chuyển? Đừng lo, <strong className="text-[#388e3c]">Đồ Cũ TRung Kiên</strong> chính là đơn vị uy tín hàng đầu chuyên thu mua bàn ghế quán ăn và toàn bộ nội thất quán ăn với mức giá cao nhất thị trường khu vực TPHCM và các tỉnh lân cận.
                </p>
              </div>

              {/* --- ẢNH 1: Tổng quan thanh lý quán ăn --- */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-quan-an-uy-tin-tphcm.jpg"
                  alt="Dịch vụ thanh lý quán ăn trọn gói giá cao TRung Kiên"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=1000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Vì Sao Nên Chọn */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Vì Sao Nên Chọn Đồ Cũ TRung Kiên?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Khi bạn cần <strong className="text-[#111827]">thanh lý quán ăn</strong>, việc tìm được đơn vị vừa trả giá cao vừa hỗ trợ trọn gói là điều vô cùng quan trọng. TRung Kiên tự hào là địa chỉ tin cậy với những ưu điểm vượt trội:
                </p>

                <div className="flex flex-col gap-5">
                  {[
                    {
                      icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                      title: "Báo giá cao và cạnh tranh nhất",
                      desc: "Chúng tôi cam kết không ép giá, đưa ra mức giá tốt nhất dựa trên số lượng, tình trạng, chất liệu và mẫu mã sản phẩm."
                    },
                    {
                      icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
                      title: "Khảo sát báo giá tận nơi",
                      desc: `Chỉ cần gọi đến Hotline: ${hotline}, chúng tôi sẽ có mặt sau 20 phút để khảo sát và báo giá trực tiếp, không ngại khoảng cách địa lý.`
                    },
                    {
                      icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10h1m10 0h-1M5 16H4m10 0h-1m1 0h2l4-4v-4h-4v8z" /></svg>,
                      title: "Miễn phí tháo dỡ, vận chuyển & Thanh toán 100%",
                      desc: "Chúng tôi có đội ngũ giàu kinh nghiệm, thực hiện tháo dỡ, vận chuyển nhanh gọn mà không phát sinh chi phí nào."
                    },
                    {
                      icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                      title: "Hỗ trợ chiết khấu cao",
                      desc: "Nếu bạn giới thiệu bạn bè, người thân có nhu cầu thanh lý, chúng tôi sẽ có mức chiết khấu hấp dẫn dành cho bạn."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start md:items-center gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-full bg-[#388e3c] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 group-hover:bg-[#2e7d32] transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] text-lg uppercase group-hover:text-[#388e3c] transition-colors">{item.title}</h4>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 2: Kho bàn ghế cũ thu mua --- */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-quan-an-tron-goi.jpg"
                  alt="Thu mua đa dạng các loại bàn ghế quán ăn cũ giá cao"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=1000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Các Loại Nội Thất Được Thu Mua */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Các Loại Nội Thất Được Thu Mua
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Đồ Cũ TRung Kiên chuyên thu mua đa dạng các loại nội thất quán ăn, quán cafe với nhiều chất liệu và kích thước khác nhau, bao gồm:
                </p>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#388e3c] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <p><strong className="text-[#111827]">Thu mua bàn ghế các loại:</strong> Bàn ghế gỗ, bàn ghế sắt, bàn mặt đá, mặt kính, ghế đôn, ghế bọc nệm...</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#388e3c] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <p><strong className="text-[#111827]">Thu mua nội thất quán ăn:</strong> Quầy bar, kệ trưng bày, tủ đựng đồ, máy móc thiết bị pha chế...</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#388e3c] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <p><strong className="text-[#111827]">Thu mua đồ dùng quán ăn:</strong> Bếp công nghiệp, tủ lạnh, máy lạnh, quạt, dàn âm thanh...</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#388e3c] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <p><strong className="text-[#111827]">Đa dạng kích thước:</strong> Phù hợp với mọi không gian và phong cách từ nhỏ đến lớn.</p>
                    </li>
                  </ul>
                </div>
                <p className="text-[#388e3c] leading-relaxed mt-6 font-medium italic border-l-4 border-[#388e3c] pl-4">
                  * Chúng tôi đặc biệt nhận thanh lý các sản phẩm còn mới, chất lượng tốt, đáp ứng nhu cầu tái sử dụng cao.
                </p>
              </section>



              {/* SECTION: Quy Trình Nhanh Gọn */}
              <section className="mb-12 bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#388e3c 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 relative z-10 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Quy Trình Thanh Lý Nhanh Gọn
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                  Quy trình thanh lý tại Đồ Cũ TRung Kiên được thiết kế đơn giản, minh bạch và nhanh chóng để tiết kiệm tối đa thời gian cho khách hàng:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                  {[
                    { step: "1", title: "Liên hệ", desc: `Liên hệ với chúng tôi qua Hotline ${hotline} hoặc gửi hình ảnh sản phẩm qua Zalo.` },
                    { step: "2", title: "Khảo sát", desc: "Đội ngũ nhân viên đến khảo sát tận nơi và báo giá chính xác." },
                    { step: "3", title: "Thống nhất", desc: "Thống nhất mức giá và tiến hành thanh lý." },
                    { step: "4", title: "Thanh toán", desc: "Chúng tôi thực hiện tháo dỡ, vận chuyển và thanh toán 100% giá trị hợp đồng ngay sau đó." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="w-14 h-14 mx-auto bg-white border-4 border-[#388e3c]/20 text-[#388e3c] rounded-full flex items-center justify-center text-3xl font-black flex-shrink-0 group-hover:bg-[#388e3c] group-hover:text-white transition-all duration-300 shadow-md">
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

              {/* --- ẢNH 4: Đội ngũ vận chuyển chuyên nghiệp --- */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-quan-an-tphcm.jpg"
                  alt="TRung Kiên hỗ trợ tháo dỡ và vận chuyển đồ cũ quán ăn miễn phí"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=1000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Cam Kết */}
              <section className="mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Cam Kết Của Chúng Tôi
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Chúng tôi đặt uy tín lên hàng đầu và cam kết mang đến dịch vụ <strong className="text-[#111827]">thanh lý quán ăn</strong> tốt nhất với những điều khoản rõ ràng:
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Cam kết giá cao nhất:", desc: "Giá thu mua luôn cao hơn thị trường." },
                    { title: "Cam kết không phát sinh chi phí:", desc: "Miễn phí vận chuyển, tháo dỡ hoàn toàn." },
                    { title: "Cam kết thanh toán nhanh chóng:", desc: "Thanh toán trọn gói 100% một lần." },
                    { title: "Cam kết phục vụ tận nơi:", desc: "Nhận thu mua ở tất cả các quận/huyện tại TPHCM, Đồng Nai, Bình Dương và lân cận." },
                    { title: "Cam kết thời gian linh hoạt:", desc: "Hoạt động 24/24, tất cả các ngày trong tuần, sẵn sàng phục vụ khi bạn cần." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center bg-white p-4 rounded-xl border border-gray-100 hover:border-[#388e3c]/20 hover:shadow-sm transition-all group">
                      <div className="w-8 h-8 rounded-full bg-[#388e3c]/10 flex items-center justify-center flex-shrink-0 text-[#388e3c] group-hover:bg-[#388e3c] group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      </div>
                      <p className="text-gray-700 text-base">
                        <strong className="text-[#111827]">{item.title}</strong> {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Nút Gọi Ngay cuối bài */}
              <div className="mt-16 bg-[#111827] rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#388e3c 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-4">Kết nối ngay với TRung Kiên</h3>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Bạn cần thanh lý quán ăn trọn gói? Gọi ngay hoặc gửi hình qua Zalo để nhận báo giá tốt nhất!</p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href={`tel:${hotline}`} className="group inline-flex items-center justify-center gap-3 bg-[#388e3c] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-lg hover:bg-[#2e7d32] transition-all shadow-[0_10px_20px_rgba(136,13,17,0.3)] hover:-translate-y-1">
                      <span className="animate-pulse">📞</span> {hotline}
                    </a>
                    <a href={`https://zalo.me/${hotline.replace(/\./g, '')}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 bg-white text-[#111827] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-lg hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1 border border-transparent">
                      Chat Zalo
                    </a>
                  </div>
                </div>
              </div>

            </article>

            {/* --- CỘT PHẢI: SIDEBAR (Chiếm 1/4 trên Desktop) --- */}
            <aside className="lg:col-span-1 w-full min-w-0 h-fit sticky top-[100px]">
              <Sidebar />
            </aside>

          </div>
        </section>

      </main>
    </div>
  );
}