// CV Data (English)
// You can update your personal information here

export const enData = {
  personalInfo: {
    name: "Nguyen Tu Kien",
    title: "DevOps Intern",
    dob: "08/01/2005",
    phone: "0395376905",
    email: "ngtukien218.work@gmail.com",
    address: "Duong Hoa, Hanoi",
    github: "github.com/NguyenTuKien",
  },
  sections: {
    objective: "Career Objective",
    education: "Education",
    skills: "Technical Skills",
    softSkills: "Soft Skills",
    projects: "Projects",
    awards: "Honors & Awards",
    certifications: "Certifications",
    activities: "Activities",
    contact: "Contact Info",
  },
  objective: "As a 4th-year student aspiring to become a DevOps Engineer, I am eager to join a professional environment to learn and practice system deployment skills such as CI/CD, Docker, Kubernetes, and automated operations using Ansible. I aim to build a strong foundation in Cloud and Infrastructure, enhance my ability to work with pipelines, monitoring, and optimize deployment workflows, thereby becoming a technically solid DevOps Engineer in the future.",
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
  skills: [
    { category: "Backend framework", items: ["Spring Boot", "FastAPI"] },
    { category: "Version control", items: ["Git (Github, Gitlab)"] },
    { category: "Operating System", items: ["Linux (Ubuntu)"] },
    { category: "Containerization", items: ["Docker"] },
    { category: "Infrastructure as Code", items: ["Ansible"] },
    { category: "CI/CD & Automation", items: ["Github Action", "GitLab CI", "Jenkins", "ArgoCD"] },
    { category: "Orchestration", items: ["Kubernetes"] }
  ],
  softSkills: [
    "Presentation skills",
    "Problem-solving skills",
    "Self-learning and research skills",
    "Communication skills",
    "Teamwork skills",
    "Time management skills"
  ],
  projects: [
    {
      id: 1,
      name: "ToiYeuPTIT DevOps",
      role: "Platform Engineer",
      time: "04/2026 - 06/2026",
      description: "An interactive DevOps learning and practice platform (similar to KodeKloud), providing real lab environments for students.",
      responsibilities: "Directly designed and deployed Kubernetes clusters along with Container Runtimes as the core infrastructure. Built mechanisms for automated resource provisioning, isolation (sandbox environments), and revocation, ensuring stability when accessed by multiple students simultaneously.",
      technologies: "Kubernetes, Docker, Container Runtime (containerd/CRI-O), Linux.",
      projectLink: "https://devops.toiyeuptit.com/"
    },
    {
      id: 2,
      name: "STEMIND",
      role: "Fullstack Developer",
      time: "08/2025 - 11/2025",
      description: "An EdTech platform combining a learning social network with automated lecture generation.",
      responsibilities: "Developed the Web module and infrastructure End-to-End. Built the Frontend, designed Backend APIs to handle cloud document management logic (AWS S3, Cloudflare R2), and set up the DevOps pipeline (packaging, deployment) for seamless integration with the core AI developed by the team.",
      achievements: "Third Prize - PTIT BOOTCAMP 2025.",
      technologies: "ReactJS, FastAPI, MongoDB, Cloudflare R2, DevOps Tools.",
      sourceCode: "https://github.com/NguyenTuKien/STEMIND.git"
    }
  ],
  awards: [
    { id: 1, time: "05 - 2025", title: "Second Prize - Computing Track at Huawei ICT 2024 - 2025 (Global Final)" },
    { id: 2, time: "02 - 2025", title: "Excellence Award - Computing Track at Huawei ICT 2024 - 2025 (APAC Region)" },
    { id: 3, time: "12 - 2024", title: "Second Prize - Computing Track at Huawei ICT 2024 - 2025 (National Final)" }
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
