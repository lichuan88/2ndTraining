### 解构

```js
const arr=[1,2,3]
const [a,b,c]=arr
console.log(a,b,c); //1,2,3

const user={name:'张三',age:2}
const {name,age}=user
console.log(name,age) //张三，2
```

### 模板字符串

```js
const name="李四"
const age=20
const all=`${name}今年${age}岁`
console.log(all) //李四今年20岁
```

### 展开运算符

ES6的展开运算符(`...`)用于将数组、字符串等可迭代对象展开，使其拆分为独立的元素或字符。

```js
const arr1=[1,2,3]
const arr2=[4,5,6]
const result=[...arr1,...arr2]
console.log(result); //[1,2,3,4,5,6]

const str = 'hello';
const chars = [...str];
console.log(chars); //["h", "e", "l", "l", "o"]
```

### 剩余操作符

```js
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 输出：1
console.log(b); // 输出：2
console.log(rest); // 输出：[3, 4, 5]
```

### 箭头函数

tip:在普通函数中，`this`的值取决于函数被调用的方式。但是，在箭头函数中，`this`的值绑定在函数定义时的作用域中，而不是在函数被调用时的作用域中。

```js
const sum = (a, b) => {
  return a + b;
};

console.log(sum(1, 2)); // 输出：3
```

### 操作数组

#### 1.数组实例的`find`方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为`true`的成员，然后返回该成员。如果没有符合条件的成员，则返回`undefined`。

```js
[1, 4, -5, 10].find((n) => n < 0)
// -5
```

#### 2.`Array.prototype.includes()` 方法用于判断数组是否包含指定的元素，返回一个布尔值。

语法如下：arr.includes(searchElement[, fromIndex])

其中，`arr`是要进行判断的数组，`searchElement`是要查找的元素，`fromIndex`是可选参数，表示搜索的起始位置。`includes()` 方法会从数组的 `fromIndex` 位置开始向后搜索，如果找到了指定的元素，则返回 `true`，否则返回 `false`。如果不提供 `fromIndex` 参数，默认从索引为 0 的位置开始搜索。

```js
const array = [1, 2, 3, 4, 5];

console.log(array.includes(3)); // 输出：true
console.log(array.includes(6)); // 输出：false

console.log(array.includes(3, 2)); // 输出：true，从索引为 2 的位置开始搜索
```

#### 3.`Array.prototype.map()` 方法用于对数组中的每个元素执行指定的操作，并返回一个新的数组，原始数组不会被修改。

```js
const array = [1, 2, 3];
const doubledArray = array.map(element => element * 2);
console.log(doubledArray); // 输出：[2, 4, 6]
```

#### 4.`Array.prototype.filter()` 方法用于过滤数组中的元素，返回一个新的数组，其中只包含满足指定条件的元素。

```js
const array = [1, 2, 3, 4, 5];
const filteredArray = array.filter(element => element > 2);
console.log(filteredArray); // 输出：[3, 4, 5]
```

