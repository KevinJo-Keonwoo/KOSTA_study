# ResultMap/SelectKey

### ResultMap

- 사용하려면 Select에 resultMap이 선언되어 있어야 함
- 간단한 경우는 ResultType 사용하면 됨

```xml
<resultMap type="OrderInfo" id="orderMap">
	//OrderInfo 타입 
	<id property="orderNo" column="order_no"/>
  //하위태그 id 태그  orderNo라는 프로퍼티 객체로 구분하겠다.order_no로 컬럼값을 채움
  //어떤 기준으로 객체를 만들 것인가 -> orderNo가 다르면 다른 객체다
	//2번째 행으로 갔을 때 order_no가 이미 존재하면 해당 객체 이용  
	<!-- collection은 List타입의 객체를 만듦 -->	
	<collection property="lines" ofType="OrderLine">
  //list인 경우 collection 쓰는 것 
  //lines라는 리스트에는 OrderLine타입의 객체가 들어간다. 
  //lines 는 OrderLine 타입임 
		<id property="orderNo" column="order_no"/>
		<id property="orderP.prodNo" column="order_prod_no"/>
  //어떤 기준으로 객체를 만들 것인가 -> orderNo와 orderP.prodNo가 다르면 다른 객체
  //id -> 객체 식별 기준 
	</collection>
</resultMap>
```

- Null로 들어가지 않은 부분은 Result로 채우기
- 최종본 / 가급적 Result보다 autoMapping 사용하기
- 다른 클래스에 접근해야하는 경우 association 사용하기
- association을 사용하는경우 위의 id값이 덮어씌워짐 → 별칭주기
- association은 1;1 값
- `<association property="orderP" javaType="Product"/>`
- OrderLine 내부에 orderP와 관계가 있는 Product 타입의 컬럼이 한개 있다

```xml
<resultMap type="OrderInfo" id="orderMap" autoMapping="true">
	<id property="orderNo" column="order_no"/>
	<!-- <result property="orderDt" column="order_dt"/> -->			
	<collection property="lines" ofType="OrderLine" autoMapping="true">
		<id property="orderNo" column="order_no"/>
		<id property="orderP.prodNo" column="order_prod_no"/>
		<association property="orderP" javaType="Product" autoMapping="true"/>
		<!-- <result property="orderQuantity" column="order_quantity"/>
		<result property="orderP.prodName" column="prod_name"/>
		<result property="orderP.prodPrice" column="prod_price"/> -->
	</collection>
</resultMap>
```

- OrderInfo객체가 여러개 만들어지는 것을 원하는게 아님. Info에는 여러개의 Line이 있음

![Untitled](ResultMap%20SelectKey%2000965c224bc14ef5a7ab9809feae46b0/Untitled.png)

![Untitled](ResultMap%20SelectKey%2000965c224bc14ef5a7ab9809feae46b0/Untitled%201.png)

- 생성자 이용하고 싶으면 constructor 이용

![Untitled](ResultMap%20SelectKey%2000965c224bc14ef5a7ab9809feae46b0/Untitled%202.png)

![Untitled](ResultMap%20SelectKey%2000965c224bc14ef5a7ab9809feae46b0/Untitled%203.png)

### Date 포맷하기

DTO 클래스의 Date윗줄에 JsonFormat 어노테이션 주기 

```java
@JsonFormat(pattern = "yy/MM/dd", timezone = "Asia/Seoul") //HH:mm:ss 시분초
	private Date orderDt;
```

### SelectKey

- 유용한 태그임

![Untitled](ResultMap%20SelectKey%2000965c224bc14ef5a7ab9809feae46b0/Untitled%204.png)

![Untitled](ResultMap%20SelectKey%2000965c224bc14ef5a7ab9809feae46b0/Untitled%205.png)

- order=”BEFORE” → insert구문 처리 직전  / AFTER → 구문 처리 직후
- keyProperty = “id”→ insert구문에서 사용하는 id컬럼을 키 프로퍼티로 사용한다는 뜻

```xml
<insert id="insert" parameterType="Board">
	<selectKey
	keyProperty="boardNo"
	resultType="int"
	order="AFTER"
	statementType="PREPARED">
	SELECT board_seq.CURRVAL FROM dual;
	</selectKey>
INSERT INTO board(board_no, board_parent_no, board_title, board_content, board_id, board_viewcount)
VALUES (board_seq.NEXTVAL, #{boardParentNo}, #{boardTitle}, #{boardContent}, #{boardId}, 0);
</insert>
```

- Insert에서 정해진 board_seq.NEXTVAL  값이 Insert된 직후에 받아와서
- board_seq.CURRVAL 값을 boardNo값으로 넣어라
- board_seq.NEXTVAL값이 10이라면 board_seq.CURRVAL과 boardNo의값도 10이다

- viewcount 테스트

![Untitled](ResultMap%20SelectKey%2000965c224bc14ef5a7ab9809feae46b0/Untitled%206.png)

- 이 구문에서 board_viewcount+1를 #{boardViewcount} +1로 처리해도 되지만, 
동시에 여러 클라이언트가 요청했을때 문제가 발생할 수 있음.
- board_viewcount+1
    - 기존행의 조회수 +1
    - 조회수를 변경(수정)하기위한 용도를 알리기위해 viewcount를 -1로 설정
    - 일반 용도의 Board객체는 0으로 설정해도 되나, 조회수를 1증가(수정)하기위해 -1로 설정
    - choose구문에서 구분하기 위해 설정
- #{boardViewcount} +1
    - 기존화면의 조회수 +1
    - 상세보기에서의 viewcount는 보여주기 위한 것이지, 조회수를 계산하기 위한 값이 아님, 
    따라서 전달되면 안됨

![Untitled](ResultMap%20SelectKey%2000965c224bc14ef5a7ab9809feae46b0/Untitled%207.png)