import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '../components/SchemaMarkup';
import FAQAccordion from '../components/FAQAccordion';
import PriceTable from '../components/PriceTable';
import SEOHead from '../components/SEOHead';

export default function ThanhLyQuanNhauPage() {
  const hotline = "0398.771.444";

  const breadcrumbs = [
    { name: 'Trang chủ', url: 'https://thumuadocutrungkien.com/' },
    { name: 'Thanh Lý Quán Nhậu', url: 'https://thumuadocutrungkien.com/thanh-ly-quan-nhau' }
  ];

  const faqs = [
    {
      question: "Trung Kiên có thu mua bếp nướng và hệ thống hút khói quán BBQ không?",
      answer: "Có. Chúng tôi nhận thu mua trọn gói bàn nướng không khói, ống hút khói dương, quạt hút công nghiệp, bếp khè, bếp chiên nhúng và tủ đông bảo quản thịt."
    },
    {
      question: "Bàn ghế gỗ thông quán nhậu cũ có được thu mua giá cao không?",
      answer: "Đồ Cũ Trung Kiên luôn định giá sát thị trường và thu mua với giá cao hơn 20% so với các đơn vị ve chai nhỏ lẻ, không ép giá."
    },
    {
      question: "Có nhận thanh lý quán nhậu ngoài giờ hành chính không?",
      answer: "Có. Đội ngũ thợ của chúng tôi làm việc 24/7, có thể bốc xếp hàng lúc đêm muộn hoặc sáng sớm để trả mặt bằng đúng hạn cho khách."
    }
  ];

  const priceItems = [
    { name: "Thanh lý bàn ghế gỗ thông xếp quán nhậu (1 bàn + 4-6 ghế)", unit: "Bộ", priceRange: "500.000 - 2.200.000 đ", note: "Bàn chân sắt hoặc toàn bộ gỗ thông" },
    { name: "Thanh lý bàn ghế inox quán nhậu (Bàn tròn, bàn dài + ghế đôn)", unit: "Bộ", priceRange: "650.000 - 3.000.000 đ", note: "Inox sáng đẹp, không móp méo" },
    { name: "Thanh lý bếp nướng âm bàn than hoa / gas quán BBQ", unit: "Bộ", priceRange: "600.000 - 2.500.000 đ", note: "Kèm vỉ nướng, khay chứa than" },
    { name: "Thanh lý hệ thống ống hút khói dương quán BBQ lẩu nướng", unit: "Đường ống", priceRange: "4.000.000 - 20.000.000 đ", note: "Ống thả trần co giãn, quạt tổng" },
    { name: "Thanh lý tủ bia sệt, tủ bảo quản bia tươi quán nhậu", unit: "Chiếc", priceRange: "3.500.000 - 15.000.000 đ", note: "Làm lạnh nhanh, lốc máy êm" },
    { name: "Thanh lý tủ đông kem, tủ mát bảo quản thực phẩm quán nhậu", unit: "Chiếc", priceRange: "2.500.000 - 14.000.000 đ", note: "Sanaky, Berjaya, Alaska" },
    { name: "Thanh lý bếp khè xào nấu công nghiệp + bình gas", unit: "Bộ", priceRange: "400.000 - 1.800.000 đ", note: "Họng gang đúc chịu lực" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800 flex flex-col">
      <SEOHead
        title="Thanh Lý Quán Nhậu Giá Cao TPHCM | Thu Mua Quán BBQ Trọn Gói"
        description="Chuyên thu mua thanh lý quán nhậu, quán nướng BBQ trọn gói giá cao tại TPHCM. Bàn ghế gỗ thông, bếp nướng, hút khói, tủ bia. Hotline 24/7: 0398.771.444."
        keywords="Thanh Lý Quán Nhậu, thu mua quán nhậu, thanh lý bàn ghế quán nhậu, đồ cũ trung kiên, thanh lý quán nướng BBQ"
        canonical="https://thumuadocutrungkien.com/thanh-ly-quan-nhau"
        ogImage="/thanh-ly-quan-nhau.jpg"
      />
      <Head>
        <BreadcrumbSchema items={breadcrumbs} />
        <ServiceSchema
          name="Thu Mua Thanh Lý Quán Nhậu Trọn Gói Giá Cao"
          description="Chuyên thu mua bàn ghế quán nhậu, bếp nướng BBQ, tủ đông tủ mát và trang thiết bị quán nhậu tại TPHCM."
          url="https://thumuadocutrungkien.com/thanh-ly-quan-nhau"
          image="https://thumuadocutrungkien.com/thanh-ly-quan-nhau.jpg"
        />
        <FAQSchema faqs={faqs} />
      </Head>

      <main className="flex-grow pb-12">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-100 py-3 shadow-sm">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-sm text-gray-500 text-left">
            <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Quán Nhậu</span>
          </div>
        </nav>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG --- */}
            <article className="lg:col-span-3">

              <header className="mb-8 border-b-2 border-brand-50 pb-6">
                <h1 className="text-2xl md:text-3xl font-black text-brand-600 uppercase tracking-tight text-left">
                  Thanh Lý Quán Nhậu Giá Cao Trọn Gói TPHCM - Đồ Cũ Trung Kiên
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify space-y-6">

                <section>
                  <p className="text-[18px] font-bold text-gray-900">
                    Dịch vụ thanh lý quán nhậu, thanh lý bàn ghế quán nhậu, nội thất quán nhậu, nhà hàng BBQ giá cao tại HCM
                  </p>
                  <p className="text-[18px]">
                    Quý khách đang muốn thay đổi diện tích, không gian quán, quý khách muốn thay đổi những bộ bàn ghế để phù hợp với không gian và nhu cầu của khách hàng. Hãy liên hệ ngay cho <strong>Đồ Cũ Trung Kiên</strong>, chúng tôi chuyên thu mua bàn ghế quán BBQ, quán nướng, quán nhậu, trà sữa, trà chanh nội thất quán, <Link href="/thu-mua-tu-dong-tu-mat" className="text-brand-600 font-semibold hover:underline">tủ đông tủ mát</Link>, bếp công nghiệp, <Link href="/thu-mua-do-inox-cu" className="text-brand-600 font-semibold hover:underline">đồ inox</Link>, <strong>thanh lý quán nhậu</strong>, quán nướng, quán BBQ, <Link href="/thanh-ly-quan-an" className="text-brand-600 font-semibold hover:underline">quán ăn</Link> và <Link href="/thanh-ly-nha-hang" className="text-brand-600 font-semibold hover:underline">nhà hàng</Link> trọn gói nội thất giá cao trên thị trường khu vực TPHCM, Đồng Nai, Bình Dương và các tỉnh lân cận.
                  </p>
                </section>

                {/* Liên hệ Box */}
                <div className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-600 my-8 shadow-sm">
                  <p className="text-xl font-black m-0 text-gray-900">
                    Liên Hệ: <span className="text-red-600 font-black text-2xl">{hotline}</span>
                  </p>
                  <p className="mt-2 font-bold italic text-gray-800">
                    Gọi là có mặt sau 30 phút - không Ngại Xa
                  </p>
                  <p className="mt-1 text-red-600 font-black uppercase text-[15px]">
                    Khảo Sát Báo Giá Tận Nơi - Không Ngại Đường Xa - Cam Kết Giá Cao Hơn Thị Trường 20%
                  </p>
                </div>

                <figure className="my-10">
                  <div className="relative w-full aspect-[4/3] max-w-[700px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-quan-nhau-1.jpg"
                      alt="Thanh lý bàn ghế quán nhậu nướng BBQ giá cao tại TPHCM"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                <section>
                  <p className="text-[18px]">
                    Các bàn ghế nội thất trong quán nhậu, quán BBQ khi quý khách muốn thanh lý đổi mới hay ngừng kinh doanh. Trên thị trường có rất nhiều đơn vị nhỏ, lẻ để thu mua lại. Nhưng hiện nay đa số đều ép giá, việc thanh lý gây khó khăn trong quá trình mua bán.
                  </p>
                  <p className="text-[18px]">
                    Nhưng đến với <strong>Thu Mua Đồ Cũ Trung Kiên</strong> chúng tôi cam kết không ép giá với khách hàng, gọi là có mặt ngay sau 30 phút, tự tháo dỡ, vận chuyển nhanh chóng, sạch sẽ. Khi quý khách có nhu cầu hãy gọi ngay đến Hotline: <strong>{hotline}</strong> chúng tôi sẽ có mặt đến tận nơi.
                  </p>
                </section>

                <figure className="my-10">
                  <div className="relative w-full aspect-[4/3] max-w-[700px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-quan-nhau-2.webp"
                      alt="Dịch vụ thu mua quán BBQ trọn gói chuyên nghiệp"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                <h2 className="!text-xl md:!text-2xl font-bold text-brand-600 uppercase border-l-4 border-brand-600 pl-4">
                  Quý khách nhận được gì khi thanh lý bàn ghế, nội thất quán nhậu tại chúng tôi?
                </h2>

                <ul className="grid grid-cols-1 gap-4 list-none p-0 mt-6">
                  {[
                    "Qua số lượng sản phẩm, tình trạng sản phẩm, chất liệu... Chúng tôi sẽ đưa ra một mức giá thanh lý hợp lý nhất cho khách.",
                    "Thanh toán 100% ngay sau khi tháo dỡ và vận chuyển. Nhanh gọn và chuyên nghiệp.",
                    "Chúng tôi là dịch vụ thu mua bàn ghế cũ giá cao và cạnh tranh nhất thị trường hiện nay. Đảm bảo quyền lợi khách hàng.",
                    `Báo giá nhanh chóng qua Zalo bằng cách chụp thực tế sản phẩm cần bán gửi qua số: ${hotline}.`,
                    "Không phát sinh thêm chi phí. Tự tháo dỡ và vận chuyển từ A đến Z.",
                    "Đội ngũ nhân viên giàu kinh nghiệm, nhanh nhẹn, xử lý mọi tình huống cách tốt nhất.",
                    "Hỗ trợ mức chiết khấu cao dành cho người giới thiệu bạn bè hoặc người thân cần thanh lý đồ cũ."
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 text-[17px]">
                      <span className="text-brand-600 font-bold mt-1">✔</span>
                      {text}
                    </li>
                  ))}
                </ul>

                <figure className="my-10">
                  <div className="relative w-full aspect-[4/3] max-w-[700px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-quan-nhau-3.jpg"
                      alt="Đồ Cũ Trung Kiên thu mua đồ cũ giá cao tại thị trường miền Nam"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-center mt-3 text-sm italic text-gray-500 font-bold">
                    Đồ Cũ Trung Kiên tự hào là đơn vị thu mua đồ cũ giá cao trên thị trường!
                  </figcaption>
                </figure>

                {/* Phần Bổ Sung SEO: Danh mục khu vực thu mua */}
                <section className="bg-gray-900 text-white p-8 rounded-3xl shadow-inner mt-12">
                  <h3 className="text-brand-400 text-xl font-black uppercase mb-6 border-b border-gray-700 pb-2">
                    Khu vực thu mua quán nhậu phủ khắp TP.HCM & Lân cận
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[14px] opacity-80">
                    <p>● Thanh lý quán nhậu Quận 1</p>
                    <p>● Thanh lý quán nhậu Quận 7</p>
                    <p>● Thanh lý quán nhậu Gò Vấp</p>
                    <p>● Thanh lý quán nhậu Bình Tân</p>
                    <p>● Thu mua quán nướng Thủ Đức</p>
                    <p>● Thu mua quán nhậu Bình Dương</p>
                    <p>● Thu mua quán nhậu Đồng Nai</p>
                    <p>● Thu mua đồ cũ Long An</p>
                    <p>● Thu mua nhà hàng Tây Ninh</p>
                  </div>
                </section>
                <figure className="my-10">
                  <div className="relative w-full aspect-[4/3] max-w-[700px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/4thanh-ly-quan-nhau-3.jpg"
                      alt="Dịch vụ thu mua quán BBQ trọn gói chuyên nghiệp"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                {/* BẢNG GIÁ THAM KHẢO & FAQ (ON-PAGE SEO) */}
                <PriceTable
                  title="Bảng Giá Thanh Lý Quán Nhậu Tham Khảo"
                  subtitle="Giá thu mua thực tế phụ thuộc vào tình trạng bàn ghế, thiết bị bếp và số lượng. Khảo sát tận nơi sau 30 phút!"
                  items={priceItems}
                />

                <FAQAccordion
                  title="Giải Đáp Thắc Mắc Khi Thanh Lý Quán Nhậu"
                  faqs={faqs}
                />

                {/* THÔNG TIN LIÊN HỆ */}
                <footer className="mt-12 p-8 bg-white border-2 border-brand-600 rounded-3xl shadow-md">
                  <h3 className="text-2xl font-black text-brand-600 uppercase mb-8 border-b pb-2 text-center">THÔNG TIN LIÊN HỆ</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[17px] font-medium">
                    <div className="space-y-4">
                      <p>📍 <strong>Chi Nhánh 1:</strong> 271 Bình Long, Phường Bình Hưng Hòa, Quận Bình Tân, TP.HCM</p>
                      <p>📍 <strong>Chi Nhánh 2:</strong> 207 Nơ Trang Long, Phường 12, Quận Bình Thạnh, TP.HCM</p>
                      <p>📍 <strong>Chi Nhánh 3:</strong> 553 Kha Vạn Cân, Phường Linh Đông, Quận Thủ Đức, TP.HCM</p>
                      <p>📍 <strong>Chi Nhánh 4:</strong> 136 Đường Số 10, Phường Tân Quy, Quận 7, TP.HCM</p>
                    </div>
                    <div className="space-y-4 md:border-l md:pl-6 border-gray-100">
                      <p className="text-red-600 text-xl">📞 <strong>Hotline 1:</strong> {hotline}</p>
                      <p>💬 <strong>Zalo:</strong> 0398.771.444</p>
                      <p>📧 <strong>Email:</strong> docutrungkien@gmail.com</p>
                      <p className="text-brand-600 font-black">24/24 - Phục vụ tất cả các ngày trong tuần</p>
                    </div>
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