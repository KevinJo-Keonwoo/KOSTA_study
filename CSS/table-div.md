# table → div

### table을 div로 바꾸기

- 바꾸기 전 코드 html

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>productlist.html</title>
<link rel="stylesheet" href="../css/productlist.css" />
</head>
<body>
<div class="productlist">
	<table>
		<tr>
			<td>
				<ul>
					<li><img src="../images/C0001.jpg" alt="아메리카노" /></li>
					<li>아메리카노</li>
				</ul>
			</td>
			<td>
				<ul>
					<li><img src="../images/C0002.jpg" alt="아이스아메리카노" /></li>
					<li>아이스아메리카노</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>
				<ul>
					<li><img src="../images/C0003.jpg" alt="라테" /></li>
					<li>라테</li>
				</ul>
			</td>
			<td>
				<ul>
					<li><img src="../images/C0004.jpg" alt="아이스라테" /></li>
					<li>아이스라테</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>
				<ul>
					<li><img src="../images/G0001.jpg" alt="보온병" /></li>
					<li>보온병</li>
				</ul>
			</td>
			<td>
				<ul>
					<li><img src="../images/G0002.jpg" alt="파우치" /></li>
					<li>파우치</li>
				</ul>
			</td>
		</tr>
	</table>
</div>

</body>
</html>

```

- css

```html
@charset "UTF-8";
*{
	box-sizing:border-box;
}
div.productlist>table{
	width:300px;
}
div.productlist>table, div.productlist>table td{
	border:1px solid;
/* 	border-collapse: collapse; */
}
div.productlist>table td{
	width:100px; 
}
div.productlist>table td>ul img{
	width:80%; /* td 태그의 30% */
	margin: 0 10px;
}

div.productlist>table tr>td>ul{
	list-style-type: none;
	padding-left:0px;
}
```

- div로 바꾸고 난 후 html

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>productlist.html</title>
<link rel="stylesheet" href="../css/productlist.css" />
</head>
<body>
<div class="productlist">
	<div class="table">
		<div class="tr">
			<div class="td">
				<ul>
					<li><img src="../images/C0001.jpg" alt="아메리카노" /></li>
					<li>아메리카노</li>
				</ul>
			</div>
			<div class="td">
				<ul>
					<li><img src="../images/C0002.jpg" alt="아이스아메리카노" /></li>
					<li>아이스아메리카노</li>
				</ul>
			</div>
		</div>
		<div class="tr">
			<div class="td">
				<ul>
					<li><img src="../images/C0003.jpg" alt="라테" /></li>
					<li>라테</li>
				</ul>
			</div>
			<div class="td">
				<ul>
					<li><img src="../images/C0004.jpg" alt="아이스라테" /></li>
					<li>아이스라테</li>
				</ul>
			</div>
		</div>
		<div class="tr">
			<div class="td">
				<ul>
					<li><img src="../images/G0001.jpg" alt="보온병" /></li>
					<li>보온병</li>
				</ul>
			</div>
			<div class="td">
				<ul>
					<li><img src="../images/G0002.jpg" alt="파우치" /></li>
					<li>파우치</li>
				</ul>
			</div>
		</div>
	</div>
</div>

</body>
</html>
```

- display : table → 테이블 형식으로 보이게 함
- table-row → 행, table-cell → 셀

```css
div.productlist>div.table{
	width: 300px;
	display: table;
}
div.productlist>div.table>div.tr{
	display: table-row;
}
div.productlist>div.table>div.tr>div.td{
	display: table-cell;
}
```

- table-row, table-cell가 없는 상태에서 table을 사용하려고 하면 별 효과가 없다. 
세 요소가 모두 있어야 원하는 결과 도출됨

```css
@charset "UTF-8";
*{
	box-sizing:border-box;
}
div.productlist>div.table{
	width: 300px;
	border: 1px solid;
	/* display: table; */
}
/* div.productlist>div.table>div.tr{
	display: table-row;
} */
div.productlist>div.table div.td{
	display: table-cell;
}
div.productlist>div.table div.td>ul{
	list-style-type: none;
	margin-left:0px;
	
}
```

- table은 body의 80%를 차지함
- td요소가 table의 자식이 되어 table 범위의 50%를 차지함

```css
div.productlist>div.table{
	width: 80%;
	border: 1px solid;
	/* display: table; */
}
/* div.productlist>div.table>div.tr{
	display: table-row;
} */
div.productlist>div.table div.td{
	width: 50%;
	/* display: table-cell; */
}
```