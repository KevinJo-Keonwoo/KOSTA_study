$(function(){
    $zipAddr = $('div[name=link]');
    $zipAddr.click(function(){
        // window.opener.parent.location.reload();
        $("#addr", parent.opener.document).val($(this).children('div[name=zip]').html());
        $("#addr2", parent.opener.document).val($(this).children('div[name=addr]').html());
        window.self.close();
        // let data = $sendData;
        // let url = "http://localhost:8888/front/html/signup.html";
        return false;
    });

    // $zipAddr2 = $('div[name=addr]');
    // $zipAddr2.click(function(){
    //     alert($(this).html());

    //     $("#addr2", parent.opener.document).val($(this).html());
    //     // let data = $sendData2;
    //     // let url = "http://localhost:8888/front/html/signup.html";
    //     // $.ajax({
    //     //     url: url,
    //     //     method: 'get',
    //     //     data: data,
    //     //     success: function(responseText){
    //     //         // let jsonObj = JSON.parse(responseText);
    //     //         // alert(jsonObj.msg);
    //     //     },
    //     //     error: function(jqXHR){
    //     //         alert('에러코드:' + jqXHR.status);
    //     //     }
    //     // });
    //     return false;
    // });

//hover pointer cursor



});