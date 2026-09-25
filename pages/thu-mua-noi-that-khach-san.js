import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '../components/SchemaMarkup';
import FAQAccordion from '../components/FAQAccordion';
import PriceTable from '../components/PriceTable';
import SEOHead from '../components/SEOHead';

export default function ThanhLyNoiThatKhachSanPage() {
  const hotline = "0398.771.444";

  const breadcrumbs = [
    { name: 'Trang chủ', url: 'https://thumuadocutrungkien.com/' },
    { name: 'Thu Mua Nội Thất Khách Sạn', url: 'https://thumuadocutrungkien.com/thu-mua-noi-that-khach-san' }
  ];

  const faqs = [
    {
      question: "Trung Kiên có thu mua nội thất khách sạn số lượng lớn (50-200 phòng) không?",
      answer: "Có. Chúng tôi có đầy đủ nguồn vốn, nhân sự và đội xe tải lớn để thu mua bao tiêu trọn gói mọi quy mô khách sạn từ 2 sao đến 5 sao, homestay, resort."
    },
    {
      question: "Các thiết bị buồng phòng khách sạn gồm những gì?",
      answer: "Thu mua: giường ngủ, nệm lò xo/cao su, tủ quần áo âm tường, minibar (tủ mát mini), tivi, máy sấy tóc, bàn làm việc, két sắt mini và thiết bị vệ sinh cao cấp."
    },
    {
      question: "Thời gian hoàn thành tháo dỡ khách sạn nhiều tầng mất bao lâu?",
      answer: "Đội ngũ 20-30 thợ chuyên nghiệp làm việc liên tục, có thể hoàn tất việc tháo dỡ toàn bộ tòa nhà và dọn dẹp mặt bằng sạch sẽ trong 3 - 5 ngày."
    }
  ];

  const priceItems = [
    { name: "Combo phòng ngủ khách sạn (Giường 1m8 + nệm lò xo + 2 tab + tủ áo)", unit: "Phòng", priceRange: "3.500.000 - 15.000.000 đ", note: "Khách sạn 3 - 5 sao gỗ cao cấp" },
    { name: "Tủ lạnh mini (Minibar) khách sạn 50L - 90L", unit: "Chiếc", priceRange: "700.000 - 1.800.000 đ", note: "Dometic, Primo, Homesun, Casper" },
    { name: "Tivi thông minh Smart TV khách sạn 32 - 55 inch", unit: "Chiếc", priceRange: "1.200.000 - 6.500.000 đ", note: "Samsung, LG, Sony, TCL" },
    { name: "Bàn ghế sảnh tiếp tân, sofa lounge sảnh khách sạn", unit: "Bộ", priceRange: "2.500.000 - 18.000.000 đ", note: "Sofa bọc da thật, khung kim loại mạ vàng" },
    { name: "Két sắt điện tử mini để phòng khách sạn", unit: "Chiếc", priceRange: "400.000 - 1.500.000 đ", note: "Khóa mã số điện tử còn hoạt động tốt" },
    { name: "Máy nước nóng lạnh, máy sấy tóc gắn tường", unit: "Chiếc", priceRange: "200.000 - 1.200.000 đ", note: "Ariston, Ferroli, Panasonic" },
    { name: "Thiết bị giặt sấy công nghiệp cho khách sạn", unit: "Máy", priceRange: "15.000.000 - 80.000.000 đ", note: "Máy giặt vắt công nghiệp 20kg - 50kg" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <SEOHead
        title="Thanh Lý Nội Thất Khách Sạn Giá Cao TPHCM | Đồ Cũ Trung Kiên"
        description="Chuyên thu mua thanh lý nội thất khách sạn, resort, homestay trọn gói giá cao tại TPHCM. Giường nệm, minibar, tivi, đồ gỗ buồng phòng: 0398.771.444."
        keywords="Thanh Lý Nội Thất Khách Sạn, Thanh Lý Nội Thất Khách Sạn Trọn Gói, Thanh Lý Nội Thất Khách Sạn Gía Cao, đồ cũ trung kiên"
        canonical="https://thumuadocutrungkien.com/thu-mua-noi-that-khach-san"
        ogImage="/thanh-ly-noi-that-khach-san.jpg"
      />
      <Head>
        <BreadcrumbSchema items={breadcrumbs} />
        <ServiceSchema
          name="Thanh Lý Nội Thất Khách Sạn Trọn Gói Giá Cao"
          description="Chuyên thu mua trọn gói nội thất khách sạn, resort, homestay: giường, nệm, tủ áo, minibar, thiết bị sảnh giá cao tại TPHCM."
          url="https://thumuadocutrungkien.com/thu-mua-noi-that-khach-san"
          image="https://thumuadocutrungkien.com/thanh-ly-noi-that-khach-san.jpg"
        />
        <FAQSchema faqs={faqs} />
      </Head>

      <main className="flex-grow pb-12">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-100 py-3 shadow-sm">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Nội Thất Khách Sạn</span>
          </div>
        </nav>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">

              <header className="mb-8 border-b-2 border-brand-50 pb-6 text-center">
                <h1 className="text-2xl md:text-4xl font-black text-brand-600 uppercase tracking-tight">
                  Thanh Lý Nội Thất Khách Sạn Trọn Gói Giá Cao TPHCM - Đồ Cũ Trung Kiên
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify space-y-8">

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-red-700 uppercase mb-4">
                    Dịch Vụ Thanh Lý Nội Thất Khách Sạn – Thu Mua Giá Cao, Uy Tín
                  </h2>
                  <p className="text-[17px]">
                    <strong>Công ty Trung Kiên</strong> là đối tác tin cậy hàng đầu, cung cấp giải pháp <strong className="text-brand-600">thanh lý nội thất khách sạn trọn gói</strong> tại TPHCM và khu vực lân cận. Chúng tôi chuyên thu mua tất cả các danh mục nội thất, từ phòng ngủ đến khu vực sảnh lounge, cũng như <Link href="/thanh-ly-nha-hang" className="text-brand-600 font-semibold hover:underline">nhà hàng khách sạn</Link>, <Link href="/thu-mua-do-cu-gia-dinh" className="text-brand-600 font-semibold hover:underline">đồ nội thất gia đình</Link> và <Link href="/thu-mua-tu-dong-tu-mat" className="text-brand-600 font-semibold hover:underline">tủ mát minibar</Link> với phương châm <strong className="text-red-600 uppercase">"ĐẾN NHANH - ĐỊNH GIÁ CHUẨN - THANH TOÁN LIỀN TAY"</strong>.
                  </p>
                  <p className="text-[17px]">
                    Sở hữu đội ngũ chuyên gia giàu kinh nghiệm và nguồn vốn mạnh, Trung Kiên cam kết mang đến cho Quý khách hàng mức giá tốt nhất thị trường. Mọi dự án đều được thực hiện bằng quy trình bài bản, minh bạch, giúp tối ưu hóa giá trị tài sản và rút ngắn thời gian thanh lý cho chủ đầu tư.
                  </p>
                  <p className="bg-yellow-300 inline-block px-4 py-2 font-black text-red-600 rounded-lg mt-2">
                    Hotline: {hotline} - Trung Kiên
                  </p>
                </section>

                {/* ẢNH 1: TỔNG QUAN PHÒNG KHÁCH SẠN */}
                <figure className="my-10 text-center">
                  <div className="relative w-full aspect-[4/3] max-w-[700px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-noi-that-khach-san-1.jpg"
                      alt="Dịch vụ thanh lý nội thất khách sạn phòng ngủ trọn gói"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </figure>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-red-700 uppercase mb-6">
                    Danh Mục Thanh Lý Nội Thất Khách Sạn Tại Trung Kiên
                  </h2>
                  <p>Công ty Trung Kiên chuyên thu mua và thanh lý toàn bộ các thiết bị, nội thất từ A đến Z của khách sạn, resort, homestay. Dưới đây là danh sách chi tiết các mặt hàng chúng tôi thường xuyên mua lại:</p>

                  <div className="grid grid-cols-1 gap-6 mt-6">
                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      <h3 className="font-bold text-brand-600 text-lg mb-2">1. Nội Thất Phòng Ngủ</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Giường:</strong> Giường ngủ size King, Queen, giường đơn, giường tầng.</li>
                        <li><strong>Tủ:</strong> Tủ đầu giường, tủ quần áo, tủ mini bar.</li>
                        <li><strong>Bàn ghế:</strong> Bàn làm việc, bàn trang điểm, ghế đôn, ghế xích đu.</li>
                        <li><strong>Đệm:</strong> Đệm cao su, đệm lò xo, đệm bông ép các loại.</li>
                        <li><strong>Đèn ngủ & Đèn trang trí:</strong> Đèn để bàn, đèn treo tường, đèn chùm.</li>
                        <li><strong>Thảm trải sàn:</strong> Thảm lông, thảm sợi tổng hợp.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      <h3 className="font-bold text-brand-600 text-lg mb-2">2. Nội Thất Phòng Tắm</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Bồn tắm:</strong> Bồn tắm nằm, bồn massage Jacuzzi.</li>
                        <li><strong>Thiết bị vệ sinh:</strong> Bồn cầu, bệt, chậu rửa mặt, vòi sen, phụ kiện inox.</li>
                        <li><strong>Tủ & Kệ:</strong> Tủ phòng tắm, kệ đựng đồ, kệ gương.</li>
                        <li><strong>Các vật dụng khác:</strong> Gương soi, máy sấy tóc, móc treo.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      <h3 className="font-bold text-brand-600 text-lg mb-2">3. Nội Thất Nhà Hàng, Quầy Bar & Sảnh Lễ Tân</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Bàn ghế:</strong> Bàn ăn tròn/vuông, bàn ghế sofa lễ tân, bàn ghế quầy bar, bàn ghế sân vườn.</li>
                        <li><strong>Tủ, Kệ:</strong> Tủ bar, kệ rượu, tủ trưng bày, kệ sách, tủ kệ lễ tân.</li>
                        <li><strong>Quầy:</strong> Quầy lễ tân, quầy bar, quầy buffet.</li>
                        <li><strong>Xe đẩy:</strong> Xe đẩy phục vụ đồ ăn (food trolley), xe đẩy hành lý.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      <h3 className="font-bold text-brand-600 text-lg mb-2">4. Thiết Bị, Đồ Dùng & Công Nghệ</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Thiết bị điện tử:</strong> Tivi, tủ lạnh mini, máy lạnh, điều hòa, điện thoại bàn, hệ thống âm thanh.</li>
                        <li><strong>Đồ dùng cá nhân:</strong> Bộ đồ bathroom (dầu gội, sữa tắm), áo choàng tắm, dép.</li>
                        <li><strong>Đồ dùng nhà hàng:</strong> Bát đĩa, ly tách, dao kéo, bộ ấm trà, nồi niêu xoong chảo.</li>
                        <li><strong>Hệ thống khóa:</strong> Khóa từ, khóa thẻ, khóa cơ.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      <h3 className="font-bold text-brand-600 text-lg mb-2">5. Nội Thất Ngoại Cảnh & Khu Vực Công Cộng</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Bàn ghế:</strong> Bộ bàn ghế sân vườn, bàn ghế hồ bơi.</li>
                        <li><strong>Giường & Ô dù:</strong> Giường tắm nắng, ô dù che nắng.</li>
                        <li><strong>Khác:</strong> Xích đu & Ghế thư giãn.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ẢNH 2: NỘI THẤT SẢNH / ĐỒ GỖ */}
                <figure className="my-10 text-center">
                  <div className="relative w-full aspect-[3/2] max-w-[700px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-noi-that-khach-san-2.jpeg"
                      alt="Thu mua đồ gỗ nội thất khách sạn cao cấp"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                <section className="bg-brand-50 p-8 rounded-[2rem] border-2 border-brand-100 mt-10">
                  <h2 className="text-xl md:text-2xl font-bold text-red-700 uppercase mb-6 text-center">
                    Quy Trình 4 Bước Thanh Lý Nhanh Chóng, Dễ Dàng Tại Đồ Cũ Trung Kiên
                  </h2>
                  <p className="text-center mb-6">Khi quyết định thanh lý nội thất khách sạn, việc chọn một quy trình đơn giản và hiệu quả là rất quan trọng.</p>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <strong className="text-brand-700">Bước 1: Tiếp nhận & Khảo sát</strong>
                      <p className="m-0 mt-1 text-gray-600">Liên hệ hotline <strong className="text-red-600">{hotline}</strong> chúng tôi đến khảo sát thực tế và định giá ngay.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <strong className="text-brand-700">Bước 2: Báo giá & Thống nhất</strong>
                      <p className="m-0 mt-1 text-gray-600">Nhận báo giá chi tiết, cạnh tranh. Thống nhất và ký hợp đồng rõ ràng.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <strong className="text-brand-700">Bước 3: Tháo dỡ & Vận chuyển</strong>
                      <p className="m-0 mt-1 text-gray-600">Đội ngũ chuyên nghiệp tháo dỡ, đóng gói và vận chuyển an toàn.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <strong className="text-brand-700">Bước 4: Thanh toán & Bàn giao</strong>
                      <p className="m-0 mt-1 text-gray-600">Thanh toán nhanh chóng, 1 lần. Bàn giao mặt bằng sạch sẽ.</p>
                    </div>
                  </div>
                </section>

                {/* ẢNH 3: VẬN CHUYỂN / QUY TRÌNH */}
                <figure className="my-10 text-center">
                  <div className="relative w-full aspect-[16/10] max-w-[700px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-noi-that-khach-san-3.jpeg"
                      alt="Quy trình bốc xếp tháo dỡ nội thất khách sạn chuyên nghiệp"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-red-700 uppercase mb-6">
                    Cam Kết Dịch Vụ Thu Mua Nội Thất Khách Sạn - Trung Kiên
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                    {[
                      { title: "Giá Cao Nhất Thị Trường", desc: "Cam kết cung cấp mức giá tốt nhất cho từng sản phẩm." },
                      { title: "Thanh Toán Nhanh Chóng", desc: "Thanh toán 1 lần duy nhất ngay sau khi thống nhất." },
                      { title: "Thu Mua Toàn Bộ", desc: "Nhận thu mua tất cả các hạng mục, không chọn lọc." },
                      { title: "Tháo Dỡ Chuyên Nghiệp", desc: "Đội ngũ kỹ thuật viên thực hiện an toàn và hiệu quả." },
                      { title: "Vệ Sinh Sạch Sẽ", desc: "Bàn giao mặt bằng thông thoáng và sạch sẽ." },
                      { title: "Phục Vụ 24/7", desc: "Sẵn sàng hỗ trợ khảo sát và tư vấn mọi lúc." }
                    ].map((item, i) => (
                      <li key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col justify-center">
                        <strong className="text-brand-600 uppercase text-sm mb-1">{item.title}</strong>
                        <span className="text-[15px]">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-center font-bold text-lg">
                    Hãy để Trung Kiên đồng hành cùng bạn! <span className="bg-yellow-300 text-red-600 px-2 py-1 rounded">Hotline: {hotline}</span>
                  </p>
                </section>

                {/* ẢNH 4: KHU VỰC SẢNH / ĐỒ MÁY MÓC */}
                <figure className="my-10 text-center">
                  <div className="relative w-full aspect-[4/3] max-w-[700px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-noi-that-khach-san-4.jpg"
                      alt="Trung Kiên thu mua nội thất sảnh và đồ điện máy khách sạn"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                {/* BẢNG GIÁ THAM KHẢO & FAQ (ON-PAGE SEO) */}
                <PriceTable
                  title="Bảng Giá Thanh Lý Nội Thất Khách Sạn Tham Khảo"
                  subtitle="Giá combo nội thất phòng ngủ, minibar và thiết bị sảnh được định giá theo tiêu chuẩn sao của khách sạn. Khảo sát thẩm định giá ngay trong ngày!"
                  items={priceItems}
                />

                <FAQAccordion
                  title="Câu Hỏi Thường Gặp Về Thanh Lý Nội Thất Khách Sạn"
                  faqs={faqs}
                />

                <section className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl mt-12">
                  <h3 className="text-brand-400 text-xl font-black uppercase mb-6 border-b border-gray-700 pb-2">
                    Các Khu Vực Chuyên Nhận Thu Mua Thanh Lý Nội Thất Khách Sạn
                  </h3>
                  <p className="mb-4 text-gray-300">Công ty Trung Kiên hoạt động mạnh mẽ tại nhiều khu vực tại TPHCM cũng như các tỉnh lân cận:</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <strong className="text-yellow-400 block mb-2">📍 Tại TP.HCM:</strong>
                      <p className="text-sm opacity-90 leading-relaxed">Quận 1, Quận 3, Quận 7, Bình Thạnh. Ngoài ra, chúng tôi còn cung cấp dịch vụ tại Quận 2, Quận 4, Quận 5, Quận 6, Quận 8, Quận 9, Quận 10, Quận 11, Quận 12, Gò Vấp, Tân Bình, Tân Phú, Thủ Đức và các huyện Bình Chánh, Nhà Bè, Hóc Môn, Cần Giờ, Củ Chi.</p>
                    </div>
                    <div>
                      <strong className="text-yellow-400 block mb-2">📍 Các Tỉnh Lân Cận:</strong>
                      <ul className="text-sm opacity-90 space-y-1 list-disc pl-4">
                        <li>Đồng Nai</li>
                        <li>Bình Dương</li>
                        <li>Bà Rịa - Vũng Tàu</li>
                        <li>Long An</li>
                        <li>Tiền Giang</li>
                        <li>Tây Ninh</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* THÔNG TIN LIÊN HỆ */}
                <footer className="mt-8 p-8 bg-white border-2 border-brand-600 rounded-3xl shadow-md">
                  <h3 className="text-2xl font-black text-brand-600 uppercase mb-8 border-b pb-2 text-center">THÔNG TIN LIÊN HỆ</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[16px] font-medium text-gray-700">
                    <div className="space-y-4">
                      <p>📍 <strong>CN1:</strong> 271 Bình Long, Phường Bình Hưng Hòa, Quận Bình Tân, TP.HCM</p>
                      <p>📍 <strong>CN2:</strong> 207 Nơ Trang Long, Phường 12, Quận Bình Thạnh, TP.HCM</p>
                      <p>📍 <strong>CN3:</strong> 553 Kha Vạn Cân, Phường Linh Đông, Quận Thủ Đức, TP.HCM</p>
                      <p>📍 <strong>CN4:</strong> 136 Đường Số 10, Phường Tân Quy, Quận 7, TP.HCM</p>
                    </div>
                    <div className="space-y-4 md:border-l md:pl-6 border-gray-100 flex flex-col justify-center">
                      <p className="text-red-600 text-2xl font-black m-0">📞 Hotline: {hotline}</p>
                      <p className="m-0 text-lg">💬 <strong>Zalo Thẩm Định:</strong> 0398.771.444</p>
                      <p className="text-brand-600 font-black m-0 bg-brand-50 inline-block px-3 py-1 rounded">Email: docutrungkien@gmail.com</p>
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