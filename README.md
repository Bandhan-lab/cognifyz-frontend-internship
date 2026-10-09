# Cognifyz Front-End Development Internship

**Intern:** Bandhan Kumar Sahoo  
**Organization:** Cognifyz IT Solutions Pvt. Ltd.  
**Track:** Front-End Development  
**Scope:** All 8 tasks across 4 levels

This repository organizes each internship task into a separate, independently runnable folder. It follows the task list in the supplied Cognifyz Front-End Development PDF:
- Level 1: Task 1 (Basic HTML Page), Task 2 (Inline CSS)
- Level 2: Task 3 (Responsive Design), Task 4 (Interactive Button)
- Level 3: Task 5 (API Integration), Task 6 (Form Styling and Validation)
- Level 4: Task 7 (Component-Based Styling), Task 8 (CSS Preprocessing)

## Run locally (Ubuntu + VS Code)

No build step is required for Tasks 1–7. For best results, serve the folder through a local HTTP server rather than opening `file://` URLs.

```bash
sudo apt update
sudo apt install -y git unzip python3
mkdir -p ~/Projects
unzip cognifyz-frontend-internship.zip -d ~/Projects
cd ~/Projects/cognifyz-frontend-internship
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser. You can also open the project folder in VS Code:

```bash
code ~/Projects/cognifyz-frontend-internship
```

Each task folder contains its own `index.html` and any supporting files. Each level also has its own `README.md` describing its tasks and run instructions. Tasks 3 and 6 use separate CSS files; Tasks 5 and 6 use separate JavaScript files, matching the official brief. To serve a particular task, run the server from that task directory, for example:

```bash
cd level-3/task-5-api-integration
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Task map

| Level | Task | Folder |
|---|---|---|
| 1 — Beginner | 1. Basic HTML Page | `level-1/task-1-basic-html/` |
| 1 — Beginner | 2. Inline CSS | `level-1/task-2-inline-css/` |
| 2 — Intermediate | 3. Responsive Design | `level-2/task-3-responsive-design/` |
| 2 — Intermediate | 4. Interactive Button | `level-2/task-4-interactive-button/` |
| 3 — Advanced | 5. API Integration | `level-3/task-5-api-integration/` |
| 3 — Advanced | 6. Form Styling and Validation | `level-3/task-6-form-validation/` |
| 4 — Expert | 7. Component-Based Styling | `level-4/task-7-bootstrap-components/` |
| 4 — Expert | 8. CSS Preprocessing | `level-4/task-8-sass/` |

## Automated browser tests

Playwright tests are included for the page routes, task-index navigation, responsive breakpoints, interactive button, API success/error states, form validation, Bootstrap mobile navigation, and compiled Sass stylesheet.

```bash
npm install
npm test
```

The current Playwright configuration uses `/usr/bin/google-chrome` on the connected Ubuntu workstation. On another machine, update `playwright.config.js` to use an installed Chromium/Chrome binary or install Playwright's supported browser binaries. Review the test output before claiming the suite passes.

## Validation checklist

- [ ] Open each task independently in a browser.
- [ ] Verify each level has its own README and that Task 3, Task 5, and Task 6 use the separate supporting files requested in the PDF.
- [ ] Check browser DevTools Console for errors.
- [ ] Test responsive layout at narrow, medium, and wide widths.
- [ ] Task 4: click the color button repeatedly.
- [ ] Task 5: verify loading, successful data display, and API/network error feedback.
- [ ] Task 6: submit empty, invalid, and valid values; confirm accessible feedback.
- [ ] Task 7: check that Bootstrap components load; test layout at mobile widths.
- [ ] Task 8: compile SCSS to CSS and verify the generated CSS is linked.
- [ ] Add screenshots and a short demo video after testing.
- [ ] Push the repository to GitHub and deploy it using GitHub Pages or another static host.
- [ ] Follow Cognifyz's submission instructions and use the official form when it is provided.

## Important notes

- Task 2 intentionally demonstrates **inline CSS**, as requested in the task PDF.
- Task 7 loads Bootstrap from a CDN, so it needs an internet connection.
- Task 8 includes source SCSS and compiled CSS. Recompile after editing SCSS.
- Task 5 uses JSONPlaceholder's public posts endpoint. Network availability and third-party service status are outside this project's control.
- The form in Task 6 is a **front-end validation demonstration only**. It does not send or store personal data on a server.
- Do not claim that a task is tested until you have performed the checks and recorded evidence.
- Keep code original, understand each part, and credit third-party libraries and APIs where appropriate.

## Source repository

GitHub repository: https://github.com/Bandhan-lab/cognifyz-frontend-internship

## Live deployment

**Live site:** https://cognifyz-frontend-internship.onrender.com

The static site is hosted on Render and is configured for automatic deployment from the `main` branch. The root page links to all eight tasks. Each task has its own directory and can be opened directly from the live site.

To update the deployed site, commit and push changes to `main`. Render will rebuild and publish the static files from the repository root (`publishPath: .`). Check the deployment status in the [Render dashboard](https://dashboard.render.com/static/srv-db49nn3ncjis73ca65kg) after a change.

## Suggested final evidence

Capture a screenshot for each task, one mobile-width screenshot, and a short screen recording showing the core interactions. The Cognifyz PDF asks interns to keep separate files for each level and publish a professional project demonstration video on LinkedIn, tagging Cognifyz Technologies and using `#cognifyztechnologies #cognifyz #cognifyztech`.