import React from 'react';
import GoalsCard from './GoalsCard';

export default function Hero() {
  return (
    <section id="about" className="w-full max-w-[1280px] mx-auto px-8 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-start min-h-[90vh]">
        {/* Left Info */}
        <div className="reveal">
          {/* Profile Photo */}
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-8 border-4 border-surface shadow-lg shadow-text-main/5">
            <img
              src="https://picsum.photos/seed/avatar/300/300"
              alt="Đỗ Thanh Trúc"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none mb-4 text-text-main">
            Đỗ Thanh Trúc.
          </h1>
          <p className="text-xl font-medium text-text-main mb-6">
            Sinh viên ngành Ngôn ngữ Anh, Đại học Ngoại ngữ ĐHQGHN.
          </p>
          <p className="text-[1.1rem] text-text-muted max-w-[95%] mb-10 leading-relaxed">
            Em đam mê học hỏi những điều mới và luôn nỗ lực trau dồi bản thân tốt lên mỗi ngày.
          </p>
          
          <div>
            <span className="text-[0.8rem] uppercase tracking-[0.1em] text-text-muted font-semibold block mb-2">
              Sở thích
            </span>
            <p className="text-text-main text-[1.05rem] leading-relaxed">
              Nghe nhạc, khám phá những điều thú vị trong cuộc sống, trải nghiệm những điều liên quan đến ngành học, đam mê ăn uống.
            </p>
          </div>
        </div>

        {/* Right Goals */}
        <div className="reveal reveal-delay-2">
          <GoalsCard />
        </div>
      </div>
    </section>
  );
}
