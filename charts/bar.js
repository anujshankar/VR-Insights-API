const Canvas = require('canvas')
  , canvas = new Canvas(800, 800)
  , ctx = canvas.getContext('2d')
  , Chart = require('nchart')
  , fs = require('fs')
const barChart = (source) => {
  var data = {
    labels: source.map((item) => item.name),
    datasets: [
      {
        label: 'Objects of Interest',
        fillColor: 'rgba(22,220,220,0.5)',
        strokeColor: 'rgba(0,0,0,0.8)',
        highlightFill: 'rgba(220,220,220,0.75)',
        highlightStroke: 'rgba(220,220,220,1)',
        data: source.map((item) => item.time)
      }]
  }
  new Chart(ctx).Bar(data)
  canvas.toBuffer(function (err, buf) {
    if (err) throw err
    fs.writeFile(__dirname + '/bar.png', buf)
  })
}
module.exports = barChart