import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '../components/SchemaMarkup';
import FAQAccordion from '../components/FAQAccordion';
import PriceTable from '../components/PriceTable';
import SEOHead from '../components/SEOHead';

const pageUrl = 'https://thumuadocutrungkien.com/thanh-ly-khach-san-tron-goi-tphcm';
const pageDescription = 'Thu mua thanh lý khách sạn TPHCM trọn gói: giường nệm, tivi, minibar, máy lạnh. Khảo sát tận nơi, tháo dỡ và vận chuyển theo thỏa thuận. Hotline 0398.771.444.';
const pageImage = '/thanh-ly-noi-that-khach-san-1.jpg';

export default function ThanhLyKhachSanTronGoiTphcmPage() {
  const hotline = '0398.771.444';
  const faqs = [
    {
      question: 'Khách sạn ở trung tâm Quận 1 đường cấm tải thì vận chuyển thế nào?',
      answer: 'Bạn gửi địa chỉ, khung giờ được phép vận chuyển và hình ảnh lối ra vào để Trung Kiên kiểm tra phương án. Có thể trao đổi xe phù hợp hoặc lịch ngoài giờ nếu điều kiện giao thông và quy định của mặt bằng cho phép; lịch cụ thể được xác nhận trước khi thực hiện.'
    },
    {
      question: 'Nệm khách sạn bị ố nhẹ hoặc đã sử dụng nhiều năm có thu mua không?',
      answer: 'Bạn có thể gửi hình ảnh và thông tin số lượng để được xem xét. Khả năng tiếp nhận và giá phụ thuộc độ sạch, độ đàn hồi, tình trạng bề mặt, thương hiệu và phương án vận chuyển.'
    },
    {
      question: 'Chủ khách sạn có phải trả tiền công tháo dỡ điều hòa và bình nóng lạnh không?',
      answer: 'Chi phí tháo dỡ kỹ thuật và vận chuyển được xác định theo danh sách tài sản, độ khó, tầng cao và điều kiện thi công. Các khoản liên quan sẽ được báo và thống nhất trước khi bắt đầu để bạn nắm rõ số tiền thực nhận.'
    }
  ];

  const priceItems = [
    { name: 'Giường và táp đầu giường gỗ công nghiệp/tự nhiên', unit: 'Bộ', priceRange: '800.000 - 3.500.000 đ', note: 'Tùy kích thước, vật liệu, độ chắc chắn và tình trạng' },
    { name: 'Nệm lò xo hoặc nệm cao su dày 20 - 30 cm', unit: 'Tấm', priceRange: '400.000 - 2.200.000 đ', note: 'Xem xét độ sạch, độ đàn hồi và tình trạng lò xo/cốt nệm' },
    { name: 'Tivi 32 - 43 inch và máy lạnh 1 - 1.5 HP', unit: 'Combo', priceRange: '1.200.000 - 4.500.000 đ', note: 'Tùy thương hiệu, khả năng hoạt động, remote và phụ kiện' },
    { name: 'Tủ lạnh minibar Homesun, Funiki 40 - 60L', unit: 'Chiếc', priceRange: '400.000 - 1.200.000 đ', note: 'Kiểm tra khả năng làm mát và tình trạng máy nén' },
    { name: 'Bình nóng lạnh Ariston, Ferroli 15 - 30L', unit: 'Chiếc', priceRange: '450.000 - 1.500.000 đ', note: 'Cần kiểm tra khả năng làm nóng và phụ kiện đi kèm' },
    { name: 'Tủ áo, bàn làm việc và ghế buồng phòng', unit: 'Bộ', priceRange: '600.000 - 2.800.000 đ', note: 'Định giá theo chất liệu, kích thước và tình trạng' }
  ];

  const breadcrumbs = [
    { name: 'Trang chủ', url: 'https://thumuadocutrungkien.com/' },
    { name: 'Thu Mua Đồ Cũ', url: 'https://thumuadocutrungkien.com/' },
    { name: 'Thanh Lý Khách Sạn TPHCM', url: pageUrl }
  ];

  const districts = ['Quận 1', 'Quận 3', 'Quận 5', 'Quận 10', 'Tân Bình', 'Phú Nhuận', 'Bình Thạnh', 'Gò Vấp', 'Quận 7', 'TP. Thủ Đức', 'Bình Chánh', 'Hóc Môn'];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800 flex flex-col">
      <SEOHead
        title="Thu Mua Thanh Lý Khách Sạn TPHCM Giá Cao | Trung Kiên"
        description={pageDescription}
        keywords="thu mua thanh lý khách sạn TPHCM, thanh lý khách sạn trọn gói TPHCM, thu mua nội thất khách sạn, thanh lý giường khách sạn, thu mua nệm khách sạn, thanh lý tủ quần áo buồng phòng, thu mua minibar khách sạn, thanh lý tủ mát minibar, thu mua tivi khách sạn, thanh lý máy lạnh khách sạn, thu mua bình nóng lạnh, thanh lý thiết bị khách sạn, thanh lý nhà nghỉ, thu mua nội thất homestay, thanh lý căn hộ dịch vụ, thu mua giường nệm khách sạn số lượng lớn"
        canonical="/thanh-ly-khach-san-tron-goi-tphcm"
        ogImage={pageImage}
      />
      <Head>
        <BreadcrumbSchema items={breadcrumbs} />
        <ServiceSchema
          name="Thu Mua Thanh Lý Khách Sạn TPHCM Trọn Gói"
          description={pageDescription}
          url={pageUrl}
          image={`https://thumuadocutrungkien.com${pageImage}`}
        />
        <FAQSchema faqs={faqs} />
      </Head>

      <main className="flex-grow -mb-4">
        <nav className="bg-white border-b border-gray-100 py-3 shadow-sm" aria-label="Breadcrumb">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Khách Sạn TPHCM</span>
          </div>
        </nav>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <article className="lg:col-span-3 min-w-0">
             <header className="mb-4 border-b-2 border-brand-50 pb-1">
                <h1 className="text-2xl md:text-4xl font-black text-brand-600 leading-tight">
                  Dịch Vụ Thu Mua Thanh Lý Khách Sạn TPHCM Trọn Gói Giá Cao, Nhanh Gọn
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-7">
                <p>
                  Khách sạn, nhà nghỉ, homestay hay căn hộ dịch vụ đều cần duy trì cơ sở vật chất phù hợp với trải nghiệm khách lưu trú. Khi chuyển đổi mục đích sử dụng, trả mặt bằng hoặc nâng cấp phòng, việc xử lý đồng thời nhiều giường, nệm, tủ áo và thiết bị điện máy có thể trở thành một đầu việc lớn. <strong>Đồ Cũ Trung Kiên</strong> tiếp nhận yêu cầu <strong>thu mua thanh lý khách sạn tại TPHCM</strong> theo từng nhóm tài sản hoặc trọn gói theo danh sách hai bên thống nhất.
                </p>
                <p>
                  Tự rao bán từng món thường đồng nghĩa với nhiều lượt hẹn, nhiều phương án vận chuyển và thời gian chờ khác nhau. Để được tư vấn ban đầu, hãy gửi ảnh phòng mẫu, số lượng phòng, danh sách thiết bị và địa chỉ qua <a href={`https://zalo.me/${hotline.replace(/\./g, '')}`}>Zalo {hotline}</a>. Giá và tiến độ thực hiện được xác nhận sau khi kiểm tra hiện trạng, điều kiện vận chuyển và quy định của tòa nhà.
                </p>

                <div className="not-prose my-6 border-l-4 border-brand-600 bg-brand-50 p-5 md:p-6">
                  <p className="m-0 text-lg font-bold text-gray-900">Cần dự trù phương án bàn giao khách sạn?</p>
                  <p className="mt-2 mb-0 text-gray-700">Gửi video phòng mẫu, tổng số phòng và thời hạn bàn giao qua <a className="font-bold text-brand-700" href={`https://zalo.me/${hotline.replace(/\./g, '')}`}>Zalo {hotline}</a> để được trao đổi các bước tiếp theo.</p>
                </div>

                <figure className="not-prose mt-8 mb-0">
                  <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
                    <Image src={pageImage} alt="Phòng nghỉ có giường tầng, giường đôi và nội thất cần kiểm kê khi thanh lý khách sạn" fill priority sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                  </div>
                </figure>

                <h2 className="!mt-3 !text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">4 Khó Khăn Khi Tự Thanh Lý Khách Sạn Và Cách Xử Lý</h2>
                <p>Thanh lý cơ sở lưu trú thường liên quan đến nhiều phòng, nhiều loại tài sản và lịch bàn giao cụ thể. Một số điểm chủ đầu tư nên tính trước:</p>
                <ol>
                  <li><strong>Hàng hóa cồng kềnh, nằm ở nhiều tầng:</strong> Giường, nệm, tủ áo và sofa cần được kiểm kê theo phòng, đo lối đi và thống nhất phương án di chuyển để hạn chế va quệt khu vực chung.</li>
                  <li><strong>Thiết bị cần tháo lắp kỹ thuật:</strong> Máy lạnh, tivi treo tường và bình nóng lạnh nên được xử lý bởi người có chuyên môn. Trước khi làm cần xác định rõ thiết bị nào được tháo, vị trí cần bảo vệ và ai phụ trách từng phần việc.</li>
                  <li><strong>Nội thất đồng bộ khó bán rời:</strong> Giường, táp đầu giường, tủ và bàn làm việc thường theo bộ hoặc theo thiết kế của dự án. Lập danh sách theo từng phòng giúp bên thu mua đánh giá cả lô chính xác hơn.</li>
                  <li><strong>Áp lực tiến độ cải tạo hoặc bàn giao:</strong> Thỏa thuận lịch bắt đầu, phạm vi công việc và thời điểm hoàn tất bằng văn bản giúp các bên chủ động với kế hoạch của chủ đầu tư và ban quản lý.</li>
                </ol>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Các Hạng Mục Thu Mua, Thanh Lý Khách Sạn Trọn Gói</h2>
                <p>Trung Kiên tiếp nhận đề nghị từ khách sạn mini, nhà nghỉ, homestay đến căn hộ dịch vụ. Danh sách cụ thể được xác nhận theo số lượng, tình trạng và khả năng tháo dỡ, vận chuyển.</p>

                <section className="!mb-0">
                  <h3 className="!text-xl font-bold text-gray-900">1. Nội thất buồng phòng khách sạn</h3>
                  <p>Nhóm nội thất phòng có thể gồm giường gỗ công nghiệp hoặc gỗ tự nhiên, giường bọc nệm, táp đầu giường, tủ áo âm tường hoặc tủ rời, bàn làm việc, bàn trang điểm, ghế thư giãn và gương soi. Có thể gửi riêng danh sách nệm lò xo, cao su hoặc bông ép kèm thương hiệu, kích thước và tình trạng vệ sinh.</p>
                  <p>Chăn ga, rèm cửa và đồ vải được xem xét theo số lượng, chất liệu và tình trạng sử dụng. Ảnh toàn cảnh phòng cùng ảnh cận cảnh nội thất giúp phân loại tài sản nhanh hơn.</p>
                  <figure className="not-prose mt-6 mb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <Image src="/thanh-ly-noi-that-khach-san-2.jpeg" alt="Phòng khách sạn có giường, tivi, tủ quần áo và bàn ghế" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                    </div>
                  </figure>
                </section>

                <section className="!mt-0 !mb-0">
                  <h3 className="!mt-3 !text-xl font-bold text-gray-900">2. Điện lạnh và đồ điện gia dụng buồng phòng</h3>
                  <p>Danh mục thường có máy lạnh treo tường, điều hòa multi hoặc âm trần, tủ minibar, tivi LED/Smart TV, bình nóng lạnh, ấm đun nước và máy sấy tóc. Thông tin model, công suất, năm sử dụng và tình trạng vận hành là căn cứ tham khảo khi định giá.</p>
                  <p>Với tivi hoặc máy lạnh đã tháo khỏi phòng, nên giữ lại remote, giá treo và phụ kiện đi kèm nếu còn. Riêng thiết bị điện lạnh đang hoạt động, video kiểm tra thực tế sẽ hữu ích hơn ảnh đơn lẻ.</p>
                  <figure className="not-prose mt-6 mb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <Image src="/thanh-ly-noi-that-khach-san-3.jpeg" alt="Phòng khách sạn có máy lạnh, tivi và hai giường nghỉ" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                    </div>
                  </figure>
                </section>

                <section className="!mt-0 !mb-0">
                  <h3 className="!mt-3 !text-xl font-bold text-gray-900">3. Quầy lễ tân, sảnh, hành lang và an ninh</h3>
                  <p>Khu vực công cộng có thể bao gồm quầy lễ tân, sofa sảnh, ghế bành, bàn trà, tủ kệ, đèn trang trí, tranh treo tường và thiết bị chiếu sáng. Hệ thống khóa thẻ từ, camera, đầu ghi và thiết bị mạng cần có thông tin số lượng, tình trạng và khả năng bàn giao.</p>
                  <p>Với thiết bị đang kết nối hệ thống của khách sạn, chủ đầu tư nên sao lưu dữ liệu cần thiết, thu hồi tài khoản quản trị và xác nhận việc ngắt kết nối trước khi tháo dỡ.</p>
                </section>

                <section className="!mt-0 !mb-0">
                  <h3 className="!mt-3 !text-xl font-bold text-gray-900">4. Giặt ủi và thiết bị nhà hàng khách sạn</h3>
                  <p>Nếu cơ sở có khu giặt là, có thể gửi danh sách máy giặt, máy sấy công nghiệp, thiết bị là phẳng và phụ kiện. Khách sạn có nhà hàng hoặc khu buffet có thể đề nghị khảo sát thêm bàn ghế ăn, nồi hâm buffet, bình giữ nhiệt, bếp và thiết bị inox.</p>
                  <p>Với hạng mục nhà hàng, xem thêm dịch vụ <Link href="/thanh-ly-nha-hang" className="text-brand-600 font-semibold hover:underline">thanh lý nhà hàng</Link>; nếu cần xử lý đồ điện lạnh riêng lẻ, tham khảo <Link href="/thu-mua-tu-dong-tu-mat" className="text-brand-600 font-semibold hover:underline">thu mua tủ đông, tủ mát</Link>.</p>
                  <figure className="not-prose mt-6 mb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <Image src="/thanh-ly-noi-that-khach-san-4.jpg" alt="Phòng khách sạn cao cấp với giường, ghế nghỉ và nội thất gỗ" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                    </div>
                  </figure>
                </section>

                <h2 className="!mt-3 !text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Bảng Giá Thu Mua Thanh Lý Đồ Khách Sạn Tham Khảo Tại TP.HCM</h2>
                <p>Khoảng giá dưới đây giúp dự trù ban đầu. Giá thực tế phụ thuộc thương hiệu, độ mới, tình trạng vận hành, số lượng phòng và điều kiện tháo dỡ. Lô hàng số lượng lớn sẽ được xem xét theo danh sách thực tế, không áp dụng một mức cố định cho mọi dự án.</p>
                <PriceTable
                  title="Bảng Giá Thanh Lý Nội Thất Khách Sạn Tham Khảo"
                  subtitle="Gửi ảnh, số lượng và thông tin model để nhận tư vấn sơ bộ; giá cuối cùng được thống nhất sau khi kiểm tra."
                  items={priceItems}
                />
                <p><em>Lưu ý: Bảng giá chỉ mang tính tham khảo, có thể thay đổi theo thời điểm và tình trạng tài sản.</em></p>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">5 Lý Do Khách Hàng Chọn Đồ Cũ Trung Kiên</h2>
                <ol>
                  <li><strong>Tiếp nhận danh sách theo lô:</strong> Có thể kiểm kê theo phòng, tầng hoặc nhóm thiết bị để thuận tiện đối chiếu.</li>
                  <li><strong>Khảo sát trước khi chốt:</strong> Tình trạng và số lượng được kiểm tra; giá được thống nhất trước khi triển khai.</li>
                  <li><strong>Lên phương án vận chuyển phù hợp:</strong> Tầng cao, lối đi, thang máy, giờ cấm tải và quy định của tòa nhà được trao đổi từ đầu.</li>
                  <li><strong>Rõ phạm vi tháo dỡ và chi phí:</strong> Nhân công, dụng cụ, vận chuyển và phần việc của mỗi bên được ghi nhận trước khi làm.</li>
                  <li><strong>Chủ động lịch bàn giao:</strong> Tiến độ được sắp xếp theo khối lượng, nhân lực thực tế và thời hạn của chủ đầu tư.</li>
                </ol>
                <p>Nếu cần sử dụng xe cẩu, thang tời hoặc phương tiện chuyên dụng cho tầng cao, phương án sẽ được xác nhận sau khi khảo sát mặt bằng, tải trọng và quy định thi công của tòa nhà.</p>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Quy Trình 4 Bước Thu Mua Khách Sạn</h2>
                <ol>
                  <li><strong>Bước 1 - Gửi thông tin:</strong> Gửi video phòng mẫu, số lượng phòng, danh sách tài sản, địa chỉ và thời hạn dự kiến qua Zalo {hotline}.</li>
                  <li><strong>Bước 2 - Khảo sát và kiểm kê:</strong> Hai bên hẹn kiểm tra hiện trạng, phân nhóm tài sản và ghi nhận điều kiện tiếp cận, tháo dỡ, vận chuyển.</li>
                  <li><strong>Bước 3 - Nhận báo giá và thống nhất:</strong> Chốt danh sách, giá thu mua, lịch làm việc, phạm vi công việc và các chi phí liên quan trước khi triển khai.</li>
                  <li><strong>Bước 4 - Tháo dỡ, thanh toán và bàn giao:</strong> Thực hiện theo thỏa thuận, đối chiếu tài sản đã thu mua và hoàn tất bàn giao mặt bằng.</li>
                </ol>

                <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Câu Hỏi Thường Gặp Khi Thanh Lý Khách Sạn</h2>
                <FAQAccordion title="Giải Đáp Thắc Mắc Về Thanh Lý Khách Sạn" faqs={faqs} />

                <section>
                  <h2 className="!text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">Khu Vực Nhận Thu Mua Khách Sạn Tận Nơi Tại TP.HCM</h2>
                  <p>Trung Kiên tiếp nhận yêu cầu tại khu vực trung tâm, quanh sân bay, khu văn phòng và các khu đô thị mới. Những địa điểm có giờ cấm tải, giới hạn thang máy hoặc yêu cầu đăng ký thi công cần được thông báo khi đặt lịch để hai bên chuẩn bị phương án phù hợp.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 not-prose">
                    {districts.map((district) => (
                      <div key={district} className="border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700">Thu mua thanh lý khách sạn {district}</div>
                    ))}
                  </div>
                  <p className="mt-4">Các tỉnh lân cận như Bình Dương, Đồng Nai, Long An và Bà Rịa - Vũng Tàu được tiếp nhận theo lịch và quy mô tài sản.</p>
                </section>

                <section className="not-prose mt-10 bg-gray-900 text-white rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold !text-white">Trao Đổi Phương Án Thanh Lý Khách Sạn</h2>
                  <p className="text-gray-200">Gửi số lượng phòng, hình ảnh hiện trạng và địa chỉ để được tư vấn bước khảo sát tiếp theo.</p>
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