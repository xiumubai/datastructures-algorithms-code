/*
 * @Author: 朽木白
 * @Date: 2022-06-14 22:25:02
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-14 22:25:04
 * @Description:226. 翻转二叉树
 */
/*
https://leetcode.cn/problems/invert-binary-tree/
给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return root;
  }
  let right = invertTree(root.right);
  let left = invertTree(root.left);

  root.left = right;
  root.right = left;
  return root;
};
