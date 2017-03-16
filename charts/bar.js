const plotly = require('plotly')('Ar11rA', 'DSMZJOu7j9rqzVKjP7Cd')
const convertToXL = require('../utilities/convertToExcel')
const barChart = (jsonData) => {
  convertToXL(jsonData)
  const xAxis = jsonData.map((item) => item.name)
  const yAxis = jsonData.map((item) => item.time)

  const data = [
    {
      x: xAxis,
      y: yAxis,
      type: 'bar'
    }
  ]
  const graphOptions = { filename: 'basic-bar', fileopt: 'overwrite' }
  plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg)
  })
}
module.exports = barChart