/*
 * @Author: 朽木白
 * @Date: 2022-06-14 21:55:26
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-14 21:56:39
 * @Description:15. 三数之和
 */

/**

https://leetcode.cn/problems/3sum/

给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length;
  let res = [];
  // 对数组进行从小到大的排序
  nums = nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < len - 2; i++) {
    let j = i + 1,
      k = len - 1;
    // 重复的数字，跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // 循环结束的条件
    while (j < k) {
      // 和小于0，左指针右移
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++;

        // 处理左指针重复的数字
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        // 和大于0，右指针左移
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
        // 处理右指针重复的数字
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
        // 找到匹配的元素
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        // 左右指针向中间移动
        j++;
        k--;

        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }

        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }
  return res;
};
