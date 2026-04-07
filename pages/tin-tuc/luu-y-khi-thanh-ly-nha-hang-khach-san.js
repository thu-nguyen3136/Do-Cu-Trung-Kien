import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../../components/Sidebar';

export default function ArticleNhaHangKhachSan() {
  const hotline = "0398.771.444";

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        <title>5 Lưu Ý Quan Trọng Khi Thanh Lý Nhà Hàng Khách Sạn | TRung Kiên</title>
        <meta name="description" content="Thanh lý nhà hàng, khách sạn trọn gói cần lưu ý những gì để tránh mất oan tiền tỷ? Đọc ngay bài viết để biết cách định giá thiết bị bếp, nội thất buồng phòng." />
        <link rel="canonical" href="https://thumuadocutrungkien.com/tin-tuc/luu-y-khi-thanh-ly-nha-hang-khach-san" />
      </Head>

      <main className="flex-grow pb-20">
        {/* ================= BREADCRUMB ================= */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#388e3c] transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link href="/tin-tuc" className="hover:text-[#388e3c] transition-colors">Tin tức</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium line-clamp-1">Lưu ý thanh lý nhà hàng khách sạn</span>
          </div>
        </div>

        {/* ================= MAIN LAYOUT ================= */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">

              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="bg-[#111827] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Kinh Doanh F&B</span>
                <span className="text-gray-500 text-sm">Góc Tư Vấn</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111827] mb-8 leading-tight tracking-tight">
                5 Lưu Ý Sống Còn Khi Thanh Lý Nhà Hàng, Khách Sạn Trọn Gói
              </h1>

              {/* --- ẢNH CHÍNH --- */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-10 shadow-lg">
                <Image
                  src="/thanh-ly-nha-hang-uy-tin.jpg"
                  alt="Kinh nghiệm thanh lý nhà hàng khách sạn trọn gói"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* LỜI MỞ ĐẦU */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-12">
                <p>
                  Thanh lý một quán nước nhỏ đã khó, việc <strong>thanh lý toàn bộ một nhà hàng hay khách sạn</strong> còn phức tạp hơn gấp trăm lần. Hàng loạt tài sản từ hệ thống bếp công nghiệp, bàn ghế, tủ đông, cho đến nội thất hàng chục buồng phòng khách sạn cần được xử lý nhanh chóng để hoàn trả mặt bằng.
                </p>
                <p>
                  Nếu không có kinh nghiệm, chủ đầu tư rất dễ bị các đơn vị thu mua không uy tín ép giá, gây thất thoát tài sản. Dưới đây là 5 lưu ý quan trọng từ <strong className="text-[#388e3c]">TRung Kiên</strong> giúp bạn bảo vệ quyền lợi của mình.
                </p>
              </div>

              {/* SECTION: Nội dung bài viết */}
              <section className="mb-12 space-y-10">
                <div>
                  <h2 className="text-2xl font-black text-[#111827] flex items-center gap-2 mb-4">
                    <span className="bg-[#388e3c] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                    Lên danh sách kiểm kê (Inventory List) chi tiết
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Trước khi gọi đơn vị thu mua, bạn cần nắm rõ mình đang có những gì. Hãy phân loại thành các nhóm: Thiết bị bếp (bếp Á, Âu, tủ đông, tủ mát), Nội thất sảnh (Bàn ghế, quầy lễ tân), Nội thất phòng (Giường, nệm, tủ áo, tivi, máy lạnh). Một danh sách rõ ràng giúp bạn không bị sót đồ và dễ dàng đối chiếu khi báo giá.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-[#111827] flex items-center gap-2 mb-4">
                    <span className="bg-[#388e3c] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                    Không bán lẻ tẻ, hãy ưu tiên "Thanh lý trọn gói"
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Nhiều chủ nhà hàng nghĩ rằng bán lẻ từng món (bán tủ mát cho người này, bán bàn ghế cho người kia) sẽ được giá cao hơn. Thực tế, cách này làm bạn mất quá nhiều thời gian hẹn hứa, và những món đồ "khó nhằn" (như hệ thống hút khói) sẽ bị ế lại không ai mua. Chọn đơn vị <strong>thu mua trọn gói từ A-Z</strong> là giải pháp khôn ngoan nhất.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-[#111827] flex items-center gap-2 mb-4">
                    <span className="bg-[#388e3c] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                    Làm rõ vấn đề "Chi phí tháo dỡ và bốc xếp"
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Tháo dỡ hệ thống máy lạnh trung tâm, cửa nhôm kính, bảng hiệu hay khiêng đồ nội thất từ tầng cao xuống tốn rất nhiều tiền nhân công. Hãy thỏa thuận rõ với bên thu mua xem giá họ đưa ra đã <strong>bao gồm công tháo dỡ và vận chuyển</strong> chưa. Tại TRung Kiên, chúng tôi hoàn toàn miễn phí các khoản này.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-[#111827] flex items-center gap-2 mb-4">
                    <span className="bg-[#388e3c] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                    Cam kết về tiến độ giải phóng mặt bằng
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Đến ngày phải trả mặt bằng nhưng bên thu mua vẫn rề rà chưa dọn xong sẽ khiến bạn bị chủ nhà phạt tiền cọc. Hợp đồng thu mua cần ghi rõ thời gian bắt đầu và kết thúc việc dọn dẹp.
                  </p>
                </div>
              </section>

              {/* INTERNAL LINK / RECOMMENDATION */}
              <div className="mb-12 bg-gray-50 border-2 border-gray-200 p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-[#388e3c] rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">✓</div>
                <div>
                  <h3 className="text-xl font-black text-[#111827] mb-2">Giải Pháp Từ Đồ Cũ TRung Kiên</h3>
                  <p className="text-gray-600 mb-2">TRung Kiên tự hào là đối tác thanh lý nhà hàng, khách sạn uy tín hàng đầu khu vực phía Nam với năng lực xe tải và nhân công mạnh mẽ.</p>
                  <Link href="/thanh-ly-nha-hang" className="text-[#388e3c] font-bold hover:underline">Xem ngay dịch vụ Thu Mua Khách Sạn Trọn Gói →</Link>
                </div>
              </div>

              {/* CTA Cuối bài */}
              <div className="border-t border-gray-100 pt-10 text-center">
                <h3 className="text-2xl font-black text-[#111827] mb-4">Định Giá Khách Sạn Của Bạn Ngay Hôm Nay</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={`tel:${hotline}`} className="bg-[#111827] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#388e3c] transition-all tracking-wider">📞 GỌI {hotline}</a>
                </div>
              </div>

            </article>

            {/* --- CỘT PHẢI: SIDEBAR --- */}
            <aside className="lg:col-span-1 w-full min-w-0 h-fit sticky top-[100px]">
              <Sidebar />
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}