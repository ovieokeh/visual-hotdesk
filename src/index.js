/* eslint-disable no-unused-expressions */
const floorPlans = require('./floorPlans');
const { createDiv, updateStyle, generateImageBuffer } = require('./helpers');

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
        const tableHeight = table.capacity * 25;
        updateStyle(tableDiv, 'height', `${tableHeight}px`);
        updateStyle(tableDiv, 'width', '100%');
        updateStyle(
          tableDiv,
          'grid-template-columns',
          `repeat(${table.sides}, minmax(auto, 100px))`,
        );

        table.seats.forEach((seat, seatIndex) => {
          const isRight = seatIndex >= table.seats.length / 2;
          const seatDiv = createDiv('seat', tableDiv);
          seatDiv.innerHTML = seat.number;

          isRight && seatDiv.classList.add('right');

          if (takenSeats.includes(seat.number)) {
            seatDiv.classList.add('taken');
            seatDiv.innerHTML = 'x';
          }
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
