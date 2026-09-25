import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '../components/SchemaMarkup';
import FAQAccordion from '../components/FAQAccordion';
import PriceTable from '../components/PriceTable';
import SEOHead from '../components/SEOHead';

export default function ThuMuaQuanKaraokePage() {
  const hotline = "0398.771.444";

  const breadcrumbs = [
    { name: 'Trang chủ', url: 'https://thumuadocutrungkien.com/' },
    {
      name: 'Thu Mua Quán Karaoke',
      url: 'https://thumuadocutrungkien.com/thu-mua-quan-karaoke'
    }
  ];

  const faqs = [
    {
      question: "Trung Kiên thu mua những gì trong quán karaoke?",
      answer:
        "Chúng tôi thu mua đa dạng tài sản và nội thất trong quán karaoke như bàn ghế sofa, bàn karaoke, quầy bar, tủ kệ, màn hình, tivi, loa karaoke, amply, cục đẩy công suất, mixer, micro, đèn sân khấu, đèn laser, máy lạnh, tủ mát, tủ đông và nhiều thiết bị khác."
    },
    {
      question: "Có thu mua trọn gói toàn bộ quán karaoke không?",
      answer:
        "Có. Đồ Cũ Trung Kiên nhận thu mua trọn gói quán karaoke theo nhu cầu của chủ quán, từ nội thất, thiết bị âm thanh, ánh sáng đến các vật dụng và thiết bị còn giá trị sử dụng. Chúng tôi hỗ trợ khảo sát, báo giá, tháo dỡ và vận chuyển tận nơi."
    },
    {
      question: "Trung Kiên có nhận thanh lý quán karaoke tại TPHCM không?",
      answer:
        "Có. Chúng tôi nhận khảo sát và thu mua quán karaoke tại TPHCM, hỗ trợ nhiều khu vực và quận huyện. Khách hàng có thể gửi hình ảnh hoặc liên hệ hotline để được tư vấn và sắp xếp khảo sát trực tiếp."
    },
    {
      question: "Quán karaoke cần thanh lý gấp có hỗ trợ tháo dỡ không?",
      answer:
        "Có. Đội ngũ Trung Kiên hỗ trợ tháo dỡ, phân loại, bốc xếp và vận chuyển tài sản sau khi hai bên thống nhất giá thu mua. Quy trình được thực hiện nhanh chóng, hạn chế ảnh hưởng đến mặt bằng."
    }
  ];

  const priceItems = [
    {
      name: "Thanh lý loa karaoke, loa sân khấu và loa sub",
      unit: "Bộ",
      priceRange: "Liên hệ khảo sát",
      note: "Tùy thương hiệu, công suất và tình trạng"
    },
    {
      name: "Thanh lý amply, cục đẩy công suất, mixer karaoke",
      unit: "Bộ",
      priceRange: "Liên hệ khảo sát",
      note: "Định giá theo thương hiệu và khả năng hoạt động"
    },
    {
      name: "Thanh lý micro karaoke không dây, có dây",
      unit: "Bộ",
      priceRange: "Liên hệ khảo sát",
      note: "Micro đơn, đôi và hệ thống micro chuyên nghiệp"
    },
    {
      name: "Thanh lý bàn ghế sofa, bàn karaoke",
      unit: "Bộ",
      priceRange: "Liên hệ khảo sát",
      note: "Sofa da, sofa nỉ, bàn kính, bàn gỗ..."
    },
    {
      name: "Thanh lý màn hình, tivi và thiết bị trình chiếu",
      unit: "Chiếc",
      priceRange: "Liên hệ khảo sát",
      note: "Định giá theo kích thước, thương hiệu và độ mới"
    },
    {
      name: "Thanh lý đèn sân khấu, đèn laser, đèn LED",
      unit: "Bộ",
      priceRange: "Liên hệ khảo sát",
      note: "Đèn phòng karaoke và hệ thống chiếu sáng"
    },
    {
      name: "Thu mua quầy bar, tủ kệ và nội thất quán karaoke",
      unit: "Bộ",
      priceRange: "Liên hệ khảo sát",
      note: "Thu mua riêng lẻ hoặc theo gói toàn bộ"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800 flex flex-col">
      <SEOHead
        title="Thu Mua Quán Karaoke Giá Cao TPHCM | Thu Mua Trọn Gói"
        description="Thu mua quán karaoke trọn gói giá cao tại TPHCM. Thu mua nội thất, bàn ghế, loa, amply, màn hình, đèn sân khấu và thiết bị karaoke. Khảo sát tận nơi, tháo dỡ và vận chuyển nhanh."
        keywords="thu mua quán karaoke, thanh lý quán karaoke tại tphcm, thu mua quán karaoke giá cao, thu mua trọn gói quán karaoke"
        canonical="https://thumuadocutrungkien.com/thu-mua-quan-karaoke"
        ogImage="/thu-mua-quan-karaoke.jpg"
      />

      <Head>
        <BreadcrumbSchema items={breadcrumbs} />

        <ServiceSchema
          name="Thu Mua Quán Karaoke Giá Cao Tại TPHCM"
          description="Dịch vụ thu mua quán karaoke trọn gói tại TPHCM, nhận mua nội thất, thiết bị âm thanh, ánh sáng và các tài sản trong quán karaoke."
          url="https://thumuadocutrungkien.com/thu-mua-quan-karaoke"
          image="https://thumuadocutrungkien.com/thu-mua-quan-karaoke.jpg"
        />

        <FAQSchema faqs={faqs} />
      </Head>

      <main className="flex-grow pb-12">

        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-100 py-3 shadow-sm">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-sm text-gray-500">
            <Link
              href="/"
              className="hover:text-brand-600 transition-colors"
            >
              Trang chủ
            </Link>

            <span className="mx-2">/</span>

            <span className="text-gray-900 font-medium">
              Thu Mua Quán Karaoke
            </span>
          </div>
        </nav>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

            {/* CỘT TRÁI: NỘI DUNG CHÍNH */}
            <article className="lg:col-span-3">

              {/* H1 */}
              <header className="mb-8 border-b-2 border-brand-50 pb-6">
                <h1 className="text-2xl md:text-4xl font-black text-brand-600 uppercase tracking-tight">
                  Thu Mua Quán Karaoke Trọn Gói Giá Cao Tại TPHCM
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify space-y-6">

                {/* INTRO */}
                <p className="text-xl">
                  <strong>
                    Bạn đang cần sang nhượng, đóng cửa hoặc thay đổi mô hình kinh doanh?
                    Đồ Cũ Trung Kiên nhận thu mua quán karaoke
                  </strong>{' '}
                  với nhiều hạng mục như bàn ghế, sofa, quầy bar, loa karaoke,
                  amply, cục đẩy, mixer, micro, màn hình, tivi, đèn sân khấu,
                  thiết bị điện lạnh và nhiều nội thất khác.
                  Dịch vụ hỗ trợ{' '}
                  <strong>thanh lý quán karaoke tại TPHCM</strong>{' '}
                  theo từng hạng mục hoặc thu mua toàn bộ quán, giúp chủ mặt bằng
                  nhanh chóng thu hồi vốn và bàn giao mặt bằng.
                </p>

                {/* CTA */}
                <div className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-600 my-8">

                  <p className="text-2xl font-black text-brand-700 m-0">
                    Liên Hệ:{' '}
                    <a
                      href={`tel:${hotline}`}
                      className="hover:underline"
                    >
                      {hotline}
                    </a>
                  </p>

                  <p className="mt-2 text-gray-800 font-bold italic">
                    Khảo sát tận nơi - Báo giá nhanh - Hỗ trợ tháo dỡ và vận chuyển
                  </p>

                  <p className="mt-1 text-red-600 font-black uppercase">
                    Nhận thu mua quán karaoke giá cao - Thanh toán nhanh sau khi thống nhất
                  </p>

                </div>

                {/* IMAGE 1 */}
                <figure className="my-10 text-center">

                  <div className="relative w-full aspect-[4/3] max-w-[700px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">

                    <Image
                      src="/thu-mua-quan-karaoke-1.jpg"
                      alt="Thu mua quán karaoke trọn gói giá cao tại TPHCM"
                      fill
                      className="object-cover"
                    />

                  </div>

                  <figcaption className="mt-4 text-sm italic text-gray-500">
                    Thu mua nội thất và thiết bị quán karaoke tận nơi
                  </figcaption>

                </figure>

                {/* CONTENT */}
                <p>
                  Khi quán karaoke ngừng hoạt động, việc tự tháo dỡ và thanh lý
                  từng món đồ có thể mất nhiều thời gian, đặc biệt với những
                  quán có hệ thống âm thanh, ánh sáng và nội thất được đầu tư
                  đồng bộ. Nếu không có kinh nghiệm định giá, chủ quán cũng
                  khó xác định giá trị thực tế của từng thiết bị.
                </p>

                <p>
                  Với dịch vụ <strong>thu mua quán karaoke</strong> của Trung Kiên,
                  khách hàng có thể lựa chọn bán từng nhóm tài sản hoặc{' '}
                  <strong>thu mua trọn gói quán karaoke</strong>.
                  Chúng tôi khảo sát thực tế, kiểm tra tình trạng thiết bị,
                  số lượng và chất lượng nội thất trước khi đưa ra mức giá phù hợp.
                </p>

                <p>
                  Đặc biệt, với những khách hàng cần{' '}
                  <strong>thanh lý quán karaoke tại TPHCM</strong> để nhanh chóng
                  trả mặt bằng, Trung Kiên có thể hỗ trợ từ khâu khảo sát,
                  báo giá đến tháo dỡ, bốc xếp và vận chuyển. Các hạng mục
                  được phân loại để quá trình thanh lý diễn ra nhanh gọn,
                  hạn chế ảnh hưởng đến mặt bằng và khu vực xung quanh.
                </p>

                {/* IMAGE 2 */}
                <figure className="my-10 text-center">

                  <div className="relative w-full aspect-[16/10] max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">

                    <Image
                      src="/thu-mua-quan-karaoke-2.jpg"
                      alt="Thanh lý nội thất và thiết bị quán karaoke tại TPHCM"
                      fill
                      className="object-cover"
                    />

                  </div>

                </figure>

                {/* H2 */}
                <h2 className="!text-xl md:!text-2xl font-bold text-brand-600 uppercase border-l-4 border-brand-600 pl-4 mb-6 tracking-normal">
                  Trung Kiên nhận thu mua những gì trong quán karaoke?
                </h2>

                <p>
                  Trung Kiên nhận thu mua đa dạng nội thất, thiết bị và vật dụng
                  còn giá trị sử dụng trong quán karaoke. Tùy vào số lượng,
                  thương hiệu, tình trạng và nhu cầu thanh lý, chúng tôi có thể
                  định giá riêng từng hạng mục hoặc báo giá tổng thể cho toàn bộ
                  mặt bằng.
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">

                  {[
                    "Loa karaoke, loa sân khấu, loa sub và loa full",
                    "Amply, cục đẩy công suất, mixer và thiết bị xử lý âm thanh",
                    "Micro karaoke không dây, micro có dây và phụ kiện âm thanh",
                    "Màn hình, tivi và thiết bị trình chiếu",
                    "Bàn karaoke, ghế sofa, bàn ghế phòng hát",
                    "Quầy bar, tủ kệ và nội thất trang trí",
                    "Đèn sân khấu, đèn LED, đèn laser và hệ thống ánh sáng",
                    "Máy lạnh, tủ mát, tủ đông và thiết bị điện lạnh",
                    "Cửa kính, vách kính và một số hạng mục nội thất khác",
                    "Thu mua toàn bộ tài sản khi chủ quán cần thanh lý trọn gói"
                  ].map((text, i) => (

                    <li
                      key={i}
                      className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100"
                    >

                      <span className="text-brand-600 font-bold">
                        ✔
                      </span>

                      <span className="text-lg">
                        {text}
                      </span>

                    </li>

                  ))}

                </ul>

                {/* IMAGE 3 */}
                <figure className="my-10 text-center">

                  <div className="relative w-full aspect-[4/3] max-w-[700px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">

                    <Image
                      src="/thu-mua-quan-karaoke-3.jpg"
                      alt="Đơn vị thu mua quán karaoke giá cao tại TPHCM"
                      fill
                      className="object-cover"
                    />

                  </div>

                  <figcaption className="mt-4 text-brand-600 font-bold uppercase tracking-wide">
                    Khảo sát tận nơi - Định giá minh bạch - Hỗ trợ tháo dỡ
                  </figcaption>

                </figure>

                {/* H2 */}
                <h2 className="!text-xl md:!text-2xl tracking-normal font-bold text-brand-600 uppercase border-l-4 border-brand-600 pl-4 mb-6">
                  Vì sao nên chọn dịch vụ thu mua quán karaoke của Trung Kiên?
                </h2>

                <ul className="grid grid-cols-1 gap-4 list-none p-0">

                  {[
                    "Khảo sát trực tiếp tại quán, kiểm tra số lượng và tình trạng tài sản trước khi báo giá.",
                    "Định giá dựa trên thương hiệu, chất lượng, tuổi đời và giá trị sử dụng thực tế.",
                    "Nhận thu mua từng hạng mục hoặc thu mua trọn gói quán karaoke.",
                    "Hỗ trợ tháo dỡ, bốc xếp và vận chuyển sau khi thống nhất phương án.",
                    "Thanh toán nhanh chóng theo thỏa thuận giữa hai bên.",
                    "Không phát sinh chi phí tháo dỡ và vận chuyển ngoài thỏa thuận ban đầu.",
                    `Hỗ trợ tư vấn và báo giá nhanh qua Hotline/Zalo: ${hotline}.`
                  ].map((text, i) => (

                    <li
                      key={i}
                      className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100"
                    >

                      <span className="text-brand-600 font-bold">
                        ✔
                      </span>

                      <span className="text-lg">
                        {text}
                      </span>

                    </li>

                  ))}

                </ul>

                {/* PROCESS */}
                <h2 className="!text-xl md:!text-2xl tracking-normal font-bold text-brand-600 uppercase border-l-4 border-brand-600 pl-4 mb-6">
                  Quy trình thu mua trọn gói quán karaoke
                </h2>

                <p>
                  Để quá trình thanh lý diễn ra thuận tiện, Trung Kiên thực hiện
                  quy trình đơn giản gồm các bước từ tiếp nhận thông tin đến
                  tháo dỡ và vận chuyển tài sản.
                </p>

                <ol className="list-none p-0 space-y-4">

                  {[
                    {
                      title: "Tiếp nhận thông tin",
                      text: "Khách hàng liên hệ Hotline hoặc gửi hình ảnh, video hiện trạng quán để được tư vấn sơ bộ."
                    },
                    {
                      title: "Khảo sát thực tế",
                      text: "Nhân viên đến trực tiếp địa điểm để kiểm tra nội thất, thiết bị âm thanh, ánh sáng và các tài sản cần thanh lý."
                    },
                    {
                      title: "Báo giá",
                      text: "Dựa trên số lượng, tình trạng và giá trị thực tế của tài sản, Trung Kiên đưa ra phương án thu mua phù hợp."
                    },
                    {
                      title: "Thống nhất và thanh toán",
                      text: "Hai bên thống nhất danh mục, giá thu mua và thời gian thực hiện trước khi tiến hành tháo dỡ."
                    },
                    {
                      title: "Tháo dỡ và vận chuyển",
                      text: "Đội ngũ tiến hành tháo dỡ, bốc xếp và vận chuyển tài sản ra khỏi mặt bằng nhanh chóng, gọn gàng."
                    }
                  ].map((item, i) => (

                    <li
                      key={i}
                      className="bg-gray-50 p-5 rounded-xl border border-gray-100"
                    >

                      <div className="font-black text-brand-600 text-lg mb-1">
                        {i + 1}. {item.title}
                      </div>

                      <div className="text-gray-700">
                        {item.text}
                      </div>

                    </li>

                  ))}

                </ol>

                {/* CAM KẾT */}
                <h2 className="!text-xl md:!text-2xl font-bold text-brand-600 uppercase border-l-4 border-brand-600 pl-4 mb-6">
                  Cam kết khi thu mua quán karaoke tại TPHCM
                </h2>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 font-semibold">

                  <li className="bg-brand-600 text-white p-3 rounded-lg text-center">
                    Thu mua giá cao theo giá trị thực tế
                  </li>

                  <li className="bg-brand-600 text-white p-3 rounded-lg text-center">
                    Thu mua từng hạng mục hoặc trọn gói
                  </li>

                  <li className="bg-brand-600 text-white p-3 rounded-lg text-center">
                    Hỗ trợ tháo dỡ và vận chuyển
                  </li>

                  <li className="bg-brand-600 text-white p-3 rounded-lg text-center">
                    Thanh toán nhanh sau khi thống nhất
                  </li>

                </ul>

                {/* PRICE */}
                <PriceTable
                  title="Bảng Giá Thu Mua Quán Karaoke Tham Khảo"
                  subtitle="Giá thu mua thực tế phụ thuộc vào thương hiệu, số lượng, tình trạng và giá trị sử dụng của từng thiết bị. Liên hệ để được khảo sát và báo giá cụ thể."
                  items={priceItems}
                />

                {/* FAQ */}
                <FAQAccordion
                  title="Câu Hỏi Thường Gặp Khi Thanh Lý Quán Karaoke"
                  faqs={faqs}
                />

                {/* CTA FINAL */}
                <section className="mt-12 p-8 bg-gray-900 text-white rounded-[2rem] shadow-2xl relative overflow-hidden">

                  <h3 className="text-2xl font-black uppercase mb-6 text-brand-500">
                    THU MUA ĐỒ CŨ TRUNG KIÊN
                  </h3>

                  <p className="text-lg opacity-90 mb-5">
                    Bạn đang cần thanh lý toàn bộ quán karaoke hoặc muốn bán
                    từng hạng mục nội thất, thiết bị? Liên hệ Trung Kiên để
                    được tư vấn và khảo sát tận nơi.
                  </p>

                  <ul className="space-y-3 text-lg opacity-90 list-none p-0">

                    <li>
                      📍 <strong>Chi nhánh 1:</strong> 271 Bình Long,
                      P. Bình Hưng Hòa, Bình Tân, TP.HCM
                    </li>

                    <li>
                      📍 <strong>Chi nhánh 2:</strong> 207 Nơ Trang Long,
                      P. 12, Bình Thạnh, TP.HCM
                    </li>

                    <li>
                      📍 <strong>Chi nhánh 3:</strong> 553 Kha Vạn Cân,
                      P. Linh Đông, Thủ Đức, TP.HCM
                    </li>

                    <li>
                      📍 <strong>Chi nhánh 4:</strong> 136 Đường Số 10,
                      P. Tân Quy, Quận 7, TP.HCM
                    </li>

                    <li>
                      📞 <strong>Hotline:</strong> {hotline} - Trung Kiên
                    </li>

                  </ul>

                </section>

              </div>

            </article>

            {/* SIDEBAR */}
            <aside className="lg:col-span-1 space-y-8 sticky top-24">
              <Sidebar />
            </aside>

          </div>

        </section>

      </main>
    </div>
  );
}