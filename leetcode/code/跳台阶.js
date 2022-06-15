/*
 * @Author: 朽木白
 * @Date: 2022-06-13 22:22:14
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-13 22:26:59
 * @Description: 跳台阶
 */
/**


https://www.nowcoder.com/practice/8c82a5b80378478f9484d87d1c5f12a4?tpId=196&tqId=37098&rp=1&ru=/exam/oj&qru=/exam/oj&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26pageSize%3D50%26search%3D%25E8%25B7%25B3%25E5%258F%25B0%25E9%2598%25B6%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D196&difficulty=undefined&judgeStatus=undefined&tags=&title=%E8%B7%B3%E5%8F%B0%E9%98%B6


 描述
一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个 n 级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

数据范围：1 \leq n \leq 401≤n≤40
要求：时间复杂度：O(n)O(n) ，空间复杂度： O(1)O(1)
示例1
输入：
2
复制
返回值：
2
复制
说明：
青蛙要跳上两级台阶有两种跳法，分别是：先跳一级，再跳一级或者直接跳两级。因此答案为2       
示例2
输入：
7
复制
返回值：
21

*/

function jumpFloor(number) {
  if (number <= 0) return -1;
  else if (number === 1) return 1;
  else if (number === 2) return 2;
  else return jumpFloor(number - 1) + jumpFloor(number - 2);
}
