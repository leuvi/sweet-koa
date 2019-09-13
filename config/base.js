const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const rootUrl = url => path.resolve(process.cwd(), url)
const isDev = process.env.node_env == 'dev'

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        }
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.(png|gif|jpg|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name() {
            if (!isDev) {
              return 'images/[name].[hash:8].[ext]'
            }
            return '[name].[ext]'
          }
        }
      }]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name() {
            if (!isDev) {
              return 'fonts/[name].[hash:8].[ext]'
            }
            return '[name].[ext]'
          }
        }
      }]
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@assets': rootUrl('src/assets'),
      '@common': rootUrl('src/common'),
      '@utils': rootUrl('src/assets/utils'),
      '@images': rootUrl('src/assets/images'),
      '@css': rootUrl('src/assets/less'),
      '@store': rootUrl('src/store'),
      '@router': rootUrl('src/router'),
      '@view': rootUrl('src/view'),
    }
  }
}