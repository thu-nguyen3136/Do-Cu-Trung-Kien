import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThuMuaDoCuGiaDinhPage() {
  const hotline = "0398.771.444";

  // Schema Local Business tối ưu SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Thu Mua Đồ Cũ Gia Đình Trọn Gói Giá Cao",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Đồ Cũ Trung Kiên",
      "telephone": "0398.771.444",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "271 Bình Long, Phường Bình Hưng Hòa",
        "addressLocality": "Quận Bình Tân",
        "addressRegion": "TP.HCM"
      }
    },
    "description": "Đồ Cũ Trung Kiên chuyên thu mua đồ cũ gia đình trọn gói tại TPHCM. Mua nội thất gia đình, sofa, giường tủ, đồ điện lạnh, điện gia dụng giá cao tận nơi."
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
        <title>Thu Mua Đồ Cũ Gia Đình TPHCM | Thu Mua Nội Thất Cũ Giá Cao</title>
        <meta name="description" content="Chuyên thu mua đồ cũ gia đình trọn gói giá cao tại TPHCM. Thu mua bàn ghế gỗ, sofa, giường tủ, tivi, tủ lạnh, máy giặt cũ tận nơi. Khảo sát nhanh chóng 30p." />
        <meta name="keywords" content="thu mua đồ cũ gia đình, thanh lý đồ nội thất, thu mua giường tủ cũ, thu mua đồ điện lạnh cũ, đồ cũ gia đình tphcm, đồ cũ trung kiên" />
        <link rel="canonical" href="https://docutrungkien.com/thu-mua-do-cu/thu-mua-do-cu-gia-dinh" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>

      <main className="flex-grow pb-12">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-100 py-3 shadow-sm">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
            <span className="mx-2">/</span>
            <Link href="/thu-mua-do-cu" className="hover:text-brand-600 transition-colors">Thu Mua Đồ Cũ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Thu Mua Đồ Cũ Gia Đình</span>
          </div>
        </nav>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">

              <header className="mb-8 border-b-2 border-brand-50 pb-6 text-center">
                <h1 className="text-2xl md:text-4xl font-black text-brand-600 uppercase tracking-tight">
                  Thu Mua Đồ Cũ Gia Đình Giá Cao Tận Nơi TPHCM
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify space-y-8">

                <section>
                  <p className="text-[19px] font-medium text-gray-900">
                    Gia đình bạn đang chuẩn bị chuyển nhà, chuyển trọ hay đơn giản là muốn đổi mới không gian sống bằng những món đồ nội thất hiện đại hơn? Việc xử lý đống đồ cũ cồng kềnh như giường, tủ, sofa hay tủ lạnh, máy giặt luôn là bài toán khiến nhiều người đau đầu.
                  </p>
                  <p className="text-[18px]">
                    Đừng vứt bỏ lãng phí! Hãy gọi ngay cho <strong>Đồ Cũ Trung Kiên</strong>. Chúng tôi cung cấp dịch vụ <strong>thu mua đồ cũ gia đình trọn gói</strong> tại TPHCM. Biến đồ cũ của bạn thành một khoản tiền không nhỏ một cách nhanh chóng, sạch sẽ và cực kỳ chuyên nghiệp.
                  </p>
                </section>

                {/* LIÊN HỆ BOX */}
                <div className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-600 my-8 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
                  <div>
                    <p className="text-xl font-black m-0 text-gray-900 uppercase">
                      Chụp ảnh gửi Zalo - Nhận Báo Giá 5 Phút
                    </p>
                    <p className="mt-2 font-bold italic text-red-600 text-2xl m-0">
                      Hotline: {hotline}
                    </p>
                  </div>
                  <a href={`https://zalo.me/0398771444`} target="_blank" className="bg-brand-600 text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-brand-700 transition animate-bounce">
                    Chat Zalo Ngay
                  </a>
                </div>

                {/* ẢNH 1: NỘI THẤT PHÒNG KHÁCH */}
                <figure className="my-10">
                  <div className="relative w-full aspect-video max-w-[700px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thu-mua-do-cu-gia-dinh-2.jpeg"
                      alt="Thu mua sofa cũ, bàn ghế salon gỗ gia đình"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-center mt-3 text-sm italic text-gray-500 font-bold">Thu mua nội thất phòng khách: Bộ sofa, salon gỗ, kệ tivi cũ</figcaption>
                </figure>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-red-700 uppercase mb-6 border-l-4 border-red-700 pl-4">
                    Trung Kiên Nhận Thu Mua Những Mặt Hàng Gia Đình Nào?
                  </h2>
                  <p>Chúng tôi nhận thu mua hầu hết các vật dụng trong gia đình, từ phòng khách, phòng ngủ đến nhà bếp. Bao gồm:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 mt-4">
                    <li className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      🛋️ <strong>Nội thất phòng khách:</strong> Bộ bàn ghế Salon gỗ (gỗ hương, sồi, gõ đỏ...), bộ ghế Sofa (da, nỉ, vải), kệ tivi, tủ giày dép, tủ rượu, đồng hồ gỗ.
                    </li>
                    <li className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      🛏️ <strong>Nội thất phòng ngủ:</strong> Giường gỗ tự nhiên, giường MDF, tủ quần áo 2 cánh/3 cánh/4 cánh, bàn trang điểm, tủ đầu giường.
                    </li>
                    <li className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      🍳 <strong>Nội thất nhà bếp:</strong> Bộ bàn ăn gỗ, bàn ăn mặt đá (4 ghế, 6 ghế, 8 ghế), tủ bếp chữ L, tủ bếp chữ U gỗ tự nhiên.
                    </li>
                    <li className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      ❄️ <strong>Điện lạnh & Điện gia dụng:</strong> Tivi, máy lạnh (điều hòa), tủ lạnh, máy giặt, máy nước nóng, quạt hơi nước...
                    </li>
                  </ul>
                </section>

                {/* ẢNH 2: NỘI THẤT PHÒNG NGỦ/BẾP */}
                <figure className="my-10">
                  <div className="relative w-full aspect-[4/3] max-w-[700px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thu-mua-do-cu-gia-dinh-1.jpeg"
                      alt="Thu mua tủ quần áo, giường cũ, bộ bàn ăn gia đình"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                <section className="bg-brand-50 p-8 rounded-[2rem] border-2 border-brand-100 mt-10">
                  <h2 className="text-xl md:text-2xl font-bold text-brand-700 uppercase mb-6 text-center">
                    Quy Trình Thu Mua Chuyên Nghiệp - Không Ngại Mưa Nắng
                  </h2>
                  <div className="space-y-4 text-[17px]">
                    <p><strong>Bước 1: Tiếp nhận:</strong> Quý khách kết bạn Zalo số <strong className="text-red-600">{hotline}</strong> chụp ảnh các món đồ cần bán kèm tình trạng hiện tại.</p>
                    <p><strong>Bước 2: Định giá nhanh:</strong> Dựa trên hình ảnh, nhân viên định giá sẽ báo khoảng giá thu mua lập tức. Nếu đồ gỗ xưa/giá trị cao, chúng tôi sẽ cử người đến tận nhà thẩm định.</p>
                    <p><strong>Bước 3: Thu mua tận nơi:</strong> Sau khi chốt giá, đội ngũ thợ bốc vác chuyên nghiệp sẽ mang theo đồ nghề đến tự tháo dỡ, bưng bê (kể cả ở chung cư hay hẻm sâu).</p>
                    <p><strong>Bước 4: Thanh toán 100%:</strong> Giao tiền mặt hoặc chuyển khoản đầy đủ trước khi cho xe lăn bánh. Quét dọn sạch sẽ khu vực tháo đồ.</p>
                  </div>
                </section>

                {/* ẢNH 3: ĐỒ ĐIỆN LẠNH */}
                <figure className="my-10 text-center">
                  <div className="relative w-full aspect-video max-w-[700px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thu-mua-do-cu-gia-dinh-3.jpeg"
                      alt="Thu mua tủ lạnh, máy giặt, máy lạnh cũ tại nhà"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm italic text-gray-500 font-bold">Tháo dỡ máy lạnh, bốc xếp đồ điện lạnh tận nhà</figcaption>
                </figure>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-red-700 uppercase mb-6 border-l-4 border-red-700 pl-4">
                    Vì Sao Bạn Nên Chọn Đồ Cũ Trung Kiên?
                  </h2>
                  <ul className="grid grid-cols-1 gap-4 list-none p-0">
                    {[
                      "Cam kết định giá khách quan, mua đúng giá trị sản phẩm, tuyệt đối KHÔNG ÉP GIÁ.",
                      "Mua bán trọn gói từ A-Z, từ đồ lớn đến đồ nhỏ, giúp gia chủ dọn sạch nhà nhanh chóng.",
                      "Có đủ nhân công và xe tải đa trọng tải, tháo dỡ nội thất (giường, tủ áo) chuyên nghiệp không làm hư hại sàn/tường nhà.",
                      "Luôn có mặt đúng hẹn, thái độ nhân viên nhiệt tình, vui vẻ."
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-[17px]">
                        <span className="text-brand-600 font-black mt-1">✔</span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </section>
                {/* KHU VỰC PHỤC VỤ (SEO LOCAL) */}
                <section className="mt-12 bg-gray-900 text-white p-8 rounded-3xl shadow-xl">
                  <h3 className="text-brand-400 text-xl font-black uppercase mb-6 border-b border-gray-700 pb-2">
                    Khu Vực Phục Vụ Nhanh Chóng
                  </h3>
                  <p className="mb-4">Chúng tôi nhận thu mua đồ gia đình cũ tại tất cả các quận huyện thuộc TPHCM:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[14px] opacity-90">
                    <p>● Quận 1 - Quận 12</p>
                    <p>● Quận Bình Tân</p>
                    <p>● Quận Tân Bình</p>
                    <p>● Quận Tân Phú</p>
                    <p>● Quận Gò Vấp</p>
                    <p>● Quận Phú Nhuận</p>
                    <p>● TP. Thủ Đức</p>
                    <p>● Huyện Bình Chánh</p>
                  </div>
                  <p className="mt-4 italic text-brand-300">Ngoài ra còn hỗ trợ thu mua tại Đồng Nai, Bình Dương, Long An nếu số lượng đồ lớn.</p>
                </section>

                {/* THÔNG TIN LIÊN HỆ */}
                <footer className="mt-8 p-8 bg-white border-2 border-brand-600 rounded-3xl shadow-md">
                  <h4 className="text-2xl font-black text-brand-600 uppercase mb-8 border-b pb-2 text-center">THÔNG TIN LIÊN HỆ</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[16px] font-medium text-gray-700">
                    <div className="space-y-4">
                      <p>📍 <strong>CN1:</strong> 271 Bình Long, Phường Bình Hưng Hòa, Quận Bình Tân, TP.HCM</p>
                      <p>📍 <strong>CN2:</strong> 207 Nơ Trang Long, Phường 12, Quận Bình Thạnh, TP.HCM</p>
                      <p>📍 <strong>CN3:</strong> 553 Kha Vạn Cân, Phường Linh Đông, Quận Thủ Đức, TP.HCM</p>
                      <p>📍 <strong>CN4:</strong> 136 Đường Số 10, Phường Tân Quy, Quận 7, TP.HCM</p>
                    </div>
                    <div className="space-y-4 md:border-l md:pl-6 border-gray-100 flex flex-col justify-center">
                      <p className="text-red-600 text-xl m-0">📞 <strong>Hotline:</strong> {hotline}</p>
                      <p className="m-0">💬 <strong>Zalo:</strong> 0398.771.444</p>
                      <p className="m-0">📧 <strong>Email:</strong> docutrungkien@gmail.com</p>
                      <p className="text-brand-600 font-black m-0 bg-brand-50 inline-block px-3 py-1 rounded">24/24 - Làm việc cả ngày Lễ & CN</p>
                    </div>
                  </div>
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