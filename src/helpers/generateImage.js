/* eslint-disable arrow-parens */
const htmlToImage = require('dom-to-image');

function generateImage(node, parent) {
  return htmlToImage
    .toPng(node)
    .then((dataUrl) => {
      const img = new Image();
      img.src = dataUrl;
      document.body.replaceChild(img, parent);
    })
    .catch((error) => {
      console.error('oops, something went wrong!', error);
    });
}

module.exports = generateImage;
