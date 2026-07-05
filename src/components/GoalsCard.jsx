import React from 'react';
import { Target, Compass } from '@phosphor-icons/react';

export default function GoalsCard() {
  return (
    <div className="relative bg-gradient-to-br from-white/70 to-white/30 backdrop-blur-xl border border-white/80 rounded-3xl p-8 md:p-12 shadow-2xl shadow-text-main/5 overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-accent-brand/15 after:-z-10 after:rounded-[inherit]">
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-text-main mb-4 flex items-center gap-2">
          <Target size={24} weight="bold" className="text-text-main" />
          Mục tiêu học tập
        </h3>
        <ul className="list-disc pl-5 text-text-muted text-[0.95rem] flex flex-col gap-2.5 leading-relaxed">
          <li>Phát triển kỹ năng làm việc nhóm, giao tiếp và quản lý thời gian.</li>
          <li>Sử dụng thành thạo các công cụ học tập như Microsoft Office, Google Workspace và các nền tảng học trực tuyến.</li>
          <li>Tham gia ít nhất 1-2 câu lạc bộ tiếng Anh hoặc hoạt động ngoại khóa trong năm học.</li>
          <li>Tăng cường giao tiếp với giảng viên, bạn bè và người nước ngoài để cải thiện khả năng sử dụng tiếng Anh.</li>
          <li>Tìm hiểu các lĩnh vực nghề nghiệp của ngành Ngôn ngữ Anh như biên-phiên dịch, giảng dạy, truyền thông, du lịch, xuất nhập khẩu,...</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-text-main mb-4 flex items-center gap-2">
          <Compass size={24} weight="bold" className="text-text-main" />
          Định hướng phát triển
        </h3>
        <ul className="list-disc pl-5 text-text-muted text-[0.95rem] flex flex-col gap-2.5 leading-relaxed">
          <li>Xây dựng thói quen học tập chủ động trong mọi hoàn cảnh.</li>
          <li>Nỗ lực và cải thiện hơn sự tự tin trong giao tiếp.</li>
          <li>Rèn luyện các kỹ năng mềm như giao tiếp tốt, tích cực tham gia các hoạt động xã hội,...</li>
          <li>Xây dựng hình ảnh cá nhân chuyên nghiệp trên các nền tảng như Linkedin,...</li>
        </ul>
      </div>
    </div>
  );
}
