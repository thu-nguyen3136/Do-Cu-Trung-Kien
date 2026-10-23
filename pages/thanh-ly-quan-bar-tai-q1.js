import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '../components/SchemaMarkup';
import FAQAccordion from '../components/FAQAccordion';
import PriceTable from '../components/PriceTable';
import SEOHead from '../components/SEOHead';

const pageUrl = 'https://thumuadocutrungkien.com/thanh-ly-quan-bar-tai-q1';
const pageDescription = 'Dịch vụ thu mua thanh lý quán bar tại Q1 giá cao. Thu mua âm thanh, quầy bar, ánh sáng; hỗ trợ tháo dỡ ban đêm theo lịch và quy định. Hotline 0398.771.444.';
const pageImage = '/thanh-ly-quan-bar-gia-cao.jpg';

export default function ThanhLyQuanBarTaiQ1Page() {
  const hotline = '0398.771.444';
  const faqs = [
    {
      question: 'Quán bar ở tầng cao hoặc rooftop tại Quận 1 có hỗ trợ hạ hàng không?',
      answer: 'Trung Kiên sẽ khảo sát lối vận chuyển, tải trọng thang máy, vị trí tập kết và quy định của tòa nhà để đề xuất cách tháo dỡ phù hợp. Việc dùng tời, dây đai hoặc phương tiện chuyên dụng chỉ được xác nhận sau khi kiểm tra điều kiện an toàn tại chỗ.'
    },
    {
      question: 'Tuyến đường tại Quận 1 cấm tải ban ngày thì vận chuyển bằng cách nào?',
      answer: 'Bạn cung cấp địa chỉ, khung giờ được phép bốc xếp và quy định của ban quản lý. Hai bên sẽ thống nhất loại xe trung chuyển hoặc lịch ngoài giờ nếu tuyến đường và mặt bằng cho phép; không mặc định mọi tuyến đều có thể vận chuyển từ 22h đến 5h.'
    },
    {
      question: 'Bán lẻ riêng dàn âm thanh hoặc tủ mát có được không?',
      answer: 'Có. Trung Kiên tiếp nhận yêu cầu cho từng thiết bị hoặc theo lô toàn bộ quán bar. Vui lòng gửi model, số lượng, tình trạng hoạt động và địa chỉ để được xem xét phương án thu mua.'
    }
  ];

  const priceItems = [
    { name: 'Cặp loa Line Array, loa sub kép 50', unit: 'Bộ', priceRange: '6.000.000 - 65.000.000 đ', note: 'Tùy thương hiệu, model, tình trạng màng loa và củ từ' },
    { name: 'Mixer kỹ thuật số, cục đẩy công suất', unit: 'Thiết bị', priceRange: '4.500.000 - 35.000.000 đ', note: 'Kiểm tra bo mạch, cổng kết nối và khả năng vận hành' },
    { name: 'Quầy bar inox 304 hoặc quầy ốp đá', unit: 'Bộ', priceRange: '3.500.000 - 22.000.000 đ', note: 'Xét kích thước, vật liệu và khả năng tháo rời' },
    { name: 'Máy làm đá viên, máy rửa ly tự động', unit: 'Máy', priceRange: '5.000.000 - 28.000.000 đ', note: 'Tùy công suất, thương hiệu và tình trạng hoạt động' },
    { name: 'Đèn moving head, đèn beam và laser', unit: 'Cây', priceRange: '800.000 - 5.500.000 đ', note: 'Kiểm tra mắt quét, motor và bo điều khiển' },
    { name: 'Sofa lounge, ghế bar và bàn cao', unit: 'Cái', priceRange: '150.000 - 950.000 đ', note: 'Tùy chất liệu, độ mới và số lượng thu mua' }
  ];

  const breadcrumbs = [
    { name: 'Trang chủ', url: 'https://thumuadocutrungkien.com/' },
    { name: 'Thanh Lý Quán Bar TPHCM', url: 'https://thumuadocutrungkien.com/thanh-ly-quan-bar-tphcm' },
    { name: 'Thanh Lý Quán Bar Tại Q1', url: pageUrl }
  ];

  const neighborhoods = [
    'Bùi Viện', 'Phạm Ngũ Lão', 'Đề Thám', 'Lê Thánh Tôn', 'Thái Văn Lung', 'Pasteur',
    'Hai Bà Trưng', 'Đồng Khởi', 'Nguyễn Huệ', 'Nam Kỳ Khởi Nghĩa', 'Lý Tự Trọng', 'Đa Kao'
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800 flex flex-col">
      <SEOHead
        title="Thanh Lý Quán Bar Q1 Giá Cao, Hỗ Trợ Đêm | Trung Kiên"
        description={pageDescription}
        keywords="thanh lý quán bar tại Quận 1, thu mua quán bar Q1, thanh lý pub Quận 1, thu mua lounge Q1, thanh lý rooftop bar Quận 1, thu mua loa bar Quận 1, thu mua loa line array, thanh lý loa sub, thu mua mixer và cục đẩy công suất, thanh lý đèn moving head, thu mua đèn sân khấu laser, thanh lý quầy bar inox, thu mua máy làm đá quán bar, thanh lý máy rửa ly, thu mua tủ mát quán bar, thanh lý sofa lounge, tháo dỡ quán bar ban đêm Quận 1"
        canonical="/thanh-ly-quan-bar-tai-q1"
        ogImage={pageImage}
      />
      <Head>
        <BreadcrumbSchema items={breadcrumbs} />
        <ServiceSchema
          name="Thu Mua Thanh Lý Quán Bar Tại Quận 1"
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
            <Link href="/thanh-ly-quan-bar-tphcm" className="hover:text-brand-600 transition-colors">Thanh Lý Quán Bar TPHCM</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Quán Bar Tại Q1</span>
          </div>
        </nav>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <article className="lg:col-span-3 min-w-0">
              <header className="mb-4 border-b-2 border-brand-50 pb-1">
                <h1 className="text-2xl md:text-4xl font-black text-brand-600 leading-tight">
                  Dịch Vụ Thu Mua Thanh Lý Quán Bar Tại Q1 Trọn Gói Giá Cao, Nhanh Gọn Trong 24H
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-7">
                <p>
                  Quận 1 tập trung nhiều mô hình pub, lounge, rooftop bar và địa điểm giải trí về đêm. Với mặt bằng ở khu trung tâm, lịch bàn giao thường cần tính cùng giờ cấm tải, lối đi hẹp, quy định của tòa nhà và phương án đưa thiết bị từ tầng cao xuống. Vì vậy, khi cần đóng cửa, sang nhượng hoặc thay đổi thiết kế, <strong>thanh lý quán bar tại Q1</strong> không chỉ là tìm người mua đồ mà còn cần một kế hoạch thu dọn rõ ràng.
                </p>
                <p>
                  <strong>Đồ Cũ Trung Kiên</strong> tiếp nhận yêu cầu <strong>thu mua thanh lý quán bar tại Quận 1</strong> theo từng hạng mục hoặc theo lô, gồm âm thanh, ánh sáng, quầy pha chế, bàn ghế và thiết bị lạnh. Gửi video không gian, model máy móc, địa chỉ và thời hạn bàn giao qua <a href={`https://zalo.me/${hotline.replace(/\./g, '')}`}>Zalo {hotline}</a> để được trao đổi bước khảo sát. Giá và lịch thi công được xác nhận sau khi kiểm tra hiện trạng cùng điều kiện vận chuyển.
                </p>

                <div className="not-prose my-6 border-l-4 border-brand-600 bg-brand-50 p-5 md:p-6">
                  <p className="m-0 text-lg font-bold text-gray-900">Cần lên lịch thu dọn quán bar tại Quận 1?</p>
                  <p className="mt-2 mb-0 text-gray-700">Gửi video toàn cảnh, model thiết bị, địa chỉ và khung giờ tòa nhà cho phép bốc xếp qua <a className="font-bold text-brand-700" href={`https://zalo.me/${hotline.replace(/\./g, '')}`}>Zalo {hotline}</a>. Thời gian phản hồi và khảo sát phụ thuộc lịch hẹn, vị trí và khối lượng công việc.</p>
                </div>

                <figure className="not-prose mt-8 mb-0">
                  <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
                    <Image src={pageImage} alt="Không gian quán bar với quầy phục vụ và khu vực khách tại TP.HCM" fill priority sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                  </div>
                </figure>

                <h2 className="!mt-3 !text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">3 Thách Thức Khi Tự Thanh Lý Quán Bar Tại Quận 1</h2>
                <p>Khi tự tìm người mua lẻ từng món, chủ quán có thể gặp khó ở các khâu vận chuyển và tháo dỡ vốn phụ thuộc quy định riêng của từng tuyến phố, tòa nhà:</p>
                <ol>
                  <li><strong>Giờ cấm tải và quy định vận chuyển:</strong> Một số tuyến đường hoặc tòa nhà có khung giờ giao nhận riêng. Cần xác minh trước giờ xe được phép vào, điểm tập kết và loại phương tiện phù hợp thay vì mặc định cùng một lịch cho mọi địa chỉ.</li>
                  <li><strong>Thiết bị cồng kềnh ở tầng cao:</strong> Quầy ốp đá, tủ mát dài, loa treo và thiết bị sân khấu cần đo lối đi, kiểm tra tải trọng thang máy và thống nhất cách tháo. Nếu cần tời hoặc phương tiện nâng hạ, phải khảo sát điều kiện an toàn và xin phép ban quản lý trước.</li>
                  <li><strong>Định giá dàn âm thanh, ánh sáng:</strong> Loa, mixer số, cục đẩy và moving head có giá trị phụ thuộc model, tình trạng linh kiện và khả năng hoạt động. Chuẩn bị model, phụ kiện và video test giúp việc thẩm định có căn cứ hơn.</li>
                </ol>
                <p>Nếu quán nằm trong hẻm hoặc khu phố kinh doanh đêm, hãy gửi ảnh lối ra vào và nêu rõ giới hạn tiếng ồn, giờ thi công. Trung Kiên sẽ trao đổi phương án và xác nhận phạm vi công việc trước khi chốt.</p>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Các Hạng Mục Thu Mua, Thanh Lý Quán Bar Tại Q1</h2>
                <p>Danh sách dưới đây là các nhóm tài sản có thể đề nghị khảo sát. Việc tiếp nhận từng món phụ thuộc tình trạng, số lượng, model và khả năng tháo vận chuyển tại địa chỉ cụ thể.</p>

                <section className="!mb-0">
                  <h3 className="!text-xl font-bold text-gray-900">1. Hệ thống âm thanh và ánh sáng sân khấu</h3>
                  <p>Hạng mục âm thanh có thể gồm loa full, loa sub, loa line array, amply, cục đẩy công suất, mixer analog hoặc kỹ thuật số, vang số và micro. Các thiết bị ánh sáng như moving head, đèn beam, laser, strobe, máy tạo khói, máy phun hiệu ứng và bàn điều khiển DMX nên được kiểm tra riêng.</p>
                  <p>Khi gửi yêu cầu, hãy chụp tem model, số lượng, phụ kiện đang có và quay video kiểm tra hoạt động. Với hệ thống lắp cố định, cần báo trước vị trí treo và điều kiện tháo dỡ.</p>
                  <figure className="not-prose mt-6 mb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <Image src="/thanh-ly-quan-bar-tron-goi.jpg" alt="Khu vực bar và hệ thống trình diễn trong không gian giải trí" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                    </div>
                  </figure>
                </section>

                <section className="!mt-0 !mb-0">
                  <h3 className="!mt-3 !text-xl font-bold text-gray-900">2. Quầy bar và thiết bị pha chế</h3>
                  <p>Trung Kiên có thể khảo sát quầy pha chế inox 304, quầy ốp đá, quầy cashier, chậu rửa, thùng đá âm bàn, kệ treo ly và tủ trưng bày rượu. Máy làm đá, máy rửa ly, máy xay công nghiệp và tháp rót bia cần có thông tin công suất, thương hiệu và tình trạng vận hành.</p>
                  <p>Quầy đóng theo mặt bằng thường cần tháo theo cấu tạo thực tế. Bạn nên cho biết vật liệu, chiều dài ước tính và có cần giữ lại phần nào để hai bên thống nhất phạm vi tháo lắp.</p>
                  <figure className="not-prose mt-6 mb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <Image src="/thanh-ly-quan-bar-tphcm.jpg" alt="Quầy bar và ghế cao tại địa điểm kinh doanh ở TP.HCM" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                    </div>
                  </figure>
                </section>

                <section className="!mt-0 !mb-0">
                  <h3 className="!mt-3 !text-xl font-bold text-gray-900">3. Bàn ghế, sofa và nội thất pub, lounge</h3>
                  <p>Các món có thể gửi khảo sát gồm ghế bar, bàn cao, sofa khu VIP, bàn trà, tủ kệ, vách trang trí, đèn chùm, biển neon và quầy thu ngân. Với sofa hoặc bàn ghế theo bộ, ảnh toàn cảnh và ảnh cận chất liệu giúp đánh giá đúng số lượng, độ mới và tình trạng sử dụng.</p>
                  <figure className="not-prose mt-6 mb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <Image src="/thu-mua-noi-that-quan-bar.jpg" alt="Sofa, bàn và nội thất khu vực lounge" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                    </div>
                  </figure>
                </section>

                <section className="!mt-0 !mb-0">
                  <h3 className="!mt-3 !text-xl font-bold text-gray-900">4. Tủ mát, tủ đông và hệ thống điều hòa</h3>
                  <p>Thiết bị lạnh thường có tủ mát đứng nhiều cánh, tủ trưng bày đồ uống, tủ đông bàn chặt và máy lạnh âm trần hoặc giấu trần nối ống gió. Hãy cung cấp model, công suất, tình trạng làm lạnh và vị trí lắp đặt để dự trù cách tháo và di chuyển.</p>
                  <p>Trung Kiên cũng nhận khảo sát các tài sản bar theo khu vực tại TP.HCM; xem thêm dịch vụ <Link href="/thanh-ly-quan-bar-tphcm" className="text-brand-600 font-semibold hover:underline">thanh lý quán bar trọn gói tại TPHCM</Link> hoặc <Link href="/thu-mua-tu-dong-tu-mat" className="text-brand-600 font-semibold hover:underline">thu mua tủ đông, tủ mát</Link>.</p>
                  <figure className="not-prose mt-6 mb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <Image src="/thanh-ly-quan-bar-tron-goi.jpg" alt="Khu vực phục vụ và thiết bị trong quán bar" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                    </div>
                  </figure>
                </section>

                <h2 className="!mt-3 !text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Bảng Giá Thu Mua Thanh Lý Đồ Quán Bar Tại Quận 1 Tham Khảo</h2>
                <p>Khoảng giá dưới đây là mức tham khảo, không phải báo giá cố định. Giá thực tế phụ thuộc thương hiệu, model, tình trạng linh kiện, công suất, số lượng và điều kiện tháo dỡ, vận chuyển tại mặt bằng.</p>
                <PriceTable
                  title="Bảng Giá Thanh Lý Quán Bar Tại Quận 1 Tham Khảo"
                  subtitle="Gửi model, hình ảnh và video hoạt động để nhận tư vấn sơ bộ; giá cuối được thống nhất sau khi kiểm tra."
                  items={priceItems}
                />
                <p><em>Lưu ý: Mức giá có thể thay đổi theo thời điểm và tình trạng từng thiết bị. Các dòng hàng nhập khẩu cần kiểm tra model, phụ kiện và nguồn gốc trước khi định giá.</em></p>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">5 Điểm Cần Thống Nhất Trước Khi Thu Mua Tại Quận 1</h2>
                <ol>
                  <li><strong>Lịch khảo sát:</strong> Hẹn theo vị trí quán, lịch nhân sự và khung giờ tòa nhà cho phép.</li>
                  <li><strong>Giờ tháo dỡ:</strong> Có thể trao đổi phương án buổi tối hoặc ngoài giờ nếu được ban quản lý và quy định địa phương chấp thuận.</li>
                  <li><strong>Nhân lực, xe và dụng cụ:</strong> Chốt phương tiện theo đường vào, điểm đỗ, tầng lầu, tải trọng thang máy và khối lượng hàng.</li>
                  <li><strong>Chi phí và số tiền thực nhận:</strong> Xác nhận bằng báo giá trước các khoản nhân công, nâng hạ, vận chuyển hoặc phát sinh đặc thù.</li>
                  <li><strong>Thanh toán và bàn giao:</strong> Thống nhất thời điểm thanh toán, danh sách tài sản thu mua, phần cần giữ lại và tình trạng mặt bằng sau khi dọn.</li>
                </ol>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Quy Trình 4 Bước Thu Mua Quán Bar Nhanh Gọn Tại Quận 1</h2>
                <ol>
                  <li><strong>Bước 1 - Gửi thông tin:</strong> Gửi video không gian, danh sách thiết bị, model, địa chỉ và thời hạn bàn giao qua Zalo {hotline}.</li>
                  <li><strong>Bước 2 - Khảo sát:</strong> Kiểm tra thực tế thiết bị, lối vận chuyển, giờ cấm tải và nội quy tòa nhà.</li>
                  <li><strong>Bước 3 - Chốt phương án:</strong> Thống nhất danh mục, giá, lịch tháo dỡ, nhân lực, xe và chi phí liên quan trước khi làm.</li>
                  <li><strong>Bước 4 - Tháo dỡ, thanh toán, bàn giao:</strong> Thực hiện theo nội dung đã thống nhất, đối chiếu hàng hóa và xác nhận bàn giao sau khi hoàn tất.</li>
                </ol>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Câu Hỏi Thường Gặp Khi Thanh Lý Quán Bar Tại Q1</h2>
                <FAQAccordion title="Giải Đáp Thắc Mắc Về Thu Mua Quán Bar Quận 1" faqs={faqs} />

                <section>
                  <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Các Khu Vực Quận 1 Trung Kiên Tiếp Nhận Khảo Sát</h2>
                  <p>Tiếp nhận yêu cầu tại khu vực Bùi Viện - Phạm Ngũ Lão - Đề Thám, Lê Thánh Tôn - Thái Văn Lung, Pasteur, Hai Bà Trưng, Đồng Khởi, Nguyễn Huệ, Nam Kỳ Khởi Nghĩa, Lý Tự Trọng và Đa Kao. Lịch và phương án vận chuyển sẽ được xác nhận theo địa chỉ cụ thể, khung giờ giao nhận và nội quy mặt bằng.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 not-prose">
                    {neighborhoods.map((neighborhood) => (
                      <div key={neighborhood} className="border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700">Thanh lý quán bar {neighborhood}</div>
                    ))}
                  </div>
                </section>

                <section className="not-prose mt-10 bg-gray-900 text-white rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold !text-white">Liên Hệ Đồ Cũ Trung Kiên</h2>
                  <p className="text-gray-200">Gửi hình ảnh, model thiết bị, địa chỉ và khung giờ được phép bốc xếp để trao đổi phương án thanh lý.</p>
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
