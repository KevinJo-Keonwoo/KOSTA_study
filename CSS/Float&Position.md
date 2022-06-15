# Float&Position

### Float

- 초기상태

![Untitled](Float&Position%20b399f76e9ca34164889c96a36613df85/Untitled.png)

- green float : right → red가 block요소이기에 green이 위로 올라갈 수 없음

![Untitled](Float&Position%20b399f76e9ca34164889c96a36613df85/Untitled%201.png)

- red float : left → 왼쪽으로 흘렀으나, blue가 위로 올라가려고 함
- float는 block요소를 움직이는 것이라, 블루 색상은 block요소로 올라갔으나,  
텍스트는 inline요소이기에 올라가지 않고 제자리에 머묾

![Untitled](Float&Position%20b399f76e9ca34164889c96a36613df85/Untitled%202.png)

- blue float : right → blue가 오른쪽으로 흘렀으나 green에 막힘

![Untitled](Float&Position%20b399f76e9ca34164889c96a36613df85/Untitled%203.png)

- 이전의 block들과 4방향 모두 겹치지 않았으면 좋겠다 → clear : both

![Untitled](Float&Position%20b399f76e9ca34164889c96a36613df85/Untitled%204.png)

### Position

position이 자식으로 설정된 경우 부모 position 으로부터 거리를 계산함 

**position : absolute  → body의 처음 위치부터 절대적인 거리** 

**position : relative  → 부모태그의 위치로부터의 거리 → 상대적인 거리**  

부모가 position이 relative 설정 안되어있으면, 더 상위 부모인 body를 대상으로 함 

![Untitled](Float&Position%20b399f76e9ca34164889c96a36613df85/Untitled%205.png)

```html
<div style = "background-color:lightgray;width:350px;height:500px;position:absolute;">
	<div style="background-color:red;  width:100px;height:100px;position:absolute;top:50px;left:50px;">RED</div>
	<div style="background-color:green;width:100px;height:100px;position:absolute;position:absolute;top:150px;left:150px;">GREEN</div>
	<!-- <div style="background-color:blue; width:100px;height:100px;float:right;">BLUE</div> -->
	<div style="background-color:blue; width:100px;height:100px;">BLUE</div>
</div>
```

background에서 overflow=hidden 써서 범위 넘어가는 도형 자를 수 있음 

```html
<div style = "background-color:lightgray;width:150px;height:250px;overflow:hidden;">
																																  overflow:scroll;
																																	overflow-x:scroll;
```

z-index를 부여할 시 인덱스가 가장 높은 개체가 겹쳤을 때 제일 앞에 나옴