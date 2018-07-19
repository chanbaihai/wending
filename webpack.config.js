const path = require('path')
const minicss = require('mini-css-extract-plugin')
const uglify = require('uglifyjs-webpack-plugin')
const optimizecss = require('optimize-css-assets-webpack-plugin')
const htmlplugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, './src/js/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js'
    // publicPath: '/dist'
  },
  stats: 'errors-only',
  resolve: {
    extensions: ['*', '.css', '.scss', '.js', '.vue', '.json', '.ts']
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: [minicss.loader, 'css-loader', 'sass-loader'] },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/i,
        loader: 'url-loader',
        query: { limit: 1024, name: '/img/[name].[ext]' }
      },
      { test: /\.html$/, loader: 'html-url-loader' },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
          // other vue-loader options go here
        }
      }
    ]
  },
  devServer: {
    hot: true,
    open: true,
    inline: true
  },
  plugins: [
    new minicss({
      // filename: '/css/[name].css'
    }),
    new htmlplugin({
      template: path.resolve(__dirname, 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2
        }
      }
    },
    runtimeChunk: true,
    minimizer: [
      new uglify({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new optimizecss({})
    ]
  }
}
