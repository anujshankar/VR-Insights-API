const express = require('express')
const bodyParser = require('body-parser')
const pieChart = require('./pie')
const barChart = require('./bar')
const convertToXL = require('./convertToExcel')
const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.post('/pie', (request, response) => {
  const data = request.body 
  pieChart(data)
  convertToXL(data)
  response.send('Pie Api')
})
app.post('/bar', (request, response) => {
  const data = request.body
  barChart(data)
  convertToXL(data)
  response.send('Bar Api')
})
app.listen(4000)
