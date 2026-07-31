// CV Data (English)
// You can update your personal information here

export const enData = {
  personalInfo: {
    name: "Nguyen Tu Kien",
    title: "Student",
    dob: "08/01/2005",
    phone: "0395376905",
    email: "ngtukien218.work@gmail.com",
    address: "Duong Hoa, Hanoi",
    github: "github.com/ngtukien",
  },
  sections: {
    education: "Education",
    projects: "Projects",
    awards: "Honors & Awards",
    certifications: "Certifications",
    activities: "Activities",
    contact: "Contact Info",
  },

  education: [
    {
      id: 1,
      time: "2023 - 2028 (expected)",
      major: "Software Engineering",
      school: "Post and Telecommunications Institute of Technology",
      details: [
        "GPA: 3.54",
        "Student in the Talented Class of 2023",
        "Awarded scholarship for 4 consecutive semesters."
      ]
    }
  ],

  projects: [
    {
      id: 1,
      name: "ToiYeuPTIT DevOps",
      role: "Platform Engineer",
      time: "04/2026 - 06/2026",
      description: "An interactive DevOps learning and practice platform (similar to KodeKloud), providing real lab environments for students.",
      responsibilities: "Directly designed and deployed Kubernetes clusters along with Container Runtimes as the core infrastructure. Built mechanisms for automated resource provisioning, isolation (sandbox environments), and revocation, ensuring stability when accessed by multiple students simultaneously.",
      technologies: "Kubernetes, Docker, Sysbox Runtime, Ansible.",
      projectLink: "https://devops.toiyeuptit.com/"
    },
    {
      id: 2,
      name: "PharmAgent",
      role: "Backend & DevOps Engineer",
      time: "03/2026 - 05/2026",
      description: "A HealthTech microservices platform for the elderly to track medication, recognize pills via AI, and connect with caregivers.",
      responsibilities: "Developed the core backend with Spring Boot. Implemented real-time communication using WebSocket/STOMP and RabbitMQ. Designed MongoDB schemas and handled JWT/RBAC authentication. Set up Docker Compose environments and automated CI/CD pipelines.",
      technologies: "Spring Boot, FastAPI, MongoDB, Redis, RabbitMQ, Docker, Kubernetes",
      sourceCode: "https://github.com/ngtukien/PharmAgent"
    }
  ],
  awards: [
    { id: 1, time: "08 - 2025", title: "Third Prize - PTIT Bootcamp \"Hack to Lead\" 2025" },
    { id: 2, time: "05 - 2025", title: "Second Prize in Computing Track at Huawei ICT 2024 - 2025 (Global Final)" },
    { id: 3, time: "02 - 2025", title: "Excellence Award in Computing Track at Huawei ICT 2024 - 2025 (APAC Region)" },
    { id: 4, time: "12 - 2024", title: "Second Prize in Computing Track at Huawei ICT 2024 - 2025 (National Final)" }
  ],
  certifications: [
    { id: 1, time: "02 - 2026", name: "Ultimate Devops Bootcamp by School of Devops" },
    { id: 2, time: "06 - 2025", name: "PTIT Samsung 2025 Devops Basis" },
    { id: 3, time: "12 - 2024", name: "TOEIC - 620" }
  ],
  activities: [
    {
      id: 1,
      time: "2023 - Present",
      organization: "Liên chi Đoàn Khoa CNTT1 - PTIT",
      role: "Logistics Team Member",
      details: [
        "Exchanged specialized knowledge.",
        "Participated in basic and advanced programming courses organized by the Union.",
        "Participated in volunteer events.",
        "Supported events to hone soft skills."
      ]
    },
    {
      id: 2,
      time: "2025 - Present",
      organization: "CLB Tôi yêu PTIT",
      role: "Dev-Cloud Team Member",
      details: [
        "Participated in developing the club's products.",
        "Learned specialized knowledge.",
        "Participated in knowledge-sharing seminars."
      ]
    },
    {
      id: 3,
      time: "2025 - Present",
      organization: "Lab ươm mầm tài năng - NITS",
      role: "Member",
      details: [
        "Participated in building projects.",
        "Organized seminars to share knowledge.",
        "Supported the training of junior students."
      ]
    }
  ]
};
