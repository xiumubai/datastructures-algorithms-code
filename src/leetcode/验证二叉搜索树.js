/*
 * @Author: 朽木白
 * @Date: 2022-06-14 22:17:54
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-14 22:17:56
 * @Description:98. 验证二叉搜索树
 */
/*

https://leetcode.cn/problems/validate-binary-search-tree/

给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

有效 二叉搜索树定义如下：

节点的左子树只包含 小于 当前节点的数。
节点的右子树只包含 大于 当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。


输入：root = [2,1,3]
输出：true

输入：root = [5,1,4,null,null,3,6]
输出：false
解释：根节点的值是 5 ，但是右子节点的值是 4 。
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  function defs(root, min, max) {
    if (!root) {
      return true;
    }
    if (root.val <= min || root.val >= max) return false;
    return defs(root.left, min, root.val) && defs(root.right, root.val, max);
  }
  return defs(root, -Infinity, Infinity);
};
