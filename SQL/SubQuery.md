# SubQuery

# 서브쿼리

## 위치에 따라 구분

### Scalar Query

- SELECT절의 subquery

### Inline View : 이름없는 뷰

- FROM절의 subquery

### SubQuery

- WHERE절의 subquery (주로 서브쿼리라함은 이것을 지칭)

ex) 

SELECT

FROM

WHERE 컬럼 비교연산자(SELECT ~)

## 반환행수에 따라 구분

### 단일행 서브쿼리

메인쿼리와 비교시 일반 비교연산자 사용

### 다중행 서브쿼리

메인쿼리와 비교시 ANY, ALL, IN연산자 사용 

최대급여를 출력하시오

```sql
SELECT MAX(salary) FROM employees;
```

최대급여를 받는 사원의 사번, 급여를 출력하시오 

```sql
SELECT employee_id, MAX(salary)
FROM employees;
--이렇게 사용하면 에러 발생 -> employee_id가 GROUP BY가 되지 않았음 
```

1) 최대급여값을 출력한다

2) 1)과 같은 급여를 받는 사원의 사번, 급여를 출력한다 

```sql
SELECT employee_id, MAX(salary)
FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees);
```

- 서브쿼리부터 계산 → 24000
- 이후 salary = 24000 인것만 가져오는 메인쿼리 진행
- WHERE절에서 사용된 단일행 서브쿼리

부서별 최대 급여를 출력하시오

```sql
SELECT MAX(salary)
FROM employees
GROUP BY department_id;
```

부서별 최대급여를 받는 부서번호, 사번, 급여 출력하시오

```sql
SELECT  department_id, employee_id, MAX(salary)
FROM employees
GROUP BY department_id;
--불가능 
```

1) 부서별 최대급여를 출력한다.

2) 1)과같은 급여를 받는 사원의 사번, 급여를 출력하시오

```sql
SELECT employee_id, salary
FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees GROUP BY department_id);
-- '='는 단일행서브쿼리에서만 사용 가능하기에 오류 발생 
--오류명 "single-row subquery returns more than one row"

SELECT employee_id, salary
FROM employees
WHERE salary IN (SELECT MAX(salary) FROM employees GROUP BY department_id);
--이렇게 진행해야됨 
--
```

- IN 연산자는 ‘=ANY’ 와 같은의미

```sql
SELECT employee_id, salary
FROM employees
WHERE salary > ANY (SELECT MAX(salary) FROM employees GROUP BY department_id)
ORDER BY salary;

SELECT employee_id, salary
FROM employees
WHERE salary < ANY (SELECT MAX(salary) FROM employees GROUP BY department_id)
ORDER BY salary;
```

- >any 의 뜻은 어떤것보다도 크다, 어떤것은 최소값 → 최솟값보다 크면 모두 출력
- <any 의 뜻은 어떤것보다도 작다. 어떤것은 최댓값 → 최댓값보다 작다. 
이 경우 24000보다 작은 모든 값 출력 → 부서별 최대급여가 아닌 모든 값
- >ALL 최댓값보다 크다
- <ALL 최솟값보다 작다

![Untitled](SubQuery%20ca041eca05a24f72962a38e550745757/Untitled.png)

```sql
SELECT employee_id, salary
FROM employees
WHERE salary IN (SELECT MAX(salary) FROM employees GROUP BY department_id);
--위처럼 진행하면 한 부서의 최대급여와 같은 급여를 받는 다른부서 사원 값도 가져옴 

SELECT employee_id, salary
FROM employees
WHERE (department_id, salary) IN (SELECT department_id, MAX(salary) FROM employees GROUP BY department_id);
ORDER BY department_id, salary;
```

## Inline View

급여가 적은 사원부터 사번, 급여를 출력합니다

```sql
SELECT employee_id, salary
FROM employees
ORDER BY salary;
```

급여가 가장 적은 사원부터 사번, 급여를 출력합니다

최대 5명까지만 적은 순으로 출력 

```sql
SELECT rownum, employee_id, salary
FROM employees
WHERE rownum <= 5
ORDER BY salary;
--이렇게는 실행 안됨

SELECT rownum, employee_id, salary
FROM (SELECT *
      FROM employees
      ORDER BY salary)
WHERE rownum <= 5;
-- 정상 실행  
```

107개 행을 정렬부터 하고 rownum을 발급하여 5개행만 추출 

급여가 가장 적은 사원부터 사번, 급여를 출력합니다

급여적은사원들 11번째 사원부터 20번째 사원까지만 출력 

```sql
SELECT rownum, employee_id, salary
FROM (SELECT *
FROM employees
ORDER BY salary)
WHERE rownum BETWEEN 11 AND 20;
--이렇게 하면 한개도 검색 안됨 

SELECT *
FROM (SELECT rownum r, employee_id, salary
      FROM (SELECT *
            FROM employees
            ORDER BY salary)
      )
WHERE r BETWEEN 11 AND 20;
--정상 실행 
```

### Scalar Query

스칼라쿼리에서의 결과행수는 무조건 1개행으로 반환되어야만함 

WHERE절의 값도 1개여야함 

사원의 사번, 부서번호, 부서명을 출력하시오

```sql
SELECT employee_id, department_id,
			(SELECT department_name
			FROM departments
			WHERE departments.department_id = employees.department_id)
FROM employees;
```

## 집합연산자 : UNION, UNION ALL, INTERSECT, MINUS

### UNION : 중복 행이 제거된 두 쿼리의 행 (합집합)

- 사용시 대상 테이블들의 컬럼수와 자료형이 모두 같아야됨 → 행만 늘리는 것 
컬럼갯수가 다를경우 null로 맞춰줄수도 있음
- 자동정렬됨

```sql
SELECT employee_id, job_id
FROM job_history
UNION   --> UNION 사용시 115개의 행, UNION은 employee_id로 자동 정렬됨
SELECT employee_id, job_id
FROM employees;
```

### UNION ALL : 중복 행이 포함된 두 쿼리의 행

- 자동정렬되지 않음
- 정렬하려면 첫번째 쿼리의 SELECT구문 기준으로 정렬해줘야 함 
첫 쿼리의 SELECT에서 별칭을 등록한 경우 ORDER BY에서도 별칭으로 정렬해줘야함

```sql
SELECT employee_id, job_id, start_date, end_date
FROM job_history
UNION ALL   --> UNION ALL 사용시 117개의 행, UNION ALL은 중복된 값도 출력
SELECT employee_id, job_id, null, null
FROM employees
ORDER BY 1,start_date;
```

- 아래와 같이 자료형변환해서 사용도 가능함
- 현재직무를 출력하기 위해서 start_date를 강제형변환했음

```sql
SELECT employee_id, job_id, TO_CHAR(start_date), end_date
FROM job_history
UNION ALL   --> UNION ALL 사용시 117개의 행, UNION ALL은 중복된 값도 출력
SELECT employee_id, job_id, '현재직무', null
FROM employees
ORDER BY 1, 3;
```

### INTERSECT : 두 쿼리의 공통 행 검색 (교집합)

- 이전 직무를 다시 담당하는 사원들을 출력하시오

```sql
SELECT employee_id, job_id
FROM job_history
INTERSECT
SELECT employee_id, job_id
FROM employees
ORDER BY 1;
```

### MINUS : 첫번째 쿼리에 있는 행 중 두번째 쿼리에 없는 행 (차집합)

- 이전 직무를 다시 담당하지 않는 사원들을 출력하시오

```sql
SELECT employee_id, job_id
FROM employees
MINUS
SELECT employee_id, job_id
FROM job_history
ORDER BY 1;
```

- 사원이 없는 부서번호를 출력하시오

```sql
SELECT department_id
FROM departments
MINUS
SELECT department_id
FROM employees
ORDER BY 1;
```

NOT EXISTS

- 서브쿼리의 결과행수가 존재하면 TRUE, 없으면 FALSE반환
- 부서의 해당하는 사원이 없는 경우에 값을 반환하라

```sql
SELECT *    --여기를 department_id로 바꾸면 위의 MINUS쓴 결과와 동일 
FROM departments
WHERE NOT EXISTS
(SELECT * FROM employees
WHERE department_id = departments.department_id);  -- from에 별칭주고 써도됨
```