// Run against the local production build. All Google requests and form POSTs are mocked.
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const local = process.env.TEST_BASE_URL || 'http://127.0.0.1:3107';
(async () => {
  const browser = await chromium.launch({ headless: true, ...(process.env.TEST_BROWSER_PATH ? { executablePath: process.env.TEST_BROWSER_PATH } : {}) });
  try {
    for (const host of ['127.0.0.1', 'preview.vercel.app', 'www.promotionphysiotherapy.ca']) {
      const context = await browser.newContext();
      let googleLoads = 0;
      let formResult = { status: 500, body: { error: 'Simulated failure' } };
      let posts = 0;
      await context.route('**/*', async route => {
        const url = new URL(route.request().url());
        if (url.hostname === 'www.googletagmanager.com') {
          googleLoads++;
          return route.fulfill({ contentType: 'application/javascript', body: '' });
        }
        if (url.hostname !== host) return route.abort();
        if (url.pathname === '/api/contact') {
          posts++;
          return route.fulfill({ status: formResult.status, json: formResult.body });
        }
        const response = await route.fetch({ url: local + url.pathname + url.search });
        return route.fulfill({ response });
      });
      const page = await context.newPage();
      await page.addInitScript(() => { window.open = () => null; });
      await page.goto(host === '127.0.0.1' ? local + '/about' : 'https://' + host + '/about');
      await page.getByRole('button', { name: 'Schedule Appointment', exact: true }).waitFor();
      await page.waitForTimeout(1000);
      const production = host === 'www.promotionphysiotherapy.ca';
      assert.equal(googleLoads, production ? 1 : 0, host + ' script loading');
      await page.getByRole('button', { name: 'Schedule Appointment', exact: true }).click();
      const events = () => page.evaluate(() => (window.dataLayer || []).map(x => Array.from(x)).filter(x => x[0] === 'event'));
      if (!production) {
        assert.deepEqual(await events(), [], host + ' must not send events');
        await context.close();
        continue;
      }
      assert.deepEqual(await events(), [['event', 'booking_click', { method: 'website_link' }]]);
      // Exercise delegated link handling without opening the phone app or booking portal.
      await page.evaluate(() => {
        for (const href of ['tel:2045550100', 'https://pmphysio.juvonno.com/portal/publicbook.php']) {
          const a = document.createElement('a'); a.href = href;
          a.addEventListener('click', e => e.preventDefault());
          document.body.append(a); a.click(); a.remove();
        }
      });
      assert.deepEqual((await events()).map(e => e[1]), ['booking_click', 'phone_click', 'booking_click']);
      await page.locator('input[name="name"]').fill('Analytics Test');
      await page.locator('input[name="phone"]').fill('2045550100');
      await page.locator('input[name="email"]').fill('analytics-test@example.com');
      await page.locator('textarea[name="message"]').fill('Never sent: intercepted by the test');
      const submit = page.locator('form button[type="submit"]');
      for (const result of [
        { status: 500, body: { error: 'Simulated failure' } },
        { status: 200, body: { success: false } },
        { status: 200, body: { success: true, message: 'Simulated accepted enquiry' } },
      ]) {
        formResult = result;
        await submit.click();
        await page.waitForFunction(() => !document.querySelector('form button[type="submit"]').disabled);
        assert.equal((await events()).filter(e => e[1] === 'generate_lead').length, result.body.success === true ? 1 : 0);
      }
      assert.equal(posts, 3);
      assert.deepEqual((await events()).at(-1), ['event', 'generate_lead', { method: 'website_form' }]);
      await context.close();
    }
    console.log('PASS: local/preview excluded; production enabled; booking button, booking link and phone click tracked once; failed enquiries excluded; accepted enquiry tracked once with fixed payload. No real enquiry or GA request sent.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
