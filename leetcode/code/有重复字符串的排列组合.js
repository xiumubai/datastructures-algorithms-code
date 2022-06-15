/*
 * @Author: 朽木白
 * @Date: 2022-06-14 22:33:09
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-14 22:36:10
 * @Description:08.08. 有重复字符串的排列组合
 */
/*
https://leetcode.cn/problems/permutation-ii-lcci/
有重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合。

 输入：S = "qqe"
 输出：["eqq","qeq","qqe"]
 
*/

/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
  let ans = [];
  let path = [];
  let choice = S.split('').sort();

  function trace() {
    if (path.length === S.length) ans.push(path.join(''));
    for (let i = 0; i < choice.length; i++) {
      if (choice[i] == null || (i > 0 && choice[i] == choice[i - 1])) continue;
      let tmp = choice[i];
      choice[i] = null;
      path.push(tmp);
      trace();
      path.pop();
      choice[i] = tmp;
    }
  }
  trace();
  return ans;
};
