# web前端安全问题

## xss攻击（cross-site-scripting）跨页面脚本攻击
`an attacker is able to trick a server into sending code that it didn’t mean to. That is ,instead of only delivering the JavaScript that actually makes up your application. Your server is tricked into also delivering some sort of malicious code, code that does harm to a user or exfiltrates their data without them even knowing about it which is actually even worse`

## 为什么xss成为问题
xss已经成为前端最流行的攻击方法。即使是谷歌也会在一段时间或者某些页面有xss漏洞。为什么xss这么危险，攻击者能利用xss做哪些事情呢？

要理解为什么它如此重要，就要从理解“origin（同源策略）”的概念开始。
### 同源策略（Same-origin policy： An origin is a pairing of `a scheme`, `a host`, and `a port`. ）
只有在同源下，可以操作cookie，localstorage等等。但是浏览器特别偏爱javascript，只要一有机会，就运行js代码。而且可以不遵守同源策略。这就为攻击者留下了后门。所以要做的就是，坚决杜绝这样的漏洞。

## 后端输出

### 攻击类型一：
如果是使用php，则不可避免的使用output。如果仅仅是直接输出“hello {$name}”。如果用户写入的是'<script type="text/javascript">beEvil()</script>'，这样就会受到攻击。这就是大多数的xss攻击发生的方式。

* 例子：
 如果qq空间的名字是按上述方式实现渲染的。则我将自己的名字改为一段js攻击代码（获取cookie什么的），则别人在登录状态访问我的空间的时候就会自动执行我的脚本。此时就能获取到其他人的信息。

* 解决办法
 * 输出内容进行转义，比如`</script>`转义后输出实体。

### 攻击类型二：
 	jQuery的append方法。

### 攻击类型三
 	img的onerror方法。

## CSRF攻击

### PS
```
* 开发时要提防用户产生的内容，要对用户输入的信息进行层层检测
* 要注意对用户的输出内容进行过滤(进行转义等)
* 重要的内容记得要加密传输(无论是利用https也好，自己加密也好)
* get请求与post请求，要严格遵守规范，不要混用，不要将一些危险的提交使用jsonp完成。
* 对于URL上携带的信息，要谨慎使用。
* 心中时刻记着，自己的网站哪里可能有危险。
```



## 参考： 
http://www.jianshu.com/p/29c27907699e
https://segmentfault.com/a/1190000006672214
https://www.frontendhandbook.com/
https://mikewest.org/2013/09/frontend-security-frontendconf-2013
