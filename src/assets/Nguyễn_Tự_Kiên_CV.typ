// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.3.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Nguyễn Tự Kiên",
  title: "Nguyễn Tự Kiên - CV",
  footer: context { [#emph[Nguyễn Tự Kiên -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #sym.ast.basic Th10 2026#sym.ast.basic#h(0pt, weak: true) ],
  locale-catalog-language: "vi",
  text-direction: ltr,
  page-size: "a4",
  page-top-margin: 1.0cm,
  page-bottom-margin: 1.0cm,
  page-left-margin: 1.6cm,
  page-right-margin: 1.6cm,
  page-show-footer: false,
  page-show-top-note: false,
  colors-body: rgb(30, 30, 30),
  colors-name: rgb(0, 0, 0),
  colors-headline: rgb(70, 70, 70),
  colors-connections: rgb(50, 50, 50),
  colors-section-titles: rgb(0, 0, 0),
  colors-links: rgb(0, 0, 0),
  colors-footer: rgb(128, 128, 128),
  colors-top-note: rgb(128, 128, 128),
  typography-line-spacing: 0.75em,
  typography-alignment: "justified-with-no-hyphenation",
  typography-date-and-location-column-alignment: right,
  typography-font-family-body: "Source Sans 3",
  typography-font-family-name: "Source Sans 3",
  typography-font-family-headline: "Source Sans 3",
  typography-font-family-connections: "Source Sans 3",
  typography-font-family-section-titles: "Source Sans 3",
  typography-font-size-body: 10pt,
  typography-font-size-name: 26pt,
  typography-font-size-headline: 11pt,
  typography-font-size-connections: 9.5pt,
  typography-font-size-section-titles: 1.15em,
  typography-small-caps-name: false,
  typography-small-caps-headline: false,
  typography-small-caps-connections: false,
  typography-small-caps-section-titles: false,
  typography-bold-name: true,
  typography-bold-headline: false,
  typography-bold-connections: false,
  typography-bold-section-titles: true,
  links-underline: false,
  links-show-external-link-icon: true,
  header-alignment: center,
  header-photo-width: 3.5cm,
  header-space-below-name: 0.3cm,
  header-space-below-headline: 0.25cm,
  header-space-below-connections: 0.35cm,
  header-connections-hyperlink: true,
  header-connections-show-icons: true,
  header-connections-display-urls-instead-of-usernames: false,
  header-connections-separator: "",
  header-connections-space-between-connections: 0.45cm,
  section-titles-type: "with_full_line",
  section-titles-line-thickness: 0.6pt,
  section-titles-space-above: 0.5cm,
  section-titles-space-below: 0.28cm,
  sections-allow-page-break: true,
  sections-space-between-text-based-entries: 0.08cm,
  sections-space-between-regular-entries: 0.26cm,
  entries-date-and-location-width: 3.6cm,
  entries-side-space: 0cm,
  entries-space-between-columns: 0.2cm,
  entries-allow-page-break: false,
  entries-short-second-row: false,
  entries-degree-width: 1cm,
  entries-summary-space-left: 0cm,
  entries-summary-space-above: 0.08cm,
  entries-highlights-bullet:  "•" ,
  entries-highlights-nested-bullet:  "•" ,
  entries-highlights-space-left: 0.15cm,
  entries-highlights-space-above: 0.16cm,
  entries-highlights-space-between-items: 0.14cm,
  entries-highlights-space-between-bullet-and-text: 0.45em,
  date: datetime(
    year: 2026,
    month: 10,
    day: 31,
  ),
)


= Nguyễn Tự Kiên

  #headline([Cloud Solutions Engineer])

#connections(
  [#connection-with-icon("location-dot")[Hà Nội, Việt Nam]],
  [#link("mailto:ngtukien218.work@gmail.com", icon: false, if-underline: false, if-color: false)[#connection-with-icon("envelope")[ngtukien218.work\@gmail.com]]],
  [#link("tel:+84-395-376-905", icon: false, if-underline: false, if-color: false)[#connection-with-icon("phone")[0395 376 905]]],
  [#link("https://linkedin.com/in/ngtukien218", icon: false, if-underline: false, if-color: false)[#connection-with-icon("linkedin")[ngtukien218]]],
  [#link("https://github.com/ngtukien", icon: false, if-underline: false, if-color: false)[#connection-with-icon("github")[ngtukien]]],
)


== Kinh nghiệm làm việc

#regular-entry(
  [
    #strong[Tổng Công ty Mạng lưới Viettel]

  ],
  [
    08\/2026 – Nay

  ],
  main-column-second-row: [
    #emph[Cloud Engineer]

    - #strong[Nền tảng Cloud DBaaS:] Nghiên cứu và triển khai hạ tầng Database-as-a-Service trên Kubernetes sử dụng CloudNativePG Operator; tự động hóa toàn bộ vòng đời cơ sở dữ liệu (cấp phát, HA auto-failover, backup\/PITR lên S3).

    - #strong[Database Migration Service (MGS):] Xây dựng giải pháp di chuyển dữ liệu (PostgreSQL → PostgreSQL, Oracle → PostgreSQL) qua CDC streaming (Debezium, Kafka) và snapshot; tối ưu cutover giảm thiểu downtime, hỗ trợ rollback an toàn.

    - #strong[Công nghệ:] Kubernetes, CloudNativePG, PostgreSQL, Debezium, Apache Kafka, Open Everest, Docker, ...

  ],
)

== Dự án

#regular-entry(
  [
    #strong[#link("https://devops.toiyeuptit.com/")[ToiYeuPTIT DevOps]]

  ],
  [
    04\/2026 – 06\/2026

  ],
  main-column-second-row: [
    #summary[Nền tảng học tập DevOps tương tác (tương tự KodeKloud), cung cấp môi trường lab thực tế cho học viên.]

    - #strong[Trách nhiệm:] Thiết kế, triển khai cụm Kubernetes và Container Runtime lõi; tự động hóa cấp phát, cô lập (sandbox) và thu hồi tài nguyên ổn định khi nhiều học viên truy cập đồng thời.

    - #strong[Công nghệ:] Kubernetes, Docker, Sysbox Runtime, Ansible, Spring Boot.

  ],
)

== Học vấn

#education-entry(
  [
    #strong[Học viện Công nghệ Bưu chính Viễn thông (PTIT)]

  ],
  [
    2023 – 2028 (dự kiến)

  ],
  main-column-second-row: [
    #emph[Kỹ sư Công nghệ phần mềm – Lớp Tài năng]

    - #strong[CPA:] 3.58 \/ 4.00 — học bổng 4 kỳ liên tiếp.

    - #strong[Môn học tiêu biểu:] Cơ sở dữ liệu phân tán, Hệ điều hành, Mạng máy tính, ...

  ],
)

== Danh hiệu & Giải thưởng

#regular-entry(
  [
    #strong[Đại sứ tài năng – Viettel Digital Talent 2026]

  ],
  [
    07\/2026

  ],
  main-column-second-row: [
  ],
)

#regular-entry(
  [
    #strong[Giải Ba – PTIT Bootcamp \"Hack to Lead\" 2025]

  ],
  [
    08\/2025

  ],
  main-column-second-row: [
  ],
)

#regular-entry(
  [
    #strong[Giải Nhì – Computing Track cuộc thi Huawei ICT 2024 – 2025 (Vòng Quốc tế)]

  ],
  [
    05\/2025

  ],
  main-column-second-row: [
  ],
)

#regular-entry(
  [
    #strong[Giải Xuất sắc – Computing Track cuộc thi Huawei ICT 2024 – 2025 (Vòng Khu vực APAC)]

  ],
  [
    02\/2025

  ],
  main-column-second-row: [
  ],
)

#regular-entry(
  [
    #strong[Giải Nhì – Computing Track cuộc thi Huawei ICT 2024 – 2025 (Vòng Quốc gia)]

  ],
  [
    12\/2024

  ],
  main-column-second-row: [
  ],
)

== Chứng chỉ

#regular-entry(
  [
    #strong[PTIT Samsung 2025 DevOps Basis]

  ],
  [
    06\/2025

  ],
  main-column-second-row: [
  ],
)

#regular-entry(
  [
    #strong[TOEIC 620]

  ],
  [
    11\/2024

  ],
  main-column-second-row: [
  ],
)

== Hoạt động

#regular-entry(
  [
    #strong[CLB Tôi yêu PTIT]

  ],
  [
    2025 – Nay

  ],
  main-column-second-row: [
    #emph[Thành viên team Dev-Cloud]

    - Phát triển sản phẩm công nghệ của CLB và tổ chức workshop chia sẻ kiến thức Cloud\/DevOps.

  ],
)

#regular-entry(
  [
    #strong[Lab ươm mầm tài năng – NITS]

  ],
  [
    2025 – Nay

  ],
  main-column-second-row: [
    #emph[Thành viên]

    - Nghiên cứu dự án công nghệ và hỗ trợ đào tạo chuyên môn cho sinh viên khóa dưới.

  ],
)

#regular-entry(
  [
    #strong[Liên chi Đoàn Khoa CNTT1 – PTIT]

  ],
  [
    2023 – Nay

  ],
  main-column-second-row: [
    #emph[Thành viên ban Hậu cần]

    - Hỗ trợ tổ chức các khóa học lập trình, chiến dịch tình nguyện và sự kiện sinh viên.

  ],
)
