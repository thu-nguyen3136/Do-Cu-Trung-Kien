import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function GioiThieuPage() {
  const hotline = "0398.771.444";

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
        <title>Về Chúng Tôi | Đồ Cũ Trung Kiên - Thu Mua Trọn Gói TPHCM</title>
        <meta name="description" content="Đồ Cũ Trung Kiên với hơn 10 năm kinh nghiệm, chuyên thu mua đồ cũ giá cao tận nơi tại TPHCM. Cam kết không ép giá, dọn dẹp sạch sẽ, thanh toán 100%." />
        <meta name="keywords" content="về đồ cũ Trung Kiên, giới thiệu đồ cũ Trung Kiên, thu mua đồ cũ uy tín" />
        <link rel="canonical" href="https://thumuadocugiacao.net/gioi-thieu" />
      </Head>

      <main className="flex-grow pb-20">

        {/* ================= BREADCRUMB ================= */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#388e3c] transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Giới thiệu</span>
          </div>
        </div>

        {/* ================= MAIN LAYOUT (1 CỘT DUY NHẤT - FULL WIDTH) ================= */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">

          <article className="bg-white p-6 md:p-10 lg:p-14 rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">

            {/* === PHẦN TIÊU ĐỀ CHÍNH === */}
            <div className="mb-10 border-b border-gray-100 pb-8 text-center">
              <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#388e3c]/10 border border-[#388e3c]/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#388e3c] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#388e3c]"></span>
                </span>
                <span className="text-xs font-black tracking-[0.2em] text-[#388e3c] uppercase">
                  Về Đồ Cũ Trung Kiên
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111827] leading-[1.4]">
                CHUYÊN THU MUA <br />
                <span className="text-[#388e3c] relative inline-block my-2">
                  ĐỒ CŨ GIÁ CAO
                  <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#388e3c]/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
                <br /> TẬN NƠI TẠI TPHCM
              </h1>
            </div>

            {/* === PHẦN NỘI DUNG CHI TIẾT (BỐ CỤC 1 CỘT XẾP DỌC) === */}
            <div className="flex flex-col gap-10 mb-16">

              {/* 1. TEXT GIỚI THIỆU */}
              <div className="w-full max-w-4xl mx-auto">
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-justify md:text-center border-l-4 md:border-l-0 md:border-t-4 border-[#388e3c] pl-6 md:pl-0 md:pt-6 italic">
                  Với tâm niệm <strong>"Mua của người chán - Bán cho người cần"</strong>, Đồ Cũ Trung Kiên mang đến giải pháp thanh lý tối ưu nhất. Chúng tôi giúp bạn giải phóng mặt bằng nhanh chóng và thu hồi vốn cao nhất cho các loại nội thất cũ, thiết bị điện lạnh, đồ dùng nhà hàng, quán ăn.
                </p>
              </div>

              {/* 2. HÌNH ẢNH TO BẢN */}
              <div className="w-full relative flex justify-center items-center group">
                <div className="relative w-full aspect-video md:h-[500px] flex items-center justify-center rounded-[30px] overflow-hidden shadow-2xl">
                  <Image
                    src="/anh-gioi-thieu-do-cu-vui-hung.jpg"
                    alt="Về Đồ Cũ Trung Kiên"
                    fill
                    className="object-full transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Badge kinh nghiệm */}
                  <div className="absolute bottom-6 right-6 bg-white p-4 md:p-5 rounded-3xl shadow-xl border border-gray-100 z-10 animate-bounce-slow">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl font-black text-[#388e3c]">10+</span>
                      <div className="h-8 w-[2px] bg-gray-200"></div>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter leading-tight">
                        Năm uy tín<br />thị trường
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. LỢI ÍCH & NÚT BẤM */}
              <div className="w-full max-w-5xl mx-auto mt-4">
                {/* Danh sách 4 lợi ích dàn ngang */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {[
                    { title: "Báo giá siêu tốc", desc: "Chụp hình gửi Zalo báo giá ngay" },
                    { title: "Thu mua tận nơi", desc: "Không ngại xa, có mặt sau 30p" },
                    { title: "Tháo dỡ chuyên nghiệp", desc: "An toàn, sạch sẽ, miễn phí" },
                    { title: "Thanh toán dứt điểm", desc: "Tiền mặt hoặc chuyển khoản" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                      <div className="w-12 h-12 rounded-full bg-[#388e3c]/10 flex items-center justify-center text-[#388e3c]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] text-sm uppercase mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Nút bấm căn giữa */}
                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                  <a href={`tel:${hotline}`} className="bg-[#388e3c] text-white px-10 py-4 rounded-2xl font-black hover:bg-[#2e7d32] transition-all shadow-[0_10px_20px_rgba(136,13,17,0.3)] hover:-translate-y-1 flex items-center gap-3 group">
                    NHẬN BÁO GIÁ NGAY
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <div className="text-center sm:text-left">
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Hotline 24/7</p>
                    <p className="text-xl font-black text-[#111827] underline decoration-[#388e3c]">{hotline}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- ĐƯỜNG PHÂN CÁCH --- */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-16"></div>

            {/* --- PHẦN MỞ RỘNG CONTENT (Tầm nhìn, sứ mệnh, hình ảnh) --- */}
            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="bg-gray-50 p-8 rounded-3xl hover:bg-[#388e3c]/5 transition-colors group">
                  <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">👁️</span>
                  </div>
                  <h3 className="text-xl font-black text-[#111827] uppercase mb-3">Tầm Nhìn</h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">Trở thành doanh nghiệp thu mua và thanh lý đồ cũ uy tín, lớn mạnh nhất khu vực phía Nam, mang lại vòng đời mới cho mọi sản phẩm.</p>
                </div>

                <div className="bg-[#388e3c] p-8 rounded-3xl shadow-lg transform md:-translate-y-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>
                  <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-black text-white uppercase mb-3">Sứ Mệnh</h3>
                  <p className="text-gray-200 leading-relaxed text-[15px]">Giải quyết bài toán thanh lý trọn gói, nhanh gọn cho khách hàng. Hạn chế lãng phí, góp phần bảo vệ môi trường thông qua việc tái sử dụng đồ cũ.</p>
                </div>

                <div className="bg-gray-50 p-8 rounded-3xl hover:bg-[#388e3c]/5 transition-colors group">
                  <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">💎</span>
                  </div>
                  <h3 className="text-xl font-black text-[#111827] uppercase mb-3">Giá Trị Cốt Lõi</h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">Uy tín đặt lên hàng đầu. Trung thực trong định giá. Chuyên nghiệp trong tác phong. Tận tâm trong thái độ phục vụ khách hàng.</p>
                </div>
              </div>
            </section>


            {/* Nút Gọi Ngay cuối bài */}
            <div className="text-center border-t border-gray-100 pt-10">
              <p className="text-xl font-bold text-[#111827] mb-6">Bạn đang cần dọn dẹp mặt bằng? Gọi Trung Kiên ngay!</p>
              <a href={`tel:${hotline}`} className="group inline-flex items-center gap-4 bg-[#111827] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-lg hover:bg-[#388e3c] transition-all shadow-[0_15px_30px_rgba(17,24,39,0.3)] hover:-translate-y-1">
                <span className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">📞</span>
                Gọi Ngay: {hotline}
              </a>
            </div>

          </article>
        </section>
      </main>
    </div>
  );
}