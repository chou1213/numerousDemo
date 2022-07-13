const path = require('path');

module.exports = {
  mode: 'none',            // 打包模式，development，production，none
  entry: './src/index.js', // 入口文件
  output: {                // 打包后的文件名和目录
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}