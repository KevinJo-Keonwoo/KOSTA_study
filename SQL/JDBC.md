# JDBC

## Search() 클래스

1. **JDBC드라이버 설치**
- ojdbc8.jar
1. **JDBC드라이버 클래스 로드**
- JDBC디렉토리 우클릭 → build path → configure bulid path
    
    → Libraries →  add external jars → jar 파일 추가 
    

```java
try {
		Class.forName("oracle.jdbc.driver.OracleDriver");   //JDBC폴더에서 찾고 있는 중 -> 경로 추가해줘야 함
} catch (ClassNotFoundException e) {
		e.printStackTrace();
		return;
}
```

1. **DB연결**

```java
Connection con = null;
String url = "jdbc:oracle:thin:@localhost:1521:xe";
String user = "hr";
String password = "hr";
try {
		con = DriverManager.getConnection(url, user, password);
		} catch (SQLException e) {
		e.printStackTrace();
		}
```

1. **SQL문 송신**

```java
Statement stmt = null;
		try {
			stmt = con.createStatement();
			String selectSQL = "SELECT employee_id, first_name, salary, hire_date FROM employees";   //자바에서 SQL로 코드를 보낼땐 코드내부에 ; 보내면 안됨 
			rs = stmt.executeQuery(selectSQL);
			//executeQuery -> SELECT 보낼 수 있음 
			//exxcuteUpadate -> INSERT/UPDATE/DELETE,  CREATE/ALTER/DROP 보낼 수 있음 
		} catch (SQLException e) {
			e.printStackTrace();
		}
```

- executeQuery -> SELECT 보낼 수 있음
- executeUpdate -> INSERT/UPDATE/DELETE,  CREATE/ALTER/DROP 보낼 수 있음

<aside>
💡 보내는코드 (SELECT      , INSERT/UPDATE/DELETE,  CREATE/ALTER/DROP)
수신되는값 (행들          , 몇건 처리되었는지        ,  0값 			           )
수신자료형 (ResultSet  ,  int                                  ,   int                              )

</aside>

1. **4번의 결과를 수신받음** 

```java
ResultSet rs = null;   //4번보다 위에 선언해줘야 함 
```

1. **결과 활용**

```java
while(rs.next()) {
				int id = rs.getInt("employee_id"); //=rs.getInt(1)
				String name = rs.getString("first_name");
				int sal = rs.getInt("salary");
				java.sql.Date hdt = rs.getDate("hire_date");  //java.util.Date가 아님 
				System.out.println(id + ":" + name + ":" + sal + ":" + hdt);
};

```

- rs.next() → 커서 이동한 위치에 값이 없으면 false 반환’
- while구문에 rs.next() 넣으면 첫행~끝행까지 반복한다
- rs.getInt(1)도 가능 인덱스 이용 -> 
인덱스도 가능 자바처럼0부터가 아닌 1부터인 db쪽 인덱스 순서
1. **DB연결 해제**
- DB연결해제하지 않으면 메모리 누수가 발생함 
-> DB쪽 메모리 부족 -> 새로운 클라이언트 접속 불가

```java
finally {  //지저분해도 안전하게 클로즈하는 코드 작성 
			if(rs != null)	{
				try {
					rs.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if(stmt != null) {
				try {
					stmt.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if(con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
```

- 날짜값 포맷 바꾸기

```java
SimpleDateFormat sdf = new SimpleDateFormat("yy/MM/dd hh:mm:ss");
System.out.println(id + ":" + name + ":" + sal + ":" + sdf.format(hdt));
```

## add() 클래스

- 여기까지는 search()와 동일

```java
//2. JDBC드라이버 클래스 로드
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver"); 
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			return;
		}
		//3. DB연결
		Connection con = null;
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		String user = "hr";
		String password = "hr";
		try {
			con = DriverManager.getConnection(url, user, password);
		} catch (SQLException e) {
			e.printStackTrace();
		} 
		//SQL문 송신 
		Statement stmt = null;
```

- 여기부터 add()

```java
try {
			stmt = con.createStatement();
			String insertSQL = "INSERT INTO customer(id, pwd, name, status) \r\n"
					+ "VALUES ('id9', 'p9', 'n9', 1)";
			int rowcnt = stmt.executeUpdate(insertSQL);
			System.out.println(rowcnt + "건이 추가되었습니다");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if(stmt != null) {
				try {
					stmt.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if(con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
```

✔주의사항 : 자바 프로그램으로 DML구문 보내면 자동으로 commit됨 

### GetConnection 클래스

```java
public class MyConnection {					//MyConnection 클래스 로드 시 static 블럭 자동호출 됨 
	static {   //생성자로 OrcacleDrive호출 딱 한번만 해줌 
		//2. JDBC드라이버 클래스 로드
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");   
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
```

- static 변수로 선언되어 있는 경우 객체생성할때
class명. 으로 쓰는것을 추천

### CLOSE()

DB연결 해제를 쉽게 하기 위해 close 전용 클래스 만들어주기 \

→ 재사용 가능 

```java
public static void close(ResultSet rs, Statement stmt, Connection con) {
		//7. DB연결 해제 
		if(rs != null)	{
			try {
				rs.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		if(stmt != null) {
			try {
				stmt.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		if(con != null) {
			try {
				con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
	public static void close(Statement stmt, Connection con) {
		close(null, stmt, con);
	}
```

### PreparedStatement

SQL구문을 반복적으로 보내야하는 경우 

Statement 보다는 PreparedStatement인터페이스가 더욱 유용함 

```java
public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Connection con = null;
//		Statement stmt = null;    
		PreparedStatement pstmt = null;

```

- Statement 대신 PreparedStatement 사용

```java

		try {
			con = MyConnection.getConnection();
//			stmt = con.createStatement();   // 이것이 밑의 pstmt까지의 코드와 같음 
			String insertSQL = "INSERT INTO customer(id, pwd, name, status)"
								+ "VALUES (?, ?, ?, ?)";    //값의 위치에서만 물음표 사용  물음표 : 바인드변수 
			pstmt = con.prepareStatement(insertSQL);
			
			System.out.println("추가할 아이디를 입력하세요:");
			String id = sc.nextLine();
			
			System.out.println("추가할 비밀번호를 입력하세요:");
			String pwd = sc.nextLine();
			
			System.out.println("추가할 이름를 입력하세요:");
			String name = sc.nextLine();
			
			System.out.println("일반고객이면 1, 기업고객이면 2를 입력하세요");
			int status = sc.nextInt();
//			String insertSQL = "INSERT INTO customer(id, pwd, name) "
//								+ "VALUES ('" + id + "', '" + pwd + "', '" + name + "')";
//								//작은따옴표는 오라클 문자열이기 때문에 
			
```

- Statement를 사용하면 위처럼 ‘” 등 Typo의 가능성이 크고 
문자를 반복적으로 송신하기가 번거롭기에 PreparedStatement 를 사용함

```java
//			stmt.executeUpdate(insertSQL);    //여기는 매개변수 있는것을 써야됨 
			pstmt.setString(1,  id);
			pstmt.setString(2,  pwd);
			pstmt.setString(3,  name);
			pstmt.setInt(4,  status);
			pstmt.executeUpdate();    //매개변수 없는것을 써야됨 ->미리 준비해둿기에 안써도됨 
			System.out.println("고객 등록 완료");
			
		} catch (SQLException e) {
			e.printStackTrace();
			return;
		} finally {
			MyConnection.close(pstmt, con);
		}
		
	}
```

- pstmt. 로 PreparedStatement 인터페이스에 접근하여
setString(인덱스번호, 넣을 값) → 여기서는 id, pwd등의 변수

### TranscationTest

- 자동 commit을 해제시켜주고, rollback을 실험해봄.
- 잘못된 값을 INSERT해주었을 시 FK제약조건 위반하여 예외 발생하는 경우 실험

```java
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.my.sql.MyConnection;

public class TransactionTest {

	public static void main(String[] args) {
		Connection con = null;
		PreparedStatement pstmt = null;
		try {
			con = MyConnection.getConnection();
			con.setAutoCommit(false);  //자동 commit되는것을 의도적으로 취소해줌 -> 롤백하기위해 
			String insertInfoSQL = "INSERT INTO order_info(order_no, order_id, order_dt)"
									+ " VALUES (order_seq.NEXTVAL, ?  , SYSDATE)";
			String insertLineSQL = "INSERT INTO order_line(order_no, order_prod_no, order_quantity)"
								+ " VALUES (order_seq.CURRVAL,    ?   ,    ?   )";
			
			pstmt = con.prepareStatement(insertInfoSQL); //주문기본추가SQL
			pstmt.setString(1, "id1");
			pstmt.executeUpdate();
			
			pstmt = con.prepareStatement(insertLineSQL); //주문상세추가SQL
			pstmt.setString(1, "C0001");  // C0001상품
			pstmt.setInt(2, 10);
			pstmt.executeUpdate();
			pstmt.setString(1, "X");  
			pstmt.setInt(2, 10);
			pstmt.executeUpdate();    //없는상품번호 ->FK제약조건 위반 -> 예외발생 -> catch로 빠짐 
			con.commit();  //정상적으로 된 경우 커밋! 트랜잭션 완료 
					
		} catch (SQLException e) {
			if(con != null) {
				try {
					con.rollback(); //트랜잭션 복구 취소 
				} catch (SQLException e1) {
				}
			}
			e.printStackTrace();
		}
		
	}

}
```

### BatchTest

- 반복문 내에서 Batch로 모아준다음에 한번에 Update함 → 네트워크 비용 감소
- 반복문 내에 Update가 있는 경우 100번 송신 → Batch쓰면 1번송신

```java
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.my.sql.MyConnection;

public class BatchTest {

	public static void main(String[] args) {
		Connection con = null;
		PreparedStatement pstmt = null;  //resultset은 여기서 필요없음 
		
		String insertSQL = "INSERT INTO a_tbl VALUES (?)"; 	//한번 보내고~ 
		try {
			con = MyConnection.getConnection();
			pstmt = con.prepareStatement(insertSQL);
//			for(int i = 100; i<=200; i++) {  				//100번 보내기 
//				pstmt.setInt(1,  i);
//				pstmt.executeUpdate();
//			}
			// 일괄처리로 바꾸기
			for(int i =101; i<=200; i++) {
				pstmt.setInt(1,  i);
				pstmt.addBatch();      //일괄처리위해 메모리에 미리 쌓아둠
			}
			pstmt.executeBatch(); 		//여기서 모아놓은것 한번에 보냄 , update인 경우 int배열로 반환함 
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			MyConnection.close(pstmt, con);
		}
		
	
	}

}
```

![Untitled](JDBC%207e054292b4a442b493f071ceb1adc226/Untitled.png)

### java.sql 패키지 내에 있는 인터페이스

2   Class.forName(”~~~오라클 jdbc 주소  ~ ~” )

3   Connection con = xxx; 

→ JDBC내에서 Connection이라는 인터페이스를 가진 클래스를 찾고,

     그 객체 형태로 객체를 업캐스팅하며 생성함 

4-1 Statement stat = con.createStatement();    

→커넥션이라는 라이브러리를 보며 코딩, JDBC내의 connection 인터페이스가 실행

4-2 stat.executeUpdate(”~SQL구문~”);    →Statement라는 라이브러리를 보며 코딩

     → JDBC내의 excuteUpdate()라는 클래스가 실행 

MySQL을 이용할 경우

2에서 주소를 OracleDrivr → MySQL로 변경

3에서 객체 변경 외에는 모두 동일 

- DB 유형이 다른경우 자바 라이브러리가 연결자 역할을 해줌
- Connection 인터페이스의 createStatement()
- Statement 인터페이스의 excuteUpdate()

인터페이스 만들려고 노력하기 ✔✔

maven repository → ojdbc8 받기 

무결성제약조건위배, order_prod_no 컬럼의 fk문제임 

java.sql.SQLIntegrityConstraintViolationException: ORA-02291: integrity constraint (HR.ORDER_PROD_NO_FK) violated - parent key not found

- 시퀀스값이 갑자기 증가해있을때

![Untitled](JDBC%207e054292b4a442b493f071ceb1adc226/Untitled%201.png)

INSERT INTO구문이 제대로 되건 말았건 간에 → 행추가안됨 

NEXTVAL은 증가함 → 무조건 실행됨 

- 시퀀스값은 제대로 처리되었는지 여부 상관없이 실행되면 증가함