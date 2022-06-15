/*
 * @Author: 朽木白
 * @Date: 2022-06-14 21:49:47
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-14 21:49:49
 * @Description:移除链表元素
 */

/**

https://leetcode.cn/problems/remove-linked-list-elements/
给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 

输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let ele = {
    next: head,
  };
  let cur = ele;
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return ele.next;
};
