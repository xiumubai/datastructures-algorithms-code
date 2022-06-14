/*
 * @Author: 朽木白
 * @Date: 2022-06-14 22:57:27
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-14 22:57:31
 * @Description:剑指 Offer 32 - I. 从上到下打印二叉树
 */

/**
https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

 

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

   返回：

[3,9,20,15,7]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const levelOrder = (root) => {
  if (!root) return [];
  // 创建队列，并将根节点入队
  const queue = [root];
  const res = [];
  while (queue.length) {
    // 获取根节点，根节点出队
    const n = queue.shift();
    // 访问队头
    res.push(n.val);
    // 队头的子节点依次入队
    n.left && queue.push(n.left);
    n.right && queue.push(n.right);
  }
  return res;
};
