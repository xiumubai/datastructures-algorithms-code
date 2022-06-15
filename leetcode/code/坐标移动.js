/*
 * @Author: 朽木白
 * @Date: 2022-06-13 22:29:40
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-13 23:04:22
 * @Description:
 */

function move(str) {
  let steps = str.split(';'); //整合为数组
  let position = [0, 0];
  let reg = /^[ASWD]\d{1,2}$/; //定义正则表达式
  steps.forEach((item) => {
    //遍历数组
    if (reg.test(item)) {
      //匹配成功的字符串
      switch (
        item[0] //以字符串的第一个字母作为判断加减的依据
      ) {
        case 'A':
          position[0] -= item.slice(1) * 1; //slice：从下标为1开始截取剩余的字符串，*1是为了转换为number
          break;
        case 'D':
          position[0] += item.slice(1) * 1;
          break;
        case 'W':
          position[1] += item.slice(1) * 1;
          break;
        case 'S':
          position[1] -= item.slice(1) * 1;
          break;
      }
    }
  });
  return position;
}
