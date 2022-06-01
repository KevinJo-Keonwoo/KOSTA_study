# DDL & DML

## DDL(Data Definition Language) : 데이터 정의어

- 객체 (테이블, 뷰, 인덱스, 시퀀스,….) 생성, 변경, 제거
- CREATE. ALTER, DROP

### CREATE : 객체 생성

CREATE 객체종류명 객체이름(
컬럼명 컬럼자료형 
)

```sql
CREATE TABLE product(
prod_no VARCHAR2(5),
prod_name VARCHAR2(30),
prod_price NUMBER(6),
prod_info VARCHAR2(100),
prod_mfd DATE
);
```

### DROP : 객체 제거

DROP 객체종류명 객체이름;

```sql
DROP TABLE product;
```

### ALTER : 객체 유형 변경

- 칼럼 추가

ALTER 객체종류명 객체이름 

ADD 추가할컬럼명 추가할컬럼자료형; 

```sql
ALTER TABLE product
ADD a VARCHAR2(3);
```

- 컬럼 이름 변경

ALTER 객체종류명 객체이름

RENAME COLUMN 기존이름 TO 신규이름;

```sql
ALTER TABLE product
RENAME COLUMN a TO b;
```

- 컬럼자료형/자릿수 변경

ALTER 객체종류명 객체이름

MODIFY 변경원하는컬럼 변경할자료형/자릿수;

```sql
ALTER TABLE product
MODIFY b VARCHAR2(4);
```

- 컬럼 제거

ALTER 객체종류명 객체이름

DROP COLUMN 삭제할컬럼명;

```sql
ALTER TABLE product
DROP COLUMN b;
```

- 객체 정보 확인

DESC 객체이름;

```sql
DESC product;
```

## DML(Data Manipulation Language) : (데이터 조작어)

- 객체에 내용 추가, 수정, 삭제
- INSERT INTO, UPDATE, DELETE

### INSERT INTO : 데이터 추가

```sql
INSERT INTO customer(cst_id, cst_pwd, cst_name, cst_address, cst_status) 
						VALUES ('id1', 'p1', 'n1', 'a1', 1);
```

- 컬럼명 없이 테이블 이름만 쓸 수 도 있으나, 컬럼의 순서와 자료형식이 같아야 됨  
→ 순서대로 들어감

```sql
INSERT INTO customer 
						VALUES ('id2', 'p2', 'n2', 'a2', 1);
```

- 아무 값도 입력하지 않으면, 0이아닌 모두 null 값으로 들어감

```sql
INSERT INTO customer(cst_id, cst_pwd, cst_name) 
						VALUES ('id2', 'p2', 'n2');
```

- null = ‘’
- 문자열 넣으면 자동으로 날짜로 형변환

```sql
INSERT INTO product(prod_no, prod_name, prod_price) VALUES ('C0001', '아메리카노', 1000);
INSERT INTO product                                 VALUES ('C0002', '아이스아메리카노', 1000, null, '');
INSERT INTO product(prod_no, prod_name, prod_price, prod_mfd)
						VALUES ('G0001', '텀블러', 3000, '22/01/01'); --문자열 넣으면 자동으로 날짜로 형변환 됨
INSERT INTO product(prod_no, prod_name, prod_price, prod_mfd)
						VALUES ('G0002', '다이어리', 3000, SYSDATE);
```

### 수정(UPDATE)

```sql
UPDATE customer SET name = '오문정' WHERE id = 'id1';
UPDATE customer SET pwd = 'p22', name = '홍길동' WHERE id = 'id2';
UPDATE customer SET status = 1;

UPDATE product SET prod_price = prod_price + (prod_price*0.1);
```

### 삭제(DELETE)

- DELETE의 WHERE절에서 서브쿼리 사용 가능함

DELETE FROM 테이블명

테이블 내 정보를 삭제

```sql
DELETE FROM customer WHERE id = 'id1';
DELETE FROM customer;
```