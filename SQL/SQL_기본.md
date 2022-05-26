# SQL기본

## **SELECT 구문의 구성 및 처리순서**

### SELECT 구문의 구성

**SELECT**                                    [ ]대괄호 처리된건 생략 가능한 요소 
**FROM  [JOIN  ON]**
**[WHERE]
[GROUP BY]
[HAVING]
[ORDER BY]**

### 처리순서

<aside>
💡 **FROM -> JOIN ON -> WHERE -> GROUT BY -> HAVING
l--------------------SELECTION---------------l
l--------------------행찾기 -------------------l
-> SELECT -> ORDER BY
l----PROJECTION------l
l----출력할 컬럼찾기—l**

</aside>

## 컬럼 별칭주기 및 결합하기

### 컬럼명 별칭주기 :

- 컬럼의 헤딩 바꾸기 --> 한칸띄우고 별칭주기         헤딩 바꾸는 이유는 보안처리때문

```sql
SELECT employee_id, first_name, last_name
FROM employees;`

SELECT employee_id 번호, first_name 이름, last_name 성
FROM employees;`

SELECT employee_id 사원 번호, first_name 사원 이름, last_name 성      ---공백이들어가면 못읽음
FROM employees;`

SELECT employee_id "사원 번호", first_name "사원 이름", last_name 성  ---공백을 주려면 ""로 묶기
FROM employees;`

SELECT employee_id "사원 번호", first_name "사원 이름",   --sal이 자동으로 대문자로 나옴
salary sal
FROM employees;`

SELECT employee_id "사원 번호", first_name "사원 이름",   --헤딩에 소문자주려면 ""로 묶기
salary "Sal"
FROM employees;`
```

### 컬럼값 결합하기 ||

‘’작은따옴표는 문자열이라는 뜻 

 ||가 자바에서의 + 느낌. 문자열 결합

오라클에서는 ""를 별칭줄때만 사용

ex) 

SELECT employee_id, first_name, last_name,
first_name ||'-'|| last_name
FROM employees;

*는 모든 컬럼을 사용한다. |는 OR을 의미

## 컬럼값 연산 및 연산자

## 컬럼값 연산하기

```sql
SELECT employee_id,
       salary 기본급,
       commission_pct 수당률,
       salary + salary * commission_pct 실급여,
       salary + salary * NVL(commission_pct, 0) 실급여2
FROM employees;
```

✔**null -> 아무값도 아니다.
✔null을 사칙연산에 참여시키면 null이 답으로 나옴**
NVL(A, B) -> A가 null이면 B를 반환 

## 조건에 만족하는 행찾기

```sql
SELECT employee_id, salary
FROM employees;

SELECT employee_id, salary
FROM employees
WHERE salary*12 >= 100000;  급여가 3000이상인 사원들의 사번, 급여출력

WHERE에는 조건이 들어감 -> 비교연산자가들어감 

SELECT employee_id, first_name, last_name
FROM employees
WHERE first_name = 'William';

SELECT employee_id, first_name, last_name
FROM employees
WHERE first_name <> 'William';

-급여가 10000이상이고 15000이하인 사원들의 사번, 이름, 부서번호, 급여를 출력하시오 
SELECT employee_id, first_name, department_ID, salary
FROM employees
WHERE salary >= 10000 and salary <=15000;

-30, 70, 80번 부서의 사원들 사번, 이름, 부서번호, 급여를 출력하시오 
SELECT employee_id, first_name, department_id, salary 
FROM employees
WHERE department_id = 30 or department_id = 70 or department_id = 80;

SELECT employee_id, first_name, department_id, salary 
FROM employees
WHERE department_id IN(30, 70, 80);    -- 30이거나 70이거나 80이거나 

-30, 70, 80번 부서의 사원 중 급여가 10000이상이고 15000이하인 사원들의 사번,이름 부서번호,급여 출력
SELECT employee_id, first_name, department_id, salary 
FROM employees
WHERE (department_id = 30 or department_id = 70 or department_id) = 80 or (salary >= 10000 and salary <=15000);

SELECT employee_id, first_name, department_id, salary 
FROM employees
WHERE department_id IN (30, 70, 80) AND salary BETWEEN 10000 AND 15000;

-- 30, 70, 80번 부서외의 사원중 급여가 10000미만이거나 15000초과인 사원들의 사번, 이름, 부서번호, 급여를 출력하시오
SELECT employee_id, first_name, department_id, salary 
FROM employees
WHERE department_id NOTIN (30, 70, 80)
```

## 연산자

- 산술연산자 : +, -, *, / 나머지값을 구하는 연산자는 없음(%대신 MOD라는 함수 사용)
- 비교연산자 : >, >=, <, <=, =, <>(같지않다) '같다'는 ==가 아닌 =임
- 논리연산자 : AND, OR, NOT &&아님 NOT는 반대
- BETWEEN연산자 이상 ~ 이하
- AND부터 연산하고 OR연산함. 우선순위.

### **LIKE연산자**

✔LIKE연산자는 퍼포먼스가 떨어짐 사용 지양하기 

- % : 0개 이상

      LIKE ‘김%’    → 김민규, 김태희, 김희, 김 등등 김으로 시작하는 문자 모두 검색됨 

- _  : 0 또는 1

      LIKE ‘김_’     → 김희, 김 만 검색됨. 김 다음에 오는 문자가 0개 혹은 1개여야만 검색됨.

 

- 사원이름에 ‘e’를 포함한 사원들의 사번, 이름을 출력하시오  LIKE사용

```sql
SELECT employee_id, first_name
FROM employees
WHERE first_name LIKE '%e%';
```

### 기타 방화벽 설정하기

- C:\oraclexe\app\oracle\product\11.2.0\server\bin
고급 보안이 포함된 windows defender 방화벽
인바운드 규칙 -> 새 규칙 -> 프로그램 -> 위의 주소
포트 -> 1521 -> 똑같이