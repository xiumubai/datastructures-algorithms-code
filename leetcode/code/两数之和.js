/*
 * @Author: 朽木白
 * @Date: 2022-06-13 21:59:52
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-07-01 00:07:01
 * @Description: leetcode第1题两数之和：https://leetcode.cn/problems/two-sum/
 */

/**

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 */

//  1、暴力解法
var twoSum = function (nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// 2.哈希表

var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i];
    if (num in obj) {
      return [obj[num], i];
    } else {
      obj[target - num] = i;
    }
  }
};

// 3.Map

var twoSum = function (nums, target) {
  let diff = {};
  for (let i = 0; i < nums.length; i++) {
    if (diff[target - nums[i]] !== undefined) {
      return [diff[target - nums[i]], i];
    }
    diff[nums[i]] = i;
  }
};
