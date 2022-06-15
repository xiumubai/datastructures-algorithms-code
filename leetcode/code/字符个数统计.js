/*
 * @Author: 朽木白
 * @Date: 2022-06-13 22:19:20
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-13 22:19:23
 * @Description: 字符个数统计
 */

/**


题目描述
编写一个函数，计算字符串中含有的不一样字符的个数。字符在ACSII码范围内(0~127)，换行表示结束符，不算在字符里。不在范围内的不做统计。
输入描述:
输入N个字符，字符在ACSII码范围内。
输出描述:
输出范围在(0~127)字符的个数。

示例1
输入
abc
输出
3
 */

// charCodeAt() //将字符转为 ascall 码
// formCharCode //将 ascall转为字符，单个转
let str = readline();
let strArr = str.split(''); //须要将连续字符转为字符去重
let strSet = [];
let count = 0;
for (let i = 0; i < strArr.length; i++) {
  // 循环遍历，去重
  if (strSet.indexOf(strArr[i]) == -1) {
    strSet.push(strArr[i]);
  }
}
for (let i = 0; i < strSet.length; i++) {
  // 遍历去重后的数组，判断转换后的 ascall 是否小于 127
  if (strSet[i].charCodeAt() <= 127) count++;
}
console.log(count);
