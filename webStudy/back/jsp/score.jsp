<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>score.jsp</title>
<script src="../jq/score.js"></script>
</head>
<body>
<%--요청전달데이터 얻기--%>
<%
String score = request.getParameter("score");
%>
<%=score%>점을 선택하셨습니다
<hr>
<%! 
int totalScore = 0;
int peopleNum = 0;

%>
<% 
totalScore += Integer.parseInt(score); 
peopleNum++;	
%>
<br>
총점은 <%=totalScore%>입니다
<br>
참여인원은 <%=peopleNum%>명입니다
<br>
평점은 <%=(float)totalScore/peopleNum%>점입니다
<br>
<a href="/front/html/score.html">별점주기</a>

</body>
</html>