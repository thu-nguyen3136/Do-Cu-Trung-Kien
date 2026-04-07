import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThuMuaDoInoxPage() {
  const hotline = "0398.771.444";

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
        <title>Thu Mua Đồ Inox Cũ Giá Cao TPHCM | Thanh Lý Bàn Ghế Inox TRung Kiên</title>
        <meta name="description" content="Đồ Cũ TRung Kiên chuyên thu mua thanh lý đồ inox cũ, bàn ghế inox nhà hàng quán ăn giá cao nhất TPHCM. Có mặt sau 20 phút, tháo dỡ vận chuyển miễn phí." />
        <meta name="keywords" content="thu mua đồ inox cũ, thanh lý đồ inox, thu mua bàn ghế inox, đồ cũ TRung Kiên, thanh lý bàn ghế inox tphcm" />
        <link rel="canonical" href="https://thumuadocutrungkien.com/thu-mua-do-inox-cu" />
        <meta property="og:title" content="Dịch Vụ Thu Mua Đồ Inox Cũ Giá Cao Tận Nơi TPHCM - TRung Kiên" />
        <meta property="og:description" content="Cần thanh lý bàn ghế, thiết bị inox cũ? TRung Kiên thu mua mọi số lượng với giá cao nhất thị trường. Thanh toán 1 lần nhanh gọn." />
        <meta property="og:type" content="article" />
      </Head>

      <main className="flex-grow">

        {/* ================= BREADCRUMB ================= */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#388e3c] transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Đồ Inox</span>
          </div>
        </div>

        {/* ================= MAIN LAYOUT ================= */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH (Chiếm 3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

              <h1 className="text-3xl md:text-5xl font-black text-[#111827] uppercase leading-tight tracking-tight mb-4">
                Thanh Lý Đồ Inox
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-[#388e3c] mb-8 leading-snug border-l-4 border-[#388e3c] pl-4">
                Dịch Vụ Mua Bàn Ghế Inox Cũ - Thu Mua Mọi Sản Phẩm Giá Cao
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-10 space-y-4">
                <p>
                  <strong className="text-[#388e3c]">Đồ Cũ TRung Kiên</strong> nhận thu mua mọi mặt hàng sản phẩm bàn ghế inox đã qua sử dụng, mua với số lượng lớn và nhỏ toàn Sài Gòn 24/24. Ở đâu cần, chúng tôi có mặt!
                </p>
                <p>
                  Ngoài <strong className="text-[#111827]">đồ inox</strong>, chúng tôi còn hỗ trợ thu mua đa dạng các sản phẩm khác như giường tủ gỗ cũ, bàn ghế salon cũ mới đã qua sử dụng, mọi sản phẩm nội ngoại thất phòng khách, phòng ngủ, nhà bếp... Mua nhanh gọn trong ngày, đến tận nhà khi quý khách hàng có nhu cầu muốn thanh lý.
                </p>
              </div>

              {/* --- ẢNH 1: Tổng quan thanh lý đồ inox --- */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thu-mua-do-inox.jpg"
                  alt="Dịch vụ thu mua thanh lý đồ inox cũ giá cao TRung Kiên"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2000&auto=format&fit=crop"; }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-sm text-center">
                  TRung Kiên chuyên thu mua bàn ghế inox, thiết bị inox công nghiệp các loại
                </div>
              </div>

              {/* SECTION: Khu Vực Thu Mua */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Khu Vực Chuyên Dịch Vụ Thu Mua Đồ Inox Cũ
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Chúng tôi nhận thu mua và thanh lý mọi mặt hàng bàn ghế inox đã qua sử dụng với giá cao trọn gói tại các địa điểm:
                </p>

                <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#388e3c]/10 flex items-center justify-center flex-shrink-0 text-[#388e3c]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] mb-2 uppercase">Khu Vực TP.HCM</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">Quận 1, Quận 2, Quận 3, Quận 4, Quận 5, Quận 6, Quận 7, Quận 8, Quận 9, Quận 10, Quận 11, Quận 12, Bình Thạnh, Thủ Đức, Bình Tân, Tân Bình, Phú Nhuận, Gò Vấp.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#388e3c]/10 flex items-center justify-center flex-shrink-0 text-[#388e3c]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] mb-2 uppercase">Các Tỉnh Lân Cận</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">Biên Hòa, Đồng Nai, Bình Dương, Thủ Dầu Một... và các khu vực xung quanh.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[#388e3c] font-medium italic mt-6 border-l-4 border-[#388e3c] pl-4">
                  Thu mua nhanh gọn trong một lần với thời gian sớm nhất. Quý khách hàng đến với dịch vụ thu mua bàn ghế inox, đồ inox của chúng tôi chắc chắn sẽ hài lòng.
                </p>
              </section>

              {/* --- ẢNH 2: Thiết bị inox --- */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-do-inox-tan-binh.png"
                  alt="Thu mua thiết bị bếp inox công nghiệp cũ"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Quy Trình Thu Mua */}
              <section className="mb-12 bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#388e3c 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 relative z-10 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Quy Trình Thu Mua Thanh Lý
                </h3>

                <div className="space-y-6 relative z-10">
                  {[
                    { step: "1", title: "Tiếp nhận thông tin", desc: "Khách hàng liên hệ vào đường dây nóng của Đồ Cũ TRung Kiên, thông báo chi tiết về số lượng, địa chỉ để chúng tôi nắm rõ nhu cầu và báo giá chung." },
                    { step: "2", title: "Khảo sát", desc: "Chúng tôi cử đội ngũ nhân viên chuyên nghiệp tới tận nơi thực hiện khảo sát, đánh giá chất lượng sản phẩm để đưa ra báo giá cụ thể nhất." },
                    { step: "3", title: "Thống nhất và thu mua", desc: "Sau khi 2 bên đã đi tới thống nhất, chúng tôi sẽ tiến hành đo đếm sản phẩm và thực hiện quy trình thu mua, tháo dỡ hợp lý." },
                    { step: "4", title: "Thanh toán", desc: "Sau khi hai bên kiểm tra xong, chúng tôi sẽ thực hiện thanh toán toàn bộ chi phí cho khách hàng chỉ duy nhất trong một lần." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 items-start group bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-[#388e3c]/30 transition-all">
                      <div className="w-12 h-12 bg-[#388e3c]/10 text-[#388e3c] rounded-full flex items-center justify-center text-xl font-black flex-shrink-0 group-hover:bg-[#388e3c] group-hover:text-white transition-all duration-300">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] text-lg uppercase group-hover:text-[#388e3c] transition-colors">{item.title}</h4>
                        <p className="text-gray-600 text-base leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 3: Bàn ghế inox --- */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-12 shadow-lg group w-full md:w-3/4 mx-auto">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-do-inox-go-vap.png"
                  alt="Thu mua thanh lý bàn ghế inox các loại"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Cam Kết */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Cam Kết Của Đồ Cũ TRung Kiên
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Giá thu mua luôn được chúng tôi cam kết đúng với giá thị trường, không hề có chuyện ép giá.",
                    "Tùy thuộc vào tình trạng, chủng loại và mức giá thị trường, chúng tôi sẽ đưa ra mức giá hợp lý nhất.",
                    "Quá trình thanh toán diễn ra nhanh chóng, sòng phẳng duy nhất trong một lần.",
                    "Đội ngũ nhân viên chuyên nghiệp tự mình vận chuyển, bốc xếp và tháo dỡ.",
                    "Trao đổi dựa trên nguyên tắc thuận mua vừa bán. Khách hàng đồng ý, chúng tôi mới thu mua."
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-[#388e3c]/30 hover:shadow-md transition-all duration-300">
                      <div className="w-8 h-8 rounded-full bg-[#388e3c]/10 flex items-center justify-center flex-shrink-0 text-[#388e3c]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 4: Liên hệ --- */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-do-inox-gia-cao.png"
                  alt="Liên hệ TRung Kiên thanh lý đồ inox"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2000&auto=format&fit=crop"; }}
                />
              </div>

              {/* Nút Gọi Ngay cuối bài */}
              <div className="mt-16 bg-[#111827] rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#388e3c 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-4">Thông Tin Liên Hệ</h3>
                  <p className="text-gray-300 text-base md:text-lg mb-8 max-w-3xl mx-auto">
                    Hãy để dịch vụ thu mua thanh lý bàn ghế inox của TRung Kiên giúp bạn giải phóng mặt bằng, đồng thời tiết kiệm tối đa chi phí. Liên hệ ngay để được báo giá kịp thời, chính xác nhất!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href={`tel:${hotline}`} className="group inline-flex items-center justify-center gap-3 bg-[#388e3c] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-lg hover:bg-[#2e7d32] transition-all shadow-[0_10px_20px_rgba(136,13,17,0.3)] hover:-translate-y-1">
                      <span className="animate-pulse">📞</span> {hotline}
                    </a>
                    <a href={`https://zalo.me/${hotline.replace(/\./g, '')}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 bg-white text-[#111827] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-lg hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1 border border-transparent">
                      Chat Zalo Ngay
                    </a>
                  </div>
                </div>
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