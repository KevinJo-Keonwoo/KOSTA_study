# JQuery용 메서드

### **jQuery용 메서드**

1) 이벤트용 메서드

- click (), focus() …

2) Effect용 메서드

- hide(), show(), slideDown()…

3) Style용 메서드  

- css(’color’, ‘red’), addClass()

4) Content용 메서드

- text() → innerText
- html() → innerHTML
    - ex)  `$('div').html();`
        
          =  `console.log(document.querySelector(’div’).innerHTML);`
        
         `$('div').html('<h1>HELLO<h1>')`
        
        =    `document.querySelector(’div’).innerHTML = ‘<h1>HELLO<h1>’`
        
    - div태그의 innerHTML찾음
- val() → value
    - ex)  `let t = $(’input[type=text]’).val();`
        
         =   `let t = document.querySelector('input[type=text]').value;`
        

5) Attribute용 메서드

- attr()
    - ex)  `alert($("w3s").attr("href") );`
    
                 `alert(document.querySelector(”w3s”).href  );`
    
           `$("#w3s").attr("href", "[https://www.w3schools.com/jquery/](https://www.w3schools.com/jquery/)");` 
    

6) Node용 메서드

- Node생성 : $(”<li>”) → li라는 노드를 생성    
              ✔ $(”li”)   → <li>라는 것을 찾는 선택자
    - JS에서는 → document.createElement(”li”);
- childNode로 추가 : append() / prepend()  → prepend는 첫번째 child로 추가
- siblingNode로 추가 : after() / before()
- Node제거 : remove() → current nodes와 child nodes 모두 제거
                 / empty() → child nodes를 제거

7) Node 찾기

1) 부모 : `parent()`

- 현재 Node기준으로 부모 Node찾기

2) 조상 : `parents()`

- 모든 조상 Node찾기   `parents(”ul”)` 특정 조상찾기
- `$(”기준태그”).parentsuntil(”찾는조상”)` →  기준부터 조상 만나기직전까지  (조상포함x)

3) 자식 : `children()`

4) 후손 : `find()`

- `$(”기준”).find(”찾을후손”)` → 후손을 찾음
- `$(”기준”).find(”*”)` → 모든 후손을 찾음

5) 형제 : `siblings(), next(), nextAll(), nextUntil()`    `prev(), prevAll, prevUntil()`

8) 필터용 메서드

- eq() → 인덱스값에 해당하는 줄을 선택함. 0부터 시작
    - `$("p").eq(1);` p태그의 첫번째 줄
    - first() = eq(0) 과 같음
- filter() → 클래스값 찾아감
    - `$("p").filter(".intro");`
- not() → filter() 와 반대개념, 클래스값이 ()인 값만 제외하고 찾아감