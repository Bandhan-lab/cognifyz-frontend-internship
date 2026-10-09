# Cognifyz Front-End Development Internship

Hi, I'm Bandhan Kumar Sahoo. This is my project for the Cognifyz Front-End Development internship. I made one small page for each of the eight tasks so I can practise the concepts separately and explain what each page does.

## Tasks

| Level | Task | What I practised |
|---|---|---|
| 1 | [Task 1 — Basic HTML](level-1/task-1-basic-html/) | Page structure, headings, paragraphs and an image |
| 1 | [Task 2 — Inline CSS](level-1/task-2-inline-css/) | Changing text, font size and background with inline styles |
| 2 | [Task 3 — Responsive Design](level-2/task-3-responsive-design/) | CSS Grid and media queries |
| 2 | [Task 4 — Interactive Button](level-2/task-4-interactive-button/) | Using JavaScript to change the background colour |
| 3 | [Task 5 — API Integration](level-3/task-5-api-integration/) | Fetching sample posts and showing loading/error messages |
| 3 | [Task 6 — Form Validation](level-3/task-6-form-validation/) | Styling a form and checking the values before showing success |
| 4 | [Task 7 — Bootstrap](level-4/task-7-bootstrap-components/) | Navbar, grid, cards and other Bootstrap components |
| 4 | [Task 8 — Sass](level-4/task-8-sass/) | Variables, nesting and compiling SCSS into CSS |

Each level has a short README with notes about its tasks. Task 3 and Task 6 have separate CSS files, and Task 5 and Task 6 have separate JavaScript files.

## Run it on Ubuntu

You need Python 3 to start a simple local server. Open a terminal in this project folder and run:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser. Press `Ctrl+C` in the terminal when you want to stop the server.

To open the folder in VS Code, run:

```bash
code .
```

## A few notes

- Task 2 uses inline CSS on purpose because that is what the task asks for.
- Task 5 gets sample posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/), so it needs an internet connection.
- Task 6 is only a form-validation demo. It does not send or save the form data.
- Task 7 loads Bootstrap from a CDN, so its styles and mobile navbar need an internet connection.
- Task 8 includes both `styles.scss` and the compiled `styles.css`. After changing the SCSS, compile it from the project root with:

```bash
npx --yes sass level-4/task-8-sass/styles.scss level-4/task-8-sass/styles.css
```

## Testing

I added a small Playwright test suite to check the pages and their main interactions. To run it on the Ubuntu machine where the project was set up:

```bash
npm install
npm test
```

The Playwright config currently points to Google Chrome at `/usr/bin/google-chrome`, so that path may need changing on another computer.

## Links

- **Live website:** https://cognifyz-frontend-internship.onrender.com
- **GitHub repository:** https://github.com/Bandhan-lab/cognifyz-frontend-internship

Before submitting, I still need to capture screenshots of the tasks and record a short walkthrough, as mentioned in the internship brief.
