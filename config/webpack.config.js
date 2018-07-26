const path = require('path')
const minicss = require('mini-css-extract-plugin')
const optimizecss = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack')
const cleanwebpack = require('clean-webpack-plugin')
const entry = require('./entries') //入口文件
const htmls = require('./pages')
let dev = process.env.NODE_ENV !== 'production'
let publicPath
if (dev) {
  publicPath = {}
} else {
  publicPath = {
    publicPath: '../'
  }
}
module.exports = {
  mode: 'development',
  entry: entry,
  output: {
    path: path.resolve(__dirname, '../docs'),
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
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude:path.resolve(__dirname,'../node_modules')
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: dev ? 'style-loader' : minicss.loader,
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
            options: publicPath
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
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
    // new optimizecss({
    //   assetNameRegExp: /\.css$/i,
    //   cssProcessor: require('cssnano'),
    //   canPrint: true
    // }),
    new cleanwebpack('docs', {
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false
    }),
    new minicss({
      filename:
        process.env.NODE_ENV === 'production' ? '/css/[name].css' : '[name].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    ...htmls.htmls
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  }
  //   minimizer: [
  //     new uglify({
  //       cache: true,
  //       parallel: true,
  //       sourceMap: true
  //     })
  //   ]
  // }
}
