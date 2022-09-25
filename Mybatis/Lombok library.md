# Lombok library

다운로드 링크 : [https://projectlombok.org/download](https://projectlombok.org/download)

1. lombok.jar 파일을 이클립스 설치폴더에 붙여넣고 이클립스 종료 (실행중일경우)
2. eclipse.ini파일을 메모장으로 열어 맨 끝에 javaagent:lombok.jar 붙여넣기 

![Untitled](Lombok%20library%2013e874d703d34f98bef06ceeee1f9d79/Untitled.png)

1. 이클립스 재구동 
- 롬복은 poam.xml에 넣었을 때 오류가 나는 경우가 많기 때문에 일부러 이클립스에 적용해버림

### 롬복 라이브러리 기능

1. @NoArgsConstructor
    - 매개변수 없는 생성자 생성됨
2. @AllArgsConstructor
    - 선언된 모든 변수를 매개변수로 갖는 생성자 생성됨
3. @Setter @Getter
    - Get, Set 메서드 생성
4. @EqualsAndHashCode(of = {"boardNo"})
    - HashCode 메서드와 Equals 메서드를 생성함
5. @ToString
    - ToString 메서드를 생성
    - 약간 위험한 메서드이기에 가급적 사용하지 않는것이 좋음
    - 서로를 참조하고 있는 객체 끼리 toString을 사용하는 경우 시스템이 멈출 수 있음.
    - 양방향 relation(has a 관계) 일 경우에는 사용을 주의해야함.  무한 Loop
    
    ![Untitled](Lombok%20library%2013e874d703d34f98bef06ceeee1f9d79/Untitled%201.png)
    
6. @Data
    - 위의 1,3,4,5번 기능을 모두 포함하고 있음
    - 권장하지 않음
7. @NonNull
    - 메서드의 매개변수나 생성자의 매개변수가null로 설정되면  
    NullPointerException 예외를 발생시켜 줌
    (ex: setBoardId(null) 또는 new Board(~~~, null, ~~)
8. @JsonFormat(pattern = "yy/MM/dd", timezone = "Asia/Seoul")
    - Date타입을 포맷에 맞게 변경해줌
    

![Untitled](Lombok%20library%2013e874d703d34f98bef06ceeee1f9d79/Untitled%202.png)

- web.xml에 이부분만 추가되었을 때는 ApplicationContext로만 구동됨 (스프링 컨테이너)
    
    servlet-context.xml에 <mvc:annotation-driven> 이라는 태그를 추가하면
    
    ApplicationContext를 상속받는 WebApplicationContext로 구동되기 시작함 
    

![Untitled](Lombok%20library%2013e874d703d34f98bef06ceeee1f9d79/Untitled%203.png)

- <context:component-scan> 을 추가하여 com.my.dto를 스프링컨테이너에서 관리하는 객체로 등록

- resources 폴더를 만드는 이유
- java와 resources폴더는 buildpath 해주기

![Untitled](Lombok%20library%2013e874d703d34f98bef06ceeee1f9d79/Untitled%204.png)

- 탐캣구동없이 RunWith로 스프링 컨테이너를 구동할 수 있음

![Untitled](Lombok%20library%2013e874d703d34f98bef06ceeee1f9d79/Untitled%205.png)

- 위의 값은 True
- NullPointerException이 발생할것으로 예상함 → 실제 발생 → True

- Mybatis를 사용하기 위해서는 Autowired된 SqlSessionFactory가 필요하며 
SqlSessionFactory를 사용하기 위해서는 스프링 컨테이너에 의해 관리가 되어야 한다 
이를 위해 servlet-context에 <bean id = “SqlSessionFactory”> 필요 
SqlSessionFactory는 DB와의 연결이 필요하기에 DataSource를 미리 생성해놔야 됨

![Untitled](Lombok%20library%2013e874d703d34f98bef06ceeee1f9d79/Untitled%206.png)