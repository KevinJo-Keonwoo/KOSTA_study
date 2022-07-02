# Keyboard&Submit&a태그

```jsx
//-----------keyboard START---------------------------------------
    //DOM트리에서 div.keyboard의 imput객체 찾기
    var inputObj = document.querySelector("div.keyboard>input[type=text]")
    inputObj.addEventListener('click', function(){
        console.log('input객체 클릭되었습니다');
    });
    inputObj.addEventListener('focus', function(){
        console.log('input객체 포커스받았습니다');
        this.style.color = 'blue';
    })
    //keydown -> keypress -> keyup
    //keyup : 키가 끝까지 눌렸다가 떼지는것
    //
    inputObj.addEventListener('keyup', function(event){
        alert('입력된키값:' + event.key);  //많이 쓰임 
        // if(event.key == 'Enter'){        //이런 방식으로 많이 쓰인다 
        // }
    })

    //-----------keyboard END---------------------------------------
    
    //-----------submit START---------------------------------------
		//전송관련이벤트발생순서 : 버튼의 click이벤트 -> 폼의 submit이벤트 -> 폼의 submit이벤트 기본처리(전송)됨
    // var btSubmitObj = this.document.querySelector('div.submit>form>button');
    var formObj = document.querySelector('div.submit>form');
    // var textSubmitObj = this.document.querySelector('div.submit>form>input[name=t]');
    //무조건 처음부터 찾아나가는 방식은 낭비임 
    //위의 3줄은 querySelector가 div.submit부터 계속 찾아나감 -> 퍼포먼스가 떨어짐 -> 좌표를 찍어야 함 -> w3c Node navigation참조 

    //DOM navigation 
    // div.submit>form의 자식 태그는 3가지임 1)enter 2)input 3)br 4)button 5)enter   엔터값도 자식으로 판단 -> element로 찾아줘야함 
    var btSubmitObj = formObj.lastElementChild; //lastchild를 선택하면 엔터값도 자식으로 판단하여 에러발생
    var textSubmitObj = formObj.firstElementChild; //firstchild도 마찬가지 

    btSubmitObj.addEventListener('click', function(){
        alert('전송버튼 클릭이벤트가 발생했습니다');
    });
    formObj.addEventListener('submit', function(event){
        alert('폼의 서밋이벤트가 발생했습니다');
        if(textSubmitObj.value == ''){
            alert('값을 입력하세요');
            event.preventDefault(); //이벤트 전송을 못하도록 막아버리는 것  //공백값일 때는 전송안하고싶다
        }
    });
    //-----------submit END---------------------------------------
    
    //-----------a START---------------------------------------
    //이동관련 이벤트 : a객체의 클릭이벤트 -> 클릭이벤트 기본처리 (이동) 
    //이벤트전파(event bubbling) : 하위객체에서 발생한 이벤트가 상위객체로 전파가 됨 (down -> top 방식)
    var divAObj = this.document.querySelector("div.aa");
    divAObj.addEventListener('click', function(){
        this.style.backgroundColor = 'yellow';
    });
    var aObj = document.querySelector("a");  //a태그가 하나밖에없어서 첫번째 a태그 찾음. 다른케이스에는 보다 자세히 찾기를 권장
    aObj.addEventListener('click', function(event1){
        this.style.backgroundColor = 'green';
        event1.preventDefault(); //기본이벤트처리 금지 
        event1.stopPropagation(); //전파를 중지한다 -> 버블링 중지 
    });
    //a객체를 클릭햇을때 전파가 되어 부모의 click이벤트도 발생됨 
    //-----------a END---------------------------------------
```