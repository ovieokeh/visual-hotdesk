const express = require('express');
const jsdom = require('jsdom');
const html2canvas = require('html2canvas');
const generateFloorPlan = require('./src');
const html = require('./src/helpers/html');

const { JSDOM } = jsdom;
const app = express();
const port = 3000;

global.window = new JSDOM(html).window;
global.document = window.document;
// global.HTMLCanvasElement = window.document.;

app.get('/', async (req, res) => {
  try {
    const floor = await html2canvas(generateFloorPlan('HD'));
    res.send(floor);
  } catch (err) {
    console.error(err.message);
  }
  // console.log(floor);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
