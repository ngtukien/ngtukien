// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.3.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Nguyen Tu Kien",
  title: "Nguyen Tu Kien - CV",
  footer: context { [#emph[Nguyen Tu Kien -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #sym.ast.basic Aug 2026#sym.ast.basic#h(0pt, weak: true) ],
  locale-catalog-language: "en",
  text-direction: ltr,
  page-size: "a4",
  page-top-margin: 0.7in,
  page-bottom-margin: 0.7in,
  page-left-margin: 0.7in,
  page-right-margin: 0.7in,
  page-show-footer: false,
  page-show-top-note: false,
  colors-body: rgb(0, 0, 0),
  colors-name: rgb(0, 0, 0),
  colors-headline: rgb(0, 0, 0),
  colors-connections: rgb(0, 0, 0),
  colors-section-titles: rgb(0, 0, 0),
  colors-links: rgb(0, 0, 0),
  colors-footer: rgb(128, 128, 128),
  colors-top-note: rgb(128, 128, 128),
  typography-line-spacing: 1em,
  typography-alignment: "justified",
  typography-date-and-location-column-alignment: right,
  typography-font-family-body: "XCharter",
  typography-font-family-name: "XCharter",
  typography-font-family-headline: "XCharter",
  typography-font-family-connections: "XCharter",
  typography-font-family-section-titles: "XCharter",
  typography-font-size-body: 10.5pt,
  typography-font-size-name: 24pt,
  typography-font-size-headline: 10pt,
  typography-font-size-connections: 10pt,
  typography-font-size-section-titles: 1.2em,
  typography-small-caps-name: false,
  typography-small-caps-headline: false,
  typography-small-caps-connections: false,
  typography-small-caps-section-titles: false,
  typography-bold-name: false,
  typography-bold-headline: false,
  typography-bold-connections: false,
  typography-bold-section-titles: true,
  links-underline: true,
  links-show-external-link-icon: false,
  header-alignment: center,
  header-photo-width: 3.5cm,
  header-space-below-name: 0.7cm,
  header-space-below-headline: 0.7cm,
  header-space-below-connections: 0.7cm,
  header-connections-hyperlink: true,
  header-connections-show-icons: false,
  header-connections-display-urls-instead-of-usernames: true,
  header-connections-separator: "|",
  header-connections-space-between-connections: 0.5cm,
  section-titles-type: "with_full_line",
  section-titles-line-thickness: 0.5pt,
  section-titles-space-above: 0.5cm,
  section-titles-space-below: 0.3cm,
  sections-allow-page-break: true,
  sections-space-between-text-based-entries: 0.15cm,
  sections-space-between-regular-entries: 8pt,
  entries-date-and-location-width: 4.15cm,
  entries-side-space: 0cm,
  entries-space-between-columns: 0.1cm,
  entries-allow-page-break: false,
  entries-short-second-row: false,
  entries-degree-width: 1cm,
  entries-summary-space-left: 0cm,
  entries-summary-space-above: 0.08cm,
  entries-highlights-bullet:  text(13pt, [•], baseline: -0.6pt) ,
  entries-highlights-nested-bullet:  text(13pt, [•], baseline: -0.6pt) ,
  entries-highlights-space-left: 0cm,
  entries-highlights-space-above: 4pt,
  entries-highlights-space-between-items: 4pt,
  entries-highlights-space-between-bullet-and-text: 0.3em,
  date: datetime(
    year: 2026,
    month: 8,
    day: 11,
  ),
)


= Nguyen Tu Kien

  #headline([Cloud Solutions Engineer])

#connections(
  [Hanoi, Vietnam],
  [#link("mailto:ngtukien218.work@gmail.com", icon: false, if-underline: false, if-color: false)[ngtukien218.work\@gmail.com]],
  [#link("tel:+84-395-376-905", icon: false, if-underline: false, if-color: false)[0395 376 905]],
  [#link("https://linkedin.com/in/ngtukien218", icon: false, if-underline: false, if-color: false)[linkedin.com\/in\/ngtukien218]],
  [#link("https://github.com/ngtukien", icon: false, if-underline: false, if-color: false)[github.com\/ngtukien]],
)


== Education

#education-entry(
  [
    #strong[Post and Telecommunications Institute of Technology]

  ],
  [
    2023 - 2028 (expected)

  ],
  main-column-second-row: [
    Engineer of Software Engineering - Talent Program

    - #strong[GPA:] 3.54 \/ 4.00 (Software Engineering Talent Program)

    - #strong[Relevant Coursework:] Cloud Computing, Distributed Systems, Operating Systems, Computer Networks.

  ],
)

== Honors and Awards

#regular-entry(
  [
    #strong[Talent Ambassador of Viettel Digital Talent Program 2026]

  ],
  [
    July 2026

  ],
  main-column-second-row: [
  ],
)

#regular-entry(
  [
    #strong[Third Prize - PTIT Bootcamp \"Hack to Lead\" 2025]

  ],
  [
    Aug 2025

  ],
  main-column-second-row: [
  ],
)

#regular-entry(
  [
    #strong[Second Prize - Computing Track at Huawei ICT 2024 - 2025 (Global Stage)]

  ],
  [
    May 2025

  ],
  main-column-second-row: [
  ],
)

#regular-entry(
  [
    #strong[Grand Prize - Computing Track at Huawei ICT 2024 - 2025 (Regional Stage)]

  ],
  [
    Feb 2025

  ],
  main-column-second-row: [
  ],
)

#regular-entry(
  [
    #strong[Second Prize - Computing Track at Huawei ICT 2024 - 2025 (National Stage)]

  ],
  [
    Dec 2024

  ],
  main-column-second-row: [
  ],
)

== Projects

#regular-entry(
  [
    #strong[#link("https://devops.toiyeuptit.com/")[ToiYeuPTIT DevOps]]

  ],
  [
    Apr 2026 – June 2026

  ],
  main-column-second-row: [
    #summary[An interactive DevOps learning and practice platform (similar to KodeKloud), providing real lab environments for students.]

    - #strong[Technologies:] Kubernetes, Docker, Sysbox Runtime, Ansible, Spring Boot

    - #strong[Responsibilities:] Directly designed and deployed Kubernetes clusters along with Container Runtimes as the core infrastructure. Built mechanisms for automated resource provisioning, isolation (sandbox environments), and revocation, ensuring stability when accessed by multiple students simultaneously.

  ],
)

#regular-entry(
  [
    #strong[#link("https://github.com/ngtukien/notebook-operator")[Notebook Operator]]

  ],
  [
    June 2026 – Aug 2026

  ],
  main-column-second-row: [
    #summary[A Kubernetes Operator managing JupyterLab environments on GPU infrastructure, serving AI\/ML training and data science research.]

    - #strong[Technologies:] Kubernetes, Kubebuilder, Golang, Ansible, NVIDIA MIG, HAMi

    - #strong[Responsibilities:] Engineered the Kubernetes Operator using Kubebuilder in Golang. Implemented dynamic GPU scheduling supporting both HAMi vGPU sharing and NVIDIA MIG via Extended Resources. Automated bare-metal infrastructure provisioning for K3s and NVIDIA Toolkit using Ansible. Enforced strict Pod Security constraints (non-root, dropped capabilities) for lab environments.

  ],
)

== Certifications

#regular-entry(
  [
    #strong[PTIT Samsung 2025 DevOps Basis]

  ],
  [
    June 2025

  ],
  main-column-second-row: [
  ],
)

#regular-entry(
  [
    #strong[TOEIC - 620]

  ],
  [
    Nov 2024

  ],
  main-column-second-row: [
  ],
)

== Activities

#regular-entry(
  [
    #strong[Liên chi Đoàn Khoa CNTT1 - PTIT]

  ],
  [
    2023 - present

  ],
  main-column-second-row: [
    Logistics Team Member

    - Exchanged specialized knowledge.

    - Participated in basic and advanced programming courses organized by the Union.

    - Participated in volunteer events.

    - Supported events to hone soft skills.

  ],
)

#regular-entry(
  [
    #strong[CLB Tôi yêu PTIT]

  ],
  [
    2025 - present

  ],
  main-column-second-row: [
    Dev-Cloud Team Member

    - Participated in developing the club's products.

    - Learned specialized knowledge.

    - Participated in knowledge-sharing seminars.

  ],
)

#regular-entry(
  [
    #strong[Lab ươm mầm tài năng - NITS]

  ],
  [
    2025 - present

  ],
  main-column-second-row: [
    Member

    - Participated in building projects.

    - Organized seminars to share knowledge.

    - Supported the training of junior students.

  ],
)
