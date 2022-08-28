# Controller Method

## 컨트롤러용 메서드 매개변수

1. HttpServletRequest
2. HttpServletResponse
3. HttpSession
    - 위 세개를 모두 가질수도 있고, 1개 혹은 2개만 가질 수도 있음
4. 요청전달데이터이름
5. DTO클래스

```java
@GetMapping("e") // http://localhost:8888/backctr/e?prodNo=C0001&prodName=아메리카노&prodPrice=1000
	public void e(String prodNo, String prodName, int prodPrice){
		System.out.println("prodNo=" + prodNo);						
		System.out.println("prodName=" + prodName);
		System.out.println("prodPrice=" + prodPrice);
	}
```

- **요청전달데이터와 매개변수 이름이 일치해야만함 -> 자동대입**
- **서블릿의 request.getParameter를 대신하는 방법임**
- **int 매개변수를 받아올 수 있기 때문에 Integer.parseInt를 대신할 수도 있음**

- Front에서 보내주는 변수명과 java에서 받는 변수명이 다를 경우  (prod_no / prodNo)

```java
@RequestParam(name = "prod_no")String prodNo
```

- Front에서 데이터가 전송 안되는 경우도 있는 매개변수

```java
@RequestParam(required = false)String prodName
```

- **요청전달데이터는 항상 String 값이며**, int의 경우 spring 내부에서 parseInt를 해주는것과 같음
    
    따라서 int 매개변수에 요청전달데이터가 없으면, 0값이 아닌 null값을 출력한다  
    

```java
// http://localhost:8888/backctr/f?prod_no=C0001 호출 시 
@RequestParam(required = false)int prodPrice                       //null
@RequestParam(required = false, defaultValue = "0")int prodPrice   //0 
```

- 완성본예시

```java
@GetMapping("f") // http://localhost:8888/backctr/f?prod_no=C0001&prodPrice=1000
								 // http://localhost:8888/backctr/f?prod_no=C0001
	public void f( @RequestParam(name = "prod_no")String prodNo, 
		@RequestParam(required = false)String prodName,  //null
		@RequestParam(required = false, defaultValue = "0")int prodPrice){  
		System.out.println("prodNo=" + prodNo);						
		System.out.println("prodName=" + prodName);
		System.out.println("prodPrice=" + prodPrice);
	}
```

- 매개변수가 dto 객체인 경우

```java
@GetMapping("g") // http://localhost:8888/backctr/g?prodNo=C0001&prodName=아메리카노&prodPrice=1000
	public void g(Product p) { //매개변수가 dto 형태
		System.out.println("prodNo=" + p.getProdNo());
		System.out.println("prodName=" + p.getProdName());
		System.out.println("prodPrice=" + p.getProdPrice());
	}
```

- 상품번호만 전달하는경우 → prodName는 null / prodPrice는 0값으로 자동대입

```java
@GetMapping("g") // http://localhost:8888/backctr/g?prodNo=C0001
	public void g(Product p) { //매개변수가 dto 형태
		System.out.println("prodNo=" + p.getProdNo());
		System.out.println("prodName=" + p.getProdName());
		System.out.println("prodPrice=" + p.getProdPrice());
	}
```

## 컨트롤러용 메서드 반환형

- jsp를 사용하는 경우
- 서블릿이 요청을 받고 jsp가 응답함.
- 공통된 공유 객체 존재 (HttpServletRequest)
    - 요청할 때 생성하여 jsp로 이동하고 jsp가 응답할때 객체 소멸 ;

![Untitled](Controller%20Method%201a1dd141b22342ccb55ab27ddf33204d/Untitled.png)

- ModelAndView 사용하는 경우
- addObject로 Attribute 추가할 수 있음

- 검은네모 : Servlet      붉은네모 : Controller에서 동일하게 작성된 코드

![Untitled](Controller%20Method%201a1dd141b22342ccb55ab27ddf33204d/Untitled%201.png)

- 가장 기본방법, modelandview를 만들어 찾기

```java
@GetMapping("a1")
	public ModelAndView a()	{ //가장 기본 방법
		ModelAndView mnv = new ModelAndView();
		mnv.addObject("greeting", "HELLO");
		mnv.setViewName("/WEB-INF/jsp/a.jsp");
		return mnv;
	}
```

- view를 찾고 싶을 때

```java
@GetMapping("b1")
	public String b(Model model) {  //view만 결정하고 싶을때
		//mnv.addObject를 대신할 매개변수
		model.addAttribute("greeting", "안녕하세요");
		return "/WEB-INF/jsp/a.jsp";
	}
```

- void인 경우 viewname을 찾아서  return함.
- 정확한 viewname을 찾고 싶은 경우 view-resolver로 prefix, surfix 설정할 수 있음

```java
@GetMapping("c1") // /WEB-INF/jsp/ 가 prefix되고 .jsp가 surfix되어서 "/WEB-INF/jsp/c1.jsp"가 됨 
	public void c() { // viewresolver가 있는경우 정확히 찾아감 
		//void로 선언되는 경우에는 viewname을 자동으로 찾아서 return함 
	}
```

- 그냥 return을 아래와 같이 처리하면 view-resolver에서 처리된 값과 같이 
응답내용입니다.jsp를 찾아감
- 응답내용 : /WEB-INF/jsp/응답내용입니다.jsp   찾기 불가능함

```java
@GetMapping("d1")
	public String d() {
		String responseData = "응답내용입니다";
		return responseData; // 뷰이름으로 응답내용입니다를 반환함 -> 응답내용입니다.jsp를 찾음 
	}
```

- ResponseBody 어노테이션을 추가하면 응답내용을 그대로 반환
- 응답내용 : 응답내용입니다
- 한글 안깨지게 하려면 `@GetMapping(value = "d1", produces = "application/json;charset=UTF-8")` 로 변경

```java
@GetMapping("d1")
@GetMapping(value = "d1", produces = "application/json;charset=UTF-8") //한글안깨지게
@ResponseBody
public String d() {
	String responseData = "응답내용입니다";
	return responseData; // 뷰이름으로 응답내용입니다를 반환함 -> 응답내용입니다.jsp를 찾음 
}
```

RequestBody 

- 요청시에 JSON문자형식의 처리를 도와줌
- 주소 [http://localhost:8888/backctr/i](http://localhost:8888/backctr/i)
- 페이로드

```java
[{"prodNo" : 1, "prodName" : "a", "prodPrice" : 1000 },
 {"prodNo" : 2, "prodName" : "b", "prodPrice" : 2000 },
 {"prodNo" : 3, "prodName" : "c", "prodPrice" : 3000 }
]
```

```java
@PostMapping("i")
	public void i(@RequestBody Product[] list) {
		for(Product p : list) {
			System.out.println(p);
		}
	}
```

- servlet-context의 mvc에 mvc:annotation-driven 추가하기

**RestfulAPI 공부해오기 

### login과정

![Untitled](Controller%20Method%201a1dd141b22342ccb55ab27ddf33204d/Untitled%202.png)

1. DispatcherServlet이 HandlerRequest에 입력된 url 탐색 요청
2. HandlerRequest이 Mapping된메서드 반환 
3. 반환된 메서드를 Controller에게 탐색 요청
4. Controller가 찾아서 ModelAndView 형식으로 DispatcherServlet에게 반환
5. 반환된 ModelAndView형식의 값을 View에게 보내서 결과를 응답하게 함
6. View는 결과를 응답해서 보여주고 Dispatcher에게 다시 보냄
7. 최종으로 Dispacther이 응답함 

### Signup과정

1. DispatcherServlet이 HandlerRequest에 입력된 url 탐색 요청
2. HandlerRequest가 메서드가 반환할 Customer타입의 객체를 직접 만듦 (적절한객체를 만듦)

![Untitled](Controller%20Method%201a1dd141b22342ccb55ab27ddf33204d/Untitled%203.png)

String타입의 뷰이름 Model타입의 매개변수가 있고, 모델의 속성 추가 작업도 이루어지는 경우 

- ModelAndView타입으로 형변환해야함. DispatcherServlet에 응답할 때는 반드시 ModelAndView객체타입으로 응답해야만 함

![Untitled](Controller%20Method%201a1dd141b22342ccb55ab27ddf33204d/Untitled%204.png)

- Return 타입이 void더라도 ModelAndView객체가 생성되어 DispatcherServlet으로 전달하려 함
- 이 경우 ModelAndView 내부에는
    - Model은 없음 (null값)
    - View는 존재
        - mapping한 url경로 이름이 뷰이름으로 자동 완성됨.
        - 뷰 이름을 짤 때 resolver의 도움을 받아 prefix, surfix됨
- @ResponseBody 어노테이션을 생성할 경우 JSON으로 응답하며, ModelAndView객체와 View가 생성되지 않음

WebApplicationContext는 ApplicationContext를 상속받음 

스프링 컨테이너가 WebApplicationContext형태일 때만 웹에서 동작함 

→ DispatcherServlet의 도움이 필요함

component-scan 을 사용하지 않은 경우 annotation-config 태그를 넣어줘야만 annotation효과가 발생함