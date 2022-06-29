/*
 * @Author: 朽木白
 * @Date: 2022-06-29 16:59:03
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-29 17:11:49
 * @Description:
 */
var lengthOfLongestSubstring = function (s) {
  const occ = new Set();
  const n = s.length;
  let rk = -1,
    ans = 0;
  for (let i = 0; i < n; ++i) {
    if (i != 0) {
      occ.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      occ.add(s.charAt(rk + 1));
      ++rk;
    }

    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};
