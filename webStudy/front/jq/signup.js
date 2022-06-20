$(function(){
    //아이디입력객체찾기
    let $inputId = $('input[name=id1]')

    //가입버튼객체찾기
    let $btSubmit = $('input[type=submit]');
    
    //--아이디중복확인버튼 클릭 START--
    let $btIdupchk = $('input[value="아이디중복확인"]');
    $btIdupchk.click(function(){
        $.ajax({
            url: 'http://localhost:8888/back/iddupchk',
            method : 'get',
            data : {id: $inputId.val()},
            success: function(jsonObj){
                if(jsonObj.status == 1){ //사용가능한 아이디인경우
                    $btSubmit.show(); 
                }else{
                    alert(jsonObj.msg);
                }
                
            },
            error: function(jqXHR){
                alert('오류:' + jqXHR.status);
            }
        })
        //submit과 달리 button은 기본이벤트를 처리하지 않기에 return false를 작성해주지 않아도 됨 
        
    })
    //--아이디중복확인버튼 클릭 END--    
    //--아이디입력란에 포커스 START--
    // let $inputId = $('input[name=id1]');
    $inputId.focus(function(){
        $btSubmit.hide();
    });
    //--아이디입력란에 포커스 END--
    
    //--우편번호 & 주소 입력 START-----
    let popupWidth = 500;
    let popupHeight = 300;
    let popupX = (window.screen.width)/2 - popupWidth;
    let popupY = (window.screen.height)/2 - popupHeight;
    

    let $btPostnum = $('input[value="우편번호찾기"]');
    $btPostnum.click(function(){
        window.open("../html/searchzip.html", '_blank', 'width=' + popupWidth + ', height=' + popupHeight + ', left=' + popupX + ', top=' + popupY);
    })

    
    
    
    //--우편번호 & 주소 입력 END-----

    //--폼 전송 START --  
    //가입버튼 클릭이벤트 발생 -> 폼서브밋이벤트 발생 -> 기본처리(전송) 
    //폼객체찾기
    let $form = $('form');
    $form.submit(function(){
        //비밀번호 일치확인 
        let $pwd = $('form>div input[name=pw1]');
        let $pwd1 = $('form>div input[name=pw2]');;
        if($pwd.val() != $pwd1.val()){
            alert('비밀번호가 일치하지 않습니다');
            $pwd.focus();
            return false;
        }
        // return false;

        // let idValue = $('input[name=id1]').val()  //아이디입력값  //비번은 $pwd.val()
        // let nameValue = $('input[name=name1]').val()  //이름입력값
        // let addrValue = $('input[name=addr]').val()  //주소입력값
        // let bulidingnoValue = $('input[name=buildingno]').val()  //건물번호값
        //     //요청사항이 많거나 파일 업로드는 post로 전달 

        let url = "http://localhost:8888/back/signup";
        let data = $(this).serialize();

                  /*{id:idValue, //이렇게 객체로 만듨 수 있으나 이것도 너무 긺
                    pwd:$pwd.val(), 
                    name:nameValue, 
                    addr:addrValue, 
                    bulidingno:bulidingnoValue}; */   //"id=id1&pwd=p1&name=n1~~~" 이렇게 길게 만드는 것은 비추천, 객체로 만들기 
        // alert(data);
        $.ajax({
            url: url,
            method:'post',
            data: data,
            // success:function(responseText){
            //     let jsonObj = JSON.parse(responseText);   //JSON으로 실험하기위해 두줄 주석처리 
            success:function(jsonObj){
                alert(jsonObj.msg);
            },
            error: function(jqXHR){
                alert('에러코드:' + jqXHR.status);

            }
        });


        return false;  //막아둬야 url이동을 안하는 것 그래서 이것 계속살려둠 
    })
    //—폼 전송 END—

});