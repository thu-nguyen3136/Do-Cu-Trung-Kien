import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '../components/SchemaMarkup';
import FAQAccordion from '../components/FAQAccordion';
import PriceTable from '../components/PriceTable';
import SEOHead from '../components/SEOHead';

const pageUrl = 'https://thumuadocutrungkien.com/thanh-ly-quan-karaoke-tai-quan-1';
const pageDescription = 'Thu mua, thanh lý quán karaoke tại Quận 1 trọn gói: loa, amply, mixer, màn hình, sofa và thiết bị phòng hát. Hỗ trợ tháo dỡ theo lịch. Gọi 0398.771.444.';
const pageImage = '/thu-mua-quan-karaoke-1.jpg';

export default function ThanhLyQuanKaraokeTaiQ1Page() {
  const hotline = '0398.771.444';
  const faqs = [
    {
      question: 'Quán karaoke ở tầng cao hoặc trong tòa nhà Quận 1 có nhận thanh lý không?',
      answer: 'Trung Kiên tiếp nhận thông tin và khảo sát lối đi, thang hàng, giờ vận chuyển cùng nội quy tòa nhà trước khi xác nhận phương án. Cách tháo dỡ và đưa thiết bị xuống được thống nhất dựa trên điều kiện thực tế, không ảnh hưởng đến khu vực chung.'
    },
    {
      question: 'Đường cấm tải hoặc ban quản lý chỉ cho vận chuyển ban đêm thì xử lý thế nào?',
      answer: 'Bạn gửi địa chỉ và khung giờ được phép vận chuyển để hai bên lên lịch phù hợp. Việc thi công ngoài giờ chỉ thực hiện khi đáp ứng quy định tuyến đường, ban quản lý và yêu cầu về tiếng ồn của mặt bằng.'
    },
    {
      question: 'Có thể thanh lý riêng loa, màn hình hoặc một phòng karaoke không?',
      answer: 'Có. Trung Kiên xem xét thu mua từng thiết bị, một phòng hoặc toàn bộ cơ sở. Hãy gửi model, số lượng, tình trạng hoạt động và hình ảnh để được tư vấn phương án.'
    },
    {
      question: 'Giá thanh lý quán karaoke được xác định dựa trên yếu tố nào?',
      answer: 'Giá phụ thuộc thương hiệu, model, tuổi thiết bị, khả năng hoạt động, tình trạng nội thất, số lượng và điều kiện tháo dỡ, vận chuyển. Mức cuối cùng được thống nhất sau khi kiểm tra danh sách thực tế.'
    }
  ];

  const priceItems = [
    { name: 'Loa karaoke, loa full và loa sub', unit: 'Bộ / chiếc', priceRange: 'Liên hệ khảo sát', note: 'Tùy thương hiệu, công suất, model và tình trạng màng loa' },
    { name: 'Amply, cục đẩy, mixer và vang số', unit: 'Thiết bị', priceRange: 'Liên hệ khảo sát', note: 'Kiểm tra bo mạch, cổng kết nối và khả năng hoạt động' },
    { name: 'Micro có dây, micro không dây và đầu karaoke', unit: 'Bộ', priceRange: 'Liên hệ khảo sát', note: 'Tùy số lượng, phụ kiện và tình trạng sử dụng' },
    { name: 'Màn hình, Smart TV và thiết bị trình chiếu', unit: 'Chiếc', priceRange: 'Liên hệ khảo sát', note: 'Định giá theo kích thước, thương hiệu và ngoại quan' },
    { name: 'Sofa phòng hát, bàn karaoke và quầy thu ngân', unit: 'Bộ / món', priceRange: 'Liên hệ khảo sát', note: 'Xét chất liệu, độ mới, số lượng và khả năng tháo rời' },
    { name: 'Đèn sân khấu, đèn laser và thiết bị hiệu ứng', unit: 'Bộ / thiết bị', priceRange: 'Liên hệ khảo sát', note: 'Kiểm tra motor, mắt quét, bộ điều khiển và phụ kiện' }
  ];

  const breadcrumbs = [
    { name: 'Trang chủ', url: 'https://thumuadocutrungkien.com/' },
    { name: 'Thu Mua Quán Karaoke', url: 'https://thumuadocutrungkien.com/thu-mua-quan-karaoke' },
    { name: 'Thanh Lý Quán Karaoke Tại Q1', url: pageUrl }
  ];

  const neighborhoods = [
    'Bến Thành', 'Bùi Viện', 'Phạm Ngũ Lão', 'Đề Thám', 'Đa Kao', 'Tân Định',
    'Nguyễn Thái Bình', 'Cô Giang', 'Cầu Ông Lãnh', 'Bến Nghé', 'Nguyễn Cư Trinh'
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800 flex flex-col">
      <SEOHead
        title="Thanh Lý Karaoke Quận 1 Trọn Gói | Trung Kiên"
        description={pageDescription}
        keywords="thanh lý quán karaoke tại Quận 1, thanh lý karaoke Q1, thu mua quán karaoke Quận 1, thu mua phòng karaoke Q1, thanh lý phòng hát karaoke, thu mua loa karaoke Quận 1, thanh lý loa sub karaoke, thu mua amply karaoke, thu mua cục đẩy công suất, thanh lý mixer vang số, thu mua micro karaoke, thanh lý màn hình phòng hát, thu mua sofa karaoke, thanh lý bàn karaoke, thanh lý đèn sân khấu karaoke, tháo dỡ karaoke Quận 1, thanh lý karaoke Bùi Viện, thu mua karaoke Phạm Ngũ Lão"
        canonical="/thanh-ly-quan-karaoke-tai-quan-1"
        ogImage={pageImage}
      />
      <Head>
        <BreadcrumbSchema items={breadcrumbs} />
        <ServiceSchema
          name="Thanh Lý Quán Karaoke Tại Quận 1"
          description={pageDescription}
          url={pageUrl}
          image={`https://thumuadocutrungkien.com${pageImage}`}
        />
        <FAQSchema faqs={faqs} />
      </Head>

      <main className="flex-grow pb-12">
        <nav className="bg-white border-b border-gray-100 py-3 shadow-sm" aria-label="Breadcrumb">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-sm text-gray-500 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link href="/thu-mua-quan-karaoke" className="hover:text-brand-600 transition-colors">Thu Mua Quán Karaoke</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Karaoke Quận 1</span>
          </div>
        </nav>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <article className="lg:col-span-3 min-w-0">
              <header className="mb-4 border-b-2 border-brand-50 pb-1">
                <h1 className="text-2xl md:text-4xl font-black text-brand-600 leading-tight">
                  Dịch Vụ Thanh Lý Quán Karaoke Tại Quận 1 Trọn Gói, Nhanh Gọn
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-7">
                <p>
                  Quận 1 có nhiều cơ sở karaoke nằm trên các tuyến phố đông đúc, trong hẻm hoặc ở các tầng của tòa nhà. Khi cần đóng cửa, chuyển địa điểm hay cải tạo phòng hát, chủ cơ sở thường phải xử lý cùng lúc nhiều tài sản như loa, amply, màn hình, sofa, bàn và hệ thống đèn. <strong>Đồ Cũ Trung Kiên</strong> tiếp nhận yêu cầu <strong>thanh lý quán karaoke tại Quận 1</strong> theo từng nhóm thiết bị, từng phòng hoặc toàn bộ cơ sở.
                </p>
                <p>
                  Việc thu dọn tại khu trung tâm cần tính trước lối vận chuyển, giờ cấm tải, quy định của ban quản lý và giới hạn tiếng ồn. Gửi video phòng hát, danh sách tài sản, model thiết bị, địa chỉ và thời hạn bàn giao qua <a href={`https://zalo.me/${hotline.replace(/\./g, '')}`}>Zalo {hotline}</a>. Sau khi nắm thông tin, hai bên có thể hẹn khảo sát để kiểm tra hiện trạng và thống nhất phương án phù hợp.
                </p>

                <div className="not-prose my-6 border-l-4 border-brand-600 bg-brand-50 p-5 md:p-6">
                  <p className="m-0 text-lg font-bold text-gray-900">Cần lên lịch thanh lý phòng karaoke tại Quận 1?</p>
                  <p className="mt-2 mb-0 text-gray-700">Gửi video toàn cảnh, model loa/mixer, địa chỉ và khung giờ được phép vận chuyển qua <a className="font-bold text-brand-700" href={`https://zalo.me/${hotline.replace(/\./g, '')}`}>Zalo {hotline}</a>. Giá và lịch thực hiện được xác nhận sau khi kiểm tra thực tế.</p>
                </div>

                <figure className="not-prose mt-8 mb-0">
                  <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
                    <Image src={pageImage} alt="Phòng karaoke có sofa, màn hình và hệ thống âm thanh" fill priority sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                  </div>
                </figure>

                <h2 className="!mt-3 !text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Những Việc Cần Tính Khi Thanh Lý Karaoke Tại Quận 1</h2>
                <p>Trước khi hẹn ngày thu dọn, nên xác định rõ các điều kiện tại địa chỉ để hạn chế chậm lịch và tránh phát sinh ngoài dự kiến:</p>
                <ol>
                  <li><strong>Giờ xe ra vào:</strong> Một số tuyến phố hoặc tòa nhà có khung giờ giao nhận riêng. Cần hỏi ban quản lý về giờ bốc xếp, vị trí dừng xe và phương tiện được phép vào.</li>
                  <li><strong>Thiết bị lắp cố định:</strong> Loa treo tường, màn hình, đèn sân khấu và dây tín hiệu cần được tháo theo hiện trạng. Xác nhận trước thiết bị nào thuộc tài sản cần thanh lý và phần nào cần giữ lại.</li>
                  <li><strong>Vận chuyển từ tầng cao hoặc hẻm nhỏ:</strong> Kiểm tra chiều rộng lối đi, thang hàng, tải trọng và điểm tập kết. Nếu cần thiết bị nâng hạ, phương án phải được khảo sát và thống nhất với ban quản lý.</li>
                  <li><strong>Kiểm kê thiết bị điện tử:</strong> Ghi model, số lượng, phụ kiện và tình trạng hoạt động giúp việc đối chiếu, định giá rõ ràng hơn.</li>
                </ol>
                <p>Trường hợp cơ sở có thêm quầy bar, pub hoặc lounge, bạn có thể xem trang <Link href="/thanh-ly-quan-bar-tai-quan-1" className="text-brand-600 font-semibold hover:underline">thanh lý quán bar tại Quận 1</Link>. Phạm vi dịch vụ và danh mục tài sản của từng mô hình sẽ được xác nhận riêng.</p>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Các Hạng Mục Có Thể Thu Mua Khi Thanh Lý Karaoke</h2>
                <p>Trung Kiên tiếp nhận đề nghị khảo sát theo từng phòng hoặc theo danh sách toàn cơ sở. Khả năng thu mua phụ thuộc thương hiệu, tình trạng và số lượng thực tế.</p>

                <section className="!mb-0">
                  <h3 className="!text-xl font-bold text-gray-900">1. Âm thanh, màn hình và thiết bị karaoke</h3>
                  <p>Các thiết bị thường có loa karaoke, loa full, loa sub, amply, cục đẩy công suất, mixer, vang số, đầu karaoke, micro có dây hoặc không dây, màn hình và Smart TV. Khi gửi thông tin, nên chụp tem model và quay video ngắn để thể hiện tình trạng hoạt động.</p>
                  <p>Nếu dàn máy được đấu nối tập trung cho nhiều phòng, hãy cung cấp sơ đồ hoặc chỉ vị trí thiết bị trung tâm để thống nhất cách ngắt điện, tháo dây và bàn giao phụ kiện.</p>
                  <figure className="not-prose mt-6 mb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <Image src="/thu-mua-quan-karaoke-2.jpg" alt="Sofa và bàn trong phòng karaoke phong cách cao cấp" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                    </div>
                  </figure>
                </section>

                <section className="!mt-0 !mb-0">
                  <h3 className="!mt-3 !text-xl font-bold text-gray-900">2. Nội thất phòng hát và khu vực tiếp khách</h3>
                  <p>Danh sách có thể gồm sofa băng hoặc sofa góc, bàn karaoke, ghế rời, quầy lễ tân, tủ kệ, vách trang trí, gương và các món nội thất khu vực chờ. Nên chụp ảnh toàn cảnh từng phòng và ảnh cận chất liệu, nhất là với sofa bọc da/nỉ hoặc đồ đóng theo kích thước.</p>
                  <figure className="not-prose mt-6 mb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <Image src="/thu-mua-quan-karaoke-3.jpg" alt="Sofa và bàn khu vực phòng hát karaoke" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                    </div>
                  </figure>
                </section>

                <section className="!mt-0 !mb-0">
                  <h3 className="!mt-3 !text-xl font-bold text-gray-900">3. Ánh sáng, cách âm và hệ thống phụ trợ</h3>
                  <p>Đèn LED, đèn sân khấu, đèn laser, bộ điều khiển ánh sáng, vật liệu tiêu âm, máy lạnh, tủ mát, camera và thiết bị mạng có thể được liệt kê riêng. Với hạng mục gắn vào trần/tường hoặc đi dây âm, cần xác định phạm vi được phép tháo và yêu cầu hoàn trả mặt bằng.</p>
                </section>

                <section className="!mt-0 !mb-0">
                  <h3 className="!mt-3 !text-xl font-bold text-gray-900">4. Tháo dỡ, bốc xếp và vận chuyển</h3>
                  <p>Ảnh lối vào, cầu thang, thang máy, điểm đỗ xe và tầng cần vận chuyển giúp dự trù cách bốc xếp. Với địa điểm chỉ cho làm ngoài giờ, hãy thông báo trước để thống nhất lịch theo quy định của tuyến đường và ban quản lý.</p>
                  <figure className="not-prose mt-6 mb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <Image src="/thu-mua-quan-karaoke.jpg" alt="Nội thất karaoke được tập kết, chuẩn bị vận chuyển" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                    </div>
                  </figure>
                </section>

                <h2 className="!mt-3 !text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Bảng Giá Thanh Lý Quán Karaoke Tại Quận 1 Tham Khảo</h2>
                <p>Thiết bị karaoke có nhiều model và cấu hình khác nhau nên giá được xác định sau khi kiểm tra. Bảng dưới đây liệt kê nhóm tài sản và thông tin cần chuẩn bị, không phải giá cố định.</p>
                <PriceTable
                  title="Hạng Mục Thu Mua Karaoke Tại Quận 1"
                  subtitle="Gửi model, số lượng và tình trạng để nhận tư vấn sơ bộ; giá cuối cùng được thống nhất sau khảo sát."
                  items={priceItems}
                />

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Quy Trình 4 Bước Thanh Lý Quán Karaoke</h2>
                <ol>
                  <li><strong>Bước 1 - Gửi thông tin:</strong> Gửi video từng phòng, danh sách tài sản, model thiết bị, địa chỉ và thời hạn bàn giao qua Zalo {hotline}.</li>
                  <li><strong>Bước 2 - Khảo sát:</strong> Kiểm tra số lượng, tình trạng và điều kiện tiếp cận, tháo dỡ, vận chuyển.</li>
                  <li><strong>Bước 3 - Thống nhất báo giá và lịch:</strong> Chốt hạng mục thu mua, phương án tháo dỡ, khung giờ và các khoản chi phí liên quan.</li>
                  <li><strong>Bước 4 - Thu dọn, thanh toán, bàn giao:</strong> Đối chiếu danh sách, thực hiện theo lịch đã chốt và xác nhận bàn giao mặt bằng.</li>
                </ol>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Câu Hỏi Thường Gặp Khi Thanh Lý Karaoke Tại Quận 1</h2>
                <FAQAccordion title="Giải Đáp Thắc Mắc Về Thanh Lý Karaoke Quận 1" faqs={faqs} />

                <section>
                  <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Khu Vực Quận 1 Có Thể Tiếp Nhận Khảo Sát</h2>
                  <p>Tiếp nhận yêu cầu ở Bến Thành, Bùi Viện, Phạm Ngũ Lão, Đề Thám, Đa Kao, Tân Định, Nguyễn Thái Bình, Cô Giang, Cầu Ông Lãnh, Bến Nghé và Nguyễn Cư Trinh. Lịch khảo sát và phương án vận chuyển được xác nhận theo địa chỉ, khung giờ giao nhận và nội quy mặt bằng.</p>
                </section>

                <section className="not-prose mt-10 bg-gray-900 text-white rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold !text-white">Liên Hệ Đồ Cũ Trung Kiên</h2>
                  <p className="text-gray-200">Gửi hình ảnh, model thiết bị, địa chỉ và thời hạn bàn giao để trao đổi phương án thanh lý phù hợp.</p>
                  <p className="mb-0"><strong>Hotline / Zalo:</strong> <a className="text-green-300 font-bold" href={`tel:${hotline.replace(/\./g, '')}`}>{hotline}</a></p>
                  <p className="mt-2"><strong>Địa chỉ:</strong> 271 Bình Long, Phường Bình Hưng Hòa, Quận Bình Tân, TP.HCM</p>
                  <p className="mb-0"><strong>Website:</strong> <a className="underline" href="https://thumuadocutrungkien.com/">thumuadocutrungkien.com</a></p>
                </section>
              </div>
            </article>

            <aside className="lg:col-span-1 min-w-0 h-fit sticky top-24">
              <Sidebar />
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}