import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../../components/Sidebar';

export default function ArticleKinhNghiemDoCu() {
  const hotline = "0398.771.444";

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        <title>Kinh Nghiệm Thanh Lý Đồ Cũ Giá Cao Tại TPHCM (Cập Nhật 2026)</title>
        <meta name="description" content="Bí quyết thanh lý đồ cũ gia đình, đồ văn phòng, bàn ghế quán cafe với giá cao nhất TPHCM. Chọn đúng đơn vị thu mua trọn gói giúp bạn không bị ép giá." />
        <link rel="canonical" href="https://thumuadocugiacao.net/tin-tuc/kinh-nghiem-thanh-ly-do-cu-gia-cao" />
      </Head>

      <main className="flex-grow pb-20">
        {/* ================= BREADCRUMB ================= */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#388e3c] transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link href="/tin-tuc" className="hover:text-[#388e3c] transition-colors">Tin tức</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium line-clamp-1">Kinh Nghiệm Thanh Lý Đồ Cũ Giá Cao</span>
          </div>
        </div>

        {/* ================= MAIN LAYOUT ================= */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">

              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="bg-[#388e3c]/10 text-[#388e3c] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Mẹo Vặt - Chia Sẻ</span>
                <span className="text-gray-500 text-sm">Cập nhật: 2026</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111827] mb-8 leading-tight tracking-tight">
                Kinh Nghiệm Thanh Lý Đồ Cũ Giá Cao Tại TPHCM Bạn Nên Biết
              </h1>

              {/* --- ẢNH CHÍNH --- */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-10 shadow-lg">
                <Image
                  src="/thu-mua-do-cu-gia-dinh-3.jpeg"
                  alt="Kinh nghiệm thanh lý đồ cũ giá cao tại TPHCM"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* LỜI MỞ ĐẦU */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-12">
                <p>
                  Khi dọn nhà, chuyển văn phòng hay đổi mới mô hình kinh doanh quán cafe, bạn sẽ phải đối mặt với một đống <strong>đồ cũ, đồ nội thất</strong> cần giải quyết. Thay vì vứt bỏ lãng phí, việc thanh lý lại cho các cửa hàng thu mua đồ cũ là giải pháp thông minh giúp bạn thu hồi một khoản vốn đáng kể.
                </p>
                <p>
                  Tuy nhiên, làm sao để bán được giá cao, không bị ép giá và dọn dẹp nhanh gọn? Hãy cùng <strong className="text-[#388e3c]">Đồ Cũ Trung Kiên</strong> tham khảo những kinh nghiệm "xương máu" dưới đây nhé!
                </p>
              </div>

              {/* SECTION: Nội dung bài viết */}
              <section className="mb-12">
                <h2 className="text-2xl font-black text-[#111827] border-l-4 border-[#388e3c] pl-4 mb-6">
                  1. Phân loại và vệ sinh sơ bộ sản phẩm
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Một món đồ trông sạch sẽ, gọn gàng chắc chắn sẽ tạo ấn tượng tốt và được định giá cao hơn so với đồ bám đầy bụi bẩn. Trước khi gọi thợ đến thu mua, bạn nên:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                  <li><strong>Phân loại:</strong> Tách riêng đồ gỗ (giường, tủ, bàn ghế), đồ điện lạnh (tủ mát, máy lạnh), và thiết bị văn phòng.</li>
                  <li><strong>Vệ sinh:</strong> Lau bụi bề mặt, kiểm tra xem sản phẩm còn hoạt động tốt không (đối với đồ điện tử).</li>
                </ul>

                <h2 className="text-2xl font-black text-[#111827] border-l-4 border-[#388e3c] pl-4 mb-6">
                  2. Cung cấp thông tin chi tiết cho bên thu mua
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Hiện nay, để tiết kiệm thời gian, các đơn vị uy tín như Trung Kiên thường hỗ trợ <strong>báo giá online qua Zalo</strong>. Để nhận được báo giá chính xác nhất, bạn hãy chụp ảnh thật rõ nét (nhiều góc độ), báo rõ tình trạng xước xát, năm mua, và thương hiệu của sản phẩm.
                </p>

                <h2 className="text-2xl font-black text-[#111827] border-l-4 border-[#388e3c] pl-4 mb-6">
                  3. Lựa chọn đơn vị thu mua trọn gói, uy tín
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Tuyệt đối tránh bán lẻ tẻ cho những người thu mua ve chai dạo vì bạn sẽ bị ép giá rất thấp. Hãy chọn những công ty lớn có khả năng <strong>thu mua trọn gói</strong>.
                </p>
                <div className="bg-[#388e3c]/5 border border-[#388e3c]/10 p-6 rounded-2xl mb-8">
                  <p className="text-[#388e3c] font-bold mb-2">💡 Tại TPHCM, Đồ Cũ Trung Kiên cam kết:</p>
                  <ul className="space-y-2 text-gray-800 font-medium">
                    <li>- Mua trọn gói từ A-Z không kén chọn.</li>
                    <li>- Tự tháo dỡ, khuân vác, không tính phí vận chuyển.</li>
                    <li>- Trả tiền mặt/chuyển khoản dứt điểm 1 lần duy nhất.</li>
                  </ul>
                </div>
              </section>

              {/* SECTION: FAQ Accordion */}
              <section className="mb-12">
                <h2 className="text-2xl font-black text-[#111827] border-b-2 border-gray-100 pb-4 mb-6">
                  Các câu hỏi thường gặp
                </h2>
                <div className="space-y-4">
                  {[
                    { q: "Đồ cũ bị hỏng hóc nhẹ có được thu mua không?", a: "Có. Đồ Cũ Trung Kiên vẫn thu mua các mặt hàng như bàn ghế trầy xước, tủ mát chạy yếu... Chúng tôi sẽ có đội ngũ thợ mộc, thợ điện lạnh tự tu sửa lại." },
                    { q: "Có cần trả phí cho nhân viên đến khảo sát không?", a: "Hoàn toàn MIỄN PHÍ. Kể cả khi nhân viên đến tận nhà khảo sát nhưng bạn không đồng ý bán, Trung Kiên vẫn vui vẻ ra về mà không thu bất kỳ phí gì." }
                  ].map((faq, index) => (
                    <details key={index} className="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-[#111827] font-bold hover:bg-gray-100 transition-colors">
                        {faq.q}
                        <span className="text-[#388e3c] group-open:-rotate-180 transition-transform">▼</span>
                      </summary>
                      <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">{faq.a}</div>
                    </details>
                  ))}
                </div>
              </section>

              {/* CTA Cuối bài */}
              <div className="mt-10 bg-[#111827] rounded-3xl p-8 text-center shadow-xl">
                <h3 className="text-2xl font-black text-white uppercase mb-4">Cần Thanh Lý Đồ Cũ Nhanh Chóng?</h3>
                <p className="text-gray-300 mb-8">Hãy chụp ảnh gửi ngay qua Zalo để Trung Kiên báo giá cao nhất cho bạn trong 5 phút!</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={`tel:${hotline}`} className="bg-[#388e3c] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#2e7d32] transition-all">Gọi Hotline: {hotline}</a>
                  <a href={`https://zalo.me/${hotline.replace(/\./g, '')}`} target="_blank" rel="noopener noreferrer" className="bg-white text-[#111827] px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all">Nhắn Tin Zalo</a>
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