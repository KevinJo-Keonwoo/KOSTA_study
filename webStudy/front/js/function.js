//함수가 변수에 대입되는 것

var a;
a = function(){ //함수구현
    alert("함수1");   //경고창을 띄움
};
// a(); //함수 호출

var b;
b = a;
// b();

var c;
c = function(p){
    console.log("매개변수p=" + p);
    if(typeof(p) == 'function'){
        p();  //함수호출, 밑에 c에서 매개변수로 a를 넣었기에 a가 한번 더 호출
    }
}
var str = 'hello';
c(str);
var num = 999;
c(num);
// c(a); //a의 내용이 출력됨 주석 포함 

c('hello');
c(function(){
    console.log("콜백함수입니다");
});

d = function(p1, p2, p3){
    if( typeof(p1) == 'function'){
        p1(p2,p3);
    }
} //여기에 ; 반드시 안써줘도됨

d(function(a, b){
    console.log(a, b, a+b);
}, 1, 2)
//1,2,3이 출력 

// 1번방식
// d(function(a,b){
//     for(var i=a; i<=b; i++){
//         console.log(i);
//     }
// }, 1, 10);
// 2번방식
// d = function(p1, p2, p3){
//     if( typeof(p1) == 'function'){
//         for(var i=p2; i<=p3; i++){
//             p1(i);
//         }
//     }
// }

//매개변수와 인자의 개수
var e = function(p1, p2){
    console.log(p1, p2);
}
e(1,2);     //1,2
e(1);       //1,undefined    p2는 undefined자료가 됨 
e(1, 2, 3); //1, 2      3값은 무시 

//반환값
var f = function(){
    return true;
}

var f1 = f();
if(f1) {
    console.log('f함수의 반환값은 true입니다');
}
var f2 = f();
console.log(5+f2); //5+true -> 5+1 -> 6

var g = function(){
    console.log("반환값 없는 함수입니다");
}
var g1 = g();
console.log('g함수의 반환값 :', g1); //undefined

//--------------------------
//outer-inner function
var h = function(){
    var lv1 = '지역변수1';
    var lv2 = function(){
        var inner = '지역변수2'; 
        console.log('lv2함수내부에서 lv1', lv1) //지역변수1
        console.log('lv2함수내부에서 inner', inner) //지역변수2
    }
    lv2();
    console.log('h함수내부에서 lv1', lv1) //지역변수1
    //console.log('h함수내부에서 inner', inner) //outer함수에서 inner변수 사용 불가 
}
h();