# 如何解决回调函数的绑定

问题描述：
 在setTimeout/ajax等异步执行的如果获取到调用者this（执行上下文);

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
	这是一个有关执行上下文的问题

## 方法一： let that = this;
## 方法二： bind
## 方法三： ES6

