# Servlet 개념 잡기

현재의 버전값 

- JDK 1.8
- 오라클 11g ex
- 이클립스 22.3
- 톰캣 9버젼

src/main/java → servlet 생성 

next 누르고 패키지, 클래스이름 설정 

URL mapping → edit → /FirstServlet을 /first로 변경 

URL 맵핑 새로된 값을 URL로 사용하여 접근해야함 
[http://localhost:8888/back/first](http://localhost:8888/back/first)

![Untitled](Servlet%20%E1%84%80%E1%85%A2%E1%84%82%E1%85%A7%E1%86%B7%20%E1%84%8C%E1%85%A1%E1%86%B8%E1%84%80%E1%85%B5%2021057432e2854f5bbac0bfcfaf4c0de3/Untitled.png)

생성자(constructor) 체크박스 해제, doPost체크박스 해제  → doget메서드만 가짐 

- 오류 시

bulid path → configure build path에서 라이브러리 등록 → 탐캣 등록 

window → preference → server → runtime environment → 탐캣 서버 경로 제대로 등록 

### 클래스 이름을 변경 또는 삭제해야하는 경우

- webapp -> WEB-INF -> web.xml에서 servlet내용을 바꿔줘야 함.
이 클래스를 삭제하더라도 web.xml에 있는 정보가 삭제되지는 않음

주소 URL을 입력해서 호출하는 것 → GET방식 호출 

GET방식으로 호출했을 때 처리하는 메서드 → doGet메서드 

실제 배포되어있는 경로 

- Http://localhost:8888/back/WEB-INF/classes/com/my/control/FirstServlet.class
- 이 주소를 입력하더라도 접근 불가 → 보안으로 숨겨진 URL
- [http://localhost:8888/back/first](http://localhost:8888/back/first) 이 주소로만 접근해야 함.

FirstServlet.class, web.xml
    → back/build의 아래에 있다가 배포될 시 tomcat의 wtpwebapps/back/아래로 복사됨 

    → 실제로 일을 하는 것은 tomcat아래의 클래스들임 

![                                                                  Eclipse 디렉토리 / tomcat 디렉토리 ](Servlet%20%E1%84%80%E1%85%A2%E1%84%82%E1%85%A7%E1%86%B7%20%E1%84%8C%E1%85%A1%E1%86%B8%E1%84%80%E1%85%B5%2021057432e2854f5bbac0bfcfaf4c0de3/Untitled%201.png)

                                                                  Eclipse 디렉토리 / tomcat 디렉토리 

### Servlet LifeCylce

1. 톰캣 구동
2. 웹 컨텍스트별(ex) /back, /front) servlet context 객체 생성
    1. 서블릿 API 정보
    2. 실제 경로 정보
    3. 파라메터 (map 타입, 여러개 저장 가능)
    4. 어트리뷰트 (map 타입, 여러개 저장 가능)
3. 서블릿 요청(/first)
4. 서블릿 객체 찾기 
    1. 객체가 존재하지 않는 경우 
        1. 서블릿 객체 자동 생성(서블릿 엔진이 생성)
        2. 서블릿의 부모 클래스는 HttpServlet 
        3. 따라서 HttpServlet의 매서드를 모두 보유하고 있음 
        sc변수=null, init(), service(), destroy()
        4. 직접 만든 doGet( , )도 자식 속성으로 보유하고 있음. 
        5. 이후 객체의 init() 메서드가 자동 호출됨 → sc변수를 초기화해서 servlet context와 연결
        6. 요청/응답 객체 생성
        HttpServletRequest / HttpServletResponse
        7. HttpServletRequest에는 Map형식의 파라메터와 어트리뷰트 존재 
        8. 서블릿 객체의 service sevice(HttpServletRequest 매개변수, HttpServletResponse 매개변수) 호출 
        9. 요청 방식에 따라 doGet( , ) 또는 doPost( , ) 가 호출됨. 매개변수는 service()와 같음
    2. 객체가 이미 존재하는 경우 
        
        위의 6번부터 실행 (요청/응답 객체 생성)
        

### 언제 객체가 사라지는 지

Servlet Context → 톰캣이 구동을 멈출 경우 메모리에서 소멸됨. class도 JVM에서 unload됨

Servlet → 현재객체의 내용과 로드된 서블릿 클래스의 내용이 다른 경우 소멸됨  
                destroy()자동 호출됨 
                init으로 생성되는것이 아닌 생성후 init을 호출
                destroy로 소멸시키는 것이 아닌 소멸 직전 destroy를 호출 → 외부자원과의 연결끊는 역할
HttpServletRequest / HttpServletResponse → 응답 후 바로 소멸됨 

- Servlet객체는 매번 만들어지는게 아님.
- service() 와 doGet()메서드만이 매번 호출됨

- ✔xml의 파일의 선언부를 줄바꿈하거나 내용을 추가하면 안됨
- 수정이 필요한경우, 자바 코드를 수정하지말고 xml파일을 수정하는것을 권장함