const { test, expect } = require('@playwright/test');
const paths = ['/', '/level-1/task-1-basic-html/', '/level-1/task-2-inline-css/', '/level-2/task-3-responsive-design/', '/level-2/task-4-interactive-button/', '/level-3/task-5-api-integration/', '/level-3/task-6-form-validation/', '/level-4/task-7-bootstrap-components/', '/level-4/task-8-sass/'];

test('all pages load and task index links work', async ({ page }) => {
  for (const path of paths) {
    const response = await page.goto(path);
    expect(response.status(), path).toBe(200);
    await expect(page.locator('h1').first()).toBeVisible();
    if (path !== '/') {
      await page.getByRole('link', { name: /Task index|Back to task list/ }).click();
      await expect(page).toHaveURL(/\/index\.html$/);
      await expect(page.locator('h1')).toContainText('Front-End Development Tasks');
    }
  }
});

test('responsive cards adapt at mobile, tablet and desktop widths', async ({ page }) => {
  await page.goto('/level-2/task-3-responsive-design/');
  for (const [width, expected] of [[375,1],[600,2],[700,2],[1024,3]]) {
    await page.setViewportSize({ width, height: 850 });
    const columns = await page.locator('.cards').evaluate(el => getComputedStyle(el).gridTemplateColumns.split(' ').length);
    expect(columns, 'viewport width ' + width).toBe(expected);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  }
});

test('interactive button changes background and status', async ({ page }) => {
  await page.goto('/level-2/task-4-interactive-button/');
  const before = await page.locator('body').evaluate(el => getComputedStyle(el).backgroundColor);
  await page.getByRole('button', { name: 'Change background' }).click();
  const after = await page.locator('body').evaluate(el => getComputedStyle(el).backgroundColor);
  expect(after).not.toBe(before);
  await expect(page.getByRole('status')).toContainText('lavender');
  await page.getByRole('button', { name: 'Change background' }).click();
  await expect(page.getByRole('status')).toContainText('mint');
});

test('API integration renders data and handles a failed request', async ({ page }) => {
  await page.route('https://jsonplaceholder.typicode.com/posts**', route => route.fulfill({
    status: 200, contentType: 'application/json',
    body: JSON.stringify([{ userId: 1, id: 1, title: 'qa sample title', body: 'qa sample body' }])
  }));
  await page.goto('/level-3/task-5-api-integration/');
  await page.getByRole('button', { name: 'Load posts' }).click();
  await expect(page.getByRole('heading', { name: 'qa sample title' })).toBeVisible();
  await expect(page.locator('.post')).toContainText('qa sample body');
  await page.unroute('https://jsonplaceholder.typicode.com/posts**');
  await page.route('https://jsonplaceholder.typicode.com/posts**', route => route.abort('failed'));
  await page.getByRole('button', { name: 'Load posts' }).click();
  await expect(page.getByRole('status')).toContainText('Could not load data.');
  await expect(page.getByRole('button', { name: 'Load posts' })).toBeEnabled();
});

test('form rejects invalid values and accepts valid values', async ({ page }) => {
  await page.goto('/level-3/task-6-form-validation/');
  await page.getByRole('button', { name: 'Validate form' }).click();
  await expect(page.locator('#formStatus')).toContainText('Please review');
  await expect(page.locator('#fullName')).toHaveAttribute('aria-invalid', 'true');
  await page.locator('#fullName').fill('Bandhan Kumar');
  await page.locator('#email').fill('not-an-email');
  await page.locator('#topic').selectOption({ label: 'Internship task' });
  await page.locator('#message').fill('This is a valid test message.');
  await page.getByRole('button', { name: 'Validate form' }).click();
  await expect(page.locator('#email')).toHaveAttribute('aria-invalid', 'true');
  await page.locator('#email').fill('bandhan@example.com');
  await page.getByRole('button', { name: 'Validate form' }).click();
  await expect(page.locator('#formStatus')).toContainText('Validation successful');
});

test('Bootstrap navigation toggles on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto('/level-4/task-7-bootstrap-components/');
  await expect(page.locator('.card')).toHaveCount(3);
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await expect(page.locator('#mainNav')).toHaveClass(/show/);
});

test('Sass CSS is linked and responsive', async ({ page }) => {
  await page.goto('/level-4/task-8-sass/');
  await expect(page.locator('.cards .card')).toHaveCount(3);
  await expect(page.locator('link[rel="stylesheet"]')).toHaveAttribute('href', 'styles.css');
  await page.setViewportSize({ width: 375, height: 800 });
  const columns = await page.locator('.cards').evaluate(el => getComputedStyle(el).gridTemplateColumns.split(' ').length);
  expect(columns).toBe(1);
});

test('all pages load without JavaScript exceptions or local asset failures', async ({ page }) => {
  const pageErrors = [];
  const consoleErrors = [];
  const localAssetFailures = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()); });
  page.on('requestfailed', request => {
    if (request.url().startsWith('http://127.0.0.1:8765/')) localAssetFailures.push(request.url() + ' — ' + (request.failure()?.errorText || 'request failed'));
  });
  for (const path of paths) {
    await page.goto(path);
    await page.waitForLoadState('networkidle').catch(() => {});
  }
  expect(pageErrors, 'uncaught browser exceptions').toEqual([]);
  expect(consoleErrors, 'browser console errors').toEqual([]);
  expect(localAssetFailures, 'failed local assets').toEqual([]);
});