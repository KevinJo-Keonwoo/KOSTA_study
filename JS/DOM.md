# DOM

### DOM (Document Object Model) : 문서 객체 모델

1. 렌더링 엔진
    - HTML/CSS 등을 처리함
    - 렌더링 엔진이 DOM 트리를 만들어 Node별로 저장함
2. 자바스크립트 해석기 
    - JS를 처리함
    - 만들어진 DOM트리에 접근하고, 조작/변경함
3. DOM구성요소
    1. Element Node : 이름 O 값 X
    2. Attribute Node : 이름 O 값 O 
    3. Text Node : 이름 X 값 O
    4. Comment Node 

JavaScript를 작성하는 방법은 2가지가 있음. 

1. Head에 작성하기 
    - script를 만날 때 JS실행
    - Head에 Script를 통해 JS를 연결한 경우 Body에 접근할 수 없음. 따라서 아래 구문 사용
    - 아래 그림의 왼쪽 검은원 부분밖에 접근할 수가 없음 
    → 나머지부분이 만들어지기 전에 연결되었기 때문
    
    ```jsx
    //DOM트리 작성이 완료될때까지 기다리라는 표현 -> 로딩될 시 2번째 매개변수 실행  
    window.addEventListener("load", function(){
    });
    ```
    
    - DOM트리가 완성되고 화면에 객체를 보여줄(렌더링할) 준비가 되면 load 이벤트가 발생함
        
        → DOM트리 완성을 기다린다 
        
    - window 객체의 load이벤트 발생을 감시(Listen)하다가 이벤트가 발생하면 function()이 자동 호출됨
    
    ![Untitled](DOM%206aecca38bcd347b3a1ca5e10b7919c78/Untitled.png)
    
2. Body에 작성하기 
    - body를 모두 실행 후 JS실행
    - Body에 넣는 경우 HTML이 복잡해지지만 일반적으로 Body에 넣음
    - 강사님이랑 실습하는 경우는 대부분 Head에 작성하기
3. 강의 캡쳐

![Untitled](DOM%206aecca38bcd347b3a1ca5e10b7919c78/Untitled%201.png)

![Untitled](DOM%206aecca38bcd347b3a1ca5e10b7919c78/Untitled%202.png)

![Untitled](DOM%206aecca38bcd347b3a1ca5e10b7919c78/Untitled%203.png)

### querySelector

DOM트리 내에서 객체 찾기 

- DOM트리의 type속성이 text인 input객체찾기

```jsx
var txt0bj = this.document.querySelector("input[type=text]");
//여기서는 this.생략해도 됨 
```

- DOM트리의 button객체찾기

```jsx
var bt0bj = this.document.querySelector("button");
```

getElementById는 요즘 잘 안씀 

```jsx
document.queryselector(”#demo”);    
										  (”.c”);     
										  (”input[name=t]”)   
이런 방식(선택자 사용)으로 쓰기 
```