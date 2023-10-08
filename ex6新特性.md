# ES6新特性
## 1.let和const

### 1.1 let  

1.不能先使用再声明

```ts
num=20;
let num=30;
console.log(num); (X)
```

2.只能在块级作用域有效

```ts
{
    let num=20;
}
console.log(num);  (x)
```

and

```ts
var num = 20;
{
    let num = 30;
}
console.log(num);  (x)
```

### 1.2 const 

**主要用来声明常量**

1. 声明常量时必须赋值

```ts
const name;
console.log(name);  (x)
```

2.只在块级作用域有效

```ts
var message = '123';
{
    const  messge='456';
}
console.log(message);   =>`123`
```

3.赋值后，值不能修改

**注意：** const 赋值的常量如果是基本数据类型，不能重新赋值；如果是对象等复杂数据类型，不能更改地址，但是可以更改对象中属性的值。

```ts
const user = { id: 123, name: "张三" };
user.name="李四";
console.log(user);   (✔)
```

### 1.3 var、let和const的区别

1. var 声明的变量作用域在所处的函数内，let 和 const 声明的变量作用域在所处的大括号内。
2. var 声明的变量存在变量提升现象，let 和 const 声明的变量不存在变量提升现象。
3. const 声明变量时必须要赋值，赋值之后不能再重新赋值。

## 2.箭头函数

- ( ) 代表函数
- { } 代表函数体
- const ft = ()=>{} 代表把一个函数赋值给 ft
- ft() 调用该函数

1.无参数，函数只有一行代码

```ts
// 常规写法
function print() {
    console.log("123");
}
// 箭头函数
const ft = ()=> console.log("123");
// 调用函数
ft();
```

2.有参数，函数只有一行代码

```ts
 // 常规写法
  function print(name,content) {
      return name + content;
  }
  // 箭头函数
  const ft = (name,content) => name + content;
  // 调用函数
  console.log(ft("Lee","hahaha"));
```

## 3.解构

### 3.1 数组解构

```ts
let [a, b] = [0, 1, 2, 3];
console.log(a + b); =>[0,1]+[2,3]
```

### 3.2 对象解构

```ts
let { name, age } = { name: "张三", age: 19 };
console.log("姓名:" + name + ",年龄:" + age); 
```

## 4.剩余参数

剩余参数允许我们将一个未知数量的参数表示为一个**数组**。

```ts
const print = (0,1,2);
const print = (num, ...args) => {
    console.log(num);
    console.log(args);
}
=>0
=>[1,2]
```

### 4.1和解构连用

```ts
let users = ['张三', '李四', '王五'];
let [u1, ...u2] = users;
console.log(u1);=>张三
console.log(u2);=>['李四','王五']
```

### 4.2合并数组

```ts
let u1 = ['1', '2', '3'];
let u2 = ['4', '5', '6'];
let u3 = [...u1,...u2];
console.log(u3);
=>['1', '2', '3','4', '5', '6']
```

## 5.数组操作

### 5.1 includes

includes 用来判断该数组是否包含某个值，返回值是布尔值

```ts
let users = ['张三','李四'];
let res =users.includes('张三');
console.log(res);=>true
```

### 5.2 find

find 用来找到第一个符合条件的成员，没有找到返回 undefined

```ts
let users = [{ name: '张三', age: 18 }, { name: '李四', age: 20 }];
let user = users.find((item, index) =>
    item.age > 18
)
console.log(user);=>{name:'李四',age:20}
```

### 5.3 findindex

findIndex 用来找到第一个符合条件的成员的索引，没有的话返回 -1

```ts
let users = [{ name: '张三', age: 18 }, { name: '李四', age: 20 }];
let index = users.findIndex((item, index) =>
    item.age > 18
)
console.log(index); => 1
```



### 5.4 filter

filter 用来返回一个满足条件的新数组，不满足条件返回空数组

```ts
let users = [{ name: '张三', age: 18 }, { name: '李四', age: 20 }];
let array = users.filter((item, index) =>
    item.age > 21
)
console.log(array);=> Array(0)
```

### 5.5 map()

map 用来返回一个对成员进行加工之后的新数组

```ts
let users = [{ name: '张三', age: 18 }, { name: '李四', age: 20 }];
let array = users.map((item, index) => {
    item.name += "666";
    item.age += 10;
    return item;
})
console.log(array); 
=>[{ name: '张三666', age: 28 }, 
   { name: '李四666', age: 30 }]
```

## 6.可选连

可选链` ?.` 是一种 访问嵌套对象属性的防错误方法 。即使中间的属性不存在，也不会出现错误。 如果可选链` ?. `前面部分是 undefined 或者 null，它会停止运算并返回 undefined。
