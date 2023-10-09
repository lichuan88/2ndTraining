### 解构赋值
解构赋值是对赋值运算符的扩展。
### 解构模型
解构的源，解构赋值表达式的右边部分。
解构的目标，解构赋值表达式的左边部分
```js
let [a, b, c] = [1, 2, 3];
// a = 1
// b = 2
// c = 3
```
### 模板字符串
模板字符串相当于加强版的字符串，用反引号 `,除了作为普通字符串，还可以用来定义多行字符串，还可以在字符串中加入变量和表达式。
```js
let string = `Hello'\n'world`;
console.log(string); 
// "Hello'
// 'world"
```
字符串插入变量和表达式。
变量名写在 ${} 中，${} 中可以放入 JavaScript 表达式
```js
let name = "Mike";
let age = 27;
let info = `My Name is ${name},I am ${age+1} years old next year.`
console.log(info);
// My Name is Mike,I am 28 years old next year.
```
### 箭头函数
基本语法是：
>参数 => 函数体
```js
var f = v => v;
//等价于
var f = function(a){
 return a;
}
f(1);  //1
```
当箭头函数没有参数或者有多个参数，要用 () 括起来。
```JS
var f = (a,b) => a+b;
f(6,2);  //8
```
### 数组
扩展的方法
>`find()  `     
查找数组中符合条件的元素,若有多个符合条件的元素，则返回第一个元素。
```js
let arr = Array.of(1, 2, 1, 3);
// 参数1：回调函数
// 参数2(可选)：指定回调函数中的 this 值
console.log(arr.findIndex(item => item == 2)); // 1
 
// 数组空位处理为 undefined
console.log([, 1].findIndex(n => true)); //0
```
>`findIndex()  `     
 查找数组中符合条件的元素索引，若有多个符合条件的元素，则返回第一个元素索引。
 ```js
 let arr = Array.of(1, 2, 1, 3);
// 参数1：回调函数
// 参数2(可选)：指定回调函数中的 this 值
console.log(arr.findIndex(item => item == 2)); // 1
 
// 数组空位处理为 undefined
console.log([, 1].findIndex(n => true)); //0
```
>`fill()   `   
将一定范围索引的数组元素内容填充为单个指定的值。
```js
let arr = Array.of(1, 2, 3, 4);
// 参数1：用来填充的值
// 参数2：被填充的起始索引
// 参数3(可选)：被填充的结束索引，默认为数组末尾
console.log(arr.fill(0,1,2)); // [1, 0, 3, 4]
```
>`Array.prototype.includes()`    
方法用于判断数组是否包含指定的元素，返回一个布尔值。
```js
array.includes(searchElement[, fromIndex])
```
其中，searchElement是要查找的元素，fromIndex是可选参数，表示从哪个索引开始查找。如果省略fromIndex，则默认从数组的第一个元素开始查找。如果数组中包含searchElement，则返回true，否则返回false。
```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // true
console.log(arr.includes(6)); // false
console.log(arr.includes(3, 2)); // true，从索引2开始查找
```