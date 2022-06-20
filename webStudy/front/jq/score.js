$(function(){
    let data = $('button');
    // let data = $("평점은");
    alert(data.html());
    $.ajax({
        url : "/back/jsp/score.jsp" ,
        method : 'post',
        data : data,
        success : function(){
            alert("데이터 전송 성공");
        },
        error : function(){
            alert("데이터 전송 실패");
        }

    });
    
    
    
    

});
