# QA Report — Cognifyz Front-End Internship Project

Date: 2026-10-09

## Scope
The implementation was checked against the supplied Cognifyz FRONT-END DEVELOPMENT.pdf, pages 6–13 (Tasks 1–8).

## Official brief alignment
- Level 1: Task 1 basic HTML structure, title, headings, paragraphs, image; Task 2 inline CSS styling.
- Level 2: Task 3 responsive layout with media queries in a separate styles.css; Task 4 JavaScript button changes background color.
- Level 3: Task 5 fetches public JSONPlaceholder data in a separate script.js and updates the DOM; Task 6 includes a styled form, separate styles.css/script.js, client-side validation, and user feedback.
- Level 4: Task 7 uses Bootstrap components and customized styling; Task 8 uses Sass variables/nesting and compiled CSS linked from the HTML.
- Each level has a dedicated README.md.

## Automated checks
- Playwright browser suite: 8/8 tests passed on the connected Ubuntu workstation with Google Chrome.
- Covered: all page routes and back navigation; responsive layout at 375, 600, 700, and 1024 px; button interaction; API success/error states (API responses mocked for deterministic tests); invalid and valid form submission; Bootstrap mobile navbar; Sass stylesheet and responsive layout; uncaught JavaScript exceptions, browser console errors, and failed local asset requests.
- npm audit --audit-level=high: 0 vulnerabilities reported.
- Sass compilation: generated styles.css matches a fresh compilation of styles.scss.

## Manual follow-up before submission
- Confirm the public JSONPlaceholder endpoint works from the network where the project is demonstrated; automated API behavior tests use mocked responses to stay deterministic.
- Check the remote Unsplash image and Bootstrap CDN when presenting from an internet-connected browser.
- Capture final screenshots and record a short project walkthrough for LinkedIn as requested in the brief.
- GitHub publishing and live hosting are not marked complete until the repository and deployed pages have been verified online.