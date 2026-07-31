// File dữ liệu CV (Tiếng Việt)
// Bạn có thể cập nhật thông tin cá nhân của mình tại đây

export const viData = {
  personalInfo: {
    name: "Nguyễn Tự Kiên",
    title: "Sinh viên",
    dob: "08/01/2005",
    phone: "0395376905",
    email: "ngtukien218.work@gmail.com",
    address: "Dương Hòa, Hà Nội",
    github: "github.com/ngtukien",
  },
  sections: {
    education: "Học vấn",
    projects: "Dự án",
    awards: "Danh hiệu & Giải thưởng",
    certifications: "Chứng chỉ",
    activities: "Hoạt động",
    contact: "Liên hệ",
  },
  education: [
    {
      id: 1,
      time: "2023 - 2028 (dự kiến)",
      major: "Công nghệ phần mềm",
      school: "Học viện Công nghệ Bưu chính Viễn thông",
      details: [
        "GPA : 3.54",
        "Là sinh viên lớp tài năng khóa 2023",
        "Giành học bổng 4 kì liên tiếp."
      ]
    }
  ],
  projects: [
    {
      id: 1,
      name: "ToiYeuPTIT DevOps",
      role: "Platform Engineer",
      time: "4/2026 - 6/2026",
      description: "Nền tảng học tập và thực hành DevOps tương tác (tương tự KodeKloud), cung cấp môi trường lab thực tế cho học viên thao tác trực tiếp.",
      responsibilities: "Trực tiếp thiết kế và triển khai cụm Kubernetes cùng Container Runtime làm hạ tầng lõi. Xây dựng cơ chế cấp phát, cô lập (isolation) và thu hồi tài nguyên (môi trường lab/sandbox) tự động, duy trì tính ổn định khi có nhiều học viên truy cập đồng thời.",
      technologies: "Kubernetes, Docker, Sysbox Runtime, Ansible.",
      projectLink: "https://devops.toiyeuptit.com/"
    },
    {
      id: 2,
      name: "STEMIND",
      role: "Fullstack",
      time: "8/2025 - 11/2025",
      description: "Nền tảng EdTech kết hợp mạng xã hội học tập và sinh bài giảng tự động.",
      responsibilities: "Phát triển từ đầu đến cuối (End-to-End) phân hệ Web và hạ tầng của dự án. Xây dựng Frontend, thiết kế Backend API xử lý nghiệp vụ quản lý tài liệu đám mây (AWS S3, Cloudflare R2) và chịu trách nhiệm thiết lập luồng DevOps (đóng gói, triển khai) để tích hợp liền mạch với core AI do team phát triển.",
      achievements: "Giải Ba - Cuộc thi PTIT BOOTCAMP 2025.",
      technologies: "Django, LangChain OpenAI, AWS (S3, EC2)",
      sourceCode: "https://github.com/ngtukien/STEMIND.git"
    }
  ],
  awards: [
    { id: 1, time: "08 - 2025", title: "Giải ba PTIT Bootcamp \"Hack to Lead\" 2025" },
    { id: 2, time: "05 - 2025", title: "Giải nhì trong nội dung Computing Track của cuộc thi Huawei ICT 2024 - 2025 vòng quốc tế" },
    { id: 3, time: "02 - 2025", title: "Giải xuất sắc trong nội dung Computing Track của cuộc thi Huawei ICT 2024 - 2025 vòng APAC" },
    { id: 4, time: "12 - 2024", title: "Giải nhì trong nội dung Computing Track của cuộc thi Huawei ICT 2024 - 2025 vòng quốc gia" }
  ],
  certifications: [
    { id: 1, time: "02 - 2026", name: "Ultimate Devops Bootcamp by School of Devops" },
    { id: 2, time: "06 - 2025", name: "PTIT Samsung 2025 Devops Basis" },
    { id: 3, time: "12 - 2024", name: "TOEIC - 620" }
  ],
  activities: [
    {
      id: 1,
      time: "2023 - Nay",
      organization: "Liên chi Đoàn Khoa CNTT1 - PTIT",
      role: "Thành viên ban Hậu cần",
      details: [
        "Tham gia trao đổi kiến thức chuyên ngành.",
        "Tham gia các khóa học lập trình để hiểu sâu hơn chuyên môn, sát với thực tế.",
        "Tham gia một số sự kiện thiện nguyện.",
        "Tham gia hỗ trợ các sự kiện để trau dồi kĩ năng mềm."
      ]
    },
    {
      id: 2,
      time: "2025 - Nay",
      organization: "CLB Tôi yêu PTIT",
      role: "Thành viên team Dev - Cloud",
      details: [
        "Tham gia xây dựng các sản phẩm của CLB.",
        "Học hỏi kiến thức chuyên ngành.",
        "Tham gia vào các buổi seminar chia sẻ kiến thức."
      ]
    },
    {
      id: 3,
      time: "2025 - Nay",
      organization: "Lab ươm mầm tài năng - NITS",
      role: "Thành viên",
      details: [
        "Tham gia xây dựng các dự án.",
        "Xây dựng các buổi seminar chia sẻ kiến thức.",
        "Hỗ trợ đào tạo các bạn khóa dưới"
      ]
    }
  ]
};
