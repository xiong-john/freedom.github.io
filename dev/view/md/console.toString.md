# 各种类型的判断方法

* 对象
```
Object.prototype.toString.call({})
//"[object Object]"
```

* undefined
```
Object.prototype.toString.call(undefined)
//"[object Undefined]"
```

* null
```
Object.prototype.toString.call(null)
//"[object Null]"
```

* Symbol
```
Object.prototype.toString.call(Symbol())
//"[object Symbol]"
```

* 布尔值
```
Object.prototype.toString.call(true)
//"[object Boolean]"
```

* 正则
```
Object.prototype.toString.call(/d/)
//"[object RegExp]"
```

* 数值
```
Object.prototype.toString.call(1)
//"[object Number]"
```

* 字符串
```
Object.prototype.toString.call('')
//"[object String]"
```

* 数组
```
Object.prototype.toString.call([])
//"[object Array]"
```

### 封装成函数
```
var isArray = Function.isArray || function(o) {
	return typeof o === 'object' && 
	Object.prototype.toString.call(o);
}
```