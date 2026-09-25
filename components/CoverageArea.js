export default function CoverageArea() {
  const regions = [
    {
      group: "Khu Vực Trung Tâm TP.HCM",
      time: "Có mặt sau 15 – 25 phút",
      districts: ["Quận 1", "Quận 3", "Quận 4", "Quận 5", "Quận 10", "Quận Phú Nhuận", "Quận Bình Thạnh"]
    },
    {
      group: "Khu Vực Phía Tây & Nam TP.HCM",
      time: "Có mặt sau 20 – 30 phút",
      districts: ["Quận 6", "Quận 7", "Quận 8", "Quận 11", "Quận Bình Tân", "Quận Tân Bình", "Quận Tân Phú"]
    },
    {
      group: "Khu Vực Phía Đông & Phía Bắc",
      time: "Có mặt sau 20 – 35 phút",
      districts: ["TP. Thủ Đức (Q2, Q9, Thủ Đức)", "Quận 12", "Quận Gò Vấp"]
    },
    {
      group: "Huyện Ngoại Thành & Tỉnh Lân Cận",
      time: "Khảo sát nhanh trong ngày",
      districts: ["Huyện Bình Chánh", "Huyện Hóc Môn", "Huyện Nhà Bè", "Huyện Củ Chi", "Bình Dương", "Đồng Nai", "Long An", "Tây Ninh"]
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-[#f8fafc] border-t border-gray-100 overflow-hidden" id="khu-vuc-thu-mua">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        
        {/* TIÊU ĐỀ */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18631c]/10 text-[#18631c] text-xs md:text-sm font-bold uppercase tracking-wider mb-3">
            📍 Mạng Lưới Phủ Khắp Toàn Miền Nam
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] uppercase tracking-tight">
            Khu Vực <span className="text-[#18631c]">Thu Mua Tận Nơi</span> Của Trung Kiên
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#18631c] to-[#2e7d32] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 text-[15px] md:text-lg max-w-3xl mx-auto mt-4 font-medium leading-relaxed">
            Với hệ thống <strong className="text-gray-900">4 chi nhánh kho bãi lớn</strong> cùng đội xe tải riêng túc trực tại các quận huyện, Đồ Cũ Trung Kiên cam kết có mặt khảo sát tận nơi chỉ sau <strong className="text-[#18631c]">15 - 30 phút</strong> nhận yêu cầu.
          </p>
        </div>

        {/* LƯỚI KHU VỰC */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((reg, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#18631c]/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-[#18631c]/10 text-[#18631c] flex items-center justify-center font-bold text-lg group-hover:bg-[#18631c] group-hover:text-white transition-colors">
                    {idx + 1}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-green-50 text-[#18631c] px-3 py-1 rounded-full border border-green-200">
                    ⚡ {reg.time}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#111827] mb-4 group-hover:text-[#18631c] transition-colors">
                  {reg.group}
                </h3>

                <ul className="space-y-2">
                  {reg.districts.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#18631c]/60"></span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#18631c]">
                <span>Tự tháo dỡ & vận chuyển</span>
                <span>Miễn phí 100%</span>
              </div>
            </div>
          ))}
        </div>

        {/* GHI CHÚ BỔ TRỢ SEO TỪ KHÓA LOCAL */}
        <div className="mt-8 bg-white border border-gray-200/70 rounded-2xl p-5 md:p-6 text-center text-gray-600 text-sm leading-relaxed">
          <p className="m-0">
            📌 <strong>Dù bạn ở hẻm nhỏ hay mặt tiền lớn:</strong> Đội ngũ bốc xếp chuyên nghiệp cùng xe tải chuyên dụng của Đồ Cũ Trung Kiên luôn sẵn sàng hỗ trợ thu mua trọn gói nhà hàng, quán ăn, quán cafe, đồ dùng gia đình, khách sạn, xưởng công nghiệp tại mọi ngõ ngách TP.HCM và các tỉnh miền Nam lân cận.
          </p>
        </div>

      </div>
    </section>
  );
}
