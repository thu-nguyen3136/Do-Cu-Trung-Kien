import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from '../components/SchemaMarkup';
import FAQAccordion from '../components/FAQAccordion';
import PriceTable from '../components/PriceTable';
import SEOHead from '../components/SEOHead';

const articleUrl = 'https://thumuadocutrungkien.com/thanh-ly-quan-cafe-tphcm';
const articleDescription = 'Dịch vụ thu mua thanh lý quán cafe TPHCM trọn gói, định giá máy pha, máy xay, bàn ghế, quầy bar và thiết bị lạnh. Khảo sát tận nơi, tháo dỡ miễn phí, thanh toán nhanh.';
const articleImages = [
  '/thanh-ly-quan-cafe.jpg',
  '/thanh-ly-quan-cafe-1.jpeg',
  '/thanh-ly-quan-cafe-2.jpeg',
  '/thanh-ly-quan-cafe-3.jpeg'
];

export default function ThanhLyQuanCafeTphcmArticle() {
  const hotline = '0398.771.444';
  const faqs = [
    {
      question: 'Quán ở ngoại thành hoặc tỉnh lân cận TP.HCM có thu mua không?',
      answer: 'Có. Đồ Cũ Trung Kiên nhận thu mua thanh lý quán cafe tại các quận huyện TP.HCM và hỗ trợ đơn hàng trọn gói ở Bình Dương, Đồng Nai, Long An, Tây Ninh.'
    },
    {
      question: 'Chi phí tháo dỡ và xe vận chuyển do ai chi trả?',
      answer: 'Với phương án thu mua trọn gói đã thống nhất, Trung Kiên phụ trách tháo dỡ, bốc xếp và vận chuyển theo thỏa thuận. Chi phí và phạm vi công việc được xác nhận trước khi thực hiện.'
    },
    {
      question: 'Bán lẻ vài bộ bàn ghế hoặc một máy pha cafe có được không?',
      answer: 'Có. Trung Kiên tiếp nhận yêu cầu thu mua từ một số thiết bị riêng lẻ đến thanh lý toàn bộ quán cafe. Giá được xác định theo thương hiệu, tình trạng và vị trí thực tế.'
    }
  ];

  const priceItems = [
    { name: 'Thu mua máy pha cà phê Espresso 1-2 group', unit: 'Máy', priceRange: '5.000.000 - 65.000.000 đ', note: 'Casadio, Breville, Nuova Simonelli, La Marzocco...' },
    { name: 'Thu mua máy xay cà phê', unit: 'Máy', priceRange: '1.200.000 - 15.000.000 đ', note: 'Fiorenzato, Eureka, HC600, Mazzer...' },
    { name: 'Thanh lý bàn ghế quán cafe', unit: 'Bộ / ghế', priceRange: '80.000 - 850.000 đ', note: 'Ghế Tolix, sofa, bàn gỗ me tây, vintage, bàn ghế xếp' },
    { name: 'Thu mua quầy pha chế và kệ', unit: 'Bộ', priceRange: '1.500.000 - 12.000.000 đ', note: 'Quầy bar inox 304, bồn rửa, kệ ly cốc, thùng đá âm bàn' },
    { name: 'Thanh lý điện máy và thiết bị làm lạnh', unit: 'Thiết bị', priceRange: '1.800.000 - 22.000.000 đ', note: 'Tủ mát Sanaky/Alaska, tủ đông, máy làm đá, máy lạnh âm trần' }
  ];

  const breadcrumbs = [
    { name: 'Trang chủ', url: 'https://thumuadocutrungkien.com/' },
    { name: 'Thu Mua Đồ Cũ', url: 'https://thumuadocutrungkien.com/' },
    { name: 'Thanh Lý Quán Cafe TPHCM', url: articleUrl }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800 flex flex-col">
      <SEOHead
        title="Thu Mua Thanh Lý Quán Cafe TPHCM Trọn Gói Giá Cao | Trung Kiên"
        description={articleDescription}
        keywords="thanh lý quán cafe TPHCM, thu mua quán cafe, thanh lý máy pha cà phê, thu mua bàn ghế cafe, thu mua quầy bar inox, thanh lý thiết bị quán cafe"
        canonical="/thanh-ly-quan-cafe-tphcm"
        ogType="article"
        ogImage={articleImages[0]}
        publishedTime="2026-10-23T08:00:00+07:00"
        modifiedTime="2026-10-23T08:00:00+07:00"
      />
      <Head>
        <BreadcrumbSchema items={breadcrumbs} />
        <ArticleSchema
          title="Dịch Vụ Thu Mua Thanh Lý Quán Cafe Trọn Gói Giá Cao Tại TPHCM"
          description={articleDescription}
          url={articleUrl}
          image={`https://thumuadocutrungkien.com${articleImages[0]}`}
          datePublished="2026-10-23T08:00:00+07:00"
          dateModified="2026-10-23T08:00:00+07:00"
        />
        <FAQSchema faqs={faqs} />
      </Head>

      <main className="flex-grow pb-0">
        <nav className="border-b border-gray-100 py-4" aria-label="Breadcrumb">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-[#388e3c]">Trang chủ</Link>
            <span>/</span>
            <Link href="/" className="hover:text-[#388e3c]">Thu Mua Đồ Cũ</Link>
            <span>/</span>
            <span className="text-gray-900">Thanh lý quán cafe TPHCM</span>
          </div>
        </nav>

        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">
            <article className="lg:col-span-3 min-w-0">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="bg-green-50 text-[#388e3c] px-3 py-1 rounded-full text-xs font-bold uppercase">Kinh nghiệm thanh lý</span>
                <time className="text-sm text-gray-500" dateTime="2026-10-23">Cập nhật: 23/10/2026</time>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-[#111827] mb-6 leading-tight">
                Dịch Vụ Thu Mua Thanh Lý Quán Cafe Trọn Gói Giá Cao Tại TPHCM
              </h1>

              <div className="relative w-full aspect-video overflow-hidden rounded-2xl mb-8">
                <Image src={articleImages[0]} alt="Dịch vụ thu mua thanh lý quán cafe trọn gói tại TPHCM" fill priority sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  Bạn đang cần sang nhượng mặt bằng, đóng cửa kinh doanh hoặc nâng cấp nội thất quán cafe tại TP.HCM? Việc tự tìm người mua máy móc, thuê nhân công tháo dỡ và kịp bàn giao mặt bằng thường tốn nhiều thời gian. <strong>Đồ Cũ Trung Kiên</strong> cung cấp dịch vụ <strong>thu mua thanh lý quán cafe TPHCM trọn gói</strong>, khảo sát tận nơi, báo giá theo tình trạng thực tế và hỗ trợ thu dọn theo phạm vi đã thống nhất.
                </p>
                <p>
                  Gửi hình ảnh qua Zalo <a href={`https://zalo.me/${hotline.replace(/\./g, '')}`}>{hotline}</a> để nhận định giá sơ bộ. Mức giá cuối cùng phụ thuộc thương hiệu, đời máy, khả năng vận hành, số lượng và điều kiện tháo dỡ tại quán.
                </p>

                <PriceTable
                  title="Bảng Giá Thu Mua Đồ Cũ Quán Cafe Tham Khảo Tại TP.HCM"
                  subtitle="Mức giá thực tế thay đổi theo thương hiệu, đời máy và độ mới. Gửi ảnh qua Zalo để được định giá sát với tình trạng thiết bị."
                  items={priceItems}
                />

                <h2 className="!text-2xl font-bold text-[#111827] border-l-4 border-[#388e3c] pl-4">Đồ Cũ Trung Kiên Nhận Thu Mua Những Thiết Bị Quán Cafe Nào?</h2>
                <p>Trung Kiên nhận thu mua thanh lý từ quán cafe cóc, quán trà sữa nhỏ đến quán cà phê sân vườn. Có thể bán riêng từng thiết bị hoặc yêu cầu thu mua trọn gói toàn bộ quán.</p>

                <h3 className="!text-xl font-bold text-[#111827]">1. Thu mua máy pha, máy xay và dụng cụ pha chế</h3>
                <p>Nhận thu mua máy pha cà phê chuyên nghiệp 1-2 group, máy xay hạt, máy định lượng và dụng cụ quầy bar. Nhân viên kiểm tra thương hiệu, công suất và tình trạng vận hành để báo giá minh bạch, không định giá chỉ theo linh kiện.</p>
                <figure className="not-prose my-8">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <Image src={articleImages[1]} alt="Thu mua thanh lý máy pha và thiết bị quán cafe" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                  </div>
                  <figcaption className="mt-2 text-center text-sm text-gray-500">Thu mua thiết bị pha chế và nội thất quán cafe tận nơi.</figcaption>
                </figure>

                <h3 className="!text-xl font-bold text-[#111827]">2. Thu mua bàn ghế, sofa và nội thất trang trí</h3>
                <p>Thu mua thanh lý bàn ghế gỗ, ghế sắt Tolix, sofa cafe, bàn me tây, ghế vintage và nội thất phong cách công nghiệp. Có thể tiếp nhận số lượng lớn, nhiều mẫu mã để giúp chủ quán thu dọn đồng bộ.</p>
                <figure className="not-prose my-8">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <Image src={articleImages[2]} alt="Thanh lý bàn ghế và nội thất quán cafe tại TPHCM" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                  </div>
                </figure>

                <h3 className="!text-xl font-bold text-[#111827]">3. Thu mua quầy bar inox và thiết bị lạnh</h3>
                <p>Nhận thu mua thanh lý quầy bar inox 304, kệ sơ chế, quầy order, chậu rửa, tủ mát bảo quản nguyên liệu, tủ đông và máy làm đá viên. Kế hoạch tháo dỡ, đóng gói và vận chuyển được trao đổi trước để hạn chế ảnh hưởng mặt bằng.</p>
                <figure className="not-prose my-8">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <Image src={articleImages[3]} alt="Thu mua thanh lý quầy bar inox và thiết bị lạnh quán cafe" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                  </div>
                </figure>

                <h2 className="!text-2xl font-bold text-[#111827] border-l-4 border-[#388e3c] pl-4">Vì Sao Khách Hàng Chọn Thanh Lý Quán Cafe Cùng Trung Kiên?</h2>
                <ul>
                  <li><strong>Khảo sát linh hoạt:</strong> Có các điểm phục vụ tại Bình Tân, Bình Thạnh, Thủ Đức và Quận 7, hỗ trợ sắp xếp khảo sát theo khu vực và lịch hẹn.</li>
                  <li><strong>Hỗ trợ thu dọn trọn gói:</strong> Đội ngũ mang dụng cụ tháo dỡ, bốc xếp và xe vận chuyển phù hợp với khối lượng đã thống nhất.</li>
                  <li><strong>Thanh toán rõ ràng:</strong> Chốt danh sách, giá trị thu mua và hình thức thanh toán trước khi tiến hành bàn giao.</li>
                  <li><strong>Nhận mua lẻ hoặc cả quán:</strong> Có thể gửi yêu cầu cho một máy pha, vài bộ bàn ghế hoặc toàn bộ thiết bị.</li>
                </ul>

                <h2 className="!text-2xl font-bold text-[#111827] border-l-4 border-[#388e3c] pl-4">Quy Trình Thu Mua Quán Cafe Tận Nơi</h2>
                <ol>
                  <li><strong>Bước 1 - Gửi hình ảnh:</strong> Chụp ảnh hoặc quay video thiết bị, gửi kèm thương hiệu, số lượng và địa chỉ qua Zalo hotline.</li>
                  <li><strong>Bước 2 - Nhận báo giá sơ bộ:</strong> Trung Kiên xem thông tin và phản hồi mức tham khảo; báo giá có thể điều chỉnh sau khi kiểm tra thực tế.</li>
                  <li><strong>Bước 3 - Khảo sát và chốt danh sách:</strong> Nhân viên đến quán, kiểm tra tình trạng, thống nhất giá và phạm vi tháo dỡ.</li>
                  <li><strong>Bước 4 - Tháo dỡ, thanh toán, bàn giao:</strong> Tiến hành theo thỏa thuận, thanh toán và bàn giao mặt bằng sau khi hoàn tất.</li>
                </ol>

                <FAQAccordion title="Câu Hỏi Thường Gặp Khi Thanh Lý Quán Cafe" faqs={faqs} />

                <section className="not-prose mb-2 mt-10 bg-gray-900 !text-white rounded-2xl p-6 md:p-8 -pb-9">
                  <h2 className="text-2xl font-black mb-3 !text-white">Liên Hệ Thu Mua Đồ Cũ Trung Kiên</h2>
                  <p className="text-gray-200">Gửi hình ảnh thiết bị để được tư vấn thanh lý quán cafe tại TPHCM.</p>
                  <ul className="mt-4 space-y-2 text-gray-100">
                    <li><strong>Hotline / Zalo:</strong> <a className="text-green-300 font-bold" href={`tel:${hotline.replace(/\./g, '')}`}>{hotline}</a></li>
                    <li><strong>Địa chỉ:</strong> 271 Bình Long, Phường Bình Hưng Hòa, Quận Bình Tân, TP.HCM</li>
                    <li><strong>Website:</strong> <a className="underline" href="https://thumuadocutrungkien.com/">thumuadocutrungkien.com</a></li>
                  </ul>
                </section>
              </div>
            </article>

            <aside className="lg:col-span-1 min-w-0 h-fit sticky top-5">
              <Sidebar />
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}