const updateStyle = require('./updateStyle')

function styleTable(tableDiv, table) {
  const tableHeight = table.capacity * 25

  if (table.orientation === 'horizontal') {
    tableDiv.classList.add('horizontal')
    updateStyle(tableDiv, 'height', '200px')
    updateStyle(tableDiv, 'width', `${tableHeight}px`)
    updateStyle(tableDiv, 'grid-template-rows', `repeat(${table.sides}, minmax(auto, 80px))`)
    updateStyle(
      tableDiv,
      'grid-template-columns',
      `repeat(${table.capacity / 2}, minmax(auto, 100px))`
    )
  } else {
    updateStyle(tableDiv, 'height', `${tableHeight}px`)
    updateStyle(
      tableDiv,
      'grid-template-rows',
      `repeat(${table.capacity / 2 + 1}, minmax(auto, 80px))`
    )
    updateStyle(tableDiv, 'grid-template-columns', `repeat(${table.sides}, minmax(auto, 170px))`)
  }

  table.sides === 1 && updateStyle(tableDiv, 'grid-template-columns', '1fr')
}

module.exports = styleTable
