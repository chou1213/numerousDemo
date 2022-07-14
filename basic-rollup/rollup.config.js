export default {
  input: './src/index.js',
  output: {
    dir: 'dist', // amd格式，需要设置dir，不能设置file，因为拆分代码的js可能有多个
    format: 'amd'
  }
}