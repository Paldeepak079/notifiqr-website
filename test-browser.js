import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR:', msg.text());
    }
  });

  page.on('pageerror', err => {
    console.log('PAGE ERROR:', err.message);
  });

  await page.goto('http://localhost:5173/');
  
  // Click navbar links
  const links = ['Features', 'Screenshots', 'Pricing', 'FAQ', 'Contact'];
  for (const link of links) {
    console.log('Clicking', link);
    await page.click(`text=${link}`);
    await page.waitForTimeout(500);
  }

  await browser.close();
})();
