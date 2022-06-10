//1.문서의 끝까지 해석후 DOM트리가 완성되고 화면에 렌더링할 준비가 되면
//window객체의 load이벤트가 발생한다

//DOM트리작성이 완료될때까지 기다림
//window객체의 load이벤트발생을 감시했다가 
//이벤트가 발생하면 function()이 자동호출됨
window.addEventListener("load", function(){
    //DOM트리의 type속성이 text인 input객체찾기
    var txtObj = document.querySelector("input[type=text]");

    //DOM트리의 button객체찾기
    var btObj = document.querySelector("button");
   
    //button객체의 click이벤트가발생했을때 function()이 자동호출
    btObj.addEventListener("click", function(){
        alert('클릭되었습니다');
        txtObj.value = '클릭되었습니다';
    });
});
