'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Link dùng chung để dễ quản lý
  const navLinkClass = "text-brand-600 hover:text-brand-500 font-bold py-2 px-2 xl:px-4 transition-all duration-300 relative group flex items-center";
  const subMenuLinkClass = "px-5 py-2.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-7 transition-all duration-300 block";

  return (
    <header className="w-full sticky top-0 z-[100] shadow-md font-sans bg-white">
      {/* --- MENU CHÍNH --- */}
      <nav className="border-b border-gray-100 relative">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex justify-between items-stretch h-[65px] md:h-[80px]">

          {/* 1. Nút Mobile Menu */}
          <button
            className="lg:hidden text-brand-600 hover:text-brand-700 transition z-[110] self-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>

          {/* 2. LOGO */}
          <Link href="/" className="flex items-center relative z-[100] lg:static lg:translate-x-0 absolute left-1/2 -translate-x-1/2 self-center shrink-0">
            {/* Tăng kích thước khung logo một chút và đảm bảo độ sắc nét */}
            <div className="relative w-64 h-10 md:w-72 md:h-16">
              <Image
                src="/logo-dai-trung-kien.jpg"
                alt="Logo Đồ Cũ Trung Kiên"
                fill
                className="object-contain object-left md:object-center"
                priority
                quality={100}
                unoptimized={true}
              />
            </div>
          </Link>

          {/* 3. Menu Desktop & Cta Button */}
          <div className="hidden lg:flex items-center space-x-4 h-full">
            <ul className="flex items-stretch space-x-1 font-bold text-[13px] xl:text-[14px] uppercase tracking-wide h-full m-0 p-0">
              <li className="h-full flex items-center m-0">
                <Link href="/" className={navLinkClass}>Trang chủ</Link>
              </li>
              <li className="h-full flex items-center m-0">
                <Link href="/gioi-thieu" className={navLinkClass}>Giới Thiệu</Link>
              </li>

              {/* Submenu: Thu Mua Đồ Cũ */}
              <li className="relative group h-full cursor-pointer flex items-center m-0">
                <div className={navLinkClass}>
                  Thu Mua Đồ Cũ
                  <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full"></span>
                </div>

                <div className="absolute left-0 top-[100%] w-[260px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pt-2">
                  <ul className="bg-white border-t-4 border-brand-600 shadow-2xl rounded-b-xl overflow-hidden border-x border-b border-gray-100">
                    <li><Link href="/thanh-ly-quan-ca-phe" className={subMenuLinkClass}>Thanh Lý Quán Cafe</Link></li>
                    <li><Link href="/thanh-ly-quan-an" className={subMenuLinkClass}>Thanh Lý Quán Ăn</Link></li>
                    <li><Link href="/thanh-ly-quan-nhau" className={subMenuLinkClass}>Thanh Lý Quán Nhậu</Link></li>
                    <li><Link href="/thanh-ly-nha-hang" className={subMenuLinkClass}>Thanh Lý Nhà Hàng</Link></li>
                    <li><Link href="/thanh-ly-quan-pho" className={subMenuLinkClass}>Thanh Lý Quán Phở</Link></li>
                    <li><Link href="/thanh-ly-quan-tra-sua" className={subMenuLinkClass}>Thanh Lý Quán Trà Sữa</Link></li>
                    <li><Link href="/thu-mua-tu-dong-tu-mat" className={subMenuLinkClass}>Thu Mua Tủ Đông, Tủ Mát</Link></li>
                    <li><Link href="/thu-mua-do-inox-cu" className={subMenuLinkClass}>Thu Mua Đồ Inox Cũ</Link></li>
                    <li><Link href="/thu-mua-do-cu-gia-dinh" className={subMenuLinkClass}>Thu mua đồ cũ gia đình</Link></li>
                    <li><Link href="/thu-mua-noi-that-khach-san" className={subMenuLinkClass}>Thu Mua Nội Thất Khách Sạn</Link></li>
                  </ul>
                </div>
              </li>

              <li className="h-full flex items-center m-0">
                <Link href="/tin-tuc" className={navLinkClass}>Tin Tức</Link>
              </li>
              <li className="h-full flex items-center m-0">
                <Link href="/lien-he" className={navLinkClass}>Liên Hệ</Link>
              </li>
            </ul>

            {/* Nút Gọi Ngay - Thêm vào để đỡ trống header */}
            <div className="flex items-center pl-4 border-l border-gray-100 h-1/2">
              <a href="tel:0398771444" className="bg-brand-600 text-white px-5 py-2.5 rounded-full text-[13px] font-black uppercase tracking-wider hover:bg-brand-700 transition hover:shadow-lg hover:-translate-y-0.5 transform flex items-center gap-2">
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center animate-pulse">📞</span>
                0398.771.444
              </a>
            </div>
          </div>
        </div>

        {/* --- MOBILE MENU --- */}
        <div className={`fixed inset-0 bg-black/60 z-[140] lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsOpen(false)} />

        <div className={`fixed top-0 left-0 w-[85%] max-w-[320px] h-full bg-white z-[150] lg:hidden transition-transform duration-500 ease-in-out shadow-2xl ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col h-full p-0">
            {/* Header Mobile Menu */}
            <div className="bg-brand-600 p-6 flex justify-between items-center text-white">
              <div className="font-bold italic text-xl">MENU</div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-black/10 rounded-full transition">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* List links mobile*/}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
              <ul className="flex flex-col space-y-0.5 font-bold text-gray-800 uppercase text-[14px]">
                <li><Link href="/" className="block py-2 px-3 border-b border-gray-50 hover:text-brand-600" onClick={() => setIsOpen(false)}>Trang chủ</Link></li>
                <li><Link href="/gioi-thieu" className="block py-2 px-3 border-b border-gray-50 hover:text-brand-600" onClick={() => setIsOpen(false)}>Giới Thiệu</Link></li>

                <li className="py-2 px-3 text-brand-600 text-[12px] font-black border-b border-gray-50 bg-gray-50/50">Thu Mua Đồ Cũ</li>
                <ul className="pl-4">

                  <li><Link href="/thanh-ly-quan-cafe" className="block py-1.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thanh Lý Quán Cafe</Link></li>
                  <li><Link href="/thanh-ly-quan-an" className="block py-1.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thanh Lý Quán Ăn</Link></li>
                  <li><Link href="/thanh-ly-quan-nhau" className="block py-1.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thanh Lý Quán Nhậu</Link></li>
                  <li><Link href="/thanh-ly-nha-hang" className="block py-1.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thanh Lý Nhà Hàng</Link></li>
                  <li><Link href="/thanh-ly-quan-pho" className="block py-1.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thanh Lý Quán Phở</Link></li>
                  <li><Link href="/thanh-ly-quan-tra-sua" className="block py-1.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thanh Lý Quán Trà Sữa</Link></li>
                  <li><Link href="/thu-mua-tu-dong-tu-mat" className="block py-1.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thu Mua Tủ Đông, Tủ Mát</Link></li>
                  <li><Link href="/thu-mua-do-inox-cu" className="block py-1.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thu Mua Đồ Inox Cũ</Link></li>
                  <li><Link href="/thu-mua-do-cu-gia-dinh" className="block py-1.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thu mua đồ cũ gia đình</Link></li>
                  <li><Link href="/thu-mua-noi-that-khach-san" className="block py-1.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thu Mua Nội Thất Khách Sạn</Link></li>
                </ul>

                <li><Link href="/tin-tuc" className="block py-2 px-3 border-b border-gray-50" onClick={() => setIsOpen(false)}>Tin Tức</Link></li>
                <li><Link href="/lien-he" className="block py-2 px-3 border-b border-gray-50" onClick={() => setIsOpen(false)}>Liên Hệ</Link></li>
              </ul>
            </div>

            {/* Button call mobile */}
            <div className="p-4 bg-gray-50">
              <a href="tel:0398771444" className="block w-full bg-brand-600 text-white text-center py-4 rounded-xl font-bold shadow-lg hover:bg-brand-700 transition">
                GỌI BÁO GIÁ NGAY
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
