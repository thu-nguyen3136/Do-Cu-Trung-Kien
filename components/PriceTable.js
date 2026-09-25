import Link from 'next/link';

export default function PriceTable({
  title = "Bảng Giá Thu Mua Tham Khảo Mới Nhất",
  subtitle = "Mức giá có thể thay đổi tùy thuộc vào tình trạng sử dụng, thương hiệu và số lượng sản phẩm thực tế. Liên hệ để nhận báo giá chính xác nhất sau 15-30 phút!",
  items = [],
  hotline = "0398.771.444",
  categoryHeader = "Hạng Mục Thu Mua / Thanh Lý"
}) {
  if (!items || items.length === 0) return null;

  return (
    <section className="my-5 bg-white mt-1">
      {/* PHẦN TIÊU ĐỀ CANH GIỮA */}
      <div className="text-center max-w-3xl mx-auto mb-4 mt-1">
        <h2 className="!text-xl md:!text-2xl font-bold text-gray-900 uppercase tracking-tight flex items-center justify-center gap-3">
          {title}
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-[#18631c] to-[#2e7d32] mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">{subtitle}</p>

        {/* NÚT GỌI ĐIỆN NGAY DƯỚI TIÊU ĐỀ */}
        <div className="mt-5 inline-block">
          <a
            href={`tel:${hotline.replace(/\./g, '')}`}
            className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-sm md:text-base transition-all shadow-md hover:scale-105 group"
          >
            <span className="bg-white/20 p-1.5 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
            </span>
            <span>Báo Giá Nhanh:</span>
            <span className="text-yellow-300 font-bold">{hotline}</span>
          </a>
        </div>
      </div>

      {/* BẢNG DỮ LIỆU */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-left border-collapse text-sm md:text-[15px]">
          <thead>
            <tr className="bg-gray-100 text-gray-800 font-bold border-b border-gray-200 uppercase text-sm tracking-wider">
              <th className="py-3.5 px-4">{categoryHeader}</th>
              <th className="py-3.5 px-4">Đơn Vị</th>
              <th className="py-3.5 px-4 text-brand-700">Mức Giá Dự Kiến (VNĐ)</th>
              <th className="py-3.5 px-4">Tình Trạng / Ghi Chú</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white hover:bg-green-50/40" : "bg-gray-50/60 hover:bg-green-50/40"}>
                <td className="py-3.5 px-4 font-medium text-gray-900 text-sm">{row.name}</td>
                <td className="py-3.5 px-4 text-gray-600 text-sm">{row.unit || "Cái/Bộ"}</td>
                <td className="py-3.5 px-4 font-medium text-red-600 text-sm">{row.priceRange}</td>
                <td className="py-3.5 px-4 text-gray-600 text-sm">{row.note || "Tùy độ mới và công suất"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* LƯU Ý DƯỚI BẢNG */}
      <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs md:text-sm text-amber-800 flex items-start gap-2">
        <span className="font-bold text-sm leading-none">💡</span>
        <span>
          <strong>Lưu ý quan trọng:</strong> Bảng giá trên mang tính chất tham khảo. Đồ Cũ Trung Kiên luôn cam kết <strong>định giá cao hơn thị trường từ 10% - 25%</strong>, không ép giá và thanh toán dứt điểm 100% bằng tiền mặt hoặc chuyển khoản trước khi chuyển hàng.
        </span>
      </div>
    </section>
  );
}