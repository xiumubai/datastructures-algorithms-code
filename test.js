/*
 * @Author: 朽木白
 * @Date: 2022-06-09 09:02:16
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-09 09:14:03
 * @Description:
 */
const obj = {
  a: 1,
  fn: () => {
    console.log(this.a);
  },
};
const a = 2;
obj.fn();
// const fn = obj.fn;
// console.log(obj.fn());
// console.log(fn());
// console.log(obj.fn.call(null));
