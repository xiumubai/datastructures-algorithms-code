/*
 * @Author: 朽木白
 * @Date: 2022-06-14 22:45:06
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-14 22:51:01
 * @Description:5. 最长回文子串
 */

/**
https://leetcode.cn/problems/longest-palindromic-substring/


给你一个字符串 s，找到 s 中最长的回文子串。
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

解题思路：https://leetcode.cn/problems/longest-palindromic-substring/solution/by-alexyang-4bkr/
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = 0; // 当前最大回文串的长度
  let start = -1; // 当前最大回文串的起始索引
  const l = s.length; // s 的长度
  for (let i = 0; i < l; i++) {
    // 遍历 s
    let now = 1; // 当前回文串的长度
    let l = i - 1; // 左侧开始遍历的指针
    while (s[i + 1] === s[i]) {
      // 如果当前字符后边的字符都一样, 当前长度 + 1,  s遍历指针向后推
      now++;
      i++;
    }
    let r = i + 1; // 获取右侧开始遍历的指针
    while (s[l] === s[r] && s[l] !== undefined) {
      // 从连续字符两端开始像两侧扩展,直到越界或者不一致,一致的直接累积到当前长度中,修改左右指针
      now += 2;
      l--;
      r++;
    }
    if (now > max) {
      // 判断与之前最大的对比,更新当前最大回文串的起始索引
      max = now;
      start = l + 1;
    }
  }
  return s.slice(start, start + max); // 通过最大长度和起始索引,获取需要的字符串
};
