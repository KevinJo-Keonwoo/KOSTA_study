# Forward&Redirect

### Forward

- request와 response를 forward방향(path)으로 전송하고 돌아오지않는다, 전달하고 끝난다
- 서버 차원의 이동
- 기존 객체를 forward된 페이지에서도 사용 가능, 같은 웹컨텍스트에서만 이동가능
- forward가 기본 이동 방법임
- forward메서드로는 전혀다른경로로 이동할 수 없음.
- out용내부버퍼를 clear하고 /iddupchk로 이동     before, after모두 보이지 않음

![Untitled](Forward&Redirect%20c8f55ed27c054ef2b72e0584b0c1c43c/Untitled.png)

### Redirect

- 클라이언트 차원의 이동
- 기존 객체를 redirect된 페이지에서 사용 불가, 다른 웹컨텍스트로 이동가능

### Include

- request와 response를 forward방향(path)으로 전송하고 다시 돌아온다
- out용내부버퍼를 clear하지 않음
- out용 내부버퍼에 before, after 모두 쌓아놓고 사용자에게 전달할때 flush됨

![Untitled](Forward&Redirect%20c8f55ed27c054ef2b72e0584b0c1c43c/Untitled%201.png)

![Untitled](Forward&Redirect%20c8f55ed27c054ef2b72e0584b0c1c43c/Untitled%202.png)

```java

public class MoveServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String opt = request.getParameter("opt");
		if("forward".equals(opt)) {
			//요청 속성(속성명: 'test' 값: 상품객추가 
			Product sample = new Product("F0001", "샌드위치", 2000);
			request.setAttribute("test", sample);
			
			//-------FORWARD전의 응답 
			PrintWriter out = response.getWriter();
			out.print("BEFORE FORWARD");			//forward에서는 보이지 않음   
			String path = "/iddupchk";    //iddupchk으로 이동하라  //슬래시 빼고 "idddupchk"으로 작성하여도 효과는 같음 
			//back-end에서의 경로는 http://로 시작하면 안됨. 지금 사용중인 웹컨텍스트(back)에서만 가능함. 다른 웹컨텍스트로 이동 불가능 
			RequestDispatcher rd = request.getRequestDispatcher(path);
			rd.forward(request, response); //request와 response를 forward방향(path)으로 전송하고 돌아오지않는다, 전달하고 끝난다
			
			//-------FORWARD후의 응답 
			out.print("AFTER FORWARD");			//forward에서는 보이지 않음 
//		rd.include(request, response); //request와 response를 forward방향(path)으로 전송하고 다시 돌아온다
			
			//프론트에서 예시(웹브라우저)
			//<img src = "/a/b.jpg">  -> a웹컨텍스트에 있는 b.jpg     -> 절대경로
			//<img src = "a/b.jpg">  -> 현재경로에 있는 a폴더의 b.jpg  -> 현재 경로에서 찾는 것 
			
			//forward메서드로는 전혀다른경로로 이동할 수 없음.
			
			//forward -> 서버 차원의 이동, 기존 객체를 forward된 페이지에서도 사용 가능, 같은 웹컨텍스트에서만 이동가능 
			//redirect -> 클라이언트 차원의 이동, 기존 객체를 redirect된 페이지에서 사용 불가, 다른 웹컨텍스트로 이동가능
			//forward가 기본 이동 방법임 
		}else if ("redirect".equals(opt)) {
			response.sendRedirect("http://www.google.com"); //redirect로는 아무 경로로나 이동할 수 있음
		}else if ("include".equals(opt)) {
			//-----INCLUDE전의 응답 
			PrintWriter out = response.getWriter();
			out.print("BEFORE INCLUDE");
			
			String path = "/iddupchk";  
			RequestDispatcher rd = request.getRequestDispatcher(path);
			rd.include(request, response);
			
			//-----INCLUDE후의 응답 
			out.print("AFTER INCLUDE");
		}else {
			response.setContentType("text/html;charset=utf-8");   
			PrintWriter out = response.getWriter();
			out.print("<ul>");
			
			out.print("<li>");
			out.print("<a href=\"move?opt=forward\">FORWARD</a>");
			out.print("</li>");

			out.print("<li>");
			out.print("<a href=\"move?opt=redirect\">REDIRECT</a>");
			out.print("</li>");
			
			out.print("<li>");
			out.print("<a href=\"move?opt=include\">INCLUDE</a>");
			out.print("</li>");
			
			out.print("</ul>");
		}
		
		
		
		
		
	}

} 
```