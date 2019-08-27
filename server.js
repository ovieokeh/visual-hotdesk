const express = require('express');
const jsdom = require('jsdom');
const bodyParser = require('body-parser');
const generateFloorPlan = require('./src');
const { htmlString } = require('./src/helpers');

const { log } = console;
const { JSDOM } = jsdom;
const app = express();
const port = 4000;

global.window = new JSDOM(htmlString).window;
global.document = window.document;

app.use(bodyParser.json());

app.post('/', async (req, res) => {
  const { floorId, takenSeats = [] } = req.body;
  const url = await generateFloorPlan(floorId.toUpperCase(), takenSeats);

  if (!url) {
    res.json({ message: 'floorplan not found' });
    return;
  }

  res.send(url);
});

app.all('*', (_, res) => {
  res.status(404).json({
    message: 'endpoint not recognized',
  });
});

app.listen(port, () => log(`Example app listening on port ${port}!`));
