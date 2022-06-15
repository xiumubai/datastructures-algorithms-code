/*
 * @Author: 朽木白
 * @Date: 2022-06-14 21:36:40
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-14 21:38:55
 * @Description: 反转链表
 */
/**
 
https://leetcode.cn/problems/reverse-linked-list/

给你单链表的头节点 head ，请你反转链表，并返回反转后的链表

输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]

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
 * @return {ListNode}
 */
var reverseList = function (head) {
  let cur = head;
  let prev = null;

  while (cur !== null) {
    // 解构
    [cur.next, prev, cur] = [prev, cur, cur.next];
    // let next = cur.next
    // cur.next = prev
    // prev = cur
    // cur = next
  }
  return prev;
};
