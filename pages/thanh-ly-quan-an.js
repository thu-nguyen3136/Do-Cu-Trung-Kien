import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThanhLyQuanAnPage() {
  const hotline = "0398.771.444";

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO NÂNG CAO --- */}
        <title>Thanh Lý Quán Ăn Tại TPHCM Trọn Gói Giá Cao | Đồ Cũ Trung Kiên</title>
        <meta name="description" content="Dịch vụ Thanh Lý Quán Ăn Trọn Gói - thu mua đồ dùng quán ăn, nhà hàng giá cao nhất TPHCM. Cam kết khảo sát nhanh, thu mua tận nơi, giá cao hơn thị trường 20%." />
        <meta name="keywords" content="Thanh Lý Quán Ăn Tại TPHCM, thu mua đồ dùng quán ăn, thanh lý quán ăn trọn gói, thu mua thiết bị quán ăn, đồ cũ trung kiên" />
        <link rel="canonical" href="https://docutrungkien.com/thu-mua-do-cu/thanh-ly-quan-an-tai-tphcm" />

        {/* Schema Markup: Giúp Google hiển thị thông tin doanh nghiệp đẹp hơn */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Thanh Lý Quán Ăn Tại TPHCM",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Đồ Cũ Trung Kiên",
              "address": "271 Bình Long, Phường Bình Hưng Hòa, Quận Bình Tân, TP.HCM",
              "telephone": "0398.771.444"
            },
            "areaServed": "Ho Chi Minh City",
            "description": "Thu mua đồ dùng quán ăn, quán nhậu trọn gói giá cao nhất thị trường."
          })}
        </script>
      </Head>

      <main className="flex-grow">
        {/* Breadcrumb - Cực kỳ tốt cho SEO điều hướng */}
        <div className="bg-white border-b border-gray-100 py-3">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-600">Trang chủ</Link>
            <span className="mx-2">/</span>
            <Link href="/thu-mua-do-cu" className="hover:text-brand-600">Thu Mua Đồ Cũ</Link>
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
                  Hệ thống kinh doanh quán ăn – quán nhậu của bạn quá phát triển. Bạn muốn mua sắm những đồ mới nhất để phục vụ thực khách chủa mình và bạn muốn thanh lý lại đồ dùng đã cũ.
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
                  <strong>Đồ Cũ Trung Kiên</strong> là địa chỉ tin cậy hàng đầu trong lĩnh vực <Link href="/" className="text-brand-600 font-bold hover:underline">thanh lý quán ăn tại TPHCM</Link>. Chúng tôi cung cấp dịch vụ thanh lý trọn gói, giúp khách hàng tối ưu hóa giá trị từ thiết bị và nội thất quán ăn không còn sử dụng...
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
                  <h5 className="text-xl font-bold mb-6 text-brand-600 uppercase border-b pb-2">THU MUA ĐỒ CŨ TRUNG KIÊN</h5>
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