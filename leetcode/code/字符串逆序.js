/*
 * @Author: 朽木白
 * @Date: 2022-06-14 14:37:05
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-14 14:37:46
 * @Description:
 */
var a = 'I Love Code';
//alert(a.substring(0));
//第一种方法
for (var i = a.length - 1; i >= 0; i--) {
  document.write(a[i]);
}

//第二种方法
var reverse = function (str) {
  var newStr = '',
    i = str.length;
  for (; i >= 0; i--) {
    newStr += str.charAt(i);
  }
  return newStr;
};

var a = reverse('abcde');
document.write(reverse(a));

//第三种方法
var reverse = function (str) {
  return str.split('').reverse().join('');
};
document.write(reverse(a));

//第四种方法
var reverse = function (str) {
  var stack = []; //生成一个栈
  for (var len = str.length, i = len; i >= 0; i--) {
    stack.push(str[i]);
  }
  return stack.join('');
};
document.write(reverse(a));
