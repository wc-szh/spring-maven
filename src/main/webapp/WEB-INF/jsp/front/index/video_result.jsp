<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Access-Control-Allow-Origin" content="*">
<title>Insert title here</title>
<script type="text/javascript" src="${base}/common/js/jquery-1.7.2.min.js"></script>
<script src="${base}/common/js/jquery-form.js" type="text/javascript"></script>
</head>
<body>
<form action="${requestDomain }/back_domain.pc" id="myForm" method="post">
<input type="text" name="videoUrl" value="${videoUrl }" id="video"/>
<input type="text" name="msg" value="${msg }" id="msg"/>
<input type="text" name="videoImg" value="${videoImg }" id="videoImg"/>
</form>
<script type="text/javascript">
	$(document).ready(function(){ 
			$("#myForm").submit();
	}); 

</script>
</body>
</html>