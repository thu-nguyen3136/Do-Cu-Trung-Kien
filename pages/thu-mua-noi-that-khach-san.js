import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThanhLyNhaNghiKhachSanPage() {
  const hotline = "0398.771.444";

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
        <title>Thanh Lý Nhà Nghỉ, Khách Sạn Trọn Gói Giá Cao TPHCM | TRung Kiên</title>
        <meta name="description" content="Đồ Cũ TRung Kiên chuyên thanh lý nhà nghỉ, khách sạn trọn gói từ A-Z. Thu mua nội thất phòng, thiết bị điện lạnh, điện tử giá cao nhất thị trường. Giải phóng mặt bằng siêu tốc 1-2 ngày." />
        <meta name="keywords" content="thanh lý nhà nghỉ, thanh lý khách sạn, thu mua nội thất khách sạn, đồ cũ TRung Kiên, thanh lý thiết bị khách sạn" />
        <link rel="canonical" href="https://thumuadocutrungkien.com/thanh-ly-nha-nghi-khach-san" />
        <meta property="og:title" content="Dịch Vụ Thanh Lý Nhà Nghỉ, Khách Sạn Trọn Gói Giá Cao - TRung Kiên" />
        <meta property="og:description" content="Cần thanh lý toàn bộ khách sạn, nhà nghỉ? TRung Kiên thu mua trọn gói giá cao nhất, tháo dỡ vận chuyển miễn phí, giải phóng mặt bằng siêu tốc." />
        <meta property="og:type" content="article" />
      </Head>

      <main className="flex-grow pb-20">

        {/* ================= BREADCRUMB ================= */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#388e3c] transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Nhà Nghỉ, Khách Sạn</span>
          </div>
        </div>

        {/* ================= MAIN LAYOUT (GRID Layout 4 Cột An Toàn) ================= */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH (Chiếm 3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">

              <h1 className="text-3xl md:text-5xl font-black text-[#111827] uppercase leading-tight tracking-tight mb-4">
                Thanh Lý Khách Sạn, Nhà Nghỉ
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-[#388e3c] mb-8 leading-snug border-l-4 border-[#388e3c] pl-4">
                Thanh Lý Nhà Nghỉ, Khách Sạn Trọn Gói – Dịch Vụ Chuyên Nghiệp, Giá Cao Tại TRung Kiên
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-10 space-y-4">
                <p>
                  Bạn đang sở hữu một <strong className="text-[#111827]">nhà nghỉ</strong> hoặc <strong className="text-[#111827]">khách sạn</strong> nhưng muốn thanh lý toàn bộ do thay đổi mô hình kinh doanh, hết hợp đồng thuê mặt bằng, hoặc đơn giản là không còn nhu cầu vận hành? Việc xử lý hàng trăm tài sản có giá trị như nội thất phòng, thiết bị điện lạnh, máy móc… là một bài toán nan giải.
                </p>
                <p>
                  Thấu hiểu điều đó, <strong className="text-[#388e3c]">TRung Kiên</strong> tự hào là đơn vị hàng đầu cung cấp dịch vụ thanh lý nhà nghỉ, khách sạn trọn gói, mang đến giải pháp nhanh chóng, tối ưu giá trị và chuyên nghiệp nhất thị trường.
                </p>
                <div className="bg-[#388e3c]/5 border border-[#388e3c]/20 p-5 rounded-2xl mt-6 flex items-start gap-4">
                  <svg className="w-6 h-6 text-[#388e3c] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  <p className="text-gray-800 leading-relaxed font-medium">
                    Không chỉ đơn thuần là thu mua tài sản lẻ, TRung Kiên cung cấp giải pháp <strong className="text-[#388e3c] uppercase">thanh lý toàn diện từ A đến Z</strong>, giúp khách hàng giải phóng mặt bằng trong thời gian ngắn nhất với giá trị thu hồi vốn cao nhất.
                  </p>
                </div>
              </div>

              {/* --- ẢNH 1: Tổng quan thanh lý khách sạn --- */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thu-mua-khach-san-nha-nghi.jpg"
                  alt="Dịch vụ thanh lý nhà nghỉ khách sạn trọn gói giá cao Đồ Cũ TRung Kiên"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 text-sm md:text-base text-center font-medium">
                  TRung Kiên thu mua trọn gói toàn bộ nội thất, thiết bị nhà nghỉ, khách sạn
                </div>
              </div>

              {/* SECTION: Các Hạng Mục Thu Mua */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Thu Mua Trọn Gói Nội Thất Trong Khách Sạn
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Chúng tôi nhận thanh lý trọn gói tất cả các hạng mục trong khách sạn, nhà nghỉ bao gồm:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Nội thất phòng",
                      desc: "Giường ngủ các loại (giường đơn, giường đôi, giường king), nệm cao su, nệm lò xo, tủ quần áo, bàn trang điểm, bàn làm việc, ghế sofa, rèm cửa, thảm trải sàn."
                    },
                    {
                      title: "Thiết bị điện lạnh & điện tử",
                      desc: "Máy lạnh (điều hòa) các loại (treo tường, âm trần, tủ đứng), tủ mát, tủ đông, máy nước nóng, tivi, loa đài, minibar, máy sấy tóc."
                    },
                    {
                      title: "Thiết bị vệ sinh",
                      desc: "Bồn tắm, sen tắm, lavabo, kệ đá, gương soi, máy sấy khăn."
                    },
                    {
                      title: "Thiết bị nhà hàng (nếu có)",
                      desc: "Bàn ghế nhà hàng, bộ bát đĩa, dụng cụ nhà bếp công nghiệp, tủ hút mùi, bếp công nghiệp."
                    },
                    {
                      title: "Ngoại thất & hạng mục khác",
                      desc: "Máy phát điện, hệ thống camera an ninh, máy giặt công nghiệp, sảnh đón tiếp, quầy lễ tân."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#388e3c]/50 hover:shadow-md transition-all duration-300 group">
                      <h4 className="font-black text-[#111827] text-[16px] uppercase mb-2 group-hover:text-[#388e3c] transition-colors flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#388e3c]"></span>
                        {item.title}
                      </h4>
                      <p className="text-[15px] text-gray-600 leading-relaxed pl-3.5 border-l border-gray-100">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 2: Nội thất phòng khách sạn --- */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-khach-san-nha-nghi-tron-goi.jpeg"
                  alt="Thu mua nội thất giường tủ, máy lạnh khách sạn cũ"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* SECTION: Quy Trình Thanh Lý Khách Sạn */}
              <section className="mb-12 bg-white border-2 border-gray-100 p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-sm">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#388e3c 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 relative z-10 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Quy Trình Thu Mua Đơn Giản, Chuyên Nghiệp
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                  TRung Kiên vận hành quy trình bài bản, đảm bảo quyền lợi tối đa cho khách hàng và giải phóng mặt bằng siêu tốc:
                </p>

                <div className="flex flex-col gap-6 relative z-10">
                  {[
                    { step: "1", title: "Tiếp nhận thông tin", desc: "Khách hàng liên hệ qua hotline hoặc website, cung cấp địa chỉ và quy mô khách sạn." },
                    { step: "2", title: "Khảo sát thực tế", desc: "Nhân viên chuyên môn cao đến kiểm tra, đánh giá tình trạng, thương hiệu, số lượng từng hạng mục tài sản." },
                    { step: "3", title: "Báo giá cạnh tranh", desc: "Đưa ra bảng báo giá chi tiết, minh bạch, sát với giá trị thị trường. Cam kết không ép giá, không qua trung gian." },
                    { step: "4", title: "Ký hợp đồng & thanh toán", desc: "Thống nhất mức giá, ký hợp đồng pháp lý rõ ràng và thanh toán 100% ngay khi ký." },
                    { step: "5", title: "Tháo dỡ & vận chuyển", desc: "Đội ngũ nhân công lành nghề cùng hệ thống xe tải chuyên dụng tháo dỡ, đóng gói, vận chuyển hoàn toàn miễn phí." }
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

              {/* --- ẢNH 3: Vận chuyển quy mô lớn --- */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-12 shadow-lg group w-full md:w-3/4 mx-auto">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-khach-san-nha-nghi-uy-tin.jpeg"
                  alt="Đội ngũ xe tải TRung Kiên vận chuyển nội thất khách sạn quy mô lớn"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* SECTION: Tại Sao Nên Chọn TRung Kiên */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#388e3c] rounded-full"></span>
                  Tại Sao Nên Chọn TRung Kiên?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Trên thị trường có nhiều đơn vị thu mua, nhưng <strong className="text-[#388e3c]">TRung Kiên</strong> là cái tên được hàng trăm chủ khách sạn, nhà nghỉ tin tưởng nhờ những ưu điểm vượt trội:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { title: "Giá thu mua cao nhất", desc: "Chúng tôi hiểu rõ giá trị của từng thương hiệu lớn (Daikin, Panasonic, Sanaky...) và sẵn sàng trả mức giá cao hơn thị trường." },
                    { title: "Năng lực thực tế lớn", desc: "Sở hữu nhân công đông đảo, xe tải đa dạng (1.25t - 5t), đáp ứng thanh lý mọi quy mô từ nhà nghỉ nhỏ đến khách sạn 3-5 sao." },
                    { title: "Thời gian xử lý siêu tốc", desc: "Hoàn tất thủ tục và giải phóng mặt bằng chỉ trong 1-2 ngày (tùy quy mô), giúp bạn nhanh chóng bàn giao cho chủ đầu tư mới." },
                    { title: "Uy tín – Minh bạch", desc: "Làm việc có hợp đồng pháp lý, quy trình rõ ràng, cam kết không phát sinh bất kỳ khoản phí ngầm nào." }
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-2xl group hover:bg-[#111827] transition-colors duration-300 border border-gray-100 flex flex-col h-full">
                      <h4 className="text-[#111827] text-[17px] font-black uppercase mb-3 group-hover:text-white transition-colors flex items-center gap-2">
                        <svg className="w-6 h-6 text-[#388e3c] group-hover:text-[#4caf50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-[15px] leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 4: Liên hệ --- */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-khach-san-nha-nghi-gia-cao.png"
                  alt="Liên hệ Đồ Cũ TRung Kiên thanh lý khách sạn nhà nghỉ trọn gói"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Nút Gọi Ngay cuối bài */}
              <div className="mt-16 bg-[#111827] rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#388e3c 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-4">Cần Giải Phóng Mặt Bằng Gấp?</h3>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Kết nối ngay với TRung Kiên để được khảo sát và báo giá thanh lý trọn gói khách sạn, nhà nghỉ nhanh nhất!</p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href={`tel:${hotline}`} className="group inline-flex items-center justify-center gap-3 bg-[#388e3c] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-lg hover:bg-[#2e7d32] transition-all shadow-[0_10px_20px_rgba(136,13,17,0.3)] hover:-translate-y-1">
                      <span className="animate-pulse">📞</span> Gọi Hotline: {hotline}
                    </a>
                    <a href={`https://zalo.me/${hotline.replace(/\./g, '')}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 bg-white text-[#111827] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-lg hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1 border border-transparent">
                      Chat Zalo Khảo Sát
                    </a>
                  </div>
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