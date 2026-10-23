import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '../components/SchemaMarkup';
import FAQAccordion from '../components/FAQAccordion';
import PriceTable from '../components/PriceTable';
import SEOHead from '../components/SEOHead';
import PhoneIcon from '../components/PhoneIcon';

const pageUrl = 'https://thumuadocutrungkien.com/thanh-ly-khach-san-tron-goi-tai-quan-1';
const pageDescription = 'Thu mua, thanh lý khách sạn tại Quận 1: giường nệm, tivi, minibar, máy lạnh. Hỗ trợ tháo dỡ tầng cao, lên lịch ban đêm theo quy định. Gọi 0398.771.444.';
const pageImage = '/thanh-ly-noi-that-khach-san-1.jpg';

export default function ThanhLyKhachSanTronGoiTaiQuan1Page() {
  const hotline = '0398.771.444';
  const hotlineClean = hotline.replace(/\./g, '');

  const faqs = [
    {
      question: 'Khách sạn ở tuyến đường cấm xe tải ban ngày tại Quận 1 thì vận chuyển thế nào?',
      answer: 'Trung Kiên bố trí đội xe tải nhỏ trung chuyển linh hoạt vào khung giờ cho phép hoặc tổ chức đội ngũ thợ tháo dỡ, bốc xếp hàng hóa xuyên đêm từ 22h đến 5h sáng để đảm bảo đúng tiến độ bàn giao mặt bằng của chủ khách sạn.'
    },
    {
      question: 'Giường gỗ lớn và nệm lò xo ở tầng cao không vừa thang máy thì hạ xuống ra sao?',
      answer: 'Chúng tôi trang bị hệ thống tời điện chuyên dụng, dây đai chịu lực và thang giàn giáo để hạ nệm, tủ áo và giường gỗ từ ban công tầng cao xuống đất an toàn tuyệt đối, không làm ảnh hưởng hay trầy xước kết cấu tòa nhà.'
    },
    {
      question: 'Chủ khách sạn có phải chịu thêm tiền công tháo dỡ máy lạnh, tivi và bình nóng lạnh không?',
      answer: 'Hoàn toàn không. Trung Kiên chịu 100% chi phí nhân công kỹ thuật thu hồi gas máy lạnh, tháo dỡ đồ điện tử buồng phòng và xe tải vận chuyển. Mức giá báo thu mua là số tiền thực nhận của khách hàng.'
    },
    {
      question: 'Tôi muốn thanh lý từng tầng hoặc vài chục phòng thay vì cả khách sạn có được không?',
      answer: 'Có. Trung Kiên nhận thu mua linh hoạt từ 5–10 phòng đơn lẻ đến trọn gói quy mô lớn 50–100 phòng, chuỗi căn hộ dịch vụ (serviced apartment) hay homestay tại Quận 1.'
    }
  ];

  const priceItems = [
    { name: 'Combo giường gỗ (1m6 - 1m8) và nệm lò xo', unit: 'Bộ', priceRange: '1.200.000 - 4.500.000 đ', note: 'Khung chắc chắn, nệm đàn hồi tốt, không lún xẹp' },
    { name: 'Máy lạnh Inverter 1.0 - 2.0 HP (Daikin, Panasonic)', unit: 'Bộ', priceRange: '1.500.000 - 4.800.000 đ', note: 'Máy làm lạnh êm, đầy đủ remote và ống đồng' },
    { name: 'Tủ minibar Homesun, Primo 40 - 50L chuyên dụng', unit: 'Chiếc', priceRange: '450.000 - 1.300.000 đ', note: 'Lốc chạy êm ái không ồn, khả năng giữ mát nhanh' },
    { name: 'Smart TV 32 - 43 inch treo tường (Sony, Samsung, LG)', unit: 'Chiếc', priceRange: '1.100.000 - 3.800.000 đ', note: 'Màn hình sáng đẹp, không sọc, đầy đủ giá treo' },
    { name: 'Tủ quần áo 2-3 cánh và bàn trang điểm buồng phòng', unit: 'Bộ', priceRange: '700.000 - 3.000.000 đ', note: 'Đánh giá theo chất gỗ tự nhiên hoặc cốt MDF chống ẩm' },
    { name: 'Bình nóng lạnh gián tiếp 20 - 30L (Ariston, Ferroli)', unit: 'Chiếc', priceRange: '500.000 - 1.600.000 đ', note: 'Thanh gia nhiệt tốt, rơ-le chống giật ELCB an toàn' }
  ];

  const breadcrumbs = [
    { name: 'Trang chủ', url: 'https://thumuadocutrungkien.com/' },
    { name: 'Thanh Lý Khách Sạn TPHCM', url: 'https://thumuadocutrungkien.com/thanh-ly-khach-san-tron-goi-tphcm' },
    { name: 'Thanh Lý Khách Sạn Tại Quận 1', url: pageUrl }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800 flex flex-col">
      <SEOHead
        title="Thu Mua Thanh Lý Khách Sạn Quận 1 | Trung Kiên"
        description={pageDescription}
        keywords="thanh lý khách sạn tại Quận 1, thu mua thanh lý khách sạn Q1, thanh lý khách sạn trọn gói Quận 1, thu mua khách sạn mini Q1, thanh lý khách sạn boutique Quận 1, thu mua nội thất khách sạn Q1, thanh lý giường nệm khách sạn, thu mua giường gỗ khách sạn Quận 1, thanh lý nệm lò xo khách sạn, thu mua tủ minibar khách sạn Q1, thanh lý tủ mát minibar, thu mua máy lạnh điều hòa khách sạn, thanh lý tivi buồng phòng, thu mua bình nóng lạnh Ariston Ferroli, thanh lý quầy lễ tân sofa sảnh, thu mua căn hộ dịch vụ Quận 1, thanh lý homestay nhà nghỉ Q1, tháo dỡ khách sạn ban đêm Quận 1, thu mua thiết bị khách sạn cũ TPHCM"
        canonical={pageUrl}
        ogImage={`https://thumuadocutrungkien.com${pageImage}`}
      />
      <Head>
        <BreadcrumbSchema items={breadcrumbs} />
        <ServiceSchema
          name="Dịch Vụ Thu Mua Thanh Lý Khách Sạn Tại Quận 1 Trọn Gói"
          description={pageDescription}
          url={pageUrl}
          image={`https://thumuadocutrungkien.com${pageImage}`}
        />
        <FAQSchema faqs={faqs} />
      </Head>

      <main className="flex-grow pb-1">
        <nav className="bg-white border-b border-gray-100 py-3 shadow-sm" aria-label="Breadcrumb">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-sm text-gray-500 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link href="/thanh-ly-khach-san-tron-goi-tphcm" className="hover:text-brand-600 transition-colors">Thanh Lý Khách Sạn TPHCM</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Khách Sạn Quận 1</span>
          </div>
        </nav>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <article className="lg:col-span-3 min-w-0">
              <header className="mb-4 border-b-2 border-brand-50 pb-1">
                <h1 className="text-2xl md:text-4xl font-black text-brand-600 leading-tight">
                  Dịch Vụ Thu Mua Thanh Lý Khách Sạn Tại Quận 1 Trọn Gói Giá Cao, Nhanh Gọn
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-7">
                <p>
                  Quận 1 là trung tâm du lịch sầm uất bậc nhất TP.HCM với hàng trăm khách sạn boutique, chuỗi căn hộ dịch vụ cao cấp và homestay. Đi kèm với tiềm năng kinh doanh lớn là áp lực chi phí thuê mặt bằng cực kỳ đắt đỏ. Khi cần hoàn trả mặt bằng, nâng cấp cơ sở vật chất hoặc đổi mô hình kinh doanh, việc <strong>thanh lý khách sạn tại Quận 1</strong> với số lượng phòng lớn đòi hỏi tiến độ giải phóng cực nhanh để tránh phát sinh chi phí mặt bằng mỗi ngày. <strong>Đồ Cũ Trung Kiên</strong> chuyên tiếp nhận <strong>thu mua thanh lý khách sạn tại Quận 1 trọn gói</strong>: định giá cao hơn thị trường 10% – 25%, khảo sát tận nơi sau 15–30 phút và hỗ trợ tháo dỡ ban đêm chuyên nghiệp.
                </p>

                <div className="not-prose my-6 border-l-4 border-brand-600 bg-brand-50 p-5 md:p-6 rounded-r-xl shadow-sm">
                  <p className="m-0 text-lg font-bold text-gray-900">Cần thẩm định và giải tỏa mặt bằng khách sạn Quận 1 gấp?</p>
                  <p className="mt-2 mb-4 text-gray-700">Gửi ngay video quay phòng mẫu, số lượng phòng và địa chỉ qua Zalo để nhận định giá dự kiến sau 5 phút!</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={`tel:${hotlineClean}`} className="inline-flex items-center px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg transition-colors">
                      <PhoneIcon className="mr-2 h-4 w-4" /> Gọi Ngay: {hotline}
                    </a>
                    <a href={`https://zalo.me/${hotlineClean}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
                      💬 Nhận Báo Giá Qua Zalo
                    </a>
                  </div>
                </div>

                <figure className="not-prose mt-8 mb-0">
                  <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-md">
                    <Image 
                      src={pageImage} 
                      alt="Dịch vụ thu mua thanh lý nội thất buồng phòng khách sạn trọn gói tại Quận 1" 
                      fill 
                      priority 
                      sizes="(max-width: 768px) 100vw, 75vw" 
                      className="object-cover" 
                    />
                  </div>
                </figure>

                <h2 className="!mt-8 !text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">
                  3 Khó Khăn Lớn Nhất Khi Thanh Lý Khách Sạn Tại Quận 1 & Giải Pháp
                </h2>
                <p>Địa bàn trung tâm Quận 1 có những đặc thù riêng biệt mà các đơn vị thu dọn thiếu kinh nghiệm rất khó giải quyết:</p>
                <ol className="space-y-3">
                  <li><strong>Tuyến đường cấm xe tải ban ngày:</strong> Các tuyến phố khách sạn trung tâm như Bùi Thị Xuân, Lê Thánh Tôn, Bùi Viện cấm tải ban ngày. Trung Kiên có giải pháp điều xe trung chuyển hoặc tổ chức đội thợ bốc hàng xuyên đêm từ 22h đến 5h sáng hôm sau để kịp tiến độ trả nhà.</li>
                  <li><strong>Đồ cồng kềnh khó đưa xuống từ tầng cao:</strong> Giường gỗ nguyên khối, nệm lò xo dày 25–30cm, tủ áo lớn không vừa thang máy. Chúng tôi trang bị hệ thống tời điện, dây đai chịu lực chuyên dụng hạ đồ qua ban công tầng cao, tuyệt đối không gây trầy xước cầu thang hay vách kính tòa nhà.</li>
                  <li><strong>Tháo dỡ thiết bị điện máy phức tạp:</strong> Hàng chục máy lạnh Inverter, tivi treo tường và bình nước nóng gián tiếp đòi hỏi thợ điện lạnh có đồ nghề thu hồi gas an toàn. Đội ngũ kỹ thuật của Trung Kiên tự túc hoàn toàn khâu tháo gỡ, không làm hỏng tường nhà.</li>
                </ol>

                <h2 className="!mt-8 !text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">
                  Các Hạng Mục Thu Mua, Thanh Lý Khách Sạn Trọn Gói Tại Quận 1
                </h2>
                <p>Trung Kiên nhận thu gom toàn bộ không kén chọn số lượng phòng từ khách sạn 2–4 sao, homestay đến chuỗi căn hộ dịch vụ:</p>

                <section className="!mb-6">
                  <h3 className="!text-xl font-bold text-gray-900">1. Thu mua nội thất buồng phòng khách sạn</h3>
                  <p>Bao gồm giường ngủ gỗ tự nhiên hoặc cốt MDF chống ẩm An Cường (1m2, 1m6, 1m8, King size), táp đầu giường, nệm lò xo túi chống rung, nệm cao su non dày 20–30cm (Dunlopillo, Liên Á, Kim Cương), tủ quần áo 2–4 cánh, bàn làm việc, gương soi toàn thân, rèm cửa 2 lớp và chăn ga gối đệm số lượng lớn.</p>
                  <figure className="not-prose mt-4 mb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <Image 
                        src="/thanh-ly-noi-that-khach-san-2.jpeg" 
                        alt="Thu mua giường nệm lò xo tủ áo phòng khách sạn Quận 1" 
                        fill 
                        sizes="(max-width: 768px) 100vw, 75vw" 
                        className="object-cover" 
                      />
                    </div>
                  </figure>
                </section>

                <section className="!mb-6">
                  <h3 className="!text-xl font-bold text-gray-900">2. Thu mua điện máy và điện lạnh buồng phòng</h3>
                  <p>Thu mua máy lạnh treo tường Inverter, hệ thống điều hòa âm trần cassette (Daikin, Panasonic, Mitsubishi 1.0HP – 2.5HP), tủ minibar không ồn (Homesun, Primo 40L – 50L), Smart TV 32 – 50 inch kèm giá treo, bình nước nóng gián tiếp Ariston/Ferroli (15L, 20L, 30L), máy sấy tóc gắn tường và ấm siêu tốc inox.</p>
                  <figure className="not-prose mt-4 mb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <Image 
                        src="/thanh-ly-noi-that-khach-san-3.jpeg" 
                        alt="Thanh lý máy lạnh minibar tivi buồng phòng khách sạn Quận 1" 
                        fill 
                        sizes="(max-width: 768px) 100vw, 75vw" 
                        className="object-cover" 
                      />
                    </div>
                  </figure>
                </section>

                <section className="!mb-6">
                  <h3 className="!text-xl font-bold text-gray-900">3. Thu mua nội thất tiền sảnh lễ tân và an ninh</h3>
                  <p>Thu mua quầy lễ tân mặt đá cao cấp, sofa da sảnh chờ, ghế đơn thư giãn, bàn trà tiếp khách, hệ thống khóa từ cửa phòng thông minh (Adel, Hune), đầu ghi camera giám sát và loa âm trần sảnh.</p>
                </section>

                <section className="!mb-6">
                  <h3 className="!text-xl font-bold text-gray-900">4. Thu mua thiết bị giặt sấy công nghiệp và khu vực bếp ăn</h3>
                  <p>Thu mua hệ thống máy giặt - máy sấy công nghiệp từ 15kg đến 35kg chuyên giặt đồ vải khách sạn. Nếu cơ sở có phục vụ ăn sáng, chúng tôi nhận gom nồi hâm buffet inox, bình đựng nước trái cây, bàn ghế ăn nhà hàng và tủ đông/mát bảo quản thực phẩm. Xem thêm dịch vụ <Link href="/thanh-ly-nha-hang" className="text-brand-600 font-semibold hover:underline">thanh lý nhà hàng</Link> của Trung Kiên.</p>
                  <figure className="not-prose mt-4 mb-0">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                      <Image 
                        src="/thanh-ly-noi-that-khach-san-4.jpg" 
                        alt="Thu mua thiết bị sảnh và khu giặt sấy khách sạn Quận 1" 
                        fill 
                        sizes="(max-width: 768px) 100vw, 75vw" 
                        className="object-cover" 
                      />
                    </div>
                  </figure>
                </section>

                <h2 className="!mt-8 !text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">
                  Bảng Giá Thu Mua Thanh Lý Khách Sạn Tại Quận 1 Tham Khảo
                </h2>
                <p>Khoảng giá dưới đây giúp bạn ước tính giá trị thu hồi vốn dự kiến. Mức giá thực tế phụ thuộc vào thương hiệu, đời máy móc, độ đàn hồi của nệm và số lượng phòng thanh lý:</p>
                <PriceTable
                  title="Bảng Giá Thanh Lý Nội Thất & Thiết Bị Khách Sạn Quận 1"
                  subtitle="Áp dụng ưu đãi định giá cao hơn 10% - 20% cho các dự án thanh lý toàn bộ tòa nhà từ 10 phòng trở lên."
                  items={priceItems}
                />

                <h2 className="!mt-8 !text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">
                  5 Cam Kết Vàng Khi Thanh Lý Khách Sạn Cùng Đồ Cũ Trung Kiên
                </h2>
                <ol className="space-y-2">
                  <li><strong>Khảo sát siêu tốc sau 15–30 phút:</strong> Nhân viên định giá có mặt tận nơi kiểm đếm số lượng và lên phương án vận chuyển ngay trong ngày.</li>
                  <li><strong>Thẩm định chuẩn xác - Không ép giá:</strong> Đánh giá đúng giá trị nội thất cao cấp và linh kiện máy móc, cam kết giá thu mua tốt nhất thị trường.</li>
                  <li><strong>Bao trọn gói khâu tháo dỡ & vận chuyển:</strong> Trung Kiên miễn phí 100% công thợ kỹ thuật, thang tời và xe tải chuyển dọn.</li>
                  <li><strong>Hỗ trợ bốc dỡ ban đêm (22h - 5h):</strong> Thi công trật tự, chuẩn xác, giải quyết dứt điểm vấn đề đường cấm xe tải ban ngày tại Quận 1.</li>
                  <li><strong>Thanh toán 100% liền tay:</strong> Giải ngân tiền mặt hoặc chuyển khoản dứt điểm một lần trước khi xe bốc chuyến hàng đầu tiên đi.</li>
                </ol>

                <h2 className="!mt-8 !text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">
                  Quy Trình 4 Bước Thu Mua Khách Sạn Nhanh Gọn Tại Quận 1
                </h2>
                <ol className="space-y-2">
                  <li><strong>Bước 1 - Tiếp nhận thông tin:</strong> Gửi video quay phòng mẫu, số lượng phòng và địa chỉ khách sạn qua Zalo {hotline}.</li>
                  <li><strong>Bước 2 - Khảo sát thực tế:</strong> Kỹ thuật viên đến trực tiếp kiểm đếm số lượng, phân loại độ mới và báo giá trọn gói.</li>
                  <li><strong>Bước 3 - Thống nhất lịch thi công:</strong> Chốt thời gian tháo dỡ (ngày hoặc đêm) phù hợp với tiến độ trả mặt bằng của bạn.</li>
                  <li><strong>Bước 4 - Bốc hàng, thanh toán & Thu dọn:</strong> Tiến hành tháo dỡ, thanh toán đủ tiền và quét dọn mặt bằng sạch sẽ trước khi bàn giao.</li>
                </ol>

                <h2 className="!mt-8 !text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">
                  Câu Hỏi Thường Gặp Khi Thanh Lý Khách Sạn Tại Quận 1
                </h2>
                <FAQAccordion title="Giải Đáp Thắc Mắc Về Thanh Lý Khách Sạn Quận 1" faqs={faqs} />

                <section>
                  <h2 className="!mt-8 !text-2xl font-bold text-gray-900 border-l-4 border-brand-600 pl-4">
                    Các Tuyến Đường Khách Sạn Trung Kiên Thường Xuyên Phục Vụ Tại Quận 1
                  </h2>
                  <p>Chúng tôi có đầy đủ kinh nghiệm điều phối xe tải và nhân công tại các trục đường khách sạn trọng điểm Quận 1: Bùi Thị Xuân, Lê Thánh Tôn, Bùi Viện, Phạm Ngũ Lão, Đề Thám, Thủ Khoa Huân, Lý Tự Trọng, Hai Bà Trưng, Trần Quang Khải, Đinh Tiên Hoàng, Tôn Đức Thắng và Hàm Nghi.</p>
                </section>

                <section className="not-prose mt-10 bg-gray-900 text-white rounded-2xl p-6 md:p-8 shadow-xl">
                  <h2 className="text-2xl font-bold !text-white">Liên Hệ Đồ Cũ Trung Kiên</h2>
                  <p className="text-gray-300 mt-2">Gửi số lượng phòng, video hiện trạng, địa chỉ và thời hạn bàn giao mặt bằng để nhận báo giá ưu đãi nhất hôm nay.</p>
                  <p className="mt-4 mb-0"><strong>Hotline / Zalo tư vấn 24/7:</strong> <a className="text-green-400 font-bold hover:underline" href={`tel:${hotlineClean}`}>{hotline}</a></p>
                  <p className="mt-2"><strong>Địa chỉ kho bãi chính:</strong> 271 Bình Long, Phường Bình Hưng Hòa, Quận Bình Tân, TP.HCM</p>
                  <p className="mb-0"><strong>Website:</strong> <a className="underline text-brand-300 hover:text-white" href="https://thumuadocutrungkien.com/">thumuadocutrungkien.com</a></p>
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