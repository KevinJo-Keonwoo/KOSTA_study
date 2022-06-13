# CSS 기본

1. Inline Style : 바디 내에 style = 를 선언하여 내용을 작성하는 것
2. Inner Style : 본문 상단에 스타일 내용을 작성하는 것
3. Outer Style : 외부 CSS파일을 만들어 내용을 작성하는 것

- CSS 에서는 주석(코멘트)가 /* ~ */로 구성
- *는 모든 요소를 의미함.
- 스타일 적용할 내용이 같으면 그루핑할 수 있음 → 엘리먼트셀렉터 외에도 동일한 방식 적용 가능

![Untitled](CSS%20%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%2037b544381d4b43428e35287220d696dc/Untitled.png)

- CSS는 좌→우, 상→하로 해석하기에 가장 아래쪽의 값이 덮어씌워짐
- 아래의 경우 Orange가 나옴

![Untitled](CSS%20%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%2037b544381d4b43428e35287220d696dc/Untitled%201.png)

- 순서에 관계없이 Class와 ID를 비교했을때 ID선택자가 우선순위가 높음. element선택자가 가장 낮음
- 아래의 경우 Yellow가 나옴 → ID가 우선함

![Untitled](CSS%20%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%2037b544381d4b43428e35287220d696dc/Untitled%202.png)

- inner style보다는 inline스타일의 우선순위가 더 높기에 
class, id가 동시에 선언되더라도 inline 스타일이 있다면 우선함

- table의 자식이 tr이 아님. 크롬웹브라우저에서는 table과 tr사이에 tbody가 자동생성됨

```html
div.productlist>table>tr>td>ul{
	list-style-type: none;
	padding-left:0px;
}

---> 작동안함
div.productlist>table>tbody>tr>td>ul{
-> 작동
div.productlist>table tr>td>ul{
-> 공백으로 자손을 찾기를 추천함 
```

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
	border-collapse: collapse;
}
div.productlist>table td{
	width:100px; 
}
div.productlist>table td>ul img{
	width:50%; /* td 태그의 50% */
비율들은 부모의 크기에 대한 비율 
}

div.productlist>table tr>td>ul{
	list-style-type: none;
	padding-left:0px;
}
```

###