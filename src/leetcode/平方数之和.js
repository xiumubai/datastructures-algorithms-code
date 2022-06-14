/*
 * @Author: 朽木白
 * @Date: 2022-06-14 22:00:19
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-14 22:00:21
 * @Description:633. 平方数之和
 */

/**
https://leetcode.cn/problems/sum-of-square-numbers/

给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。

 

输入：c = 5
输出：true
解释：1 * 1 + 2 * 2 = 5
 */

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let a = 0,
    b = Math.floor(Math.sqrt(c));

  while (a <= b) {
    if (a * a + b * b === c) return true;
    if (a * a + b * b < c) a++;
    if (a * a + b * b > c) b--;
  }
  return false;
};
