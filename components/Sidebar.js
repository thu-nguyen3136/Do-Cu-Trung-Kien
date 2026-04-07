import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar() {
  return (
    // BỎ md:w-1/4 Ở ĐÂY ĐI NHÉ! Chỉ giữ lại w-full thôi.
    <div className="w-full">

      {/* Box 1: Thu Mua Đồ Cũ */}
      <div className="mb-8 bg-white border border-gray-200 rounded-sm overflow-hidden">
        <div className="bg-[#388e3c] text-white p-3">
          <h4 className="text-base font-bold text-center m-0 capitalize tracking-wide">Thu Mua Đồ Cũ</h4>
        </div>
        <ul className="list-none p-0 m-0">
          <li className="border-b border-gray-100 p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thu-mua-tu-dong-tu-mat" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thu-mua-tu-dong-cu.jpg" alt="Thu Mua Tủ Đông Tủ Mát" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#388e3c] transition-colors leading-tight">Thu Mua Tủ Đông Tủ Mát</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thu-mua-noi-that-khach-san" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thanh-ly-noi-that-khach-san.jpg" alt="Thanh Lý Nội Thất Khách Sạn" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#388e3c] transition-colors leading-tight">Thu Mua Tủ Mát Cũ</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thu-mua-do-inox-cu" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thu-mua-do-inox.jpg" alt="Thu Mua Đồ Inox" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#388e3c] transition-colors leading-tight">Thu Mua Đồ Inox Cũ</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thu-mua-do-cu-gia-dinh" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thu-mua-do-cu-gia-dinh.jpg" alt="Thu Mua Đồ Cũ Gia Đình" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#388e3c] transition-colors leading-tight">Thu Mua Đồ Cũ Giá Cao Tại TPHCM</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thanh-ly-quan-tra-sua" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thanh-ly-quan-tra-sua.jpg" alt="Thanh Lý Quán Trà Sữa" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#388e3c] transition-colors leading-tight">Thanh Lý Nhà Hàng</h6>
            </Link>
          </li>
          <li className="p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thanh-ly-quan-pho" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thanh-ly-quan-pho.jpg" alt="Thanh Lý Quán Phở" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#388e3c] transition-colors leading-tight">Thanh Lý Quán Ăn</h6>
            </Link>
          </li>
          <li className="p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thanh-ly-quan-nhau" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thanh-ly-quan-nhau.jpg" alt="Thanh Lý Quán Nhậu" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#388e3c] transition-colors leading-tight">Thanh Lý Quán Nhậu</h6>
            </Link>
          </li>
          <li className="p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thanh-ly-quan-ca-phe" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thanh-ly-quan-cafe.jpg" alt="Thanh Lý Quán Cà Phê" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#388e3c] transition-colors leading-tight">Thanh Lý Quán Cafe</h6>
            </Link>
          </li>
          <li className="p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thanh-ly-quan-an" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thanh-ly-quan-an.jpg" alt="Thanh Lý Quán Ăn" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#388e3c] transition-colors leading-tight">Thanh Lý Nhà Nghỉ Khách Sạn</h6>
            </Link>
          </li>
          <li className="p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thanh-ly-nha-hang" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thanh-ly-nha-hang.jpg" alt="Thanh Lý Nhà Hàng" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#388e3c] transition-colors leading-tight">Thanh Lý Nhà Nghỉ Khách Sạn</h6>
            </Link>
          </li>
        </ul>
      </div>

      {/* Box 3: Tin Tức Mới Nhất */}
      <div className="mb-8 bg-white border border-gray-200 rounded-sm overflow-hidden">
        <div className="bg-[#388e3c] text-white p-3">
          <h4 className="text-base font-bold text-center m-0 uppercase tracking-wide">Tin Tức Mới Nhất</h4>
        </div>
        <ul className="list-none p-0 m-0">
          <li className="border-b border-gray-100 p-3 hover:bg-gray-50 transition-colors">
            <Link href="/tin-tuc/kinh-nghiem-thanh-ly-do-cu" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thanh-ly-nha-hang-uy-tin.jpg" alt="Tin tức 1" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#388e3c] transition-colors leading-tight line-clamp-2">Kinh Nghiệm Thanh Lý Đồ Cũ Tại TP.HCM</h6>
            </Link>
          </li>
          <li className="p-3 hover:bg-gray-50 transition-colors">
            <Link href="/tin-tuc/luu-y-khi-thanh-ly-nha-hang-khach-san" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thu-mua-do-cu-gia-cao-go-vap.jpg" alt="Tin tức 2" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#388e3c] transition-colors leading-tight line-clamp-2">Lưu Ý Khi Thanh Lý Nhà Hàng Khách Sạn</h6>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
