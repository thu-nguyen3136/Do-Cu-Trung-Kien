import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThanhLyQuanNhauPage() {
  const hotline = "0398.771.444";

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
        <title>Thanh Lý Quán Nhậu Trọn Gói Giá Cao TPHCM | Đồ Cũ TRung Kiên</title>
        <meta name="description" content="Đồ Cũ TRung Kiên chuyên thu mua trọn gói quán nhậu uy tín, giá cao nhất thị trường TPHCM. Thu mua bàn ghế, thiết bị bếp, quầy bar. Khảo sát 20p, tháo dỡ miễn phí." />
        <meta name="keywords" content="thanh lý quán nhậu, thu mua quán nhậu, thu mua bàn ghế quán nhậu, đồ cũ TRung Kiên, thanh lý thiết bị bếp quán nhậu" />
        <link rel="canonical" href="https://thumuadocutrungkien.com/thanh-ly-quan-nhau" />
        <meta property="og:title" content="Dịch Vụ Thanh Lý Quán Nhậu Trọn Gói Giá Cao Tại TPHCM - TRung Kiên" />
        <meta property="og:description" content="Cần thanh lý quán nhậu? TRung Kiên thu mua trọn gói bàn ghế, bếp công nghiệp, quầy bar với giá cao nhất. Miễn phí tháo dỡ vận chuyển." />
        <meta property="og:type" content="article" />
      </Head>

      <main className="flex-grow">

        {/* ================= BREADCRUMB ================= */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#388e3c] transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Quán Nhậu</span>
          </div>
        </div>

        {/* ================= MAIN LAYOUT (GRID Layout an toàn) ================= */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH (Chiếm 3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

              <h1 className="text-3xl md:text-5xl font-black text-[#111827] uppercase leading-tight tracking-tight mb-4">
                Thanh Lý Quán Nhậu
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-[#388e3c] mb-8 leading-snug border-l-4 border-[#388e3c] pl-4">
                Thu Mua Quán Nhậu Trọn Gói Tại TPHCM
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-10 space-y-4">
                <p>
                  <strong className="text-[#388e3c]">Cửa hàng đồ cũ TRung Kiên</strong> – đơn vị chuyên <strong className="text-[#111827]">thu mua trọn gói quán nhậu</strong> uy tín với mức giá cao nhất thị trường tại TPHCM và các tỉnh lân cận. Chúng tôi nhận thu mua đa dạng các mặt hàng, nội thất quán nhậu, khảo sát và báo giá nhanh, không mất thời gian chờ đợi lâu.
                </p>
              </div>

              {/* --- ẢNH 1: Tổng quan thanh lý quán nhậu --- */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-quan-nhau.jpg"
                  alt="Dịch vụ thanh lý quán nhậu trọn gói giá cao Đồ Cũ TRung Kiên"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop"; }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-sm text-center">
                  TRung Kiên thu mua trọn gói nội thất, bàn ghế quán nhậu chuyên nghiệp
                </div>
              </div>

              {/* SECTION: Những Vật Dụng Được Thu Mua */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Những Vật Dụng Sẽ Được Thu Mua Với Giá Cao Nhất
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Khi thanh lý quán nhậu, không chỉ là bàn ghế, chúng tôi thu mua gần như tất cả mọi thứ trong quán. Từ những món đồ nhỏ nhất đến cả hệ thống bếp công nghiệp đồ sộ. Cụ thể:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                  {/* Cột 1 */}
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="text-lg font-black text-[#111827] mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                      <span className="text-[#388e3c]">1.</span> Bộ Bàn Ghế
                    </h4>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#388e3c] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Bàn ghế gỗ công nghiệp, tự nhiên, bàn mặt đá, mặt kính.</li>
                      <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#388e3c] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Ghế nhựa cao cấp, giả mây, bọc nệm, inox, ghế xoay.</li>
                      <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#388e3c] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Bàn nhậu inox, bàn nhôm, bàn gỗ chân sắt.</li>
                    </ul>
                  </div>

                  {/* Cột 2 */}
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="text-lg font-black text-[#111827] mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                      <span className="text-[#388e3c]">2.</span> Khu Vực Bếp
                    </h4>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#388e3c] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Bếp công nghiệp các loại: bếp ga, điện, than, lẩu.</li>
                      <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#388e3c] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Tủ đông, tủ mát, tủ đá, tủ mát 2 cánh, 4 cánh.</li>
                      <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#388e3c] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Máy hút mùi, hệ thống hút khói, lò nướng, lò vi sóng.</li>
                      <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#388e3c] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Chảo, nồi, xoong, niêu đất – đồ nhà bếp số lượng lớn.</li>
                    </ul>
                  </div>

                  {/* Cột 3 */}
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="text-lg font-black text-[#111827] mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                      <span className="text-[#388e3c]">3.</span> Quầy Bar – Khu Vực Pha Chế
                    </h4>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#388e3c] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Quầy bar gỗ, quầy pha chế inox, kệ trưng bày rượu, tủ rượu.</li>
                      <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#388e3c] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Máy pha bia tươi, thùng đá, bồn rửa công nghiệp.</li>
                    </ul>
                  </div>

                  {/* Cột 4 */}
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="text-lg font-black text-[#111827] mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                      <span className="text-[#388e3c]">4.</span> Thiết Bị Điện – Không Gian
                    </h4>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#388e3c] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Máy lạnh âm trần, máy lạnh treo tường các loại.</li>
                      <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#388e3c] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Tủ lạnh, tủ trưng bày đồ uống, máy nước nóng.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* --- ẢNH 2: Thiết bị bếp và đồ dùng quán nhậu --- */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-quan-nhau-tan-binh.jpg"
                  alt="Thu mua thiết bị bếp, bàn ghế quán nhậu cũ giá cao"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Lý Do Chọn TRung Kiên */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Lý Do Đồ Cũ TRung Kiên Là Sự Lựa Chọn Hàng Đầu
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-5 items-start p-5 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 group">
                    <div className="w-12 h-12 rounded-xl bg-[#388e3c]/10 flex items-center justify-center flex-shrink-0 text-[#388e3c] group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#111827] mb-2">Báo giá cao nhất thị trường – không ép giá</h4>
                      <p className="text-gray-600 leading-relaxed">Chúng tôi định giá dựa trên chất lượng, số lượng và giá trị thực của từng món đồ. Cam kết mức giá cao hơn mọi đơn vị khác bạn từng hỏi.</p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start p-5 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 group">
                    <div className="w-12 h-12 rounded-xl bg-[#388e3c]/10 flex items-center justify-center flex-shrink-0 text-[#388e3c] group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#111827] mb-2">Khảo sát tận nơi – 20 phút là có mặt</h4>
                      <p className="text-gray-600 leading-relaxed">Chỉ một cuộc gọi đến <strong>{hotline}</strong>, xe của chúng tôi sẽ có mặt ngay, bất kể bạn ở trung tâm hay vùng ven.</p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start p-5 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 group">
                    <div className="w-12 h-12 rounded-xl bg-[#388e3c]/10 flex items-center justify-center flex-shrink-0 text-[#388e3c] group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10h1m10 0h-1M5 16H4m10 0h-1m1 0h2l4-4v-4h-4v8z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#111827] mb-2">Miễn phí tháo dỡ – vận chuyển – thanh toán 100%</h4>
                      <p className="text-gray-600 leading-relaxed">Đội ngũ nhân viên của chúng tôi sẽ tự tay tháo dỡ, bốc xếp, vận chuyển toàn bộ. Bạn chỉ việc ngồi uống trà và đếm tiền.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* --- ẢNH 3: Khảo sát và vận chuyển --- */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-12 shadow-lg group w-full md:w-3/4 mx-auto">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-quan-nhau-gia-cao.jpg"
                  alt="Nhân viên TRung Kiên khảo sát và tháo dỡ quán nhậu chuyên nghiệp"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Quy Trình Nhanh Chóng */}
              <section className="mb-12 bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#388e3c 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 relative z-10 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Quy Trình Thanh Lý Quán Nhậu
                </h3>

                <div className="space-y-6 relative z-10">
                  {[
                    { step: "1", title: "Gọi ngay", desc: `Gọi ${hotline} hoặc nhắn tin Zalo với nội dung cần thanh lý quán nhậu.` },
                    { step: "2", title: "Khảo sát", desc: "Chúng tôi khảo sát tận nơi hoặc báo giá qua ảnh – nhanh chóng, chính xác." },
                    { step: "3", title: "Thỏa thuận", desc: "Thống nhất giá – bắt tay – ký giấy – nhận cọc nếu cần." },
                    { step: "4", title: "Tháo dỡ", desc: "Đội ngũ đến tháo dỡ, vận chuyển sạch sẽ." },
                    { step: "5", title: "Thanh toán", desc: "Thanh toán 100% số tiền còn lại sau khi bàn giao mặt bằng." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 items-center group bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-[#388e3c]/10 text-[#388e3c] rounded-full flex items-center justify-center text-xl font-black flex-shrink-0 group-hover:bg-[#388e3c] group-hover:text-white transition-all duration-300">
                        {item.step}
                      </div>
                      <p className="text-gray-700 text-base leading-relaxed">
                        <strong className="text-[#111827] uppercase">{item.title}:</strong> {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 4: Vận chuyển đồ --- */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-quan-nhau-tron-goi.jpg"
                  alt="TRung Kiên cam kết thanh lý quán nhậu không ép giá, thanh toán 100%"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Cam Kết Từ Đồ Cũ TRung Kiên */}
              <section className="mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Cam Kết Từ Đồ Cũ TRung Kiên
                </h3>

                <div className="space-y-4">
                  {[
                    { title: "Giá cao hơn thị trường", desc: "Không đọc giá ảo, không ép giá." },
                    { title: "Miễn phí vận chuyển, tháo dỡ", desc: "Xa mấy cũng đến." },
                    { title: "Thanh toán trọn gói 100%", desc: "Không giữ lại bất kỳ khoản phí nào." },
                    { title: "Hoạt động 24/7", desc: "Kể cả ngày lễ, Tết, nửa đêm cũng hỗ trợ." },
                    { title: "Đội ngũ chuyên nghiệp", desc: "Nhân viên được đào tạo bài bản, cư xử lịch sự, làm việc sạch sẽ." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center bg-white p-5 rounded-2xl border border-gray-100 hover:border-[#388e3c]/20 hover:shadow-sm transition-all group">
                      <div className="w-8 h-8 rounded-full bg-[#388e3c]/10 flex items-center justify-center flex-shrink-0 text-[#388e3c] group-hover:bg-[#388e3c] group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      </div>
                      <p className="text-gray-700 text-base leading-relaxed">
                        <strong className="text-[#111827] font-bold text-lg">{item.title}</strong> – {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Nút Gọi Ngay cuối bài */}
              <div className="mt-16 text-center border-t border-gray-100 pt-12">
                <p className="text-xl font-bold text-[#111827] mb-6">Bạn cần thanh lý quán nhậu trọn gói? Kết nối ngay với TRung Kiên!</p>
                <a href={`tel:${hotline}`} className="group inline-flex items-center gap-4 bg-[#388e3c] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-lg hover:bg-[#2e7d32] transition-all shadow-[0_15px_30px_rgba(136,13,17,0.3)] hover:-translate-y-1">
                  <span className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">📞</span>
                  Gọi Ngay: {hotline}
                </a>
              </div>

            </article>

            {/* --- CỘT PHẢI: SIDEBAR --- */}
            <aside className="lg:col-span-1 w-full min-w-0 h-fit sticky top-[100px]">
              <Sidebar />
            </aside>

          </div>
        </section>

      </main>
    </div>
  );
}