// Production content synchronized with Nikhil Khambhayta's official LinkedIn profile.

export const experiences = [
  {
    role: "Mobile Application Developer",
    company: "Shivaay Soft",
    companyType: "Product-based Company",
    employmentType: "Full-Time · On-site",
    duration: "Aug 2026 — Present",
    location: "Surat, Gujarat, India",
    badge: "SS",
    description: "Build and maintain Flutter applications, integrate REST APIs and JWT-backed workflows, and troubleshoot issues across app, API, and data layers.",
    contributions: [
      "Develop and maintain production mobile applications using Flutter and Dart with clean architecture.",
      "Integrate complex REST APIs handling authentication, authorization (JWT), application state, and backend-driven workflows.",
      "Investigate and resolve production issues by analyzing application behavior, API responses, logs, permissions, and data flow.",
      "Collaborate with backend and cross-functional teams to identify root causes across the full application lifecycle (Mobile App → API → Backend → Database).",
      "Work with Firebase, Git, REST APIs, and modern mobile development CI/CD workflows."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Hyperlink Infosystem",
    companyType: "Software & Technology Services",
    employmentType: "Internship",
    duration: "Nov 2025 — May 2026 · 7 mos",
    location: "Ahmedabad, Gujarat, India",
    badge: "HI",
    description: "Developed Flutter applications for client requirements, integrated REST APIs and Firebase, and gained hands-on experience with Java and Spring Boot backend workflows.",
    contributions: [
      "Developed cross-platform mobile applications using Flutter and Dart for real-world client requirements in an agile environment.",
      "Integrated REST APIs and Firebase services into production-oriented mobile applications.",
      "Implemented responsive UI, complex navigation flows, bug fixes, and feature enhancements.",
      "Gained practical backend experience with Java and Spring Boot, understanding RESTful API architecture and data flows.",
      "Debugged application issues across UI, API integration, and business logic layers using Git workflows."
    ]
  },
  {
    role: "Mobile Application Developer Intern",
    company: "DeepVecto",
    companyType: "Technology Solutions",
    employmentType: "Internship · On-site",
    duration: "Aug 2023 — Aug 2024",
    location: "Surat, Gujarat, India",
    image: "/assets/IT Solutions.jpg",
    badge: "DV",
    description: "Developed Flutter and Android applications, integrated REST APIs and Firebase, and contributed to LMS and expense-tracking projects.",
    contributions: [
      "Developed and maintained mobile applications using Flutter and Android SDK.",
      "Integrated RESTful APIs, Node.js backends, and handled backend communication.",
      "Worked with Firebase for authentication and real-time data handling.",
      "Implemented UI/UX enhancements and app performance tuning.",
      "Developed the LMS (Learning Management System) and Android Expense Tracker applications."
    ],
    referenceLink: "https://www.linkedin.com/in/nikhil-khambhayta/overlay/1729096664467/single-media-viewer/?profileId=ACoAAEjxm1IBOtt-Z-b8-k9ts0nbrXu2W4F_T08"
  }
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    field: "Information Technology",
    institution: "LDRP Institute of Technology & Research, Gujarat Technological University",
    status: "Completed",
    period: "Aug 2024 — Apr 2026",
    grade: "8.5 CPI",
    badge: "MCA",
    description: "Completed MCA with a strong focus on software engineering, backend systems, and mobile application development. Built real-world systems including the Event QR Attendance Management Platform.",
    highlights: [
      "Grade: 8.5 CPI · LDRP Institute of Technology & Research (GTU).",
      "Specialization: Java, Spring Boot, RESTful API Design & Integration, and Flutter Mobile Applications.",
      "Academic Projects: Architected the role-based Event QR Attendance System with Spring Boot, React, Flutter, and MySQL.",
      "Core Foundations: Advanced Java, OOAD, Database Management Systems (DBMS), and Data Structures & Algorithms."
    ]
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    field: "Information Technology",
    institution: "Udhna Citizen Commerce College & SPB College of Business Administration",
    status: "Completed",
    period: "Nov 2021 — Feb 2024",
    grade: "First Class with Distinction",
    badge: "BCA",
    description: "Graduated with First Class with Distinction, establishing strong computer science foundations in programming, database management, web technologies, and software development methodologies.",
    highlights: [
      "Grade: First Class with Distinction.",
      "Core Subjects: C, C++, Core Java, Relational Database Management (RDBMS), SQL, Web Development, and Networking.",
      "Practical Foundation: Version control with Git, software development lifecycle (SDLC), and algorithmic problem solving."
    ]
  }
];

export const skillGroups = [
  [
    'Primary Stack',
    'The core technologies I use across mobile applications and backend systems.',
    ['Flutter', 'Dart', 'Java', 'Spring Boot', 'REST APIs', 'MySQL'],
    [
      { label: 'Event QR Attendance System', slug: 'event-qr-attendance' },
      { label: 'LMS System', slug: 'lms-system' }
    ]
  ],
  [
    'Mobile Development',
    'Cross-platform and Android application development, represented in the LMS, expense tracker, and QR attendance projects.',
    ['Android SDK', 'Firebase', 'Provider', 'REST API integration', 'Clean Architecture'],
    [
      { label: 'Event QR Attendance System', slug: 'event-qr-attendance' },
      { label: 'LMS System', slug: 'lms-system' },
      { label: 'Android Expense Tracker', slug: 'android-expense-tracker' }
    ]
  ],
  [
    'Backend Development',
    'Server-side application development, API design, and authentication across the QR attendance system and production mobile workflows.',
    ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'JWT authentication'],
    [
      { label: 'Event QR Attendance System', slug: 'event-qr-attendance' }
    ]
  ],
  [
    'Web Development',
    'Modern web application development applied to the Ved Enterprise platform and event administration dashboard.',
    ['Next.js App Router', 'React', 'TypeScript', 'Tailwind CSS', 'Internationalization', 'Technical SEO'],
    [
      { label: 'Ved Enterprise', slug: 'ved-enterprise' },
      { label: 'Event QR Attendance System', slug: 'event-qr-attendance' }
    ]
  ],
  [
    'Tools & Data',
    'Version control, API testing, deployment, and relational data tools used across my projects.',
    ['SQL', 'SQLite', 'Git & GitHub', 'Postman', 'Vercel', 'Railway'],
    [
      { label: 'Event QR Attendance System', slug: 'event-qr-attendance' },
      { label: 'Android Expense Tracker', slug: 'android-expense-tracker' },
      { label: 'Ved Enterprise', slug: 'ved-enterprise' }
    ]
  ]
];

export const projects = [
  {
    "title": "Ved Enterprise – Global Multilingual Industrial & B2B Machinery Platform",
    "featured": true,
    "featureLabel": "Production · Web Platform",
    "slug": "ved-enterprise",
    "seoTitle": "Next.js Industrial Website for Ved Enterprise",
    "seoDescription": "A multilingual industrial website built with Next.js, including product catalog pages, hreflang, structured data, sitemaps, and Open Graph metadata.",
    "category": "Production web platform",
    "description": "A multilingual Next.js platform for Ved Enterprise, a manufacturer and exporter of pharmaceutical blister packing machinery and spare parts.",
    "purpose": "Present machinery and spare parts to international buyers and support product inquiries and quotation requests.",
    "delivery": "Production site deployed on Vercel with multilingual product discovery and inquiry workflows.",
    "image": "/assets/projects/ved-enterprise.jpg",
    "imageAlt": "Ved Enterprise branded preview featuring its pharmaceutical machinery",
    "imageWidth": 1200,
    "imageHeight": 630,
    "context": "Production",
    "architecture": "Next.js App Router → React Server Components → multilingual product catalog → inquiry workflows",
    "tech": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Internationalization",
      "Technical SEO",
      "Vercel"
    ],
    "link": "https://vedenterprise.vercel.app",
    "status": "Production Live",
    "contributions": [
      "Implemented multilingual localization with locale detection and hreflang alternate tags.",
      "Implemented technical SEO with structured data, XML sitemaps, multilingual hreflang tags, Open Graph metadata, and robots.txt to support search engine discoverability.",
      "Built the platform with Next.js App Router and React Server Components.",
      "Created a machinery catalog with Embla Carousel, WhatsApp inquiry links, and request-for-quotation workflows.",
      "Deployed on Vercel with automated CI/CD."
    ]
  },
  {
    "title": "Event QR Attendance Management System",
    "featured": true,
    "featureLabel": "Full Stack · Academic Project",
    "slug": "event-qr-attendance",
    "seoTitle": "Spring Boot QR Attendance Management System",
    "seoDescription": "A role-based event attendance system with a Spring Boot API, Flutter app, React dashboard, MySQL, JWT authentication, and QR check-in.",
    "category": "Full-stack system",
    "context": "Academic project",
    "architecture": "Flutter app + React dashboard → Spring Boot REST API (Controller → Service → Repository) → MySQL",
    "description": "A role-based event attendance platform built with a Spring Boot API, Flutter app, React dashboard, and MySQL.",
    "purpose": "Manage event registration and attendance with QR-based check-ins and role-based access.",
    "delivery": "Developed a connected platform for Super Admins, Organizers, and Participants.",
    "image": "/assets/projects/event-qr.svg",
    "tech": [
      "Java",
      "Spring Boot",
      "Flutter",
      "Dart",
      "React.js",
      "Tailwind CSS",
      "MySQL",
      "JWT Auth",
      "Railway",
      "Vercel"
    ],
    "status": "Developed Platform",
    "imageAlt": "Illustrative QR attendance dashboard with attendee check-in status and scan code",
    "contributions": [
      "Architected 3-layer backend in Spring Boot (Controller, Service, Repository) with MySQL and JPA/Hibernate.",
      "Implemented secure JWT authentication with token expiry, auto-logout, and role-based permissions (Super Admin, Organizer, Participant).",
      "Built cross-platform Flutter mobile application for participant registration and unique QR code generation.",
      "Engineered React.js admin dashboard with Tailwind CSS for user, event, and live attendance management.",
      "Enabled real-time QR code scanning with instantaneous backend attendance validation."
    ]
  },
  {
    "title": "LMS System",
    "featured": true,
    "featureLabel": "Flutter · Internship Project",
    "slug": "lms-system",
    "seoTitle": "Flutter Learning Management System",
    "seoDescription": "A Flutter learning management app developed during an internship, with authentication, course modules, quiz submissions, and progress tracking.",
    "category": "Mobile application",
    "context": "Internship project",
    "description": "A Flutter learning management app developed during an internship at DeepVecto.",
    "purpose": "Provide authenticated access to course modules, quiz submissions, and learner progress tracking.",
    "delivery": "Developed the app as an internship project with authentication, course, quiz, and progress features.",
    "image": "/assets/projects/lms-system.svg",
    "imageAlt": "Illustrative learning app interface with course progress, lessons, and quiz achievement",
    "tech": [
      "Flutter",
      "Dart",
      "Firebase",
      "Provider"
    ],
    "status": "Developed project",
    "contributions": [
      "Built the Learning Management System during the DeepVecto internship.",
      "Implemented login and authentication, course modules, quiz submissions, and progress tracking."
    ]
  },
  {
    "title": "Android Expense Tracker",
    "featured": true,
    "featureLabel": "Android · Internship Project",
    "slug": "android-expense-tracker",
    "seoTitle": "Android Expense Tracker with SQLite",
    "seoDescription": "An Android expense tracker built with Java and SQLite, featuring categorized transactions, credit and debit tracking, and summary charts.",
    "category": "Android application",
    "context": "Internship project",
    "description": "An Android expense tracker developed during an internship using Java and SQLite.",
    "purpose": "Record categorized expenses, track credit and debit activity, and review summary charts.",
    "delivery": "Developed an Android app with transaction categories, summary charts, and local SQLite persistence.",
    "image": "/assets/projects/expense-tracker.svg",
    "imageAlt": "Illustrative expense tracker app with monthly budget, spending chart, and transactions",
    "tech": [
      "Android",
      "Java",
      "SQLite",
      "MVC Pattern"
    ],
    "status": "Developed project",
    "contributions": [
      "Developed the Android app during the internship.",
      "Implemented expense categories, credit and debit tracking, summary charts, and SQLite persistence."
    ]
  },
  {
    "title": "Ride-Sharing App Prototype",
    "category": "Android prototype",
    "description": "Developed an Android app connecting riders and drivers with secure login, real-time GPS tracking, ride requests, and live ride tracking on maps.",
    "image": "/assets/projects/ride-sharing.svg",
    "imageAlt": "Illustrative ride-sharing app showing a live route, driver details, and arrival estimate",
    "tech": [
      "Android Studio",
      "Java",
      "Google Maps SDK",
      "Firebase"
    ],
    "status": "Prototype",
    "contributions": [
      "Developed an Android prototype connecting riders and drivers.",
      "Implemented secure login, real-time GPS tracking, ride requests, and live maps."
    ]
  },
  {
    "title": "CampusConnect — College Management App",
    "category": "Android application",
    "description": "Mobile app for college management featuring student CRUD operations, timetable viewing, and PDF document downloads for efficient information management.",
    "image": "/assets/projects/campus-connect.svg",
    "imageAlt": "Illustrative campus app with class timetable and student resources",
    "tech": [
      "Android",
      "Java",
      "API Integration",
      "Mobile Development"
    ],
    "status": "Developed project",
    "contributions": [
      "Built student create, read, update, and delete operations.",
      "Added timetable viewing and PDF document downloads."
    ]
  },
  {
    "title": "Fitness Tracker App",
    "category": "Android application",
    "description": "Developed a fitness app to track step count, distance, and calories burned in real time using Android’s built-in sensors. Stores historical activity data and presents insights through charts and lists.",
    "image": "/assets/projects/fitness-tracker.svg",
    "imageAlt": "Illustrative fitness tracker app with step goal, weekly activity, distance, and calories",
    "tech": [
      "Android Studio",
      "Java",
      "Kotlin",
      "Room DB",
      "MPAndroidChart",
      "WorkManager"
    ],
    "status": "Developed project",
    "contributions": [
      "Used Android sensors for live activity tracking.",
      "Stored historical data and presented it in charts and lists."
    ]
  },
  {
    "title": "Media Player App",
    "category": "Android application",
    "description": "Created a media player for playing, pausing, and navigating songs from local storage. Supports background playback, dynamic playlists, and custom notification controls.",
    "image": "/assets/projects/media-player.svg",
    "imageAlt": "Illustrative music player app with album art, playback controls, and an upcoming track",
    "tech": [
      "Android Studio",
      "Java",
      "MediaPlayer API",
      "RecyclerView",
      "Room DB",
      "Foreground Service"
    ],
    "status": "Developed project",
    "contributions": [
      "Implemented local audio playback and playlist navigation.",
      "Supported background playback and custom notification controls."
    ]
  }
];

export const certifications = [
  {
    "id": 1,
    "title": "Java Programming",
    "issuer": "HackerRank",
    "date": "Aug 2024",
    "credentialId": "759a50c960f2",
    "description": "HackerRank Java credential covering programming fundamentals and problem-solving.",
    "image": "/assets/hackerank.png",
    "link": "https://www.hackerrank.com/certificates/759a50c960f2"
  },
  {
    "id": 2,
    "title": "SQL Certification",
    "issuer": "HackerRank",
    "date": "Jan 2025",
    "credentialId": "427F92620AAB",
    "description": "HackerRank SQL credential covering query writing, filtering, joins, and aggregation.",
    "image": "/assets/hackerank.png",
    "link": "https://www.hackerrank.com/certificates/427F92620AAB"
  },
  {
    "id": 3,
    "title": "Java Course",
    "issuer": "GeeksforGeeks",
    "date": "May 2025",
    "description": "Four-week course covering Java fundamentals, object-oriented programming, exceptions, and collections.",
    "image": "/assets/gfg.png",
    "link": "https://media.geeksforgeeks.org/courses/certificates/d67075ecf44a2328f425867c44a01794.pdf"
  },
  {
    "id": 4,
    "title": "Dart and Flutter: The Ultimate Mobile App Development Course",
    "issuer": "Udemy",
    "date": "Jan 2024",
    "credentialId": "UC-98e50-45-1831-42a0-a329-eedce80d09c6",
    "description": "Course covering Flutter and Dart, state management, animations, and cross-platform app development.",
    "image": "/assets/projects/udemy-flutter.webp",
    "link": "https://lnkd.in/dq_WyPif"
  },
  {
    "id": 5,
    "title": "Java Certification",
    "issuer": "One Roadmap & United Latino Students Association",
    "date": "Mar 2025",
    "description": "Java certification covering backend development, API management, and server-side programming.",
    "image": "/assets/gfg.png"
  },
  {
    "id": 6,
    "title": "Basics of Python (CR641)",
    "issuer": "UniAthena & Cambridge International Qualifications, UK",
    "date": "Jan 2025",
    "credentialId": "7580-8507-4144",
    "description": "Course covering Python data types, control flow, functions, and object-oriented programming. Final score: 84/100.",
    "image": "/assets/uni.png",
    "links": [
      {
        "url": "https://lnkd.in/d5j3bFZt",
        "label": "View Certificate"
      },
      {
        "url": "https://drive.google.com/file/d/1-05bCs8sl8G-rPG_bDhXONM1jNZfsP-N/view?usp=sharing",
        "label": "View Result"
      }
    ]
  },
  {
    "id": 7,
    "title": "Introduction to Programming Using Python",
    "issuer": "HCL GUVI, IITM Research Park",
    "date": "Apr 2023",
    "credentialId": "tz4982658P6i81D75v",
    "description": "Introductory programming course covering Python fundamentals and problem-solving.",
    "image": "/assets/uni.png"
  }
];
