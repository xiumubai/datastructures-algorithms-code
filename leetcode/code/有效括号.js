/*
 * @Author: 朽木白
 * @Date: 2022-06-14 21:43:46
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-14 21:44:53
 * @Description: 有效括号
 */

/**

https://leetcode.cn/problems/valid-parentheses/
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。


输入：s = "()"
输出：true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  // 结合题意，空字符串无条件判断为 true
  if (!s) {
    return true;
  }
  const leftToRight = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  // 初始化 stack 数组
  const stack = [];
  // 缓存字符串长度
  const len = s.length;
  // 遍历字符串
  for (let i = 0; i < len; i++) {
    // 缓存单个字符
    const ch = s[i];
    // 判断是否是左括号，这里我为了实现加速，没有用数组的 includes 方法，直接手写判断逻辑
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(leftToRight[ch]);
    } else {
      // 若栈不为空，且栈顶的左括号没有和当前字符匹配上，那么判为无效
      if (!stack.length || stack.pop() !== ch) {
        return false;
      }
    }
  }
  // 若所有的括号都能配对成功，那么最后栈应该是空的
  return !stack.length;
};
