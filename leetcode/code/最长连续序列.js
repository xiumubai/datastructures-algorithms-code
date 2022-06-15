/*
 * @Author: 朽木白
 * @Date: 2022-06-14 22:37:36
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-14 22:39:03
 * @Description:Offer II 119.最长连续增长序列
 */

/*

https://leetcode.cn/problems/WhsWhI/

给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function (nums) {
  nums = [...new Set(nums.sort((a, b) => a - b))];
  const len = nums.length;
  if (!len) return 0;
  let max = 0;
  let l = 0,
    r = 1;
  while (r < len) {
    if (nums[r] - nums[l] === r - l) {
      max = Math.max(max, r - l);
    } else {
      l = r;
    }
    r++;
  }
  return max + 1;
};
