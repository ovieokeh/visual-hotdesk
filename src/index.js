/* eslint-disable no-unused-expressions */
const floorPlans = require('./floorPlans');
const { createDiv, updateStyle, generateImageUrl } = require('./helpers');

async function generateFloorPlan(floorId, takenSeats = []) {
  const floorDiv = global.document.querySelector('.floor');
  const floorPlan = floorPlans[floorId];

  if (!floorPlan) return null;

  Object.keys(floorPlan).forEach((row, rowIndex) => {
    const rowDiv = createDiv('row', floorDiv);
    rowIndex === 1 && updateStyle(rowDiv, 'alignItems', 'flex-end');

    if (Object.keys(floorPlan).length === 1) {
      updateStyle(floorDiv, 'grid-template-rows', '1fr');
      updateStyle(rowDiv, 'padding-bottom', '5rem');
    }

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
        const tableRow = createDiv('table-row', sectionDiv);
        const seatsCol = createDiv('seats-col', tableRow);
        const tableImg = createDiv('table', tableRow);
        tableImg.innerHTML = table.name;
        const secondSeatsCol = createDiv('seats-col', tableRow);

        updateStyle(tableRow, 'height', `${table.capacity * 25}px`);

        if (table.orientation === 'horizontal') {
          const padDiv = createDiv('padd', sectionDiv);
          updateStyle(padDiv, 'width', `${table.capacity * 20}px`);
          updateStyle(padDiv, 'height', `${150}px`);
          updateStyle(
            tableRow,
            'transform',
            'translate(-10%, -20%) rotate(90deg)',
          );
          updateStyle(tableRow, 'position', 'absolute');
        }

        if (table.sides === 1) {
          updateStyle(tableImg, 'width', '30px');
          updateStyle(tableRow, 'height', `${table.capacity * 50}px`);
        }

        const capacity =
          table.sides === 2 ? table.capacity / table.sides : table.capacity;

        table.seats.forEach((seat, i) => {
          const seatDiv =
            i >= capacity && table.sides === 2
              ? createDiv('seat-right', secondSeatsCol)
              : createDiv('seat', seatsCol);

          const id = createDiv('seat-id', seatDiv);
          id.innerHTML = seat.number;
          if (takenSeats.includes(seat.number)) {
            id.innerHTML = 'x';
            id.classList.add('taken');
          }
        });
      });
    });
  });

  const data = {
    html: global.document.querySelector('html').innerHTML,
  };

  const url = await generateImageUrl(data);
  global.document.querySelector('.floor').innerHTML = '';
  return url;
}

module.exports = generateFloorPlan;
