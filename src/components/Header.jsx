import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center py-6 px-8 z-50 bg-canvas/85 backdrop-blur-md border-b border-text-main/5">
      <a href="#" className="flex items-center gap-2 no-underline">
        <img src="/ulis-logo.png" alt="ULIS Logo" className="h-10 w-auto" />
      </a>
      <ul className="flex gap-10 list-none m-0 p-0">
        <li>
          <a
            href="#about"
            className="text-sm font-medium text-text-muted no-underline hover:text-text-main transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-text-main after:transition-all after:duration-300 hover:after:w-full"
          >
            Giới thiệu
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-sm font-medium text-text-muted no-underline hover:text-text-main transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-text-main after:transition-all after:duration-300 hover:after:w-full"
          >
            Dự án
          </a>
        </li>
        <li>
          <a
            href="#reflection"
            className="text-sm font-medium text-text-muted no-underline hover:text-text-main transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-text-main after:transition-all after:duration-300 hover:after:w-full"
          >
            Tổng kết
          </a>
        </li>
      </ul>
    </header>
  );
}
