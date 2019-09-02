const updateStyle = require('./updateStyle');

function styleTable(tableDiv, table) {
  const tableHeight = table.capacity * 25;

  if (table.orientation === 'horizontal') {
    tableDiv.classList.add('horizontal');
    updateStyle(tableDiv, 'height', '200px');
    updateStyle(tableDiv, 'width', `${tableHeight}px`);
    updateStyle(
      tableDiv,
      'grid-template-rows',
      `repeat(${table.sides}, minmax(auto, 80px))`,
    );
    updateStyle(
      tableDiv,
      'grid-template-columns',
      `repeat(${table.capacity / 2}, minmax(auto, 100px))`,
    );
  } else {
    updateStyle(tableDiv, 'height', `${tableHeight}px`);
    updateStyle(tableDiv, 'width', '100%');
    updateStyle(
      tableDiv,
      'grid-template-columns',
      `repeat(${table.sides}, minmax(auto, 100px))`,
    );
  }
}

module.exports = styleTable;
