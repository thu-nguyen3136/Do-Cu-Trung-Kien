import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '../components/SchemaMarkup';
import FAQAccordion from '../components/FAQAccordion';
import PriceTable from '../components/PriceTable';
import SEOHead from '../components/SEOHead';

export default function ThuMuaTuDongTuMatPage() {
  const hotline = "0398.771.444";

  const breadcrumbs = [
    { name: 'Trang chủ', url: 'https://thumuadocutrungkien.com/' },
    { name: 'Thu Mua Tủ Đông Tủ Mát', url: 'https://thumuadocutrungkien.com/thu-mua-tu-dong-tu-mat' }
  ];

  const faqs = [
    {
      question: "Trung Kiên thu mua các thương hiệu tủ đông, tủ mát nào?",
      answer: "Chúng tôi thu mua tất cả các hãng: Sanaky, Alaska, Darling, Kangaroo, Panasonic, Berjaya, Denver, tủ đông đứng, tủ nằm 1 chế độ, 2 chế độ, tủ kính lùa cong."
    },
    {
      question: "Tủ bị xì gas, hỏng block hoặc cũ rỉ sét có mua không?",
      answer: "Có. Chúng tôi thu mua tủ đông tủ mát mọi tình trạng: còn dùng tốt, yếu lạnh, hư lốc máy, xì dàn lạnh với giá thanh lý cao nhất."
    },
    {
      question: "Nhân viên có tự mang xe tới chở tủ đông cồng kềnh không?",
      answer: "Có. Chúng tôi cử xe tải và thợ chuyên nghiệp tự khuân vác, vận chuyển tủ tận nhà, chủ quán không cần động tay."
    }
  ];

  const priceItems = [
    { name: "Thu mua tủ đông nằm Sanaky, Alaska 1 ngăn đông, 2 ngăn đông mát (100L - 500L)", unit: "Chiếc", priceRange: "1.500.000 - 5.500.000 đ", note: "Dàn đồng hoặc dàn nhôm" },
    { name: "Thu mua tủ đông mặt kính lùa cong trưng bày kem, hải sản", unit: "Chiếc", priceRange: "2.500.000 - 8.500.000 đ", note: "Kính cường lực có sấy kính" },
    { name: "Thu mua tủ mát trưng bày nước ngọt 1 cánh kính (200L - 450L)", unit: "Chiếc", priceRange: "1.800.000 - 5.000.000 đ", note: "Sanaky, Alaska, Panasonic, Aqua" },
    { name: "Thu mua tủ mát siêu thị 2 cánh, 3 cánh kính lùa/mở (800L - 1500L)", unit: "Chiếc", priceRange: "4.500.000 - 18.000.000 đ", note: "Đèn LED, quạt đảo nhiệt đều" },
    { name: "Thu mua tủ đông tủ mát công nghiệp inox 4 cánh, 6 cánh (Berjaya)", unit: "Chiếc", priceRange: "7.000.000 - 28.000.000 đ", note: "Inox chuyên dùng cho nhà hàng" },
    { name: "Thu mua tủ bánh kem để bàn, tủ bánh sinh nhật kính vuông", unit: "Chiếc", priceRange: "3.500.000 - 14.000.000 đ", note: "Sấy kính không đọng sương" },
    { name: "Thu mua tủ đông hư hỏng, yếu lạnh hoặc xì gas", unit: "Chiếc", priceRange: "500.000 - 2.500.000 đ", note: "Thu mua tận nơi linh kiện/xác tủ" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800 flex flex-col">
      <SEOHead
        title="Thu Mua Tủ Đông Tủ Mát Cũ Giá Cao TPHCM | Sanaky, Alaska"
        description="Thu mua tủ đông, tủ mát cũ giá cao tận nơi tại TPHCM. Mua tủ đông Sanaky, Alaska, tủ mát siêu thị, tủ bánh kem, tủ hư hỏng xì gas. Hotline: 0398.771.444."
        keywords="thu mua tủ đông cũ, thu mua tủ mát cũ, thanh lý tủ đông sanaky, thu mua tủ mát alaska, đồ cũ trung kiên"
        canonical="https://thumuadocutrungkien.com/thu-mua-tu-dong-tu-mat"
        ogImage="/thu-mua-tu-dong-cu.jpg"
      />
      <Head>
        <BreadcrumbSchema items={breadcrumbs} />
        <ServiceSchema
          name="Thu Mua Tủ Đông Tủ Mát Cũ Giá Cao TPHCM"
          description="Chuyên thu mua tủ đông, tủ mát Sanaky, Alaska, tủ siêu thị mặt kính cũ giá cao tận nơi tại TPHCM."
          url="https://thumuadocutrungkien.com/thu-mua-tu-dong-tu-mat"
          image="https://thumuadocutrungkien.com/thu-mua-tu-dong-cu.jpg"
        />
        <FAQSchema faqs={faqs} />
      </Head>

      <main className="flex-grow pb-12">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-100 py-3 shadow-sm">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Thu Mua Tủ Đông - Tủ Mát</span>
          </div>
        </nav>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH --- */}
            <article className="lg:col-span-3">

              <header className="mb-8 border-b-2 border-brand-50 pb-6 text-center">
                <h1 className="text-2xl md:text-4xl font-black text-brand-600 uppercase tracking-tight">
                  Thu Mua Tủ Đông - Tủ Mát Cũ Giá Cao Tại TPHCM - Đồ Cũ Trung Kiên
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify space-y-8">

                <section>
                  <h2 className="!text-xl md:!text-2xl font-bold text-red-700 uppercase mb-4">
                    Chuyên Thu Mua Tủ Đông, Tủ Mát Tận Nơi - Thanh Toán Ngay
                  </h2>
                  <p>
                    Bạn có tủ đông, tủ mát đã qua sử dụng cần thanh lý để nâng cấp máy mới hoặc ngừng kinh doanh? Hãy gọi ngay cho <strong>Đồ Cũ Trung Kiên</strong>. Chúng tôi chuyên thu mua các loại tủ đông, tủ mát từ gia đình, <Link href="/thanh-ly-quan-an" className="text-brand-600 font-semibold hover:underline">quán ăn</Link>, <Link href="/thanh-ly-nha-hang" className="text-brand-600 font-semibold hover:underline">nhà hàng</Link> đến các quán <Link href="/thanh-ly-quan-ca-phe" className="text-brand-600 font-semibold hover:underline">cafe trà sữa</Link> và siêu thị lớn với mức giá <strong>cao hơn thị trường 20-30%</strong>.
                  </p>
                  <div className="bg-yellow-300 px-4 py-3 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="font-black text-red-600 text-xl uppercase">Hotline & Zalo: {hotline}</span>
                    <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold animate-bounce">Mua tận nơi - Không ngại xa</span>
                  </div>
                </section>

                {/* ẢNH 1: DÀN TỦ MÁT TRƯNG BÀY */}
                <figure className="my-10">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thu-mua-tu-dong-cu-1.jpg"
                      alt="Thu mua tủ mát trưng bày 2 cánh, 3 cánh cũ giá cao"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-center mt-3 text-sm italic text-gray-500">Trung Kiên thu mua các dòng tủ mát siêu thị, tủ trưng bày nước giải khát</figcaption>
                </figure>

                <section>
                  <h2 className="!text-xl md:!text-2xl font-bold text-red-700 uppercase mb-4">
                    Các dòng tủ đông - tủ mát chúng tôi nhận thu mua:
                  </h2>
                  <p>Chúng tôi không giới hạn thương hiệu hay kích cỡ, chỉ cần tủ còn hoạt động hoặc hư hỏng nhẹ, chúng tôi đều thu mua:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 mt-4">
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 font-medium">
                      ❄️ <strong>Tủ Đông:</strong> Tủ đông 1 ngăn, 2 ngăn, tủ đông mặt kính Sanaky, Alaska, Darling, tủ đông công nghiệp inox.
                    </li>
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 font-medium">
                      🥤 <strong>Tủ Mát:</strong> Tủ mát 1 cánh, 2 cánh, 3 cánh, tủ trưng bày bánh kem, tủ mát trưng bày rau củ siêu thị.
                    </li>
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 font-medium">
                      🏥 <strong>Tủ Đặc Chuyên:</strong> Tủ bảo quản vaccine, tủ ôn nhiệt, máy làm đá viên công nghiệp.
                    </li>
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 font-medium">
                      🏷️ <strong>Thương Hiệu:</strong> Ưu tiên giá cực cao cho các dòng Sanaky, Alaska, Panasonic, Sanden, Berjaya.
                    </li>
                  </ul>
                </section>

                {/* ẢNH 2: TỦ ĐÔNG CŨ */}
                <figure className="my-10">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thu-mua-tu-dong-cu-2.jpg"
                      alt="Thu mua tủ đông Sanaky, Alaska cũ giá tốt tại TPHCM"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                <section className="bg-brand-50 p-8 rounded-[2rem] border-2 border-brand-100">
                  <h2 className="!text-xl md:!text-2xl font-bold text-brand-700 uppercase mb-6 text-center">
                    Tại sao nên thanh lý tủ cho Trung Kiên?
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      "Báo giá chính xác qua hình ảnh Zalo chỉ sau 5 phút.",
                      "Không kỳ kèo ép giá, thuận mua vừa bán.",
                      "Tự vận chuyển bằng xe tải chuyên dụng, khách không cần lo tháo dỡ.",
                      "Thanh toán tiền mặt dứt điểm 1 lần duy nhất.",
                      "Dịch vụ chuyên nghiệp, sạch sẽ, nhiệt tình."
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                        <span className="text-brand-600 font-black">✔</span>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ẢNH 3: NHÂN VIÊN VẬN CHUYỂN TỦ */}
                <figure className="my-10">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thu-mua-tu-dong-cu-3.jpg"
                      alt="Quy trình vận chuyển tủ đông tủ mát chuyên nghiệp"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-center mt-3 text-sm italic text-gray-500 font-bold">
                    Hỗ trợ bốc xếp, vận chuyển tận nơi nhanh chóng trong ngày
                  </figcaption>
                </figure>

                {/* BẢNG GIÁ THAM KHẢO & FAQ (ON-PAGE SEO) */}
                <PriceTable
                  title="Bảng Giá Thu Mua Tủ Đông Tủ Mát Tham Khảo"
                  subtitle="Giá thu mua tủ đông tủ mát phụ thuộc vào thương hiệu (Sanaky, Alaska, Berjaya...), dung tích lít và độ lạnh thực tế. Gọi điện hoặc gửi ảnh qua Zalo nhận giá ngay sau 5 phút!"
                  items={priceItems}
                />

                <FAQAccordion
                  title="Câu Hỏi Thường Gặp Khi Bán Tủ Đông Tủ Mát Cũ"
                  faqs={faqs}
                />

                {/* SEO LOCAL SECTION */}
                <section>
                  <h2 className="!text-xl md:!text-2xl font-bold text-red-700 uppercase mb-6 text-left">
                    Khu Vực Thu Mua Tủ Đông - Tủ Mát
                  </h2>
                  <p className="text-left">Chúng tôi có xe tải túc trực tại các khu vực để thu mua nhanh nhất:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm font-bold text-brand-700 text-left">
                    {["Bình Tân", "Tân Phú", "Quận 12", "Hóc Môn", "Gò Vấp", "Quận 7", "Quận 2", "Thủ Đức", "Bình Dương", "Đồng Nai", "Long An", "Củ Chi"].map((q, i) => (
                      <div key={i} className="bg-white p-2 border border-gray-100 rounded shadow-sm text-center">
                        {q}
                      </div>
                    ))}
                  </div>
                </section>

                {/* LIÊN HỆ GỐC */}
                <footer className="mt-12 p-8 bg-gray-900 text-white rounded-[2rem] shadow-2xl">
                  <h3 className="text-2xl font-black uppercase mb-6 text-brand-500 text-left">THU MUA ĐỒ CŨ TRUNG KIÊN</h3>
                  <div className="space-y-4 font-medium opacity-90 text-left">
                    <p>📍 <strong>Địa Chỉ:</strong> 271 Bình Long, Phường Bình Hưng Hòa, Quận Bình Tân, TP.HCM</p>
                    <p>📞 <strong>Hotline:</strong> <span className="text-brand-400 text-xl">{hotline}</span></p>
                    <p>💬 <strong>Zalo báo giá:</strong> 0398.771.444 (Chụp ảnh tủ gửi qua nhận giá ngay)</p>
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