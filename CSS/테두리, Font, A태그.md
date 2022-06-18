# 테두리, Font, A태그

### 테두리

- border:굵기 스타일 색상    →스타일은 필수 요소임. 나머지는 비워둘 수 있음 
border:2px solid black
- border-top-style: dotted; 
border-right-style: solid; 이런 식으로 테두리를 다르게 설정할 수 있음.
- border-style:dotted;      →4방향 모두 dotted   시계방향으로 적용
border-style:dotted, solid, solid, solid →상 우 하 좌
border-style:solid,solid,solid → 상 좌우 하 
border-style:solid,solid → 상하 좌우

rgb에 a를 붙여 rgba를 붙이면 음영도를 조절할 수 있음 

1이면 가장 어두운 색이고 0이면 투명함.  → 불투명도

body태그보다는 p태그에 배경을 주는것이 좋음 

background-repeat                        →반복하여 이어서 출력 

background-repeat : no-repeat     →반복없이 1회만 출력

background-repeat : repeat-x       → 가로축 반복

background-repeat : repeat-y       → 세로축반복

background-position : right top    →오른쪽 상단에 위치함 

background-position : left center  →왼쪽 중앙에 위치함 

- 아래처럼 공백으로 나열할수도 있음 (순서 : color, image, repeat, position, attachment)

![Untitled](%E1%84%90%E1%85%A6%E1%84%83%E1%85%AE%E1%84%85%E1%85%B5,%20Font,%20A%E1%84%90%E1%85%A2%E1%84%80%E1%85%B3%209e2a9e7184cc4c2f839f92b38fe2ce09/Untitled.png)

google font를 사용하고 싶으면 아래와 같음

url을 링크걸어준다. 

![Untitled](%E1%84%90%E1%85%A6%E1%84%83%E1%85%AE%E1%84%85%E1%85%B5,%20Font,%20A%E1%84%90%E1%85%A2%E1%84%80%E1%85%B3%209e2a9e7184cc4c2f839f92b38fe2ce09/Untitled%201.png)

font 간단히 쓰기

- font : style, variant, weight, size/line-height, family 순으로 작성해줌
- ex) font: italic small-caps bold 12px/30px Georgia, serif;
- font-size 와 font-family는 필수요소임

### a태그 관련

a:hover  → 사용자가 링크 위에 마우스를 올렸을 때 변할 스타일 설정 

ul → unordered list

ol → ordered list

- list-style-type로 모양 변경 가능 
none 주고 padding 0px주면 사라짐