# PL/SQL & 프로시저

### PL/SQL

- SQL로는 변수선언, 조건처리, 반복처리불가
- PL/SQL은 SQL, 변수선언, 조건처리, 반복처리 가능
- 복잡한 SQL구문을 일일이 전송하려하지말고, 프로시져를 만들어 프로시져를 호출하기
- 프로시져 : 리턴값이 없음  / 함수 : 리턴값이 반드시 있어야 함

ex) INSERT  —송신—> DMBS

     UPDATE —송신—> 

DELETE —송신—>

                                          프로시져

     exec a_proc —송신—> a_proc 함수

                                           INSERT ~~

                                           UPDATE ~~

                                           DELETE~~ 

### 프로시저

프로시저 형태 

```java
CREATE OR REPLACE PROCEDURE 프로시져명 ( 매개변수명1 자료형1, 매개변수명2 자료형2)
IS
BEGIN
	INSERT INTO
	VALUES
END
```

IS절에 변수 선언해주면됨

선언방법 num NUMBER; 

                num NUMBER := 0;

### 참조형 자료타입

job_history.employee_id%TYPE  → NUMBER(6)

job_history테이블의 employee_id컬럼과 같은 타입의 자료형 

오라클에서 매개변수 없는 경우 소괄호 열고닫기 안함 

- 프로시저 연습 1
    
    결과는 DBMS 출력에서 확인 가능 
    

```sql
CREATE OR REPLACE PROCEDURE a_proc(num1 number, num2 number)
IS num3 number := 0; --변수 필요하면 여기서 변수 선언
BEGIN
	num3 := num1 + num2;
	DBMS_OUTPUT.PUT_LINE('숫자합 :'||num3);
END;
/   -- /로 실행위치 끊을 수 있음

EXEC a_proc(1, 2);
EXEC a_proc(5, 6);
EXEC a_proc(123);
EXEC a_proc(567890);
```

- 프로시저 연습 2

```sql
CREATE OR REPLACE PROCEDURE b_proc(num number)
IS
BEGIN
	IF MOD(num,2) = 1 THEN
	DBMS_OUTPUT.PUT_LINE('홀수입니다');
	ELSE
	DBMS_OUTPUT.PUT_LINE('짝수입니다');
	END IF;

	IF num > 10 THEN
	DBMS_OUTPUT.PUT_LINE('10보다 큽니다');
	ELSIF num > 5 THEN
	DBMS_OUTPUT.PUT_LINE('5보다 큽니다');
	ELSE
	DBMS_OUTPUT.PUT_LINE('5이하입니다');
	END IF;
END;
/

EXEC b_proc(15);
EXEC b_proc(8);
EXEC b_proc(0);
```

- 프로시저 연습 3
    
    for문에서 i에 자료형 설정안해도 자동으로 숫자형으로 변환됨 
    

```sql
CREATE OR REPLACE PROCEDURE c_proc
IS
BEGIN
	FOR i IN 1..10 LOOP
		DBMS_OUTPUT.PUT_LINE(i);
	END LOOP;
END;
/
EXEC c_proc;
```

- 프로시저 연습4
    
    SELECT절의 결과값은 변수에 담아줘야한다. IS에서선언해서  INTO로 담아주기 
    
    선언시마다 세미콜론 잊지않고 쓰기 
    

```sql
CREATE OR REPLACE PROCEDURE d_proc(v_department_id employees.department_id%TYPE)
IS v_sum NUMBER;
	 v_department_name departments.department_name%TYPE;
BEGIN
	SELECT SUM(salary)INTO v_sum   --이것을 특정 변수에 담아줘야함
	FROM employees
	WHERE department_id = v_department_id; --반드시 ; 해줘야함
	DBMS_OUTPUT.PUT_LINE(v_department_id||'부서의 급여합은'||v_sum);

	-순차처리
	SELECT department_name INTO v_department_name
	FROM departments
	WHERE department_id = v_department_id;
	DBMS_OUTPUT.PUT_LINE(v_department_id||'부서이름은'||v_department_name);

	INSERT INTO a_tbl(a) VALUES (v_department_id);
END;
/
```

- 프로시저 연습5
    
    한개의 행을 반환하는 경우에는 INTO로 변수에 담아서 사용 가능하지만
    
    여러 행을 반환하는 경우에는 CURSOR를 이용 
    
    CURSOR 커서명 IS 내부에 SELECT구문을 넣기 
    
    만들어진 커서를 반복수행 
    

```sql
CREATE OR REPLACE PROCEDURE e_proc(v_salary employees.salary%TYPE)
IS
	CURSOR c1 IS
		SELECT salary
		FROM employees
		WHERE salary > v_salary;
BEGIN
	FOR e IN c1 LOOP
		DBMS_OUTPUT.PUT_LINE(e.salary);
	END LOOP
END;
/
```