# Task 8 — Sass Preprocessing

This task keeps source SCSS (`styles.scss`) separate from the browser stylesheet (`styles.css`).

## Install Sass on Ubuntu

Install Node.js/npm if not already installed, then from this folder run:

```bash
npm install --save-dev sass
npx sass styles.scss styles.css
```

To watch for changes while developing:

```bash
npx sass --watch styles.scss:styles.css
```

Keep `styles.css` in the repository so the deployed page works without a build step. Recompile after every SCSS change.