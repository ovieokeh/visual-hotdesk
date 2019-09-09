require('dotenv').config()
require('newrelic')

const express = require('express')
const jsdom = require('jsdom')
const bodyParser = require('body-parser')
const cloudinary = require('cloudinary').v2
const generateFloorPlan = require('./src')
const { htmlString } = require('./src/helpers')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const { log } = console
const { JSDOM } = jsdom
const app = express()
const port = process.env.PORT || 4000
const availableFloorPlans = [
  'LagosFirstFloor',
  'NairobiFirstFloor',
  'NairobiSecondFloor',
  'NairobiThirdFloor'
]

global.window = new JSDOM(htmlString).window
global.document = window.document

app.use(bodyParser.json())

app.post('/', async (req, res) => {
  const { floorId, takenSeats = [] } = req.body

  if (!floorId) {
    return res.json({ message: 'floorId must be provided in request body' })
  }

  const imgBuffer = await generateFloorPlan(floorId, takenSeats)

  if (!imgBuffer) {
    return res.json({ message: 'floorplan not found', availableFloorPlans })
  }

  const start = Date.now()
  return cloudinary.uploader
    .upload_stream({}, (err, img) => {
      const end = Date.now()
      res.send(img.url)
      console.log(`${end - start}ms to generate image url`)
    })
    .end(imgBuffer)
})

app.all('*', (_, res) => {
  res.status(404).json({
    message: 'endpoint not recognized'
  })
})

app.listen(port, () => log(`Example app listening on port ${port}!`))
