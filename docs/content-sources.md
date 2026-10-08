# Portfolio content reconciliation

Working application: Next.js 16 App Router (`app/`, `next.config.mjs`, root `package.json`). The root npm lockfile is preserved. `src/` contains an earlier Vite version; `legacy/` contains the original HTML site. `next_app_temp/` is an unused scaffold. Original backups are unchanged.

Sources inspected: active app, root components, Vite components, legacy HTML and thank-you page, configuration, metadata, navigation, CSS, and all local assets. `source-inventory.json` records file sizes and hashes, including duplicate backup files.

- Seven projects merged from `components/Projects.jsx`, `src/components/Projects.jsx`, and `legacy/index.html`. Legacy-only technology tags, internship context, and notification controls are restored. Original remote project illustrations are retained; these are illustrative images, not screenshots of the applications.
- About and engineering focus: `components/About.jsx` and the active About section in `legacy/index.html`. Core Java, Collections, Advanced Java, Servlets, JSP, JDBC, DSA, OOP, MVC, REST, backend, mobile, and database work retained.
- Experience: one documented DeepVectro internship, 2023–2024, Remote / On-site; original internship letter link and asset retained. EliteWave Tech exists only as an empty comment, so no employment is claimed.
- Three certifications: all dates, descriptions, images and original certificate/result links retained. Python score is 84/100.
- Skills: all eight active self-assessed percentages from `components/Skills.jsx` retained and explicitly labeled self-assessments. Additional technologies documented in project descriptions are grouped by domain.
- Contact: original email, India / remote location, GitHub, LinkedIn, X and existing Formspree endpoint retained. No messages were sent during validation. Provider delivery and redirect handling require provider access to verify; the site does not claim delivery before submission.

## Missing or ambiguous source material

- No education record, institution, qualification, or graduation dates exist in any source.
- No résumé PDF, résumé URL or other résumé download exists. A `Download` icon import is unused; it is not a résumé source. The site identifies the missing résumé rather than offering a broken download.
- No project-specific GitHub repository links or downloadable application files are supplied. Only Vedenterprise has a live project URL. The personal GitHub profile is retained separately.
- Per-project completion and maintenance dates are not supplied. Existing descriptions say the projects were developed; ride sharing explicitly says prototype. Cards use those distinctions and do not claim production release or current work in progress. Learning in Spring Boot and architecture is explicitly identified as ongoing.
- The legacy site says three completed major projects; archived commented text says 10+, and later UI says 3+. No invented aggregate achievement or current production-impact metric is shown.
- No SDE 2 employment/title, seniority, team ownership, scale, production metrics or leadership evidence is supplied. Wording emphasizes documented technical contributions without inventing those claims.
- Existing project-image URLs are illustrative Unsplash assets. Their URLs are preserved, but remote availability cannot be guaranteed by a local build.

Hosting identity and private audience are retained in `personal-site/.openai/hosting.json`. The live static rendering is synchronized from the root Next.js production rendering, so it matches the working project without introducing a second content authoring path.
