$(function(){
    //-----메뉴 객체들 찾기 --------------------
    let $menuObj = $('header>nav>a');
    //section의 첫번째자식요소인 article객체 찾기
    let $articleObj = $('section>article:first'); //first()함수 써도 됨 
    //-----메뉴클릭 START --------------------
    //메뉴가 클릭되면 article영역의 innerHTML로 로드 
    $menuObj.click(function(){
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
        });
        return false;
    });
    //-----메뉴클릭 END ----------------------
});