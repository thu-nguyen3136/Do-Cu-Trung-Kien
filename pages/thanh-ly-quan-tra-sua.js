import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThuMuaDoCuGiaCaoPage() {
  const hotline = "0398.771.444";

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
        <title>Thu Mua Đồ Cũ Giá Cao Tận Nơi Tại TPHCM | Đồ Cũ TRung Kiên</title>
        <meta name="description" content="TRung Kiên chuyên thu mua đồ cũ giá cao tận nơi tại TPHCM (2026). Thu mua bàn ghế văn phòng, đồ nhà hàng, quán cafe, sofa, đồ gia dụng. Báo giá nhanh, thanh toán ngay." />
        <meta name="keywords" content="thu mua đồ cũ, thu mua đồ cũ giá cao, thu mua đồ cũ tphcm, thanh lý đồ cũ, đồ cũ TRung Kiên, thu mua đồ văn phòng cũ, thu mua nội thất cũ" />
        <link rel="canonical" href="https://thumuadocutrungkien.com/thu-mua-do-cu-gia-cao-tphcm" />
        <meta property="og:title" content="Dịch Vụ Thu Mua Đồ Cũ Giá Cao, Tận Nơi Tại TP.HCM - TRung Kiên" />
        <meta property="og:description" content="Bạn cần thanh lý đồ cũ? TRung Kiên thu mua trọn gói nội thất gia đình, văn phòng, quán ăn, cafe giá cao nhất thị trường. Thanh toán 1 lần, dọn dẹp sạch sẽ." />
        <meta property="og:type" content="article" />
      </Head>

      <main className="flex-grow pb-20">

        {/* ================= BREADCRUMB ================= */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#388e3c] transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Thu Mua Đồ Cũ Giá Cao</span>
          </div>
        </div>

        {/* ================= MAIN LAYOUT (GRID Layout 4 Cột An Toàn) ================= */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH (Chiếm 3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">

              <h1 className="text-3xl md:text-5xl font-black text-[#111827] uppercase leading-tight tracking-tight mb-4">
                Thu Mua Đồ Cũ Giá Cao
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-[#388e3c] mb-8 leading-snug border-l-4 border-[#388e3c] pl-4">
                Dịch Vụ Thu Mua Đồ Cũ Giá Cao, Tận Nơi Tại TP.HCM
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-10 space-y-4">
                <p>
                  <strong className="text-[#388e3c]">TRung Kiên</strong> chuyên thu mua đồ cũ giá cao tận nơi tại TP.HCM. Chúng tôi nhận thu mua bàn ghế văn phòng, bàn ghế cafe, sofa, tủ quần áo, giường ngủ, ghế massage… Khảo sát nhanh, báo giá cạnh tranh, thanh toán ngay. Liên hệ 24/7.
                </p>
                <div className="bg-gray-50 border border-gray-200 p-5 rounded-2xl mt-4">
                  <p className="text-gray-800 m-0">
                    TRung Kiên tự hào là đơn vị thu mua đồ cũ giá cao hàng đầu tại TP.HCM (2026). Chúng tôi nhận mua đa dạng đồ nội thất và thiết bị đã qua sử dụng: từ đồ gia đình đến nội thất kinh doanh — báo giá siêu tốc, thanh toán ngay tại chỗ, tháo dỡ và vận chuyển miễn phí.
                  </p>
                </div>
              </div>

              {/* --- ẢNH 1: Tổng quan --- */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-do-cu-gia-cao.jpg"
                  alt="Dịch vụ thu mua đồ cũ trọn gói giá cao tận nơi tại TPHCM"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 text-sm md:text-base text-center font-medium">
                  TRung Kiên thu mua đa dạng các loại đồ cũ từ gia đình, văn phòng đến cơ sở kinh doanh
                </div>
              </div>

              {/* SECTION: Danh mục thu mua */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Dịch Vụ Thu Mua Đồ Cũ Đa Dạng
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { title: "Đồ văn phòng cũ", desc: "Bàn làm việc, ghế xoay, tủ hồ sơ, bàn họp, vách ngăn." },
                    { title: "Đồ quán kinh doanh", desc: "Bàn ghế quán cafe, nhà hàng, quán ăn, quán nhậu." },
                    { title: "Nội thất phòng khách", desc: "Thu mua sofa, salon gỗ, bàn ghế phòng khách, kệ tivi." },
                    { title: "Đồ gia dụng & phòng ngủ", desc: "Tủ quần áo, giường ngủ, bàn trang điểm, tủ lạnh, máy lạnh." },
                    { title: "Thiết bị chuyên dụng", desc: "Ghế massage cũ, quầy lễ tân, thiết bị karaoke, nội thất khách sạn, nhà nghỉ." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-white border border-gray-200 rounded-2xl hover:border-[#388e3c]/40 hover:shadow-md transition-all group">
                      <div className="w-10 h-10 rounded-full bg-[#388e3c]/10 flex items-center justify-center flex-shrink-0 text-[#388e3c] group-hover:bg-[#388e3c] group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] text-[16px] mb-1 uppercase group-hover:text-[#388e3c] transition-colors">{item.title}</h4>
                        <p className="text-gray-600 text-[14px] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 2: Kho đồ cũ --- */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-do-cu-gia-cao-hcm.jpg"
                  alt="Thu mua nội thất văn phòng, gia đình, quán cafe giá cao"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* SECTION: Tại sao chọn TRung Kiên */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Tại Sao Hàng Ngàn Khách Hàng Tin Chọn TRung Kiên?
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: "💰", title: "Giá thu mua cao", desc: "Cam kết “thu mua đồ cũ giá cao” — báo giá cạnh tranh, sát với giá trị thực, thường cao hơn nhiều so với đơn vị nhỏ lẻ." },
                    { icon: "⚡", title: "Thu mua tận nơi, phục vụ nhanh", desc: "Khảo sát và báo giá tại chỗ trong ngày. Tháo dỡ chuyên nghiệp, giúp khách tiết kiệm công sức và chi phí vận chuyển." },
                    { icon: "💵", title: "Thanh toán ngay tại chỗ", desc: "Thanh toán 100% một lần duy nhất bằng tiền mặt hoặc chuyển khoản theo đúng yêu cầu của khách hàng." },
                    { icon: "🤝", title: "Quy trình minh bạch, chuyên nghiệp", desc: "Khảo sát → Đề xuất giá → Thanh toán → Vận chuyển. Làm việc nhanh gọn, có hợp đồng nếu cần." },
                    { icon: "📍", title: "Đội ngũ giàu kinh nghiệm", desc: "Hoạt động nhiều năm tại TP.HCM, thông thạo địa hình, phục vụ nhiệt tình tại mọi quận huyện." }
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-transparent hover:border-gray-200 transition-colors">
                      <h4 className="text-[#111827] text-[17px] font-black uppercase mb-3 flex items-center gap-2">
                        <span className="text-2xl">{item.icon}</span> {item.title}
                      </h4>
                      <p className="text-gray-600 text-[15px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION: Quy trình & Cam kết */}
              <section className="mb-12 bg-[#111827] rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-xl text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#388e3c] opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#388e3c] opacity-20 rounded-full blur-3xl"></div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Cột Quy Trình */}
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                      Quy Trình Nhanh Chóng
                    </h3>
                    <ul className="space-y-5">
                      <li className="flex gap-4 items-start">
                        <span className="w-8 h-8 rounded-full bg-[#388e3c] text-white flex items-center justify-center font-bold flex-shrink-0">1</span>
                        <p className="text-gray-300"><strong className="text-white">Liên hệ TRung Kiên:</strong> Gọi Hotline/Zalo {hotline} gửi hình ảnh nhận tư vấn.</p>
                      </li>
                      <li className="flex gap-4 items-start">
                        <span className="w-8 h-8 rounded-full bg-[#388e3c] text-white flex items-center justify-center font-bold flex-shrink-0">2</span>
                        <p className="text-gray-300"><strong className="text-white">Khảo sát nhanh:</strong> Nhân viên đến tận nơi trong ngày (khu vực nội thành).</p>
                      </li>
                      <li className="flex gap-4 items-start">
                        <span className="w-8 h-8 rounded-full bg-[#388e3c] text-white flex items-center justify-center font-bold flex-shrink-0">3</span>
                        <p className="text-gray-300"><strong className="text-white">Báo giá minh bạch:</strong> Thương lượng trực tiếp, cam kết không ép giá.</p>
                      </li>
                      <li className="flex gap-4 items-start">
                        <span className="w-8 h-8 rounded-full bg-[#388e3c] text-white flex items-center justify-center font-bold flex-shrink-0">4</span>
                        <p className="text-gray-300"><strong className="text-white">Thanh toán & Vận chuyển:</strong> Thanh toán ngay, hỗ trợ dọn dẹp và vận chuyển 100% miễn phí.</p>
                      </li>
                    </ul>
                  </div>

                  {/* Cột Cam Kết */}
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                      Cam Kết Dịch Vụ
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex gap-3 items-center">
                        <svg className="w-5 h-5 text-[#4caf50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span className="text-gray-200">Giá cả công khai, tuyệt đối không ép giá.</span>
                      </li>
                      <li className="flex gap-3 items-center">
                        <svg className="w-5 h-5 text-[#4caf50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span className="text-gray-200">Nhân viên lịch sự, làm việc nhanh gọn, sạch sẽ.</span>
                      </li>
                      <li className="flex gap-3 items-center">
                        <svg className="w-5 h-5 text-[#4caf50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span className="text-gray-200">Thu mua linh hoạt: Nhận cả lô hàng lớn và đồ lẻ.</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <svg className="w-5 h-5 text-[#4caf50] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span className="text-gray-200">Bảo vệ thông tin khách hàng, xử lý an toàn các vật dụng có nội dung nhạy cảm.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* --- ẢNH 3: Vận chuyển --- */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-12 shadow-lg group w-full md:w-3/4 mx-auto">
                <Image
                  src="/thu-mua-do-cu-gia-cao-tan-binh.jpg"
                  alt="Đội ngũ TRung Kiên bốc xếp, vận chuyển đồ cũ miễn phí"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* SECTION: Khu vực phục vụ */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Khu Vực Phục Vụ
                </h3>
                <div className="bg-[#388e3c]/5 border border-[#388e3c]/20 p-5 md:p-6 rounded-2xl flex items-start gap-4">
                  <svg className="w-8 h-8 text-[#388e3c] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <p className="text-gray-800 leading-relaxed text-[16px]">
                    <strong className="text-[#388e3c]">Phục vụ toàn TP.HCM và vùng lân cận</strong> — Chúng tôi nhận thu mua tận nơi tại tất cả quận huyện: Quận 1, Quận 3, Quận 4, Quận 5, Quận 7, Bình Thạnh, Phú Nhuận, Tân Bình, Tân Phú, Gò Vấp, Thủ Đức, Hóc Môn, Nhà Bè, Bình Tân...
                  </p>
                </div>
              </section>

              {/* SECTION: FAQ (Accordion Đóng/Mở) */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Câu Hỏi Thường Gặp (FAQ)
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      q: "TRung Kiên thu mua những mặt hàng nào?",
                      a: "Chúng tôi thu mua đa dạng đồ nội thất và thiết bị đã qua sử dụng: bàn ghế, sofa, tủ, giường, kệ, thiết bị điện lạnh, ghế massage, quầy lễ tân, thiết bị karaoke, v.v."
                    },
                    {
                      q: "Làm sao để nhận báo giá nhanh?",
                      a: `Gửi ảnh sản phẩm kèm mô tả (tình trạng, số lượng, vị trí) qua Zalo số ${hotline} — nhân viên sẽ phản hồi ngay lập tức và khảo sát tận nơi nếu cần.`
                    },
                    {
                      q: "Thanh toán bằng hình thức nào?",
                      a: "Thanh toán 100% bằng tiền mặt hoặc chuyển khoản tùy theo yêu cầu của khách hàng — thanh toán dứt điểm ngay sau khi hai bên đồng ý giá cả."
                    },
                    {
                      q: "Có thu mua số lượng ít không?",
                      a: "Có — TRung Kiên nhận thu mua cả những món đồ lẻ của hộ gia đình cho đến thu mua số lượng lớn trọn gói của công ty, nhà hàng, khách sạn."
                    }
                  ].map((faq, index) => (
                    <details key={index} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm">
                      <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-[#111827] font-bold text-[16px] md:text-[17px] hover:bg-gray-50 transition-colors">
                        {faq.q}
                        <span className="transition duration-300 group-open:-rotate-180 bg-[#388e3c]/10 text-[#388e3c] rounded-full p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </summary>
                      <div className="p-5 pt-0 text-gray-600 text-[15px] leading-relaxed border-t border-gray-100 bg-gray-50">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 4: Liên hệ --- */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-do-cu-gia-cao-go-vap.jpg"
                  alt="Liên hệ Đồ Cũ TRung Kiên để được thu mua giá cao tận nơi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Nút Gọi Ngay cuối bài */}
              <div className="mt-12 text-center border-t border-gray-100 pt-12">
                <p className="text-xl font-bold text-[#111827] mb-6">Bạn muốn thanh lý đồ cũ nhanh? Nhận ngay báo giá cao từ TRung Kiên!</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href={`tel:${hotline}`} className="group inline-flex items-center gap-4 bg-[#111827] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[16px] hover:bg-[#388e3c] transition-all shadow-[0_10px_20px_rgba(17,24,39,0.2)] hover:-translate-y-1 w-full sm:w-auto justify-center">
                    <span className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">📞</span>
                    Gọi Hotline Ngay
                  </a>
                  <a href={`https://zalo.me/${hotline.replace(/\./g, '')}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 bg-white border-2 border-gray-200 text-[#111827] px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[16px] hover:border-[#388e3c] hover:text-[#388e3c] transition-all w-full sm:w-auto justify-center">
                    Chat Zalo Báo Giá
                  </a>
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