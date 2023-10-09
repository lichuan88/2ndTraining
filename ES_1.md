### 变量的解构赋值
#### 数组的解构赋值
1. 这种赋值方式是将123分别赋值给abc三个变量
```
const [a,b,c] = [1,2,3]
console.log(a,b,c);  //输出： 1 2 3 
```
2. 这种赋值方式是将12分别赋值给ab两个变量
```
const [a,b,c] = [1,2]
console.log(a,b,c);  //输出： 1 2 undefined
```
#### 对象的解构赋值
对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
1. 这种赋值方式将name，id分别赋值为变量name，id
```
const {name , id} = {name:"张三" , id: 12}
console.log(name,id);  //输出： 张三 12
```
2. 这种赋值方式是错误的，因为变量名与属性不同名
```
const { baz } = { foo: 'aaa', bar: 'bbb' };
console.log(baz);  //输出： undefined
```
3. 对象的扩展运算符：这种赋值方式将多余变量赋值给z，此时z是一个对象
```
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x);  //输出：1
console.log(y);  //输出：2
console.log(z);  //输出：{ a: 3, b: 4 }
```

#### 综合数组，对象解构赋值有以下案例：
```
const character={characters:'扣搜',gender:'男'}
const ability={id:1001,name:'张三',position:'经理'}
const person={...character,...ability}
const {characters,gender,id,name,position}=person;
const people = `工号为${id}，性别为${gender}的人是张三，他的职位是${position}，他是个特别${characters}的人`
console.log(people);  
//输出：工号为1001，性别为男的人是张三，他的职位是经理，他是个特别扣搜的人
```
首先定义了一个名为 character 的对象，包含了 characters 和 gender 两个属性并赋值。还定义了一个名为 ability 的对象，包含了 id、name 和 position 三个属性并赋值。然后使用扩展运算符 ... 将 character 和 ability 对象的属性合并到一个新的对象 person 中使用解构赋值语法将 person 对象的属性解构出来，并赋值给对应的变量 characters、gender、id、name 和 position。最后将结果赋值给字符串 people 。这里的```${id}、${gender}```等是代表变量id、gender
### 函数
#### filter函数
filter 过滤，筛选，顾名思义就是筛选出符合条件的对象组成新的对象数组,这里的筛选条件是item.age>19，故李四不符合条件
```
let user = [{name:'张三',age:21},{name:'李四',age:12}];
let array = user.filter((item,index)=>item.age>19)
console.log(array);  //输出：[ { name: '张三', age: 21 } ]
```
#### map函数
1. 使用map函数对数组对象进行遍历，改变对象属性值
```
let user = [{name:'张三',age:21},{name:'李四',age:12}];
let array = user.map((item,index)=>
item.name+=111,
);
console.log(array);  //输出:[ '张三111', '李四111' ]
```
这种遍历写法只能修改一个属性的值，且输出的也是修改的一个属性值，以下写法可以修改多个属性值
```
let user = [{name:'张三',age:21},{name:'李四',age:12}];
let array = user.map((item, index) => {
   item.name += 111;
   item.age += 10;
   return item;
 });
 console.log(array);  
 //输出：[ { name: '张三111', age: 31 }, { name: '李四111', age: 22 } ]
 ```