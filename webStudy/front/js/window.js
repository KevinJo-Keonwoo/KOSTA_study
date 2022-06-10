function displayTime(element){
    var today = new Date();
    var month = today.getMonth()+1;
    var date = today.getDate();

    var now = '<h1>';
    now += today.getFullYear();      //연도를 얻어올 수 있음 
    now += '-';
    // now += today.getMonth()+1;      //month가 0부터 시작하기 때문에 1 더해줌 -> 위에 변수로 빼주기로 함  
    now += month<10?'0'+month:month;      
    now += '-';
    // now += today.getDate();      
    now += date<10?'0'+date:date;      
    now += '-';
    now += today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    now += '</h1>';
    element.innerHTML = now;
}

window.addEventListener('load', function(){
    var windowID;
    var btClose = this.document.querySelector('button.close');  //이후에 옮긴것 
    //------새창 띄우기 버튼 클릭 START --------------------------------------
    var btOpen = 
    this.document.querySelector('button.open')
    btOpen.addEventListener('click', function(){
        var url = 'js_popup.html'; 'http://www.google.com';                  //보여줄 URL
        var target = 'first';                               //타깃설정 -> 클릭시마다 새로운 창을 오픈하지 않게 함 -> 현재창 타깃
        var features = 'width=300px, height=300px';         //새 창 크기 설정 
        windowID = window.open(url, target, features);

        this.style.display = 'none' ; //새창띄우기버튼 사라진다
        btClose.style.display = 'inline';//새창닫기버튼 보여진다 버튼의 기본요소는 inline요소 
    });
    //------새창 띄우기 버튼 클릭 END --------------------------------------

    //------새창 닫기 버튼 클릭 START --------------------------------------
    // var btClose = this.document.querySelector('button.close');
    btClose.addEventListener('click',function(){
        windowID.close();      //새창을 닫으려면 새창을 변수로 받아와서 close()해야함 

        this.style.display = 'none'; //클릭하면 새창닫기 버튼 사라져라~
        btOpen.style.display = 'inline'; //그리고 다시 새창열기 버튼 나타나라  --> 토글이라고 함 
    });
    //------새창 닫기 버튼 클릭 END --------------------------------------
    
    //------5초후 버튼 클릭 START --------------------------------------
    var btTimeout = this.document.querySelector("button.timeout");
    btTimeout.addEventListener('click',function(){
        window.setTimeout(function(){
            alert('5초가 지났습니다');
        }, 5*1000);  //첫번째 인자는 callbackfunction(handler), 두번째 인자는 밀리세컨드단위   
    });
    //------5초후 버튼 클릭 END --------------------------------------
    
    //------현재시간값 출력 START --------------------------------------
    var divObj = this.document.querySelector('div');

    /* 이 함수가 1초간격에서도 쓰이기에 함수로 만들려고 함 -> displayTime
    var today = new Date();
    var month = today.getMonth()+1;
    var date = today.getDate();

    var now = '<h1>';
    now += today.getFullYear();      //연도를 얻어올 수 있음 
    now += '-';
    // now += today.getMonth()+1;      //month가 0부터 시작하기 때문에 1 더해줌 -> 위에 변수로 빼주기로 함  
    now += month<10?'0'+month:month;      
    now += '-';
    // now += today.getDate();      
    now += date<10?'0'+date:date;      
    now += '-';
    now += today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    now += '</h1>';
    divObj.innerHTML = now;
    */

    displayTime(divObj); //divObj를 사용하기 위해 인자로 전달  
    //------현재시간값 출력 END -------------------------------------

    //------1초간격 버튼 클릭 START --------------------------------------
    var intervalID;
    var btInterval = this.document.querySelector('button.interval');
    btInterval.addEventListener('click', function(){
        // 1)
        // window.setInterval(function(){      //setInterval(displaytime,1000) 으로 작성해도 가능함 이름있는 함수는 display()로 작성하면 안됨 
        //     displayTime(divObj);
        // },1000); //밀리세컨드단위
        // 2) 더 바람직 
        intervalID = window.setInterval(displayTime, 1000, divObj)
    });    
    //------1초간격 버튼 클릭 END --------------------------------------
    
    //------1초간격 버튼 해제 START --------------------------------------
    var btClear = this.document.querySelector('button.clear');
    btClear.addEventListener('click', function(){
        window.clearInterval(intervalID);
    });

    
    //------1초간격 버튼 해제 END --------------------------------------

    /* 
    1. 부모창의 DOM조작
    2. 팝업창 닫기 

    */


});