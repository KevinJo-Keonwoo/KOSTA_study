console.log('연습시작');
console.log(1+'2');
console.log('2'+1);
// alert("연습중");

var c;
c = function(p){
    console.log("매개변수p=" + p);
    if(typeof(p) == 'function'){
        p();  //
    }
}
c(function(){
    console.log("콜백함수입니다");
});

var arr = [1, 10, 3, 4, 5, 6, 7, 8, 9];
var last = arr.pop(); //배열의 마지막 요소 제거, pop은 특이하게 반환값이 있음 
console.log('제거된 마지막요소값', last);
arr.forEach(function(item, index){ //3번째인덱스 array 는 생략가능
    console.log('인덱스'+index, item)  //for문과 결과 똑같음. 자바스크립트 전용 함수 
});

var arr2 = ["조건우", "전승현", "황초연", "한미래"];
arr2.forEach(function(name){
    console.log(name)
})

arr2.splice(2, 0, "오문정");
console.log(arr2);

var a = arr2.join();
console.log(a);

var str1 = 'HELLO';
var arr3 = str1.split(''); //문자열을 배열로 만듦
console.log(arr3);
//['H', 'E', 'L', 'L', 'O']