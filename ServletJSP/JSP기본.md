# JSP기본

JavaServerPage

탐캣서버 내의 JSP의 경로

C:\244\SW\apache-tomcat-9.0.63\work\Catalina\localhost\back\org\apache\jsp\jsp

- 위 경로에는 .java와 .class파일이 생성됨
- jsp에서 입력한 내용이 jsp파일 내부에서 out.write()의 인자가 됨

![Untitled](JSP%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20a2a5a557ffdd4d2abe1bac518b9815fb/Untitled.png)

- 자바파일을 컴파일해서 클래스로 만들고 그 클래스가 서블릿 파일이 되는 것

### JSP LifeCycle

1. first.jsp요청  → 서블릿과 다름. 
2. jsp엔진이 역할분담 
3. first_jsp라는 클래스를 먼저 찾음
4. 해당 클래스의 객체가 존재하는 지 확인 

5-1. 객체가 존재하지 않으면 

1. first_jsp용 클래스(first_jsp.class)가 있는지 확인 

b-1. 클래스가 없으면

- first_jsp.java파일 만들고 컴파일하여 클래스 생성

b-2. 클래스가 있으면

- 객체 생성하고 객체의 `_jspInit()`자동호출

5-2. 객체가 존재하면

1. 요청, 응답객체 생성 (Request, Response) 
2. `_jspService( Request , Response )` 객체 생성하며 자동호출. 
이 때 모든내용이 jspService내부의 out.write로 들어감
3. 결과 응답 
4. jsp객체 소멸 시 `_jspDestroy()` 자동 호출 
- jsp가 탐캣서버에 reload가 되면 기존 jsp객체는 자동 소멸됨
- reload는 jsp코드를 바꾸는 경우 발생함

첫번째 jsp 객체생성 요청 → 객체 생성, jspService호출 

고친후 저장한뒤 다시 jsp 요청 → 기존객체소멸, 객체 생성, jspService호출

![Untitled](JSP%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20a2a5a557ffdd4d2abe1bac518b9815fb/Untitled%201.png)

✔**jsp원본코드랑 .java파일과 비교하면서 공부하면 됨** 

### JSP구성요소 (a.jsp)

- HTML요소(<html>)   .java파일의 _jspService()내부에 기술    out.write()의 인자가 됨 
outwrite와 outprint는 둘다 출력을 하나 print는 flush기능까지 있다는 차이가 있음
    
    ex)<!-- -->       → out.write(”<!-- -->”); 
    
- JSP요소
    - **Scripting Element**
        - Scriptlet (<% %>) : .java파일의 _jspService()내부에 기술
            
            ex)<% inti; %>     → _jspService()내부변수로 추가  
            
        - Expression (<%= %>) : .java파일의 _jspService()내부에 기술, out.print()의 인자가 됨
            
            ex)<%= new Date() %>     → out.print(new Date()); 와 같음  → 세미콜론 불가 
            
        - Declaration (<%! %>) : .java파일의 _jspService()외부에 기술 →  메서드를 만드는 것
            
            ex)<%! void m(){} %>  → m이라는 메서드를 외부에 생성
            
    - **Direct Element**
        1. <%@include %>
        - 내용이 java파일에 포함됨
        - 과정의 코드를 모두 포함함
        
        ![Untitled](JSP%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20a2a5a557ffdd4d2abe1bac518b9815fb/Untitled%202.png)
        
        1. <%@page %> 페이지 지시자
        - 속성 import, contentType, buffer, autoflush, error, isErrorPage
    - **Action Tag**
        - <jsp:include></jsp:include>
        - 경로.include메서드를 호출하는 것
        - 실행 결과만 포함하는 것
        
        ![Untitled](JSP%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20a2a5a557ffdd4d2abe1bac518b9815fb/Untitled%203.png)
        
    

JSP주석

- java주석 <%int i; //지역변수입니다 %>
- jsp전용주석 <%-- JSP전용주석 --%>
    
    주석을 사용하면 .java파일에 포함되지 않음. out.write에 들어가도 않음 
    

보안상 문제가 있는 주석은 html에서 주석처리하면 안됨 jsp통해서 주석 사용하기 

내장변수(Default Object) - _jspService()에 미리 선언된 매개변수와 지역변수들

HttpServletRequest request

- 요청객체

HttpServletResponse response

- 응답객체

PageContext pageContext

- 현재실행중인 JSP정보객체
- ex)HttpServletRequest rq = pageContext.getRequest();

HttpSession session

- 클라이언트별 서버사이드객체

ServletContext application

- ServletContext객체
- 사용중인 웹컨텍스트(웹어플리케이션,웹모듈) 정보객체
- 실제경로, 서블릿API버전

ServletConfig config

- 

JspWriter out

- 출력스트림 JspWriter = PrintWriter + BufferedWriter[내부버퍼 : 8kb]

Object page

- 현재객체

버퍼에 내용이 가득 차면 autoflush됨