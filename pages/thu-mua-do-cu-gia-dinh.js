import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThuMuaDoGoCuPage() {
  const hotline = "0398.771.444";

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
        <title>Thu Mua Đồ Gỗ Cũ Giá Cao TPHCM | Dịch Vụ Thanh Lý Uy Tín TRung Kiên</title>
        <meta name="description" content="Đồ Cũ TRung Kiên chuyên thu mua đồ gỗ cũ, thanh lý nội thất gỗ gia đình, văn phòng, nhà hàng, đồ thờ cúng, gỗ mỹ nghệ với giá cao nhất thị trường TPHCM." />
        <meta name="keywords" content="thu mua đồ gỗ cũ, thanh lý đồ gỗ, thu mua nội thất gỗ, thu mua salon gỗ, thu mua đồ thờ gỗ, đồ cũ TRung Kiên" />
        <link rel="canonical" href="https://thumuadocutrungkien.com/thu-mua-do-go-cu" />
        <meta property="og:title" content="Dịch Vụ Thu Mua Đồ Gỗ Cũ Giá Cao Trọn Gói Tại TPHCM - TRung Kiên" />
        <meta property="og:description" content="Cần thanh lý đồ gỗ cũ? TRung Kiên thu mua mọi số lượng các loại gỗ tự nhiên, gỗ công nghiệp, nội thất, đồ thờ cúng với giá cao nhất. Miễn phí vận chuyển." />
        <meta property="og:type" content="article" />
      </Head>

      <main className="flex-grow pb-20">

        {/* ================= BREADCRUMB ================= */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#388e3c] transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Thu Mua Đồ Gỗ Cũ</span>
          </div>
        </div>

        {/* ================= MAIN LAYOUT (GRID Layout 4 Cột An Toàn) ================= */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH (Chiếm 3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">

              <h1 className="text-3xl md:text-5xl font-black text-[#111827] uppercase leading-tight tracking-tight mb-4">
                Thu Mua Đồ Gỗ Cũ
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-[#388e3c] mb-8 leading-snug border-l-4 border-[#388e3c] pl-4">
                Thu Mua Đồ Gỗ Cũ Giá Cao – Dịch Vụ Uy Tín, Chuyên Nghiệp Tại TRung Kiên
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-10 space-y-4">
                <p>
                  Bạn đang sở hữu những món <strong className="text-[#111827]">đồ gỗ cũ</strong> không còn phù hợp với không gian sống? Bạn cần thanh lý nội thất gỗ để chuyển nhà, sửa chữa, hay thay đổi mô hình kinh doanh? Việc tìm kiếm một đơn vị thu mua đồ gỗ cũ uy tín, giá cao và xử lý nhanh gọn luôn là bài toán khó.
                </p>
                <p>
                  Thấu hiểu điều đó, <strong className="text-[#388e3c]">TRung Kiên</strong> tự hào là địa chỉ tin cậy hàng đầu, chuyên thu mua tất cả các loại đồ gỗ cũ với quy trình chuyên nghiệp, minh bạch và mức giá cạnh tranh nhất thị trường.
                </p>
                <p className="border-l-4 border-gray-200 pl-6 italic font-medium mt-4 bg-gray-50 py-3 rounded-r-xl">
                  Không chỉ đơn thuần là thu mua, TRung Kiên mang đến giải pháp thanh lý nội thất toàn diện, giúp khách hàng giải phóng mặt bằng nhanh chóng, thu hồi vốn tối đa mà không phải lo lắng về việc vận chuyển hay tìm kiếm người mua lẻ.
                </p>
              </div>

              {/* --- ẢNH 1: Tổng quan đồ gỗ --- */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thu-mua-do-go.jpg"
                  alt="Dịch vụ thu mua đồ gỗ cũ giá cao trọn gói Đồ Cũ TRung Kiên"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2000&auto=format&fit=crop"; }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 text-sm md:text-base text-center font-medium">
                  TRung Kiên thu mua mọi mặt hàng đồ gỗ tự nhiên, gỗ công nghiệp giá cao
                </div>
              </div>

              {/* SECTION: Đa dạng các loại đồ gỗ */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Thu Mua Đa Dạng Các Loại Đồ Gỗ Cũ
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Chúng tôi nhận thu mua tất cả các dòng sản phẩm từ gỗ với nhiều chất liệu, kiểu dáng và mục đích sử dụng khác nhau:
                </p>

                <div className="bg-[#388e3c]/5 border border-[#388e3c]/20 p-5 rounded-2xl mb-8 flex items-start gap-4">
                  <svg className="w-6 h-6 text-[#388e3c] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  <p className="text-gray-800 leading-relaxed font-medium">
                    <strong className="text-[#388e3c]">Về chất liệu gỗ:</strong> TRung Kiên thu mua cả gỗ tự nhiên cao cấp (Gụ, Hương, Sồi, Óc Chó, Căm Xe, Trắc, Mun, Mít, Xoan, Dổi...) lẫn các loại gỗ công nghiệp (MDF, MFC, HDF, Plywood, ván ép) với mức giá phù hợp theo từng loại.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Nội Thất Gia Đình",
                      desc: "Phòng khách (salon gỗ 4-8 ghế, sofa gỗ, kệ tivi, tủ rượu, bình phong). Phòng ngủ (giường đơn/đôi/tầng, tủ quần áo, bàn trang điểm). Phòng ăn (bộ bàn ăn, tủ bếp, kệ bếp). Phòng làm việc (bàn, giá sách)."
                    },
                    {
                      title: "Đồ Thờ Cúng",
                      desc: "Thu mua với sự trân trọng đặc biệt: tủ thờ treo tường, tủ thờ đứng, bàn thờ gia tiên, sập thờ, khám thờ, long ngai bài vị, bát hương gỗ và các vật phẩm thờ tự khác."
                    },
                    {
                      title: "Văn Phòng & Công Ty",
                      desc: "Bàn làm việc giám đốc, bàn nhân viên, bàn họp, ghế xoay, ghế họp, tủ tài liệu, kệ sách và vách ngăn gỗ."
                    },
                    {
                      title: "Kinh Doanh & Dịch Vụ",
                      desc: "Bộ bàn ghế cafe đôi, bàn ghế quán ăn, ghế bar, bàn tròn, bàn dài, quầy bar gỗ và kệ trưng bày cho nhà hàng, khách sạn."
                    },
                    {
                      title: "Đồ Gỗ Mỹ Nghệ & Cổ Vật",
                      desc: "Tượng gỗ, tranh gỗ, bình phong, sập gụ, tủ chè, bàn trà cổ, ghế thư giãn cổ điển – những sản phẩm có giá trị nghệ thuật và lịch sử."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#388e3c]/30 hover:bg-white transition-all duration-300 group">
                      <h4 className="font-black text-[#111827] text-[17px] uppercase mb-3 group-hover:text-[#388e3c] transition-colors flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#388e3c]"></span>
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 2: Phân loại đồ gỗ --- */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thu-mua-do-go-cu-tan-nha.png"
                  alt="Thu mua salon gỗ, bàn ghế phòng khách cũ giá cao"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"

                />
              </div>

              {/* SECTION: Quy Trình Thu Mua */}
              <section className="mb-12 bg-white border-2 border-gray-100 p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-sm">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#388e3c 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 relative z-10 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Quy Trình Thu Mua Chuyên Nghiệp, Nhanh Gọn
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                  TRung Kiên xây dựng quy trình làm việc bài bản, đảm bảo quyền lợi tối đa và sự hài lòng tuyệt đối cho khách hàng:
                </p>

                <div className="flex flex-col gap-6 relative z-10">
                  {[
                    { step: "1", title: "Tiếp nhận thông tin", desc: "Khách hàng liên hệ qua hotline, Zalo cung cấp hình ảnh, số lượng, chất liệu. Chúng tôi xử lý ngay lập tức." },
                    { step: "2", title: "Khảo sát & Định giá", desc: "Nhân viên chuyên môn cao sẽ đến kiểm tra thực tế. Thời gian khảo sát chỉ từ 30-60 phút nội thành." },
                    { step: "3", title: "Báo giá cạnh tranh", desc: "Đưa ra mức giá thu mua hợp lý, cao nhất thị trường. Cam kết không ép giá, không qua trung gian." },
                    { step: "4", title: "Thỏa thuận & Thanh toán", desc: "Sau khi thống nhất, thanh toán 100% ngay tại thời điểm thỏa thuận bằng tiền mặt hoặc chuyển khoản." },
                    { step: "5", title: "Vận chuyển miễn phí", desc: "Đội ngũ lành nghề cùng xe chuyên dụng sẽ tháo dỡ, bốc xếp và vận chuyển miễn phí, hoàn thành trong ngày." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group items-start md:items-center">
                      <div className="mt-1 md:mt-0 w-12 h-12 bg-[#388e3c] text-white rounded-full flex items-center justify-center text-xl font-black flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(136,13,17,0.4)] transition-all duration-300">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] text-[17px] uppercase group-hover:text-[#388e3c] transition-colors">{item.title}</h4>
                        <p className="text-[15px] text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION: Lý Do Chọn TRung Kiên */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Tại Sao Nên Chọn TRung Kiên Để Thu Mua Đồ Gỗ Cũ?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Trên thị trường có nhiều đơn vị thu mua đồ cũ, nhưng <strong className="text-[#388e3c]">TRung Kiên</strong> là cái tên được hàng ngàn khách hàng cá nhân, công ty, nhà hàng, cơ sở thờ tự tin tưởng nhờ những ưu điểm vượt trội:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { title: "Giá thu mua cao nhất", desc: "Kiến thức chuyên sâu về gỗ giúp TRung Kiên luôn định giá và trả mức giá cạnh tranh nhất trên thị trường." },
                    { title: "Thu mua mọi số lượng", desc: "Từ vài món đồ gia đình đến số lượng lớn của văn phòng, nhà hàng, khách sạn hay xưởng sản xuất." },
                    { title: "Năng lực thực tế lớn", desc: "Sở hữu đội ngũ nhân công đông đảo, hệ thống xe tải đa dạng từ 1.25 tấn đến 8 tấn, kho bãi rộng khắp." },
                    { title: "Uy tín và minh bạch", desc: "Mọi giao dịch đều rõ ràng, làm việc chuyên nghiệp, không phát sinh khoản phí ngầm nào." },
                    { title: "Thời gian xử lý siêu tốc", desc: "Khảo sát, báo giá, thanh lý và vận chuyển hoàn tất nhanh gọn, thường chỉ trong vòng 24 giờ." }
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 p-5 rounded-2xl group hover:bg-[#111827] transition-colors duration-300 border border-gray-100">
                      <h4 className="text-[#111827] text-[16px] font-black uppercase mb-2 group-hover:text-white transition-colors flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#388e3c] group-hover:text-[#4caf50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-[14px] leading-relaxed group-hover:text-gray-300 transition-colors pl-7">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 4: Liên hệ báo giá đồ gỗ --- */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thu-mua-do-go-cu-uy-tin.png"
                  alt="Liên hệ Đồ Cũ TRung Kiên thanh lý đồ gỗ cũ giá cao"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"

                />
              </div>

              {/* SECTION: Các Trường Hợp Cần Thu Mua */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Các Trường Hợp Khách Hàng Cần Thanh Lý
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Dịch vụ của TRung Kiên phù hợp với nhiều nhu cầu thực tế khác nhau của khách hàng:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { role: "Gia đình", use: "Chuyển nhà, sửa chữa, nâng cấp nội thất mới, hoặc thừa kế tài sản không dùng đến." },
                    { role: "Văn phòng & Công ty", use: "Chuyển văn phòng, thanh lý tài sản cũ, thay đổi nội thất, hay giải thể doanh nghiệp." },
                    { role: "Nhà hàng, Khách sạn", use: "Đổi mới không gian, thay đổi mô hình, hết hợp đồng mặt bằng, hoặc cải tạo cơ sở." },
                    { role: "Trường học, Giáo dục", use: "Nâng cấp cơ sở vật chất, thay mới bàn ghế, tủ, kệ cũ phục vụ giảng dạy." },
                    { role: "Cơ sở thờ tự", use: "Chùa, nhà thờ họ, đình đền có nhu cầu thay mới đồ thờ, TRung Kiên thu mua với sự trân trọng." },
                    { role: "Xưởng sản xuất", use: "Thanh lý hàng tồn kho, sản phẩm lỗi, phế liệu gỗ với quy trình nhanh gọn giá cao." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:border-[#388e3c]/40 transition-colors">
                      <strong className="text-[#388e3c] block mb-2 uppercase text-[15px]">{item.role}</strong>
                      <p className="text-gray-600 text-[14px] leading-relaxed">{item.use}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Nút Gọi Ngay cuối bài */}
              <div className="mt-16 text-center border-t border-gray-100 pt-12">
                <p className="text-xl font-bold text-[#111827] mb-6">Bạn cần thanh lý đồ gỗ cũ? Kết nối ngay với TRung Kiên!</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href={`tel:${hotline}`} className="group inline-flex items-center gap-4 bg-[#111827] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[16px] hover:bg-[#388e3c] transition-all shadow-[0_10px_20px_rgba(17,24,39,0.2)] hover:-translate-y-1 w-full sm:w-auto justify-center">
                    <span className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">📞</span>
                    {hotline}
                  </a>
                  <a href={`https://zalo.me/${hotline.replace(/\./g, '')}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 bg-white border-2 border-gray-200 text-[#111827] px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[16px] hover:border-[#388e3c] hover:text-[#388e3c] transition-all w-full sm:w-auto justify-center">
                    Chat Zalo Gửi Hình
                  </a>
                </div>
              </div>

            </article>

            {/* --- CỘT PHẢI: SIDEBAR (Chiếm 1/4 trên Desktop) --- */}
            <aside className="lg:col-span-1 w-full min-w-0 h-fit sticky top-[100px]">
              <Sidebar />
            </aside>

          </div>
        </section>

      </main>


    </div>
  );
}