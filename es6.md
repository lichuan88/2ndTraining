# ES6 基础语法

## 1.解构

```js
// ### 数组解构
const [a, b] = [1, 2, 3];
console.log(a, b);
//1,2
```

```js
// ### 对象解构
const { name, id } = { name: "张三", id: 12 };
console.log(name, id);
//张三 12
const zhaob = {
  name: "赵本山",
  age: "no",
  xiaopin: function () {
    console.log("我会小品");
  },
};
let { name, age, xiaopin } = zhaob;
console.log(xiaopin);
//[Function: xiaopin]
```

## 2.拼接

```js
// 拼接
const name = "文杰";
const introduction = `我是${name}的弟弟`;
console.log(introduction);
//我是文杰的弟弟

/* 可用于请求拼接  优雅*/
`/auth/member/role?websiteId=${websiteId}`;
`Bearer ${store.access_token}`;
```

## 3.扩展

### 对象展开运算符

```js
// 对象展开运算符;...person
//将对象的所有属性展开
let person = { name: "kuangshen", age: 12 };
let someone = { ...person };
console.log(someone);
//{ name: 'kuangshen', age: 12 }
```

## 函数

```js
function show(name, age = 17) {
  // age 在函数中有 默认值
  console.log(name, age);
}
show("张三");
//输出：张三 17

show("张三", 12);
//输出：张三 12
```

## 箭头函数

```js
// 传统函数定义方式
function funcName(param1, param2) {
  // 函数体
}

// 箭头函数定义方式
const funcName = (param1, param2) => {
  // 函数体
};
```

## 剩余参数

```js
const print = (num, num1, ...args) => {
  console.log(num);
  console.log(num1);
  console.log(args);
};
print(0, 1, 2, 3, 4);
// 0
// 1
// [ 2, 3, 4 ]
···························
// 和解构连用
let users = ['张三', '李四', '王五'];
let [u1, ...u2] = users;
console.log(u1);
console.log(u2);
// 张三
// [ '李四', '王五' ]
//合并数组
let u1 = ['张三', '李四', '王五'];
let u2 = ['张无忌', '赵敏', '周芷若'];
let u3 = [...u1,...u2];
console.log(u3);
// [ '张三', '李四', '王五', '张无忌', '赵敏', '周芷若' ]
```

## 可选链

```js
//  实例 返回数据
// res.data 有时候我们不一定知道数据放在那一层，可能就要对每一层都进行判断查找
let res = {
  data: {
    data: {
      success: true,
      id: "20220425",
    },
  },
};
if (res && res.data && res.data.data.success) {
  //复杂的判断
  let id = res.data.data.id;
  console.log(id);
}
//使用可选链
if (res?.data?.data?.success) {
  let id = res?.data?.data?.id;
  console.log(id);
  //找不到该字段 undefined
  //该字段无值 null
}
```

# set

```js
const set1 = new Set([1, 2, 3, 4, 5, 5]);
//和数组类似  但元素不能重复
console.log(set1);
//Set(5) { 1, 2, 3, 4, 5 }
set1.add(7);
// Set(6) { 1, 2, 3, 4, 5, 7 }
set1.delete(3);
//Set(5) { 1, 2, 4, 5, 7 }
set1.clear();
//清空
```

## filter

把符合条件的 users 对象 返回出来

```js
let users = [
  { name: "lp", age: 18 },
  { name: "zk", age: 20 },
];
let array = users.filter((item, index) => item.age > 19);
console.log(array);

//  filter 返回一个符合条件的数组
// { name: "lp", age: 18 },
```

## map

循环 users 的对象

```js
let users = [
  { name: "lp", age: 18 },
  { name: "zk", age: 20 },
];
let array1 = users.map((item, index) => {
  item.name += "666";
  item.age += 10;
  return item;
});
console.log(array1);
// [ { name: 'lp666', age: 28 }, { name: 'zk666', age: 30 } ]
```

# promise

Promise 对象代表一个异步操作，  
有三种状态：`pending`（进行中）、`fulfilled`（已成功）和 `rejected`（已失败）。

```js
var p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    reject(1);
  }, 1000);
})
  .then((res) => {
      setTimeout(() => {
        resolve(res + 1); //2
      }, 1000);
    });
  .catch((res) => {
    console.log(res);
    return res;   //1
  });

  // resolve => .then
  // rejected => .catch
```

## 链式调用 promise

```js
//链式调用promise
//提高代码的阅读性
var p1 = new Promise((resolve, reject) => {
  console.log("hhh");
  setTimeout(() => {
    // resolve(1);
    reject(1);
  }, 1000);
})
  .then((res) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(res + 1);
      }, 1000);
    });
    .then((res) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(res + 1);
          }, 1000);
        });
      })
      .catch((res) => {
        console.log(res);
        return res;
      });
  })
  .catch((res) => {
    console.log(res);
    return res;
  });
```

# promise 解决异步

# async （ 表示函数异步

```js
//async 加在 函数前面
//默认返回一个Promise对象resolve的值。因此对async函数可以直接then，返回值就是then方法传入的函数。
async function fun0() {
  console.log(1);
  return 1; //相当于 resolve(1)
}
fun0().then((val) => {
  console.log(val); // 1,1
});
```

# await

await 修饰的如果是 Promise 对象：可以获取 Promise 中返回的内容（resolve 或 reject 的参数），且取到值后语句才会往下执行；

```js
async function fun() {
  let a = await 1;
  let b = await new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("setTimeout");
    }, 3000);
  });
  let c = await (function () {
    return "function";
  })();
  console.log(a, b, c);
}
fun();
// 3秒后输出： 1 "setTimeout" "function"
//要等 b 执行完 才能 进行 输出 因为 await
```

```js
// 使用async/await获取成功的结果

// 定义一个异步函数，3秒后才能获取到值(类似操作数据库)
function getSomeThing() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("获取成功");
    }, 3000);
  });
}

async function test() {
  let a = await getSomeThing();
  console.log(a);
}
test(); // 3秒后输出：获取成功
```
