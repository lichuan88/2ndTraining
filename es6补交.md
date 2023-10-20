## 解构赋值 
+ 对象的解构    
 >  在等号右侧应该有一个已经存在的对象，我们想把它拆分到变量中。等号左侧包含了对象相应属性的一个类对象“模式（pattern）”。在最简单的情况下，等号左侧的就是 {...} 中的变量名列表
  ```js
  let node = {
    type:'iden'
    name:'fo'
  }
  let {type,name}=node  
  ```     
+ 嵌套解构     
>如果一个对象或数组嵌套了其他的对象和数组，我们可以在等号左侧使用更复杂的模式（pattern）来提取更深层的数据。
   ```js
 let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};


let {
  size: { // 把 size 赋值到这里
    width,
    height
  },
  items: [item1, item2], // 把 items 赋值到这里
  title = "Menu" // 在对象中不存在（使用默认值）
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut
  
  ```
+ 剩余模式
```js
let options = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = 名为 title 的属性
// rest = 存有剩余属性的对象
let {title, ...rest} = options;

// 现在 title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100
```
## fliter  
>filter()是一个数组方法，它创建一个新数组，其中包含通过指定函数的测试的所有元素。这个指定的函数被称为过滤器函数，它接受三个参数：当前元素，当前元素的索引和调用filter()的数组对象。
```js
const numbers = [1, 2, 3, 4, 5]; // 使用 filter() 方法筛选出大于2的数字
const filteredNumbers = numbers.filter(num => num > 2); 
console.log(filteredNumbers); // 输出 [3, 4, 5]
```
在filter()方法中，我们使用一个箭头函数作为过滤器函数，它将当前元素与数字2进行比较，如果当前元素大于2，则返回true，否则返回false。
最终，filteredNumbers数组包含了所有大于2的数字。

## map
>ES6中的map类型是一种储存着许多键值对的有序列表，其中的键名和对应的值支持所有数据类型。
+ 返回map的元素数
```js
map.size
```
+ 给map添加数据，返回添加后的map（给已存在的键赋值后会覆盖掉之前的值）
```js
map.set()
```
+ 获取某个key的值，返回key对应的值，没有则返回undefined
```js
map.get()
```
+ 检测是否存在某个key，返回布尔值
```js
map.has()
```
+ 删除某个key及其对应的value，返回布尔值，成功删除则为true
```js
map.delete()
```
+ 清除所有的值，返回undefined
```js
map.clear()
```

+ 获取map的所有key 
```js
map.keys()
```

+ 获取map的所有值
```js
map.values()
```

+ 获取map的所有成员
```js
map.entries()
```
## 可选链
>可选链是取值操作时所用的安全方法
可选链操作符使用 ?. 来表示，可以判断操作符之前属性是否有效，从而链式读取对象的属性或返回 undefined 。

作用与 . 操作符类似。不同的是 ?. 如果对象链上的引用是 null 或者 undefined 时， . 操作符会像前言中的例子抛出一个错误，而 ?. 操作符则会按照短路计算的方式进行处理，返回 undefined。可选链操作符也可用于函数调用，如果操作符前的函数不存在，也将会返回 undefined。
```js
var user = {
  name: 'Kira',
  address: {
    city: 'beijing',
    other: {}
  }
}
console.log(user?.name);	// Kira
a?.b);	// undefined
console.log(user?.address?.city);		// beijing
console.log(user?.address?.other?.a?.b);	// undefined
```
当尝试调用一个可能不存在的方法时也可以使用可选链。当函数调用时如果被调用的方法不存在，使用可选链可以使表达式自动返回 undefined 而不是抛出一个异常。
```js
var person = {}
var name = person.getName?.();
```
可选链也是可以使用在数组取值的前置验证的。
```js
var arr = []
let item = arr?.[5];
```
## Promise
> Promise是ES6异步编程的一种解决方案   
>>对象的状态不受外界影响  
三种处理状态 Pending (进行) Resolved (成功) Rejeed (失败)

```js
let pro = Promise(function(res,rej){
    //执行异步操作
    //模拟后端接口
    let res = {
        code:200,
        data:{
            name:'xioami'
        }
    }
    if(res.code === 200){
        resolved(res.data);
    }else{
        rejected(res.error);
    }
})
//接受两个回调函数
pro.then((val)=>{
  console.log(val)  //xioami
},(err)=>{
  console.log(err) //打印错误信息
})
```
then 是可以链式调用的，一旦 return 一个新的 promise 实例之后，后面的 then 就可以拿到前面 resolve 出来的数据。这种扁平化的写法，更方便维护；并且可以更好的管理请求成功和失败的状态。
```js
// 封装 ajax 请求：传入回调函数 success 和 fail
function ajax(url, success, fail) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            success && success(xmlhttp.responseText);
        } else {
            fail && fail(new Error('接口请求失败'));
        }
    };
}

new Promise((resolve, reject) => {
    ajax('a.json', (res) => {
        console.log(res);
        resolve();
    });
})
    .then((res) => {
        console.log('a成功');
        return new Promise((resolve, reject) => {
            ajax('b.json', (res) => {
                console.log(res);
                resolve();
            });
        });
    })
    .then((res) => {
        console.log('b成功');
        return new Promise((resolve, reject) => {
            ajax('c.json', (res) => {
                console.log(res);
                resolve();
            });
        });
    })
    .then((res) => {
        cnosole.log('c成功');
    });
```
+ async
> 1. async 作为一个关键字放在函数前面，用来表示该函数是异步的。它背后的原理就是promise。
>2. async 函数返回的是一个promise对象，如果要获取到promise的 返回值，我们需要用.then() 方法。

+ await
> 1. await在某些情况下可以阻塞后面的代码， 可以方便的获取promise的返回值，避免深层的嵌套。
> 2. await只能在async方面的里面使用，让后面的执行语句或方法要等待当前await方法的结果后才能再执行  



