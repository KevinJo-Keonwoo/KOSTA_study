# JS특징

- JS에서 변수를 사용할때, 객체 내의 프로퍼티인경우 반드시 this.를 이용하여 사용해야함
- 자바에서는 생략이 가능했으나 JS에서는 생략하면 안되므로 유의할 것.

```jsx
//변수를 사용할 때 객채 내의 프로퍼티면 반드시 this. 를 사용해야함
//자바에서는 생략 가능했는데 JS에서는 생략하면 안됨.
var customer = {
    id:'id1',
    name:'조건우',
    info: function(){
        console.log(this.id, this.name);
    }
};
```

- JS에서는 for블럭 또는 if블럭으로 변수 영역이 구분되지 않음.
- 함수영역으로 변수 구분함 .. 아마 {} 기준일듯? → 확인 필요

```jsx
for(var i=0; i<5 ; i++){
    console.log(i);
}
console.log(i);
console.log(i);
//i를 for문 밖에서도 사용할 수 있음

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
```

```jsx
var a = 'window객체의 변수';
console.log(window.a); //아래와 동일
console.log(a); //window. 생략하고 a만해도 window기본객체에 선언하는 것과 같음
```