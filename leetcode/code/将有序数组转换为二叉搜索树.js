/*
 * @Author: 朽木白
 * @Date: 2022-06-14 22:03:20
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-14 22:04:45
 * @Description:108. 将有序数组转换为二叉搜索树
 */

/**

https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/

给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：


 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
  // 处理边界条件
  if (!nums.length) {
    return null;
  }

  // root 结点是递归“提”起数组的结果
  const root = buildBST(0, nums.length - 1);

  // 定义二叉树构建函数，入参是子序列的索引范围
  function buildBST(low, high) {
    // 当 low > high 时，意味着当前范围的数字已经被递归处理完全了
    if (low > high) {
      return null;
    }
    // 二分一下，取出当前子序列的中间元素
    const mid = Math.floor(low + (high - low) / 2);
    // 将中间元素的值作为当前子树的根结点值
    const cur = new TreeNode(nums[mid]);
    // 递归构建左子树，范围二分为[low,mid)
    cur.left = buildBST(low, mid - 1);
    // 递归构建左子树，范围二分为为(mid,high]
    cur.right = buildBST(mid + 1, high);
    // 返回当前结点
    return cur;
  }
  // 返回根结点
  return root;
};
