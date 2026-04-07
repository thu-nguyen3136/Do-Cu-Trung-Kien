import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

function Counter({ end, duration = 1500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function Home() {
  const [currentReviewSlide, setCurrentReviewSlide] = useState(0);
  const [reviewsPerSlide, setReviewsPerSlide] = useState(3);
  const [mounted, setMounted] = useState(false);

  const serviceCategories = [
    {
      id: 'do-cu',
      mainTitle: 'THU MUA', // Phần màu đen #111827
      highlightTitle: 'ĐỒ CŨ', // Phần màu vàng #2e7d32
      description: 'Chuyên thu mua các loại đồ cũ với giá cao, tháo dỡ tận nơi chuyên nghiệp.',
      services: [
        { id: 1, title: 'Thanh Lý Quán Cafe', image: '/thanh-ly-quan-cafe.jpg', link: '/thanh-ly-quan-cafe' },
        { id: 2, title: 'Thanh Lý Quán Ăn', image: '/thanh-ly-quan-an.jpg', link: '/thanh-ly-quan-an' },
        { id: 3, title: 'Thanh Lý Quán Nhậu', image: '/thanh-ly-quan-nhau.jpg', link: '/thanh-ly-quan-nhau' },
        { id: 4, title: 'Thanh Lý Nhà Hàng', image: '/thanh-ly-nha-hang.jpg', link: '/thanh-ly-nha-hang' },
        { id: 5, title: 'Thanh Lý Quán Phở', image: '/thanh-ly-quan-pho.jpg', link: '/thanh-ly-quan-pho' },
        { id: 6, title: 'Thanh Lý Quán Trà Sữa', image: '/thanh-ly-quan-tra-sua.jpg', link: '/thanh-ly-quan-tra-sua' },
        { id: 7, title: 'Thu Mua Tủ Đông, Tủ Mát', image: '/thu-mua-tu-dong-cu.jpg', link: '/thu-mua-tu-dong-tu-mat' },
        { id: 8, title: 'Thu Mua Đồ Inox Cũ', image: '/thu-mua-do-inox.jpg', link: '/thu-mua-do-inox-cu' },
        { id: 9, title: 'Thu mua đồ cũ gia đình', image: '/thu-mua-do-cu-gia-dinh.jpg', link: '/thu-mua-do-cu-gia-dinh' },
        { id: 10, title: 'Thu Mua Nội Thất Khách Sạn', image: '/thanh-ly-noi-that-khach-san.jpg', link: '/thu-mua-noi-that-khach-san' },
      ]
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Anh Toàn (Quận 1)',
      role: 'Chủ chuỗi nhà hàng',
      rating: 5,
      avatar: '/nguyen-van-toan.jpg',
      comment: 'Trung Kiên thu mua cực kỳ nhanh gọn. Gọi 30 phút sau có mặt khảo sát, chốt giá và dọn dẹp mặt bằng sạch sẽ ngay trong đêm. Rất chuyên nghiệp!'
    },
    {
      id: 2,
      name: 'Chị Oanh (Gò Vấp)',
      role: 'Kinh doanh Khách Sạn',
      rating: 5,
      avatar: '/tran-hoang-oanh.jpg',
      comment: 'Tôi đã thanh lý hệ thống phòng khách sạn cũ, giá Trung Kiên đưa ra kịch kim, cao hơn các bên khác báo giá đến 20-30%. Thanh toán tiền mặt tại chỗ.'
    },
    {
      id: 3,
      name: 'Anh Việt (Hóc Môn)',
      role: 'Chủ xưởng gỗ',
      rating: 5,
      avatar: '/le-hoang-viet.jpg',
      comment: 'Bán hết mớ cửa gỗ ngỡ bỏ đi mà thu được số tiền lớn. Đội thợ tháo dỡ lễ phép, không làm ồn hay ảnh hưởng hàng xóm. Chấm 10 điểm!'
    },
    {
      id: 4,
      name: 'Anh Bảo (Thủ Đức)',
      role: 'Nhà Thầu',
      rating: 5,
      avatar: '/vo-thanh-bao.jpg',
      comment: 'Làm việc uy tín, cần thanh lý xác nhà cấp 4 cũ, gọi Trung Kiên hỗ trợ từ A-Z. Rất khỏe, không phải động tay vào việc gì.'
    },
    {
      id: 5,
      name: 'Chị Nhi (Quận 7)',
      role: 'Chủ Quán Ăn Gia Đình',
      rating: 5,
      avatar: '/luu-ngoc-nhi.jpg',
      comment: 'Thanh lý hệ thống bàn ghế inox, bếp nướng nhanh gọn lẹ. Giá Trung Kiên mua lại làm tôi rất bất ngờ vì cao hơn kỳ vọng. Rất ưng ý!'
    },
    {
      id: 6,
      name: 'Chị Nguyệt (Bình Thạnh)',
      role: 'Quản Lý Thu Mua',
      rating: 5,
      avatar: '/pham-thu-nguyet.jpg',
      comment: 'Hợp tác với Đồ Cũ Trung Kiên nhiều năm nay. Đội bốc xếp khỏe, có xe tải riêng nên việc chở hàng cồng kềnh như cửa sắt, tủ gỗ cực kỳ suôn sẻ.'
    }
  ];

  const totalReviewSlides = Math.max(1, Math.ceil(reviews.length / reviewsPerSlide));

  useEffect(() => {
    setMounted(true);
    const updateReviews = () => {
      if (window.innerWidth < 768) setReviewsPerSlide(1);
      else if (window.innerWidth < 1024) setReviewsPerSlide(2);
      else setReviewsPerSlide(3);
    };
    updateReviews();
    window.addEventListener("resize", updateReviews);
    return () => window.removeEventListener("resize", updateReviews);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setCurrentReviewSlide((prev) => (prev + 1) % totalReviewSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [mounted, totalReviewSlides]);

  const getVisibleReviews = () => {
    if (!mounted) return reviews.slice(0, 3);
    const start = currentReviewSlide * reviewsPerSlide;
    return reviews.slice(start, start + reviewsPerSlide);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Đồ Cũ Trung Kiên",
    "image": "https://thumuadocutrungkien.com/logo-viet-anh.png",
    "@id": "https://thumuadocutrungkien.com/",
    "url": "https://thumuadocutrungkien.com/",
    "telephone": "0398771444",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "271 Bình Long, Phường Bình Hưng Hòa",
      "addressLocality": "Bình Tân",
      "addressRegion": "Hồ Chí Minh",
      "postalCode": "700000",
      "addressCountry": "VN"
    },
    "description": "Chuyên thu mua đồ cũ, thu mua đồ gỗ, cửa cũ, thanh lý nhà hàng khách sạn giá cao tận nơi tại TP.HCM và các tỉnh lân cận.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const news = [
    {
      id: 1,
      title: "Đơn Vị Thu Mua Đồ Cũ Uy Tín Tại TP.HCM",
      desc: "Trung Kiên chuyên thu mua đồ cũ giá cao tại TP.HCM, hỗ trợ khảo sát tận nơi, thanh toán nhanh chóng.",
      image: "/tin-tuc-1.jpg",
      slug: "/tin-tuc/thu-mua-do-cu-uy-tin-tphcm"
    },
    {
      id: 2,
      title: "Thu Mua Thiết Bị Vệ Sinh, Phế Liệu Giá Cao Tại TP.HCM",
      desc: "Nhận thu mua thiết bị vệ sinh cũ, phế liệu inox, sắt, nhôm giá cao, hỗ trợ tháo dỡ tận nơi.",
      image: "/tin-tuc-2.jpg",
      slug: "/tin-tuc/thu-mua-bon-cau-cu-thiet-bi-ve-sinh"
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-gray-50 flex flex-col">
      <Head>
        <title>Thu Mua Đồ Cũ Giá Cao TPHCM | Thanh Lý Nhà Hàng, Khách Sạn - Trung Kiên</title>
        <meta name="description" content="Đồ Cũ Trung Kiên chuyên thu mua đồ cũ giá cao tại TPHCM. ⭐Thanh lý nhà hàng, khách sạn, quán cafe ⭐Thu mua cửa cũ, xác nhà xưởng. Báo giá tận nơi, vận chuyển 0đ!" />
        <meta name="keywords" content="đồ cũ Trung Kiên, thu mua đồ cũ tphcm, thu mua cửa cũ, thanh lý nhà hàng khách sạn, thu mua đồ gỗ cũ, thanh lý quán cafe, thu mua xác nhà xưởng giá cao" />
        <meta property="og:title" content="CỬA HÀNG THU MUA ĐỒ CŨ GIÁ CAO TPHCM ☎️【Trung Kiên】" />
        <meta property="og:description" content="Chuyên thu mua thanh lý đồ cũ tận nơi giá cao nhất thị trường. Uy tín - Nhanh chóng - Tháo dỡ miễn phí." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thumuadocutrungkien.com/" />
        <link rel="canonical" href="https://thumuadocutrungkien.com/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Đồ Cũ Trung Kiên",
            "alternateName": "Thu Mua Đồ Cũ Trung Kiên",
            "description": "Đơn vị chuyên thu mua đồ cũ, thanh lý nhà hàng, khách sạn và các loại cửa cũ giá cao tại TPHCM.",
            "url": "https://thumuadocutrungkien.com/",
            "telephone": "0398771444",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hồ Chí Minh",
              "addressCountry": "VN"
            },
            "priceRange": "$$"
          })
        }} />
      </Head>

      {/* PHẦN BANNER CHÍNH */}
      <section className="relative w-full overflow-hidden block">
        <h1 className="sr-only">Thu Mua Đồ Cũ Giá Cao, Thanh Lý Nhà Hàng, Khách Sạn TPHCM - Đồ Cũ Trung Kiên</h1>
        <div className="w-full">
          <img
            src="/banner-do-cu-trung-kien.jpg"
            alt="Thu Mua Đồ Cũ Giá Cao Trung Kiên"
            // Sử dụng h-auto để ảnh không bị méo hoặc cắt
            className="w-full h-auto block"
          />
        </div>
      </section>

      <main className="flex-grow">

        <section className="w-full py-12 md:py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

              {/* Cột bên trái: Nội dung Text chuẩn SEO */}
              <div className="w-full md:w-1/2 space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Đồ Cũ Trung Kiên – Đơn Vị Thu Mua Đồ Cũ Giá Cao Uy Tín Số 1
                </h1>

                <div className="h-1 w-20 bg-yellow-500"></div>

                <p className="text-lg text-gray-600 leading-relaxed italic">
                  "Mua của người chán, bán cho người cần - Tận tâm phục vụ, giá cả cạnh tranh."
                </p>

                <div className="text-gray-700 space-y-4 text-base">
                  <p>
                    Bạn đang cần thanh lý đồ dùng gia đình, nội thất văn phòng hay thiết bị nhà hàng để đổi mới không gian?
                    <strong> Đồ Cũ Trung Kiên</strong> là đối tác tin cậy chuyên thu mua trọn gói các mặt hàng cũ với mức giá sát thị trường nhất.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Thu mua nhanh chóng trong vòng 30 phút.</li>
                    <li>Thanh toán tiền mặt hoặc chuyển khoản một lần duy nhất.</li>
                    <li>Đội ngũ vận chuyển chuyên nghiệp, tự tháo dỡ sạch sẽ.</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <a
                    href="tel:0398771444"
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg"
                  >
                    Liên Hệ Ngay: 03987.714.44
                  </a>
                </div>
              </div>

              {/* Cột bên phải: Hình ảnh Show Full */}
              <div className="w-full md:w-1/2">
                {/* Thêm h-[400px] hoặc h-[500px] trực tiếp vào đây */}
                <div className="relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/anh-gioi-thieu-do-cu-trung-kien.jpg"
                    alt="Dịch vụ thu mua đồ cũ giá cao Trung Kiên"
                    fill
                    priority
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TÁCH CÁC SECTION DỊCH VỤ DỰA TRÊN THIẾT KẾ MỚI */}
        {
          serviceCategories.map((category, idx) => (
            <section
              key={category.id}
              // border-gray-50/50 tạo đường kẻ cực mảnh, gần như hòa vào nền
              className={`mt-0 mb-0 py-2 md:py-4 border-t border-gray-50/50 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="max-w-[1400px] mx-auto px-4 md:px-10">

                {/* TIÊU ĐỀ 2 MÀU IN HOA - ĐÃ ÉP SÁT KHOẢNG CÁCH */}
                <div className="text-center mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#111827] uppercase tracking-tight mb-2">
                    {category.mainTitle} <span className="text-[#388e3c] relative inline-block">{category.highlightTitle}
                      <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#388e3c]/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
                    </span>
                  </h2>
                  <p className="text-gray-500 text-[14px] md:text-base font-medium max-w-2xl mx-auto px-2 leading-relaxed italic">
                    {category.description}
                  </p>
                  <div className="w-12 md:w-20 h-1.5 bg-gradient-to-r from-[#388e3c] to-[#2e7d32] mx-auto mt-4 rounded-full"></div>
                </div>

                {/* GRID DỊCH VỤ - HIỂN THỊ 1 CỘT TRÊN MOBILE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                  {category.services.map((srv) => (
                    <Link
                      key={srv.id}
                      href={srv.link}
                      className="group flex flex-col bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(136,13,17,0.08)] transition-all duration-500 border border-gray-100 hover:border-[#388e3c]/30 hover:-translate-y-2"
                    >

                      {/* PHẦN ẢNH */}
                      <div className="relative aspect-square sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-gray-100">
                        <img
                          src={srv.image}
                          alt={srv.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* NỘI DUNG THẺ DỊCH VỤ */}
                      <div className="p-5 md:p-6 flex flex-col flex-grow text-center items-center bg-white relative">

                        {/* Huy hiệu mini */}
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#388e3c] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-[3px] border-white group-hover:scale-110 group-hover:bg-[#4caf50] transition-all">
                          {srv.id < 10 ? `0${srv.id}` : srv.id}
                        </div>

                        {/* Tiêu đề */}
                        <h3 className="font-black text-[#111827] group-hover:text-[#388e3c] text-[16px] md:text-[19px] mt-4 mb-5 transition-colors line-clamp-2 leading-snug flex items-center justify-center h-[54px] w-full px-2">
                          {srv.title}
                        </h3>

                        {/* Nút bấm */}
                        <div className="inline-flex w-full items-center justify-center gap-2 bg-[#388e3c] group-hover:bg-[#2e7d32] text-white font-black py-3.5 px-6 rounded-xl text-[12px] md:text-[13px] uppercase tracking-widest transition-all duration-300 border border-[#388e3c] group-hover:border-[#2e7d32] group-hover:shadow-[0_8px_20px_rgba(136,13,17,0.3)]">
                          XEM CHI TIẾT
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

              </div>
            </section>
          ))
        }





        {/* KHU VỰC NÚT BÁO GIÁ - Đã giảm tối đa khoảng đệm */}
        <section className="py-0 md:py-1 bg-white flex justify-center w-full relative z-[6]">
          <Link
            href="/lien-he"
            className="inline-flex items-center justify-center gap-3 bg-[#111827] text-white px-8 py-3 md:px-10 md:py-4 text-xs md:text-lg font-bold uppercase rounded-xl hover:bg-[#388e3c] transition-all shadow-lg hover:-translate-y-1"
          >
            TÔI CẦN BÁO GIÁ CHO SẢN PHẨM KHÁC
          </Link>
        </section>

        {/* PHẦN QUY TRÌNH BAO TRỌN - ĐÃ GIẢM KHOẢNG CÁCH TỐI ĐA */}
        <section className="py-2 md:py-2 bg-white relative overflow-hidden" id="quy-trinh">
          <div className="max-w-[1400px] mx-auto px-4 md:px-10 relative z-10">

            {/* Tiêu đề: Giảm mb-10 xuống mb-6 */}
            <div className="text-center mb-4 md:mb-6">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#111827] uppercase tracking-tight">
                Quy Trình <span className="text-[#2e7d32]">Thu Mua</span>
              </h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#2e7d32] to-[#388e3c] mx-auto mt-3 rounded-full"></div>
            </div>

            <div className="relative">
              {/* Lưới hiển thị: Giảm khoảng cách trên mobile để các bước sát nhau hơn */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-0 relative z-10">
                {[
                  { step: "1", title: "Nhận yêu cầu", desc: "Tiếp nhận thông tin qua hotline: 0398.771.444" },
                  { step: "2", title: "Khảo sát", desc: "Khảo sát tận nơi hoặc báo giá nhanh qua hình ảnh Zalo." },
                  { step: "3", title: "Báo giá", desc: "Thỏa thuận giá cả minh bạch, không ép giá khách hàng." },
                  { step: "4", title: "Thu mua", desc: "Tháo dỡ nhanh gọn, thanh toán tiền mặt ngay tại chỗ." }
                ].map((process, i) => (
                  <div key={i} className="group flex flex-col items-center text-center px-4 relative cursor-default">

                    {/* Đường kẻ nối SVG - Giữ nguyên nhưng thêm transition màu */}
                    {i < 3 && (
                      <svg className="hidden lg:block absolute top-[10px] left-[50%] w-full h-[50px] z-0 text-[#2e7d32]/20 group-hover:text-[#2e7d32]/40 transition-colors duration-500" preserveAspectRatio="none" viewBox="0 0 100 40">
                        <path
                          d={i % 2 === 0 ? "M20,30 Q50,0 80,30" : "M20,10 Q50,40 80,10"}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    )}

                    {/* Vòng tròn số: Hiệu ứng Hover biến đổi màu và phóng lớn */}
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#388e3c]/10 text-[#388e3c] rounded-full flex items-center justify-center text-2xl md:text-3xl font-black mb-4 mx-auto shadow-sm ring-4 ring-white z-10 relative 
                            transition-all duration-500 transform group-hover:scale-110 group-hover:bg-[#111827] group-hover:text-[#388e3c] group-hover:shadow-lg">
                      {process.step}
                    </div>

                    {/* Tiêu đề Bước Hoạt Động: Chuyển màu khi rê chuột  */}
                    <h3 className="text-lg md:text-xl font-black mb-2 text-[#111827] transition-colors duration-300 group-hover:text-[#2e7d32] uppercase tracking-wide">
                      {process.title}
                    </h3>

                    {/* Mô tả Từng Bước: Canh chỉnh thu nhỏ gọn gàng */}
                    <p className="text-gray-500 font-medium text-[13px] md:text-[14px] leading-snug max-w-[240px] mx-auto transition-colors duration-300 group-hover:text-gray-800">
                      {process.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VÌ SAO CHỌN Trung Kiên */}
        <section className="relative py-20 md:py-28 bg-[#0f0f10] text-white overflow-hidden">

          {/* Glow */}
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#388e3c]/20 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#388e3c]/20 blur-[120px] rounded-full"></div>

          <div className="max-w-[1100px] mx-auto px-6 relative z-10">

            {/* TITLE */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                Vì sao khách hàng chọn
                <span className="text-[#4caf50]"> Trung Kiên?</span>
              </h2>
              <p className="text-gray-400 mt-4 text-lg">
                Không chỉ là thu mua – chúng tôi mang lại giá trị thật
              </p>
            </div>

            {/* TIMELINE */}
            <div className="relative">

              {/* LINE GIỮA */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#388e3c] via-[#388e3c]/50 to-transparent"></div>

              {[
                {
                  title: "Giá cao hơn thị trường",
                  desc: "Cam kết thu mua cao hơn 20-30%, không ép giá, thanh toán ngay.",
                  icon: "💰"
                },
                {
                  title: "Có mặt chỉ sau 30 phút",
                  desc: "Đội ngũ di chuyển nhanh, khảo sát và chốt giá ngay.",
                  icon: "⚡"
                },
                {
                  title: "Trọn gói từ A-Z",
                  desc: "Miễn phí tháo dỡ, vận chuyển, dọn dẹp.",
                  icon: "🚛"
                },
                {
                  title: "Uy tín lâu năm",
                  desc: "Hơn 10.000 khách hàng tin tưởng, hoạt động 24/7.",
                  icon: "🏆"
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-center md:items-start mb-14 ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                    }`}
                >

                  {/* Vòng tròn timeline */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#4caf50] border-4 border-[#0f0f10] z-10 shadow-[0_0_10px_rgba(255,61,68,0.8)]"></div>

                  {/* BLOCK */}
                  <div className="w-full md:w-[45%]">

                    <div className="bg-[#1a1a1c]/50 border border-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 hover:border-[#388e3c]/50 hover:bg-[#1a1a1c]/80 transition-all duration-500 group shadow-lg hover:-translate-y-1">

                      <div className="flex items-center gap-5 mb-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#388e3c] to-[#5c0909] rounded-2xl flex items-center justify-center text-2xl shadow-[0_5px_15px_rgba(136,13,17,0.4)] group-hover:scale-110 transition-transform duration-300 border border-[#4caf50]/20">
                          {item.icon}
                        </div>

                        <h3 className="text-xl md:text-2xl font-black group-hover:text-[#4caf50] transition-colors duration-300 tracking-wide">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-gray-400 text-[15px] leading-relaxed group-hover:text-gray-300 transition-colors">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* CTA */}
            <div className="text-center mt-20">
              <a
                href="tel:0398771444"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-[#388e3c] to-[#2e7d32] hover:from-[#2e7d32] hover:to-[#5c0909] px-10 py-5 rounded-2xl font-black text-lg shadow-[0_10px_20px_rgba(136,13,17,0.3)] transition-all hover:scale-105 border border-[#4caf50]/20"
              >
                📞 GỌI NGAY: 0398.771.444
              </a>
            </div>

          </div>
        </section>



        {/* ================= ĐÁNH GIÁ CỦA KHÁCH HÀNG ================= */}
        <section className="py-20 md:py-24 bg-gray-50 overflow-hidden relative">
          {/* Họa tiết nền */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">

            {/* Tiêu đề */}
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-[#111827] uppercase leading-tight tracking-tight">
                Khách Hàng Nói Về <span className="text-[#388e3c]">Trung Kiên</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#388e3c] to-[#2e7d32] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="relative">
              {/* Lưới Slider */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 transition-opacity duration-500 pt-8">
                {getVisibleReviews().map((review) => (
                  <div key={review.id} className="bg-white rounded-[32px] px-8 pb-10 pt-14 shadow-sm border border-gray-100 hover:border-[#388e3c]/20 hover:shadow-[0_20px_40px_rgba(136,13,17,0.08)] transition-all duration-500 relative flex flex-col justify-between h-full group hover:-translate-y-2">

                    {/* AVATAR NỔI LÊN TRÊN */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-xl group-hover:ring-[#388e3c]/20 transition-all bg-[#111827] flex items-center justify-center">
                        {review.avatar ? (
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-full h-full object-cover"
                            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }}
                          />
                        ) : null}
                        {/* Chữ cái thay thế nếu lỗi ảnh */}
                        <div className="w-full h-full text-white font-bold text-3xl uppercase flex items-center justify-center" style={{ display: review.avatar ? 'none' : 'flex' }}>
                          {review.name.charAt(0)}
                        </div>
                      </div>
                    </div>

                    {/* Dấu ngoặc kép chìm */}
                    <div className="text-8xl font-serif text-[#388e3c]/5 absolute top-10 left-6 select-none pointer-events-none transition-transform group-hover:-translate-y-2 group-hover:-translate-x-2">"</div>

                    {/* Nội dung Review */}
                    <div className="relative z-10 text-center flex-grow flex flex-col items-center">
                      <div className="flex gap-1 mb-6 justify-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-[#388e3c]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        ))}
                      </div>

                      <p className="text-gray-700 italic font-medium leading-relaxed mb-8 text-base min-h-[120px] flex items-center justify-center">
                        "{review.comment}"
                      </p>
                    </div>

                    {/* Thông tin Khách hàng */}
                    <div className="text-center pt-6 border-t border-dashed border-gray-200">
                      <h3 className="font-black text-[#111827] text-[18px] leading-tight mb-1">{review.name}</h3>
                      <span className="text-[#388e3c] font-bold tracking-widest text-[11px] uppercase bg-[#388e3c]/5 px-3 py-1 rounded-full inline-block mt-1">
                        {review.role}
                      </span>
                    </div>

                  </div>
                ))}
              </div>

              {/* Nút chuyển Slide */}
              <div className="flex items-center justify-center gap-3 mt-16">
                {[...Array(totalReviewSlides)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentReviewSlide(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentReviewSlide ? 'w-10 bg-[#388e3c] shadow-[0_4px_10px_rgba(136,13,17,0.3)]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>




        {/* KÊU GỌI HÀNH ĐỘNG DƯỚI CÙNG */}
        <section className="py-16 md:py-16 bg-[url('https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/90 to-[#111827]/70 backdrop-blur-sm"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Bạn Đang Có Sản Phẩm Cần Thanh Lý?</h2>
            <p className="text-xl font-medium text-gray-300 mb-10 leading-relaxed">
              Gửi hình ảnh qua Zalo, Nhận báo giá trong <span className="font-black text-[#388e3c]">5 Phút</span>. <br className="hidden md:block" />
              Thu mua không ép giá - Dọn dẹp sạch sẽ - Tiền trao cháo múc ngay lập tức.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:0398771444" className="bg-[#388e3c] text-white hover:bg-[#2e7d32] font-black uppercase px-8 py-5 rounded-xl shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3">
                <span className="text-2xl">📞</span> Gọi Hotine
              </a>
              <a href="https://zalo.me/0398771444" target="_blank" rel="noopener noreferrer" className="bg-[#0068ff] text-white hover:bg-[#0052cc] font-black uppercase px-8 py-5 rounded-xl shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3">
                <span className="text-2xl font-sans">Zalo</span> Gửi Hình Zalo
              </a>
            </div>
          </div>
        </section>

        {/* NEWS SECTION */}
        <section className="pt-4 pb-4 md:pt-4 md:pb-4 bg-gray-50" id="tin-tuc">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            {/* HEADER */}
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-[#111827] uppercase">
                Cập Nhật Tin Tức <span className="text-[#2e7d32]">Mới Nhất</span>
              </h2>

              <div className="w-20 h-1 bg-[#2e7d32] mx-auto mt-4 rounded-full"></div>
            </div>

            {/* DATA */}
            {(() => {
              const news = [
                {
                  id: 1,
                  title: "Lưu Ý Khi Thanh Lý Nhà Hàng Khách Sạn",
                  desc: "Thanh lý nhà hàng, khách sạn trọn gói cần lưu ý những gì để tránh mất oan tiền tỷ?",
                  image: "/thanh-ly-nha-hang-uy-tin.jpg",
                  slug: "/tin-tuc/luu-y-khi-thanh-ly-nha-hang-khach-san"
                },
                {
                  id: 2,
                  title: "Kinh Nghiệm Thanh Lý Đồ Cũ Giá Cao Tại TPHCM",
                  desc: "Bí quyết thanh lý đồ cũ gia đình, đồ văn phòng, bàn ghế quán cafe với giá cao nhất TPHCM",
                  image: "/thu-mua-do-cu-gia-cao-go-vap.jpg",
                  slug: "/tin-tuc/kinh-nghiem-thanh-ly-do-cu"
                }
              ];

              return (
                <>
                  {/* GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {news.map((item) => (
                      <Link
                        key={item.id}
                        href={item.slug}
                        className="group bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(136,13,17,0.12)] transition-all duration-500 hover:-translate-y-2 hover:border-[#388e3c]/30"
                      >

                        {/* IMAGE - ĐÃ TĂNG CHIỀU CAO TRÊN DESKTOP */}
                        <div className="relative h-56 md:h-72 lg:h-80 overflow-hidden bg-gray-100">
                          <img
                            src={item.image}
                            alt={item.title}
                            // w-full h-full object-cover là bắt buộc để ảnh ko bị méo
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            onError={(e) => {
                              e.currentTarget.src =
                                "https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=800&auto=format&fit=crop";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-5 md:p-8 bg-white relative">
                          <div className="absolute -top-7 right-6 bg-[#388e3c] text-white px-4 py-2 rounded-xl text-[12px] font-bold uppercase shadow-lg group-hover:-translate-y-1 transition-transform">
                            Bài Viết
                          </div>
                          <span className="text-xs text-[#388e3c] font-bold uppercase tracking-wider">
                            Tin tức
                          </span>

                          <h3 className="font-black text-lg text-[#111827] mt-2 mb-3 line-clamp-2 group-hover:text-[#388e3c] transition-colors">
                            {item.title}
                          </h3>

                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                            {item.desc}
                          </p>

                          <div className="text-[#2e7d32] font-bold text-sm uppercase tracking-wide flex items-center gap-2 group-hover:text-[#111827]">
                            Xem chi tiết
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="text-center mt-10 md:mt-12">
                    <Link
                      href="/tin-tuc"
                      className="inline-flex items-center justify-center bg-[#111827] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#388e3c] transition"
                    >
                      XEM TẤT CẢ TIN TỨC →
                    </Link>
                  </div>
                </>
              );
            })()}

          </div>
        </section>

      </main >
    </div >
  );
}