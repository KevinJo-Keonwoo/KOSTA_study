# LoginServlet

```java
package com.my.control;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.my.sql.MyConnection;

public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		doGet(request, response);
//		System.out.println("loginServlet의 doPost() 호출됨");		
		
		//1. 요청전달데이터얻기 
		String id = request.getParameter("id");
		String pwd = request.getParameter("pwd");
		
		//2. DB와 연결
		Connection con = null;
		//3. SQL송신
		PreparedStatement pstmt = null;
		//4. 송신결과
		ResultSet rs = null;
		//응답결과
		String result = "{\"status\": 0}";
		try {
			con = MyConnection.getConnection();
			String selectIdNPwdSQL = "SELECT * FROM customer WHERE id=? AND pwd=?";
			pstmt = con.prepareStatement(selectIdNPwdSQL);
			pstmt.setString(1,  id);  //위의 request.getParamaet("id")의 값이 대입 
			pstmt.setString(2,  pwd);
			rs = pstmt.executeQuery(); //결과로 받아줘야함 
 			
			if(rs.next()) {  //행이 1개또는 o개반환이기에 굳이 while문 안써도 됨  
				result = "{\"status\" : 1 }";  //로그인이 성공인 경우
			}
			;  
			
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			//DB와 연결 닫기
			MyConnection.close(rs, pstmt, con);  //MyConnection을 만들어둬서 이용 가능 
		}
		
		
		
		response.setContentType("application/json;charset=UTF-8");
		PrintWriter out = response.getWriter();
		
		out.print(result);
//		if("id1".equals(id) && "p1".equals(pwd)) {
////			out.print("id=" + id + ", pwd=" + pwd);
//			out.print("{\"status\" : 1 }");
//		}else {
//			out.print("{\"status\" : 2 }");
//		}

	}

}
```