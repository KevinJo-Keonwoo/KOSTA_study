var arr = [1, 10, 3];
console.log(arr.length); //3
console.log(arr[0]); //1
for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}
arr.push(7) //배열에 값 넣어주기, 배열의 끝에 요소를 넣어줌 
for(var i=0; i<arr.length; i++){
    console.log('인덱스'+i, arr[i]);
}
var last = arr.pop(); //배열의 마지막 요소 제거, pop은 특이하게 반환값이 있음 
console.log('제거된 마지막요소값', last);
arr.forEach(function(item, index){ //3번째인덱스 array 는 생략가능
    console.log('인덱스'+index, item)  //for문과 결과 똑같음. 자바스크립트 전용 함수 
});

var leng = arr.unshift(9); //배열의 앞에 추가 9,1,10,3, //추가한 결과의 배열길이반환
console.log('추가된 후의 배열길이', leng); //4
arr.forEach(function(item, index){ 
    console.log('인덱스'+index, item)
});

var first = arr.shift(); //배열의 앞요소 제거 
console.log('제거된 처음요소값', first)
console.log(arr[0], arr[1], arr[2])

arr.splice(2, 0, 8);   //splice(끼워넣을 인덱스, 삭제할 문자 수, 끼워넣을 값)
arr.forEach(function(item, index){ 
    console.log('인덱스'+index, item)
});

var index = arr.indexOf(1); //1이라는 숫자의 인덱스값을 찾아줌  //존재하지 않는 값 입력 시 -1 반환
console.log('값1의 인덱스위치', index);

var arr2 = ['JAVA', 'HTML', 'CSS', 'JS']
var str = arr2.join();  //배열 내용을 모두 문자열로 만들어냄, 매개변수 생략하면 ','로 구분해줌
console.log(str);  //'JAVA', 'HTML', 'CSS', 'JS'


var str1 = 'HELLO';
var arr3 = str1.split(''); //문자열을 배열로 만듦
console.log(arr3);

var arr4 = str.split(','); //['JAVA', 'HTML', 'CSS', 'JS']
console.log(arr4);

arr.fore

