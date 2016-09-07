var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  contentBase: './dist',
  hot: true,
  historyApiFallback: true,
  stats: {
    assets: true,
    colors: true,
    version: false,
    timings: true,
    chunks: false,
    chunkModules: false
  },
}).listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
