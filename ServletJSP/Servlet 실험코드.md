# Servlet 실험

- FirstServlet

```java
package com.my.control;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class FirstServlet
 */
public class FirstServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	//클래스 이름을 바꿔야 하는 경우 webapp -> WEB-INF -> web.xml에서 servlet이름을 바꿔줘야 함. 
	//이 클래스를 삭제하더라도 web.xml에 있는 정보가 삭제되지는 않음 
	
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("FIRST SERVLET");  //탐캣 콘솔창에 출력하는 것 
	}

}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://java.sun.com/xml/ns/javaee" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" id="WebApp_ID" version="2.5">
  <context-param>                       -->servlet context에 파라미터 설정
    <param-name>developer</param-name>  --> 파라미터 이름이 인덱스임
    <param-value>조건우</param-value>   --> 파라미터인덱스를 호출하면 value값이 출력
  </context-param>
  <display-name>back</display-name>
  <welcome-file-list>
    <welcome-file>index.html</welcome-file>
    <welcome-file>index.jsp</welcome-file>
    <welcome-file>index.htm</welcome-file>
    <welcome-file>default.html</welcome-file>
    <welcome-file>default.jsp</welcome-file>
    <welcome-file>default.htm</welcome-file>
  </welcome-file-list>
  <servlet>
    <description></description>
    <display-name>FirstServlet</display-name>
    <servlet-name>FirstServlet</servlet-name>
    <servlet-class>com.my.control.FirstServlet</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>FirstServlet</servlet-name>
    <url-pattern>/first</url-pattern>
  </servlet-mapping>
  <servlet>
    <description></description>
    <display-name>test</display-name>
    <servlet-name>test</servlet-name>
    <servlet-class>com.my.control.test</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>test</servlet-name>
    <url-pattern>/test</url-pattern>
  </servlet-mapping>
  <servlet>
    <description></description>
    <display-name>LifeCycleServlet</display-name>
    <servlet-name>LifeCycleServlet</servlet-name>
    <servlet-class>com.my.control.LifeCycleServlet</servlet-class>
    <init-param>
      <param-name>fileName</param-name>  --> 여기는 Servlet 객체에 파라미터 설정 
      <param-value>a.txt</param-value>
    </init-param>
  </servlet>
  <servlet-mapping>
    <servlet-name>LifeCycleServlet</servlet-name>
    <url-pattern>/lifecycle</url-pattern>
  </servlet-mapping>
  <servlet>
    <description></description>
    <display-name>RequestServlet</display-name>
    <servlet-name>RequestServlet</servlet-name>
    <servlet-class>com.my.control.RequestServlet</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>RequestServlet</servlet-name>
    <url-pattern>/request</url-pattern>   -->request라는 url을 호출하면 이것을 찾음 
  </servlet-mapping>
  <servlet>
    <description></description>
    <display-name>ResponseServlet</display-name>
    <servlet-name>ResponseServlet</servlet-name>
    <servlet-class>com.my.control.ResponseServlet</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>ResponseServlet</servlet-name>
    <url-pattern>/response</url-pattern>
  </servlet-mapping>
</web-app>
```

- LifeCycleServlet

```java
package com.my.control;

import java.io.IOException;
import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LifeCycleServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public LifeCycleServlet() {
    	System.out.println("LifeCycleServlet의 생성자 호출됨");
//    	ServletContext sc = this.getServletContext();
//    	String developer = sc.getInitParameter("developer");
//    	System.out.println(developer);   --> 여기다가 선언하면 init이 안돼어서 null값반환됨
    }
    // 자동호출되는 init 메소드 서블릿 context와 연결작업을 해줌
	public void init(ServletConfig config) throws ServletException {
		super.init(config); // servletContext객체를 참조하게 함.
		System.out.println("LifeCycleServlet의 생성자 호출됨");
		ServletContext sc = this.getServletContext();
        String developer = sc.getInitParameter("developer");
        System.out.println(developer);
        
        String fileName = this.getInitParameter("fileName");
        System.out.println(fileName);
	}
	public void destroy() {
		System.out.println("LifeCycleServlet의 destroy() 호출됨");
	}
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("LifeCycleServlet의 service() 호출됨");
		super.service(request, response);
	}
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("LifeCycleServlet의 doGet() 호출됨");		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		doGet(request, response);
		System.out.println("LifeCycleServlet의 doPost() 호출됨");		
		String id = request.getParameter("id");
		String pwd = request.getParameter("pwd");
		System.out.println("요청전달데이터 id=" + id + ", pwd=" + pwd);
	}
	

}
```

- Request

```java
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		StringBuffer url = request.getRequestURL();
		String contextPath = request.getContextPath();
		String servletPath = request.getServletPath();
		System.out.println("url=" + url); //http://localhost:8888/back/request
		System.out.println("contextPath=" + contextPath); // /back
		System.out.println("servletPath=" + servletPath); // /request
		
		//http://localhost:8888/back/request?opt=add 요청일 경우 opt값은 add
		//http://localhost:8888/back/request?opt=    요청일 경우 opt값은 ""   이름은 있는데 값이 없으면 빈 문자열
		//http://localhost:8888/back/request	     요청일 경우 opt값은 null 요청전달데이터 자체가 없으면 null 
		String opt = request.getParameter("opt");
		System.out.println("요청전달데이터 opt=" + opt); //add
		
//		if(opt.equals("add")){   //nullpointerexception발생 에러날 수 있음  -> 제일 안좋은 코드
//		if(opt != null && opt.equals("add")){   //너무 복잡함 -> 안좋은 코드
		if("add".equals(opt)) {
		System.out.println("등록작업을 선택했습니다");
		}	
		
		
		//http://localhost:8888/back/request?c=c1&c=c2 요청일 경우 c값은 c1, c2
		//http://localhost:8888/back/request?c= 		요청일 경우 cArr.length는 0
		//http://localhost:8888/back/request 			요청일 경우 cArr이 null
		String[] cArr = request.getParameterValues("c");
		if(cArr != null) {    //null들어갈 수 있으니 null아닌 작업만 하시오 
			for(String c: cArr) {
				System.out.println("요청전달데이터 c=" + c);
			}
		}
		
	}

}
```

```java
http://localhost:8888/back/request?opt=add 
- opt값은 add
http://localhost:8888/back/request?opt=    
- opt값은 ""   이름은 있는데 값이 없으면 빈 문자열
http://localhost:8888/back/request	     
- opt값은 null 요청전달데이터 자체가 없으면 null 
```

```java
if(opt.equals("add")){   //nullpointerexception발생 에러날 수 있음  -> 제일 안좋은 코드
if(opt != null && opt.equals("add")){   //너무 복잡함 -> 안좋은 코드
if("add".equals(opt)) {
```

```java
http://localhost:8888/back/request?c=c1&c=c2 
- c값은 c1, c2
http://localhost:8888/back/request?c= 		
- cArr.length는 0
http://localhost:8888/back/request 			
- cArr이 null
```

- Response

```java
public class ResponseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//응답형식 설정  --> 가장 먼저 되어야 함 
		response.setContentType("text/html;charset=UTF-8"); //기본인코딩 ISO_88859_1
		//text/html -> mime방식 (전자우편을위한 인터넷 표준 방식, 응답 형식)
		//text/html : HTML로 응답
		//text/plain : text로 응답 -> 그대로 보여줌 
		//application/json : JSON으로 응답 -> 여기서는 JSON 형식이 없어서 그냥 텍스트만 보여줌 
		PrintWriter out = response.getWriter(); //응답 출력스트림 얻기 
		//System.out의 자료형은 PrintStream
		out.print("<html>"); //응답출력스트림에 쓰기 
		out.print("<body>"); 
		for(int i=1; i<=5; i++) {
			out.println("<h" + i + ">");
			out.println("제목" + i);
			out.println("</h" + i + ">");   
			//println을 사용하여도 보여지는데(결과)에는 변화가 없음 소스는 변화
			//클라이언트에게 줄바꿈까지 응답하고 싶으면 println을사용하기 -> println보다는 print가 네트워크 비용 절약 
		}
		out.print("</body>");
		out.print("</html>");
	}

}
```

### **mime방식** (전자우편을위한 인터넷 표준 방식, 응답 형식)

`text/html`: HTML로 응답
`text/plain` : text로 응답 -> 그대로 보여줌 
`application/json` : JSON으로 응답 

- Login

```java
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		doGet(request, response);
//		System.out.println("loginServlet의 doPost() 호출됨");		
		String id = request.getParameter("id");
		String pwd = request.getParameter("pwd");
		
		response.setContentType("application/json;charset=UTF-8");
		PrintWriter out = response.getWriter();

		if("id1".equals(id) && "p1".equals(pwd)) {
//			out.print("id=" + id + ", pwd=" + pwd);
			out.print("{\"status\" : 1 }");
		}else {
			out.print("{\"status\" : 2 }");
		}
	}
}
```

- Signup

```java
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String id = request.getParameter("id");
		String pwd = request.getParameter("pwd");
		String name = request.getParameter("name");
		String addr = request.getParameter("addr");
		String buildingno = request.getParameter("buildingno");
		System.out.println(id + ":" + pwd + ":" + name + ":" + addr + ":" + buildingno);
		response.setContentType("application/json; charset = UTF-8");
		PrintWriter out = response.getWriter();
		out.print("{\"status\":1, \"msg\": \"가입성공\"}");
		
	}
	

}
```