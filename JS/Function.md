# Function

### 함수

```jsx
var a;
a = function(){       //함수구현
    alert("함수1");   //경고창을 띄움
};
a(); //함수 호출 -> 경고 1회 나옴 

var b;
b = a;
b();  -> 경고 2회 나옴 

var c;
c = function(p){
    console.log("매개변수p=" + p);
    if(typeof(p) == 'function'){
        p();  //함수호출, 밑에 c에서 매개변수로 a를 넣었기에 a가 한번 더 호출->3회
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

```

```jsx
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
```

- 위 함수의 동작 구조
1. 변수 c가 선언 
2. 변수 c에 함수를 생성해서 대입. 그 함수의 기능은
    1. console.log(”매개변수p=” + p) 에 매개변수 p를 대입
    2. 매개변수 p의 자료형이 function인 경우 매개변수의 함수를 호출 
3. 2에서 생성된 함수 c에 function() {console.log(”콜백함수입니다”)}; 를 매개변수로 대입 
4. 매개변수p=function() {console.log(”콜백함수입니다”)}; 를 출력 
5. 3에서 대입한 매개변수는 function자료형이기에 p를 호출하여 “콜백함수입니다” 출력 

```jsx
d = function(p1, p2, p3){
    if( typeof(p1) == 'function'){
        p1(p2,p3);
    }
} //여기에 ; 반드시 안써줘도됨

d(function(a, b){
    console.log(a, b, a+b);
}, 1, 2)
//1,2,3이 출력 
```

- 위 함수의 동작 구조
1. 변수 d에 함수에 매개변수 p1, p2, p3을 가지는 함수 생성하여 대입함
2. p1 매개변수의 자료형이 function인 경우 해당 p1함수에 매개변수로 p2, p3을 대입
3. 2에서 생성된 함수 d에 function(a,b) {console.log(a, b, a+b)}라는 값을 p1으로 대입해주고
2 와 3을 각각 p2, p3으로 대입해줌 
4. p1의 값은 함수이니 p1함수에 p2, p3값을 대입해줌. 
5. p1함수는 1, 2, 3을 각각 출력 

### 매개변수와 인자의 개수

```jsx

//매개변수와 인자의 개수
var e = function(p1, p2){
    console.log(p1, p2);
}
e(1,2);     //1,2
e(1);       //1,undefined    p2는 undefined자료가 됨 
e(1, 2, 3); //1, 2      3값은 무시 
```

- 매개변수보다 인자가 부족한 경우 부족한 값은 → undefined
- 인자가 더 많은 경우 → 더 많은 인자는 입력되지 않음, 무시됨

```jsx
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
-> 반환값 없는 함수를 변수에 담아 출력할 경우 undefined가 됨 

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
```