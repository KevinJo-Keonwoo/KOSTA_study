# Spring의 특징 및 목적

## Spring

스프링 컨테이너 = 스프링 엔진 = ApplicationContext

- 컨테이너 내부에 객체 생성
    
    사용자 요청에따라 만드는 것이 아니라 미리 컨테이너 내부에 만들어놓고 제공하는 것 
    

![Untitled](Spring%E1%84%8B%E1%85%B4%20%E1%84%90%E1%85%B3%E1%86%A8%E1%84%8C%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A5%E1%86%A8%20e2fd8b076e5f4da1b2273c835850c90a/Untitled.png)

- 기존 방식

로그인 요청 → CustomerController타입의 객체 생성

가입 요청 → CustomerController타입의 객체 생성

아이디중복확인 → CustomerController타입의 객체 생성

- **스프링 방식 특징!**
    1. 객체들을 singleton 패턴으로 관리
        
        미리 스프링 컨테이너 내부에 1개의 객체를  생성하여 관리 
        
    2. 다양한 라이브러리 제공 
    3. POJO를 유지한다
        
        Plain Old Java Object
        
        순수 자바 (일반 자바 클래스)
        
        - 특정인터페이스상속하거나, 특정메서드를 만들지 않아도 된다.

- 모듈화 → 응집도가 높은 모듈들로 구성되어 있음
    - spring-context, spring-jdbc, spring-mvc
    - 서로의 응집도가 높음 → 잘 묶임, 잘 융화됨
    - JSON, Fileupload, DBCP등 다양한 라이브러리와도 응집이 잘 됨

 

**스프링 컨테이너의 목적** **→ 객체관리의 용이함** 

1. Singleton Pattern 
    - 새로 객체 생성없이 여러 사용자가 이용 가능하게하는 것
2. 객체주입관계 조합
    - 설정을 조정함으로써 어떤 repository와 연결할지 결정할 수 있음.
    - 스프링 컨테이너를 사용하지 않을 경우 소스 코드를 일일이 변경해줘야 함

![Untitled](Spring%E1%84%8B%E1%85%B4%20%E1%84%90%E1%85%B3%E1%86%A8%E1%84%8C%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A5%E1%86%A8%20e2fd8b076e5f4da1b2273c835850c90a/Untitled%201.png)

1. bean 태그
2. property 태그
    - setter method를 통해 repository를 주입
3. constructor-arg 태그
    - 생성자를 통해 repository 주입

- 웹프로젝트에서 라이브러리를 사용하는 방법

1. WEB-INF → lib 에 넣어놓기
2. 탐캣 lib에 넣어놓기
3. pom.xml에 dependency로 넣기 (권장)
pom.xml를 git에 공유하면 모든 사용자들이 라이브러리 이용 가능 

탐캣을 구동할 시 DispatcherServlet가 구동되어 자동으로 스프링 컨테이너가 구동됨