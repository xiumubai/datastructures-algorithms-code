/*
 * @Author: 朽木白
 * @Date: 2022-06-29 16:59:03
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-30 00:16:36
 * @Description:不重复的最长字符串:
 */

// https://leetcode.cn/problems/longest-substring-without-repeating-characters/solution/3-wu-zhong-fu-zi-fu-de-zui-chang-zi-chua-b6ex/

// 时间复杂度O(n) 空间复杂度O(m)
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let i = 0, // 右边界窗口
    j = 0, // 左边界窗口
    max = 0; // 记录窗口的最大值

  if (s.length === 0) {
    return 0;
  }

  // 右边界向右滑动
  for (i; i < s.length; i++) {
    //    查看set中是否有重复的值
    if (!set.has(s[i])) {
      //    如果这个值在set中没有，就添加到set中
      set.add(s[i]);
      // 每次添加完以后记录最大值
      max = Math.max(max, set.size);
    } else {
      // 当前的这个值在set中有重复了
      while (set.has(s[i])) {
        // 在set中删除这个重复的值和之前的所有值
        set.delete(s[j]);
        // 左边界向右滑动
        j++;
      }
      // 最后把当前的值添加到set中去
      set.add(s[i]);
    }
  }
  // 返回无重复的最大的子串长度
  return max;
};
