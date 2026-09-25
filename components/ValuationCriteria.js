export default function ValuationCriteria() {
  const tips = [
    {
      title: "Chất liệu & Độ bền",
      desc: "Đồ inox (ưu tiên Inox 304 không gỉ so với 201), gỗ tự nhiên (gỗ gõ, hương, căm xe, sồi) luôn được định giá cao gấp 2-3 lần so với kim loại pha hay gỗ ép MDF.",
      icon: "🪵"
    },
    {
      title: "Tình trạng hoạt động & Độ mới",
      desc: "Thiết bị điện máy, tủ đông, tủ mát, máy pha cafe còn hoạt động êm ái, nguyên block lạnh, chưa qua sửa chữa lớn sẽ giữ giá từ 50% - 70% giá trị gốc.",
      icon: "❄️"
    },
    {
      title: "Thương hiệu & Nguồn gốc",
      desc: "Các thương hiệu uy tín như Sanaky, Berjaya, Hoshizaki, Alaska, Casadio, Nuova Simonelli luôn được Trung Kiên thu mua với mức giá ưu ái vượt bậc.",
      icon: "🏷️"
    },
    {
      title: "Số lượng & Tính đồng bộ",
      desc: "Thanh lý trọn gói toàn bộ quán hoặc lô bàn ghế đồng bộ về mẫu mã sẽ giúp tiết kiệm chi phí vận chuyển, từ đó đẩy tổng giá trị thu mua lên mức cao nhất.",
      icon: "📦"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        
        {/* TIÊU ĐỀ */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18631c]/10 text-[#18631c] text-xs md:text-sm font-bold uppercase tracking-wider mb-3">
            💡 Tư Vấn Chuyên Gia
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] uppercase tracking-tight">
            4 Tiêu Chí Quyết Định <span className="text-[#18631c]">Giá Thanh Lý Đồ Cũ</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#18631c] to-[#2e7d32] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 text-[15px] md:text-lg max-w-3xl mx-auto mt-4 font-medium leading-relaxed">
            Hiểu rõ những tiêu chí này sẽ giúp quý khách hàng tự đánh giá được giá trị sản phẩm của mình và đảm bảo nhận được báo giá sát nhất, không lo bị ép giá.
          </p>
        </div>

        {/* LƯỚI TIÊU CHÍ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50/70 hover:bg-white rounded-3xl p-6 md:p-8 border border-gray-200/80 hover:border-[#18631c]/30 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-[#18631c]/10 shadow-sm border border-gray-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#18631c] transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200/50 flex items-center gap-2 text-xs font-bold text-[#18631c]">
                <span>✓ Tiêu chí định giá minh bạch</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
