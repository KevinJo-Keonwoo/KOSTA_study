$(function(){
    alert(window.location.search); //주소 URL의 querystring의 값을 알려주는 기능 
    let queryString = location.search.substring(1);
    $.ajax({//jsp에서 사용한 방식은 jsp페이지로 이동하는 방식,이동하지 않고 JSON으로 응답하게 하기. 응답받은것을 span에 보여주기
        url: "/back/viewproduct",
        method: 'get',
        // data: 'prod_no=' + 'C0001',
        data : queryString, 
        success: function(jsonObj){
            if(jsonObj.status == 1){
                let prod_no = jsonObj.p.prodNo;
                let prod_name = jsonObj.p.prodName;
                let prod_price = jsonObj.p.prodPrice;
                let prod_mfd = jsonObj.p.prodMfd;
                let prod_info = jsonObj.p.prodInfo;
                
                //:
                
                $('div.viewproduct>img').attr('src', '../images/' + prod_no + '.jpg').attr('alt', prod_no );
                $('div.viewproduct ul>li>span.prod_no').html(prod_no);
                $('div.viewproduct ul>li>span.prod_name').html(prod_name);
                $('div.viewproduct ul>li>span.prod_price').html(prod_price);
                $('div.viewproduct ul>li>span.prod_mfd').html(prod_mfd);
                $('div.viewproduct ul>li>span.prod_info').html(prod_info);
            }else{
                alert(jsonObj.msg);
            }
        },
        error: function(jqXHR){
            alert('오류:' + jqXHR.status);
        }
    });
    //이미지, 제조정보, 상세 



    //----------------장바구니 보기 버튼 START -------------------------
    let $btViewCart = $("section>div>article>div>div>ul>li>button");
    let prod_no = $("section>div>article>div>div>ul>li>span.prod_no");
    let quantity = $("section>div>article>div>div>ul>li>input[name=quantity]");
    let data = {prod_no:prod_no, quantity:quantity}   //??  JSON문자열인경우 프로퍼티 앞뒤에 ""를 붙여야됨. 
                                                    // JS객체 프로퍼티인 경우 이런식으로 ""없이 사용할 수 있음 

    $btViewCart.click(function(){
        $.ajax({
            url : "/back/addcart",  //이런요청 할 서블릿 주소 
            method : "get",
            data : data,
            success : function(){
                $("section>div>article>div.result")
            },
            error : function(jqXHR){
                alert('오류:' + jqXHR.status);
            }
        });
        return false;
    }); 
    //----------------장바구니 보기 버튼 END -------------------------
});
