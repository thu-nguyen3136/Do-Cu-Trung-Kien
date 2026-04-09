import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThanhLyQuanCafePage() {
  const hotline = "0398.771.444";

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
        <title>Thanh Lý Quán Cafe | Thu Mua Bàn Ghế Cafe Giá Cao | Đồ Cũ Trung Kiên</title>
        <meta name="description" content="Hãy liên hệ ngay cho Đồ Cũ Trung Kiên, chúng tôi chuyên thu mua bàn ghế quán cafe, quán nhậu, trà sữa, nội thất quán, tủ đông, tủ mát, bếp công nghiệp giá cao." />
        <meta name="keywords" content="Thanh Lý Quán Cafe, thu mua quán Café, thu mua bàn ghế cũ, đồ cũ trung kiên" />
        <link rel="canonical" href="https://docutrungkien.com/thanh-ly-quan-cafe" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://docutrungkien.com/thanh-ly-quan-cafe" />
        <meta property="og:title" content="CÔNG TY THU MUA ĐỒ CŨ GIÁ CAO TPHCM ☎️【TRUNG KIÊN】" />
        <meta property="og:description" content="Chuyên Thu Mua Đồ Cũ Giá Cao Toàn Quốc ⭐ Thu Mua Thanh Lý Nhà Hàng Khách Sạn ⭐ Thanh Lý Quán Ăn - Cafe ⭐ Báo Giá Tận Nơi" />
        <meta property="og:image" content="https://docutrungkien.com/logo.png" />
      </Head>

      <main className="flex-grow pb-12">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-100 py-3 shadow-sm">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Quán Cafe</span>
          </div>
        </nav>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH (3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">

              <header className="mb-8 border-b-2 border-brand-50 pb-6">
                <h1 className="text-2xl md:text-4xl font-black text-brand-600 uppercase tracking-tight">
                  Thanh Lý Quán Cafe
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify space-y-6">

                <p className="text-xl">
                  <strong>Quý khách đang muốn thay đổi diện tích, không gian quán, quý khách muốn thay đổi những bộ bàn ghế để phù hợp với không gian và nhu cầu của khách hàng. Hãy liên hệ ngay cho Đồ Cũ Trung Kiên, chúng tôi</strong> chuyên thu mua bàn ghế quán cafe, quán nhậu, trà sữa, trà chanh nội thất quán, tủ đông, tủ mát, bếp công nghiệp,..., <strong>thanh lý quán cafe</strong> trọn gói nội thất giá cao trên thị trường khu vực TPHCM, Đồng Nai, Bình Dương và các tỉnh lân cận.
                </p>

                <div className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-600 my-8">
                  <p className="text-2xl font-black text-brand-700 m-0">
                    Liên Hệ: <a href={`tel:${hotline}`} className="hover:underline">{hotline}</a>
                  </p>
                  <p className="mt-2 text-gray-800 font-bold italic">
                    Gọi là có mặt sau 30 phút - Không Ngại Xa
                  </p>
                  <p className="mt-1 text-red-600 font-black uppercase">
                    Khảo Sát Báo Giá Tận Nơi - Không Ngại Đường Xa - Cam Kết Giá Cao Hơn Thị Trường 20%
                  </p>
                </div>

                <figure className="my-10 text-center">
                  <div className="relative w-full aspect-[4/3] max-w-[700px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-quan-cafe-1.jpeg"
                      alt="Thanh lý bàn ghế quán cafe trọn gói giá cao"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 text-sm italic text-gray-500">Dịch vụ thu mua bàn ghế cafe tận nơi chuyên nghiệp</figcaption>
                </figure>

                <p>
                  Các bàn ghế nội thất trong quán cà phê khi quý khách muốn thanh lý đổi mới hay ngừng kinh doanh. Trên thị trường có rất nhiều đơn vị nhỏ, lẻ để thu mua lại. Nhưng hiện nay đa số đều ép giá, việc thanh lý gây khó khăn trong quá trình mua bán.
                </p>

                <p>
                  Nhưng đến với <strong>Thu Mua Đồ Cũ Trung Kiên</strong> chúng tôi cam kết không ép giá với khách hàng, gọi là có mặt ngay sau 30 phút, tự tháo dỡ, vận chuyển nhanh chóng, sạch sẽ. Khi quý khách có nhu cầu hãy gọi ngay đến Hotline: <span className="text-red-600 font-black text-2xl">{hotline}</span> chúng tôi sẽ có mặt đến tận nơi.
                </p>

                <figure className="my-10 text-center">
                  <div className="relative w-full aspect-[16/10] max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-quan-cafe-2.jpeg"
                      alt="Hình ảnh thực tế thu mua quán ăn quán cafe"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                <h3 className="text-2xl font-bold text-brand-600 uppercase border-l-4 border-brand-600 pl-4 mb-6">
                  Ưu điểm khi chọn thanh lý tại Trung Kiên
                </h3>

                <ul className="grid grid-cols-1 gap-4 list-none p-0">
                  {[
                    "Dựa trên số lượng, tình trạng sản phẩm, chất liệu... chúng tôi đưa giá tốt nhất.",
                    "Thanh toán 100% ngay sau khi tháo dỡ và vận chuyển.",
                    "Dịch vụ thu mua cạnh tranh nhất thị trường, đảm bảo lợi ích người bán.",
                    `Báo giá siêu tốc qua Zalo: ${hotline} (Gửi hình ảnh thực tế).`,
                    "Không phát sinh thêm bất kỳ chi phí nào cho khách hàng.",
                    "Tự tháo dỡ và vận chuyển từ A đến Z chuyên nghiệp.",
                    "Chiết khấu hoa hồng cao cho người giới thiệu."
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-brand-600 font-bold">✔</span>
                      <span className="text-lg">{text}</span>
                    </li>
                  ))}
                </ul>

                <figure className="my-10 text-center">
                  <div className="relative w-full aspect-[4/3] max-w-[700px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-quan-cafe-3.jpeg"
                      alt="Đồ cũ Trung Kiên cam kết uy tín giá cao"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 text-brand-600 font-bold uppercase tracking-wide">Uy tín làm hàng đầu - Không ngại đường xa</figcaption>
                </figure>

                <h3 className="text-2xl font-bold text-brand-600 uppercase border-l-4 border-brand-600 pl-4 mb-6">
                  Cam kết của chúng tôi
                </h3>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 font-semibold">
                  <li className="bg-brand-600 text-white p-3 rounded-lg text-center">Thu mua giá cao nhất TPHCM</li>
                  <li className="bg-brand-600 text-white p-3 rounded-lg text-center">Thanh toán trọn gói 1 lần</li>
                  <li className="bg-brand-600 text-white p-3 rounded-lg text-center">Miễn phí 100% vận chuyển</li>
                  <li className="bg-brand-600 text-white p-3 rounded-lg text-center">Phục vụ 24/7 cả ngày lễ</li>
                </ul>

                <section className="mt-12 p-8 bg-gray-900 text-white rounded-[2rem] shadow-2xl relative overflow-hidden">
                  <h4 className="text-2xl font-black uppercase mb-6 text-brand-500">THU MUA ĐỒ CŨ TRUNG KIÊN</h4>
                  <ul className="space-y-3 text-lg opacity-90 list-none p-0">
                    <li>📍 <strong>Chi nhánh 1:</strong> 271 Bình Long, P. Bình Hưng Hòa, Bình Tân, TP.HCM</li>
                    <li>📍 <strong>Chi nhánh 2:</strong> 207 Nơ Trang Long, P. 12, Bình Thạnh, TP.HCM</li>
                    <li>📍 <strong>Chi nhánh 3:</strong> 553 Kha Vạn Cân, P. Linh Đông, Thủ Đức, TP.HCM</li>
                    <li>📍 <strong>Chi nhánh 4:</strong> 136 Đường Số 10, P. Tân Quy, Quận 7, TP.HCM</li>
                    <li>📞 <strong>Hotline:</strong> {hotline} - Trung Kiên</li>
                  </ul>
                </section>

              </div>
            </article>

            {/* --- CỘT PHẢI: SIDEBAR (1/4) --- */}
            <aside className="lg:col-span-1 space-y-8 sticky top-24">
              <Sidebar />
            </aside>

          </div>
        </section>
      </main>
    </div>
  );
}