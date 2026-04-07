import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThuMuaTuThoGoCuPage() {
  const hotline = "0398.771.444";

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
        <title>Thu Mua Tủ Thờ Gỗ Cũ Giá Cao | Dịch Vụ Có Tâm, Uy Tín TPHCM</title>
        <meta name="description" content="TRung Kiên chuyên thu mua tủ thờ gỗ cũ, bàn thờ gia tiên, sập thờ, đồ thờ bằng gỗ tự nhiên giá cao nhất TPHCM. Khảo sát nhanh, tháo dỡ cẩn trọng, trân trọng tâm linh." />
        <meta name="keywords" content="thu mua tủ thờ gỗ cũ, thanh lý bàn thờ, thu mua sập thờ, thanh lý đồ thờ cúng, đồ cũ TRung Kiên, thu mua bàn thờ gỗ tự nhiên" />
        <link rel="canonical" href="https://thumuadocutrungkien.com/thu-mua-tu-tho-go-cu" />
        <meta property="og:title" content="Dịch Vụ Thu Mua Tủ Thờ Gỗ Cũ Giá Cao Tận Nơi - TRung Kiên" />
        <meta property="og:description" content="Bạn cần thanh lý tủ thờ, bàn thờ gỗ cũ? TRung Kiên thu mua giá cao, cam kết tháo dỡ nhẹ nhàng, trân trọng giá trị tâm linh. Miễn phí vận chuyển." />
        <meta property="og:type" content="article" />
      </Head>

      <main className="flex-grow pb-20">

        {/* ================= BREADCRUMB ================= */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#388e3c] transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Thu Mua Tủ Thờ Gỗ Cũ</span>
          </div>
        </div>

        {/* ================= MAIN LAYOUT (GRID Layout 4 Cột) ================= */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH (Chiếm 3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">

              <h1 className="text-3xl md:text-5xl font-black text-[#111827] uppercase leading-tight tracking-tight mb-4">
                Thu Mua Tủ Thờ Gỗ Cũ
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-[#388e3c] mb-8 leading-snug border-l-4 border-[#388e3c] pl-4">
                Thu Mua Tủ Thờ Gỗ Cũ Giá Cao – Dịch Vụ Uy Tín, Có Tâm Tại TPHCM
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-10 space-y-4">
                <p>
                  Bạn đang có nhu cầu <strong className="text-[#111827]">thanh lý tủ thờ gỗ cũ</strong> do thay đổi không gian thờ tự, muốn nâng cấp sản phẩm mới, hoặc đơn giản là cần giải phóng mặt bằng? Tủ thờ là vật phẩm mang giá trị tâm linh, vì vậy việc tìm kiếm một đơn vị thu mua tủ thờ gỗ cũ uy tín, giá cao và có tâm là điều vô cùng quan trọng.
                </p>
                <p>
                  Thấu hiểu điều đó, <strong className="text-[#388e3c]">TRung Kiên</strong> tự hào là địa chỉ tin cậy hàng đầu, chuyên thu mua các loại tủ thờ, bàn thờ, đồ thờ bằng gỗ tự nhiên với quy trình chuyên nghiệp, minh bạch và thái độ trân trọng giá trị văn hóa.
                </p>
              </div>

              {/* --- ẢNH 1: Tổng quan --- */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-tu-tho-go-cu-1.jpg"
                  alt="Dịch vụ thu mua tủ thờ gỗ cũ, bàn thờ gia tiên giá cao Đồ Cũ TRung Kiên"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 text-sm md:text-base text-center font-medium">
                  TRung Kiên chuyên thu mua tủ thờ, bàn thờ gia tiên, sập thờ gỗ tự nhiên giá cao
                </div>
              </div>

              {/* SECTION: Đa dạng các loại tủ thờ */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Thu Mua Đa Dạng Các Loại Tủ Thờ Gỗ Cũ
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Chúng tôi nhận thu mua tất cả các dòng tủ thờ, bàn thờ với nhiều kích thước, chất liệu và phong cách khác nhau:
                </p>

                <div className="bg-[#388e3c]/5 border border-[#388e3c]/20 p-6 rounded-2xl mb-8">
                  <h4 className="text-[#388e3c] font-bold text-lg mb-4 uppercase flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                    Theo Chất Liệu Gỗ:
                  </h4>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start gap-3">
                      <span className="text-[#388e3c] mt-0.5 font-bold">✔️</span>
                      <p><strong className="text-[#111827]">Gỗ Gụ:</strong> Dòng gỗ quý, vân đẹp, độ bền cao.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#388e3c] mt-0.5 font-bold">✔️</span>
                      <p><strong className="text-[#111827]">Gỗ Hương:</strong> Mùi thơm đặc trưng, màu sắc ấm áp.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#388e3c] mt-0.5 font-bold">✔️</span>
                      <p><strong className="text-[#111827]">Gỗ Sồi, Óc Chó, Căm Xe:</strong> Các loại gỗ tự nhiên cao cấp.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#388e3c] mt-0.5 font-bold">✔️</span>
                      <p><strong className="text-[#111827]">Gỗ Mít, Xoan, Thông:</strong> Các loại gỗ phổ biến trong sản xuất đồ thờ.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#388e3c] mt-0.5 font-bold">✔️</span>
                      <p><strong className="text-[#111827]">Gỗ công nghiệp (MDF, MFC):</strong> Vẫn thu mua với mức giá phù hợp.</p>
                    </li>
                  </ul>
                </div>

                <h4 className="text-[#111827] font-bold text-lg mb-4 uppercase pl-2 border-l-4 border-[#388e3c]">Theo Kiểu Dáng & Công Năng:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Tủ thờ treo tường", desc: "Thiết kế gọn gàng, tiết kiệm diện tích." },
                    { title: "Tủ thờ đứng", desc: "Tủ thờ chân quỳ, chân đứng kiểu dáng truyền thống, sang trọng." },
                    { title: "Bàn thờ gia tiên", desc: "Kích thước đa dạng, phù hợp nhiều không gian." },
                    { title: "Tủ thờ tam cấp, ngũ cấp", desc: "Dành cho không gian thờ tự rộng lớn." },
                    { title: "Đồ thờ cúng khác", desc: "Sập thờ, khám thờ, long ngai bài vị." }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#388e3c]/50 hover:shadow-md transition-all duration-300 group">
                      <h4 className="font-black text-[#111827] text-[15px] uppercase mb-1 group-hover:text-[#388e3c] transition-colors">{item.title}</h4>
                      <p className="text-[14px] text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 2: Tủ thờ gỗ tự nhiên --- */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-tu-tho-go-cu-2.jpg"
                  alt="Thu mua các loại tủ thờ, bàn thờ gia tiên cũ"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* SECTION: Quy Trình Thu Mua */}
              <section className="mb-12 bg-white border-2 border-gray-100 p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-sm">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#388e3c 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 relative z-10 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Quy Trình Thu Mua Chuyên Nghiệp, Có Tâm
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                  TRung Kiên xây dựng quy trình làm việc bài bản, đảm bảo sự hài lòng tuyệt đối cho khách hàng:
                </p>

                <div className="flex flex-col gap-6 relative z-10">
                  {[
                    { step: "1", title: "Tiếp nhận thông tin", desc: "Khách hàng liên hệ qua hotline, Zalo cung cấp hình ảnh, chất liệu, tình trạng và kích thước của tủ thờ." },
                    { step: "2", title: "Khảo sát & định giá", desc: "Nhân viên am hiểu về gỗ và giá trị tâm linh đến tận nơi kiểm tra thực tế, đánh giá chất lượng nguyên bản và giá trị nghệ thuật." },
                    { step: "3", title: "Báo giá cạnh tranh", desc: "Đưa ra mức giá thu mua cao nhất thị trường dựa trên giá trị thực tế. Cam kết không ép giá, không qua trung gian." },
                    { step: "4", title: "Thỏa thuận & thanh toán", desc: "Thống nhất mức giá, thanh toán 100% ngay sau khi thỏa thuận bằng tiền mặt hoặc chuyển khoản." },
                    { step: "5", title: "Vận chuyển miễn phí & cẩn trọng", desc: "Đội ngũ tháo dỡ, đóng gói cẩn thận, vận chuyển an toàn, miễn phí, không làm ảnh hưởng đến không gian thờ tự của gia đình." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group items-start md:items-center">
                      <div className="mt-1 md:mt-0 w-12 h-12 bg-[#388e3c] text-white rounded-full flex items-center justify-center text-xl font-black flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(136,13,17,0.4)] transition-all duration-300">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] text-[17px] uppercase group-hover:text-[#388e3c] transition-colors">{item.title}</h4>
                        <p className="text-[15px] text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 3: Vận chuyển --- */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-12 shadow-lg group w-full md:w-3/4 mx-auto">
                <Image
                  src="/thu-mua-tu-tho-go-cu-3.jpg"
                  alt="Đội ngũ TRung Kiên tháo dỡ vận chuyển đồ thờ cúng cẩn trọng"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* SECTION: Lý Do Chọn TRung Kiên */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Tại Sao Nên Chọn TRung Kiên?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Trên thị trường có nhiều đơn vị thu mua đồ cũ, nhưng <strong className="text-[#388e3c]">TRung Kiên</strong> là cái tên được hàng ngàn gia đình tin tưởng nhờ những ưu điểm vượt trội:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Giá thu mua cao nhất", desc: "Chúng tôi hiểu rõ giá trị của từng loại gỗ tự nhiên, từ phổ thông đến quý hiếm, sẵn sàng trả mức giá cạnh tranh nhất." },
                    { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Uy tín – Trách nhiệm", desc: "Hoạt động minh bạch, hợp đồng rõ ràng. Đặc biệt trân trọng giá trị tâm linh, tháo dỡ nhẹ nhàng, cẩn trọng." },
                    { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>, title: "Năng lực thực tế lớn", desc: "Đội ngũ đông đảo, xe tải chuyên dụng, sẵn sàng phục vụ từ tủ thờ nhỏ đến bộ bàn thờ lớn tại các tỉnh thành." },
                    { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Thời gian xử lý nhanh", desc: "Khảo sát và báo giá trong ngày, thanh lý và vận chuyển ngay sau khi thống nhất giúp tiết kiệm thời gian." }
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-2xl group hover:bg-[#111827] transition-colors duration-300 border border-gray-100 flex flex-col">
                      <div className="w-12 h-12 rounded-full bg-[#388e3c]/10 flex items-center justify-center text-[#388e3c] mb-4 group-hover:bg-[#388e3c] group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <h4 className="text-[#111827] text-[17px] font-black uppercase mb-2 group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-[14px] leading-relaxed group-hover:text-gray-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 4: Lưu ý --- */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-tu-tho-go-cu-4.jpg"
                  alt="Lưu ý khi thanh lý tủ thờ, bàn thờ cũ"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* SECTION: Lưu ý */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Lưu Ý Khi Thanh Lý Tủ Thờ Gỗ Cũ
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Để quá trình thanh lý diễn ra thuận lợi và đạt giá trị cao nhất, khách hàng nên lưu ý:
                </p>

                <div className="bg-[#111827] text-white p-6 md:p-8 rounded-3xl shadow-md">
                  <ul className="space-y-4">
                    <li className="flex gap-3 items-start">
                      <span className="text-[#4caf50] mt-1 font-bold">👉</span>
                      <p><strong className="text-[#4caf50] uppercase tracking-wide">Xác định rõ chất liệu gỗ:</strong> Gỗ tự nhiên hay gỗ công nghiệp? Loại gỗ gì?</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-[#4caf50] mt-1 font-bold">👉</span>
                      <p><strong className="text-[#4caf50] uppercase tracking-wide">Đánh giá tình trạng:</strong> Tủ thờ còn nguyên bản hay đã qua sửa chữa? Có bị mối mọt, nứt nẻ không?</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-[#4caf50] mt-1 font-bold">👉</span>
                      <p><strong className="text-[#4caf50] uppercase tracking-wide">Chọn đơn vị uy tín:</strong> Ưu tiên các đơn vị có kinh nghiệm, hiểu biết về gỗ và có thái độ trân trọng sản phẩm tâm linh như TRung Kiên.</p>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Nút Gọi Ngay cuối bài */}
              <div className="mt-16 text-center border-t border-gray-100 pt-12">
                <p className="text-xl font-bold text-[#111827] mb-6">Bạn cần thanh lý tủ thờ, bàn thờ gỗ cũ? Kết nối ngay với TRung Kiên!</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href={`tel:${hotline}`} className="group inline-flex items-center gap-4 bg-[#111827] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[16px] hover:bg-[#388e3c] transition-all shadow-[0_10px_20px_rgba(17,24,39,0.2)] hover:-translate-y-1 w-full sm:w-auto justify-center">
                    <span className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">📞</span>
                    Gọi Hotline Ngay
                  </a>
                  <a href={`https://zalo.me/${hotline.replace(/\./g, '')}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 bg-white border-2 border-gray-200 text-[#111827] px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[16px] hover:border-[#388e3c] hover:text-[#388e3c] transition-all w-full sm:w-auto justify-center">
                    Chat Zalo Gửi Hình
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