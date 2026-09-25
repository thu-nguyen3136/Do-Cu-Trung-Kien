import Link from "next/link";
import { BreadcrumbSchema } from "../../components/SchemaMarkup";
import SEOHead from "../../components/SEOHead";
import newsPosts from "../../data/posts.json";

export default function NewsPage() {

  const breadcrumbs = [
    { name: 'Trang chủ', url: 'https://thumuadocutrungkien.com/' },
    { name: 'Tin tức', url: 'https://thumuadocutrungkien.com/tin-tuc' }
  ];

  const news = newsPosts;

  return (
    <>
      <SEOHead
        title="Tin Tức & Kinh Nghiệm Thanh Lý Đồ Cũ | Đồ Cũ Trung Kiên"
        description="Tổng hợp kinh nghiệm thanh lý nhà hàng, khách sạn, quán cafe, đồ dùng gia đình giá cao. Cập nhật mẹo định giá đồ cũ từ chuyên gia: 0398.771.444."
        canonical="/tin-tuc"
        ogImage="/banner-do-cu-trung-kien.jpg"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="min-h-screen flex flex-col bg-gray-50">
        <main className="flex-grow">
          {/* HERO */}
          <section className="pt-10 pb-4 md:pt-10 md:pb-4 bg-white text-center">
            <div className="max-w-[900px] mx-auto px-6">
              <h1 className="text-3xl md:text-5xl font-black text-[#111827] mb-4">
                Tin Tức <span className="text-[#388e3c]">Trung Kiên</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Cập nhật kiến thức, kinh nghiệm thu mua đồ cũ và thanh lý tài sản giá cao
              </p>
            </div>
          </section>

          {/* GRID */}
          <section className="pb-8 md:pb-10">
            <div className="max-w-[1400px] mx-auto px-5 md:px-10">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                {news.map((item) => (
                  <Link
                    key={item.id}
                    href={item.slug}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(224,138,13,0.15)] transition-all duration-300"
                  >

                    {/* IMAGE - ĐÃ TĂNG CHIỀU CAO TRÊN DESKTOP */}
                    <div className="relative h-52 md:h-72 lg:h-80 overflow-hidden">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">
                      <span className="text-xs text-[#388e3c] font-bold uppercase tracking-wider">
                        Tin tức
                      </span>

                      <h2 className="font-black text-xl text-[#111827] mt-2 mb-3 line-clamp-2 group-hover:text-[#388e3c] transition-colors">
                        {item.title}
                      </h2>

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                        {item.description || item.desc}
                      </p>

                      <div className="text-[#388e3c] font-bold text-sm uppercase tracking-wide flex items-center gap-2 group-hover:text-[#2e7d32]">
                        Xem chi tiết
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </div>
                    </div>

                  </Link>
                ))}

              </div>

            </div>
          </section>

        </main>
      </div>
    </>
  );
}