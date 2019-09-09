const floorPlans = require('./floorPlans')
const { createDiv, updateStyle, generateImageBuffer, styleTable, locateUser } = require('./helpers')

async function generateFloorPlan(floorId, takenSeats = []) {
  const start = Date.now()
  const floorDiv = global.document.querySelector('.floor')
  const floorPlan = floorPlans[floorId]

  if (!floorPlan) return null

  Object.keys(floorPlan).forEach((row, rowIndex) => {
    const rowDiv = createDiv('row', floorDiv)
    rowIndex === 1 && updateStyle(rowDiv, 'alignItems', 'flex-end')

    const { sections } = floorPlan[row]

    sections.forEach(section => {
      const sectionDiv = createDiv('section', rowDiv)
      updateStyle(
        rowDiv,
        'grid-template-columns',
        `repeat(${sections.length}, minmax(100px, auto))`
      )

      rowIndex === 1 && updateStyle(sectionDiv, 'alignItems', 'flex-end')

      section.forEach(table => {
        const tableDiv = createDiv('table', sectionDiv)

        if (table.type !== 'hotdesk') {
          const newDiv = createDiv('none-hotdesks', tableDiv)
          newDiv.innerHTML = table.name
          table.blank && newDiv.classList.add('blank')
          table.isWide && newDiv.classList.add('wide')
          return
        }

        styleTable(tableDiv, table)
        const tableTitle = createDiv('title', tableDiv)
        tableTitle.innerHTML = table.name

        table.seats.forEach((seat, seatIndex) => {
          const isRight = seatIndex >= table.seats.length / 2 && table.sides > 1
          const seatDiv = createDiv('seat', tableDiv)
          seatDiv.id = seatIndex + table.name
          seatDiv.innerHTML = seat

          isRight && seatDiv.classList.add('right')

          takenSeats.forEach(ss => {
            if (table.name.includes(ss.seat.section) && seat === ss.seat.number) {
              locateUser(seatDiv, ss)
            }
          })
        })
      })
    })
  })

  const html = global.document.querySelector('html').innerHTML

  const end = Date.now()
  console.log(`${end - start}ms to generate html`)

  const imgBuffer = await generateImageBuffer(html)
  global.document.querySelector('.floor').innerHTML = ''

  return imgBuffer
}

module.exports = generateFloorPlan
