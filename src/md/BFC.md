<html>
<head>
	<style>
		body{
			margin: 50px auto;
			width:80%;
		}
		pre{
			border: solid thin #bebebe;
			border-radius: 5px;
			background: #ebebeb;
		}
		.example{
			margin: 5px 0;
			border-top:solid 1px #ebebeb;
		}
	</style>
</head>
<body>

<h1>
	这篇文章研究一下 BFC（block formatting context）	
</h1>
 
<h2>html源码</h2>




<h2>BFC概念</h2>

<h3>区块格式化上下文：</h3>
<p>
	当涉及到可视化布局的时候，Block Formatting Context提供了一个环境，HTML元素在这个环境中按照一定规则进行布局。一个环境中的元素不会影响到其它环境中的布局。比如浮动元素会形成BFC，浮动元素内部子元素的主要受该浮动元素影响，两个浮动元素之间是互不影响的。这里有点类似一个BFC就是一个独立的行政单位的意思。一个大的行政单位可以包含若干个小的行政单位。
</p>

<h3>如何形成BFC</h3>
<p>
	<ol>
		<li>float的值不为none</li>
		<li>overflow的值不为visible。</li>
		<li>display的值为table-cell, table-caption, inline-block中的任何一个。</li>
		<li>position的值不为relative和static。</li>
	</ol>
</p>


<div class="example">
<h3>example2</h3>
<pre>
【style】

#parent{
	width: 100%;
	height: 50px;
}
.child{
	border: solid thin black;
	height: 50px;
}
#child1{
	position: absolute;
	width: 100px;
}
#child2{
	width: 90%;
	margin-left: 100px;
}

【html】

div.parent#parent
	div.child#child1
	div.child#child2
</pre>


	
	<div id="parent" class="test1 parent">
		<style>
			#parent{
				width: 100%;
				height: 50px;
			}
			.child{
				border: solid thin black;
				height: 50px;
			}
			#child1{
				position: absolute;
				width: 100px;
			}
			#child2{
				width: 90%;
				margin-left: 100px;
			}
		</style>
		<div class="child" id="child1">
		</div>
		<div class="child" id="child2"></div>
	</div>
</div>

<p>
	<h3>解释：</h3> 
	<div>面试遇到了一个题目：左边的div宽度为100px， 右边的紧靠着它，宽度需要随浏览器自适应。</div>
	<div>将左边的设置为BFC模式，让它不影响其他布局</div>
	
	
	

</p>

<div>有一个现象，当一个元素形成BFC，它将脱离正常的文档流，所以父容器如果是正常文档流的话，高度会坍塌。</div>
<div class="example">
<h3>example2</h3>
<pre>
	【style】
	#parent1{
		border: solid thin;
		width: 100px;
	}
	#child3{
		border: solid red;
		width: 100px;
		height: 50px;
		position: absolute;
	}

	【html】
	div#parent1>div#child3
</pre>

	<style>
		#parent1{
			border: solid thin;
			width: 100px;
		}
		#child3{
			border: solid red;
			width: 100px;
			height: 50px;
			position: absolute;
		}
	</style>
	<div id="parent1">
		<div id="child3">
			
		</div>
	</div>
</div>

</body>
</html>