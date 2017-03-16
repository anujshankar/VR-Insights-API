const plotly = require('plotly')('Ar11rA', 'DSMZJOu7j9rqzVKjP7Cd')
const jsonData = [{ 'id': 'a', 'value': '2' },
                  { 'id': 'b', 'value': '4' },
                  { 'id': 'c', 'value': '1' },
                  { 'id': 'd', 'value': '6' },
                  { 'id': 'e', 'value': '8' }]
              

const xAxis =  jsonData.map((item)=>item.id)
const yAxis =  jsonData.map((item)=>item.value)

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