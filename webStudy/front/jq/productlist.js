$(function(){           //'DOM트리가 완성되면' 이라는 뜻
    $.ajax({
        url:'http://localhost:8888/back/productlist',
        success: function(jsonObj){     //jsonObj는 배열형태,반복처리하면서 div.td객체를 DOM트리에서 찾아 복사 붙여넣기 
                                        //붙여넣기한 div.td객체의 하위객체중 img객체의 href속성값을 상품번호.jpg 
                                        //alt속성값을 상품명으로 설정 
                                        //json은 JS배열이기에 foreach가능하고 $붙여서 each를 사용해도 가능 
            let $tdObj = $('div.td');       
                                        
            $(jsonObj).each(function(index, item){
                console.log(item.prod_no + ":" + item.prod_name + ":" + item.prod_price);
                let $copyObj = $tdObj.clone();  //복제본을 만듦 
                let $imgObj = $copyObj.find("img");
                $imgObj.attr("src", "../images/" + item.prod_no + ".jpg");
                $imgObj.attr("alt", item.prod_name);
                $copyObj.find("li.prod_name").html(item.prod_name);
                $('div.table').append($copyObj); //append는 마지막 child로 추가하는 것  //붙여넣기
            });

            $tdObj.hide();
        },
        error: function(jqXHR){
            alert("오류:" + jqXHR.status); //JSON문자열을 잘못만들어 응답하면 200번 오류 -> backend문제 
        }
    });


    //1) 주소 url을 완전히 바꿔버릴 수 있음 -> ajax를 사용하는 것이 아님 
    //2) 특정영역 응답하게 
    //3) 기존내용 clear하고 응답하게 

    //div.table객체 찾기
    let $tableObj = $('div.table');
    //div.td객체들 찾기
    
    let $tdObj = $('div.td');
    //---------------div.td객체 클릭 START -----------------------
    $tableObj.on('click', 'div.td', function(){             //on은 위의 ajax비동기와 상관없이 진행되게 하는 것 
        let src = $(this).find('img').attr('src');  // ../images/C0001.jpg
        console.log('src', src);
        let arr = src.split('/');
        console.log('arr', arr);
        let prod_no = arr[arr.length-1].split('.')[0];//C0001.jpg
        console.log('prod_no', prod_no);
        // location.href = "http://localhost:8888/back/viewproduct?prod_no=" + prod_no;
        location.href = "/front/html/viewproduct.html?prod_no=" + prod_no;
        //상품 상세보기 
    });

    //---------------div.td객체 클릭 END -----------------------
}); 