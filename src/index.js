/* eslint-disable no-unused-expressions */
const floorPlans = require('./floorPlans');
const {
  createDiv,
  updateStyle,
  generateImageBuffer,
  styleTable,
} = require('./helpers');

async function generateFloorPlan(floorId, takenSeats = []) {
  const start = Date.now();
  const floorDiv = global.document.querySelector('.floor');
  const floorPlan = floorPlans[floorId];

  if (!floorPlan) return null;

  Object.keys(floorPlan).forEach((row, rowIndex) => {
    const rowDiv = createDiv('row', floorDiv);
    rowIndex === 1 && updateStyle(rowDiv, 'alignItems', 'flex-end');

    const { sections } = floorPlan[row];

    sections.forEach((section) => {
      const sectionDiv = createDiv('section', rowDiv);
      updateStyle(
        rowDiv,
        'grid-template-columns',
        `repeat(${sections.length}, auto)`,
      );

      rowIndex === 1 && updateStyle(sectionDiv, 'alignItems', 'flex-end');

      section.forEach((table) => {
        const tableDiv = createDiv('table', sectionDiv);

        styleTable(tableDiv, table);

        table.seats.forEach((seat, seatIndex) => {
          const isRight = seatIndex >= table.seats.length / 2;
          const seatDiv = createDiv('seat', tableDiv);
          seatDiv.innerHTML = seat.number;

          isRight && seatDiv.classList.add('right');

          takenSeats.includes(seat.number) && seatDiv.classList.add('taken');
        });
      });
    });
  });

  const html = global.document.querySelector('html').innerHTML;
  const end = Date.now();
  console.log(`${end - start}ms to generate html`);

  const imgBuffer = await generateImageBuffer(html);

  global.document.querySelector('.floor').innerHTML = '';

  return imgBuffer;
}

module.exports = generateFloorPlan;
