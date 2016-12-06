# 如何解决回调函数的绑定

问题描述：
 在setTimeout/ajax等异步执行的如果获取到调用者this（执行上下文);

* 例一
 ```
 	function A(){
 		this.b = function(){
 			function c(){
 				//调用A的实例
 			};
 			c();
 		}
 	}

 	let a = new A();
 	a.b();
 ```

* 例二
 ```


 	function C(){
 		this.b = function(){
 	 		setTimeout(function(){
 	 			//调用C的实例
 	 		});
 	 	}
 	} 

 	let c = new C();
 	c.b();
 ```

## 分析
	这是一个有关执行上下文的问题。
* 在函数内部，this的值取决于函数是如何调用的。
* 对象方法中的 this
	当以对象里的方法的方式调用函数时，它们的 this 是调用该函数的对象.
* 原型链中的 this
	`
	相同的概念在定义在原型链中的方法也是一致的。如果该方法存在于一个对象的原型链上，那么this指向的是调用这个方法的对象，表现得好像是这个方法就存在于这个对象上一样。
	`
* 构造函数中的 this
	`
	当一个函数被作为一个构造函数来使用（使用new关键字），它的this与即将被创建的新对象绑定。
	`
* call 和 apply方法
	`
	当一个函数的函数体中使用了this关键字时，通过所有函数都从Function对象的原型中继承的call()方法和apply()方法调用时，它的值可以绑定到一个指定的对象上。
	`
* bind 方法(ECMAScript 5)
	`
	会`创建`一个与f具有相同函数体和作用域的函数，但是在这个新函数中，this将永久地被绑定到了bind的第一个参数，无论这个函数是如何被调用的。
	`
* 没有通过绑定的function的执行上下文都是window。



## 方法一： let that = this;
	这个方法绕过了执行上下文，利用了闭包的性质。去作用域链上找that执行函数。
## 方法二： bind
	将函数绑定在需要的对象上，无论如何被调用都
## 方法三： ES6

* 参考
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this
