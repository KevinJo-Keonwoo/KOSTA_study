# JavaScript 개요

1. Inline Script 
- 코드 내부에 “이벤트 종류별 속성 = 스크립트값” 형식으로 넣음
1. Inner Script 
- 직접 Script 태그를 만들어 Head에서 작성함
1. Outer Script 
- 외부에 JS만들어 헤드태그에 연결 설정

```jsx
<script src = "외부js파일명 및 경로 "></script>
```

- 유지보수가 용이한 Outer Script사용을 권장함

### JS 처리순서

좌 → 우, 위 → 아래 순으로 실행됨 

서버와 연결할 때 응답하는 자료에 META태그(UTF-8)가 있어야 응답할 수 있음 

태그 없으면 기본 인코딩으로 실행됨 

### 변수

var 변수;  형식으로 변수 선언, 변수의 자료형을 따로 부여하지는 않음

변수에 함수를 대입할 수 있음. 

```jsx
a = function(){};
console.log(typeof(a));
```

객체 선언 (Object)

```jsx
a = {};
console.log(typeof(a));
```

### 콜백함수

함수의 인자로 함수가 사용되는 경우