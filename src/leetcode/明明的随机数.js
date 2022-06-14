/*
 * @Author: 朽木白
 * @Date: 2022-06-13 22:05:32
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-13 22:17:25
 * @Description: 明明的随机数
 */

/**


链接：https://www.nowcoder.com/questionTerminal/3245215fffb84b7b81285493eae92ff0
来源：牛客网

明明生成了NN个1到500之间的随机整数。请你删去其中重复的数字，即相同的数字只保留一个，把其余相同的数去掉，然后再把这些数从小到大排序，按照排好的顺序输出。

数据范围： 1 \le n \le 1000 \1≤n≤1000  ，输入的数字大小满足 1 \le val \le 500 \1≤val≤500 


输入描述:
第一行先输入随机整数的个数 N 。
接下来的 N 行每行输入一个整数，代表明明生成的随机数。
具体格式可以参考下面的"示例"。


输出描述:
输出多行，表示输入数据处理后的结果

输入
3
2
2
1
输出
1
2

说明
输入解释：
第一个数字是3，也即这个小样例的N=3，说明用计算机生成了3个1到500之间的随机整数，接下来每行一个随机数字，共3行，也即这3个随机数字为：
2
2
1
所以样例的输出为：
1
2  
 */

// 注意审题，这里说的输入多行，而后再从每行中拆解出不一样组的 个数+数组 的搭配
// 从示例1 中能够看出，有2组，第一组3个数，第二组11个数
while ((line = readline())) {
  let arr = [];
  for (let i = 0; i < line; i++) {
    arr.push(readline()); //将某一组数据所有放入集合中
  }
  // 数组去重方式一
  // let setArr = new Set(arr);
  // 数组去重方式二，es6
  let setArr = [...new Set(arr)];
  let setSortArr = setArr.sort(function (a, b) {
    return a - b;
  });
  // 因为是单个单个地输出，因此这里不须要将数组转为字符串输出
  for (let j = 0; j < setSortArr.length; j++) {
    console.log(setSortArr[j]);
  }
}
