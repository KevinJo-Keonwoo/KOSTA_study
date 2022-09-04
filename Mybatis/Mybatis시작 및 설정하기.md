# Mybatis시작 및 설정하기

### Mybatis란?

- 영속성 DB 프레임워크
- 한 객체의 내용과 테이블에 있는 한 행의 정보가 동일하게 유지하는 것

![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled.png)

- 영속성을 유지한다 → 객체 내용이 바뀌면 테이블의 컬럼의 내용도 바뀌는 것
- → 객체가 추가되면 테이블 컬럼도 추가되고, 객체가 삭제되면 테이블도 삭제됨
- 즉 연결상태의 영속성을 유지하는 것
- SQL구문을 만들지 않고도 객체를 생성함으로써 Insert작업이 이뤄짐.
- → **SQL구문을 작성하지 않고도 DB를 변경할 수 있음**
- Hibernate가 더 완벽

### MyBatis 사용하기

[mybatis - MyBatis 3 | Getting started](https://mybatis.org/mybatis-3/getting-started.html)

1. Library dependency 추가하기 
2. SqlSessionFactory 객체 생성하기 
3. xml설정하기 (파란네모는 hikariCP쓰는경우 없어도 됨) 
4. mybatis-config.xml, CustomerMapper.xml만들기 

![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled%201.png)

sql구문을 mapper에 적고, javacode에서 호출하여 대입함 

![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled%202.png)

### MyBatis 설치

MyBatis 3.5.6

MyBatis Spring 2.0.6 

- servlet-context 에서의 property value  → 배포되어있는 물리적 경로 기준
- backctr 부터 시작

![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled%203.png)

![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled%204.png)

- mybatis-config.xml 에서의 source경로 → 클래스 실행 위치 기준
- backctr / WEB-INF / classes 부터 시작
- src/main/java 에 넣으면 backctr/web-inf/classes에 자동 복사됨
- 맞는 예
    
    ![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled%205.png)
    
- 맞는 예 2
- 클래스가 있는 곳 기준으로 찾겠다

![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled%206.png)

![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled%207.png)

- 틀린 예

![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled%208.png)

### Login메서드 변경

```java
<mapper namespace="com.my.mapper.CustomerMapper">
  <select id="selectById" resultType="com.my.dto.Customer">
    SELECT * FROM customer WHERE id=#{id}
  </select>

public Customer selectById(String id) throws FindException {
		SqlSession session = sessionFactory.openSession(); //connection과 같은 의미 
		Customer c = session.selectOne("com.my.mapper.CustomerMapper.selectById", id);
		//여기의 id값이 customerMapper의 #{id}로 간다
```

Connectionpool을 사용할때는 연결을 close할 필요가 없다. 

### 매핑된 SQL구문

매퍼파일 > SQL구문이 들어있음 (태그)

SELECT, INSERT태그 등으로 만들어 내면 됨

![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled%209.png)

- selectOne(namespace**.**select태그의 id속성값 ,  Where절의 id값)
- JAva 코드의 첫번째 인자는 mapper태그의 namespace.id값, 두번째 인자는 where절의 값
- 매퍼파일의 특정 태그를 호출해주면됨

- **<m**apper> 필요하고  namespace를 가져야 함 + DDL과 같은 구문 작성
- id 속성 값을 이용하여 다른 태그와 구분할 수 있도록 해 주어야 함

### Settings

**< jdbcTypeForNull>**

![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled%2010.png)

![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled%2011.png)

- 오라클과 DataType 매칭하지 못 할 경우 Null값
- null값에 대한 자료형 일치시키키지 못 하여 에러가 남
    
    따라서 이 설정 해 주어야 함
    
- **자바쪽에서의 null값 오라클에서도 null로 표현한다고 하는 설정(반대상황도 OK)**
- 자바 : 객체를 생성하지 않겠다 = null
    
    오라클 : 아무값도 설정하지 않겠다 = null
    

![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled%2012.png)

- Alias를 Customer로 설정했기에 resultType를 com.my.dto.Customer에서 Customer로 바꿈
- Select구문을 성공적으로 수행하면 
검색해온 1개의 행에 대한 resulttype 자료형의 객체가 자동 생성됨(여기서는 Customer객체)
- 여러행 or 1행 상관없이 객체의 dto클래스명을 적어줘야됨 (List, map이런거 X)
- 생성된 객체의 값을 컬럼의 값으로 자동 채움 → OracleRepository에서 반환된 객체에 자동입력돼있음

- 바인드변수의 ? 를 CustomerMapper로 옮길때는 #{} 로 바꾸기

![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled%2013.png)

- 전달할 Parameter가 1개인 경우 ParameterType 선언해줄 필요 없음
- 여러개가 전달되어야 하는 경우는 반드시 적어줘야함

- 이 세팅 기본설정은 false → true로 바꿔줘야만 _를 카멜케이스로 자동 변환해줌

![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled%2014.png)

![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled%2015.png)

- Mapper파일에서 %abc% 형식의 문자열 사용은 불가하기에 Repository에서 매개변수가 입력될 때 %+매개변수+%형식으로 입력되게 설정

![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled%2016.png)

![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled%2017.png)

- #{} 바인드변수를 그대로 사용한다  → 값의 위치에만 올 수 있음. ORDER BY절은 불가능
- ${} 값을 대신한다

![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled%2018.png)

java.util.hashmap이나 별칭이 있음

resultType → resultMap으로 바꾸기 

![Untitled](Mybatis%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20482168f8e12d4c3395bdeb1c255e909c/Untitled%2019.png)