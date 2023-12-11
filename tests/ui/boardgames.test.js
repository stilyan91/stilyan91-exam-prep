const { test, expect } = require('@playwright/test');

test('Check boardgames page', async ({ page }) => {
  await page.goto('https://stilyan91-examprep.onrender.com/boardgames');
  const list = await page.$('ul');
  expect(list).toBeTruthy();
});
