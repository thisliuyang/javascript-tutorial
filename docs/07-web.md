## 数组的几个不 low 操作

### 扁平化n维数组

**终极篇**

```javascript
    [1,[2,3]].flat(2) //[1,2,3]    [1,[2,3,[4,5]].flat(3) //[1,2,3,4,5]    [1[2,3,[4,5[...]].flat(Infinity) //[1,2,3,4...n]
```

`Array.flat(n)`是ES10扁平数组的api， `n`表示维度， `n`值为 `Infinity`时维度为无限大。

**开始篇**

```javascript
    function flatten(arr) {        while(arr.some(item=>Array.isArray(item))) {            arr = [].concat(...arr);        }        return arr;    }    flatten([1,[2,3]]) //[1,2,3]    flatten([1,[2,3,[4,5]]) //[1,2,3,4,5]
```

实质是利用递归和数组合并方法 `concat`实现扁平。

### 去重

**终极篇**

```javascript
    Array.from(new Set([1,2,3,3,4,4])) //[1,2,3,4]    [...new Set([1,2,3,3,4,4])] //[1,2,3,4]
```

`set`是ES6新出来的一种一种定义不重复数组的数据类型。

`Array.from`是将类数组转化为数组。

`...`是扩展运算符，将set里面的值转化为字符串。

**开始篇**

```javascript
    Array.prototype.distinct = function(){     var arr = this,      result = [],      i,      j,      len = arr.length;     for(i = 0; i < len; i++){      for(j = i + 1; j < len; j++){       if(arr[i] === arr[j]){        j = ++i;       }      }      result.push(arr[i]);     }     return result;    }    [1,2,3,3,4,4].distinct(); //[1,2,3,4]
```

取新数组存值，循环两个数组值相比较。

### 排序

**1.终极篇**

```javascript
    [1,2,3,4].sort(); // [1, 2,3,4],默认是升序    [1,2,3,4].sort((a, b) => b - a); // [4,3,2,1] 降序
```

`sort`是js内置的排序方法,参数为一个函数

**2.开始篇**

冒泡排序：

```javascript
    Array.prototype.bubleSort=function () {        let arr=this,            len = arr.length;        for (let outer = len; outer >= 2; outer--) {          for (let inner = 0; inner <= outer - 1; inner++) {            if (arr[inner] > arr[inner + 1]) {              //升序              [arr[inner], arr[inner + 1]] = [arr[inner + 1], arr[inner]];              console.log([arr[inner], arr[inner + 1]]);            }          }        }        return arr;      }    [1,2,3,4].bubleSort() //[1,2,3,4]    
```

选择排序：

```javascript
    Array.prototype.selectSort=function () {            let arr=this,                len = arr.length;            for (let i = 0, len = this.arr.length; i < len; i++) {        for (let j = i, len = this.arr.length; j < len; j++) {          if (this.arr[i] > this.arr[j]) {            [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];          }        }      }            return arr;          }        [1,2,3,4].selectSort() //[1,2,3,4] 
```

### 最大值

**1.终极篇**

```javascript
    Math.max(...[1,2,3,4]) //4    Math.max.apply(this,[1,2,3,4]) //4    [1,2,3,4].reduce( (prev, cur,curIndex,arr)=> {     return Math.max(prev,cur);    },0) //4
```

`Math.max()`是 `Math`对象内置的方法，参数是字符串。

`reduce`是ES5的数组api，参数有函数和默认初始值。

函数有四个参数：

- `pre`：上一次的返回值
- `cur`：当前值
- `curIndex`：当前值索引
- `arr`：当前数组

**2.开始篇**

先排序再取值。

### 求和

**1.终极篇**

```javascript
    [1,2,3,4].arr.reduce(function (prev, cur) {       return prev + cur;     },0) //10 
```

**2.开始篇**

```javascript
    function sum(arr) {      var len = arr.length;      if(len == 0){        return 0;      } else if (len == 1){        return arr[0];      } else {        return arr[0] + sum(arr.slice(1));      }    }    sum([1,2,3,4]) //10
```

利用 `slice`截取改变数组，再利用递归求和。

### 合并

**1.终极篇**

```javascript
    [1,2,3,4].concat([5,6]) //[1,2,3,4,5,6]    [...[1,2,3,4],...[4,5]] //[1,2,3,4,5,6]    [1,2,3,4].push.apply([1,2,3,4],[5,6]) //[1,2,3,4,5,6]
```

**2.开始篇**

```javascript
    [5,6].map(item=>{        [1,2,3,4].push(item)    }) //[1,2,3,4,5,6]
```

### 判断是否包含值

**1.终极篇**

```javascript
    [1,2,3].includes(4) //false    [1,2,3].indexOf(4) //-1 如果存在换回索引    [1, 2, 3].find((item)=>item===3)) //3 如果数组中无值返回undefined    [1, 2, 3].findIndex((item)=>item===3)) //2 如果数组中无值返回-1
```

`includes()`、 `find()`、 `findIndex()`是ES6的api。

**2.开始篇**

```javascript
    [1,2,3].some(item=>{      return item===3    }) //true 如果不包含返回false
```

### 类数组转化

**1.终极篇**

```javascript
    Array.prototype.slice.call(arguments) //arguments是类数组(伪数组)    Array.prototype.slice.apply(arguments)    Array.from(arguments)    [...arguments]
```

类数组：表示有 `length`属性，但是不具备数组的方法。

`call`、 `apply`：改变 `slice`里面的 `this`指向 `arguments`，所以 `arguments`也可调用数组的方法。

`Array.from`：将类似数组或可迭代对象创建为数组。

`...`：将类数组扩展为字符串，再定义为数组。

**2.开始篇**

```javascript
    Array.prototype.slice = function(start,end){            var result = new Array();            start = start || 0;            end = end || this.length; //this指向调用的对象，当用了call后，能够改变this的指向，也就是指向传进来的对象，这是关键            for(var i = start; i < end; i++){                 result.push(this[i]);            }            return result;       } 
```

### 每一项设置值

**1.终极篇**

```javascript
    [1,2,3].fill(false) //[false,false,false] 
```

`fill`是ES6的方法。**2.开始篇**

```javascript
    [1,2,3].map(() => 0)
```

### 每一项是否满足

```javascript
    [1,2,3].every(item=>{return item>2}) //false
```

`every`是ES5的api,，每一项满足返回 `true`。

### 有一项满足

```javascript
    [1,2,3].some(item=>{return item>2}) //true
```

`some`是ES5的api，有一项满足返回 `true`。

### 过滤数组

```javascript
    [1,2,3].filter(item=>{return item>2}) //[3]
```

`filter`是ES5的api，返回满足添加的项的数组。

### 对象和数组转化

```javascript
    Object.keys({name:'张三',age:14}) //['name','age']    Object.values({name:'张三',age:14}) //['张三',14]    Object.entries({name:'张三',age:14}) //[[name,'张三'],[age,14]]    Object.fromEntries([name,'张三'],[age,14]) //ES10的api,Chrome不支持 , firebox输出{name:'张三',age:14}
```