//DOM트리 작성이 완료될때까지 기다리라는 표현 
//1. 문서의 끝까지 해석 후 DOM트리가 완성되고 화면에 렌더링할 준비가 되면
//window 객체의 load이벤트 발생한다.
//DOM트리작성이 완료될때까지 기다림
//window 객체의 load이벤트발생을 감시했다가  //감시하다 -> Listen  
//이벤트가 발생하면 function()이 자동호출됨  
window.addEventListener("load", function(){
    //DOM트리의 type속성이 text인 input객체찾기      css에서사용하던 선택자를 queryselector에서 인자로 사용 가능함 
                                                //    즉, 자손이나 아들태그를 찾아가던 문법으로 가능 >등
    var txt0bj = this.document.querySelector("input[type=text]");
    //DOM트리의 button객체찾기
    var bt0bj = this.document.querySelector("button");
    //button객체의 click이벤트가 발생했을 때 function()이 자동호출
    bt0bj.addEventListener("click", function(){
        alert('클릭되었습니다');
        txt0bj.value = '클릭되었습니다';
    })

    //-----------계산기 START------------------------------------------
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
    //-----------계산기 END--------------------------------------------
    
    //-----------CHECKBOX START---------------------------------------
    var cbArr =
        document.querySelectorAll("div.checkbox input[type=checkbox]") //type가 checkbox인 input객체들을 가져옴
    cbArr.forEach(function(item, index){
        // item.addEventListener('click', function(){}); //기능이 필요하다면 이렇게 사용 이번에는 사용 안할 것 
        // if(index == 0){   //첫번째 체크박스 객체 
            
        // }

        console.log(item, item.checked);
    });
    
    cbArr[0].addEventListener('click', function(){
        for(var i=1; i<cbArr.length; i++){
            cbArr[i].checked = this.checked;
        }
    })
    //html option에서 value를 넣어줄 수도 있음 
    //0번인덱스에서 클릭이 감지되면, 1(지금선택된 객체의 checked 상태)를 2(1부터 끝까지의 배열내에 있는 객체의 상태)에 대입함 
    //-----------CHECKBOX END---------------------------------------

    //-----------SELECT START---------------------------------------
    var selectSidoObj = document.querySelector("div.select>select.sido");
    var selectSigunguObj = document.querySelector("div.select>select.sigungu");
    selectSidoObj.addEventListener('click', function(){
        console.log(this.value, '클릭되었습니다');
    });
    selectSidoObj.addEventListener('change', function(){
        console.log(this.value, '변경되었습니다');
        switch(this.value){
            case'서울시':
                selectSigunguObj.innerHTML = '';    //시군구의 innerHTML을 초기화 
                var seoul = '<option>구를 선택하세요</option>';
                seoul += '<option>중구</option>';
                seoul += '<option>강북구</option>';
                seoul += '<option>강동구</option>';
                seoul += '<option>강남구</option>';
                seoul += '<option>강서구</option>';
                selectSigunguObj.innerHTML = seoul;        //innerHTML을 seoul로 바꿈 
                selectSigunguObj.style.display = 'inline-block';  //none을 block으로 바꿈
                break;
            case'제주도':
                //1)
                // selectSigunguObj.innerHTML = '';      //시군구의 innerHTML을 초기화
                //2) 
                // for(var i=0; i<selectSigunguObj.childNodes.length; i++){
                //     console.log('before remove length', selectSigunguObj.childNodes.length);
                //     selectSigunguObj.removeChild(selectSigunguObj.childNodes[i]);
                //     console.log('after remove length', selectSigunguObj.childNodes.length);
                // }               //removechild로 자식 Node들을 다 없애는 과정 -> 위의 초기화 과정과 같음 -> 완벽히 제거되지 않음 -> 오류남 
                //3)
                while(selectSigunguObj.hasChildNodes()){
                    selectSigunguObj.removeChild(selectSigunguObj.firstChild);
                };    //제거하는것만큼은 0번부터 제거하는것 하면 안됨 !  //innerHTML쓰는 것이 권장됨

                // var jeju = '<option>시를 선택하세요</option>';
                // jeju += '<option>제주시</option>';
                // jeju += '<option>서귀포시</option>';
                // selectSigunguObj.innerHTML = jeju;        //innerHTML을 jeju로 바꿈 
                var jeju = ['시를 선택하세요', '제주시', '서귀포시'];
                for(var i=0; i<jeju.length; i++){
                    var opt = document.createElement('option');
                    var txt = document.createTextNode(jeju[i]);
                    opt.appendChild(txt);   //text객체를 option 객체에 추가함. 자식개념으로 넣는것 
                    selectSigunguObj.appendChild(opt); //option객체를 select객체에 추가함 
                }
                selectSigunguObj.style.display = 'inline-block';  //none을 block으로 바꿈
                break;
            default:
                selectSigunguObj.innerHTML = '';      //시군구의 innerHTML을 초기화 
                selectSigunguObj.style.display = 'none';
        }
    });
    //기존의 값이 바뀔 때 Change 이벤트 발생 
    //-----------SELECT END---------------------------------------
    
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
            event.stopPropagation(); //이벤트 전파 중지 
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

    var inputNodeList = this.document.querySelectorAll("input");
    console.log('----');
    console.log(inputNodeList)
    console.log('----');

    var inputCollection = this.document.getElementsByTagName("input");
    console.log('----');
    console.log(inputCollection);
    console.log('----');
    // inputCollection.forEach(function(item, index){ //HTMLcollection 자료형에서는 forEach제공안함 
    //     console.log('inputCollection', item);
    // })
});
//eventlistener를 등록하는 것인데, load라는 이벤트가 발생하는것을 감시했다가 2번째 인자인 function을 호출함 -> js찾아갈 수있음
//자바스크립트에서는 DOM에만 접근할 수 있고 DOM에서 객체를 반환하여 자바스크립트와 연결해야됨 
//강사님은 onclick속성 사용 안하고 addEventListener 사용할 것 
