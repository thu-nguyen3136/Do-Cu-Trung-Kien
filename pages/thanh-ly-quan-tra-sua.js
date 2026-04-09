import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThanhLyQuanTraSuaPage() {
  const hotline = "0398.771.444";

  // Dữ liệu cấu trúc giúp Google hiểu trang này cung cấp dịch vụ thu mua đồ trà sữa
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Đồ Cũ Trung Kiên",
    "description": "Trung Kiên chuyên thu mua thanh lý quán trà sữa trọn gói giá cao: máy dập nắp, máy định lượng đường, quầy bar, bàn ghế sofa trà sữa.",
    "telephone": "0398.771.444",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "271 Bình Long, Phường Bình Hưng Hòa",
      "addressLocality": "Quận Bình Tân",
      "addressRegion": "TP.HCM"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
        <title>Thanh Lý Quán Trà Sữa | Thu Mua Máy Pha Trà Sữa & Quầy Bar Giá Cao</title>
        <meta name="description" content="Bạn cần thanh lý quán trà sữa? Đồ Cũ Trung Kiên thu mua trọn gói thiết bị máy dập nắp, máy định lượng đường, tủ mát trưng bày giá cao nhất TPHCM. Có mặt sau 30p." />
        <meta name="keywords" content="thanh lý quán trà sữa, thu mua quán trà sữa, thanh lý máy dập nắp trà sữa, đồ cũ trung kiên, thu mua quầy bar inox" />
        <link rel="canonical" href="https://docutrungkien.com/thanh-ly-quan-tra-sua" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>

      <main className="flex-grow pb-12">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-100 py-3 shadow-sm">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Quán Trà Sữa</span>
          </div>
        </nav>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">

              <header className="mb-8 border-b-2 border-brand-50 pb-6 text-center">
                <h1 className="text-2xl md:text-4xl font-black text-brand-600 uppercase tracking-tight">
                  Thanh Lý Quán Trà Sữa Trọn Gói Giá Cao
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify space-y-8">

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-red-700 uppercase mb-4">
                    Dịch Vụ Thu Mua Thiết Bị Quán Trà Sữa Tận Nơi TPHCM
                  </h2>
                  <p>
                    Kinh doanh trà sữa đang là xu hướng nhưng cũng cạnh tranh rất lớn. Khi bạn cần <strong>thanh lý quán trà sữa</strong> để nâng cấp mặt bằng hoặc chuyển hướng kinh doanh, <strong>Đồ Cũ Trung Kiên</strong> luôn sẵn sàng hỗ trợ. Chúng tôi chuyên thu mua tất cả thiết bị máy móc pha chế, quầy kệ và bàn ghế quán trà sữa với cam kết giá cao hơn thị trường 20%.
                  </p>
                  <p className="bg-yellow-300 inline-block px-4 py-2 font-black text-red-600 rounded-lg">
                    GỌI BÁO GIÁ NGAY: {hotline}
                  </p>
                </section>

                {/* ẢNH 1: MÁY MÓC PHA CHẾ */}
                <figure className="my-10">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-quan-tra-sua-1.jpg"
                      alt="Thanh lý máy đóng nắp ly, máy định lượng đường và thiết bị pha chế trà sữa"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-center mt-3 text-sm italic text-gray-500 text-left">Trung Kiên thu mua trọn gói máy móc pha chế hiện đại</figcaption>
                </figure>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-red-700 uppercase mb-4">
                    Các hạng mục Trung Kiên thu mua tại Quán Trà Sữa
                  </h2>
                  <p>
                    Chúng tôi nhận thu mua trọn gói, không kể ít hay nhiều. Các thiết bị bao gồm:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 mt-4">
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      🥤 <strong>Máy móc:</strong> Máy đóng nắp ly tự động, máy định lượng đường, máy làm đá viên, máy đánh kem (milk foam), bình ủ trà.
                    </li>
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      ❄️ <strong>Điện lạnh:</strong> Tủ mát trưng bày topping, tủ đông đựng trân châu, máy lạnh, quạt công nghiệp.
                    </li>
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      🪑 <strong>Nội thất:</strong> Quầy bar inox hoặc gỗ, bộ bàn ghế sofa decor, bàn ghế gỗ cao su, kệ trang trí.
                    </li>
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      📺 <strong>Khác:</strong> Hệ thống loa âm trần, máy tính tiền POS, bảng hiệu LED, đèn trang trí.
                    </li>
                  </ul>
                </section>

                {/* ẢNH 2: NỘI THẤT BÀN GHẾ TRÀ SỮA */}
                <figure className="my-10">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-quan-tra-sua-2.jpg"
                      alt="Thu mua bàn ghế quán trà sữa decor cũ giá cao"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                <section className="bg-brand-50 p-8 rounded-[2rem] border-2 border-brand-100">
                  <h2 className="text-xl md:text-2xl font-bold text-brand-700 uppercase mb-6 text-center">
                    Lợi ích khi thanh lý tại Đồ Cũ Trung Kiên
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Khảo sát và báo giá nhanh chóng chỉ sau 30 phút gọi điện.",
                      "Giá thu mua sát với giá trị thực tế của trang thiết bị hiện đại.",
                      "Tự tháo dỡ, bốc xếp nhanh gọn, vệ sinh mặt bằng sạch sẽ.",
                      "Thanh toán 100% bằng tiền mặt hoặc chuyển khoản ngay tại chỗ.",
                      "Hỗ trợ xe tải vận chuyển chuyên dụng, không làm phiền hàng xóm."
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                        <span className="text-brand-600 font-black">✔</span>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ẢNH 3: TỔNG QUAN CỬA HÀNG TRÀ SỮA */}
                <figure className="my-10">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-quan-tra-sua-3.jpg"
                      alt="Quy trình thu mua dọn dẹp quán trà sữa chuyên nghiệp"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-red-700 uppercase mb-4">
                    Khu vực phục vụ thu mua quán trà sữa
                  </h2>
                  <p>
                    <strong>Công ty Trung Kiên</strong> nhận thu mua quán trà sữa tại tất cả các quận huyện TPHCM: Quận 1, 3, 5, 7, 10, Bình Tân, Tân Bình, Gò Vấp, Thủ Đức... và các khu vực lân cận như Bình Dương, Đồng Nai, Long An.
                  </p>
                  <p>
                    Chỉ cần bạn gọi, chúng tôi có mặt ngay. Không ngại xa, không ngại ít đồ!
                  </p>
                </section>

                {/* THÔNG TIN LIÊN HỆ GỐC */}
                <footer className="mt-12 p-8 bg-gray-900 text-white rounded-[2rem] shadow-2xl">
                  <h4 className="text-2xl font-black uppercase mb-6 text-brand-500">THU MUA ĐỒ CŨ TRUNG KIÊN</h4>
                  <div className="space-y-4 font-medium opacity-90 text-left">
                    <p>📍 <strong>Địa Chỉ 1:</strong> 271 Bình Long, Phường Bình Hưng Hòa, Quận Bình Tân, TP.HCM</p>
                    <p>📍 <strong>Địa Chỉ 2:</strong> 207 Nơ Trang Long, Phường 12, Quận Bình Thạnh, TP.HCM</p>
                    <p>📍 <strong>Địa Chỉ 3:</strong> 553 Kha Vạn Cân, Phường Linh Đông, Quận Thủ Đức, TPHCM</p>
                    <p>📍 <strong>Địa Chỉ 4:</strong> 136 Đường Số 10, Phường Tân Quy, Quận 7, TPHCM</p>
                    <p className="text-brand-400 text-xl">📞 <strong>Hotline:</strong> {hotline} - Trung Kiên</p>
                    <p>💬 <strong>Zalo báo giá:</strong> 0398.771.444 (Gửi ảnh nhận báo giá ngay)</p>
                  </div>
                </footer>

              </div>
            </article>

            {/* --- CỘT PHẢI: SIDEBAR --- */}
            <aside className="lg:col-span-1 sticky top-24 text-left">
              <Sidebar />
            </aside>

          </div>
        </section>
      </main>
    </div>
  );
}