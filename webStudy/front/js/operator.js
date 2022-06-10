/*
산술연산자 : +, -, *, /, %
대입연산자 : =, +=, -=, *=, /=, %=
비교연산자 : >, >=, <, <=, ==, != ===, !== 
논리연산자 : &&, ||, !
삼항연산자 : ? :
단항연산자 : ++, --
*/
//산술연산자
var a, b, c;
a=3;
b=4;
c=a/b;  //java와 다르게 정수를 정수로 나누어도 실수가 나올 수 있다. //0.75
console.log(c);

b=0;
c=a/b;  //Infinity
console.log(c);
console.log(++c); //Infinity


b=undefined;
c=a/b;  //Nan
console.log(c);

//+ : 산술연산자, 문자열결합연산자 : 문자열결합우선순위가 더 높음, 숫자가 문자로 자동형변환
console.log(1+'2');   // 1이 숫자에서 문자로 자동 변환됨
console.log('2'+1);   

//형변환 : 숫자, 문자형, 논리형 
console.log(true+'2'); //문자열결합연산자 'true2'
console.log(true+2); //산술연산자 true는 1로 자동형변환 //3
console.log(1-'2'); //-1
console.log(1-true); //0 
console.log('2'-true); //1

//강제형변환
console.log(typeof(Number('2')));
console.log(typeof(String('2')));
console.log(typeof(Number('2.345')), Number('2.345')); //Number은 그대로 출력해주고 
console.log(typeof(parseInt('2')),parseInt('2.345')); //parseInt는 정수형으로 출력해준다 
console.log(typeof(parseFloat('2.345')),parseFloat('2.345')); //parseFloat를 쓰면 실수값을 정확히 반환해줌 

//비교연산자
console.log(2 == '2', 2 === '2'); //true -> 자동형변환을 한 후 비교하기 때문에 같아짐. ===을쓰면 자료형까지 비교해줌 -> false 
console.log(0 == false, 0 === false); //true, false



