$(function(){
    $zipAddr = $('div[name=zip]');
    $zipAddr.click(function(){
        alert($(this).html());
        let data = $zipAddr.html()
        let url = "http://localhost:8888/front/html/signup.html"
        $.ajax({
            url: url,
            method: 'get',
            data: data,
            success: function(responseText){
                let jsonObj = JSON.parse(responseText);
                alert(jsonObj.msg);
            },
            error: function(jqXHR){
                alert('에러코드:' + jqXHR.status);
            }
        });
        return false;
    });

    $zipAddr2 = $('div[name=addr]');
    $zipAddr2.click(function(){
        alert($(this).html());
        let data = $zipAddr2.html();
        let url = "http://localhost:8888/front/html/signup.html"
        $.ajax({
            url: url,
            method: 'get',
            data: data,
            success: function(responseText){
                let jsonObj = JSON.parse(responseText);
                alert(jsonObj.msg);
            },
            error: function(jqXHR){
                alert('에러코드:' + jqXHR.status);
            }
        });
        return false;
    });

//hover pointer cursor



});