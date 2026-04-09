import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThuMuaDoInoxPage() {
  const hotline = "0398.771.444";

  // Schema để Google nhận diện dịch vụ thu mua đồ Inox
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Thu Mua Đồ Inox Cũ Giá Cao",
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
    "description": "Trung Kiên chuyên thu mua đồ inox cũ giá cao: bàn ghế inox, bếp inox công nghiệp, bồn rửa chén, kệ khay inox nhà hàng tại TPHCM."
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
        <title>Thu Mua Đồ Inox Cũ Giá Cao TPHCM | Bàn Ghế, Bếp Inox | Trung Kiên</title>
        <meta name="description" content="Đồ Cũ Trung Kiên nhận thu mua đồ inox giá cao, thu mua bếp inox, mua bàn ghế inox cũ tại TP.HCM và các tỉnh lân cận với mức giá hấp dẫn nhất." />
        <meta name="keywords" content="Thu Mua Đồ Inox Cũ, thu mua bàn ghế inox, thu mua bàn inox, thu mua bếp inox, thu mua đồ inox giá cao, đồ cũ trung kiên" />
        <link rel="canonical" href="https://docutrungkien.com/thu-mua-do-cu/thu-mua-do-inox-cu-gia-cao" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>

      <main className="flex-grow pb-12">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-100 py-3 shadow-sm">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Thu Mua Đồ Inox Cũ</span>
          </div>
        </nav>

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH (3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">

              <header className="mb-8 border-b-2 border-brand-50 pb-6 text-center">
                <h1 className="text-2xl md:text-4xl font-black text-brand-600 uppercase tracking-tight">
                  Thu Mua Đồ Inox Cũ Giá Cao
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify space-y-8">

                <section>
                  <p className="text-[20px]">
                    <strong>Đồ Cũ Trung Kiên</strong> nhận <strong>thu mua đồ inox giá cao, thu mua bếp inox, mua bàn ghế inox cũ</strong> tại TP.HCM và các tỉnh lân cận, với mức giá thu mua hấp dẫn và cạnh tranh trên thị trường.
                    Liên Hệ: <strong className="text-red-600 text-2xl">{hotline}</strong> để được Đồ Cũ Trung Kiên đến và khảo sát báo giá tận nơi để có mức giá chính xác nhất!!!
                  </p>
                </section>

                {/* ẢNH 1: TỔNG QUAN ĐỒ INOX (Sửa từ thu-mua-do-inox-cu.jpg) */}
                <figure className="my-10">
                  <div className="relative w-full aspect-square max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thu-mua-do-inox-cu-1.jpg"
                      alt="Dịch vụ thu mua đồ Inox cũ giá cao tại TPHCM"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <figcaption className="text-center mt-3 text-sm italic text-gray-500">Thu Mua Đồ Inox Tại TP.HCM</figcaption>
                </figure>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-brand-600 uppercase border-l-4 border-brand-600 pl-4 mb-6">
                    Những mặt hàng đồ inox mà Trung Kiên nhận thu mua và Thanh lý:
                  </h2>
                  <ul className="list-none p-0 space-y-4 text-[20px]">
                    <li className="flex items-center gap-3">
                      <span className="text-brand-600">►</span> Bàn ghế inox cũ nhà hàng, nhà ăn, quán nhậu
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-brand-600">►</span> Các loại bàn inox, bồn rửa, kệ, khay inox
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-brand-600">►</span> Các loại bếp inox, bếp nướng công nghiệp
                    </li>
                  </ul>
                  <p className="mt-6">
                    Đến với hệ thống thu mua thanh lý đồ inox cũ nhà hàng của <strong>Trung Kiên</strong>, quý khách sẽ được tư vấn, giải đáp tận tình, chi tiết nhất các thắc mắc. Hãy cho chúng tôi biết quý khách đang có nhu cầu thanh lý, <strong>Trung Kiên</strong> sẽ đáp ứng ngay lập tức, mang lại sự hài lòng nhất cho quý khách hàng.
                  </p>
                </section>

                {/* ẢNH 3: BÀN INOX (Sửa từ thu-mua-do-inox-cu-2.jpg) */}
                <figure className="my-10 text-center">
                  <div className="relative w-full aspect-[4/3] max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thu-mua-do-inox-cu-2.jpg"
                      alt="Thu Mua Bàn Inox Cũ"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-lg font-bold text-gray-600 uppercase">Thu Mua Bàn Inox Cũ</figcaption>
                </figure>

                {/* ẢNH 4: BẾP CÔNG NGHIỆP (Sửa từ thu-mua-bep-inox-cong-nghiep.jpg) */}
                <figure className="my-10 text-center">
                  <div className="relative w-full aspect-[3/2] max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thu-mua-do-inox-cu-4.jpg"
                      alt="Mua bếp nướng inox công nghiệp"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-lg font-bold text-gray-600 uppercase">Mua bếp nướng inox</figcaption>
                </figure>

                <section className="bg-brand-50 p-8 rounded-[2rem] border-2 border-brand-100">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase mb-6 text-center">
                    Quy Trình Thu Mua Đồ Cũ Của Công Ty Chúng Tôi
                  </h2>
                  <div className="space-y-6 text-[18px]">
                    <p>1. Quý khách lên Google gõ từ khóa: <strong>Đồ Cũ Trung Kiên</strong> và Click vào website để liên hệ với chúng tôi hoặc yêu cầu chúng tôi gọi lại.</p>
                    <p>2. Quý khách kết bạn Zalo với số điện thoại: <strong className="text-red-600 underline text-xl">{hotline}</strong> và gửi hình đồ cũ mà quý khách cần thanh lý. Công ty sẽ báo giá trực tiếp với những mặt hàng số lượng ít, hoặc chúng tôi sẽ đến tận nơi để báo giá.</p>
                    <p>3. Quý khách đồng ý với giá công ty đưa ra thì chúng tôi sẽ đưa xe xuống và bốc về trong ngày, nhận tiền ngay khi chốt.</p>
                  </div>
                </section>

                <figure className="my-10 text-center">
                  <div className="relative w-full aspect-[4/3] max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/thu-mua-do-inox-cu-3.jpg"
                      alt="Dịch vụ thu mua cửa cũ và đồ inox"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-brand-600 uppercase border-l-4 border-brand-600 pl-4 mb-6">
                    Cam kết thu mua đồ inox cũ giá cao nhất tại TP HCM
                  </h2>
                  <ul className="grid grid-cols-1 gap-4 list-none p-0">
                    {[
                      "Trung Kiên cam kết giá thu mua đồ cũ giá cao hơn giá thị trường.",
                      "Thanh toán 100% trọn gói 1 lần duy nhất.",
                      "Không tính phí vận chuyển, hỗ trợ tận tình.",
                      "Nhận thu mua đồ cũ giá cao ở tất cả các quận huyện trong TP.HCM.",
                      "Thời gian thu mua 24/24 và tất cả các ngày trong tuần."
                    ].map((text, i) => (
                      <li key={i} className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-3 shadow-sm">
                        <span className="text-brand-600 font-bold">✔</span>
                        <span className="text-[19px]">{text}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="mt-12 bg-gray-900 text-white p-8 rounded-3xl">
                  <h3 className="text-brand-400 text-xl font-black uppercase mb-6">Địa bàn phục vụ thu mua</h3>
                  <p className="opacity-90">
                    Dịch Vụ <strong>Thu Mua Đồ Cũ Trung Kiên</strong> nhận thu mua cửa cũ, đồ inox tất cả các quận huyện từ Quận 1 đến Quận 12, Gò Vấp, Tân Bình, Tân Phú, Bình Thạnh, Thủ Đức, Phú Nhuận, Bình Tân, Bình Chánh, Hóc Môn... Và các khu vực lân cận như: Bình Dương, Đồng Nai, Long An...
                  </p>
                </section>

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