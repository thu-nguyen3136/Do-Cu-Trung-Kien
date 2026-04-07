import { NextResponse } from 'next/server'

// Danh sách đã lọc trùng và sửa lỗi dấu *
const BLACKLIST_PREFIXES = [
    '54.184.219',      // IPv4 cũ
    '2405:4802:93f5',   // IPv6 cũ
    '104.28.71',       // Đã gộp từ các IP lẻ 104.28.71.x
    '104.28.68',       // Đã gộp từ các IP lẻ 104.28.68.x
    '104.28.119',      // Đã gộp từ 104.28.119.*
    '103.199.41',      // Đã gộp
    '103.199.42',
    '103.199.71',
    '103.249.23',
    '103.249.22',
    '103.199.36',
    '167.114.139',
    '172.225.56',      // Đã gộp
    // '66.249.90',    // Cân nhắc: Đây thường là dải của Google Bot, tạm ẩn để tránh mất SEO
];

export function middleware(request) {
    // Lấy IP chính xác kể cả khi chạy qua proxy (Vercel/Cloudflare)
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : (request.ip || '');

    // Kiểm tra xem IP có bắt đầu bằng các dải trong danh sách đen không
    const isBlocked = BLACKLIST_PREFIXES.some(prefix => ip.startsWith(prefix));

    if (isBlocked && ip !== '') {
        // Trả về lỗi 403
        return new NextResponse('Access Denied', { status: 403 });
    }

    return NextResponse.next();
}

// Cấu hình chạy cho trang chủ và tất cả các trang con
export const config = {
    matcher: '/:path*',
}