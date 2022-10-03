# RESTful API

### REST원리

- 요청 내에 기술된 개별자원은 URI패스로, 기능은 요청방식으로 식별하는 Software Architecture

### RESTful

- REST원리를 따르는 시스템을 지칭

### 특징

1. 자원의 식별
- ✔**요청 내에 기술된 개별 자원을 식별할 수 있어야 한다**
- URI로는 식별하기 어려움
- 요청방식을 이용하여 기능을 표현 → 이런것을 표준화한 것이 Restful
    - Get : 조회
    - Post : 추가
    - Put : 수정
    - Delete : 삭제
- 같은 URI를 요청하더라도 요청방식에 따라 기능을 달리할 수 있다

![Untitled](RESTful%20API%2062f2b600aa4a41ff92836c18281cf1d0/Untitled.png)

![Untitled](RESTful%20API%2062f2b600aa4a41ff92836c18281cf1d0/Untitled%201.png)

### Restful로 바꿔보기 (URI 자체로 정보를 식별할 수 있게)

1. /backboard/boardlist?currentPage=1 
    
    **→ GET /backboard/board/list/1   (get이니까 조회방식이고 1을 전달)**
    
2. /backboard/boardlist?currentPage=페이지번호
    
    **→ GET /backboard/board/list/페이지번호**
    
3. /backboard/searchboard?currentPage=페이지번호&word=검색어
    
    **→ GET /backboard/search/search/검색어/페이지번호**
    
4. /backboard/viewboard?boardNo=글번호
    
    **→ GET /backboard/board/view/글번호**
    
    **→ GET방식이 4개가 있기에 board뒤에 분류할 수 있는 단어를 추가하여 구분해줌** 
    
5. /backboard/modifyBoard?boardNo=글번호
    
    **→ PUT /backboard/board/글번호/글내용**
    
6. /backboard/removeBoard?boardNo=글번호
    
    **→ DELETE /backboard/board/글번호** 
    
7. /backboard/writeBoard?boardTitle=글제목&boardContent=글내용
    
    **→ POST /backboard/board/write/글제목/글내용** 
    
    **→ POST방식이 8번과 겹칠 수 있기 때문에 board뒤에 write와 reply로 구분해줌** 
    
8. /backboard/replyBoard?boardParentNo=부모글번호&boardTitle=글제목 &boardContent=글내용
    
    **→ POST /backboard/board/reply/부모글번호/글제목/글내용**
    

- Restful로 보안처리도 가능하다 (타인이 알아보기 어려움)
- @RestController : 스프링에서 제공하는 Restful용 어노테이션
@Controller와 @ResponseBody효과를 적용해줌
    
    

아래와 같은 경우에는 3번째의 /customers/1/orders로 사용하면 고객에 관한 것인지 주문에 관한 것인지 모호할 수 있음 

customer/1 까지는 좋은 방법이나

customer/1/order → orders/1 과 같이 새로운URI로 모호함을 제거하는것이 좋은 방식 

![Untitled](RESTful%20API%2062f2b600aa4a41ff92836c18281cf1d0/Untitled%202.png)

- ­­­URI(Uniform Resource Identifier)의 의미 변화
하나의 URI는 하나의 고유한 Resource를 대표하도록 설계된다
ex) /board/123 은 게시물중 123번이라는 고유한 의미를 가지도록 설계하고,
이에 대한 처리는 GET, POST방식과 같이 추가적인 정보를 통해서 결정한다
- 다음처럼 Path값이 큰경우에는 PathVariable사용 자제
    
    JSON데이터 요청활용
    
    (주의 : 요청형식은 "headers": {"Content-Type": "application/json"}로 지정)
    
    /board/{no}/{title}/{content}  
    
    ex) board/123/제목3/내용ㄹ마넝라ㅣㅓㄴ아러111111111111111111111
    
    JSON으로 대체하기 
    

### 스프링용 RESTFul 어노테이션

@RestController : @Controller + @ResponseBody

@PathVariable

@RequestBody

게시물목록

### GET

1. /backboard/board/list/2
- @GetMapping(value = {”list”, “list/{currentPage}”})
    
    public ~ list (@PathVariable int currentPage) {   } 
    
1. /backboard/board/list?currentPage=2 인 경우
- @GetMapping(value = “list”)
    
    public ~ list (int currentPage
    
- @GetMapping(value = “list”)
    
    public ~ list (@RequestParam(int currentPage) int cp) {   } 
    
    - Request Param은 요청전달데이터의 파라미터 값을 가져오는 것임

### GET

- /backboard/board/search/답/2

### GET

- /backboard/board/view/3
- /backboard/board/3  (조회 수정 삭제할때 똑같은 URI를 사용 가능

### PUT

1. /backboard/board/3          JSON데이터활용{”boardContent” : “수정내용11111111111”, “boardTitle “: “수정제목”} 
- @PutMapping(”{boardNo}”)
    
    public ~ modify (@PathVariable int boardNo, @RequestBody Board board  
                      **또는** @RequestBody Map<String, Object> map ) {   }
    
- jquery에서 ajax 사용 시 headers를 반드시 넣어줘야함

![Untitled](RESTful%20API%2062f2b600aa4a41ff92836c18281cf1d0/Untitled%203.png)

1. /backboard/board/3?boardContent=수정내용111111&boardTitle=수정제목
- @PutMapping(”{boardNo}”)
public ~ modify(@PathVariable int boardNo, Board, board) {   }
- @PutMapping(”{boardNo}”)
public ~ modify(@PathVariable int boardNo, @RequestParam Board, board) {   }

### DELETE

- /backboard/board/3

### POST

- /backboard/board/write   ***FORM데이터인 경우 요청 JSON사용불가 ***
- /backboard/board/reply/3