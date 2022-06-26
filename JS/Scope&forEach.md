# Scope&forEach

Calculator의 코드임 

### **기존 코드**

```jsx
 for(var i=0; i<btArr.length; i++){
     btArr[i].addEventListener('click', function(){
         console.log(i, '버튼클릭되었습니다')
     });
 }
```

- addEventListener는 당장 실행되는 명령어가 아님. 
’click이라는 이벤트가 발생했을 콜백함수를 실행해라’ 라는 의미
- 위 구문에서의 i는 윈도우의 객체에서 선언된 i임 for블럭으로 구분되지 않음
1. i가 for 구문을 실행하면서 1부터 12까지 증가하며, dom트리에서 객체를 찾아 btArr[i]에 콜백함수의 내용을 담아옴.
2. Click이 감시될때 까지 callback함수 내부에 i를 대입하지 않음 btArr에 세팅만 해놓음
3. Click될 시 이미 for구문으로 i가 12까지 증가한 상태라 어떤 버튼을 클릭하더라도 12가 출력됨

### **기존 코드의 그림**

![Untitled](Scope&forEach%2019771efd6bb34e8e8e25819807a761c5/Untitled.png)

### **scope추가한 코드**

```jsx
for(var i=0; i<btArr.length; i++){
        (function(j){  
            btArr[j].addEventListener('click', function(){
                console.log(j, '버튼클릭되었습니다');
            });
        })(i);
    }
//이름없는 함수를 호출하려면 (function (){})(대입할변수) 소괄호를 두개 열고 닫아서 사용 
```

1. i가 0일때 function(j)함수를 호출하여 실행시킴
-> 이 함수는 세팅해두는 것이 아닌 실행 후 휘발될 함수임
2. 변수에 담겨있지 않기에 함수가 바로 실행됨
3. j가 0,1,2,3,4~~~12인 함수들로 구분되어 배열에 담김.
4. 함수 scope로 scope를 하나 더 만든 것.

### **scope추가한 코드의 그림**

![Untitled](Scope&forEach%2019771efd6bb34e8e8e25819807a761c5/Untitled%201.png)

### **forEach로 만든 코드 : 위의 scope가 아닌 이 방식이 권장됨**

```jsx
btArr.forEach(function(item, index){
    item.addEventListener('click', function(){
        console.log(index, '버튼클릭되었습니다');
    });
});
```

- forEach는 이미 callback함수가 있기 때문에 함수 scope가 필요 없음 
위에서의 index가 scope 사용 시의 j와 같은 의미
- 배열 사용 시 일반 for문 사용하지말고 forEach사용하기