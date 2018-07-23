const path = require('path')
const minicss = require('mini-css-extract-plugin')
const uglify = require('uglifyjs-webpack-plugin')
const optimizecss = require('optimize-css-assets-webpack-plugin')
const htmlplugin = require('html-webpack-plugin')
const webpack = require('webpack')
const cleanwebpack = require('clean-webpack-plugin')
let dev = process.env.NODE_ENV !== 'production'
let publicPath
if (dev) {
  publicPath = {
  }
}else{
  publicPath={
    publicPath:'../'
  }
}
module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, './src/js/index.js')
  },
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'js/[name].js',
    publicPath: dev ? '' : './'
  },
  stats: 'errors-only',
  resolve: {
    extensions: ['*', '.css', '.scss', '.js', '.vue', '.json', '.ts'],
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        use: [
          {
            loader: dev ? 'style-loader' : 'minicss.loader',
            options: publicPath
          },
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: dev ? 'style-loader' : minicss.loader,
            options:publicPath
          },
          {
            loader:'css-loader',
            options:{
              importLoaders:1
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)$/i,
        loader: 'url-loader',
        query: { limit: 1024, name: 'assets/[name].[ext]' }
      },
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
      },
      { test: /\.html$/, loader: dev ? 'raw-loader' : 'html-url-loader' }
    ]
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    hot: true,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  plugins: [
    new optimizecss({
      assetNameRegExp: /\.css$/i,
      cssProcessor: require('cssnano'),
      canPrint: true
    }),
    new cleanwebpack('dist/*.*', {
      root: __dirname,
      verbose: true,
      dry: true
    }),
    new minicss({
      filename:
        process.env.NODE_ENV === 'production' ? '/css/[name].css' : '[name].css'
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
      })
    ]
  }
}
