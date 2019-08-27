require('request');
require('dotenv').config();
const request = require('request-promise');

async function generateImageUrl(data) {
  const image = await request
    .post({
      url: 'https://hcti.io/v1/image',
      form: data,
    })
    .auth(process.env.APP_ID, process.env.APP_TOKEN);

  const { url } = JSON.parse(image);
  return url;
}

module.exports = generateImageUrl;
