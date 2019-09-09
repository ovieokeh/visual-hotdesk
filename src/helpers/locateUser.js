const updateStyle = require('./updateStyle')
const createDiv = require('./createDiv')

function locateUser(seatDiv, ss) {
  seatDiv.classList.add('taken')

  if (ss.isBeingSearched) {
    createDiv('highlight', seatDiv)
    const pointer = createDiv('pointer', seatDiv)
    updateStyle(pointer, 'background-image', `url("${ss.seat.userImage}")`)
  }
}

module.exports = locateUser
