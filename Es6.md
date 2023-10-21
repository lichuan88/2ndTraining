### Es6语法总结

---

#### 解构

```js
const [a, b, c] = [1, 2, 3];
console.log(a, b, c); //1 2 3

const [a, b] = [1, 2, 3];
console.log(a, b);  //1 2

const { name, id } = { name: "张三", id: 12 }
console.log(name, id); // 张三 12
```

#### 模板字符串

```js
const age = 18
const { name, id } = { name: "张三", id: 12 }
const introduction = `我是${name}的弟弟,今年${age}岁，编号是${id}`

console.log(introduction);//我是张三的弟弟,今年18岁，编号是12
```

#### 展开运算符

```js
const character={characters:"阳光",gender:'男'}
const ability= {id:1001,name:"张三",position:"经理"}
const person= {...character,...ability}
let someone = { ...person }
console.log(person);
//{ characters: '阳光', gender: '男', id: 1001, name: '张三', position: '经理' }

const someone = 'gender'
const words = [...someone]
console.log(words);
//[ 'g', 'e', 'n', 'd', 'e', 'r' ]

```

#### 剩余操作符

```js
const [a, b, ...c] = [1, 2, 3, 4, 5];
//剩余的数组成新的数组c[3, 4, 5]
console.log(a); // 1
console.log(b); // 2
console.log(c); // [3, 4, 5]
```

#### 函数

```js
function fn(name,age=18){
    console.log(name+','+age);
    
}
fn("米斯");// 米斯,18
fn("米斯"，20);//米斯,20
fn("米斯"，"")//米斯,
```

#### 箭头函数

###### 箭头函数提供了一种更加简洁的函数书写方式。

~~~js
//基本语法是： 参数 => 函数体
const home = (f,m,i) =>{
   return f+m+i;
}
home(1,2,3)//6
~~~

#### 数组过滤

~~~js
let users = [{name:'礼炮',age:18},{name:'张狂',age:20}];
let array = users.filter((item,index)=>
    item.age>19
)
console.log(array);//{name:'张狂',age:20}
~~~

#### 包含判断

###### 判断一个数组中是否包含某个元素

~~~js
let ss =  array.includes();
console.log(ss);//flase
~~~

#### map

###### 遍历和处理数组里面的对象

```js
let arr=[1,2,3]
let arr2 = arr.map((a)=>{
    return a*a
});
console.log(arr2);//[1,4,9]
```

#### Promise

```js
function getApiData() {
    // Promise异步编程的一种解决方案
    // 第一个参数是 Promise 执行成功时的回调，第二个参数是 Promise 执行失败时的回调
    return new Promise((resolve, reject) => {
          resolve({name: 'mise', age: 18})
          reject(err);
        
    })
}

let user = {}

async function getUser() {
    // 执行 
   await getApiData().then(res => {
        user = res
    })
    // await后的该代码块在此会阻塞,直到 getApiData 执行后 then 完成工作后才能继续往下执行    
    console.log('获取数据完成: ', user)
}

getUser()  // 异步执行的方法

console.log('开始获取数据:')  // 此处无阻塞(同步代码)
//开始获取数据:
//获取数据完成: {name: 'mise', age: 18}
```

