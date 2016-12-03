# 浏览器渲染顺序

## 渲染顺序图
![图片](http://coolshell.cn//wp-content/uploads/2013/05/Render-Process.jpg)
![](./../../source/imgs/stacking-order.jpg)

## 说明

### 浏览器解析
* html/xml…… --dom树
* css -- css规则树
* js -- 修改dom和css

### 解析完之后
* 浏览器根据 dom tree和css rule tree来构造render tree.
* render tree和dom tree不太一样， 不用显示的dom元素不在此tree中， 比如head /display: hidden;的
* Frame过程，css rule tree匹配render tree（绑定在一起， 一个dom可能被匹配了多个rule）
* 计算Frame的的位置， 又称layout/reflow

### 调用系统底层进行渲染 Native GUI的API

### 渲染过程

* repaint 局部改变（）
* Reflow 被改变了布局，整个render tree要重新计算。成本高.

```
当你增加、删除、修改DOM结点时，会导致Reflow或Repaint
当你移动DOM的位置，或是搞个动画的时候。
当你修改CSS样式的时候。
当你Resize窗口的时候（移动端没有这个问题），或是滚动的时候。
当你修改网页的默认字体

注： display:none会触发reflow，而visibility:hidden只会触发repaint，因为没有发现位置变化。
```
* 减少reflow/repaint
```
1. 不要一条一条地修改DOM的样式。与其这样，还不如预先定义好css的class，然后修改DOM的className。;
2. 把DOM离线后修改(先hidden， 修改完之后再显示，这样只触发了两次reflow);
3. 或者 clone一个DOM结点到内存里，然后想怎么改就怎么改，改完后，和在线的那个的交换一下;
4. 不要把DOM结点的属性值放在一个循环里当成循环里的变量;
5. 尽可能的修改层级比较低的DOM;
6. 为动画的HTML元件使用fixed或absoult的position;
7. 千万不要使用table布局;
```