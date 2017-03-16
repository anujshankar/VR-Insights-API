const json2xls = require('json2xls')
const fs = require('fs')
const convertToXL = (data) => {
  const json = data
  const xls = json2xls(json)

  fs.writeFileSync('data.xlsx', xls, 'binary')
}
module.exports = convertToXL