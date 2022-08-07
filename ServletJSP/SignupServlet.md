# SignupServlet

```java
package com.my.control;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.my.sql.MyConnection;

public class SignupServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String id = request.getParameter("id1");
		String pwd = request.getParameter("pw1");
		String name = request.getParameter("name1");
		String addr = request.getParameter("addr");
		String buildingno = request.getParameter("buildingno");
		
		//-------DB에 저장 -----
		//정상송신시 가입성공 -> 가입성공이 아니면 가입실패 
//		String success = "{\"status\":1, \"msg\": \"가입성공\"}";
		//DB에 연결 
		Connection con = null;
		//SQL송신
		PreparedStatement pstmt = null; ///executeUpdate()
		
		int rs = 0;
		String result = "{\"status\":0, \"msg\": \"가입실패\"}";
		
		try {
			con = MyConnection.getConnection();
			String insertSQL = "INSERT INTO customer(id, pwd, name, address, status, buildingno) VALUES (?, ?, ?, ?, 1, ?)";
//		String selectIdNPwdSQL = " * FROM customer WHERE id=? AND pwd=?";
			pstmt = con.prepareStatement(insertSQL);
			pstmt.setString(1,id);  //위의 request.getParamaet("id")의 값이 대입 
			pstmt.setString(2,pwd);
			pstmt.setString(3,name);
			pstmt.setString(4,addr);
			pstmt.setString(5,buildingno);
			rs = pstmt.executeUpdate(); 
			if(rs == 1) {  //행이 1개또는 o개반환이기에 굳이 while문 안써도 됨  
				result = "{\"status\":1, \"msg\": \"가입성공\"}";
			}
			          
			
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		
		//DB연결 닫기 
		MyConnection.close(pstmt, con);  //MyConnection을 만들어둬서 이용 가능 

		
		//-------DB에 저장 -----
//		System.out.println(id + ":" + pwd + ":" + name + ":" + addr + ":" + buildingno);
		response.setContentType("application/json; charset = UTF-8");
		PrintWriter out = response.getWriter();
		out.print(result);
		
	}
	

}
```