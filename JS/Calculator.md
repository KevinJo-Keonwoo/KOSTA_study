# Calculator

- DOM트리에서 Class 속성값이 calculator인 객체의 자식 중 모든 button객체 찾기

```jsx
var btArr = document.querySelectorAll("div.calculator>button")
```

- querySelectorAll : 만족하는 모든 값을 찾음 → 배열값으로 반환됨

- 코드해석

```jsx
 var resultObj = document.querySelector("div.calculator>div.result");
    var resultNum = 0; //계산될 결과값 
    var operator; //연산자
    btArr.forEach(function(item, index){
        item.addEventListener('click', function(){
            // resultObj.innerHTML = index+'번 버튼 클릭되었습니다';  0~9
            // resultObj.innerHTML = item.innerHTML+'번 버튼 클릭되었습니다'; // 1~0
            //객체의 내부 바디(내용)에 접근하고 싶으면 innerHTML로 접근하면 됨
            var inner = this.innerHTML;
            switch(inner) {
                case '+':
                    operator = inner;
                    break;
                case '=' :
                    resultObj.innerHTML = resultNum;
                    operator = undefined;
                    resultNum = 0;
                    break;
                default: //숫자버튼들
                resultObj.innerHTML = inner;
                    if(operator == '+'){
                        resultNum += parseInt(inner);
                    }else {
                        resultNum = parseInt(inner);
                    }
            }
        });
    });
```

1. resultObj라는 변수에 div.calculator>div.result값을 연결함
2. 계산될 결과값을 받을 resultNum을 0으로 초기화, 연산자를 받을 operator을 선언 
3. btArr의 값을 forEach로 일일이 반환할 예정임. 콜백함수는 item과 index라는 매개변수를 가짐
4. btArr의 값중 한개가 클릭되면 addEventListener으로 콜백함수가 반환됨 
5. 반환될 콜백함수 내부에는 inner라는 변수가 선언되어있으며, 이 값은 btArr의 값이 가지고 있는 innerHTML 정보가 대입될 예정 → 여기서는 숫자 번호 또는 ‘+’ ‘=’같은 연산자 대입 예정
6. inner의 값에따라 결과가 달라지는 switch구문이 존재함
7. inner의 결과값(btArr값의 HTML값)이 ‘+’ 인 경우,
operator 변수에 inner의 결과값(’+’)을 대입하고 종료
8. inner의 결과값이 ‘=’인 경우,
resultObj객체의 HTML값에 resultNum을 대입해줌 
operator은 이미 사용되었을 것이기 때문에 undefined로 초기화해줌 
resultNum도 0으로 초기화해주고 종료 
9. inner의 결과값이 ‘+’도 ‘=’도 아닌 경우 
resuldObj객체의 HTML값에 inner의 값(숫자)을 대입해줌
10. 만약 이 때 operator값이 ‘+’인 경우 
    - →이 뜻은 inner가 operator였던 적이 1번이상 있었기에 operator의 값이 +로 변한 상황
    - →이 말 뜻은 덧셈을 하려고한다는 뜻
    
    resultNum이라는 결과값 객체에 inner의 값을 int타입으로 대입해줌 → 결과 누적 
    
11. operator값이 ‘+’가 아닌경우 
    - →이 뜻은 이전 연산에서 ‘+’키가 한번도 눌리지 않아 opertor가 undefined인 상황
    - 즉 덧셈이 눌리기 전 맨 첫번째 숫자를 입력하는 상황
    
    inner값 그대로 resultNum에 대입 
    

- 코드 완성본

```jsx
//DOM트리에서 class속성값이 calculator인 객체의 자식 중 모든 button객체 찾기
    var btArr = document.querySelectorAll("div.calculator>button")  //div객체를 찾은것임. JS에서는 태그개념이 아님 
    //All을 붙여 만족하는 값을 모두 찾음. -> 배열값으로 반환이 됨 
    for(var i=0; i<btArr.length; i++){
        (function(j){                                       //이름없는 함수를 호출하려면 (function (){})(대입할변수) 소괄호를 두개 열고 닫아서 사용 
            btArr[j].addEventListener('click', function(){
                console.log(j, '버튼클릭되었습니다');
            });
        })(i);
    }
    // i가 0일때 function(j)함수를 호출하여 실행시킴 -> 이 함수는 예약걸어두는것이 아닌 실행후 휘발될 함수임 
    // 변수에 담겨있지 않기에 함수가 바로 실행됨 
    // j가 0,1,2,3,4~~~12인 함수들로 구분되어 배열에 담김. 
    // 함수 scope로 scope를 하나 더 만든 것. 

    // for(var i=0; i<btArr.length; i++){
    //     btArr[i].addEventListener('click', function(){
    //         console.log(i, '버튼클릭되었습니다')
    //     });
    // }          
    // 1) addeventlistener은 지금 당장 실행한다는 것이 아니라, 
    // click했을때 실행해라 라는 의미 
    // 2) 여기서의 i는 윈도의 객체에서 선언된 i임 for블럭으로 구분되지않음 
    // 예약을 걸어 두는 것 
    // 3) 함수의 인자로 함수가 사용되는 경우 callbackfunction이라고 함 
    // 4) 1부터 12까지 for문돌면서 준비만 해놓음 -> 최후에 i는 12가 됨 
    // 5) i가 12까지 증가하면서 dom트리에서 객체를 찾아서 btArr[i]에 callbackfunction을 담아옴. 
    // 6) Click이 감시될때 까지 callback함수 내부에 i를 대입하지 않음 btArr에 세팅만 해놓음  
    // 위의 결과로는 어떤 버튼을 클릭하더라도 12가 출력됨 

    btArr.forEach(function(item, index){
        item.addEventListener('click', function(){
            console.log(index, '버튼클릭되었습니다');
        });
    });
    //forEach는 이미 callback함수가 있기 때문에 함수 scope가 필요 없음 여기에서의 index가 j와 같은 의미 
    //배열 사용 시 일반 for문 사용하지말고 forEach사용하기 

    var resultObj = document.querySelector("div.calculator>div.result");
    var resultNum = 0; //계산될 결과값 
    var operator; //연산자
    btArr.forEach(function(item, index){
        item.addEventListener('click', function(){
            // resultObj.innerHTML = index+'번 버튼 클릭되었습니다';  0~9
            // resultObj.innerHTML = item.innerHTML+'번 버튼 클릭되었습니다'; // 1~0
            //객체의 내부 바디(내용)에 접근하고 싶으면 innerHTML로 접근하면 됨
            var inner = this.innerHTML;
            switch(inner) {
                case '+':
                    operator = inner;
                    break;
                case '=' :
                    resultObj.innerHTML = resultNum;
                    operator = undefined;
                    resultNum = 0;
                    break;
                default: //숫자버튼들
                resultObj.innerHTML = inner;
                    if(operator == '+'){
                        resultNum += parseInt(inner);
                    }else {
                        resultNum = parseInt(inner);
                    }
            }
        });
    });
```