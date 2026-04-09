import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThanhLyNhaHangPage() {
  const hotline = "0398.771.444";

  // Schema Markup cho doanh nghiệp địa phương (Tốt cho SEO)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Đồ Cũ Trung Kiên",
    "description": "Trung Kiên chuyên thu mua thanh lý nhà hàng trọn gói, giá cao tại TPHCM. Khảo sát miễn phí, tháo dỡ tận nơi, thanh toán ngay.",
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
        <title>Thanh Lý Nhà Hàng Trọn Gói Giá Cao | Đồ Cũ Trung Kiên</title>
        <meta name="description" content="Trung Kiên chuyên thu mua thanh lý nhà hàng trọn gói, giá cao. Dịch vụ chuyên nghiệp: khảo sát miễn phí, tháo dỡ tận nơi, thanh toán ngay 100%." />
        <meta name="keywords" content="thanh lý nhà hàng trọn gói, thanh lý nhà hàng giá cao, thanh lý nhà hàng tại tphcm, đồ cũ trung kiên" />
        <link rel="canonical" href="https://docutrungkien.com/thu-mua-do-cu/thanh-ly-nha-hang" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>

      <main className="flex-grow pb-12">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-100 py-3 shadow-sm">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-sm text-gray-500 text-left">
            <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Nhà Hàng</span>
          </div>
        </nav>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

            {/* --- NỘI DUNG CHÍNH (3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">

              <header className="mb-8 border-b-2 border-brand-50 pb-6">
                <h1 className="text-2xl md:text-4xl font-black text-red-600 uppercase tracking-tight text-center">
                  THANH LÝ NHÀ HÀNG
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify space-y-8">

                {/* ĐOẠN 1: GIỮ NGUYÊN NỘI DUNG GỐC */}
                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-red-700 uppercase mb-4">
                    Trung Kiên - Đối Tác Tin Cậy Trong Dịch Vụ Thanh Lý Nhà Hàng Trọn Gói
                  </h2>
                  <p>
                    Việc chuyển đổi mô hình, ngừng kinh doanh hoặc nâng cấp nhà hàng không còn là nỗi lo khi có <strong>Trung Kiên</strong>. Chúng tôi chuyên cung cấp dịch vụ <strong>thu mua đồ cũ và <Link href="/" className="text-brand-600 font-bold hover:underline">thanh lý nhà hàng</Link> trọn gói</strong>, giúp chủ đầu tư tối ưu hóa giá trị tài sản và giải quyết bài toán một cách nhanh chóng, hiệu quả.
                  </p>
                </section>

                <figure className="my-10">
                  <div className="relative w-full aspect-[4/3] max-w-[800px] mx-auto rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/thanh-ly-nha-hang-1.jpg"
                      alt="Dịch vụ thanh lý nhà hàng trọn gói chuyên nghiệp Trung Kiên"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </figure>

                {/* ĐOẠN 2: DANH MỤC THU MUA */}
                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-red-700 uppercase mb-4">
                    Đồ cũ Trung Kiên chuyên thu mua đồ nhà hàng đa dạng như:
                  </h2>
                  <p>
                    Chúng tôi mua tất cả đồ nhà hàng, không ngại số lượng, không ngại quy mô. Dịch vụ thanh lý nhà hàng trọn gói của chúng tôi bao gồm:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 mt-6">
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 italic">
                      <strong>Nội thất:</strong> Bàn ghế gỗ, ghế sofa, ghế bar, tủ kệ trưng bày, quầy bar, quầy thu ngân, bàn inox.
                    </li>
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 italic">
                      <strong>Thiết bị bếp:</strong> Bếp Á công nghiệp, tủ cơm, lò nướng, lò vi sóng, máy xay, tủ đông, tủ mát, bàn inox gia công.
                    </li>
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 italic">
                      <strong>Hệ thống điện:</strong> Máy lạnh công nghiệp, máy lạnh âm trần, quạt hút công nghiệp, đèn trang trí.
                    </li>
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 italic">
                      <strong>Vật dụng khác:</strong> Chén, đĩa, ly, bát, nồi, chảo... (số lượng lớn).
                    </li>
                  </ul>
                </section>

                <figure className="my-10">
                  <div className="relative w-full aspect-[4/3] max-w-[800px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-nha-hang-2.jpg"
                      alt="Thu mua thiết bị bếp và nội thất nhà hàng giá cao"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                {/* ĐOẠN 3: QUY TRÌNH 4 BƯỚC */}
                <section className="bg-brand-50 p-8 rounded-[2rem] border-2 border-brand-100">
                  <h2 className="text-xl md:text-2xl font-bold text-red-700 uppercase mb-6 text-center">
                    Quy Trình Thanh Lý Nhà Hàng Chuyên Nghiệp - 4 Bước Nhanh Gọn
                  </h2>
                  <p className="text-center mb-8">Để đảm bảo sự minh bạch và nhanh chóng, chúng tôi luôn làm việc thanh lý nhà hàng theo một quy trình chuẩn:</p>

                  <div className="space-y-6">
                    {[
                      { step: "1", title: "Tiếp nhận thông tin & Tư vấn", desc: <>Khách hàng liên hệ qua Hotline <span className="text-red-600 font-bold bg-yellow-300 px-2">0398.771.444</span> - Trung Kiên, chúng tôi tiếp nhận thông tin cơ bản và hẹn lịch KHẢO SÁT MIỄN PHÍ tận nơi.</> },
                      { step: "2", title: "Khảo sát thực tế & Định giá", desc: "Nhân viên có chuyên môn sẽ đến trực tiếp để đánh giá tình trạng đồ đạc, thiết bị. Chúng tôi BÁO GIÁ CHI TIẾT & CẠNH TRANH NHẤT ngay tại chỗ." },
                      { step: "3", title: "Thống nhất & Ký kết", desc: "Hai bên thống nhất phương án và tiến hành ký kết hợp đồng thanh lý nhà hàng trọn gói rõ ràng, minh bạch." },
                      { step: "4", title: "Tháo dỡ & Thanh toán", desc: "Đội ngũ nhân công chuyên nghiệp sẽ tiến hành tháo dỡ và vận chuyển trong ngày. THANH TOÁN NGAY 100% bằng tiền mặt hoặc chuyển khoản." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-5 bg-white p-5 rounded-2xl shadow-sm items-start">
                        <span className="w-10 h-10 shrink-0 bg-brand-600 text-white rounded-full flex items-center justify-center font-black text-lg">
                          {item.step}
                        </span>
                        <div>
                          <h4 className="font-bold text-gray-900 uppercase text-sm mb-1">{item.title}</h4>
                          <p className="text-gray-700 text-[15px] m-0 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <figure className="my-10">
                  <div className="relative w-full aspect-[4/3] max-w-[800px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-nha-hang-3.jpg"
                      alt="Hình ảnh thực tế tháo dỡ nhà hàng nhanh chóng"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                {/* ĐOẠN 4: CAM KẾT VÀNG */}
                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-red-700 uppercase mb-4">
                    Cam Kết Vàng - Lợi Ích Vượt Trội Dành Cho Quý Khách Hàng
                  </h2>
                  <p>Khi lựa chọn dịch vụ thanh lý nhà hàng giá cao tại Trung Kiên, bạn hoàn toàn có thể yên tâm vào những cam kết vàng của chúng tôi:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 mt-6">
                    {[
                      "Giá Thu Mua Cao Nhất: Đảm bảo quyền lợi tối đa cho khách hàng.",
                      "Khảo Sát & Báo Giá Nhanh Chóng: Phản hồi trong 5 phút, có mặt sau 1-2 giờ.",
                      "Dọn Dẹp Mặt Bằng Sạch Sẽ: Vệ sinh mặt bằng miễn phí sau khi tháo dỡ.",
                      "Minh Bạch & Chuyên Nghiệp: Hợp đồng rõ ràng, tư vấn trung thực.",
                      "Thu Mua Trọn Gói Trong Ngày: Giải quyết nhanh gọn, tiết kiệm thời gian."
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-3 bg-brand-50/50 p-4 rounded-xl border border-brand-100">
                        <span className="text-brand-600 font-bold">✔</span>
                        <span className="text-[16px] font-medium">{text}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8">
                    Hãy để <strong>Trung Kiên</strong> đồng hành cùng bạn trong khâu thanh lý cuối cùng, giúp bạn kết thúc một hành trình để sẵn sàng cho một khởi đầu mới.
                  </p>
                  <p className="text-center font-black text-red-600 text-xl py-4 bg-yellow-300 rounded-xl uppercase">
                    Hotline: 0398.771.444 - Trung Kiên
                  </p>
                </section>

                <figure className="my-10">
                  <div className="relative w-full aspect-[4/3] max-w-[800px] mx-auto rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/thanh-ly-nha-hang-4.jpg"
                      alt="Trung Kiên - Đối tác thanh lý nhà hàng uy tín hàng đầu"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                {/* BỔ SUNG SEO: Khu vực phục vụ */}
                <section className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl">
                  <h3 className="text-brand-400 text-xl font-black uppercase mb-6">Khu vực thu mua nhà hàng tại TP.HCM & Lân cận</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm opacity-80">
                    <p>● Thanh lý nhà hàng Quận 1</p>
                    <p>● Thanh lý nhà hàng Quận 7</p>
                    <p>● Thanh lý nhà hàng Gò Vấp</p>
                    <p>● Thanh lý nhà hàng Bình Tân</p>
                    <p>● Thu mua đồ cũ Bình Dương</p>
                    <p>● Thu mua đồ cũ Đồng Nai</p>
                    <p>● Thu mua đồ cũ Long An</p>
                    <p>● Thu mua đồ cũ Tây Ninh</p>
                    <p>● Thu mua đồ cũ Vũng Tàu</p>
                  </div>
                </section>

                {/* THÔNG TIN LIÊN HỆ GỐC */}
                <footer className="mt-12 p-8 bg-white border-2 border-brand-600 rounded-2xl shadow-md">
                  <h4 className="text-xl font-bold mb-6 text-brand-600 uppercase border-b pb-2">THU MUA ĐỒ CŨ TRUNG KIÊN</h4>
                  <ul className="list-none p-0 space-y-4 font-medium">
                    <li className="flex gap-2">📍 <span><strong>Địa Chỉ:</strong> 271 Bình Long, Phường Bình Hưng Hòa, Quận Bình Tân, TP.HCM</span></li>
                    <li className="flex gap-2">📧 <span><strong>Email:</strong> docutrungkien@gmail.com</span></li>
                    <li className="flex gap-2 text-red-600 text-lg">📞 <span><strong>Hotline:</strong> 0398.771.444 - Trung Kiên</span></li>
                  </ul>
                </footer>

              </div>
            </article>

            {/* --- CỘT PHẢI: SIDEBAR --- */}
            <aside className="lg:col-span-1 sticky top-24">
              <Sidebar />
            </aside>

          </div>
        </section>
      </main>
    </div>
  );
}