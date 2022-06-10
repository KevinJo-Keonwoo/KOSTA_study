window.addEventListener('load',function(){
    //----아이디저장 체크박스 객체 찾기 
    let cb = this.document.querySelector('input[type=checkbox]');

    //----로그인버튼객체 찾기
    let btLogin = this.document.querySelector('input[id=loginbt]')

    //----아이디 입력객체찾기
    let inputId = this.document.querySelector('input[name=id2]') //'input[name=id2]'

    //localStorage에 idValue이름이 item에 있다면
    //아이디 입력객체의 value로 설정하기 
    let idValue =  this.localStorage.getItem('idValue');
    if(idValue != null && idValue != ''){    //JS에서 문자열에서도 !=라고 씀 equals  메소드 없음 
        inputId.value = idValue;
    }

    //----로그인버튼 클릭 START
    //아이디저장 체크박스가 체크되었다면
    //사용자가 입력해준 ID값을 localstorage에 저장(이름 : idValue)
    //아이디저장 체크박스가 체크인되었다면
    //localstorage의 idValue이름의 item을 삭제
    btLogin.addEventListener('click', function(){
        if(cb.checked){
            localStorage.setItem("idValue", inputId.value);
        }else{
            localStorage.removeItem('idValue');
        }
    });



    //----로그인버튼 클릭 END
});