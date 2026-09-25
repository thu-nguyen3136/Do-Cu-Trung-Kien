import Link from 'next/link';
import SEOHead from '../components/SEOHead';

export default function Custom404() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4 text-center py-20">
      <SEOHead
        title="404 - Không Tìm Thấy Trang | Đồ Cũ Trung Kiên"
        description="Trang bạn tìm kiếm không tồn tại hoặc đã được chuyển sang địa chỉ mới."
        canonical="/404"
        noindex={true}
      />
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <h1 className="text-7xl font-black text-[#2e7d32] mb-2 tracking-tight">404</h1>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Không tìm thấy trang yêu cầu</h2>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          Nội dung này có thể đã bị xóa hoặc đường dẫn bị thay đổi. Vui lòng quay về trang chủ để tiếp tục tìm kiếm dịch vụ thu mua đồ cũ.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-[#2e7d32] text-white font-bold rounded-xl shadow-lg shadow-[#2e7d32]/20 hover:bg-[#1b5e20] transition-colors text-sm uppercase tracking-wide"
        >
          ← Quay Về Trang Chủ
        </Link>
      </div>
    </div>
  );
}
