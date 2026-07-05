import React from 'react';
import { CheckCircle, Lightning } from '@phosphor-icons/react';

export default function Reflection() {
  return (
    <section id="reflection" className="w-full max-w-[1280px] mx-auto px-8 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Quote Block */}
        <div className="p-10 md:p-16 bg-accent-brand rounded-3xl relative reveal">
          <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl leading-snug text-text-main mb-8 relative z-10">
            "Quá trình xây dựng danh mục này giúp tôi hệ thống hóa lại toàn bộ kiến thức kỹ năng số, biến lý thuyết thành sản phẩm thực tế."
          </p>
          <div className="text-sm md:text-base font-semibold text-text-main">
            Đỗ Thanh Trúc
          </div>
        </div>
        
        {/* Points List */}
        <div className="flex flex-col gap-10">
          <div className="reveal reveal-delay-1">
            <h4 className="text-lg md:text-xl font-semibold text-text-main mb-3 flex items-center gap-2.5">
              <CheckCircle size={24} weight="fill" className="text-text-main" />
              Điểm tâm đắc
            </h4>
            <p className="text-text-muted leading-relaxed">
              Khả năng tổng hợp và trình bày các dữ liệu bài học một cách trực quan. Việc ứng dụng công nghệ để tạo ra một không gian lưu trữ mang đậm dấu ấn cá nhân giúp tôi tự tin hơn vào năng lực số của mình.
            </p>
          </div>
          
          <div className="reveal reveal-delay-2">
            <h4 className="text-lg md:text-xl font-semibold text-text-main mb-3 flex items-center gap-2.5">
              <Lightning size={24} weight="fill" className="text-text-main" />
              Thách thức gặp phải
            </h4>
            <p className="text-text-muted leading-relaxed">
              Việc lựa chọn cách cấu trúc thông tin sao cho dễ tiếp cận nhất đòi hỏi nhiều lần thử nghiệm. Quá trình làm quen với các công cụ phát triển cũng là một rào cản ban đầu cần phải vượt qua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
