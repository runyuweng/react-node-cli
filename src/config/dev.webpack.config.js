
const webpack = require('webpack');
const path = require('path');
const { alias } = require('./default');

const baseConfig = {
  mode: 'development',
  context: alias['@root'],
  entry: {
    main:[path.resolve(__dirname, '../client/index/index.tsx'),'webpack-hot-middleware/client?reload=true'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  output: {
    path: alias['@build'],
    publicPath: '/build/',
    filename: 'index.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = baseConfig;