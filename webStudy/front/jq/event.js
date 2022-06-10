// $(document).ready(function(){})  //== window.addeventlistener 
$(function(){                       //== window.addeventlistener 
    let $txtObj = $('input[type=text]');  //$txtObj는 jquery임을 알리려고 일부러 $붙임
    let $btObj = $('button').first(); //button객체찾기
    $btObj.click(function(){
        // alert('클릭되었습니다');
        $txtObj.val('클릭되었습니다');
    });
    //-------------------계산기--------------------------------
    //DOM트리에서 class속성값이 calculator인 객체의 자식 중 모든 button객체 찾기
    //querySelectorAll()의 반환형은 NodeList자료형
    //$()의 반환형은 jquery객체형 -> jquery메서드 사용가능
    //$()의 결과가 여러객체인 경우(All등) 각 인덱스의 요소는 js객체이다 ->jquery매서드 사용 불가 
    //이렇게 반환된 js객체를 jq객체로 변환하려면 $(js객체)처리가 필요함 
    //반복문용 jq메서드는 each()
    let $btArr = $('div.calculator>button');  //queryselectorall은 nodelist로 반환이었음. 
    // console.log(typeof($btArr)); //이 반환형은 
    
    // let btArr = $('div.calculator>button');

    // console.log(btArr[0] === $btArr[0]); //true //각 요소의 자료형은 js객체 -> jquery매서드 사용 불가 
    //$btArr[0] -> JS객체, 배열 아님(forEach못씀)
    //$($btArr[0]) -> JQ객체

    // $btArr.forEach(function(item, index){
    //     if(index%2 == 0){      -> 에러!
    //         item.hide();
    //     };
    // });
    // $btArr.each(function(index, item){    //매개변수 순서도 거꾸로
    //     if(index % 2 == 0){
    //         $(item).hide();
    //     };
    // });
    let $resultObj = $('div.calculator>div.result');
    let resultNum = 0;
    let operator;

    //기존꺼 구현하기 Each로
    //-------------------계산기능------------
    // $btArr.each(function(index, item){
    //     $(item).click(function(){
    //         let inner = $(this).html();
    //         switch(inner) {
    //             case '+':
    //                 operator = inner;
    //                 break;
    //             case '=' :
    //                 $resultObj.html(resultNum);
    //                 operator = undefined;
    //                 resultNum = 0;
    //                 break;
    //             default: //숫자버튼들
    //             $resultObj.html(inner);
    //                 if(operator == '+'){
    //                     resultNum += parseInt(inner);
    //                 }else {
    //                     resultNum = parseInt(inner);
    //                 }
    //         }
    //     }); 
    // })

    //반복 안돌고 구현하기 
    $btArr.click(function(){
        let inner = $(this).html();
        switch(inner) {
        case '+':
            operator = inner;
            break;
        case '=' :
            $resultObj.html(resultNum);
            operator = undefined;
            resultNum = 0;
            break;
        default: //숫자버튼들
        $resultObj.html(inner);
            if(operator == '+'){
                resultNum += parseInt(inner);
            }else {
                resultNum = parseInt(inner);
            }
        }
    });
    //-----------계산기 END ---------------------------------------  
    
    //-----------CHECKBOX START---------------------------------------  
    let $cb = $('input[type=checkbox]').first();
    // alert($cb.prop('checked')); //prop을 이용해서 checked프로퍼티값 얻기 
    let $cb1 = $('input[type=checkbox]');

    $cb.click(function(){
        for(var i = 1; i <= $cb1.length; i++){
            if($cb.prop('checked') == true){
                $cb1.eq(i).prop('checked',true);
            } else{
                $cb1.eq(i).prop('checked',false);
            };
        };
    });

    //쌤방식
    let $cbArr = $('div.checkbox input[type=checkbox]');
    let cbAll = $cbArr.first();
    let cbOther = $cbArr.not(cbAll); //첫번째 체크박스를 제외한 나머지 
    cbAll.click(function(){
        let status = $(this).prop('checked');  //체크값을 변수에 받아주고 
        cbOther.prop('checked', status);  //첫번째 체크박스의 체크드프라퍼티를 나머지 박스에 대입 
    });



    //Each로 해보기 
    //-----------CHECKBOX END---------------------------------------  

    //-----------SELECT START--------------------------------------- 
    let $selectSidoObj = $('div.select>select.sido');
    let $selectSigunguObj = $('div.select>select.sigungu');

    $selectSidoObj.click(function(){
        console.log($(this).val(), '클릭되었습니다');
    });
    $selectSidoObj.change(function(){
        console.log($(this).val(), '변경되었습니다');
        switch($(this).val()){
            case'서울시':         
                $selectSigunguObj.empty();
                let seoul = '<option>구를 선택하세요</option>';
                seoul += '<option>중구</option>';
                seoul += '<option>강북구</option>';
                seoul += '<option>강동구</option>';
                seoul += '<option>강남구</option>';
                seoul += '<option>강서구</option>';
                $selectSigunguObj.html(seoul); 
                $selectSigunguObj.show();  
                break;
            case'제주도':
                $selectSigunguObj.empty();
                // while($selectSigunguObj.hasChildNodes()){
                //     $selectSigunguObj.removeChild($selectSigunguObj.firstChild);
                // };    
                var jeju = ['시를 선택하세요', '제주시', '서귀포시'];
                for(var i=0; i<jeju.length; i++){
                    var $opt = $('<option>');  //엘리먼트 객체 만드는 작업
                    var txt = jeju[i];
                    $opt.append(txt);  
                    $selectSigunguObj.append($opt); 
                }
                $selectSigunguObj.show();
                break;
            default:
                $selectSigunguObj.empty();      
                $selectSigunguObj.hide();
        }
    });

    //-----------SELECT END-----------------------------------------
    
    
    //-----------KEYBOARD START--------------------------------------- 
    
    // ----- KEBOARD START -----
    let $inputObj = $(div.keyboard>input[type=text]);
    $inputObj.click(function(){
        console.log('input 객체 클릭되었습니다.');
    });
    $inputObj.focus(function(){
        console.log('input 객체 포커스 받았습니다.');
        $(this).css('color','blue');
    });
    $inputObj.keyup(function(event){
        alert('입력된 키 값:'+ event.key)
        if(event.key == 'Enter'){
        }
    });

    // ----- KEBOARD END -----

    //-----------KEYBOARD END--------------------------------------- 
    


    //-----------SUBMIT START--------------------------------------- 
    let $formObj = $('div.submit>form');

    let $textSubmitObj = $formObj.find('input[type=text]');  //form객체의 후손중 input[type=text]객체찾기
    let $btSubmitObj = $formObj.find('button');
    $btSubmitObj.click(function(){
        alert('폼의 서브밋이벤트가 발생했습니다.');
        if($textSubmitObj.val() == ''){
            alert('값을 입력하세요');
            // event.preventDefault(); //이벤트 전송을 못하도록 막아버리는 것  //공백값일 때는 전송안하고싶다
            return false; //Jquery용 콜백함수에서 return false하면 기본이벤트 처리금지 + 이벤트전파중지 
        }
    });


    //-----------SUBMIT END--------------------------------------- 

    //-----------a START---------------------------------------
    var $divAObj = $("div.aa");
    $divAObj.click(function(){
        $(this).css('background-color','yellow');
    });
    var $aObj = $("a");  //a태그가 하나밖에없어서 첫번째 a태그 찾음. 다른케이스에는 보다 자세히 찾기를 권장
    $aObj.click(function(event1){
        $(this).css('backgroun-color','green');
        return false; //전파를 중지한다 -> 버블링 중지 
    }); 
    //-----------a END---------------------------------------

    //시도 ~ 전송 숙제 

});                     