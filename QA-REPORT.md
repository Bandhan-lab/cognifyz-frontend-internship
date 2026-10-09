# Testing Notes

I checked the eight task pages on the Ubuntu laptop after updating the project.

## What I tested

- Opened the home page and all eight task pages.
- Checked that the task links and back links work.
- Resized the responsive page to mobile, tablet and desktop widths.
- Clicked the background colour button more than once.
- Tested the API page with a sample successful response and a failed request.
- Tried empty, invalid and valid form values.
- Checked the Bootstrap navbar at mobile width.
- Checked that the Sass page uses the compiled CSS file.
- Checked for JavaScript errors and missing local files.

## Results

- Browser tests: **8 passed**.
- `npm audit --audit-level=high`: **0 vulnerabilities reported**.
- Sass: the generated CSS matches the checked-in `styles.css`.
- The public site and all eight task pages returned HTTP 200 when checked.

## Before submitting

I still need to take screenshots of the tasks and record a short walkthrough. Task 5 uses a public API, Task 7 loads Bootstrap from a CDN, and Task 1 uses an image hosted on Unsplash, so those examples need an internet connection.

- Live site: https://cognifyz-frontend-internship.onrender.com
- GitHub: https://github.com/Bandhan-lab/cognifyz-frontend-internship
