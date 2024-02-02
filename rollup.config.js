import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.js', // 你的入口文件
  output: {
    file: 'bundle.js', // 编译后的文件
    format: 'iife', // 立即执行函数表达式（适用于网页）
    name: 'luaJson', // 全局变量名，网页中通过这个名字访问你的库
  },
  plugins: [
    resolve(), // 用于加载 node_modules 中的模块
    commonjs() // 将 CommonJS 转换成 ES6 模块
  ]
};
