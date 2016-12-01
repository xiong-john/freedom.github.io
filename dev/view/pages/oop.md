# js面向对象学习

## 面向对象基础知识

* 特点：抽象类，实例对象。
 * 封装
  隐藏某一方法的具体运行步骤，取而代之的是通过消息传递机制发送消息给它。通过限制只有特定类的对象可以访问这一特定类的成员，而它们通常利用接口实现消息的传入传出。（公有成员，私有，保护）。防止对象受到外界干扰，防止其他对象依赖可能变化的细节，信息隐藏有助于对象和模块直接的松散耦合。最佳实践：对象之间只通过方法访问。

 * 继承
  在某种情况下，子类比原本的类要更加具体化。 当一个类从多个父类继承时，成为“多重继承”。继承含有是一个或者是一种的关系。

 * 多态
  由继承产生的相关的不同的类，其对象对同一消息会做出不同反应。（运算符重载）

 * 抽象性
  简化复杂现实问题的途径。为具体问题找到最恰当的类定义，并可以在最恰当的继承级别解释问题。

 * 类
  有`公共属性`和`行为`的一组对象可以抽象成类，对象通常根据你所感兴趣的属性而分类。

 * 对象
  有唯一标示，可以分成许多种类（即类），可以继承或聚合。行为、职责明确，接口与实现分离，隐藏内部结构，有不同的状态。可以提供服务，可以给其他对象发送消息，从其他对象接受消息， 并作出相应响应，可以把职责委托给其他对象。


## JS实现各种面向对象特性的方式

### 一、封装
  JS根据作用域链，可以使用闭包将私有成员隐藏。构造函数是本身。

```
  function A(c){
    var a = 1;
    var b = 2;
    this.c = c || 2;
    this.getB = function(){
      return b;
    };
    this.setB = function(val){
      b = val;
      return this;
    }
  }

  var a = new A();
  a.c; //4;
  a.b; //undefined;
  a.getB(); //2
```

### 二、继承

* 最简单的实现方法

  派生类继承基类的属性和行为。利用prototype（原型链， 所有实例共享一个原型对象，修改原型对象则继承对象都改变）可以实现继承，也可以自己用遍历拷贝的方式来实现。

```
  function A(){
    this.a = 1;
    this.b = 2;
  }

  function B(){
    this.c = 3;
    this.d = 5;
  }

  A.prototype = new B();

  var a = new A();
  a.a; //1;
  a.c; //3;
```

这样继承是可枚举的变量：
```
  for(var i in a) {
    console.log(i);
  }
  //a, b, c, d;
```

 * 被继承的属性需要非常注意，因为如果属性是引用类型的话，在子类实例修改被继承的该属性后，会导致所有子类实例都改变：
 ```
 function A(){
   this.a = 1;
   this.b = 2;
 }

 function B(){
   this.c = 3;
   this.d = 5;
   this.f = {}; //引用类型
 }
 var b = new B();
 A.prototype = new B();

 var a = new A();
 var a1 = new A();
 a.f.c = 1;
  
 a.f;// {c:1}
 a1.f; //{c:1}

 ```

注意： 按原型链，下一层的原型对象会覆盖上一层的原型对象的属性和方法。

* 高级一点的实现方法
  简单的实现方法的缺点： 
  * 一、没有传统的super方法(this指当前对象， super指父类)
  * 二、在prototype继承的时候new 出来的原型对象会产生多余的constructor， 并将其赋予被继承的类； （所以 a.constructor == B; //true, a.constructor == A; //false）

   * Object.prototype.constructor 
    所有对象都会从它的原型上继承一个 constructor 属性：

    ```
    function Person(name){
        if (!(this instanceof Person))
            return new Person(name)
        this.name = name
    } 
    ``` 
    --- 防止被直接当函数使用而创建全局变量



### 三、多态


http://tobyho.com/2010/11/22/javascript-constructors-and/

http://purplebamboo.github.io/2014/07/13/javascript-oo-class/
