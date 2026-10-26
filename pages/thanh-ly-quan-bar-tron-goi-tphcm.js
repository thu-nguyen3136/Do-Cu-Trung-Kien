import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '../components/SchemaMarkup';
import FAQAccordion from '../components/FAQAccordion';
import PriceTable from '../components/PriceTable';
import SEOHead from '../components/SEOHead';

const pageUrl = 'https://thumuadocutrungkien.com/thanh-ly-quan-bar-tron-goi-tphcm';
const pageDescription = 'Thu mua thanh lý quán bar TPHCM: quầy bar, máy làm đá, tủ mát, bàn ghế, sofa, âm thanh, ánh sáng. Khảo sát, tháo dỡ theo thỏa thuận. Gọi 0398.771.444.';
const pageImage = '/thanh-ly-quan-bar-gia-cao.jpg';

export default function ThanhLyQuanBarTphcmPage() {
  const hotline = '0398.771.444';
  const faqs = [
    {
      question: 'Tôi chỉ muốn bán lẻ vài chiếc loa hoặc một tủ mát có được không?',
      answer: 'Có. Trung Kiên tiếp nhận yêu cầu từ một vài thiết bị riêng lẻ đến thanh lý trọn gói quán bar, pub hoặc lounge. Giá và lịch thu mua được trao đổi theo tình trạng, số lượng và địa chỉ.'
    },
    {
      question: 'Quán bar trong hẻm nhỏ hoặc khu trung tâm có thể thu dọn không?',
      answer: 'Bạn hãy gửi địa chỉ, hình ảnh lối vào, tầng cần vận chuyển và quy định của mặt bằng. Trung Kiên sẽ kiểm tra điều kiện tiếp cận, loại xe và nhân lực phù hợp trước khi xác nhận lịch.'
    },
    {
      question: 'Chi phí tháo dỡ và xe vận chuyển được tính như thế nào?',
      answer: 'Phạm vi tháo dỡ, bốc xếp và vận chuyển sẽ được trao đổi cùng báo giá trước khi làm. Với phương án thu mua trọn gói, các chi phí này được xác nhận rõ trong thỏa thuận để bạn biết số tiền thực nhận.'
    }
  ];

  const priceItems = [
    { name: 'Quầy bar inox 304, quầy gỗ và kệ rượu', unit: 'Hạng mục', priceRange: '2.500.000 - 18.000.000 đ', note: 'Tùy kích thước, vật liệu và khả năng tháo rời' },
    { name: 'Tủ mát Sanaky/Alaska, tủ ướp bia rượu', unit: 'Thiết bị', priceRange: '2.000.000 - 12.000.000 đ', note: 'Kiểm tra dàn lạnh, lốc và khả năng làm mát' },
    { name: 'Máy làm đá viên, máy rửa ly công nghiệp', unit: 'Thiết bị', priceRange: '4.000.000 - 25.000.000 đ', note: 'Định giá theo thương hiệu, công suất và tình trạng' },
    { name: 'Ghế bar, bàn bar và sofa pub/lounge', unit: 'Cái / bộ', priceRange: '120.000 - 750.000 đ', note: 'Tùy chất liệu, độ mới và số lượng thu mua' },
    { name: 'Loa, mixer, amply, đèn laser/moving head', unit: 'Lô / thiết bị', priceRange: '3.000.000 - 40.000.000 đ', note: 'Kiểm tra màng loa, bo mạch và khả năng hoạt động' }
  ];

  const breadcrumbs = [
    { name: 'Trang chủ', url: 'https://thumuadocutrungkien.com/' },
    { name: 'Thu Mua Đồ Cũ', url: 'https://thumuadocutrungkien.com/' },
    { name: 'Thanh Lý Quán Bar Trọn Gói TPHCM', url: pageUrl }
  ];

  const districts = ['Quận 1', 'Quận 3', 'Quận 4', 'Quận 5', 'Quận 7', 'Quận 10', 'Bình Thạnh', 'Phú Nhuận', 'Gò Vấp', 'Tân Bình', 'Tân Phú', 'Bình Tân', 'TP. Thủ Đức', 'Bình Chánh', 'Nhà Bè', 'Hóc Môn'];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800 flex flex-col">
      <SEOHead
        title="Thu Mua Thanh Lý Quán Bar Trọn Gói TPHCM Giá Cao | Trung Kiên"
        description={pageDescription}
        keywords="thanh lý quán bar TPHCM, thu mua thanh lý quán bar trọn gói, thu mua pub lounge, thanh lý rooftop bar, thu mua quầy bar inox, thanh lý quầy pha chế, thu mua loa quán bar, thanh lý loa sub và mixer, thu mua amply cục đẩy, thanh lý đèn moving head, thu mua máy làm đá quán bar, thanh lý máy rửa ly, thu mua tủ mát tủ đông quán bar, thanh lý sofa lounge, thanh lý quán bar Quận 1, tháo dỡ quán bar ban đêm"
        canonical="/thanh-ly-quan-bar-tron-goi-tphcm"
        ogImage={pageImage}
      />
      <Head>
        <BreadcrumbSchema items={breadcrumbs} />
        <ServiceSchema
          name="Thanh Lý Quán Bar TPHCM Theo Hạng Mục Hoặc Trọn Gói"
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
            <span className="text-gray-900 font-medium">Thanh Lý Quán Bar Trọn Gói TPHCM</span>
          </div>
        </nav>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <article className="lg:col-span-3 min-w-0">
              <header className="mb-4 border-b-2 border-brand-50 pb-1">
                <h1 className="text-2xl md:text-4xl font-black text-brand-600 leading-tight">
                  Dịch Vụ Thu Mua Thanh Lý Quán Bar TPHCM Trọn Gói Giá Cao, Nhanh Gọn
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-7">
                <p>
                  Kinh doanh quán bar, pub hay lounge thường cần đầu tư đáng kể cho không gian, nội thất và thiết bị chuyên dụng. Khi cần trả mặt bằng, chuyển đổi mô hình hoặc nâng cấp quán, việc thanh lý từng món riêng lẻ có thể mất thời gian, nhất là khi phải sắp xếp người mua, tháo dỡ và vận chuyển. <strong>Đồ Cũ Trung Kiên</strong> tiếp nhận yêu cầu <strong>thu mua thanh lý quán bar tại TPHCM</strong> theo từng hạng mục hoặc trọn gói, tùy tình trạng tài sản và lịch bàn giao.
                </p>
                <p>
                  Tự đăng bán loa, bàn ghế, tủ mát hay máy làm đá có thể khiến mặt bằng chưa được giải phóng đúng kế hoạch. Gửi ảnh hoặc video hiện trạng qua <a href={`https://zalo.me/${hotline.replace(/\./g, '')}`}>Zalo {hotline}</a>, kèm địa chỉ, số lượng và thời hạn cần bàn giao để nhận tư vấn sơ bộ. Mức giá cuối cùng được xác nhận sau khi kiểm tra thiết bị và thống nhất danh sách thu mua.
                </p>

                <div className="not-prose my-6 border-l-4 border-brand-600 bg-brand-50 p-5 md:p-6">
                  <p className="m-0 text-lg font-bold text-gray-900">Cần bàn giao mặt bằng sớm?</p>
                  <p className="mt-2 mb-0 text-gray-700">Gửi hình ảnh/video hiện trạng qua <a className="font-bold text-brand-700" href={`https://zalo.me/${hotline.replace(/\./g, '')}`}>Zalo {hotline}</a>. Thời gian phản hồi và khảo sát sẽ được xác nhận theo khu vực, lịch hẹn và khối lượng công việc.</p>
                </div>

                <figure className="not-prose mt-8 mb-0">
                  <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
                    <Image src={pageImage} alt="Không gian lounge với sofa và bàn khách, minh họa nhóm nội thất có thể khảo sát thanh lý" fill priority sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                  </div>
                </figure>

                <h2 className="!mt-3 !text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">4 Lý Do Nên Chọn Thu Mua Trọn Gói Thay Vì Tự Bán Lẻ</h2>
                <p>
                  Tự bán lẻ có thể phù hợp nếu bạn có nhiều thời gian và muốn xử lý từng món. Nhưng khi cần bàn giao mặt bằng theo lịch, cách làm này thường phát sinh thêm việc:
                </p>
                <ul>
                  <li><strong>Áp lực chi phí mặt bằng:</strong> Việc bán kéo dài có thể ảnh hưởng lịch bàn giao và phát sinh thêm chi phí vận hành. Thu mua theo lô giúp bạn xử lý nhiều hạng mục trong một đợt.</li>
                  <li><strong>Thiết bị cần tháo lắp đúng cách:</strong> Quầy ốp đá, bồn inox âm, loa treo trần và đèn sân khấu cần được kiểm tra trước khi tháo để hạn chế hư hỏng tài sản hoặc mặt bằng.</li>
                  <li><strong>Mất thời gian tiếp khách xem hàng:</strong> Bán từng món đồng nghĩa phải sắp xếp nhiều lượt hẹn, trao đổi giá và vận chuyển riêng.</li>
                  <li><strong>Còn lại các món khó bán:</strong> Người mua lẻ thường chọn món phù hợp với họ; những vật dụng cồng kềnh có thể vẫn cần phương án thu dọn riêng.</li>
                </ul>
                <p>
                  Phạm vi tháo dỡ, vận chuyển, chi phí và tài sản được giữ lại nên được thống nhất trước khi bắt đầu. Nếu quán có thêm thiết bị bếp hoặc đồ inox, bạn có thể tham khảo dịch vụ <Link href="/thanh-ly-nha-hang" className="text-brand-600 font-semibold hover:underline">thanh lý nhà hàng</Link> và <Link href="/thu-mua-do-inox-cu" className="text-brand-600 font-semibold hover:underline">thu mua đồ inox cũ</Link>.
                </p>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Các Hạng Mục Thu Mua, Thanh Lý Quán Bar Trọn Gói</h2>
                <p>
                  Mỗi quán có cách bố trí và danh sách thiết bị riêng. Trung Kiên tiếp nhận đề nghị theo từng nhóm; khả năng thu mua sẽ được xác nhận sau khi xem tình trạng, số lượng và địa điểm.
                </p>

                <section className="!mb-0">
                  <h3 className="!text-xl font-bold text-gray-900">1. Quầy bar và thiết bị khu vực pha chế</h3>
                  <p>Quầy pha chế thường được thiết kế theo mặt bằng cụ thể, vì vậy kích thước, vật liệu và khả năng tháo rời là những thông tin nên gửi trước. Hạng mục có thể gồm quầy inox 304 tích hợp chậu rửa, quầy gỗ công nghiệp, quầy ốp đá, quầy order, kệ treo ly, kệ trưng bày rượu và tủ bảo quản rượu.</p>
                  <p>Thiết bị vận hành tại quầy như máy làm đá viên, máy rửa ly cốc, máy xay công suất lớn hoặc tháp rót bia tươi nên có ảnh nhãn hiệu/model và video hoạt động để thuận tiện trao đổi.</p>
                  <figure className="not-prose mt-6 mb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <Image src="/thanh-ly-quan-bar-tphcm.jpg" alt="Quầy bar và dãy ghế cao trong không gian quán bar" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                    </div>
                  </figure>
                </section>

                <section className="!mt-0 !mb-0">
                  <h3 className="!mt-3 !text-xl font-bold text-gray-900">2. Âm thanh, ánh sáng và thiết bị sân khấu</h3>
                  <p>Với thiết bị âm thanh và ánh sáng, model và tình trạng hoạt động ảnh hưởng lớn đến khả năng định giá. Danh sách có thể bao gồm loa sub, loa full, amply, cục đẩy công suất, mixer cơ hoặc kỹ thuật số, vang số và micro không dây.</p>
                  <p>Các thiết bị sân khấu như moving head, đèn beam, laser, đèn chớp, máy tạo khói, bảng điều khiển DMX, màn hình LED hoặc máy chiếu cần được kiểm tra riêng. Nếu có thể, hãy quay video lúc thiết bị đang hoạt động và chụp rõ thông tin model.</p>
                  <p>Nếu quán có phòng karaoke hoặc hệ thống giải trí riêng, có thể tham khảo thêm dịch vụ <Link href="/thu-mua-quan-karaoke" className="text-brand-600 font-semibold hover:underline">thu mua quán karaoke</Link>.</p>
                  <figure className="not-prose mt-6 mb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <Image src="/thanh-ly-quan-bar-tron-goi.jpg" alt="Quầy bar và khu vực phục vụ trong không gian quán bar" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                    </div>
                  </figure>
                </section>

                <section className="!mt-0 !mb-0">
                  <h3 className="!mt-3 !text-xl font-bold text-gray-900">3. Bàn ghế và nội thất bar, pub, lounge</h3>
                  <p>Trung Kiên có thể xem xét ghế bar chân sắt nâng hạ, ghế gỗ, ghế bọc nệm, bàn cao, bàn decor, sofa da phòng VIP/lounge, bàn trà, tranh trang trí, bảng neon, quầy thu ngân, máy POS và máy in hóa đơn.</p>
                  <p>Với nội thất đóng theo kích thước hoặc sofa theo bộ, nên gửi ảnh toàn cảnh và cận cảnh tình trạng bề mặt. Số lượng và khả năng tháo rời cũng giúp việc dự trù nhân công, phương tiện sát hơn.</p>
                  <figure className="not-prose mt-6 mb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <Image src="/thu-mua-noi-that-quan-bar.jpg" alt="Khu vực lounge với sofa, bàn và quầy bar" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                    </div>
                  </figure>
                </section>

                <section className="!mt-0 !mb-0">
                  <h3 className="!mt-3 !text-xl font-bold text-gray-900">4. Tủ mát, tủ đông và điện lạnh công nghiệp</h3>
                  <p>Danh sách thường gặp gồm tủ mát một đến ba cánh, tủ trưng bày đồ uống, tủ ướp bia/rượu, tủ đông nằm hoặc đứng. Quán cũng có thể gửi thông tin máy lạnh âm trần cassette, máy lạnh tủ đứng và các thiết bị làm mát công suất lớn.</p>
                  <p>Với tủ lạnh, hãy chụp tem model, dung tích và tình trạng vận hành; nếu thiết bị đang mất lạnh hoặc cần sửa chữa, cứ ghi rõ để việc đánh giá minh bạch hơn. Xem thêm trang <Link href="/thu-mua-tu-dong-tu-mat" className="text-brand-600 font-semibold hover:underline">thu mua tủ đông, tủ mát</Link>.</p>
                  <figure className="not-prose mt-6 mb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <Image src="/thu-mua-tu-dong-cu-1.jpg" alt="Tủ đông Sanaky, thiết bị lạnh thường dùng tại cơ sở kinh doanh" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                    </div>
                  </figure>
                </section>

                <h2 className="!mt-3 !text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Bảng Giá Thu Mua Thanh Lý Quán Bar Tham Khảo Tại TP.HCM</h2>
                <p>
                  Khoảng giá dưới đây giúp bạn dự trù ban đầu, không phải cam kết giá cho mọi thiết bị. Giá thực tế còn tùy thương hiệu, đời máy, công suất, tình trạng ngoại quan, khả năng vận hành, số lượng và điều kiện tháo dỡ.
                </p>
                <PriceTable
                  title="Bảng Giá Thu Mua Quán Bar Tham Khảo"
                  subtitle="Gửi hình ảnh và model để nhận mức dự kiến; giá cuối cùng được thống nhất sau khi kiểm tra thực tế."
                  items={priceItems}
                />
                <p><em>Lưu ý: Giá tham khảo có thể thay đổi theo thời điểm và hiện trạng thực tế. Vui lòng gửi hình ảnh cụ thể để được tư vấn mức thu mua phù hợp.</em></p>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">5 Cam Kết Khi Thanh Lý Quán Bar Cùng Đồ Cũ Trung Kiên</h2>
                <ol>
                  <li><strong>Định giá theo tình trạng:</strong> Kiểm tra model, hoạt động, ngoại quan và khả năng thu hồi của từng nhóm thiết bị; giá được chốt trước khi tháo dỡ.</li>
                  <li><strong>Khảo sát theo lịch hẹn:</strong> Có thể sắp xếp khảo sát tại các quận TP.HCM; thời gian đến nơi tùy vị trí, lịch nhân sự và khối lượng cần kiểm tra.</li>
                  <li><strong>Tháo dỡ và vận chuyển theo thỏa thuận:</strong> Phạm vi nhân công, xe và các chi phí liên quan được xác nhận trong báo giá trước khi thực hiện.</li>
                  <li><strong>Linh hoạt khung giờ:</strong> Có thể trao đổi lịch ngoài giờ hoặc buổi tối nếu quy định của mặt bằng cho phép và hai bên thống nhất trước.</li>
                  <li><strong>Thanh toán rõ ràng:</strong> Hình thức và thời điểm thanh toán được xác nhận trước; hoàn tất theo danh sách hàng hóa đã chốt.</li>
                </ol>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Quy Trình 4 Bước Thu Mua Quán Bar</h2>
                <ol>
                  <li><strong>Bước 1 - Gửi hình ảnh qua Zalo:</strong> Quay video toàn cảnh, chụp rõ nhãn thiết bị, số lượng và gửi đến hotline/Zalo {hotline}.</li>
                  <li><strong>Bước 2 - Nhận báo giá sơ bộ:</strong> Trung Kiên xem thông tin và phản hồi những hạng mục có thể thu mua cùng mức dự kiến; giá có thể điều chỉnh sau khi kiểm tra trực tiếp.</li>
                  <li><strong>Bước 3 - Khảo sát và chốt danh sách:</strong> Hai bên kiểm tra tình trạng, thống nhất giá cuối, thời gian làm việc và phạm vi tháo dỡ.</li>
                  <li><strong>Bước 4 - Thu dọn, thanh toán và bàn giao:</strong> Tiến hành theo thỏa thuận, thanh toán theo hình thức đã chốt và kiểm tra lại mặt bằng sau khi hoàn tất.</li>
                </ol>
                <p>
                  Trước ngày thực hiện, bạn nên tách riêng tài sản cá nhân, giấy tờ và hàng hóa cần giữ lại; đồng thời thông báo quy định ra vào cho ban quản lý nếu quán nằm trong tòa nhà hoặc trung tâm thương mại. Cách chuẩn bị này giúp tránh nhầm lẫn và chủ động hơn khi bàn giao.
                </p>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Câu Hỏi Thường Gặp Khi Thanh Lý Quán Bar</h2>
                <FAQAccordion title="Giải Đáp Thắc Mắc Về Dịch Vụ Thanh Lý Quán Bar" faqs={faqs} />

                <section>
                  <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Khu Vực Nhận Thu Mua Quán Bar Tận Nơi Tại TP.HCM</h2>
                  <p>Trung Kiên tiếp nhận yêu cầu tại khu vực trung tâm như Quận 1, Quận 3, Quận 4, Quận 5, Quận 10; các khu vực Bình Thạnh, Phú Nhuận, Gò Vấp, Tân Bình, Tân Phú, Bình Tân, Quận 7 và TP. Thủ Đức. Huyện Bình Chánh, Nhà Bè, Hóc Môn cùng các tỉnh lân cận như Bình Dương, Đồng Nai sẽ được xác nhận lịch theo địa chỉ và khối lượng công việc.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 not-prose">
                    {districts.map((district) => (
                      <div key={district} className="border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700">Thanh lý quán bar {district}</div>
                    ))}
                  </div>
                </section>

                <section className="not-prose mt-10 bg-gray-900 text-white rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold !text-white">Liên Hệ Đồ Cũ Trung Kiên Để Được Tư Vấn</h2>
                  <p className="text-gray-200">Gửi hình ảnh, địa chỉ và thời hạn bàn giao để trao đổi phương án thu mua phù hợp.</p>
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