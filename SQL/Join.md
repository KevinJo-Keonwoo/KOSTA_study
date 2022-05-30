# Join

### JOIN

- 사원의 사번, 이름, 급여, 부서번호, 부서명을 출력하시오

```sql
SELECT employee_id, first_name, salary, department_id
FROM employees;
SELECT department_id, department_name
FROM departments;

SELECT employee_id, department_name
FROM employees, departments    --두테이블로부터 자료를 검색한다
--카티션 프러덕트
```

- 두 테이블의 어떤 자료를 먼저 찾을지는 정해져있지 않음.
- 아무런 조건(WHERE)이 없을 시, 카티션 프러덕트가 됨,
카티션 프러덕트란 두 FROM의 테이블에서 가져오는 값의 수가 곱하기로 대응이 됨 
ex) 107행의 employees, 27행의 departments 가져오면 107x27 = 2889행이 결과로 출력
- 카티션 프러덕트 시, employees의 1행으로 커서가 간 후 departments의 모든 자료로 커서 이동

- JOIN문법 → 오라클 전용

```sql
SELECT employee_id, department_name
FROM employees, departments
WHERE employees.department_id = departments.department_id;
```

- 두테이블이 결합 가능한 경우 JOIN조건이라고 함

✔✔표준화된 ANSI JOIN문법

```sql
SELECT employee_id, department_name
FROM employees JOIN departments ON (employees.department_id = departments.department_id);
```

- FROM 테이블1 JOIN 테이블2 ON (조건절);

FROM절의 테이블에도 별칭 부여 가능 

```sql
SELECT employee_id, department_name
FROM employees e JOIN departments d ON (e.department_id = d.department_id)
ORDER BY employee_id;

SELECT employee_id, first_name, salary, e.department_id, department_name
FROM employees e JOIN departments d ON (e.department_id = d.department_id)
ORDER BY employee_id;
```

- department_id는 중복되기에 어떤 테이블에서 가져올건지 e. d.같이 밝혀줘야함
e. 이라고 해준것은 헤딩에는 반영되지않음. 
d.department_id도 추가할 경우 department_id_1이라고 하나 더 추가됨 
컬럼명이 중복되지 않는경우도 별칭명.컬럼명을 추천함

**JOIN종류**

- 조건
    - EQUI JOIN : =로 비교하는 JOIN
    - NON-EQUI JOIN : =외의 연산자로 비교하는 JOIN
- 형태
    - INNER JOIN
        - NATURAL JOIN → ON절이 필요없게됨 (별칭들이 없음)
        
        NATURAL JOIN 내에는 JOIN ON 으로 EQUI JOIN한 효과가 남 
        
        사원의 사번, 직무번호, 직무명을 출력하시오 
        
        ```sql
        SELECT employee_id, job_id, job_title
        FROM employees NATURAL JOIN jobs;
        ```
        
        - JOIN ON
        
        같은 조건에서 JOIN ON을 사용 할 때 → 코드가 길어짐 
        
        EQUI JOIN이 아닌 경우 JOIN ON 절을 사용해야됨, 
        
        즉 =조건이 아니면 JOIN ON 써야하며 
        
        EQUI JOIN인경우 NATURAL JOIN으로 대체 가능함 
        
        ```sql
        SELECT employee_id, j.job_id, job_title
        FROM employees e JOIN jobs j ON (e.job_id = j.job_id);
        ```
        
        - JOIN USING
        
        같은 조건인 경우 아래와 같다 
        
        길어도 안전한 JOIN ON 절을 쓰는것이 나음 
        
        ```sql
        SELECT employee_id, job_id, job_title
        FROM employees JOIN jobs USING(job_id);
        ```
        
    
    - OUTER JOIN : 조건에 만족하지 않는 행도 검색하는 것 → 전체 
    JOIN조건을 만족하지 않아도 두 테이블중 기준이 되는 한 테이블의 정보를 출력
        
        ```sql
        SELECT employee_id, first_name, salary, e.department_id
        FROM employees e LEFT OUTER JOIN departments d ON (e.department_id = d.department_id)
        ```
        
        - 왼쪽 테이블이 기준이면 LEFT 오른쪽 테이블이 기준이면 RIGHT
        - OUTER은 생략해도 됨. 주로 LEFT JOIN을 사용
        
        부서번호, 부서명, 부서가 속한 도시를 출력하시오 
        
        ```sql
        SELECT department_id, department_name, city
        FROM departments d JOIN locations l ON (d.location_id = l.location_id);
        ```
        
        각 도시에 있는 부서들을 출력하시오 
        
        ```sql
        SELECT city, COUNT(department_id)
        FROM locations l JOIN departments d ON (l.location_id = d.location_id)
        GROUP BY city;
        ```
        
        각 도시에 있는 부서들을 출력하시오
        
        단, 부서가 없는 도시도 모두 출력
        
        ```sql
        SELECT city, COUNT(department_id)
        FROM locations l LEFT JOIN departments d ON (l.location_id = d.location_id)
        GROUP BY city;
        ```
        
        사원의 사번, 이름, 관리자번호, 관리자이름을 출력하시오
        
        단, 관리자없는 사원도 모두 출력 
        
        ```sql
        SELECT e.employee_id, e.first_name, m.employee_id, m.first_name
        FROM employees e LEFT JOIN employees m ON (e.manager_id = m.employee_id)
        ```
        
        사번, 이름, 부서번호, 부서명을 출력하시오
        
        단, 사원이 없는 부서도 모두 출력 
        
        ```sql
        SELECT e.employee_id, e.first_name, d.department_id, d.department_name
        FROM departments d left JOIN employees e ON (d.department_id = e.department_id);
        ```
        
        사번, 이름, 부서번호, 부서명을 출력하시오
        
        단, 사원이 없는 부서도 모두 출력 , 부서없는 사원도 모두 출력
        
        - FULL OUTER JOIN : 양쪽을 모두 기준삼아서 출력하고 싶을때
        
        ```sql
        SELECT e.employee_id, e.first_name, d.department_id, d.department_name
        FROM departments d FULL JOIN employees e ON (d.department_id = e.department_id);
        ```
        
        ANSI가 아닌 오라클 기준으로 WHERE 이용하면 아래와 같음 
        
        부족한쪽이 + 즉 ANSI기준 기준이 되는 쪽이 +가 없음 
        
        오라클 전용 JOIN으로는 FULL OUTER JOIN 할 수 없음 
        
        ```sql
        SELECT employee_id, first_name, salary, e.department_id, d.department_name
        FROM employees e, departments d
        WHERE e.department_id = d.department_id(+);
        ```
        
- 빨간색 : 사원이 속한 부서 정보
- 파란색 : 부서장의 사원정보

사원의 사번, 부서번호, 부서명을 출력하시오 

```sql
SELECT employee_id, department_id, department_name
FROM employees NATURAL JOIN departments; /*ON (e.department_id = d.department_id
																								AND
																							 e.manager_id = d.manager_id)
*/
```

- NATURAL JOIN은 중복되는 모든 컬럼을 비교함. 이 경우 스키마에서 관계선이 2개 연결되어있기에

사원의 사번, 부서번호, 부서명을 출력하시오 

아래는 JOIN USING절을 사용한 것 

```sql
SELECT employee_id, department_id, department_name
FROM employees JOIN departments USING (department_id);  --106개 검색

```

부서의 부서번호, 부서명, 부서장사번, 부서장이름을 출력하시오

```sql
SELECT d.department_id, department_name, manager_id, first_name  
FROM departments d JOIN employees e USING (manager_id); 
```

사원의 사번, 부서번호, 부서명, 직무번호, 직무명을 출력하시오

```sql
SELECT e.employee_id, e.first_name, e.department_id, d.department_name, j.job_id, job_title
FROM employees e JOIN departments d ON (e.department_id = d.department_id)
								 JOIN jobs j ON(e.job_id = j.job_id);
```

부서의 부서번호, 부서가 속한 지역의 도시명(city), 국가명(country_name)을 출력하시오 

```sql
SELECT d.department_id, l.city, c.country_name
FROM departments d JOIN locations l ON (d.location_id = l.location_id)
									 JOIN countries c ON (l.country_id = c.country_id);
```

사원의 사번, 부서번호, 부서명, 직무번호, 직무명을 출력하시오

직무명에 Manager를 포함한 사원들만 출력하시오 

직무번호순, 부서명으로 오름차순하시오 

```sql
SELECT e.employee_id, e.first_name, e.department_id, d.department_name, j.job_id, job_title
FROM employees e JOIN departments d ON (e.department_id = d.department_id)
								 JOIN jobs j ON(e.job_id = j.job_id)
WHERE job_title LIKE '%Manager%'
ORDER BY 5, 4;
```

부서별 부서번호, 부서명, 사원수, 평균급여를 출력하시오

```sql
SELECT d.department_id, d.department_name, count(e.employee_id) 사원수, TRUNC(AVG(e.salary))
FROM departments d JOIN employees e ON (d.department_id = e.department_id)
GROUP BY d.department_id, d.department_name
ORDER BY d.department_id;
```

부서별 사원수가 10명 이상인 부서들의 부서별 부서번호, 부서명, 사원수, 평균급여를 출력하시오

```sql
SELECT d.department_id, d.department_name, COUNT(e.employee_id) 사원수, TRUNC(AVG(e.salary))
FROM departments d JOIN employees e ON (d.department_id = e.department_id)
GROUP BY d.department_id, d.department_name
HAVING count(e.employee_id) >= 10
ORDER BY d.department_id;
```

사원의 사번, 이름, 관리자번호(managerid) , 관리자이름을 출력하시오

```sql
SELECT e.employee_id, e.first_name, m.employee_id, m.first_name
FROM employees e JOIN employees m ON (e.manager_id = m.employee_id) 
-- (e.manager_id = m.employee_id) 이조건에 만족하는 행들을 찾는다
```

셀프조인 → 자기테이블을 자기가 조인하는 관계 

employees 테이블이 employees 테이블을 참조함 

107명이 아닌 106명이 출력된 이유 : 관리자 NULL인 값이 한개(100번) 있어서 발생, EQUI JOIN에서 NULL은 비교할 수 없음 

![Untitled](Join%20ffce35f260284d149b14646131526568/Untitled.png)

사원의 부서번호와 관리자의 부서번호가 일치하지 않는 

사원들 사번, 부서번호를 출력하시오

```sql
SELECT e.employee_id, e.department_id
FROM employees e JOIN employees m ON (e.manager_id = m.employee_id)
WHERE e.department_id <> m.department_id
ORDER BY e.employee_id;
```