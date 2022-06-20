$(function(){
    //아이디저장 CHECKBOX localstorage처리 완성하세요(js/login.js내용참고)
    //--아이디 입력객체찾기
    let $inputId = $('input[name=id2]');

    //비밀번호입력 객체찾기
    let $inputPwd = $("input[name=pw2]");

    let $form = $('form');

    $form.submit(function(){
        // let url = 'http://localhost:8888/back/jsp/login.jsp';
        // let inputIdvalue, inputPwdValue;
        // inputIdvalue = $inputId.val(); //사용자가 입력해준 id값
        // inputPwdValue = $inputPwd.val(); //사용자가 입력해준 비밀번호 값 
        
        // let data = 'id=' + inputIdvalue + '&pwd=' + inputPwdValue;

        //1번방법 후속 
        // $('section>article:first').load(url, data, function(responseText, statusText, xhr){
        //     if(statusText != 'success'){   //응답이 안된경우, 응답오류인 경우 
        //         alert(xhr.status + ":" + xhr.statusText);
        //     }else{  //응답 성공인 경우 
        //         let jsonObj = JSON.parse(responseText); //(status:1)  responseText는 문자열을 반환 -> 이것을 json객체로 변환 가능 
        //         if(jsonObj.status == 1){ //로그인이 성공된 경우      //로그인 성공 시 다른 페이지로 가려고할 때는 load함수가 적합하지 않음 

        //         }else if(jsonObj.status == 2) { //로그인이 실패된 경우     
                    
        //         }
        //     }
        // });
        //
        // 1번 방법 -> load 사용 
        // $('section>article:first').load(
        // 'http://localhost:8888/back/login.html',
        // function(responseText, statusText, xhr){
        //     if(statusText = 'success'){
        //         alert(xhr.status + ":" + xhr.statusText);
        //     }
        // });
        //

        //2번방법 후속 
        let url = 'http://localhost:8888/back/login';
        let inputIdvalue, inputPwdValue;
        inputIdvalue = $inputId.val(); //사용자가 입력해준 id값
        inputPwdValue = $inputPwd.val(); //사용자가 입력해준 비밀번호 값 
        
        let data = 'id=' + inputIdvalue + '&pwd=' + inputPwdValue;
        $.ajax({
            url: url, //url : url, 만해도 됨 
            method: 'post',
            data: data,
            // success: function(responseText){  //text/html로 응답할시 이줄과 아랫줄 사용 
            //     let jsonObj = JSON.parse(responseText);
            success : function(jsonObj){         //서블릿에서 apllication/JSON으로 할때 이걸 사용 
                if(jsonObj.status == 1){ //로그인 성공
                    location.href = '';  //현재 사용중인 주소(메인)     // 'http://localhost:8888/front/html/css_js_layout.html'; 이렇게 풀url해도됨 
                }else{ //로그인 실패
                    alert('로그인 실패');
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert(jqXHR.status + ":" + jqXHR.statusText);
            }
        });

        // 2번방법 -> ajax사용 
        // $.ajax({
        //     url: 'http://localhost:8888/back/login.html', //url : url, 만해도 됨 
        //     method: 'post',
        //     data: '',
        //     success: function(responseText){

        //     },
        //     error: function(jqXHR, textStatus, errorThrown){
        //         alert(jqXHR.status + ":" + jqXHR.statusText);
        //     }
        // });
        return false; //event.preventDefault(); + event.stopPropagation();
    });
    //로그인이 실패됐을 때 alert창을 띄워주기      form의 post를 막아버리고 ajax 
})