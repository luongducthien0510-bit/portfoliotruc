import React from 'react';
import { CheckCircle, Lightning, Star, BookOpen, ShieldCheck } from '@phosphor-icons/react';

export default function Reflection() {
  return (
    <section id="reflection" className="w-full max-w-[1280px] mx-auto px-8 py-32">
      <div className="mb-16 reveal">
        <h2 className="text-3xl md:text-5xl font-serif mb-6 text-text-main">
          Tổng kết
        </h2>
        <div className="w-20 h-1 bg-text-main mb-8"></div>
      </div>

      <div className="flex flex-col gap-16">
        
        {/* Reflection Overall */}
        <div className="reveal">
          <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-6">
            Trong quá trình hoàn thành dự án và việc thực hiện các bài tập theo tuần, em đã học hỏi và tiếp thu được rất nhiều điều bổ ích và tìm được nhiều phương pháp học tập hiệu quả qua AI. Việc sử dụng AI đúng cách đã giúp em tận dụng đáng kể nó vào trong quá trình hoàn thành các dự án lớn cũng như bổ sung cho bản thân các kiến thức mới mà mình chưa từng học qua trước đây. Cụ thể là, trong quá trình hoàn thành dự án, em đã:
          </p>
          <ul className="list-none space-y-4 text-text-muted leading-relaxed mb-6">
            <li className="flex items-start gap-3">
              <CheckCircle size={24} weight="fill" className="text-text-main flex-shrink-0 mt-1" />
              <span>Biết thêm nhiều các công cụ AI có ích giúp em cải thiện đáng kể trong việc tìm tài liệu học thuật như Perplexity, Consensus,... hay chỉnh sửa slide hoặc video một cách nhanh chóng nhưng vẫn rất đẹp mắt như: Gamma, Capcut,...</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={24} weight="fill" className="text-text-main flex-shrink-0 mt-1" />
              <span>Tiếp thu được các kiến thức xã hội trong việc sử dụng AI đúng cách, biết nhận biết các thông tin sai lệch trên mạng và chọn lọc những cái tích cực trong kỹ thuật số.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={24} weight="fill" className="text-text-main flex-shrink-0 mt-1" />
              <span>Nhận thức rõ hơn về vai trò của công nghệ số và AI trong học tập, công việc và cuộc sống.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={24} weight="fill" className="text-text-main flex-shrink-0 mt-1" />
              <span>Biết khai thác AI như một công cụ hỗ trợ thay vì phụ thuộc hoàn toàn, đồng thời luôn đảm bảo tính trung thực và liêm chính học thuật.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={24} weight="fill" className="text-text-main flex-shrink-0 mt-1" />
              <span>Tự tin hơn trong giao tiếp, hợp tác trực tuyến và sáng tạo nội dung số phục vụ học tập và công việc.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={24} weight="fill" className="text-text-main flex-shrink-0 mt-1" />
              <span>Có ý thức bảo vệ dữ liệu cá nhân, sử dụng công nghệ an toàn và tuân thủ các quy tắc đạo đức trên môi trường số.</span>
            </li>
          </ul>
          <p className="text-lg text-text-muted leading-relaxed mb-4">
            Trong tương lai, em sẽ tiếp tục ứng dụng AI để nâng cao hiệu quả học tập, nghiên cứu, phát triển kỹ năng nghề nghiệp và thích ứng với quá trình chuyển đổi số.
          </p>
          <p className="text-lg text-text-muted leading-relaxed">
            Qua đây, em thật sự rất trân trọng các trải nghiệm mà mình được học cũng như tích lũy các kinh nghiệm vô cùng hữu ích của các thầy cô. Sự truyền tải bài học từ thầy cô cũng giúp em mở mang thêm nhiều điều mà trước kia em chưa từng biết.
          </p>
        </div>

        {/* Skills learned */}
        <div className="p-10 md:p-12 bg-accent-brand/10 border border-accent-brand/20 rounded-3xl reveal reveal-delay-1">
          <h4 className="text-xl md:text-2xl font-semibold text-text-main mb-6 flex items-center gap-3">
            <BookOpen size={32} weight="fill" className="text-text-main" />
            Những kiến thức và kỹ năng quan trọng đã học
          </h4>
          <ul className="list-disc list-inside space-y-3 text-text-muted leading-relaxed">
            <li>Hiểu cấu tạo và chức năng của máy tính, các thiết bị ngoại vi và cách sử dụng hiệu quả.</li>
            <li>Biết cách tìm kiếm, khai thác, đánh giá và quản lý dữ liệu, thông tin trên môi trường số.</li>
            <li>Nắm được khái niệm, nguyên lý hoạt động, ứng dụng, lợi ích và hạn chế của trí tuệ nhân tạo.</li>
            <li>Rèn luyện kỹ năng giao tiếp, hợp tác và làm việc nhóm thông qua các nền tảng số.</li>
            <li>Biết sử dụng các công cụ số và AI để tạo, chỉnh sửa và chia sẻ nội dung số.</li>
            <li>Hiểu các nguyên tắc về an toàn thông tin, bảo mật dữ liệu và liêm chính học thuật; biết trích dẫn tài liệu đúng quy định.</li>
            <li>Biết ứng dụng AI trong học ngoại ngữ và giáo dục để hỗ trợ học tập, nghiên cứu và nâng cao hiệu quả làm việc.</li>
          </ul>
        </div>

        {/* Highlights & Challenges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="reveal reveal-delay-2 p-8 bg-background-light rounded-2xl border border-gray-200/10">
            <h4 className="text-xl font-semibold text-text-main mb-4 flex items-center gap-2.5">
              <Star size={28} weight="fill" className="text-text-main" />
              Điểm tâm đắc
            </h4>
            <p className="text-text-muted leading-relaxed">
              Trong quá trình xây dựng Portfolio, điều em cảm thấy tâm đắc nhất là lần đầu được trực tiếp tạo web cho riêng bản thân, em có cơ hội tiếp xúc với những công cụ và những thao tác mới trên máy. Điều này em nghĩ thật sự sẽ rất có ích trong tương lai khi phải tự xây dựng hình ảnh cá nhân thông qua portfolio.
            </p>
          </div>
          
          <div className="reveal reveal-delay-3 p-8 bg-background-light rounded-2xl border border-gray-200/10">
            <h4 className="text-xl font-semibold text-text-main mb-4 flex items-center gap-2.5">
              <Lightning size={28} weight="fill" className="text-text-main" />
              Thách thức gặp phải
            </h4>
            <p className="text-text-muted leading-relaxed">
              Tuy nhiên, việc nghĩ ra kiểu bố cục và thiết kế phù hợp với portfolio tốn khá nhiều thời gian của em. Vì là lần đầu làm nên em còn gặp nhiều bỡ ngỡ, dẫn đến một số chi tiết chưa thật sự làm em hài lòng. Tuy nhiên em vẫn coi bài portfolio này là một kinh nghiệm quý giá để cải thiện tốt hơn cho những lần sau vì nó là tiền đề cho sự mày mò và nỗ lực của bản thân em.
            </p>
          </div>
        </div>

        {/* Academic Integrity */}
        <div className="reveal reveal-delay-4 mt-8 p-10 bg-surface text-text-main border border-text-main/10 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            <ShieldCheck size={240} weight="fill" />
          </div>
          <div className="relative z-10">
            <h4 className="text-2xl md:text-3xl font-serif mb-6 flex items-center gap-3">
              <ShieldCheck size={36} weight="fill" />
              Cam kết Liêm chính Học thuật
            </h4>
            <div className="space-y-4 text-text-muted leading-relaxed text-lg">
              <p>
                Em tên là <strong>Đỗ Thanh Trúc</strong>, em cam kết mọi nội dung, số liệu và sản phẩm được trình bày trong portfolio này đều phản ánh đúng năng lực và quá trình học tập thực tế của bản thân mình. Trong suốt quá trình thực hiện, em có sử dụng AI như một công cụ hỗ trợ đề gợi ý ý tưởng thiết kế, hỗ trợ sửa lỗi diễn đạt và tối ưu hóa câu từ.
              </p>
              <p>
                Đối với em, AI là một công cụ sáng tạo để tiết kiệm thời gian, nhưng em vẫn luôn nhận thức được rằng nó không thể thay thế được tư duy của con người.
              </p>
              <p>
                Em cam đoan không ngụy tạo minh chứng, không sao chép sản phẩm của người khác và luôn trung thực với từng kết quả mà mình đã làm ra.
              </p>
              <p className="pt-4 font-serif italic text-xl">
                Em xin chân thành cảm ơn thầy cô đã dành thời gian theo dõi và đánh giá portfolio này.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
