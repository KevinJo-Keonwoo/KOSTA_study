# SQL

### 파일저장소를 사용하는 경우

- 개발자가 구현해야할것이 많아짐
- 자료안정성 보장X

오라클에서는 스키마가 계정별로 1개씩만 제공됨
다른 DBS에서는 스키마가 여러개 제공됨

객체종류 :

1. 테이블/ 뷰 / 인덱스 / 시퀀스 / 시노님

## **sqlplus 명령어**

- conn system/KOSTA	계정에 접속
- alter user hr account unlock;	언락하기
- alter user hr identified by hr;	비밀번호 설정 / 변경
- SELECT * FROM TAB;	계정이 갖고있는 테이블 목록
- DESC employees; 테이블이름	테이블 구조
- show user	현재 작업중인 사용자

## **SQL문법**

- DDL(정의어) : 객체 생성, 객체 구조변경, 객체 제거
Data Definition Language
- DML(조작어) : 데이터 추가, 수정, 삭제
- Query : 검색 SELECT
- DCL : 권한 설정, 제거
Data Control Language
- DTL : 트랜잭션 완료, 복구
Data Transaction Language

### 기타

오라클 sql에서는 대소문자 구분하지 않음
다만, 기본 문법용 예약어는 대문자로 쓰는것이 가독성 좋음
컬럼, 테이블명은 소문자로 작성