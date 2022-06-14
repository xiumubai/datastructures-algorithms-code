/*
 * @Author: 朽木白
 * @Date: 2022-06-14 22:05:20
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-14 22:06:39
 * @Description: 680. 验证回文字符串
 */
/**

https://leetcode.cn/problems/valid-palindrome-ii/

给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

输入: s = "aba"
输出: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const len = s.length;
  let i = 0,
    j = len - 1;

  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }

  if (isPalindrome(i + 1, j)) {
    return true;
  }

  if (isPalindrome(i, j - 1)) {
    return true;
  }

  function isPalindrome(st, ed) {
    while (st < ed) {
      if (s[st] !== s[ed]) {
        return false;
      }
      st++;
      ed--;
    }
    return true;
  }

  // 默认返回false
  return false;
};
