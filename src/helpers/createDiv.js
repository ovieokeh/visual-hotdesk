const createDiv = (className, parent) => {
  const div = global.document.createElement('DIV')
  div.setAttribute('class', className)
  parent.appendChild(div)
  return div
}

module.exports = createDiv
