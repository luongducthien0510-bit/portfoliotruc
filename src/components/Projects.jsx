import React from 'react';
import { FilePdf } from '@phosphor-icons/react';

const projectsData = [
  {
    tag: "Bài 01",
    title: "Máy tính và các thiết bị ngoại vi",
    target: "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành Windows.",
    summary: "Thực hiện tìm hiểu các thành phần cơ bản của máy tính (CPU, RAM, ổ cứng,...) và các thiết bị ngoại vi (bàn phím, chuột, máy in, máy chiếu,...). Trình bày dưới dạng báo cáo có hình ảnh minh họa.",
    links: [
      { label: "Xem PDF bài tập", url: "/pdfs/bai1.pdf" }
    ]
  },
  {
    tag: "Bài 02",
    title: "Khai thác dữ liệu và thông tin",
    target: "Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.",
    summary: "Thực hiện tìm kiếm, thu thập và đánh giá các nguồn tài liệu liên quan đến chủ đề nghiên cứu từ cơ sở dữ liệu học thuật, tạp chí khoa học, sách chuyên khảo và các nguồn mở. Tổng hợp kết quả dưới dạng bảng đánh giá độ tin cậy của từng nguồn.",
    links: [
      { label: "Xem PDF bài tập", url: "/pdfs/bai2.pdf" }
    ]
  },
  {
    tag: "Bài 03",
    title: "Tổng quan về trí tuệ nhân tạo",
    target: "Phát triển kỹ năng viết prompt hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn trong học tập.",
    summary: "Thiết kế và thử nghiệm các phiên bản prompt cho ba tác vụ học tập phổ biến bằng công cụ AI. So sánh kết quả, phân tích hiệu quả của từng prompt và tổng hợp các nguyên tắc viết prompt hiệu quả.",
    links: [
      { label: "Xem PDF bài tập", url: "/pdfs/bai3.pdf" }
    ]
  },
  {
    tag: "Bài 04",
    title: "Giao tiếp và hợp tác trong môi trường số",
    target: "Thành thạo các công cụ hợp tác trực tuyến và thể hiện năng lực quản lý, điều phối cá nhân trong dự án nhóm.",
    summary: "Thực hiện sử dụng các công cụ hợp tác trực tuyến để quản lý công việc cá nhân, cộng tác soạn thảo, lưu trữ tài liệu và trao đổi với nhóm. Ghi lại quá trình thực hiện và đánh giá hiệu quả của các công cụ thông qua báo cáo kèm minh chứng.",
    links: [
      { label: "Xem PDF bài tập", url: "/pdfs/bai4.pdf" }
    ]
  },
  {
    tag: "Bài 05",
    title: "Sáng tạo nội dung số",
    target: "Thành thạo việc sử dụng các công cụ AI tạo sinh để hỗ trợ quá trình sáng tạo nội dung số.",
    summary: "Thực hiện sáng tạo một sản phẩm nội dung với sự hỗ trợ của các công cụ AI tạo sinh, ghi lại quá trình sử dụng, so sánh kết quả và hoàn thiện sản phẩm thông qua chỉnh sửa, tích hợp đầu ra của AI với ý tưởng cá nhân.",
    links: [
      { label: "PDF bài tập (1)", url: "/pdfs/bai5.pdf" },
      { label: "PDF bài tập (2)", url: "/pdfs/bai5thuhai.pdf" }
    ]
  },
  {
    tag: "Bài 06",
    title: "An toàn và liêm chính học thuật trong môi trường số",
    target: "Phát triển kỹ năng sử dụng AI có trách nhiệm và đạo đức trong học tập và nghiên cứu.",
    summary: "Thực hiện nghiên cứu chính sách sử dụng AI trong học thuật, ứng dụng AI hỗ trợ một nhiệm vụ học tập và phân tích các vấn đề đạo đức liên quan. Tổng hợp kết quả thành báo cáo kèm infographic và bộ nguyên tắc sử dụng AI có trách nhiệm.",
    links: [
      { label: "Xem PDF bài tập", url: "/pdfs/bai6.pdf" }
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-[1280px] mx-auto px-8 py-32">
      <div className="mb-16 max-w-2xl reveal">
        <h2 className="font-serif italic text-4xl mb-4 text-text-main">
          Tuyển tập bài học
        </h2>
        <p className="text-text-muted text-[1.1rem] leading-relaxed">
          Hệ thống 06 dự án minh chứng kỹ năng số. Nhấn vào liên kết để xem tài liệu chi tiết (PDF).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`group flex flex-col bg-surface rounded-2xl p-8 border border-text-main/6 text-text-main no-underline transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-text-main/5 hover:bg-canvas hover:border-accent-brand reveal reveal-delay-${(index % 3) + 1}`}
          >
            <div className="flex-grow mb-6">
              <span className="text-[0.75rem] uppercase font-semibold tracking-wider text-text-muted mb-3 inline-block">
                {project.tag}
              </span>
              <h3 className="font-serif text-xl font-semibold leading-snug mb-4">
                {project.title}
              </h3>
              
              <div className="mb-4">
                <p className="text-[0.75rem] uppercase font-bold tracking-wider text-text-main mb-1">
                  Mục tiêu
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  {project.target}
                </p>
              </div>

              <div>
                <p className="text-[0.75rem] uppercase font-bold tracking-wider text-text-main mb-1">
                  Tóm tắt thực hiện
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  {project.summary}
                </p>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap mt-auto">
              {project.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2.5 px-4 bg-canvas text-text-main rounded-lg no-underline text-[0.85rem] font-semibold border border-text-main/10 transition-all duration-300 hover:!bg-text-main hover:!text-surface group-hover:bg-text-main group-hover:text-surface"
                >
                  <FilePdf size={18} weight="bold" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
