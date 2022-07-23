# Popup 띄우기

### Popup 띄우기

`window.open(연결할 URL)`

- ‘_blank’ 추가 시 새로운 창에서 팝업이 발생 → 미설정시 새 탭에서 발생

### 화면 넓이 높이 구하기

`window.screen.width`

`window.screen.height`

위의 값 각각 구한다음 아래와 같이 팝업 설정하면 좋음 

```jsx
let popupWidth : 설정할 너비 
let popupHeight : 설정할 높이 
let popupX : (window.screen.width / 2) - (popupWidth / 2);
let popupY : (window.screen.height / 2) - (popupHeight / 2);

window.open("../html/searchzip.html", '_blank', 'width=' + popupWidth + ', 
				height=' + popupHeight + ', left=' + popupX + ', top=' + popupY);
```