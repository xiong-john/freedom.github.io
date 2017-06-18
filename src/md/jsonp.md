# 尝试自己封装jsonp，在github page上使用

 * 五层 从前端到后端
view -》jsonp组件 -》 后端router -》 处理层 -》 数据库

  * jsonp 前端组件， 自己写用Es6写
  * 后端server使用express
  * 后端数据库使用mongod


## 第一步， 写jsonp组件
有几个关键的点：
* url参数拼接
* script元素构造
* callback函数名传参与存放删除
 
 ```
 let cbName = 'cb' + Math.ceil(Math.random() * 1000);
 _jsonp[cbName] = function (data) {
 	try{
 		success(data);
 	}catch(e){
 		// console.log(e)
 	}finally{
 		delete _jsonp[cbName];
 	}
 };
 ```
 * 存放：利用构造函数在设置一个全局变量`roots._jsonp = {}`。 在每次调用makeUrl时用random给_jsonp添加一个随机函数名，将回调函数放在该函数中。
 * 回收： finally中删除_jsonp的相关函数

## 第二步 router


使用方法