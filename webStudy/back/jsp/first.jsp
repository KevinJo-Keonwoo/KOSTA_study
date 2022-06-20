<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>first.jsp</title>
</head>
<body>
FIRST JSP
<% int i = 99; %>
<% out.print(i); %>
<hr>
<%= i %>
<hr>

<%! int i; %>
<%= i %>
<hr>
<%= this.i %>

</body> 
</html>