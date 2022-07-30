# Parameter & Attribute

## 파라메터와 어트리뷰트

파라메터 보유 : ServletContext, Servlet, HttpServletRequest

어트리뷰트 보유 : ServletContext, HttpServletRequest

ServletContext의 파라메터가 가장 오래 존재함 → 여러 서블릿이 사용 가능한 파라메터가 됨 

### 파라메터 설정 방법

1. ServletContext
    - web.xml의 <context-param>으로 설정
2. Servlet
    - web.xml의 <servlet>태그의 하위태그인 <init-param>태그로 설정
3. HttpServletRequest
    - 요청 URL의 요청전달데이터로 자동 설정
    - 요청시에 /first?a=one&b=two와 같은 방식으로 요청하면 자동으로 파라메터 설정
    

### 파라메터의 값 얻는 방법

1. Servlet Context
    - getInitParameter(”파라메터이름”)
2. Servlet
    - getInitParameter(’파라메터이름”)
3. HttpServletRequest
    - String param = getParameter(”파라메터이름”);
        - 하나의 파라메터에 여러 값을 요청하는 경우  /first?a=one&b=two&c=c1&c=c2
        - String[] arr = getParameterValues(”c”);    배열로 반환
- 값을 get할 수는 있으나 set하거나 remove 메서드는 없음. set하려면 위의 설정 방법을 참고
    
    

### 어트리뷰트 설정 방법

1. Servlet Context
    - setAttribute(”이름”, 값객체);
2. HttpServletRequest
    - setAttribute(”이름”, 값객체);
    

### 어트리뷰트의 값 얻는 방법

1. Servlet Context
    - getAttribute(”이름”);  //반환되는 값이 각 객체 타입
2. HttpServletRequest
    - getAttribute(”이름”)

### 어트리뷰트 삭제 방법

1. Servlet Context
    - removeAttribute(”이름”);
2. HttpServletRequest
    - removeAttribute(”이름”);