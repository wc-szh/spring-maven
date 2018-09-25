<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>登录Clarks后台系统</title>
<link rel="stylesheet" href="${base }/common/css/back_index.css"/>
<script src="${base }/common/js/jquery-1.7.2.min.js" type="text/javascript"></script>
<script type="text/javascript">
	var message="${message}";
	$(function(){
		if (top != self) {
		   window.parent.location.href="${backBase}/index.do";
		}
		if("" != message){
			alert(message);
		}
	});
	
	$(function(){
		$("#userName").focus();
	})
	
	function doSubmit(){
		var userName = $("#userName").val();
		var password = $("#password").val();
		if("" == userName){
			alert("用户名必须填写");
			return false;
		}
		if("" == password){
			alert("密码必须填写");
			return false;
		}
	}
</script>
</head>
<body class="linear">
<div class="in_body">
	<form id="loginForm" action="${backBase }/index.do" method="post" onsubmit="return doSubmit();">
		<div class="login_back1">ClarksKids后台系统</div>
		<div class="login_back2">
			用户：<input type="text" id="userName" value="" name="userName"/>
		</div>
		<div class="login_back3">
			密码：<input type="password" id="password" value="" name="password"/>
		</div>
		<div class="login_back4">
			<input type="submit"  value="登录"/>
		</div>
	</form>

</div>


</body>
</html>