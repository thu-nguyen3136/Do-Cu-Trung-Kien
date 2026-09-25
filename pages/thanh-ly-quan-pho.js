import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '../components/SchemaMarkup';
import FAQAccordion from '../components/FAQAccordion';
import PriceTable from '../components/PriceTable';
import SEOHead from '../components/SEOHead';

export default function ThanhLyQuanPhoPage() {
  const hotline = "0398.771.444";

  const breadcrumbs = [
    { name: 'Trang chủ', url: 'https://thumuadocutrungkien.com/' },
    { name: 'Thanh Lý Quán Phở', url: 'https://thumuadocutrungkien.com/thanh-ly-quan-pho' }
  ];

  const faqs = [
    {
      question: "Nồi nấu phở điện cũ các dung tích có được thu mua giá cao không?",
      answer: "Có. Chúng tôi thu mua tất cả nồi nấu phở điện từ 20L, 30L, 50L, 80L, 100L đến 150L (inox 304, inox 201) với giá cao nhất TPHCM."
    },
    {
      question: "Trung Kiên có thu mua tủ kính bán phở và xe phở inox không?",
      answer: "Có. Chúng tôi nhận thu mua trọn gói xe phở inox, tủ kính trưng bày thịt, kệ inox đựng gia vị, bàn ghế inox hoặc bàn ghế gỗ quán phở."
    },
    {
      question: "Có nhận thanh lý quán phở ở các tỉnh lân cận như Bình Dương, Đồng Nai không?",
      answer: "Có. Đồ Cũ Trung Kiên nhận thu mua tận nơi tại TP.HCM và các tỉnh lân cận như Bình Dương, Đồng Nai, Long An. Có mặt sau 45-60 phút."
    }
  ];

  const priceItems = [
    { name: "Thanh lý bộ 3 nồi nấu phở điện inox (Hầm xương, nấu nước lèo, trần bánh)", unit: "Bộ", priceRange: "4.500.000 - 16.000.000 đ", note: "Inox 304 dày 1.2mm, thanh nhiệt mới" },
    { name: "Thanh lý nồi nấu phở điện đơn 50L - 100L", unit: "Chiếc", priceRange: "1.800.000 - 6.000.000 đ", note: "Chế độ sôi tự động ngắt tiết kiệm điện" },
    { name: "Thanh lý xe đẩy bán phở, tủ kính inox bán bún phở có bánh xe", unit: "Chiếc", priceRange: "2.000.000 - 7.500.000 đ", note: "Kèm nồi gắn liền hoặc tủ kính trưng bày" },
    { name: "Thanh lý bàn ghế inox chữ nhật + ghế đôn inox quán phở", unit: "Bộ", priceRange: "700.000 - 3.200.000 đ", note: "1 bàn + 6 ghế đôn inox 201/304" },
    { name: "Thanh lý tủ đông tủ mát bảo quản thịt bò, rau củ", unit: "Chiếc", priceRange: "2.500.000 - 12.000.000 đ", note: "Sanaky, Alaska, Darling" },
    { name: "Thanh lý máy thái thịt bò tươi sống quán phở", unit: "Máy", priceRange: "1.500.000 - 6.500.000 đ", note: "Lưỡi dao thép sắc bén, mô tơ khỏe" },
    { name: "Thanh lý bát tô sứ trắng, muỗng đũa, hộp gia vị, ớt tỏi", unit: "Lô/Trọn gói", priceRange: "800.000 - 5.000.000 đ", note: "Định giá theo số lượng thực tế" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800 flex flex-col">
      <SEOHead
        title="Thanh Lý Quán Phở Giá Cao TPHCM | Nồi Phở Điện, Bàn Ghế Inox"
        description="Thu mua thanh lý quán phở, bún bò, hủ tiếu trọn gói giá cao TPHCM. Nồi phở điện, tủ kính bán phở, bàn ghế inox. Khảo sát 30p. Hotline: 0398.771.444."
        keywords="thanh lý quán phở, thu mua quán phở, thanh lý nồi phở điện, thu mua bàn ghế quán phở, đồ cũ trung kiên"
        canonical="https://thumuadocutrungkien.com/thanh-ly-quan-pho"
        ogImage="/thanh-ly-quan-pho.jpg"
      />
      <Head>
        <BreadcrumbSchema items={breadcrumbs} />
        <ServiceSchema
          name="Thu Mua Thanh Lý Quán Phở Trọn Gói Giá Cao"
          description="Chuyên thu mua nồi phở điện, bàn ghế quán phở, tủ kính bán phở và thiết bị bếp giá cao tại TPHCM."
          url="https://thumuadocutrungkien.com/thanh-ly-quan-pho"
          image="https://thumuadocutrungkien.com/thanh-ly-quan-pho.jpg"
        />
        <FAQSchema faqs={faqs} />
      </Head>

      <main className="flex-grow pb-12">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-100 py-3 shadow-sm">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Quán Phở</span>
          </div>
        </nav>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH --- */}
            <article className="lg:col-span-3">

              <header className="mb-8 border-b-2 border-brand-50 pb-6 text-center">
                <h1 className="text-2xl md:text-4xl font-black text-brand-600 uppercase tracking-tight">
                  Thanh Lý Quán Phở Trọn Gói Giá Cao TPHCM - Đồ Cũ Trung Kiên
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify space-y-8">

                <section>
                  <h2 className="!text-xl md:!text-2xl font-bold text-red-700 uppercase mb-4">
                    Dịch Vụ Thu Mua Đồ Dùng Quán Phở Uy Tín Tại TPHCM
                  </h2>
                  <p>
                    Bạn đang cần <strong>thanh lý quán phở</strong> để chuyển đổi kinh doanh hoặc trả mặt bằng? Bạn băn khoăn không biết đơn vị nào thu mua giá cao và dọn dẹp nhanh chóng? Hãy liên hệ ngay với <strong>Đồ Cũ Trung Kiên</strong>. Chúng tôi chuyên thu mua trọn gói thiết bị quán phở, quán hủ tiếu, quán bún bò cũng như <Link href="/thanh-ly-quan-an" className="text-brand-600 font-semibold hover:underline">quán ăn</Link>, <Link href="/thu-mua-do-inox-cu" className="text-brand-600 font-semibold hover:underline">đồ inox nhà bếp</Link> và <Link href="/thu-mua-tu-dong-tu-mat" className="text-brand-600 font-semibold hover:underline">tủ đông tủ mát</Link> với mức giá cạnh tranh nhất thị trường.
                  </p>
                  <p className="bg-yellow-300 inline-block px-4 py-2 font-black text-red-600 rounded-lg">
                    Hotline Tư Vấn: {hotline} (Zalo: 0398771444)
                  </p>
                </section>

                {/* ẢNH 1: THIẾT BỊ BẾP QUÁN PHỞ */}
                <figure className="my-10">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-do-quan-pho-1.jpg"
                      alt="Thanh lý nồi nấu phở điện inox và thiết bị bếp quán phở"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-center mt-3 text-sm italic text-gray-500">Trung Kiên thu mua nồi nấu phở điện mọi kích cỡ giá cao</figcaption>
                </figure>

                <section>
                  <h2 className="!text-xl md:!text-2xl font-bold text-red-700 uppercase mb-4">
                    Trung Kiên Nhận Thu Mua Những Gì Tại Quán Phở?
                  </h2>
                  <p>
                    Chúng tôi không ngại số lượng, nhận thu mua từ quán phở bình dân đến nhà hàng phở quy mô lớn. Danh mục thu mua bao gồm:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 mt-4">
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 font-medium">
                      ✅ <strong>Thiết bị bếp:</strong> Nồi nấu phở điện, nồi hầm xương, bếp gas công nghiệp, tủ kính trưng bày phở, bàn chặt inox.
                    </li>
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 font-medium">
                      ✅ <strong>Đồ điện lạnh:</strong> Tủ đông, tủ mát Sanaky, Alaska, máy lạnh trung tâm, quạt hơi nước.
                    </li>
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 font-medium">
                      ✅ <strong>Nội thất:</strong> Bộ bàn ghế gỗ, bàn ghế inox, quầy thu ngân, bảng hiệu.
                    </li>
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 font-medium">
                      ✅ <strong>Vật dụng khác:</strong> Bát, đĩa, muỗng, đũa số lượng lớn và các loại máy xay thịt, máy thái thịt.
                    </li>
                  </ul>
                </section>

                {/* ẢNH 2: BÀN GHẾ QUÁN PHỞ */}
                <figure className="my-10">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-do-quan-pho-2.jpg"
                      alt="Thu mua bàn ghế inox và gỗ quán phở cũ"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                <section className="bg-brand-50 p-8 rounded-[2rem] border-2 border-brand-100">
                  <h2 className="!text-xl md:!text-2xl font-bold text-brand-700 uppercase mb-6 text-center">
                    Tại Sao Nên Chọn Đồ Cũ Trung Kiên?
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      "Cam kết giá thu mua cao hơn thị trường 20%, không ép giá.",
                      "Khảo sát tận nơi chỉ sau 30 phút nhận cuộc gọi.",
                      "Thanh toán dứt điểm 100% bằng tiền mặt hoặc chuyển khoản.",
                      "Đội ngũ tháo dỡ chuyên nghiệp, dọn dẹp sạch sẽ mặt bằng miễn phí.",
                      "Phục vụ tất cả các ngày trong tuần, kể cả ngày lễ và Chủ Nhật."
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                        <span className="text-brand-600 font-black">✔</span>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ẢNH 3: TỔNG QUAN THU MUA */}
                <figure className="my-10">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-do-quan-pho-3.jpg"
                      alt="Quy trình thu mua quán phở chuyên nghiệp tận nơi"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-center mt-3 text-sm italic text-gray-500 font-bold">
                    Hỗ trợ giải phóng mặt bằng nhanh nhất cho khách hàng
                  </figcaption>
                </figure>

                {/* BẢNG GIÁ THAM KHẢO & FAQ (ON-PAGE SEO) */}
                <PriceTable
                  title="Bảng Giá Thanh Lý Quán Phở Tham Khảo"
                  subtitle="Giá nồi phở điện và bàn ghế inox phụ thuộc vào kích cỡ, độ mới và chủng loại inox 304/201. Khảo sát báo giá tận nơi sau 30 phút!"
                  items={priceItems}
                />

                <FAQAccordion
                  title="Câu Hỏi Thường Gặp Khi Thanh Lý Quán Phở"
                  faqs={faqs}
                />

                {/* KHU VỰC PHỤC VỤ (SEO LOCAL) */}
                <section>
                  <h2 className="!text-xl md:!text-2xl font-bold text-red-700 uppercase mb-6">
                    Khu Vực Thu Mua Quán Phở Tại TP.HCM
                  </h2>
                  <p>Chúng tôi nhận thu mua tận nơi tại tất cả các quận huyện:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm font-bold text-brand-700">
                    {["Quận 1", "Quận 3", "Quận 5", "Quận 7", "Quận 10", "Bình Tân", "Gò Vấp", "Tân Bình", "Thủ Đức", "Bình Chánh", "Hóc Môn", "Củ Chi"].map((q, i) => (
                      <div key={i} className="bg-white p-2 border border-gray-100 rounded shadow-sm text-center">
                        {q}
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 italic">Và các tỉnh lân cận như: <strong>Đồng Nai, Bình Dương, Long An, Tây Ninh...</strong></p>
                </section>

                {/* FOOTER BÀI VIẾT */}
                <footer className="mt-12 p-8 bg-gray-900 text-white rounded-[2rem] shadow-2xl">
                  <h3 className="text-2xl font-black uppercase mb-6 text-brand-500">THU MUA ĐỒ CŨ TRUNG KIÊN</h3>
                  <div className="space-y-4 font-medium opacity-90">
                    <p>📍 <strong>Địa Chỉ:</strong> 271 Bình Long, Phường Bình Hưng Hòa, Quận Bình Tân, TP.HCM</p>
                    <p>📞 <strong>Hotline:</strong> <span className="text-brand-400 text-xl">{hotline}</span> - Trung Kiên</p>
                    <p>💬 <strong>Zalo báo giá:</strong> 0398.771.444 (Gửi ảnh nhận báo giá ngay)</p>
                    <p>🌐 <strong>Website:</strong> thumuadocutrungkien.com</p>
                  </div>
                </footer>

              </div>
            </article>

            {/* --- CỘT PHẢI: SIDEBAR --- */}
            <aside className="lg:col-span-1 sticky top-24">
              <Sidebar />
            </aside>

          </div>
        </section>
      </main>
    </div>
  );
}