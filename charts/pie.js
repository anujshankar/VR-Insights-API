const convertToXL = require('../utilities/convertToExcel')
const Canvas = require('canvas')
  , canvas = new Canvas(800, 800)
  , ctx = canvas.getContext('2d')
  , Chart = require('nchart')
  , fs = require('fs')

const assignColor = () => {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
const pieChart = (data) => {
  convertToXL(data)
  const pieData = data.map((item) => {
    return {
      value: (item.time) / (item.totalTime) * 100,
      color: assignColor(),
      label: item.name
    }
  })
  const optionsPie = {
    tooltipEvents: [],
    showTooltips: true,
    onAnimationComplete: function () {
      this.showTooltip(this.segments, true)
    },
    tooltipTemplate: '<%= label %>'
  }
  new Chart(ctx).Pie(pieData, optionsPie)

  canvas.toBuffer(function (err, buf) {
    if (err) throw err
    fs.writeFile(__dirname + '/pie.png', buf)
  })
}

module.exports = pieChart