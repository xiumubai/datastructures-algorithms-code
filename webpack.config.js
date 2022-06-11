/*
 * @Author: 朽木白
 * @Date: 2022-06-08 23:01:06
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-08 23:53:15
 * @Description:
 */
const webpack = require('webpack');

const path = require('path');

const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
};

module.exports = config;
