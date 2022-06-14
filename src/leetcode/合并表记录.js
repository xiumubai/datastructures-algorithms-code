/*
 * @Author: 朽木白
 * @Date: 2022-06-14 14:39:58
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-14 14:40:00
 * @Description:
 */
// An highlighted block
var num = readline();
// console.log(num)
var obj = {};
for (var i = 0; i < num; i++) {
  var line = readline().split(' ');
  if (obj[parseInt(line[0])]) {
    obj[parseInt(line[0])] += parseInt(line[1]);
  } else {
    obj[parseInt(line[0])] = parseInt(line[1]);
  }
}
for (var key in obj) {
  console.log(key + ' ' + obj[key]);
}
