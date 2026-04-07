import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThanhLyQuanCafePage() {
  const hotline = "0398.771.444";

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
        <title>Thanh Lý Quán Cafe Trọn Gói Giá Cao TPHCM | Đồ Cũ TRung Kiên</title>
        <meta name="description" content="Đồ Cũ TRung Kiên chuyên thu mua quán cafe trọn gói: máy pha cafe, máy xay, thiết bị làm lạnh, nội thất bàn ghế với giá cao nhất TPHCM. Khảo sát 30p, tháo dỡ miễn phí." />
        <meta name="keywords" content="thanh lý quán cafe, thu mua quán cafe, thu mua máy pha cafe, thanh lý bàn ghế cafe, đồ cũ TRung Kiên, thu mua thiết bị quán cafe" />
        <link rel="canonical" href="https://thumuadocutrungkien.com/thanh-ly-quan-cafe" />
        <meta property="og:title" content="Dịch Vụ Thu Mua Quán Cafe Trọn Gói Giá Cao - TRung Kiên" />
        <meta property="og:description" content="Cần thanh lý quán cafe? TRung Kiên thu mua trọn gói máy pha, máy xay, bàn ghế, thiết bị lạnh giá cao nhất thị trường. Giải phóng mặt bằng nhanh gọn trong ngày." />
        <meta property="og:type" content="article" />
      </Head>

      <main className="flex-grow pb-20">

        {/* ================= BREADCRUMB ================= */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#388e3c] transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Quán Cafe</span>
          </div>
        </div>

        {/* ================= MAIN LAYOUT (GRID Layout 4 Cột An Toàn) ================= */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH (Chiếm 3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">

              <h1 className="text-3xl md:text-5xl font-black text-[#111827] uppercase leading-tight tracking-tight mb-4">
                Thanh Lý Quán Cafe
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-[#388e3c] mb-8 leading-snug border-l-4 border-[#388e3c] pl-4">
                Thu Mua Quán Cafe Trọn Gói – Dịch Vụ Chuyên Nghiệp, Giá Cao Tại TRung Kiên
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-10 space-y-4">
                <p>
                  Bạn đang sở hữu một quán cafe nhưng muốn <strong className="text-[#111827]">thanh lý toàn bộ</strong> vì muốn đổi hướng kinh doanh, giải tỏa mặt bằng hay đơn giản là không có thời gian vận hành? Việc tìm kiếm một đơn vị thu mua quán cafe uy tín, giá cao và xử lý nhanh gọn luôn là bài toán khó.
                </p>
                <p>
                  Hiểu được điều đó, <strong className="text-[#388e3c]">TRung Kiên</strong> tự hào là đối tác tin cậy hàng đầu, chuyên cung cấp dịch vụ <strong className="text-[#111827]">thu mua quán cafe trọn gói</strong> với quy trình chuyên nghiệp, minh bạch và mức giá cạnh tranh nhất thị trường.
                </p>
              </div>

              {/* --- ẢNH 1: Tổng quan thanh lý quán cafe --- */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-quan-cafe.jpg"
                  alt="Dịch vụ thu mua thanh lý quán cafe trọn gói giá cao Đồ Cũ TRung Kiên"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 text-sm md:text-base text-center font-medium">
                  TRung Kiên cung cấp giải pháp thanh lý quán cafe trọn gói từ A đến Z chuyên nghiệp
                </div>
              </div>

              {/* SECTION: Sự Đặc Biệt Của TRung Kiên */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Dịch Vụ Thu Mua Quán Cafe Của TRung Kiên Có Gì Đặc Biệt?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Không chỉ đơn thuần là thu mua tài sản, <strong className="text-[#388e3c]">TRung Kiên</strong> mang đến giải pháp thanh lý quán cafe toàn diện, giúp khách hàng giải phóng mặt bằng nhanh chóng, thu hồi vốn tối đa. Chúng tôi cam kết:
                </p>

                <div className="flex flex-col gap-5">
                  {[
                    {
                      title: "Thu mua trọn gói",
                      desc: "Nhận thanh lý 100% tài sản trong quán: máy pha cafe, máy xay, tủ mát, tủ đông, bàn ghế, quầy bar, máy lạnh, trang thiết bị nhà bếp đến cả nội thất và vật dụng trang trí. Khách hàng không cần phải loay hoay thanh lý lẻ từng món."
                    },
                    {
                      title: "Báo giá cao nhất",
                      desc: "Đội ngũ chuyên gia trực tiếp khảo sát, định giá sát với giá trị thực tế của từng thiết bị, đặc biệt ưu tiên các thương hiệu nổi tiếng như La Marzocco, Astoria, Nuova Simonelli, Mazzer, Sanaky, Panasonic..."
                    },
                    {
                      title: "Hỗ trợ vận chuyển & tháo dỡ hoàn toàn miễn phí",
                      desc: "Đội ngũ nhân công hùng hậu, phương tiện vận chuyển chuyên nghiệp sẵn sàng tháo dỡ, bốc xếp và vận chuyển toàn bộ tài sản trong ngày, giải phóng mặt bằng ngay lập tức."
                    },
                    {
                      title: "Thanh toán nhanh chóng, minh bạch",
                      desc: "Nhận tiền ngay sau khi hoàn tất thủ tục và kiểm kê tài sản. Hình thức thanh toán linh hoạt: tiền mặt hoặc chuyển khoản."
                    },
                    {
                      title: "Quy trình làm việc chuyên nghiệp",
                      desc: "Hoạt động bài bản, rõ ràng, có hợp đồng đầy đủ, đảm bảo quyền lợi tối đa cho khách hàng."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#388e3c]/30 hover:bg-white transition-all duration-300 group">
                      <div className="mt-1 w-8 h-8 rounded-full bg-[#388e3c]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#388e3c] transition-colors shadow-sm">
                        <svg className="w-5 h-5 text-[#388e3c] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <strong className="text-[#111827] text-[16px] block mb-1 uppercase tracking-wide group-hover:text-[#388e3c] transition-colors">{item.title}</strong>
                        <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 2: Thiết bị máy pha, nội thất --- */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-quan-cafe-go-vap.jpg"
                  alt="Thu mua máy pha cafe, bàn ghế quán cafe cũ giá cao"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* SECTION: Các Hạng Mục Thu Mua */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Các Hạng Mục Được Thu Mua Khi Thanh Lý
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Với dịch vụ <strong className="text-[#111827]">thu mua quán cafe trọn gói</strong>, TRung Kiên nhận mua tất cả các danh mục sau:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Máy pha cafe chuyên nghiệp",
                      desc: "Máy pha cafe 1 group, 2 group, 3 group (các thương hiệu Ý, Nhật, Châu Âu...)."
                    },
                    {
                      title: "Máy xay cafe",
                      desc: "Máy xay cafe định lượng, máy xay cafe công nghiệp."
                    },
                    {
                      title: "Thiết bị làm lạnh",
                      desc: "Tủ mát, tủ đông, tủ trưng bày bánh, tủ mát đứng, tủ đá cây, tủ kính mát."
                    },
                    {
                      title: "Nội thất quán cafe",
                      desc: "Bàn ghế gỗ, bàn ghế mây, sofa, ghế bar, quầy bar, kệ trưng bày, tranh ảnh trang trí."
                    },
                    {
                      title: "Thiết bị khác",
                      desc: "Máy lạnh (điều hòa), quạt trần, loa đài, tivi, máy rửa chén, máy nước nóng, bếp từ, bếp hồng ngoại, ấm siêu tốc, dụng cụ pha chế (shaker, phin, ly tách...)."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#388e3c]/50 hover:shadow-md transition-all duration-300 group">
                      <h4 className="font-black text-[#111827] text-[16px] uppercase mb-2 group-hover:text-[#388e3c] transition-colors flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#388e3c]"></span>
                        {item.title}
                      </h4>
                      <p className="text-[15px] text-gray-600 leading-relaxed pl-3.5 border-l border-gray-100">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 3: Quy trình thu mua --- */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-12 shadow-lg group w-full md:w-3/4 mx-auto">
                <Image
                  src="/thu-mua-quan-cafe-uy-tin.jpg"
                  alt="Quy trình khảo sát, tháo dỡ quán cafe chuyên nghiệp của TRung Kiên"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* SECTION: Quy Trình Thu Mua */}
              <section className="mb-12 bg-white border-2 border-gray-100 p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-sm">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#388e3c 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 relative z-10 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Quy Trình Thu Mua Chuyên Nghiệp
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                  Để đảm bảo sự hài lòng tuyệt đối và tiết kiệm thời gian tối đa cho khách hàng, TRung Kiên áp dụng quy trình làm việc khép kín:
                </p>

                <div className="flex flex-col gap-6 relative z-10">
                  {[
                    { step: "1", title: "Tiếp nhận thông tin", desc: "Khách hàng liên hệ qua hotline hoặc Zalo, cung cấp địa chỉ và nhu cầu thanh lý quán cafe." },
                    { step: "2", title: "Khảo sát thực tế", desc: "Nhân viên TRung Kiên đến tận nơi trong vòng 30-60 phút (khu vực nội thành) để kiểm tra hiện trạng, thương hiệu, chất lượng và số lượng tài sản." },
                    { step: "3", title: "Báo giá & Thỏa thuận", desc: "Đưa ra bảng báo giá chi tiết, minh bạch cho toàn bộ tài sản. Hai bên thống nhất mức giá cuối cùng." },
                    { step: "4", title: "Ký hợp đồng & Thanh toán", desc: "Lập hợp đồng thu mua, thanh toán 100% giá trị hợp đồng ngay khi ký kết." },
                    { step: "5", title: "Tháo dỡ & Vận chuyển", desc: "Đội ngũ nhân công tiến hành tháo dỡ, đóng gói cẩn thận, vận chuyển lên xe tải và vệ sinh mặt bằng bàn giao cho khách hàng." }
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

              {/* --- ẢNH 4: Liên hệ --- */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-quan-cafe-gia-cao.jpg"
                  alt="TRung Kiên thu mua quán cafe uy tín, cam kết giá trị cao nhất"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* SECTION: Tại Sao Chọn TRung Kiên */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Tại Sao Nên Chọn TRung Kiên?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Với nhiều năm kinh nghiệm trong lĩnh vực thu mua thiết bị nhà hàng, khách sạn, quán cafe, TRung Kiên đã khẳng định được uy tín và vị thế của mình:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Uy tín hàng đầu", desc: "Hàng ngàn khách hàng trên toàn quốc đã tin tưởng sử dụng dịch vụ." },
                    { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Giá trị cao nhất", desc: "Không ép giá, không qua trung gian, trả giá sát với thực tế thị trường." },
                    { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>, title: "Năng lực vượt trội", desc: "Sở hữu đội ngũ xe tải, nhân công và kho bãi rộng lớn, đáp ứng mọi nhu cầu thanh lý quy mô lớn hay nhỏ." },
                    { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Thời gian nhanh chóng", desc: "Giải quyết gọn gàng trong ngày, giúp khách hàng nhanh chóng bàn giao mặt bằng cho chủ mới." }
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

              {/* Nút Gọi Ngay cuối bài */}
              <div className="mt-16 bg-[#111827] rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#388e3c 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-4">Thanh Lý Quán Cafe Trọn Gói?</h3>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Hãy để TRung Kiên giúp bạn giải quyết nhanh gọn, chuyên nghiệp và thu hồi vốn tối đa. Kết nối ngay để được báo giá!</p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href={`tel:${hotline}`} className="group inline-flex items-center justify-center gap-3 bg-[#388e3c] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[16px] hover:bg-[#2e7d32] transition-all shadow-[0_10px_20px_rgba(136,13,17,0.3)] hover:-translate-y-1">
                      <span className="animate-pulse">📞</span> Gọi Hotline: {hotline}
                    </a>
                    <a href={`https://zalo.me/${hotline.replace(/\./g, '')}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 bg-white text-[#111827] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[16px] hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1 border border-transparent">
                      Chat Zalo Gửi Hình
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