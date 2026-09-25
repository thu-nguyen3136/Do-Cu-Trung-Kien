import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '../components/SchemaMarkup';
import FAQAccordion from '../components/FAQAccordion';
import PriceTable from '../components/PriceTable';
import SEOHead from '../components/SEOHead';

export default function ThanhLyQuanCafePage() {
  const hotline = "0398.771.444";

  const breadcrumbs = [
    { name: 'Trang chủ', url: 'https://thumuadocutrungkien.com/' },
    { name: 'Thanh Lý Quán Cafe', url: 'https://thumuadocutrungkien.com/thanh-ly-quan-ca-phe' }
  ];

  const faqs = [
    {
      question: "Trung Kiên thu mua những loại bàn ghế cafe nào?",
      answer: "Chúng tôi thu mua tất cả bàn ghế cafe gỗ, sofa cafe, bàn ghế sắt ngoài trời, ghế tolix, quầy bar pha chế, kệ trang trí quán cafe."
    },
    {
      question: "Có thu mua máy pha cafe và máy xay hạt cafe cũ không?",
      answer: "Có. Chúng tôi nhận thu mua các dòng máy pha cafe 1 group, 2 group (Casadio, Breville, Nuova Simonelli...), máy xay hạt, máy làm đá viên và tủ mát trưng bày bánh ngọt với giá cao."
    },
    {
      question: "Quán cafe cần dọn dẹp gấp trong đêm có nhận không?",
      answer: "Đồ Cũ Trung Kiên hỗ trợ tháo dỡ và dọn dẹp mặt bằng 24/7 kể cả ban đêm theo yêu cầu của ban quản lý tòa nhà hoặc chủ mặt bằng."
    }
  ];

  const priceItems = [
    { name: "Máy pha cà phê Espresso chuyên nghiệp (1 group, 2 group)", unit: "Máy", priceRange: "6.000.000 - 45.000.000 đ", note: "Nuova Simonelli, Breville, Expobar, Casadio" },
    { name: "Máy xay cà phê hạt tự động", unit: "Máy", priceRange: "1.200.000 - 8.000.000 đ", note: "Fiorenzato, Mazzer, Eureka..." },
    { name: "Bàn ghế cafe cóc, vỉa hè (Ghế xếp inox, bàn gỗ xếp)", unit: "Bộ", priceRange: "300.000 - 1.200.000 đ", note: "Bao gồm 1 bàn + 4 ghế" },
    { name: "Bàn ghế gỗ cafe máy lạnh, sofa quán cafe", unit: "Bộ", priceRange: "800.000 - 5.500.000 đ", note: "Bàn me tây, ghế eames, ghế nệm" },
    { name: "Tủ bánh kem, tủ mát trưng bày đồ uống", unit: "Chiếc", priceRange: "3.500.000 - 16.000.000 đ", note: "Kính vuông, kính cong các cỡ" },
    { name: "Máy làm đá viên tự động quán cafe", unit: "Máy", priceRange: "5.000.000 - 25.000.000 đ", note: "Công suất 30kg - 200kg/ngày" },
    { name: "Quầy bar pha chế, kệ để ly inox, bồn rửa quầy bar", unit: "Bộ", priceRange: "2.000.000 - 12.000.000 đ", note: "Inox 304 quầy bar chuyên dụng" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <SEOHead
        title="Thanh Lý Quán Cafe Giá Cao TPHCM | Thu Mua Trọn Gói 30P"
        description="Thu mua thanh lý quán cafe, quán cà phê trọn gói giá cao tại TPHCM. Bàn ghế gỗ, sofa, máy pha cafe Espresso, máy xay, quầy bar. Hotline: 0398.771.444."
        keywords="Thanh Lý Quán Cafe, thu mua quán Café, thu mua bàn ghế cũ, đồ cũ trung kiên, thanh lý máy pha cà phê"
        canonical="https://thumuadocutrungkien.com/thanh-ly-quan-ca-phe"
        ogImage="/thanh-ly-quan-cafe.jpg"
      />
      <Head>
        <BreadcrumbSchema items={breadcrumbs} />
        <ServiceSchema
          name="Thu Mua Thanh Lý Quán Cafe Giá Cao"
          description="Chuyên thu mua bàn ghế quán cafe, máy pha cafe, quầy bar và nội thất quán cafe trọn gói giá cao tại TPHCM."
          url="https://thumuadocutrungkien.com/thanh-ly-quan-ca-phe"
          image="https://thumuadocutrungkien.com/thanh-ly-quan-cafe.jpg"
        />
        <FAQSchema faqs={faqs} />
      </Head>

      <main className="flex-grow pb-12">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-100 py-3 shadow-sm">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Quán Cafe</span>
          </div>
        </nav>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH (3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">

              <header className="mb-8 border-b-2 border-brand-50 pb-6">
                <h1 className="text-2xl md:text-4xl font-black text-brand-600 uppercase tracking-tight">
                  Thanh Lý Quán Cafe Trọn Gói Giá Cao Tại TPHCM
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify space-y-6">

                <p className="text-xl">
                  <strong>Quý khách đang muốn thay đổi diện tích, không gian quán, quý khách muốn thay đổi những bộ bàn ghế để phù hợp với không gian và nhu cầu của khách hàng. Hãy liên hệ ngay cho Đồ Cũ Trung Kiên, chúng tôi</strong> chuyên thu mua bàn ghế quán cafe, <Link href="/thanh-ly-quan-nhau" className="text-brand-600 font-semibold hover:underline">quán nhậu</Link>, <Link href="/thanh-ly-quan-tra-sua" className="text-brand-600 font-semibold hover:underline">trà sữa</Link>, trà chanh nội thất quán, <Link href="/thu-mua-tu-dong-tu-mat" className="text-brand-600 font-semibold hover:underline">tủ đông tủ mát</Link>, bếp công nghiệp, <strong>thanh lý quán cafe</strong> trọn gói nội thất giá cao trên thị trường khu vực TPHCM, Đồng Nai, Bình Dương và các tỉnh lân cận.
                </p>

                <div className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-600 my-8">
                  <p className="text-2xl font-black text-brand-700 m-0">
                    Liên Hệ: <a href={`tel:${hotline}`} className="hover:underline">{hotline}</a>
                  </p>
                  <p className="mt-2 text-gray-800 font-bold italic">
                    Gọi là có mặt sau 30 phút - Không Ngại Xa
                  </p>
                  <p className="mt-1 text-red-600 font-black uppercase">
                    Khảo Sát Báo Giá Tận Nơi - Không Ngại Đường Xa - Cam Kết Giá Cao Hơn Thị Trường 20%
                  </p>
                </div>

                <figure className="my-10 text-center">
                  <div className="relative w-full aspect-[4/3] max-w-[700px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-quan-cafe-1.jpeg"
                      alt="Thanh lý bàn ghế quán cafe trọn gói giá cao"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 text-sm italic text-gray-500">Dịch vụ thu mua bàn ghế cafe tận nơi chuyên nghiệp</figcaption>
                </figure>

                <p>
                  Các bàn ghế nội thất trong quán cà phê khi quý khách muốn thanh lý đổi mới hay ngừng kinh doanh. Trên thị trường có rất nhiều đơn vị nhỏ, lẻ để thu mua lại. Nhưng hiện nay đa số đều ép giá, việc thanh lý gây khó khăn trong quá trình mua bán.
                </p>

                <p>
                  Nhưng đến với <strong>Thu Mua Đồ Cũ Trung Kiên</strong> chúng tôi cam kết không ép giá với khách hàng, gọi là có mặt ngay sau 30 phút, tự tháo dỡ, vận chuyển nhanh chóng, sạch sẽ. Khi quý khách có nhu cầu hãy gọi ngay đến Hotline: <span className="text-red-600 font-black text-2xl">{hotline}</span> chúng tôi sẽ có mặt đến tận nơi.
                </p>

                <figure className="my-10 text-center">
                  <div className="relative w-full aspect-[16/10] max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-quan-cafe-2.jpeg"
                      alt="Hình ảnh thực tế thu mua quán ăn quán cafe"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                <h2 className="text-2xl font-bold text-brand-600 uppercase border-l-4 border-brand-600 pl-4 mb-6">
                  Ưu điểm khi chọn thanh lý quán cafe tại Trung Kiên
                </h2>

                <ul className="grid grid-cols-1 gap-4 list-none p-0">
                  {[
                    "Dựa trên số lượng, tình trạng sản phẩm, chất liệu... chúng tôi đưa giá tốt nhất.",
                    "Thanh toán 100% ngay sau khi tháo dỡ và vận chuyển.",
                    "Dịch vụ thu mua cạnh tranh nhất thị trường, đảm bảo lợi ích người bán.",
                    `Báo giá siêu tốc qua Zalo: ${hotline} (Gửi hình ảnh thực tế).`,
                    "Không phát sinh thêm bất kỳ chi phí nào cho khách hàng.",
                    "Tự tháo dỡ và vận chuyển từ A đến Z chuyên nghiệp.",
                    "Chiết khấu hoa hồng cao cho người giới thiệu."
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-brand-600 font-bold">✔</span>
                      <span className="text-lg">{text}</span>
                    </li>
                  ))}
                </ul>

                <figure className="my-10 text-center">
                  <div className="relative w-full aspect-[4/3] max-w-[700px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-quan-cafe-3.jpeg"
                      alt="Đồ cũ Trung Kiên cam kết uy tín giá cao"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 text-brand-600 font-bold uppercase tracking-wide">Uy tín làm hàng đầu - Không ngại đường xa</figcaption>
                </figure>

                <h2 className="text-2xl font-bold text-brand-600 uppercase border-l-4 border-brand-600 pl-4 mb-6">
                  Cam kết của chúng tôi
                </h2>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 font-semibold">
                  <li className="bg-brand-600 text-white p-3 rounded-lg text-center">Thu mua giá cao nhất TPHCM</li>
                  <li className="bg-brand-600 text-white p-3 rounded-lg text-center">Thanh toán trọn gói 1 lần</li>
                  <li className="bg-brand-600 text-white p-3 rounded-lg text-center">Miễn phí 100% vận chuyển</li>
                  <li className="bg-brand-600 text-white p-3 rounded-lg text-center">Phục vụ 24/7 cả ngày lễ</li>
                </ul>

                {/* BẢNG GIÁ THAM KHẢO & FAQ (ON-PAGE SEO) */}
                <PriceTable
                  title="Bảng Giá Thanh Lý Quán Cafe Tham Khảo"
                  subtitle="Giá máy pha cà phê và nội thất được định giá sát thị trường theo thương hiệu và độ mới. Báo giá nhanh trong 15 phút qua Zalo!"
                  items={priceItems}
                />

                <FAQAccordion
                  title="Câu Hỏi Thường Gặp Khi Thanh Lý Quán Cafe"
                  faqs={faqs}
                />

                <section className="mt-12 p-8 bg-gray-900 text-white rounded-[2rem] shadow-2xl relative overflow-hidden">
                  <h3 className="text-2xl font-black uppercase mb-6 text-brand-500">THU MUA ĐỒ CŨ TRUNG KIÊN</h3>
                  <ul className="space-y-3 text-lg opacity-90 list-none p-0">
                    <li>📍 <strong>Chi nhánh 1:</strong> 271 Bình Long, P. Bình Hưng Hòa, Bình Tân, TP.HCM</li>
                    <li>📍 <strong>Chi nhánh 2:</strong> 207 Nơ Trang Long, P. 12, Bình Thạnh, TP.HCM</li>
                    <li>📍 <strong>Chi nhánh 3:</strong> 553 Kha Vạn Cân, P. Linh Đông, Thủ Đức, TP.HCM</li>
                    <li>📍 <strong>Chi nhánh 4:</strong> 136 Đường Số 10, P. Tân Quy, Quận 7, TP.HCM</li>
                    <li>📞 <strong>Hotline:</strong> {hotline} - Trung Kiên</li>
                  </ul>
                </section>

              </div>
            </article>

            {/* --- CỘT PHẢI: SIDEBAR (1/4) --- */}
            <aside className="lg:col-span-1 space-y-8 sticky top-24">
              <Sidebar />
            </aside>

          </div>
        </section>
      </main>
    </div>
  );
}