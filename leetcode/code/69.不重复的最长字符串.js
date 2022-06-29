/*
 * @Author: 朽木白
 * @Date: 2022-06-29 16:59:03
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-30 00:08:23
 * @Description:不重复的最长字符串:
 */

// https://leetcode.cn/problems/longest-substring-without-repeating-characters/solution/3-wu-zhong-fu-zi-fu-de-zui-chang-zi-chua-b6ex/

// 时间复杂度O(n) 空间复杂度O(m)
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let i = 0,
    j = 0,
    max = 0;

  if (s.length === 0) {
    return 0;
  }
  for (i; i < s.length; i++) {
    if (!set.has(s[i])) {
      set.add(s[i]);

      max = Math.max(max, set.size);
    } else {
      while (set.has(s[i])) {
        set.delete(s[j]);
        j++;
      }
      set.add(s[i]);
    }
  }
  return max;
};
