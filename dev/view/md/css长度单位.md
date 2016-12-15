# css 长度单位
	所有长度单位都可以表示为正数或者负数。

## 绝对长度单位

少用。

## 相对长度单位

em， ex， px
前两个单位代表`em-height`和`x-height`，px代表像素。

* em和ex
	* 1em定义为一种给定字体的font-size的值。 如果一个元素的font-size为14像素，那么对于该元素1em就等于14像素。

```
h1 {font-size: 24px;}
h2 {font-size: 18px;}
p {font-size: 12px;}
h1, h2, p {margin-left: 1em;}
small {font-size: 0.8em;}
<h1>Left margin =<small>24 pixels</small></h1>
<h2>Left margin =<small>18 pixels</small></h2>
<p>Left margin =<small>12 pixels</small></p>
```
	* ex是指 所用字体中小写x的高度。不同的字体x的高度可能不同。（少用）

* px 
	潜在缺点： 如果按像素设置字体大小，那么IE7之前的用户将无法使用其浏览器中的“文本大小”菜单调整文本的大小。如果文本太小，用户无法很好地阅读。

	另一方面，很适合来度量图像大小。

取舍：最好的度量可能是相对度量，特别是em。





