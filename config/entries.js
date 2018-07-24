const path = require('path')
const pages = require('./pages')
let entries = {}
pages.pages.forEach(page => {
  entries[page] = path.resolve(__dirname, `../src/js/${page}.js`)
})
module.exports = entries
