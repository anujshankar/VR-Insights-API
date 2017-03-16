var Canvas = require('canvas')
  , canvas = new Canvas(800, 800)
  , ctx = canvas.getContext('2d')
  , Chart = require('nchart')
  , fs = require('fs')

new Chart(ctx).Pie(
  [
    {
      'value': 10
      , 'color': '#E2EAE9'
    }
    , {
      'value': 100
      , 'color': '#D4CCC5'
    }
    , {
      'value': 40
      , 'color': '#949FB1'
    }
  ]
  , {
    scaleShowValues: true
    , scaleFontSize: 24
  }
)

canvas.toBuffer(function (err, buf) {
  if (err) throw err
  fs.writeFile(__dirname + '/pie.png', buf)
})