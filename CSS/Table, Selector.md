# Table, Selector

### Table

### ✔table 테두리 한줄로 합치기

border-collapse: collapse; 

table을 포함하고있는 body에 height가 정의되지 않으면

table내에서 height를 비율로 표현할 수 없음 

vertical-align : middle

 → 표 내부의 셀에서 값이 중앙에 위치함 bottom인 경우 셀의 아랫부분

tr:nth-child(even) {backgruond-color : blue;} → 얼룩말무늬 규칙주기

 → even, 2n 짝수 행만 파란색으로 칠함  odd인경우 홀수행

display : inline  → inline요소로 바꿈

display : none → 화면에서 사라짐 + 영역도 없애버림 
visibility : hidden → 화면에서 사라짐 + 영역은 남아있음 

**후손들 찾아가는 indicator**

후손 : space

자식 : > 

형제 : +, ~

+ : 기준 태그의 바로 뒤에 나오는 태그 

~ : 기준 태그의 뒤에 나오는 모든 태그를 찾아라 

후손을 찾아갈때는 space 한칸으로 찾아감

div의 후손 p를 찾아가서 노란색으로 바꿔줌 

![Untitled](Table,%20Selector%20f7530fd57da64fd387e2ed958f2882bf/Untitled.png)

pseudo-element

- 가짜 요소

```html
<!DOCTYPE html>
<html>
<head>
<style>
h1{
	float: right;
	width: 300px;
}
h1::before {
  content: url(smiley.gif);
}
h1::after {
	content: 'END';
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>The ::before pseudo-element inserts content before the content of an element.</p>

<h1>This is a heading</h1>

</body>
</html>
```

### attribute selector

=연산자를 가장 많이 사용함 

a[target]  → target이 있는 a태그를 찾아감. 

a[target=”_blank”]  → target요소가 _blank있는 a태그를 찾아감 

[title~=flower]   → title태그 내에서 flower가 포함된 단어를 찾는다  flowera →이런건 못찾음

![Untitled](Table,%20Selector%20f7530fd57da64fd387e2ed958f2882bf/Untitled%201.png)

[class|=top]    → top- 으로 시작하는거 찾음 topclass는 못찾음  |은 ‘-’를 찾는다는 뜻 

^= → 시작하는 

&= → 끝나는

*= → 포함하는

box-sizing : border-box; 테두리가 요소의 박스 크기 기준임

!important → 다른 css파일에서 재정의하려고 해도 재정의가 안되게 만듦. 

```html
color: blue !important;
```