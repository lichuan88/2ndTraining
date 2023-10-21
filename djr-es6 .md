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



### 可选链

> 特点：
>
> 通过 `?.` 操作符来访问可能不存在的属性或方法，避免在访问这些不存在的属性或方法时导致程序崩溃
>
> 可选链可以更加轻松地处理对象、函数或数组中存在潜在缺失的属性和方法，减少冗长的条件判断代码，并提高了代码的可读性和可维护性。
>
> 演示：
>
> ``` js
> const obj={
>     prop1:{
>         prop2:{
>             method:()=>{
>                 console.log('Hello')
>             }
>         }
>     }
> }
> // 使用可选链调用方法
> obj?.prop1?.prop2?.method?.(); // 输出：Hello ; 
> console.log(obj?.prop1?.prop3); // 输出：undefined
> //tip:访问不存在的属性或者方法时，不会抛出错误，而是返回undefined
> ```
>
> 



### Promise

> Promise对象用来管理异步操作的代码，可以获取异步操作成功或者失败的结果
>
> ``` js
> //promise对象的回调函数里面执行异步代码，成功调用resolve方法，失败调用reject方法，分别触发then和catch里面的回调函数
> const p=new Promise((resolve,reject)=>{
>   setTimeout(()=>{
>       resolve('模拟成功请求')
>       //reject('模拟失败请求')
>   }，2000)
> })
> 
> p.then(result=>{
>     console.log(result) //输出：模拟成功请求
> }).catch(error=>{
>     console.log(error) //输出：模拟失败请求
> })
> ```
>
> 
>
> Primise对象的三种状态：
>
> + 刚开始创建Promise对象 （pending-待定）
> + 异步操作成功调用resolve（fulfilled-已兑现）
> + 异步操作失败调用reject（rejected-已拒绝）
>
> 
>
> 为了解决Promise回调函数地狱的问题，有两种方法
>
> > 1. 链式调用：通过promise对象的resolve可以return出一个新的Promise对象来解决回调函数的嵌套
> >
> > ``` js
> > axios.({url:'xxxxx'}).then(result=>{
> >     pname=result.data.list[0]
> >     某个元素.innerHTML=pname
> >     return axios({url:'sssss',params:{pname}})
> > }).then(result=>{
> >     const cname=result.data.list[0]
> >     某个元素.innerHTML=cname
> > })
> > ```
> >
> > 
> >
> > 2. async和await :在async函数内，使用await关键字，获取Promise对象"成功状态“结果值, await必须用在async修饰的函数内，await会阻止"异步函数内”代码继续执行，原地等待结果（简单理解就是async表示异步，但是await会等待此行代码，返回成功之后继续向下执行代码）
> >
> > ``` js
> > const getArtChannalList = async () => {
> >   loading.value = true
> >   const res = await artGetChannelService()
> >   channelList.value = res.data.data
> >   loading.value = false
> > }
> > ```
> >
> > 
