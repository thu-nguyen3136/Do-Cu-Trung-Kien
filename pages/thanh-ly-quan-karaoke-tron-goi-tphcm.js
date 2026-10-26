import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '../components/SchemaMarkup';
import FAQAccordion from '../components/FAQAccordion';
import PriceTable from '../components/PriceTable';
import SEOHead from '../components/SEOHead';

const pageUrl = 'https://thumuadocutrungkien.com/thanh-ly-quan-karaoke-tron-goi-tphcm';
const pageDescription = 'Thanh lý quán karaoke trọn gói TPHCM: thu mua loa, amply, vang số, tivi, sofa, đèn và vách cách âm. Khảo sát tận nơi, tháo dỡ, trả mặt bằng. Gọi 0398.771.444.';
const pageImage = '/thu-mua-quan-karaoke-2.jpg';

export default function ThanhLyQuanKaraokeTronGoiTphcmPage() {
  const hotline = '0398.771.444';
  const zaloLink = `https://zalo.me/${hotline.replace(/\./g, '')}`;

  const faqs = [
    {
      question: 'Thanh lý quán karaoke trọn gói gồm những gì?',
      answer: 'Thanh lý quán karaoke trọn gói tại TPHCM có thể bao gồm toàn bộ thiết bị âm thanh, màn hình, đầu karaoke, đèn hiệu ứng, sofa, bàn, quầy lễ tân, điện lạnh và phần tháo dỡ vách tiêu âm, cách âm. Danh sách tài sản thu mua, phạm vi tháo dỡ, vận chuyển và tình trạng bàn giao mặt bằng được thống nhất bằng văn bản trước khi thực hiện.'
    },
    {
      question: 'Thu mua trọn gói và bán lẻ từng món, cách nào được giá hơn?',
      answer: 'Bán lẻ có thể được giá cao ở vài món dễ bán như loa thương hiệu hoặc tivi đời mới, nhưng mất nhiều thời gian và thường còn lại sofa, vách cách âm, đồ cồng kềnh. Thanh lý trọn gói giúp chốt một mức giá cho cả quán, xử lý dứt điểm trong một đợt và tiết kiệm chi phí thuê mặt bằng trong lúc chờ bán.'
    },
    {
      question: 'Quán karaoke bao nhiêu phòng thì nhận thanh lý trọn gói?',
      answer: 'Trung Kiên tiếp nhận từ quán vài phòng đến cơ sở nhiều tầng, nhiều phòng VIP. Bạn gửi số phòng, danh sách thiết bị chính mỗi phòng và hình ảnh thực tế để được tư vấn phương án và lịch khảo sát.'
    },
    {
      question: 'Vách cách âm, mút tiêu âm và trần trang trí có được tháo dỡ không?',
      answer: 'Phần tháo dỡ vách, trần, sàn và trả mặt bằng nguyên trạng có thể đưa vào gói nếu hai bên thống nhất trước. Chi phí nhân công, xe chở xà bần và khung giờ thi công được ghi rõ trong báo giá để bạn biết số tiền thực nhận.'
    },
    {
      question: 'Thiết bị hư hỏng hoặc không còn hoạt động có thu mua không?',
      answer: 'Có thể. Thiết bị hư được định giá theo tình trạng thực tế, khả năng sửa chữa và giá trị linh kiện. Bạn chỉ cần ghi chú rõ món nào đang lỗi khi gửi danh sách để việc báo giá minh bạch.'
    },
    {
      question: 'Bao lâu thì hoàn tất thanh lý một quán karaoke?',
      answer: 'Thời gian phụ thuộc số phòng, khối lượng tháo dỡ, vị trí tầng và quy định giờ vận chuyển của khu vực. Lịch khảo sát, tháo dỡ và bàn giao được xác nhận cụ thể sau khi hai bên chốt danh sách thu mua.'
    }
  ];

  const priceItems = [
    { name: 'Phòng karaoke thường (loa, amply, vang số, micro, tivi, sofa)', unit: 'Phòng', priceRange: 'Liên hệ khảo sát', note: 'Tùy thương hiệu thiết bị, tuổi máy và tình trạng nội thất' },
    { name: 'Phòng karaoke VIP (dàn âm thanh lớn, màn hình cỡ lớn, đèn hiệu ứng)', unit: 'Phòng', priceRange: 'Liên hệ khảo sát', note: 'Định giá theo cấu hình dàn âm thanh và hiện trạng phòng' },
    { name: 'Loa full, loa sub, cục đẩy công suất, vang số, mixer', unit: 'Bộ / chiếc', priceRange: 'Liên hệ khảo sát', note: 'Kiểm tra model, màng loa, bo mạch và khả năng hoạt động' },
    { name: 'Tivi, màn hình LED, đầu karaoke và màn chọn bài', unit: 'Chiếc / bộ', priceRange: 'Liên hệ khảo sát', note: 'Tùy kích thước, đời máy, ngoại quan và phụ kiện kèm theo' },
    { name: 'Sofa, bàn, quầy lễ tân, máy lạnh, tủ mát', unit: 'Bộ / món', priceRange: 'Liên hệ khảo sát', note: 'Xét chất liệu, độ mới, số lượng và khả năng tháo rời' },
    { name: 'Tháo dỡ vách cách âm, trần, sàn và trả mặt bằng', unit: 'Hạng mục', priceRange: 'Báo giá theo khối lượng', note: 'Thống nhất phạm vi và chi phí trước khi thi công' }
  ];

  const breadcrumbs = [
    { name: 'Trang chủ', url: 'https://thumuadocutrungkien.com/' },
    { name: 'Thu Mua Quán Karaoke', url: 'https://thumuadocutrungkien.com/thu-mua-quan-karaoke' },
    { name: 'Thanh Lý Quán Karaoke Trọn Gói TPHCM', url: pageUrl }
  ];

  const districts = ['Quận 1', 'Quận 3', 'Quận 4', 'Quận 5', 'Quận 6', 'Quận 7', 'Quận 8', 'Quận 10', 'Quận 11', 'Quận 12', 'Bình Thạnh', 'Phú Nhuận', 'Gò Vấp', 'Tân Bình', 'Tân Phú', 'Bình Tân', 'TP. Thủ Đức', 'Bình Chánh', 'Hóc Môn', 'Củ Chi', 'Nhà Bè'];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800 flex flex-col">
      <SEOHead
        title="Thanh Lý Quán Karaoke Trọn Gói TPHCM Giá Cao | Trung Kiên"
        description={pageDescription}
        keywords="thanh lý quán karaoke trọn gói TPHCM, thanh lý quán karaoke trọn gói, thu mua quán karaoke trọn gói, thanh lý quán karaoke TPHCM, thanh lý phòng karaoke cũ, thu mua phòng karaoke VIP, thanh lý dàn karaoke kinh doanh, thu mua loa karaoke cũ, thanh lý amply cục đẩy, thu mua vang số mixer, thanh lý tivi phòng hát, thu mua sofa karaoke, tháo dỡ vách cách âm karaoke, trả mặt bằng quán karaoke"
        canonical="/thanh-ly-quan-karaoke-tron-goi-tphcm"
        ogImage={pageImage}
      />
      <Head>
        <BreadcrumbSchema items={breadcrumbs} />
        <ServiceSchema
          name="Thanh Lý Quán Karaoke Trọn Gói TPHCM"
          description={pageDescription}
          url={pageUrl}
          image={`https://thumuadocutrungkien.com${pageImage}`}
        />
        <FAQSchema faqs={faqs} />
      </Head>

      <main className="flex-grow pb-12">
        <nav className="bg-white border-b border-gray-100 py-3 shadow-sm" aria-label="Breadcrumb">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
            <span className="mx-2">/</span>
            <Link href="/thu-mua-quan-karaoke" className="hover:text-brand-600 transition-colors">Thu Mua Quán Karaoke</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Quán Karaoke Trọn Gói TPHCM</span>
          </div>
        </nav>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <article className="lg:col-span-3 min-w-0">
              <header className="mb-4 border-b-2 border-brand-50 pb-1">
                <h1 className="text-2xl md:text-4xl font-black text-brand-600 leading-tight">
                  Thanh Lý Quán Karaoke Trọn Gói TPHCM - Thu Mua Giá Cao, Trả Mặt Bằng Nhanh
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-7">
                <p>
                  Một quán karaoke có thể có hàng chục phòng hát, mỗi phòng một dàn loa, amply, vang số, tivi, sofa cùng hệ thống cách âm riêng. Khi cần đóng cửa, chuyển nhượng hoặc trả mặt bằng, việc rao bán từng món vừa tốn thời gian vừa dễ để lại những hạng mục khó xử lý. <strong>Đồ Cũ Trung Kiên</strong> nhận <strong>thanh lý quán karaoke trọn gói TPHCM</strong>: khảo sát, định giá, tháo dỡ, vận chuyển toàn bộ tài sản và hỗ trợ bàn giao mặt bằng theo thỏa thuận.
                </p>
                <p>
                  Bạn chỉ cần gửi số phòng, danh sách thiết bị chính và video hiện trạng qua <a href={zaloLink}>Zalo {hotline}</a>. Trung Kiên phản hồi phương án sơ bộ, hẹn lịch khảo sát và chốt giá trước khi tháo dỡ, để bạn biết rõ số tiền thực nhận.
                </p>

                <div className="not-prose my-6 border-l-4 border-brand-600 bg-brand-50 p-5 md:p-6">
                  <p className="m-0 text-lg font-bold text-gray-900">Sắp hết hợp đồng thuê mặt bằng?</p>
                  <p className="mt-2 mb-0 text-gray-700">Gửi ngày cần bàn giao, địa chỉ và hình ảnh các phòng qua <a className="font-bold text-brand-700" href={zaloLink}>Zalo {hotline}</a> để được sắp lịch khảo sát phù hợp với tiến độ trả mặt bằng.</p>
                </div>

                <figure className="not-prose mt-8 mb-0">
                  <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
                    <Image src={pageImage} alt="Thanh lý quán karaoke trọn gói TPHCM - phòng hát với sofa, màn hình và dàn âm thanh" fill priority sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                  </div>
                </figure>

                <h2 className="!mt-3 !text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Khi Nào Nên Chọn Thanh Lý Quán Karaoke Trọn Gói?</h2>
                <p>Thanh lý trọn gói đặc biệt phù hợp trong các trường hợp sau:</p>
                <ul>
                  <li><strong>Đóng cửa hoặc trả mặt bằng theo hợp đồng:</strong> Cần giải phóng toàn bộ phòng hát trước một ngày cố định, kể cả phần vách, trần và đồ cồng kềnh.</li>
                  <li><strong>Chuyển đổi mô hình kinh doanh:</strong> Mặt bằng chuyển sang quán ăn, văn phòng hoặc cho thuê lại nên cần dọn sạch hệ thống karaoke cũ.</li>
                  <li><strong>Nâng cấp đồng loạt thiết bị:</strong> Thay dàn âm thanh, màn hình hoặc nội thất cho nhiều phòng cùng lúc và cần thu hồi vốn từ thiết bị cũ.</li>
                  <li><strong>Không có thời gian bán lẻ:</strong> Chủ quán không muốn tiếp nhiều lượt khách xem hàng, mặc cả và tự lo vận chuyển từng món.</li>
                </ul>
                <p>
                  Nếu bạn chỉ cần bán một vài thiết bị hoặc vài phòng, có thể xem thêm dịch vụ <Link href="/thu-mua-quan-karaoke" className="text-brand-600 font-semibold hover:underline">thu mua quán karaoke</Link> theo từng hạng mục.
                </p>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">So Sánh Thanh Lý Trọn Gói Và Tự Bán Lẻ Thiết Bị Karaoke</h2>
                <div className="not-prose overflow-x-auto">
                  <table className="w-full min-w-[560px] border-collapse text-sm md:text-base">
                    <thead>
                      <tr className="bg-gray-900 text-white">
                        <th className="p-3 text-left font-semibold">Tiêu chí</th>
                        <th className="p-3 text-left font-semibold">Thanh lý trọn gói</th>
                        <th className="p-3 text-left font-semibold">Tự bán lẻ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200"><td className="p-3 font-medium">Thời gian xử lý</td><td className="p-3">Một đợt khảo sát và tháo dỡ</td><td className="p-3">Kéo dài nhiều tuần, phụ thuộc người mua</td></tr>
                      <tr className="border-b border-gray-200 bg-gray-50"><td className="p-3 font-medium">Đồ cồng kềnh, khó bán</td><td className="p-3">Xử lý chung trong gói</td><td className="p-3">Thường bị tồn lại, phải thuê dọn riêng</td></tr>
                      <tr className="border-b border-gray-200"><td className="p-3 font-medium">Tháo dỡ, vận chuyển</td><td className="p-3">Bên thu mua sắp xếp nhân công và xe</td><td className="p-3">Chủ quán tự lo hoặc người mua tự tháo</td></tr>
                      <tr className="border-b border-gray-200 bg-gray-50"><td className="p-3 font-medium">Trả mặt bằng</td><td className="p-3">Có thể đưa vào thỏa thuận</td><td className="p-3">Chủ quán tự thuê thợ</td></tr>
                      <tr><td className="p-3 font-medium">Giá từng món</td><td className="p-3">Chốt một mức cho cả danh sách</td><td className="p-3">Có thể cao hơn ở vài món dễ bán</td></tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Danh Mục Thu Mua Khi Thanh Lý Quán Karaoke Trọn Gói</h2>
                <p>Mỗi quán có cấu hình khác nhau. Dưới đây là các nhóm tài sản Trung Kiên thường khảo sát; khả năng thu mua được xác nhận sau khi xem model, tình trạng và số lượng thực tế.</p>

                <section className="!mb-0">
                  <h3 className="!text-xl font-bold text-gray-900">1. Dàn âm thanh karaoke kinh doanh</h3>
                  <p>Loa full, loa sub điện và sub hơi, cục đẩy công suất, amply liền công suất, vang số, vang cơ, mixer, equalizer, nâng tiếng, micro không dây và micro có dây. Các thương hiệu phổ biến trong quán karaoke như JBL, BMB, Bose, RCF, Nexo, Shure hay các dòng vang số thông dụng đều có thể gửi thông tin để tư vấn.</p>
                  <p>Để định giá sát hơn, hãy chụp rõ tem model phía sau thiết bị và quay video khi dàn đang phát nhạc.</p>
                  <figure className="not-prose mt-6 mb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <Image src="/thu-mua-quan-karaoke-1.jpg" alt="Dàn loa và thiết bị âm thanh trong phòng hát karaoke kinh doanh" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                    </div>
                  </figure>
                </section>

                <section className="!mt-0 !mb-0">
                  <h3 className="!mt-3 !text-xl font-bold text-gray-900">2. Màn hình, đầu karaoke và thiết bị trình chiếu</h3>
                  <p>Smart TV, tivi màn hình lớn, màn hình LED, máy chiếu, đầu karaoke, ổ cứng bài hát và màn hình cảm ứng chọn bài. Thiết bị còn đủ remote, chân treo và phụ kiện thường được đánh giá tốt hơn.</p>
                </section>

                <section className="!mt-0 !mb-0">
                  <h3 className="!mt-3 !text-xl font-bold text-gray-900">3. Ánh sáng, hiệu ứng và trang trí phòng hát</h3>
                  <p>Đèn moving head, đèn laser, đèn LED par, đèn chớp, quả cầu gương, máy tạo khói, bộ điều khiển DMX và các hạng mục trang trí có thể tháo rời như bảng neon, tranh, đèn trang trí.</p>
                </section>

                <section className="!mt-0 !mb-0">
                  <h3 className="!mt-3 !text-xl font-bold text-gray-900">4. Nội thất, sofa và khu lễ tân</h3>
                  <p>Sofa phòng hát, sofa phòng VIP, bàn kính, bàn gỗ, ghế đôn, quầy lễ tân, quầy thu ngân, kệ trang trí, máy tính tính tiền và máy in hóa đơn. Hãy gửi ảnh bề mặt nệm và chân ghế để đánh giá tình trạng chính xác.</p>
                  <figure className="not-prose mt-6 mb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <Image src="/thu-mua-quan-karaoke-3.jpg" alt="Sofa và bàn phòng karaoke có thể thu mua khi thanh lý quán" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                    </div>
                  </figure>
                </section>

                <section className="!mt-0 !mb-0">
                  <h3 className="!mt-3 !text-xl font-bold text-gray-900">5. Điện lạnh và thiết bị phục vụ</h3>
                  <p>Máy lạnh treo tường, máy lạnh âm trần, tủ mát, tủ đông, tủ trưng bày nước uống và dụng cụ quầy bar mini trong quán. Xem thêm dịch vụ <Link href="/thu-mua-tu-dong-tu-mat" className="text-brand-600 font-semibold hover:underline">thu mua tủ đông, tủ mát</Link> nếu quán có nhiều thiết bị lạnh.</p>
                </section>

                <section className="!mt-0 !mb-0">
                  <h3 className="!mt-3 !text-xl font-bold text-gray-900">6. Vách cách âm, trần và hoàn trả mặt bằng</h3>
                  <p>Đây là phần nhiều đơn vị thu mua bỏ qua nhưng lại là khoản tốn công nhất khi trả mặt bằng: vách tiêu âm, mút cách âm, trần thạch cao trang trí, sàn gỗ, thảm và cửa cách âm. Trung Kiên có thể khảo sát và báo giá tháo dỡ, thu gom cùng gói thanh lý để bạn không phải thuê thêm đội thợ riêng.</p>
                </section>

                <h2 className="!mt-3 !text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Bảng Giá Thanh Lý Quán Karaoke Trọn Gói Tham Khảo</h2>
                <p>
                  Giá thanh lý quán karaoke phụ thuộc rất nhiều vào cấu hình từng phòng, vì vậy Trung Kiên định giá theo danh sách thực tế thay vì đưa ra một mức chung. Các yếu tố chính gồm thương hiệu và đời thiết bị, tình trạng hoạt động, số phòng, độ mới của nội thất, vị trí tầng và khối lượng tháo dỡ.
                </p>
                <PriceTable
                  title="Bảng Giá Thanh Lý Quán Karaoke Trọn Gói"
                  subtitle="Gửi số phòng, model thiết bị và video hiện trạng để nhận mức dự kiến; giá cuối cùng được chốt sau khảo sát."
                  items={priceItems}
                />
                <p><em>Lưu ý: Mức giá được thống nhất trước khi tháo dỡ. Chi phí nhân công, vận chuyển và hoàn trả mặt bằng (nếu có) được ghi rõ trong báo giá.</em></p>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">5 Cách Giúp Quán Karaoke Thanh Lý Được Giá Hơn</h2>
                <ol>
                  <li><strong>Liên hệ sớm trước ngày trả mặt bằng:</strong> Có thời gian khảo sát kỹ, tránh phải bán gấp trong vài ngày cuối.</li>
                  <li><strong>Giữ nguyên dàn âm thanh theo phòng:</strong> Bộ loa, cục đẩy, vang số đồng bộ thường được đánh giá cao hơn khi tách lẻ.</li>
                  <li><strong>Chuẩn bị danh sách model và số lượng:</strong> Ghi rõ mỗi phòng có gì giúp báo giá nhanh và chính xác.</li>
                  <li><strong>Vệ sinh và cắm điện thử thiết bị:</strong> Thiết bị chạy được khi khảo sát luôn có lợi hơn thiết bị chưa kiểm tra.</li>
                  <li><strong>Giữ hóa đơn, remote và phụ kiện:</strong> Remote tivi, dây tín hiệu, chân treo loa và giấy tờ mua hàng giúp tăng giá trị thiết bị.</li>
                </ol>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Quy Trình 5 Bước Thanh Lý Quán Karaoke Trọn Gói</h2>
                <ol>
                  <li><strong>Bước 1 - Gửi thông tin:</strong> Gửi địa chỉ, số phòng, danh sách thiết bị, video từng phòng và ngày cần bàn giao qua Zalo {hotline}.</li>
                  <li><strong>Bước 2 - Báo giá sơ bộ:</strong> Trung Kiên xem thông tin và phản hồi hạng mục có thể thu mua cùng mức dự kiến.</li>
                  <li><strong>Bước 3 - Khảo sát tận nơi:</strong> Kiểm tra thiết bị, lối vận chuyển, thang hàng và quy định giờ giấc của tòa nhà hoặc khu phố.</li>
                  <li><strong>Bước 4 - Chốt giá và lịch tháo dỡ:</strong> Thống nhất giá cuối, danh sách tài sản, phạm vi tháo dỡ, chi phí liên quan và thời gian thực hiện.</li>
                  <li><strong>Bước 5 - Tháo dỡ, thanh toán và bàn giao:</strong> Thực hiện theo thỏa thuận, thanh toán theo hình thức đã chốt và cùng kiểm tra lại mặt bằng.</li>
                </ol>
                <p>
                  Trước ngày thực hiện, bạn nên tách riêng tài sản cá nhân, sổ sách và các thiết bị muốn giữ lại; đồng thời báo trước cho chủ nhà hoặc ban quản lý để chủ động giờ ra vào. Quán có thêm khu bar hoặc lounge có thể tham khảo dịch vụ <Link href="/thanh-ly-quan-bar-tron-goi-tphcm" className="text-brand-600 font-semibold hover:underline">thanh lý quán bar trọn gói TPHCM</Link>.
                </p>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Vì Sao Chọn Đồ Cũ Trung Kiên?</h2>
                <ul>
                  <li><strong>Chốt giá trước khi tháo:</strong> Không thay đổi giá khi đã thống nhất danh sách và hiện trạng.</li>
                  <li><strong>Báo giá rõ từng khoản:</strong> Giá thu mua và chi phí tháo dỡ, vận chuyển được tách bạch để bạn dễ đối chiếu.</li>
                  <li><strong>Nhận cả đồ khó bán:</strong> Sofa cũ, vách cách âm, thiết bị hư được xem xét trong cùng phương án.</li>
                  <li><strong>Linh hoạt khung giờ:</strong> Có thể làm buổi tối hoặc theo giờ cho phép của tòa nhà, khi hai bên thống nhất trước.</li>
                  <li><strong>Địa chỉ rõ ràng:</strong> Văn phòng tại 271 Bình Long, Bình Tân, liên hệ trực tiếp qua một hotline duy nhất.</li>
                </ul>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Câu Hỏi Thường Gặp Khi Thanh Lý Quán Karaoke Trọn Gói</h2>
                <FAQAccordion title="Giải Đáp Thắc Mắc Về Thanh Lý Quán Karaoke" faqs={faqs} />

                <section>
                  <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Khu Vực Nhận Thanh Lý Quán Karaoke Trọn Gói Tại TP.HCM</h2>
                  <p>Trung Kiên tiếp nhận khảo sát tại các quận nội thành và TP. Thủ Đức. Các huyện ngoại thành và tỉnh lân cận như Bình Dương, Đồng Nai, Long An được xác nhận lịch theo địa chỉ và quy mô quán. Với quán tại trung tâm, bạn có thể xem thêm trang <Link href="/thanh-ly-quan-karaoke-tai-quan-1" className="text-brand-600 font-semibold hover:underline">thanh lý quán karaoke tại Quận 1</Link>.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 not-prose">
                    {districts.map((district) => (
                      <div key={district} className="border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700">Thanh lý karaoke {district}</div>
                    ))}
                  </div>
                </section>

                <section className="not-prose mt-10 bg-gray-900 text-white rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold !text-white">Liên Hệ Thanh Lý Quán Karaoke Trọn Gói</h2>
                  <p className="text-gray-200">Gửi số phòng, hình ảnh và ngày cần bàn giao mặt bằng để nhận phương án thu mua phù hợp.</p>
                  <p className="mb-0"><strong>Hotline / Zalo tư vấn:</strong> <a className="text-green-300 font-bold" href={`tel:${hotline.replace(/\./g, '')}`}>{hotline}</a></p>
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
