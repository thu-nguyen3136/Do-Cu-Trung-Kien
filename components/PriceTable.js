import Link from 'next/link';

export default function PriceTable({
  title = "Bảng Giá Thu Mua Tham Khảo Mới Nhất",
  subtitle = "Mức giá có thể thay đổi tùy thuộc vào tình trạng sử dụng, thương hiệu và số lượng sản phẩm thực tế. Liên hệ để nhận báo giá chính xác nhất sau 15-30 phút!",
  items = [],
  hotline = "0398.771.444"
}) {
  if (!items || items.length === 0) return null;

  return (
    <section className="my-10 bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 uppercase flex items-center gap-3">
            <span className="w-2 h-7 bg-brand-600 rounded-full inline-block"></span>
            {title}
          </h2>
          <p className="text-gray-600 text-sm mt-2">{subtitle}</p>
        </div>
        <div className="shrink-0">
          <a
            href={`tel:${hotline.replace(/\./g, '')}`}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
          >
            <span>📞 Báo Giá Nhanh:</span>
            <span className="text-yellow-300 font-extrabold">{hotline}</span>
          </a>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left border-collapse text-sm md:text-[15px]">
          <thead>
            <tr className="bg-gray-100 text-gray-800 font-bold border-b border-gray-200 uppercase text-xs tracking-wider">
              <th className="py-3.5 px-4">Hạng Mục Thu Mua</th>
              <th className="py-3.5 px-4">Đơn Vị</th>
              <th className="py-3.5 px-4 text-brand-700">Mức Giá Dự Kiến (VNĐ)</th>
              <th className="py-3.5 px-4">Tình Trạng / Ghi Chú</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white hover:bg-green-50/40" : "bg-gray-50/60 hover:bg-green-50/40"}>
                <td className="py-3.5 px-4 font-semibold text-gray-900">{row.name}</td>
                <td className="py-3.5 px-4 text-gray-600">{row.unit || "Cái/Bộ"}</td>
                <td className="py-3.5 px-4 font-bold text-red-600">{row.priceRange}</td>
                <td className="py-3.5 px-4 text-gray-600 text-xs md:text-sm">{row.note || "Tùy độ mới và công suất"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs md:text-sm text-amber-800 flex items-start gap-2">
        <span className="font-bold text-base leading-none">💡</span>
        <span>
          <strong>Lưu ý quan trọng:</strong> Bảng giá trên mang tính chất tham khảo. Đồ Cũ Trung Kiên luôn cam kết <strong>định giá cao hơn thị trường từ 10% - 25%</strong>, không ép giá và thanh toán dứt điểm 100% bằng tiền mặt hoặc chuyển khoản trước khi chuyển hàng.
        </span>
      </div>
    </section>
  );
}
