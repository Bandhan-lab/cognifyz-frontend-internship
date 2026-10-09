# Manual QA Checklist

Record the browser, viewport size, date, result, and any issue found. Do not mark a check complete until it has actually been run.

## All tasks
- [ ] Each `index.html` opens without a blank page.
- [ ] No unexpected JavaScript errors in DevTools Console.
- [ ] All headings follow a sensible order and links work.
- [ ] Keyboard navigation has visible focus.
- [ ] Test at approximately 375px, 768px, and 1440px viewport widths.

## Task 1 — Basic HTML
- [ ] Title appears in browser tab.
- [ ] Headings, paragraphs, and image render.
- [ ] Image alt text is present.

## Task 2 — Inline CSS
- [ ] Inline styles affect text color, font size, and background.
- [ ] Save an intentional style change and confirm it appears after refresh.

## Task 3 — Responsive design
- [ ] 3 columns on wide viewports.
- [ ] 2 columns at medium widths.
- [ ] 1 column on narrow screens.
- [ ] No horizontal overflow.

## Task 4 — Interactive button
- [ ] Each click changes the background.
- [ ] Status text matches the current color.
- [ ] Button remains usable across repeated clicks.

## Task 5 — API integration
- [ ] Click Load posts and confirm loading state.
- [ ] Successful API response renders post titles and bodies.
- [ ] Disconnect network or block the endpoint and confirm readable error feedback.
- [ ] Button becomes usable again after success or failure.

## Task 6 — Form validation
- [ ] Empty submit displays field-level errors.
- [ ] Invalid email is rejected.
- [ ] Short name and message are rejected.
- [ ] Valid values show success feedback.
- [ ] Focus moves to the first invalid field.
- [ ] No data is transmitted or stored.

## Task 7 — Bootstrap
- [ ] CDN stylesheet and script load without integrity errors.
- [ ] Navbar toggles on a narrow viewport.
- [ ] Cards stack on mobile and align in columns on larger screens.

## Task 8 — Sass
- [ ] Edit a variable in `styles.scss`.
- [ ] Compile SCSS to `styles.css`.
- [ ] Refresh and confirm the updated CSS appears.
- [ ] Confirm mobile breakpoint works.

## Evidence
- [ ] One screenshot per task.
- [ ] One narrow viewport screenshot.
- [ ] Short demonstration video.
- [ ] GitHub repository URL tested in a private/incognito window.
- [ ] Live deployment paths tested.