const Canvas = require('canvas')
  , canvas = new Canvas(800, 800)
  , ctx = canvas.getContext('2d')
  , Chart = require('nchart')
  , fs = require('fs')


// const data = [
//   {
//     value: 100,
//     color: '#F7464A',
//     highlight: '#FF5A5E',
//     label: 'Red',
//     labelColor: 'white',
//     labelFontSize: '16'
//   },
//   {
//     value: 500,
//     color: '#46BFBD',
//     highlight: '#5AD3D1',
//     label: 'Green1',
//     labelColor: 'white',
//     labelFontSize: '16'
//   },
//   {
//     value: 100,
//     color: '#FDB452',
//     highlight: '#FFC870',
//     label: 'Yellow',
//     labelColor: 'white',
//     labelFontSize: '16'
//   }
// ]

const pieChart = (data) => {
  const optionsPie = {
    tooltipEvents: [],
    showTooltips: true,
    onAnimationComplete: function () {
      this.showTooltip(this.segments, true)
    },
    tooltipTemplate: '<%= label %>'
  }
  new Chart(ctx).Pie(data, optionsPie)

  canvas.toBuffer(function (err, buf) {
    if (err) throw err
    fs.writeFile(__dirname + '/pie.png', buf)
  })
}


module.exports = pieChart