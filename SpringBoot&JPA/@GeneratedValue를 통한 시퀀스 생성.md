# 시퀀스 생성

@GeneratedValue

- strategy : 자동 생성 전략을 선택함
    - GenerationType.SEQUENCE : 시퀀스 이용하여 PK값 생성

```java
@Entity
@TableGenerator(name="Board_SEQ_G",
								table="ALL_SEQ"
								pkColumValue="board_SEQ",
								initialValue=0, 
								allocationSize = 1)
public class Board {
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE, generator = “Board_SEQ_G“ )
	private Long seq;
```

1. Board테이블 생성(시퀀스값은 seq) 
2. generator과 같은 name을 가진 tableGenerator를 찾아감 
3. Board테이블과 연결된 ALL_SEQ테이블이 만들어짐(시퀀스값은 board_seq)
4. ALL_SEQ테이블의 board_seq라는 시퀀스의 기본값은 initialValue (0)  
5. Board테이블의 seq값은 board_seq에서 가져옴
6. Board테이블에 행이 추가되면 seq라는 컬럼값은 ALL_SEQ테이블의 board_seq컬럼값을 요청함
7. 이 과정을 요청할때마다 board_seq는 allocationSize(1)만큼씩 자동 증가함 

![Untitled](%E1%84%89%E1%85%B5%E1%84%8F%E1%85%AF%E1%86%AB%E1%84%89%E1%85%B3%20%E1%84%89%E1%85%A2%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC%20885adfc3437d4c52b04315d3d6b6ef99/Untitled.png)