# Ajax

Asynchronous JavaScript And XML

![Untitled](Ajax%20342cd695a83046ba93c8dea8e9a0321f/Untitled.png)

- 렌더링 엔진에서 기존 화면 Clear하기 위해 화면이 잠시 깜빡임
- 자바스크립트 객체가 요청하고 응답받으면, XmlHttpRequest라는 객체가 네트워크 대신 수신함
- 최근에는 XmlHttpRequest대신 Fetch API로 대체하는 추세

![Untitled](Ajax%20342cd695a83046ba93c8dea8e9a0321f/Untitled%201.png)

- AJAX라고 부르는 부분

![Untitled](Ajax%20342cd695a83046ba93c8dea8e9a0321f/Untitled%202.png)

### Ajax이용할때의 차이

1. 기존 방식
- 기존화면 Clear
- 요청을 보내고 응답을 기다림 → 기다리는 동안 작업 중지
- 동기 작업 (동기 처리)
1. Ajax 방식
- 기존화면 Clear 안함 → 깜빡거리지 않음
- 응답받은 내용을 기존 DOM에 추가, 변경
- 요청을 하고 응답의 여부와 상관없이 다른 작업 가능
- Web Browser의 기존화면에서 다른작업이 가능함
- 비동기 작업 (비동기 처리)
- GPS같은 기술을 사용하는 어플리케이션에서 필요함 → 
ajax로 맵을 그려야 깜빡깜빡거리지 않음

- XMLHttpRequest JS식 코딩

```jsx
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
    }  //응답받아 처리할 내용을 미리 설정 -> 응답받자마자 실행
  xhttp.open("GET", "ajax_info.txt", true);  //true로 설정해야 비동기 의미
  xhttp.send(); //send로 마무리해줘야함
}
```

- Jquery식 코딩

```jsx
$("#div1").load("demo_test.txt");  //get방식 요청 -> load메시지의 Default
```

Jquery에서 Ajax사용 

1) load( ‘’) 방식 → get방식 O, Post방식 X, 요청전달/데이터전달 어려움 

2)$ajax방식 

```jsx
$ajax({
	url  : "요청할 URL",
	type : 'post',  //default는 get방식 
	data : 1) "id=id1 & pwd = p1",
				 2) 	{ id : "id1"
				  		pwd : "p1"
				    	}
				 3) "a=1 & a=2", { a: [1, 2] }  //배열로 보낼 수도 있음 
	success : function(responseText, statusText, xhr) {};
	error : function(xhr, statusText, httpStatus메시지(errorText)){ }   
													 //에러 발생했을때 callbackfunction 호출 
});
```