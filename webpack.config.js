const path = require('path');
const webpack = require('webpack');
const hotLoadEntryPoints = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:9000',
  'webpack/hot/only-dev-server'
];

module.exports = {
  entry: {
    main: ['./app/main.jsx', ...hotLoadEntryPoints],
    vendor: ['react', 'react-dom', ...hotLoadEntryPoints]
  },

  module: {
    rules: [{
      test: /\.jsx$/,
      use: [{ loader: 'babel-loader' }]
    }]
  },

  resolve: {
    mainFiles: ['index', 'main.jsx', 'main.js'],
    extensions: ['.jsx', '.js'],
    alias: {
      components: path.resolve(__dirname, 'app/components/')
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'dist/vendor.bundle.js' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  output: {
    path: path.resolve('./dist'),
    filename: 'dist/[name].bundle.js'
  },

  devServer: {
    contentBase: path.resolve('./dist'),
    compress: true,
    port: 9000,
    open: true,
    hot: true,
    historyApiFallback: true
  },

  stats: {
    colors: true
  }
}
