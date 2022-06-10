/*
아무것도 없이 선언하면   재선언이 가능함, window객체 scope에 선언, 호이스팅 가능, 
var로 선언하면          재선언이 가능함, window객체 Scope에 선언, 호이스팅 가능, 함수 내부에 선언하면 함수 scope에 선언
let로 선언하면          재선언이 불가능, block scope에 선언,     Hoisting 불가능
*/

var a = 10;  //window에 선언한 것과 같은 효과 
var a = 'hello';
console.log(window.a);//hello
var f1 = function(){
    var lv = true; //함수 scope에 선언 
    aa = true; //window객체 scope에 선언
    a = true; //window객체 scope에 선언
    var f2 = function(){
        aaa = true;
    }
    f2();
}
f1();
// console.log(lv); //함수 scope에 선언된 변수 lv를 사용하려고 하면 사용 불가임
console.log(window.aa, aa); //aa는 var이없이 함수 내부에 선언되었기에 window객체에 선언된 것 -> 사용 가능 //true true 
console.log(window.aaa, aaa); //true 
console.log(window.a); //함수영역에서 쓰인 a가 var a를 덮어씀. true

// let b = 10;
// let b = 'hello';
// console.log(b); //재선언불가 error
let b = 10;  //window에 내장된 변수가 아님 
console.log(window.b);//undefined
let f2 = function() {
    let bb = false; //함수 scope에 선언 
    let b = false;
}
f2();
// console.log(bb); //error
console.log(b); //10 let은 영역이 명확하게 분리가 됨 

//hoisting : 사용먼저하고 선언을 나중에 하는 방법
aaaa = new Date();
console.log(aaaa);
var aaaa;

bb = new Date(); //hoisting불가 
console.log(bb);
let bb;