# THIS IS ORACLE책

![Untitled](THIS%20IS%20ORACLE%E1%84%8E%E1%85%A2%E1%86%A8%2078d0c5b84894458fa035aababe37d7ce/Untitled.png)

conn 계정명/비번  → 계정 연결 

export → 백업 

import → 백업자료 가져오기 → 모두 실행

스키마 생성 

1. 시스템 계정 접속 LOCALSYSTEM     
2. CREATE USER 계정명 IDENTIFIED BY 비번;

```sql
CREATE USER test IDENTIFIED BY test;
```

1. GRANT 권한 TO 계정명;    → 권한 주기           ↔ 반대개념은 REVOKE → 권한취소
    1. GRANT와 REVOKE는 DCL이라고 함 
2. 일반적으로 CONNECT, RESOURCE 롤(ROLE)을 사용함 롤은 권한들의 패키지같은 느낌 
CREATE VIEW 권한은 패키지에 포함되어있지 않기에 따로 추가해줘야됨 

```sql
GRANT CONNECT, RESOURCE, CREATE VIEW TO test;
```

데이터베이스 모델링

모델링 도구

 exERD 이클립스 플러그인 : [http://exerd.com/update/exerd/3.x](http://exerd.com/update/exerd/3.x)

 이클립스실행 → HELP → Install New Plugin → exERD설치 

exERD파일 생성

대상 DBMS → oracle 9i ~ 21c

논리모델링

- 테이블이란 이름 대신 엔터티 타입이라는 용어를 더 많이 씀

한 회원은 여러번 등록할 수 있다.

등록 안할수도 있다. 

한 티켓은 반드시 하나의 회원정보를 갖는다 

zero or more → 선택참여

one or more → 필수참여

피트니스별 상품번호 → 복합키 

복합키일 시 시퀀스사용 불가 

이전 피트니스번호를 찾은 뒤 상품번호를 불러와 +1 하면 12345이렇게 됨 

새로운 피트니스가 추가될때는 +1할 수가 없기때문에 NULL값 체크를 해놔야됨 

아래처럼하면 NULL값나올수 있음 

![Untitled](THIS%20IS%20ORACLE%E1%84%8E%E1%85%A2%E1%86%A8%2078d0c5b84894458fa035aababe37d7ce/Untitled%201.png)

티켓번호는 복합키를 대신할 대체 키

나머지는 외래키의 역할만 함 

**CHAR(8)**

더 적은 byte의 값이 들어오더라도, 나머지 메모리를 확보함. 

3바이트 글자가 들어가면 5바이트는 쓰레기값임

a = CHAR(8)     →   length(a) = 8 

**VARCHAR2(8)** 

더 적은 byte의 값이 들어오면 가변적으로 메모리 범위가 바뀜. 

3바이트 글자가 들어가면b 3바이트만큼의 메모리를 확보함 

a = VARCHAR(8)     →   length(a) = 3 

≥ ANY → 최소값보다 크거나 같다 

데이터와 제약조건을 복사붙여넣기 하더라도 

PK나 FK의 제약조건은 복사되지 않음

- 테이블 구조만 복사 붙여넣기 하기
    - NOT NULL 제외한 제약조건은 복붙안됨

```sql
CREATE TABLE e_copy_tbl
AS (SELECT * FROM employees);

DROP TABLE e_copy_tbl;

--WHERE절 만족하는 자료가 없어서 테이블의 구조만 복붙됨
CREATE TABLE e_copy_tbl
AS (SELECT * FROM employees WHERE 1<>1);
```

UPDATE 사용시 WHERE절이 없다면, 모든 행이 업데이트 됨 

CAST (바꿀값 AS 데이터자료형)  → 형변환함수 

RANK() 순위 매기는 함수 

카티션 프로덕트 

CROSS JOIN  → AISI 표준 조인법 

부모테이블의 행보다 자식테이블의 행을 더 먼저 삭제해야함 

DROP TABLE 부모 CASCADE CONSTRAIN; 

- 제약조건 모두 끊어버리고 삭제해라

단순뷰 : 테이블1개의 가상테이블 - DML처리 가능, 처리불가능한 경우가 많음 

```sql
CREATE OR REPLACE VIEW 뷰1
AS SELECT employee_id FROM employees;

INSERT INTO 뷰1(a) VALUES (999); -- (o)
```

복합뷰 : 테이블여러개의 가상테이블 - DML처리불가능 경우 많음 

```sql
CREATE OR REPLACE VIEW 뷰2
AS SELECT employee_id, department_name
FROM employees e JOIN departments d ON (e.department_id = d.department_id);

INSERT INTO 뷰2(employee_id, department_name) VALUES (999, '부서1'); -- (x)
```

DML 처리 불가능한 뷰 : WITH READ ONLY 추가하기  → 자주 씀 

```sql
CREATE OR REPLACE VIEW 뷰3
AS SELECT employee_id FROM employees
WITH READ ONLY;

INSERT INTO 뷰3(a) VALUES (999); -- (x)
```

조건 만족하는 DML처리 가능한 뷰

- 특정 경우에 만족할 때에만 : WITH CHECK OPTION

```sql
CREATE OR REPLACE VIEW 뷰4
AS SELECT a,b FROM b_tbl WHERE b = 10;

INSERT INTO b_tbl(a,b) VALUES (1, 10);
INSERT INTO b_tbl(a,b) VALUES (2, 10);
INSERT INTO b_tbl(a,b) VALUES (3, 90);
SELECT * FROM 뷰3;
-- 1 10
-- 2 10 두개만 나옴 
UPDATE 뷰4 SET b=70 WHERE b=10  -- b가 10과 같은행을 70으로 바꿔라 
--바뀌긴 하지만 뷰가 무쓸모가 됨 

CREATE OR REPLACE VIEW 뷰4
AS SELECT a,b FROM b_tbl WHERE b = 10
WITH CHECK OPTION;

UPDATE 뷰4 SET b=70 WHERE b=10   -->에러 발생
INSERT INTO 뷰4(a,b) VALUES (4, 10); --> 가능
INSERT INTO 뷰4(a,b) VALUES (5, 20); --> 에러발생
--위의 경우에는 특정 경우 만족할 때에만 가능하기에 에러가 발생 

```