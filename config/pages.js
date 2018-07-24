const htmlplugin = require('html-webpack-plugin')
const path = require('path')
let pages = ['index']  //增加的html的name添加在这里
let htmls = [],
  html
pages.forEach(page => {
  html = new htmlplugin({
    template: path.resolve(__dirname, `../src/pages/${page}.html`),
    filename:`${page}.html`,
    chunks: [page, 'commons'],
    chunksSortMode:'none',
    minify: {
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true
    }
  })
  htmls.push(html)
})

module.exports={htmls,pages}
