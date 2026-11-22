const fs = require('fs');
const path = require('path');

function createSimplePDF() {
  const lines = [
    { text: "NIKHIL KHAMBHAYTA", size: 20, bold: true, y: 750 },
    { text: "Mobile Application Developer & Software Engineer", size: 12, bold: true, y: 730 },
    { text: "Surat, Gujarat, India  |  nikhilkhambhayta@gmail.com  |  linkedin.com/in/nikhil-khambhayta", size: 9, y: 712 },
    { text: "------------------------------------------------------------------------------------------------------------------------", size: 9, y: 700 },

    { text: "EXECUTIVE SUMMARY", size: 11, bold: true, y: 685 },
    { text: "Software Engineer specializing in Flutter & Dart mobile applications, Java & Spring Boot backend systems,", size: 9.5, y: 670 },
    { text: "RESTful APIs, and Next.js full-stack web platforms. Proven experience in production debugging and clean architecture.", size: 9.5, y: 658 },

    { text: "PROFESSIONAL EXPERIENCE", size: 11, bold: true, y: 638 },
    { text: "Mobile Application Developer  |  Shivaay Soft (Surat, India)", size: 10, bold: true, y: 622 },
    { text: "Aug 2026 - Present (Full-Time, On-site)", size: 8.5, y: 610 },
    { text: "* Develop and maintain production mobile applications using Flutter and Dart.", size: 9, y: 597 },
    { text: "* Integrate RESTful APIs handling authentication (JWT), authorization, and backend workflows.", size: 9, y: 585 },
    { text: "* Perform root-cause analysis across the complete application flow (Mobile -> API -> Backend -> DB).", size: 9, y: 573 },

    { text: "Software Engineer Intern  |  Hyperlink Infosystem (Ahmedabad, India)", size: 10, bold: true, y: 553 },
    { text: "Nov 2025 - May 2026 (7 mos, On-site)", size: 8.5, y: 541 },
    { text: "* Built cross-platform client mobile apps using Flutter, Dart, Firebase, and REST APIs.", size: 9, y: 528 },
    { text: "* Gained practical backend experience with Java, Spring Boot, and RESTful architecture.", size: 9, y: 516 },

    { text: "Mobile Application Developer  |  DeepVecto (Surat, India)", size: 10, bold: true, y: 496 },
    { text: "Aug 2023 - Aug 2024 (1 yr 1 mo, On-site)", size: 8.5, y: 484 },
    { text: "* Developed mobile applications using Flutter & Android SDK, Node.js backend integration.", size: 9, y: 471 },
    { text: "* Built the LMS (Learning Management System) and Android Expense Tracker apps.", size: 9, y: 459 },

    { text: "EDUCATION", size: 11, bold: true, y: 439 },
    { text: "Master of Computer Applications (MCA)  |  LDRP-ITR, Gujarat Technological University", size: 10, bold: true, y: 423 },
    { text: "Aug 2024 - Apr 2026  |  Grade: 8.5 CPI  |  Specialization: Software Architecture, Java & Mobile Apps", size: 9, y: 411 },

    { text: "Bachelor of Computer Applications (BCA)  |  Udhna Citizen Commerce College & SPB College", size: 10, bold: true, y: 395 },
    { text: "Nov 2021 - Feb 2024  |  Grade: First Class with Distinction", size: 9, y: 383 },

    { text: "KEY PROJECTS", size: 11, bold: true, y: 363 },
    { text: "Ved Enterprise - Global Multilingual Industrial Platform (https://vedenterprise.vercel.app)", size: 9.5, bold: true, y: 348 },
    { text: "* Next.js 16, React 19, TypeScript, Tailwind CSS, 21+ languages (i18n), 95+ Lighthouse.", size: 9, y: 336 },

    { text: "Event QR Attendance Management System", size: 9.5, bold: true, y: 320 },
    { text: "* Spring Boot (3-layer), Flutter, React, MySQL, JWT Authentication, Railway & Vercel.", size: 9, y: 308 },

    { text: "TECHNICAL SKILLS", size: 11, bold: true, y: 288 },
    { text: "Languages & Mobile: Flutter, Dart, Java, Kotlin, Android SDK, JavaScript, TypeScript, Python", size: 9, y: 273 },
    { text: "Backend & Web: Spring Boot, REST APIs, Node.js, Next.js 16, React 19, Tailwind CSS, HTML/CSS", size: 9, y: 261 },
    { text: "Databases & Tools: MySQL, PostgreSQL, SQLite, Room DB, Firebase, Git, GitHub, Postman, Vercel", size: 9, y: 249 }
  ];

  let streamContent = "";
  for (const line of lines) {
    const font = line.bold ? "/F2" : "/F1";
    // Escape parens
    const safeText = line.text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    streamContent += `BT ${font} ${line.size} Tf 50 ${line.y} Td (${safeText}) Tj ET\n`;
  }

  const streamLen = Buffer.byteLength(streamContent, 'utf8');

  const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>
endobj
4 0 obj
<< /Length ${streamLen} >>
stream
${streamContent}endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
6 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
000000${String(300 + streamLen).padStart(4, '0')} 00000 n 
000000${String(380 + streamLen).padStart(4, '0')} 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
${460 + streamLen}
%%EOF`;

  const targetDir = path.join(__dirname, '../public/assets');
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  const targetFile = path.join(targetDir, 'Nikhil_Khambhayta_Resume.pdf');
  fs.writeFileSync(targetFile, pdf);
  console.log('Created valid ATS resume PDF at: ' + targetFile);
}

createSimplePDF();
