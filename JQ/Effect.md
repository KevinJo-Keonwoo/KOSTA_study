# Effect

### Effect

`toggle` → hide 와 show를 번갈아가며 하는 것 

`slide` → 아래쪽으로 스르륵 내려가는 것

`fade` → 서서히 사라지거나 나타나는 것 

자바스크립트의 단순성

hide 기능을 사용하고 싶을 시 

```jsx
$("#hide").click(function(){
  $("p").hide();
});
```

이 구문을 JS를 사용하여 구현할 시 

```jsx
let obj1 = document.querySelector("#hide");
obj1.addEventListener('click', function(){
  let pObj = document.querySelector("p");
  pObj.style.display = 'none';
});
```

**Fade**

```jsx
$("button").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");   느리게 
  $("#div3").fadeIn(3000);    3초동안 서서히 나타남 
});
```

**Slide**

```jsx
$("#flip").click(function(){
  $("#panel").slideDown(slow); //천천히 내려가면서 나타남 
});
```