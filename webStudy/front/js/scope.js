var a = 'window객체의 변수';
console.log(window.a); //아래와 동일
console.log(a); //window. 생략하고 a만해도 window기본객체에 선언하는 것과 같음  

for(var i = 0; i <3; i++){
    console.log(i); //0, 1, 2
}
console.log(i); //3  for문밖에서도 i사용 가능 
console.log(window.i); //3  
//JS는 for블럭 또는 if블럭으로 변수 영역이 구분되지 않음 
//함수영역으로 변수구분함 

var b = function(){
    var lv1 = 'outer local variable';
    console.log(a); //'window객체의 변수'
    var lv2 = function(){
        var inner = 'inner local variable'
        console.log(lv1); //outer function variable
    }
    // console.log(inner); //error
}


// console.log(lv1); //error
b();





