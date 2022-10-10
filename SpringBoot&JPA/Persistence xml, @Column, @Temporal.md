# Persistence.xml, @Column, @Temporal

### Persistence.xml

Properties 내부에 hibernate.dialect 속성이 중요함. DB종류에 따라 다르게 써줘야 함 

필수속성 → 표준설정 (접속할 데이터베이스에 대한 속성)

옵션속성 → JPA구현체에 대한 설정 

auto값이 create인 경우 테이블을 새로 생성함 

class속성에 등록된 class가 entity class임

id를 primary key로 그외를 일반컬럼값으로 

- ddl-auto :
    - 설정하지 않음 → 아무테이블도 생성하지 않음
    - create → 생성     /      update → 업데이트

![Untitled](Persistence%20xml,%20@Column,%20@Temporal%207ddeb24dff7f4000b66962efa11f4404/Untitled.png)

Persistence-unit 단위로 EntityManagerFactory를 생성 

객체를 등록하려면 EntityManager.persist(객체명) 

.close를 하면 컨테이너가 사라짐 

컨테이너가 사라진다고해서 객체가 사라지는 것이 아니라, 컨테이너의 관리에서만 벗어나는 것 

@Column

- 엔티티의 변수와 칼럼이름이 다를 때 매핑을 위해 사용함
- 생략하면 기본으로 변수 이름과 동일한 이름의 칼럼이 매핑됨
    - nullable 속성
        
        기본 : null값 허용 안하겠다
        
    - length
        
        칼럼 길이를 지정한다
        

@Temporal 

- 날짜 데이터 매핑할 때 사용
- TemporalType.DATE : 날짜
- TemporalType.TIME : 시간
- TemporalType.TIMESTAMP : 날짜와 시간