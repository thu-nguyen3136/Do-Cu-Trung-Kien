import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThuMuaTuDongPage() {
  const hotline = "0398.771.444";

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
        <title>Thu Mua Tủ Đông Cũ Giá Cao TPHCM | Dịch Vụ Uy Tín Trung Kiên</title>
        <meta name="description" content="Đồ Cũ Trung Kiên chuyên thu mua tủ đông cũ, tủ đông công nghiệp, tủ đông 2-4 cánh giá cao nhất TPHCM. Khảo sát tận nơi 20 phút, miễn phí tháo dỡ vận chuyển." />
        <meta name="keywords" content="thu mua tủ đông cũ, thanh lý tủ đông, thu mua tủ đông công nghiệp, thu mua tủ đông mini, đồ cũ Trung Kiên, thu mua thiết bị điện lạnh" />
        <link rel="canonical" href="https://thumuadocutrungkien.com/thu-mua-tu-dong" />
        <meta property="og:title" content="Dịch Vụ Thu Mua Tủ Đông Cũ Giá Cao, Tận Nơi TPHCM - Trung Kiên" />
        <meta property="og:description" content="Cần thanh lý tủ đông cũ? Trung Kiên thu mua mọi số lượng, các loại tủ đông đứng, nằm, công nghiệp với giá cao nhất. Thanh toán ngay tại chỗ." />
        <meta property="og:type" content="article" />
      </Head>

      <main className="flex-grow pb-20">

        {/* ================= BREADCRUMB ================= */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#388e3c] transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Thu Mua Tủ Đông</span>
          </div>
        </div>

        {/* ================= MAIN LAYOUT (GRID Layout 4 Cột An Toàn) ================= */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH (Chiếm 3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">

              <h1 className="text-3xl md:text-5xl font-black text-[#111827] uppercase leading-tight tracking-tight mb-4">
                Thu Mua Tủ Đông
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-[#388e3c] mb-8 leading-snug border-l-4 border-[#388e3c] pl-4">
                Dịch Vụ Thu Mua Tủ Đông Giá Cao, Uy Tín Tại TPHCM
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-10 space-y-4">
                <p>
                  Bạn đang có nhu cầu thanh lý <strong className="text-[#111827]">tủ đông</strong>, bàn mát hay các thiết bị điện lạnh khác do ngừng kinh doanh, thay đổi mô hình hay nâng cấp thiết bị mới? Bạn lo lắng về giá cả, thủ tục phức tạp và chi phí vận chuyển?
                </p>
                <p>
                  Hãy đến với <strong className="text-[#388e3c]">Cửa hàng đồ cũ Trung Kiên</strong> – đơn vị chuyên <strong className="text-[#111827]">thu mua tủ đông</strong> với mức giá cao nhất thị trường tại TPHCM và các tỉnh lân cận.
                </p>
                <div className="bg-[#388e3c]/5 border border-[#388e3c]/20 p-5 rounded-2xl mt-6 flex items-start gap-4">
                  <svg className="w-6 h-6 text-[#388e3c] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <p className="text-gray-800 leading-relaxed font-medium">
                    Với đội ngũ nhân viên chuyên nghiệp, giàu kinh nghiệm và dịch vụ trọn gói từ tháo dỡ đến vận chuyển, chúng tôi cam kết mang đến sự hài lòng tuyệt đối cho khách hàng.
                  </p>
                </div>
              </div>

              {/* --- ẢNH 1: Tổng quan --- */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-tu-dong-tu-mat.jpg"
                  alt="Dịch vụ thu mua tủ đông cũ trọn gói giá cao Đồ Cũ Trung Kiên"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 text-sm md:text-base text-center font-medium">
                  Trung Kiên chuyên thu mua tủ đông công nghiệp, tủ đông gia đình giá cao
                </div>
              </div>

              {/* SECTION: Các Loại Tủ Đông */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Các Loại Tủ Đông Được Thu Mua Hiện Nay
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cửa hàng đồ cũ Trung Kiên chuyên thu mua đa dạng các loại tủ đông với nhiều kích thước, thương hiệu và tình trạng khác nhau:
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Thu mua tủ đông nằm",
                    "Thu mua tủ đông đứng",
                    "Thu mua tủ đông mini",
                    "Thu mua tủ đông công nghiệp",
                    "Thu mua tủ đông 2 cánh",
                    "Thu mua tủ đông 3 cánh",
                    "Thu mua tủ đông 4 cánh"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#388e3c]/40 hover:bg-white transition-all duration-300 group">
                      <span className="w-2 h-2 rounded-full bg-[#388e3c] group-hover:scale-150 transition-transform"></span>
                      <span className="font-bold text-[#111827] text-[15px] group-hover:text-[#388e3c] transition-colors">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[#388e3c] leading-relaxed mt-6 font-bold italic pl-4 border-l-4 border-[#388e3c]">
                  * Chúng tôi thu mua từ số lượng nhỏ cho đến số lượng lớn, đáp ứng mọi nhu cầu thanh lý của khách hàng.
                </p>
              </section>

              {/* --- ẢNH 2: Tủ đông công nghiệp --- */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-tu-dong-gia-cao.jpg"
                  alt="Thu mua các loại tủ đông nhà hàng, tủ đông 4 cánh, 2 cánh"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* SECTION: Quy Trình Thu Mua */}
              <section className="mb-12 bg-white border-2 border-gray-100 p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-sm">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#388e3c 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 relative z-10 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Quy Trình Thu Mua Nhanh Gọn
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                  Quy trình thu mua tại Trung Kiên được thiết kế đơn giản, minh bạch và nhanh chóng để tiết kiệm tối đa thời gian cho khách hàng:
                </p>

                <div className="flex flex-col gap-6 relative z-10">
                  {[
                    { step: "1", title: "Liên hệ báo giá", desc: "Quý khách gọi điện thoại đến hotline hoặc gửi hình ảnh, kích thước sản phẩm qua Zalo để được báo giá trực tiếp nhanh nhất." },
                    { step: "2", title: "Khảo sát và thỏa thuận", desc: "Nhân viên giàu kinh nghiệm sẽ đến tận nơi trong vòng 15 đến 20 phút, đánh giá tình trạng và thống nhất giá cả suôn sẻ." },
                    { step: "3", title: "Tháo dỡ và vận chuyển", desc: "Chúng tôi chịu trách nhiệm từ A đến Z, bao gồm tháo dỡ, bốc vác và vận chuyển toàn bộ. Quý khách không tốn chi phí phát sinh." },
                    { step: "4", title: "Thanh toán nhanh chóng", desc: "Thanh toán 100% giá trị thỏa thuận tiền mặt hoặc chuyển khoản ngay sau khi kết thúc quá trình thu mua." }
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

              {/* --- ẢNH 3: Khảo sát, Vận chuyển --- */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-12 shadow-lg group w-full md:w-3/4 mx-auto">
                <Image
                  src="/thu-mua-tu-dong-uy-tin.jpg"
                  alt="Nhân viên Trung Kiên vận chuyển tủ đông cũ chuyên nghiệp"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* SECTION: Tại Sao Chọn Trung Kiên */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Lý Do Nên Chọn Trung Kiên?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { title: "Giá thu mua cao nhất thị trường", desc: "Chúng tôi cam kết báo giá cạnh tranh, không ép giá, đảm bảo quyền lợi tối đa cho khách hàng." },
                    { title: "Thu mua tận nơi nhanh chóng", desc: "Có mặt chỉ sau 15 đến 20 phút khi nhận được cuộc gọi, phục vụ tận nơi bất kể địa điểm xa trung tâm." },
                    { title: "Thời gian linh hoạt 24/7", desc: "Hoạt động tất cả các ngày trong tuần, kể cả ngày lễ, sẵn sàng phục vụ khi bạn có nhu cầu." },
                    { title: "Miễn phí tháo dỡ, vận chuyển", desc: "Đội ngũ nhân viên chuyên nghiệp đảm nhận công việc từ tháo dỡ đến vận chuyển, không phát sinh chi phí." },
                    { title: "Thanh toán nhanh chóng", desc: "Nhận tiền mặt hoặc chuyển khoản ngay sau khi hoàn tất thủ tục thu mua." },
                    { title: "Thu mua mọi số lượng", desc: "Nhận thanh lý từ 1 đến nhiều sản phẩm, từ số lượng nhỏ cho đến số lượng lớn." }
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-2xl group hover:bg-[#111827] transition-colors duration-300 border border-gray-100 flex flex-col">
                      <h4 className="text-[#111827] text-[16px] font-black uppercase mb-2 group-hover:text-white transition-colors flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#388e3c] group-hover:text-[#4caf50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-[14px] leading-relaxed group-hover:text-gray-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION: Cam Kết */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Cam Kết Dịch Vụ Uy Tín
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cửa hàng đồ cũ Trung Kiên đặt uy tín làm kim chỉ nam và cam kết mang đến dịch vụ thu mua tủ đông tốt nhất với những điều khoản rõ ràng:
                </p>

                <div className="bg-[#111827] text-white p-6 md:p-8 rounded-3xl shadow-md">
                  <ul className="space-y-4">
                    {[
                      "Cam kết giá thu mua cao hơn mặt bằng chung thị trường.",
                      "Cam kết không phát sinh bất kỳ chi phí nào trong quá trình tháo dỡ và vận chuyển.",
                      "Cam kết thanh toán 100% giá trị sau khi hoàn tất thu mua.",
                      "Cam kết phục vụ tận nơi tại tất cả các quận huyện trong TPHCM và các tỉnh lân cận.",
                      "Cam kết hoạt động 24/7, sẵn sàng hỗ trợ mọi lúc khi khách hàng có nhu cầu."
                    ].map((text, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <span className="text-[#4caf50] mt-1 font-bold">👉</span>
                        <p className="text-gray-200 text-[15px]">{text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Nút Gọi Ngay cuối bài */}
              <div className="mt-16 text-center border-t border-gray-100 pt-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase mb-4">Liên Hệ Ngay Để Được Báo Giá Cao Nhất</h3>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">Nếu bạn đang có nhu cầu thanh lý tủ đông hay bất kỳ thiết bị điện lạnh nào, đừng ngần ngại liên hệ với chúng tôi.</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href={`tel:${hotline}`} className="group inline-flex items-center justify-center gap-3 bg-[#111827] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[16px] hover:bg-[#388e3c] transition-all shadow-[0_10px_20px_rgba(17,24,39,0.2)] hover:-translate-y-1 w-full sm:w-auto">
                    <span className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">📞</span>
                    Gọi Hotline Ngay
                  </a>
                  <a href={`https://zalo.me/${hotline.replace(/\./g, '')}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-[#111827] px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[16px] hover:border-[#388e3c] hover:text-[#388e3c] transition-all w-full sm:w-auto">
                    Chat Zalo Báo Giá
                  </a>
                </div>
                <p className="text-gray-500 mt-6 text-sm uppercase tracking-widest font-semibold"><span className="text-[#388e3c]">Khu vực hoạt động:</span> TPHCM, Đồng Nai, Bình Dương và lân cận</p>
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