# JPA실습

nullable 기본값은 true이고 false로 설정할경우 Notnull제약조건과 같은 효과를 준다

Column에서 자릿수 설정할 시 변수를 int로 하지말고 BigDecimal타입으로 진행해야 함 

![Untitled](JPA%E1%84%89%E1%85%B5%E1%86%AF%E1%84%89%E1%85%B3%E1%86%B8%2066989d29651c47d5a2865049e19bdd09/Untitled.png)

Create를 사용하면 기존 table을 drop하고 새로만들어버림 → 기존 샘플데이터가 삭제됨 

- Update를 사용하는 것을 권장함

Date형식의 변수는 DB에 저장될때 TIMESTAMP로 자동 형변환됨 

CreationTimestamp : 엔티티가 테이블에 INSERT되는 시점의 날짜데이터를 자동기록

UpdateTimestamp : 엔티티가 테이블에 UPDATE되는 시점의 날짜데이터를 자동기록

### CRUD 기능 (CRUE repository)

saveAll<Iterable> (2버전 이후)    →  (2버전 이전)<S extends T>Iterable<S> save<Iterable<S>>  

- 여러 엔티티들을 한번에 등록, 수정 (Insert, Update)

<S extends T>S save<S entity> 

- 하나의 엔티티를 등록, 수정  (Insert, Update)

findAllById(ID)        →          Iterable<T> findAll(Iterable<ID>)

- 해당 식별 키를 가진 엔티티 목록 리턴

SaveTest

- 같은 객체형의 다른 두 객체를 생성하여 save메서드를 두번 동작시켰을때
    
    @id가 선언된 속성이 같은 컬럼일경우 Update로 인식함
    

```java
@Test
	void testSave() {
		A a = new A();
		a.setA1("1"); 
		a.setA2(new BigDecimal(1.0));
		a.setA4("a4_1");
		repository.save(a);
		//Hibernate: select a0_.a1 as a1_0_0_, a0_.a2_c as a2_0_0_, a0_.a3 as a3_0_0_, a0_.a4_c as a4_0_0_ from a_tbl a0_ where a0_.a1=?
		//JPA의 find()메서드 호출 
		//같은 컬럼이 있나? 
		
		//Hibernate: insert into a_tbl (a2_c, a3, a4_c, a1) values (?, ?, ?, ?)
		//JPA의 persist()메서드 호출
		//없으니 삽입
		
		A aa = new A();
		aa.setA1("1");
		aa.setA2(new BigDecimal(2));
		aa.setA4("a4_2");
		repository.save(aa);
		//Hibernate: select a0_.a1 as a1_0_0_, a0_.a2_c as a2_0_0_, a0_.a3 as a3_0_0_, a0_.a4_c as a4_0_0_ from a_tbl a0_ where a0_.a1=?
		//JPA의 find()메서드 호출
		//같은 컬럼이 있나?
		
		//Hibernate: update a_tbl set a2_c=?, a3=?, a4_c=? where a1=?
		//JPA의 set()메서드 호출 
		//이미 있으니 업데이트
//결과적으로 A1컬럼이 1으로 같은 컬럼으로 인식하여 Insert 가 아닌 Update를 진행한다 
```

@Transactional 

- 해당 어노테이션이 붙는경우, 단위테스트시 자동 commit이 되지 않고 rollback 가능한 상태로 됨

복잡한 SQL구문은 JPA 쿼리메서드로 만들기 힘듬 

복잡한 SQL구문은 JPQL이라는문법으로 작성해야함