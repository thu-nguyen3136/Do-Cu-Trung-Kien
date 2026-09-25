import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '../components/SchemaMarkup';
import FAQAccordion from '../components/FAQAccordion';
import PriceTable from '../components/PriceTable';
import SEOHead from '../components/SEOHead';

export default function ThuMuaDoInoxPage() {
  const hotline = "0398.771.444";

  const breadcrumbs = [
    { name: 'Trang chủ', url: 'https://thumuadocutrungkien.com/' },
    { name: 'Thu Mua Đồ Inox Cũ', url: 'https://thumuadocutrungkien.com/thu-mua-do-inox-cu' }
  ];

  const faqs = [
    {
      question: "Đồ Cũ Trung Kiên thu mua các loại đồ Inox nào?",
      answer: "Chúng tôi thu mua mọi sản phẩm inox 304, inox 201: bàn ghế inox tròn/vuông, chậu rửa bát inox đơn/đôi, kệ bếp inox, bàn soạn đồ ăn, tum hút mùi inox, giá kệ chén bát và bồn nước inox."
    },
    {
      question: "Inox bị trầy xước, móp méo hoặc ố màu có mua không?",
      answer: "Có. Chúng tôi thu mua mọi tình trạng đồ inox cũ, kể cả đồ đã qua sử dụng lâu năm, móp méo hoặc cần bán phế liệu inox giá cao."
    },
    {
      question: "Định giá thu mua đồ inox dựa trên yếu tố nào?",
      answer: "Giá thu mua phụ thuộc vào chất liệu (Inox 304 hay 201), độ dày của tấm inox, kích thước, khối lượng và tình trạng sử dụng lại được hay không."
    }
  ];

  const priceItems = [
    { name: "Bàn inox 304 có tầng, bàn sơ chế đồ ăn", unit: "Chiếc", priceRange: "1.200.000 - 4.500.000 đ", note: "Inox dày 1.0mm - 1.5mm, có lót gỗ" },
    { name: "Bàn ghế inox chữ nhật, bàn tròn tiệc inox", unit: "Bộ", priceRange: "600.000 - 3.200.000 đ", note: "1 bàn + 6-10 ghế đôn inox" },
    { name: "Chậu rửa bát inox công nghiệp (1 hố, 2 hố, 3 hố)", unit: "Chiếc", priceRange: "1.500.000 - 6.000.000 đ", note: "Kèm vòi cấp xả và bàn chờ" },
    { name: "Kệ inox để chén đĩa, giá nan inox 3-5 tầng", unit: "Chiếc", priceRange: "800.000 - 3.500.000 đ", note: "Inox thanh hộp chắc chắn" },
    { name: "Tum hút mùi inox, quạt ly tâm công nghiệp", unit: "Hệ thống", priceRange: "2.500.000 - 18.000.000 đ", note: "Tự tháo dỡ nguyên hệ thống" },
    { name: "Xe đẩy thức ăn inox, xe đẩy khay cơm 3 tầng", unit: "Chiếc", priceRange: "700.000 - 2.800.000 đ", note: "Bánh xe xoay 360 độ" },
    { name: "Bồn nước inox Đại Thành, Sơn Hà cũ (500L - 2000L)", unit: "Bồn", priceRange: "1.000.000 - 4.500.000 đ", note: "Inox 304 không thủng, rò rỉ" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <SEOHead
        title="Thu Mua Đồ Inox Cũ Giá Cao TPHCM | Bàn Ghế, Bếp Inox 304"
        description="Đồ Cũ Trung Kiên thu mua đồ inox cũ giá cao tại TPHCM: bàn sơ chế inox, bồn rửa chén, kệ inox, tum hút mùi, bàn ghế inox tiệc. Hotline: 0398.771.444."
        keywords="Thu Mua Đồ Inox Cũ, thu mua bàn ghế inox, thu mua bàn inox, thu mua bếp inox, thu mua đồ inox giá cao, đồ cũ trung kiên"
        canonical="https://thumuadocutrungkien.com/thu-mua-do-inox-cu"
        ogImage="/thu-mua-do-inox.jpg"
      />
      <Head>
        <BreadcrumbSchema items={breadcrumbs} />
        <ServiceSchema
          name="Thu Mua Đồ Inox Cũ Giá Cao TPHCM"
          description="Chuyên thu mua bàn ghế inox, thiết bị bếp inox công nghiệp, chậu rửa bát inox và kệ inox giá cao tại TPHCM."
          url="https://thumuadocutrungkien.com/thu-mua-do-inox-cu"
          image="https://thumuadocutrungkien.com/thu-mua-do-inox.jpg"
        />
        <FAQSchema faqs={faqs} />
      </Head>

      <main className="flex-grow pb-12">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-100 py-3 shadow-sm">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Thu Mua Đồ Inox Cũ</span>
          </div>
        </nav>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH (3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">

              <header className="mb-8 border-b-2 border-brand-50 pb-6 text-center">
                <h1 className="text-2xl md:text-4xl font-black text-brand-600 uppercase tracking-tight">
                  Thu Mua Đồ Inox Cũ Giá Cao Tại TPHCM - Đồ Cũ Trung Kiên
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify space-y-8">

                <section>
                  <p className="text-[20px]">
                    <strong>Đồ Cũ Trung Kiên</strong> nhận <strong>thu mua đồ inox giá cao, thu mua bếp inox, mua bàn ghế inox cũ</strong> tại TP.HCM và các tỉnh lân cận, với mức giá thu mua hấp dẫn và cạnh tranh trên thị trường. Chúng tôi chuyên thu mua trọn gói thiết bị inox từ <Link href="/thanh-ly-nha-hang" className="text-brand-600 font-semibold hover:underline">nhà hàng</Link>, <Link href="/thanh-ly-quan-an" className="text-brand-600 font-semibold hover:underline">quán ăn</Link>, <Link href="/thanh-ly-quan-pho" className="text-brand-600 font-semibold hover:underline">quán phở</Link> và bếp ăn công nghiệp.
                    Liên Hệ: <strong className="text-red-600 text-2xl">{hotline}</strong> để được Đồ Cũ Trung Kiên đến và khảo sát báo giá tận nơi để có mức giá chính xác nhất!!!
                  </p>
                </section>

                {/* ẢNH 1: TỔNG QUAN ĐỒ INOX (Sửa từ thu-mua-do-inox-cu.jpg) */}
                <figure className="my-10">
                  <div className="relative w-full aspect-square max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thu-mua-do-inox-cu-1.jpg"
                      alt="Dịch vụ thu mua đồ Inox cũ giá cao tại TPHCM"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <figcaption className="text-center mt-3 text-sm italic text-gray-500">Thu Mua Đồ Inox Tại TP.HCM</figcaption>
                </figure>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-brand-600 uppercase border-l-4 border-brand-600 pl-4 mb-6">
                    Những mặt hàng đồ inox mà Trung Kiên nhận thu mua và Thanh lý:
                  </h2>
                  <ul className="list-none p-0 space-y-4 text-[20px]">
                    <li className="flex items-center gap-3">
                      <span className="text-brand-600">►</span> Bàn ghế inox cũ nhà hàng, nhà ăn, quán nhậu
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-brand-600">►</span> Các loại bàn inox, bồn rửa, kệ, khay inox
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-brand-600">►</span> Các loại bếp inox, bếp nướng công nghiệp
                    </li>
                  </ul>
                  <p className="mt-6">
                    Đến với hệ thống thu mua thanh lý đồ inox cũ nhà hàng của <strong>Trung Kiên</strong>, quý khách sẽ được tư vấn, giải đáp tận tình, chi tiết nhất các thắc mắc. Hãy cho chúng tôi biết quý khách đang có nhu cầu thanh lý, <strong>Trung Kiên</strong> sẽ đáp ứng ngay lập tức, mang lại sự hài lòng nhất cho quý khách hàng.
                  </p>
                </section>

                {/* ẢNH 3: BÀN INOX (Sửa từ thu-mua-do-inox-cu-2.jpg) */}
                <figure className="my-10 text-center">
                  <div className="relative w-full aspect-[4/3] max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thu-mua-do-inox-cu-2.jpg"
                      alt="Thu Mua Bàn Inox Cũ"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-lg font-bold text-gray-600 uppercase">Thu Mua Bàn Inox Cũ</figcaption>
                </figure>

                {/* ẢNH 4: BẾP CÔNG NGHIỆP (Sửa từ thu-mua-bep-inox-cong-nghiep.jpg) */}
                <figure className="my-10 text-center">
                  <div className="relative w-full aspect-[3/2] max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thu-mua-do-inox-cu-4.jpg"
                      alt="Mua bếp nướng inox công nghiệp"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-lg font-bold text-gray-600 uppercase">Mua bếp nướng inox</figcaption>
                </figure>

                <section className="bg-brand-50 p-8 rounded-[2rem] border-2 border-brand-100">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase mb-6 text-center">
                    Quy Trình Thu Mua Đồ Cũ Của Công Ty Chúng Tôi
                  </h2>
                  <div className="space-y-6 text-[18px]">
                    <p>1. Quý khách lên Google gõ từ khóa: <strong>Đồ Cũ Trung Kiên</strong> và Click vào website để liên hệ với chúng tôi hoặc yêu cầu chúng tôi gọi lại.</p>
                    <p>2. Quý khách kết bạn Zalo với số điện thoại: <strong className="text-red-600 underline text-xl">{hotline}</strong> và gửi hình đồ cũ mà quý khách cần thanh lý. Công ty sẽ báo giá trực tiếp với những mặt hàng số lượng ít, hoặc chúng tôi sẽ đến tận nơi để báo giá.</p>
                    <p>3. Quý khách đồng ý với giá công ty đưa ra thì chúng tôi sẽ đưa xe xuống và bốc về trong ngày, nhận tiền ngay khi chốt.</p>
                  </div>
                </section>

                <figure className="my-10 text-center">
                  <div className="relative w-full aspect-[4/3] max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thu-mua-do-inox-cu-3.jpg"
                      alt="Dịch vụ thu mua cửa cũ và đồ inox"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-brand-600 uppercase border-l-4 border-brand-600 pl-4 mb-6">
                    Cam kết thu mua đồ inox cũ giá cao nhất tại TP HCM
                  </h2>
                  <ul className="grid grid-cols-1 gap-4 list-none p-0">
                    {[
                      "Trung Kiên cam kết giá thu mua đồ cũ giá cao hơn giá thị trường.",
                      "Thanh toán 100% trọn gói 1 lần duy nhất.",
                      "Không tính phí vận chuyển, hỗ trợ tận tình.",
                      "Nhận thu mua đồ cũ giá cao ở tất cả các quận huyện trong TP.HCM.",
                      "Thời gian thu mua 24/24 và tất cả các ngày trong tuần."
                    ].map((text, i) => (
                      <li key={i} className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-3 shadow-sm">
                        <span className="text-brand-600 font-bold">✔</span>
                        <span className="text-[19px]">{text}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* BẢNG GIÁ THAM KHẢO & FAQ (ON-PAGE SEO) */}
                <PriceTable
                  title="Bảng Giá Thu Mua Đồ Inox Cũ Tham Khảo"
                  subtitle="Giá thu mua đồ inox 304 luôn cao hơn inox 201. Chúng tôi kiểm tra độ dày và nam châm thử inox trực tiếp trước sự chứng kiến của khách hàng!"
                  items={priceItems}
                />

                <FAQAccordion
                  title="Câu Hỏi Thường Gặp Khi Bán Đồ Inox Cũ"
                  faqs={faqs}
                />

                <section className="mt-12 bg-gray-900 text-white p-8 rounded-3xl">
                  <h3 className="text-brand-400 text-xl font-black uppercase mb-6">Địa bàn phục vụ thu mua</h3>
                  <p className="opacity-90">
                    Dịch Vụ <strong>Thu Mua Đồ Cũ Trung Kiên</strong> nhận thu mua cửa cũ, đồ inox tất cả các quận huyện từ Quận 1 đến Quận 12, Gò Vấp, Tân Bình, Tân Phú, Bình Thạnh, Thủ Đức, Phú Nhuận, Bình Tân, Bình Chánh, Hóc Môn... Và các khu vực lân cận như: Bình Dương, Đồng Nai, Long An...
                  </p>
                </section>

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