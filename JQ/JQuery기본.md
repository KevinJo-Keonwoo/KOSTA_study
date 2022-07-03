# JQuery기본

jquery 연결 시 사용 → CDN 인터넷 연결시에만 가능 

<script src="[https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js](https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js)"></script>

JS 문법을 아주 간단하게 처리 가능하다.

### $( ~ )

- 객체 지정 가능 또는 선택자를 이용해서 객체를 찾을 수 있음
- 이렇게 호출된 객체는 jQuery전용 객체가 됨

```jsx
$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();  ->JS전용객체를 JQuery전용 객체로 바꿈 ,
  });                  JS에서 제공안되는 hide를 Jquery에서 제공 
});
```

- 아래와 같은 방식으로 사용
    
    `$(this).hide()` - hides the current element.
    
    `$("p").hide()` - hides all <p> elements.
    
    `$(".test").hide()` - hides all elements with class="test".
    
    `$("#test").hide()` - hides the element with id="test".
    

```jsx
-원래 문법 
$(document).ready(function(){
});

-이렇게 document 생략하고 사용해도 됨 (축약)
$(function(){
});

//JS에서 동일한 사용 구문
document.addEventListener("ready",function(){});
```

- DOM완성 → document객체의 ready이벤트 발생 → 화면보여줄준비완료
- 이후 window객체의 load이벤트 발생

**$(document).ready()**

- 문서가 완전히 준비되었을 때

### **hover()**

- 마우스가 올라갔을 때, 마우스가 올라갔다가 해제되었을 때 두개 설정

```jsx
$("#p1").hover(function(){
  alert("You entered p1!");
},
function(){
  alert("Bye! You now leave p1!");
});
```

### Callback

```jsx
//콜백 있음
$("button").click(function(){
  $("p").hide("slow", function(){  //hide가 완료되면 callbackfunction 실행
    alert("The paragraph is now hidden");
  });
});

//콜백 없음 
$("button").click(function(){
  $("p").hide(1000);
  alert("The paragraph is now hidden"); //이상황에서는 hide의 시작과 같이 function실행
});
```

```jsx
//JQuery 구문
$("#p1").css("color", "red").slideUp(2000).slideDown(2000);

//JS구문
let $pObj = $("#p1").css("color","red")
$pObj.slidUp(2000);
$pObj.slidDown(2000);
```