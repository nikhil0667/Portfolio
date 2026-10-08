# Redesign validation — 6 October 2026

- Root Next.js 16.2.7 production build passed, including compilation, type checking, prerendering, and final optimization.
- Existing root scripts are `dev`, `build`, and `start`; no configured lint or test script exists. The earlier Vite ESLint file references dependencies not declared by the active Next.js package, so it was not treated as an active application check.
- All seven project cards and three certification records were checked in the rendered output.
- All fragment navigation targets and all referenced local assets exist, including the encoded internship image path and favicon.
- Native menu and contribution disclosures were opened with Enter; project navigation changed to the expected fragment. The mobile menu exposes all nine section links.
- Visible keyboard focus was verified on a disclosure control (`outline-style: solid`). Form controls have labels, required fields, appropriate email validation, and name/email autocomplete.
- Responsive viewport checks at 320px, 375px, 768px, and 1280px passed without horizontal page overflow. Desktop and mobile screenshots were visually inspected.
- Existing reduced-motion rules disable smooth scrolling and transitions; the project image hover effect is also disabled for reduced motion.
- The exact original palette values remain: background #101215, surface #191c21, muted #a4abb7, border #2c3037, blue #7aabff, and text #f2f4f8.
- Remote illustrative images rendered in the browser preview. External certificate/profile URLs are preserved; their availability and sign-in requirements are owned by their providers. No test contact message was sent, and Formspree delivery was not verified.
- Hosted HTML is generated from the validated Next.js rendering; it uses native anchors, form submission, and disclosure elements, without requiring client hydration.
