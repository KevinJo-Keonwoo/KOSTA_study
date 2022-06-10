$(function(){
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
            //요청사항이 많거나 파일 업로드는 post로 전달 

        let url = "http://localhost:8888/back/jsp/signup.jsp";
        let data = {id:  , pwd :, name: , addr: };    //"id=id1&pwd=p1&name=n1~~~" 이렇게 길게 만드는 것은 비추천, 객체로 만들기 
        $.ajax({
            url: url,
            method:'post',
            data: data,
            success:function(responseText){

            },
            error: function(jqXHR){
                
            }


        });


        return false;  //막아둬야 url이동을 안하는 것 그래서 이것 계속살려둠 
    })


});