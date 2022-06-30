/*
 * @Author: 朽木白
 * @Date: 2022-06-30 15:36:05
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-30 15:48:28
 * @Description:
 */

let t = 'sjkls';

const need = {};
for (let i in t) {
  // debugger;
  need[i] = (need[i] || 0) + 1;
}
console.log(need);
