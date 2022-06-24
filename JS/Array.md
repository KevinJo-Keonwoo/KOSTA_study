# Array

아주짜증나는…배열 

배열 선언

```jsx
var arr = [1, 10, 3];
console.log(arr.length); //3
console.log(arr[0]); //1
for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}
```

- push(값) : 배열에 값 넣어주기, 배열의 끝에 값이 들어감

```jsx
arr.push(7) //배열에 값 넣어주기, 배열의 끝에 요소를 넣어줌 
for(var i=0; i<arr.length; i++){
    console.log('인덱스'+i, arr[i]);
}
```

- pop(): 배열의 맨 끝값 제거, 특이하게 반환값이 있음 →변수에 담김

```jsx
var arr = [1, 10, 3];
var last = arr.pop(); //배열의 마지막 요소 제거, pop은 특이하게 반환값이 있음 
console.log('제거된 마지막요소값', last);
arr.forEach(function(item, index){ //3번째인덱스 array 는 생략가능
    console.log('인덱스'+index, item)  //for문과 결과 똑같음. 자바스크립트 전용 함수 
});
```

- forEach(콜백함수(배열각각의 값, 배열의index, (배열그자체생략가능))
- 주어진 함수를 배열 요소 각각에 대해 실행함.
- 아래와 같이도 사용 가능

```jsx
var arr2 = ["조건우", "전승현", "황초연", "한미래"];
arr2.forEach(function(name){
    console.log(name)
})
//-> 조건우, 전승현, 황초연, 한미래 각각 1줄씩 출력 
```

- unshift(값) : 배열의 맨 앞에 값 추가
- shift() : 배열의 맨 앞요소 제거

```jsx
var leng = arr.unshift(9); //배열의 앞에 추가 9,1,10,3, //추가한 결과의 배열길이반환
console.log('추가된 후의 배열길이', leng); //4
arr.forEach(function(item, index){ 
    console.log('인덱스'+index, item)
});

var first = arr.shift(); //배열의 앞요소 제거 
console.log('제거된 처음요소값', first)
console.log(arr[0], arr[1], arr[2])
```

- splice(값을 추가할 인덱스, 삭제할 문자 수, 추가할 값)        인덱스는 0부터 시작
- 인덱스 2인 경우 2번인덱스 값 뒤에 추가됨

```jsx
arr.splice(2, 0, 8);   //splice(끼워넣을 인덱스, 삭제할 문자 수, 끼워넣을 값)
arr.forEach(function(item, index){ 
    console.log('인덱스'+index, item)
});

arr2.splice(2, 0, "오문정");
console.log(arr2);
// ['조건우', '전승현', '오문정', '황초연', '한미래']
```

- indexOf(값) : 값의 인덱스값을 찾아줌.
- 존재하지 않는 값 입력 시 -1을 반환함

```jsx
var index = arr.indexOf(1); //1이라는 숫자의 인덱스값을 찾아줌  //존재하지 않는 값 입력 시 -1 반환
console.log('값1의 인덱스위치', index);
```

- join() : 배열 값을 모두 문자열로 반환함
- 매개변수 생략 시 ‘,’로 구분해줌

```jsx
var arr2 = ['JAVA', 'HTML', 'CSS', 'JS']
var str = arr2.join();  //배열 내용을 모두 문자열로 만들어냄, 매개변수 생략하면 ','로 구분해줌
console.log(str);  //'JAVA', 'HTML', 'CSS', 'JS'

var a = arr2.join();
console.log(a);
// 조건우,전승현,오문정,황초연,한미래
```

- 배열로만들 문자열.split(구분할 기준) : 문자열을 배열로 만듦

```jsx
var str1 = 'HELLO';
var arr3 = str1.split(''); //문자열을 배열로 만듦
console.log(arr3);
//['H', 'E', 'L', 'L', 'O']

var arr4 = str.split(','); //['JAVA', 'HTML', 'CSS', 'JS']
console.log(arr4);
```