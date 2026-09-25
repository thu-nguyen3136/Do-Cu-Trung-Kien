import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '../components/SchemaMarkup';
import FAQAccordion from '../components/FAQAccordion';
import PriceTable from '../components/PriceTable';
import SEOHead from '../components/SEOHead';

export default function ThanhLyQuanAnPage() {
  const hotline = "0398.771.444";

  const breadcrumbs = [
    { name: 'Trang chủ', url: 'https://thumuadocutrungkien.com/' },
    { name: 'Thanh Lý Quán Ăn Tại TPHCM', url: 'https://thumuadocutrungkien.com/thanh-ly-quan-an' }
  ];

  const faqs = [
    {
      question: "Đồ Cũ Trung Kiên thu mua những đồ dùng nào của quán ăn?",
      answer: "Chúng tôi thu mua trọn gói bàn ghế gỗ, bàn ghế inox, xoong nồi, bếp khè gas, tủ mát, tủ đông, quầy thu ngân và toàn bộ dụng cụ nhà bếp quán ăn."
    },
    {
      question: "Sau khi gọi bao lâu thì có người đến định giá?",
      answer: "Chúng tôi có mặt chỉ sau 30 phút tại các quận huyện TPHCM để kiểm tra tình trạng hàng và đưa ra mức giá thu mua cao nhất thị trường."
    },
    {
      question: "Quán ăn ở xa hoặc hẻm nhỏ có nhận thu mua không?",
      answer: "Có. Đồ Cũ Trung Kiên có đủ các loại xe tải từ 500kg đến 2.5 tấn luồn lách được vào mọi ngõ hẻm, không ngại xa xôi."
    }
  ];

  const priceItems = [
    { name: "Bàn ghế gỗ quán ăn, quán cơm (Bàn + 4 ghế)", unit: "Bộ", priceRange: "600.000 - 2.800.000 đ", note: "Gỗ cao su, gỗ thông, chân sắt" },
    { name: "Bàn ghế inox quán ăn (Bàn inox chữ nhật + 6 ghế đôn)", unit: "Bộ", priceRange: "700.000 - 3.200.000 đ", note: "Inox 201/304 sáng bóng" },
    { name: "Bếp khè gas công nghiệp (Gado, Wonderful...)", unit: "Họng", priceRange: "300.000 - 1.200.000 đ", note: "Kèm dây van gas điều áp" },
    { name: "Tủ cơm công nghiệp, nồi nấu phở/hầm xương điện", unit: "Chiếc", priceRange: "2.000.000 - 8.500.000 đ", note: "30L - 100L inox cao cấp" },
    { name: "Tủ mát, tủ đông trữ thực phẩm quán ăn", unit: "Chiếc", priceRange: "2.500.000 - 14.000.000 đ", note: "Sanaky, Alaska, Darling" },
    { name: "Chậu rửa inox, kệ chén inox, bàn chặt thực phẩm", unit: "Chiếc", priceRange: "800.000 - 4.500.000 đ", note: "Inox 304 không gỉ" },
    { name: "Trọn gói chén, đĩa sứ/melamine, xoong nồi, muỗng đũa", unit: "Lô/Trọn gói", priceRange: "1.000.000 - 10.000.000 đ", note: "Định giá theo số lượng" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <SEOHead
        title="Thanh Lý Quán Ăn Giá Cao TPHCM | Thu Mua Trọn Gói 30 Phút"
        description="Dịch vụ thanh lý quán ăn, quán cơm giá cao nhất TPHCM. Thu mua bàn ghế, bếp khè, tủ mát, đồ inox. Tự tháo dỡ, dọn dẹp sạch sẽ. Gọi ngay: 0398.771.444."
        keywords="Thanh Lý Quán Ăn Tại TPHCM, thu mua đồ dùng quán ăn, thanh lý quán ăn trọn gói, thu mua thiết bị quán ăn, đồ cũ trung kiên"
        canonical="https://thumuadocutrungkien.com/thanh-ly-quan-an"
        ogImage="/thanh-ly-quan-an.jpg"
      />
      <Head>
        <BreadcrumbSchema items={breadcrumbs} />
        <ServiceSchema
          name="Thanh Lý Quán Ăn Tại TPHCM Trọn Gói Giá Cao"
          description="Dịch vụ thu mua đồ dùng quán ăn, quán cơm, quán nhậu trọn gói giá cao nhất thị trường TPHCM."
          url="https://thumuadocutrungkien.com/thanh-ly-quan-an"
          image="https://thumuadocutrungkien.com/thanh-ly-quan-an.jpg"
        />
        <FAQSchema faqs={faqs} />
      </Head>

      <main className="flex-grow">
        {/* Breadcrumb - Cực kỳ tốt cho SEO điều hướng */}
        <div className="bg-white border-b border-gray-100 py-3">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Quán Ăn Tại TPHCM</span>
          </div>
        </div>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* --- CỘT TRÁI: NỘI DUNG --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">

              {/* TIÊU ĐỀ GỐC (Chuẩn H1) */}
              <h1 className="text-2xl md:text-3xl font-black text-brand-600 uppercase mb-8 leading-tight">
                Dịch vụ Thanh Lý Quán Ăn Trọn Gói - thu mua đồ dùng quán ăn, thu mua quán ăn trọn gói giá cao tại HCM
              </h1>

              <div className="prose prose-lg max-w-none text-gray-700 text-justify space-y-6">

                {/* TEXT GỐC 1 */}
                <p>
                  Hệ thống kinh doanh quán ăn – <Link href="/thanh-ly-quan-nhau" className="text-brand-600 font-semibold hover:underline">quán nhậu</Link> của bạn đang chuyển đổi hoặc bạn muốn nâng cấp sang <Link href="/thanh-ly-nha-hang" className="text-brand-600 font-semibold hover:underline">mô hình nhà hàng</Link>, <Link href="/thanh-ly-quan-pho" className="text-brand-600 font-semibold hover:underline">quán phở</Link> mới. Bạn cần thanh lý toàn bộ đồ dùng cũ như <Link href="/thu-mua-do-inox-cu" className="text-brand-600 font-semibold hover:underline">đồ inox quán ăn</Link>, <Link href="/thu-mua-tu-dong-tu-mat" className="text-brand-600 font-semibold hover:underline">tủ đông tủ mát</Link> và bàn ghế để thu hồi vốn nhanh nhất.
                </p>

                {/* TEXT GỐC 2 (Đoạn quan trọng) */}
                <div className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-600 shadow-sm">
                  <p className="m-0 leading-relaxed font-medium">
                    Đừng ngần ngại , Hãy <strong className="text-brand-700">Liên Hệ ngay với Dịch Vụ Thanh Lý Quán Ăn Trọn Gói Trung Kiên</strong> qua Hotline: <span className="text-red-600 font-black text-2xl animate-pulse">{hotline}</span>   Chúng tôi không chỉ mang đến bạn mức giá cao nhất Tp.HCM về dịch vụ thu mua quán ăn, mua đồ dùng quán ăn, nhà hàng mà còn đưa ra những giải pháp tối ưu nhất để đảm bảo bạn tiết kiệm chi phí tối đa cho doanh nghiệp của mình.
                  </p>
                </div>

                {/* HÌNH ẢNH GỐC 1 */}
                <figure className="my-10">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-quan-an-1.jpg"
                      alt="Thanh lý quán ăn trọn gói tại TPHCM giá cao"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-center mt-3 text-sm italic text-gray-500">Thu mua đồ dùng quán ăn tận nơi, khảo sát nhanh chóng</figcaption>
                </figure>

                {/* TEXT GỐC 3 */}
                <h2 className="text-xl md:text-2xl font-bold text-red-600 uppercase">
                  Dịch Vụ Thanh Lý Quán Ăn Chuyên Nghiệp Tại TPHCM
                </h2>
                <p>
                  <Link href="/" className="text-brand-600 font-bold hover:underline">Đồ Cũ Trung Kiên</Link> là địa chỉ tin cậy hàng đầu trong lĩnh vực <strong>thanh lý quán ăn tại TPHCM</strong>. Chúng tôi cung cấp dịch vụ thanh lý trọn gói, giúp khách hàng tối ưu hóa giá trị từ thiết bị và nội thất quán ăn không còn sử dụng...
                </p>

                {/* HÌNH ẢNH GỐC 2 */}
                <figure className="my-10">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-quan-an-2.jpg"
                      alt="Dịch vụ thu mua quán ăn của Trung Kiên"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                {/* TEXT GỐC 4 (Lý do chọn) */}
                <h2 className="text-xl md:text-2xl font-bold text-red-600 uppercase">
                  Tại Sao Nên Chọn Dịch Vụ Thu Mua Quán Ăn Của Trung Kiên?
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                  {["Kinh Nghiệm Dày Dạn", "Giá Trị Hợp Lý", "Dịch Vụ Trọn Gói", "Thái Độ Chuyên Nghiệp", "Quy Trình Nhanh Chóng", "Bảo Mật Thông Tin"].map((item, i) => (
                    <li key={i} className="bg-gray-50 p-3 rounded-lg border-l-2 border-brand-500 font-bold">{item}</li>
                  ))}
                </ul>

                {/* BẢNG GIÁ THAM KHẢO & FAQ (ON-PAGE SEO) */}
                <PriceTable
                  title="Bảng Giá Thanh Lý Quán Ăn Tham Khảo TPHCM"
                  subtitle="Giá thu mua có thể thay đổi tùy tình trạng thiết bị và số lượng. Trung Kiên cam kết định giá công khai, không ép giá!"
                  items={priceItems}
                />

                <FAQAccordion
                  title="Câu Hỏi Thường Gặp Khi Thanh Lý Quán Ăn"
                  faqs={faqs}
                />

                {/* BỔ SUNG SEO: KHU VỰC THU MUA (CỰC KỲ QUAN TRỌNG ĐỂ LÊN TOP QUẬN HUYỆN) */}
                <section className="mt-12 bg-gray-900 text-white p-8 rounded-3xl shadow-xl">
                  <h3 className="text-brand-400 text-xl font-black uppercase mb-6 border-b border-gray-700 pb-2">
                    Khu vực chuyên thu mua quán ăn tại TP.HCM
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-[14px] opacity-90">
                    <p className="flex items-center gap-2"><span className="text-brand-500">✔</span> Thanh lý quán ăn Quận 1</p>
                    <p className="flex items-center gap-2"><span className="text-brand-500">✔</span> Thanh lý quán ăn Quận 2</p>
                    <p className="flex items-center gap-2"><span className="text-brand-500">✔</span> Thanh lý quán ăn Quận 3</p>
                    <p className="flex items-center gap-2"><span className="text-brand-500">✔</span> Thanh lý quán ăn Quận 7</p>
                    <p className="flex items-center gap-2"><span className="text-brand-500">✔</span> Thanh lý quán ăn Gò Vấp</p>
                    <p className="flex items-center gap-2"><span className="text-brand-500">✔</span> Thanh lý quán ăn Tân Bình</p>
                    <p className="flex items-center gap-2"><span className="text-brand-500">✔</span> Thu mua quán ăn Bình Dương</p>
                    <p className="flex items-center gap-2"><span className="text-brand-500">✔</span> Thu mua quán ăn Đồng Nai</p>
                    <p className="flex items-center gap-2"><span className="text-brand-500">✔</span> Thu mua quán ăn Long An</p>
                  </div>
                  <p className="mt-6 text-sm italic text-gray-400">
                    Phục vụ tận nơi tại tất cả các quận huyện TPHCM và các tỉnh lân cận 24/7.
                  </p>
                </section>
                {/* HÌNH ẢNH GỐC 2 */}
                <figure className="my-10">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thanh-ly-quan-an-3.jpeg"
                      alt="Dịch vụ thu mua quán ăn của Trung Kiên"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                {/* HỆ THỐNG ĐỊA CHỈ GỐC */}
                <footer className="mt-12 p-8 bg-white border-2 border-brand-600 rounded-2xl shadow-md">
                  <h3 className="text-xl font-bold mb-6 text-brand-600 uppercase border-b pb-2">THU MUA ĐỒ CŨ TRUNG KIÊN</h3>
                  <ul className="list-none p-0 space-y-4">
                    <li className="flex gap-2">📍 <span><strong>Địa Chỉ 1:</strong> 271 Bình Long, Phường Bình Hưng Hòa, Quận Bình Tân, TP.HCM</span></li>
                    <li className="flex gap-2">📍 <span><strong>Địa Chỉ 2:</strong> 207 Nơ Trang Long, Phường 12, Quận Bình Thạnh, TP.HCM</span></li>
                    <li className="flex gap-2">📍 <span><strong>Địa Chỉ 3:</strong> 553 Kha Vạn Cân, Phường Linh Đông, Quận Thủ Đức, TPHCM</span></li>
                    <li className="flex gap-2">📍 <span><strong>Địa Chỉ 4:</strong> 136 Đường Số 10, Phường Tân Quy, Quận 7, TPHCM</span></li>
                    <li className="flex gap-2 text-red-600 text-lg">📞 <span><strong>Hotline:</strong> {hotline} - Trung Kiên</span></li>
                  </ul>
                </footer>

              </div>
            </article>

            {/* --- CỘT PHẢI: SIDEBAR --- */}
            <aside className="lg:col-span-1">
              <Sidebar />
            </aside>

          </div>
        </section>
      </main>
    </div>
  );
}