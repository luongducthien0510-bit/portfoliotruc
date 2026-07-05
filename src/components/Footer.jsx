import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 px-8 border-t border-text-main/6 text-center text-text-muted text-sm mt-16">
      <p>&copy; {new Date().getFullYear()} Đỗ Thanh Trúc. Portfolio Kỹ năng số.</p>
    </footer>
  );
}
