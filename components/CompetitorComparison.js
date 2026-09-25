export default function CompetitorComparison() {
  const criteria = [
    {
      feature: "Mức giá thu mua",
      trungKien: "Cao hơn 20% – 30% so với thị trường; định giá theo giá trị sử dụng còn lại",
      competitor: "Thường ép giá tối đa, tính theo giá phế liệu hoặc ve chai rẻ bèo",
      highlight: true
    },
    {
      feature: "Thời gian có mặt khảo sát",
      trungKien: "Có mặt sau 15 – 30 phút trên toàn TP.HCM hoặc báo giá Zalo chỉ 5 phút",
      competitor: "Hẹn giờ không chuẩn, kéo dài từ 1 – 2 ngày gây lỡ kế hoạch trả mặt bằng",
      highlight: false
    },
    {
      feature: "Tháo dỡ & Dọn dẹp mặt bằng",
      trungKien: "Bao trọn gói tháo dỡ, bốc xếp, quét dọn sạch sẽ 100% trước khi bàn giao",
      competitor: "Bắt chủ nhà tự tháo hoặc trừ tiền công tháo dỡ, dọn dẹp rất bừa bãi",
      highlight: true
    },
    {
      feature: "Phương tiện vận chuyển",
      trungKien: "Đội xe tải riêng 1.5 – 5 tấn vào được tận hẻm, bốc xếp trong ngày",
      competitor: "Phải thuê xe ngoài, phát sinh phụ phí vận chuyển tính vào khách",
      highlight: false
    },
    {
      feature: "Hình thức thanh toán",
      trungKien: "Thanh toán 100% tiền mặt hoặc chuyển khoản ngay tại chỗ trước khi chuyển hàng",
      competitor: "Thường giữ lại tiền cọc, thanh toán chậm trễ hoặc kỳ kèo sau khi bốc hàng",
      highlight: true
    },
    {
      feature: "Phạm vi nhận thu mua",
      trungKien: "Thu mua từ số lượng ít đến trọn gói nhà hàng, khách sạn, xưởng hàng ngàn m²",
      competitor: "Chỉ chọn lọc món đồ có lời cao, bỏ lại những đồ cồng kềnh khó chở",
      highlight: false
    }
  ];

  return (
    <section className="py-2 md:py-4 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">

        {/* TIÊU ĐỀ */}
        <div className="text-center mb-2 md:mb-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#111827] uppercase tracking-tight">
            Vì Sao Chọn <span className="text-[#18631c]">Đồ Cũ Trung Kiên</span> Thay Vì Đơn Vị Khác?
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#18631c] to-[#2e7d32] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 text-[15px] md:text-lg max-w-3xl mx-auto mt-4 font-medium leading-relaxed">
            Xem ngay bảng so sánh thực tế dưới đây để hiểu vì sao hơn <strong className="text-[#18631c]">10.000+ khách hàng</strong> tại TP.HCM và các tỉnh lân cận luôn ưu tiên liên hệ Trung Kiên khi cần thanh lý.
          </p>
        </div>

        {/* BẢNG SO SÁNH TRỰC QUAN */}
        <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-xl bg-white">
          <table className="w-full text-left border-collapse min-w-[680px]">
            <thead>
              <tr className="border-b border-gray-200 text-sm md:text-base">
                <th className="py-5 px-6 bg-gray-50 text-gray-700 font-bold w-[25%] uppercase tracking-wider">
                  Tiêu Chí Đánh Giá
                </th>
                <th className="py-5 px-6 bg-[#18631c] text-white font-black w-[40%] text-center md:text-left text-base md:text-lg uppercase tracking-wide shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></span>
                    ĐỒ CŨ TRUNG KIÊN (Ưu tiên số 1)
                  </div>
                </th>
                <th className="py-5 px-6 bg-gray-100 text-gray-500 font-bold w-[35%] uppercase tracking-wider">
                  Đơn Vị Thu Mua Khác / Ve Chai
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm md:text-[15px]">
              {criteria.map((item, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors hover:bg-gray-50/80 ${item.highlight ? 'bg-green-50/20' : ''}`}
                >
                  {/* TIÊU CHÍ */}
                  <td className="py-5 px-6 font-bold text-gray-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#18631c] flex-shrink-0"></span>
                    {item.feature}
                  </td>

                  {/* TRUNG KIÊN */}
                  <td className="py-5 px-6 bg-green-50/40 border-x border-green-100/60 font-semibold text-gray-900">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#18631c] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="leading-relaxed">{item.trungKien}</span>
                    </div>
                  </td>

                  {/* ĐỐI THỦ */}
                  <td className="py-5 px-6 text-gray-500">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="leading-relaxed">{item.competitor}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CAM KẾT & CTA DƯỚI BẢNG */}
        <div className="mt-8 bg-gradient-to-r from-gray-900 to-[#111827] text-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-black text-yellow-400 uppercase tracking-wide">
              ⚡ Cam kết định giá trung thực - Không ép giá dù chỉ 1 đồng!
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              Chụp ảnh gửi qua Zalo ngay để nhận báo giá chính xác chỉ trong 5 phút.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {/* Nút Gọi Hotline (Đã thay bằng SVG) */}
            <a
              href="tel:0398771444"
              className="bg-[#18631c] hover:bg-[#2e7d32] text-white font-bold py-3.5 px-6 rounded-xl transition duration-300 shadow-lg text-sm md:text-base uppercase tracking-wider flex items-center gap-2.5 group"
            >
              <svg
                className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              0398.771.444
            </a>

            {/* Nút Gửi Zalo (Đã thay bằng ảnh icon Zalo chuẩn) */}
            <a
              href="https://zalo.me/0398771444"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0068ff] hover:bg-[#0052cc] text-white font-bold py-3.5 px-6 rounded-xl transition duration-300 shadow-lg text-sm md:text-base uppercase tracking-wider flex items-center gap-2.5 group"
            >
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center p-0.5 overflow-hidden shadow-sm group-hover:scale-110 transition-transform">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
                  alt="Zalo"
                  className="w-full h-full object-contain"
                />
              </div>
              Gửi Ảnh Zalo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}