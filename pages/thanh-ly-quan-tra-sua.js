import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '../components/SchemaMarkup';
import FAQAccordion from '../components/FAQAccordion';
import PriceTable from '../components/PriceTable';
import SEOHead from '../components/SEOHead';

export default function ThanhLyQuanTraSuaPage() {
  const hotline = "0398.771.444";

  const breadcrumbs = [
    { name: 'Trang chủ', url: 'https://thumuadocutrungkien.com/' },
    { name: 'Thanh Lý Quán Trà Sữa', url: 'https://thumuadocutrungkien.com/thanh-ly-quan-tra-sua' }
  ];

  const faqs = [
    {
      question: "Đồ Cũ Trung Kiên thu mua những máy móc trà sữa nào?",
      answer: "Chúng tôi thu mua máy dập nắp cốc tự động, máy định lượng đường, bình ủ trà inox, máy đun nước sôi siêu tốc, máy xay sinh tố công nghiệp, quầy pha chế inox có bồn rửa."
    },
    {
      question: "Bàn ghế bệt, ghế gỗ trà sữa cũ có mua không?",
      answer: "Có. Chúng tôi nhận thu mua toàn bộ bàn ghế bệt phong cách Hàn Quốc/Nhật Bản, sofa nệm, ghế cafe trà sữa và đèn trang trí."
    },
    {
      question: "Hình thức thanh lý trọn gói quán trà sữa như thế nào?",
      answer: "Chỉ cần gửi ảnh qua Zalo 0398.771.444, chúng tôi báo giá ước tính sau 5 phút và đến tận quán khảo sát, chốt giá, tự bốc xếp và thanh toán 100% tiền mặt."
    }
  ];

  const priceItems = [
    { name: "Máy dập nắp cốc tự động (Fest, Yubann, YiFang...)", unit: "Máy", priceRange: "1.500.000 - 5.500.000 đ", note: "Mắt đọc quang học chuẩn, dập nhanh" },
    { name: "Máy định lượng đường tự động 16 nút", unit: "Máy", priceRange: "1.000.000 - 3.800.000 đ", note: "Bơm đường chính xác, inox sáng đẹp" },
    { name: "Máy làm trân châu tự động, nồi ủ trân châu", unit: "Bộ", priceRange: "1.200.000 - 6.000.000 đ", note: "Các dòng máy vo hạt, nồi ủ giữ nhiệt" },
    { name: "Bình ủ trà inox 8L - 10L - 12L giữ nhiệt", unit: "Chiếc", priceRange: "250.000 - 800.000 đ", note: "Ruột inox 304 2 lớp cách nhiệt" },
    { name: "Quầy pha chế trà sữa inox 304 có khay topping, bồn rửa", unit: "Bộ", priceRange: "3.500.000 - 15.000.000 đ", note: "Dài 1m2 - 2m2 theo kích thước" },
    { name: "Máy làm đá viên quán trà sữa 40kg - 120kg", unit: "Máy", priceRange: "4.500.000 - 18.000.000 đ", note: "Làm đá nhanh, đá già tinh khiết" },
    { name: "Bàn ghế bệt gỗ, bàn ghế sắt bọc đệm quán trà sữa", unit: "Bộ", priceRange: "400.000 - 2.500.000 đ", note: "1 bàn + 4 ghế theo mẫu mã quán" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <SEOHead
        title="Thanh Lý Quán Trà Sữa Giá Cao TPHCM | Máy Dập Nắp, Quầy Bar"
        description="Chuyên thu mua thanh lý quán trà sữa trọn gói giá cao TPHCM: máy dập nắp, máy định lượng đường, quầy bar inox, bàn ghế. Khảo sát ngay: 0398.771.444."
        keywords="thanh lý quán trà sữa, thu mua quán trà sữa, thanh lý máy dập nắp trà sữa, đồ cũ trung kiên, thu mua quầy bar inox"
        canonical="https://thumuadocutrungkien.com/thanh-ly-quan-tra-sua"
        ogImage="/thanh-ly-quan-tra-sua.jpg"
      />
      <Head>
        <BreadcrumbSchema items={breadcrumbs} />
        <ServiceSchema
          name="Thu Mua Thanh Lý Quán Trà Sữa Trọn Gói Giá Cao"
          description="Chuyên thu mua máy dập nắp cốc, máy định lượng đường, quầy pha chế inox, bàn ghế quán trà sữa giá cao tại TPHCM."
          url="https://thumuadocutrungkien.com/thanh-ly-quan-tra-sua"
          image="https://thumuadocutrungkien.com/thanh-ly-quan-tra-sua.jpg"
        />
        <FAQSchema faqs={faqs} />
      </Head>

      <main className="flex-grow pb-12">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-100 py-3 shadow-sm">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Quán Trà Sữa</span>
          </div>
        </nav>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">

              <header className="mb-8 border-b-2 border-brand-50 pb-6 text-center">
                <h1 className="text-2xl md:text-4xl font-black text-brand-600 uppercase tracking-tight">
                  Thanh Lý Quán Trà Sữa Trọn Gói Giá Cao TPHCM - Đồ Cũ Trung Kiên
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify space-y-8">

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-red-700 uppercase mb-4">
                    Dịch Vụ Thu Mua Thiết Bị Quán Trà Sữa Tận Nơi TPHCM
                  </h2>
                  <p>
                    Kinh doanh trà sữa đang là xu hướng nhưng cũng cạnh tranh rất lớn. Khi bạn cần <strong>thanh lý quán trà sữa</strong> để nâng cấp mặt bằng hoặc chuyển hướng sang mô hình <Link href="/thanh-ly-quan-ca-phe" className="text-brand-600 font-semibold hover:underline">quán cafe</Link>, <Link href="/thanh-ly-quan-an" className="text-brand-600 font-semibold hover:underline">quán ăn</Link>, <strong>Đồ Cũ Trung Kiên</strong> luôn sẵn sàng hỗ trợ. Chúng tôi chuyên thu mua tất cả thiết bị máy móc pha chế, <Link href="/thu-mua-do-inox-cu" className="text-brand-600 font-semibold hover:underline">quầy bar inox</Link> và <Link href="/thu-mua-tu-dong-tu-mat" className="text-brand-600 font-semibold hover:underline">tủ đông tủ mát</Link> quán trà sữa với cam kết giá cao hơn thị trường 20%.
                  </p>
                  <p className="bg-yellow-300 inline-block px-4 py-2 font-black text-red-600 rounded-lg">
                    GỌI BÁO GIÁ NGAY: {hotline}
                  </p>
                </section>

                {/* ẢNH 1: MÁY MÓC PHA CHẾ */}
                <figure className="my-10">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-quan-tra-sua-1.jpg"
                      alt="Thanh lý máy đóng nắp ly, máy định lượng đường và thiết bị pha chế trà sữa"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-center mt-3 text-sm italic text-gray-500 text-left">Trung Kiên thu mua trọn gói máy móc pha chế hiện đại</figcaption>
                </figure>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-red-700 uppercase mb-4">
                    Các hạng mục Trung Kiên thu mua tại Quán Trà Sữa
                  </h2>
                  <p>
                    Chúng tôi nhận thu mua trọn gói, không kể ít hay nhiều. Các thiết bị bao gồm:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 mt-4">
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      🥤 <strong>Máy móc:</strong> Máy đóng nắp ly tự động, máy định lượng đường, máy làm đá viên, máy đánh kem (milk foam), bình ủ trà.
                    </li>
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      ❄️ <strong>Điện lạnh:</strong> Tủ mát trưng bày topping, tủ đông đựng trân châu, máy lạnh, quạt công nghiệp.
                    </li>
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      🪑 <strong>Nội thất:</strong> Quầy bar inox hoặc gỗ, bộ bàn ghế sofa decor, bàn ghế gỗ cao su, kệ trang trí.
                    </li>
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      📺 <strong>Khác:</strong> Hệ thống loa âm trần, máy tính tiền POS, bảng hiệu LED, đèn trang trí.
                    </li>
                  </ul>
                </section>

                {/* ẢNH 2: NỘI THẤT BÀN GHẾ TRÀ SỮA */}
                <figure className="my-10">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-quan-tra-sua-2.jpg"
                      alt="Thu mua bàn ghế quán trà sữa decor cũ giá cao"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                <section className="bg-brand-50 p-8 rounded-[2rem] border-2 border-brand-100">
                  <h2 className="text-xl md:text-2xl font-bold text-brand-700 uppercase mb-6 text-center">
                    Lợi ích khi thanh lý tại Đồ Cũ Trung Kiên
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Khảo sát và báo giá nhanh chóng chỉ sau 30 phút gọi điện.",
                      "Giá thu mua sát với giá trị thực tế của trang thiết bị hiện đại.",
                      "Tự tháo dỡ, bốc xếp nhanh gọn, vệ sinh mặt bằng sạch sẽ.",
                      "Thanh toán 100% bằng tiền mặt hoặc chuyển khoản ngay tại chỗ.",
                      "Hỗ trợ xe tải vận chuyển chuyên dụng, không làm phiền hàng xóm."
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                        <span className="text-brand-600 font-black">✔</span>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ẢNH 3: TỔNG QUAN CỬA HÀNG TRÀ SỮA */}
                <figure className="my-10">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-quan-tra-sua-3.jpg"
                      alt="Quy trình thu mua dọn dẹp quán trà sữa chuyên nghiệp"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                {/* BẢNG GIÁ THAM KHẢO & FAQ (ON-PAGE SEO) */}
                <PriceTable
                  title="Bảng Giá Thanh Lý Quán Trà Sữa Tham Khảo"
                  subtitle="Giá máy dập nắp, máy định lượng đường và quầy bar inox phụ thuộc vào tình trạng và nhãn hiệu. Khảo sát tận nơi sau 30 phút!"
                  items={priceItems}
                />

                <FAQAccordion
                  title="Câu Hỏi Thường Gặp Khi Thanh Lý Quán Trà Sữa"
                  faqs={faqs}
                />

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-red-700 uppercase mb-4">
                    Khu vực phục vụ thu mua quán trà sữa
                  </h2>
                  <p>
                    <strong>Công ty Trung Kiên</strong> nhận thu mua quán trà sữa tại tất cả các quận huyện TPHCM: Quận 1, 3, 5, 7, 10, Bình Tân, Tân Bình, Gò Vấp, Thủ Đức... và các khu vực lân cận như Bình Dương, Đồng Nai, Long An.
                  </p>
                  <p>
                    Chỉ cần bạn gọi, chúng tôi có mặt ngay. Không ngại xa, không ngại ít đồ!
                  </p>
                </section>

                {/* THÔNG TIN LIÊN HỆ GỐC */}
                <footer className="mt-12 p-8 bg-gray-900 text-white rounded-[2rem] shadow-2xl">
                  <h3 className="text-2xl font-black uppercase mb-6 text-brand-500">THU MUA ĐỒ CŨ TRUNG KIÊN</h3>
                  <div className="space-y-4 font-medium opacity-90 text-left">
                    <p>📍 <strong>Địa Chỉ 1:</strong> 271 Bình Long, Phường Bình Hưng Hòa, Quận Bình Tân, TP.HCM</p>
                    <p>📍 <strong>Địa Chỉ 2:</strong> 207 Nơ Trang Long, Phường 12, Quận Bình Thạnh, TP.HCM</p>
                    <p>📍 <strong>Địa Chỉ 3:</strong> 553 Kha Vạn Cân, Phường Linh Đông, Quận Thủ Đức, TPHCM</p>
                    <p>📍 <strong>Địa Chỉ 4:</strong> 136 Đường Số 10, Phường Tân Quy, Quận 7, TPHCM</p>
                    <p className="text-brand-400 text-xl">📞 <strong>Hotline:</strong> {hotline} - Trung Kiên</p>
                    <p>💬 <strong>Zalo báo giá:</strong> 0398.771.444 (Gửi ảnh nhận báo giá ngay)</p>
                  </div>
                </footer>

              </div>
            </article>

            {/* --- CỘT PHẢI: SIDEBAR --- */}
            <aside className="lg:col-span-1 sticky top-24 text-left">
              <Sidebar />
            </aside>

          </div>
        </section>
      </main>
    </div>
  );
}