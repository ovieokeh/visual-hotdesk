const puppeteer = require('puppeteer');

async function generateImageBuffer(html) {
  const start = Date.now();
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setContent(html);

  const imageBuffer = await page.screenshot({
    encoding: 'string',
    fullPage: true,
  });

  const end = Date.now();
  console.log(`${end - start}ms to generate image buffer`);

  await browser.close();
  return imageBuffer;
}

module.exports = generateImageBuffer;
