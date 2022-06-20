$(function(){
    //로그인여부를 판단하기위한 Servlet요청 -----
    //응답형태{status:1} -> 이미로그인된 경우
    //          header>nav>a를 로그아웃
    // <a href="/back/logout">로그아웃</a>
    // <a href="productlist.html">상품</a>
    // <a href="viewcart.html">장바구니</a>
    //그 외의 응답형태    -> 로그인이 되지않은 상태 
    //          header>nav>a를 로그인, 가입
    // <a href="login.html">로그인</a>
    // <a href="signup.html">가입</a>
    // <a href="productlist.html">상품</a>
    // <a href="viewcart.html">장바구니</a>

    let url = '/back/loginstatus';
    let method = 'get';
    // let queryString = '{status} : 1';
    $.ajax({
        url : url,
        method : method,
        // data : queryString,
        success : function(jsonObj){
            let $navObj = $('header>nav');
            let $navObjHtml = '';
            if(jsonObj.status == 1){ //로그인 된 경우
                $navObjHtml += '<a href="/back/logout">로그아웃</a>';
            }else{ //로그인되지 않은 경우
                $navObjHtml += '<a href="login.html">로그인</a>';
                $navObjHtml += '<a href="signup.html">가입</a>';
            }
            $navObjHtml += '<a href="productlist.html">상품</a>';
            $navObjHtml += '<a href="viewcart.html">장바구니</a>';
            $navObj.html($navObjHtml);
        },
        error : function(jqXHR){
            alert('오류:' + jqXHR.status);
        }
    });
    
    //로그인여부를 판단하기위한 Servlet요청 -----

    //-----메뉴 객체들 찾기 --------------------
    let $menuObj = $('header>nav>a');
    //section의 첫번째자식요소인 article객체 찾기
    let $articleObj = $('section article:first'); //first()함수 써도 됨 
    //-----메뉴클릭 START --------------------
    //메뉴가 클릭되면 article영역의 innerHTML로 로드 
    // $menuObj.click(function(){  //수정전 a객체가 dom트리에 생성되어야만 사용 가능 
        $('header>nav').on('click', 'a', function(){ //메뉴객체가 없을때에도 등록하기 위해서 수정함 
        let url = $(this).attr('href');  //클릭된 객체의 href attribute를 url로 대입
        let title = $(this).html();
        $articleObj.load(url, function(responseText, statusText, xhr){
            if(statusText != 'success' ){
                // alert(xhr.status + ":" + xhr.statusText);  //404:error 
                if(xhr.status == 404){
                    let msg = title + '자원을 찾을 수 없습니다';
                    alert(msg);
                }
            }
            if(url == '/back/logout'){
                location.href="";  //현재페이지 다시로딩 
            }
        });
        return false;
    });
    //-----메뉴클릭 END ----------------------
});