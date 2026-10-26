import Link from 'next/link';
import { BreadcrumbSchema } from '../components/SchemaMarkup';
import SEOHead from '../components/SEOHead';

const services = [
  { id: 1, title: 'Thanh Lý Quán Cafe', image: '/thanh-ly-quan-cafe.jpg', link: '/thanh-ly-quan-ca-phe', description: 'Thu mua bàn ghế, máy pha cafe, quầy bar và thiết bị quán cafe trọn gói giá cao.' },
  { id: 13, title: 'Thanh Lý Quán Bar Trọn Gói TPHCM', image: '/thanh-ly-quan-bar-gia-cao.jpg', link: '/thanh-ly-quan-bar-tron-goi-tphcm', description: 'Tiếp nhận khảo sát quầy bar, thiết bị lạnh, máy làm đá, bàn ghế và âm thanh ánh sáng.' },
  { id: 15, title: 'Thanh Lý Quán Bar Tại Quận 1', image: '/thanh-ly-quan-bar-tphcm.jpg', link: '/thanh-ly-quan-bar-tai-quan-1', description: 'Thu mua thiết bị bar, âm thanh, ánh sáng và nội thất; hỗ trợ lên lịch tháo dỡ theo điều kiện tại Quận 1.' },
  { id: 12, title: 'Thu Mua Thanh Lý Quán Cafe TPHCM', image: '/thanh-ly-quan-cafe-1.jpeg', link: '/thanh-ly-quan-cafe-tphcm', description: 'Thu mua máy pha, máy xay, bàn ghế, quầy bar và thiết bị lạnh quán cafe tại TPHCM.' },
  { id: 2, title: 'Thanh Lý Quán Ăn', image: '/thanh-ly-quan-an.jpg', link: '/thanh-ly-quan-an', description: 'Chuyên thu mua thiết bị bếp, bàn ghế và dụng cụ quán ăn, tháo dỡ theo thỏa thuận.' },
  { id: 3, title: 'Thanh Lý Quán Nhậu', image: '/thanh-ly-quan-nhau.jpg', link: '/thanh-ly-quan-nhau', description: 'Thu mua quán nhậu và nhà hàng BBQ, hỗ trợ khảo sát, tháo dỡ và vận chuyển tận nơi.' },
  { id: 4, title: 'Thanh Lý Nhà Hàng', image: '/thanh-ly-nha-hang.jpg', link: '/thanh-ly-nha-hang', description: 'Thu mua thiết bị bếp công nghiệp, nội thất và tài sản nhà hàng.' },
  { id: 5, title: 'Thanh Lý Quán Phở', image: '/thanh-ly-quan-pho.jpg', link: '/thanh-ly-quan-pho', description: 'Thu mua nồi phở điện, bàn ghế, tủ kính và thiết bị quán phở.' },
  { id: 6, title: 'Thanh Lý Quán Trà Sữa', image: '/thanh-ly-quan-tra-sua.jpg', link: '/thanh-ly-quan-tra-sua', description: 'Thu mua máy dập nắp, máy định lượng, quầy pha chế và nội thất quán trà sữa.' },
  { id: 7, title: 'Thu Mua Tủ Đông, Tủ Mát', image: '/thu-mua-tu-dong-cu.jpg', link: '/thu-mua-tu-dong-tu-mat', description: 'Thu mua tủ đông, tủ mát gia đình và thiết bị lạnh kinh doanh.' },
  { id: 8, title: 'Thu Mua Đồ Inox Cũ', image: '/thu-mua-do-inox.jpg', link: '/thu-mua-do-inox-cu', description: 'Thu mua bồn rửa inox, bàn bếp, kệ và thiết bị inox công nghiệp.' },
  { id: 9, title: 'Thu Mua Đồ Cũ Gia Đình', image: '/thu-mua-do-cu-gia-dinh.jpg', link: '/thu-mua-do-cu-gia-dinh', description: 'Thu mua nội thất, đồ gỗ, thiết bị điện lạnh và vật dụng gia đình.' },
  { id: 10, title: 'Thu Mua Nội Thất Khách Sạn', image: '/thanh-ly-noi-that-khach-san.jpg', link: '/thu-mua-noi-that-khach-san', description: 'Thu mua giường, tủ, nệm và nội thất khách sạn theo từng hạng mục.' },
  { id: 14, title: 'Thanh Lý Khách Sạn Trọn Gói TPHCM', image: '/thanh-ly-noi-that-khach-san-1.jpg', link: '/thanh-ly-khach-san-tron-goi-tphcm', description: 'Thu mua giường nệm, tivi, minibar, máy lạnh và tài sản khách sạn theo lô hoặc trọn gói.' },
  { id: 11, title: 'Thu Mua Quán Karaoke', image: '/thu-mua-quan-karaoke-3.jpg', link: '/thu-mua-quan-karaoke', description: 'Thu mua dàn âm thanh, loa, amply, ánh sáng, màn hình và sofa quán karaoke.' },
  { id: 18, title: 'Thanh Lý Quán Karaoke Trọn Gói TPHCM', image: '/thu-mua-quan-karaoke-2.jpg', link: '/thanh-ly-quan-karaoke-tron-goi-tphcm', description: 'Thanh lý trọn gói phòng hát, dàn âm thanh, tivi, sofa và tháo dỡ vách cách âm, hỗ trợ trả mặt bằng.' },
  { id: 16, title: 'Thanh Lý Quán Karaoke Tại Quận 1', image: '/thu-mua-quan-karaoke.jpg', link: '/thanh-ly-quan-karaoke-tai-quan-1', description: 'Khảo sát thanh lý loa, amply, màn hình, sofa và thiết bị phòng karaoke tại Quận 1.' },
  { id: 17, title: 'Thanh Lý Khách Sạn Trọn Gói Tại Quận 1', image: '/thanh-ly-noi-that-khach-san-1.jpg', link: '/thanh-ly-khach-san-tron-goi-tai-quan-1', description: 'Thu mua nội thất buồng phòng và thiết bị khách sạn tại Quận 1 theo lô hoặc trọn gói.' }
];

const breadcrumbs = [
  { name: 'Trang chủ', url: 'https://thumuadocutrungkien.com/' },
  { name: 'Thu Mua Đồ Cũ', url: 'https://thumuadocutrungkien.com/thu-mua-do-cu' }
];

export default function ThuMuaDoCuPage() {
  return (
    <>
      <SEOHead
        title="Thu Mua Đồ Cũ TPHCM Trọn Gói | Đồ Cũ Trung Kiên"
        description="Tổng hợp dịch vụ thu mua, thanh lý quán ăn, nhà hàng, khách sạn, karaoke, quán bar, đồ inox, tủ đông và đồ cũ gia đình tại TPHCM. Xem dịch vụ phù hợp."
        keywords="thu mua đồ cũ TPHCM, thanh lý đồ cũ trọn gói, thu mua nhà hàng khách sạn, thanh lý quán karaoke, thu mua quán bar, thu mua nội thất, thu mua đồ gia đình"
        canonical="/thu-mua-do-cu"
        ogImage="/banner-do-cu-trung-kien.jpg"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <main className="min-h-screen bg-gray-50 pb-2">
        <section className="border-b border-gray-100 bg-white py-8 md:py-12">
  <div className="mx-auto max-w-[1400px] px-5 md:px-10">
    <nav className="mb-5 text-sm text-gray-500" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-brand-600">Trang chủ</Link>
      <span className="mx-2">/</span>
      <span className="text-gray-900">Thu Mua Đồ Cũ</span>
    </nav>
    
    {/* Thêm mx-auto và text-center vào div này */}
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-black leading-tight text-gray-900 md:text-4xl">
        Thu Mua Đồ Cũ Và Thanh Lý Trọn Gói Tại TPHCM
      </h1>
      
      <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
        Chọn nhóm tài sản bạn cần thanh lý để xem phạm vi thu mua, cách khảo sát và thông tin phù hợp. Trung Kiên tiếp nhận từ một vài món riêng lẻ đến nhu cầu thu dọn theo lô; hạng mục, giá và lịch thực hiện được trao đổi trước khi triển khai.
      </p>
      
      <div className="mt-6 flex justify-center">
        <a 
          href="tel:0398771444" 
          className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 font-bold text-white transition hover:bg-brand-700 shadow-sm"
        >
          Gọi tư vấn: 0398.771.444
        </a>
      </div>
    </div>
  </div>
</section>

        <section className="mx-auto max-w-[1400px] px-5 py-8 md:px-10 md:py-10">
          <div className="mb-1 flex flex-col gap-2 border-b border-gray-200 pb-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 -mt-12" >Tất Cả Dịch Vụ</h2>
              <p className="mt-1 text-sm text-gray-600">Chọn dịch vụ để xem chi tiết các hạng mục đang được tiếp nhận.</p>
            </div>
            <span className="text-sm text-gray-500">{services.length} dịch vụ</span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.link}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-green-700/40 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="!text-[22px] font-bold leading-relaxed text-gray-900 group-hover:text-brand-700">{service.title}</h2>
                  <p className="mt-1 flex-1 text-base leading-relaxed text-gray-600">{service.description}</p>
                  <span className="mt-1 inline-flex items-center gap-2 font-bold text-brand-700">
                    Xem dịch vụ
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}