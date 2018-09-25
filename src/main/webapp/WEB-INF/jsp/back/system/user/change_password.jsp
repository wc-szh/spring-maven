<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>系统用户添加</title>
<link rel="stylesheet" href="${base }/common/css/back_index.css"/>
<script type="text/javascript" src="${base}/common/js/jquery-1.7.2.min.js"></script>
</head>
<body>
<style>

</style>
<form action="${backBase}/useradmin/updateInfo.do" method="post" id="submitForm">
<div class="back_edit">
	<div class="back_edit_title">修改用户</div>
<input type="hidden" id="userName" name="userName" value="${adminUser.userName }"/>
	<div class="back_edit_line">
			<div class="back_edit_label">用户名</div>
			<div class="back_edit_value"><input type="text" id="userName" name="userName" value="${adminUser.userName }" disabled="disabled"/></div>
	</div>
	<div class="back_edit_line">
			<div class="back_edit_label">密码</div>
			<div class="back_edit_value"><input type="password" id="password" name="password" value=""/></div>
	</div>
	<div class="back_edit_line">
			<div class="back_edit_label">新密码（不改请留空）</div>
			<div class="back_edit_value"><input type="password" id="newPassword" name="newPassword" value=""/></div>
	</div>
	<div class="back_edit_line">
			<div class="back_edit_label">重复新密码</div>
			<div class="back_edit_value"><input type="password" id="rePassword" value=""/></div>
	</div>
	<div class="back_edit_line">
			<div class="back_edit_label">手机号</div>
			<div class="back_edit_value"><input type="text" id="mobile" name="mobile" value="${adminUser.mobile}"/></div>
	</div>
	<div class="back_edit_line">
			<div class="back_edit_label">QQ</div>
			<div class="back_edit_value"><input type="text" name="qq" value="${adminUser.qq }"/></div>
	</div>
	<div class="back_edit_submit">
		<input type="hidden" name="id" value="${adminUser.id }"/>
		<input type="button" onclick="doSubmit()" value="提交"/>
		<input type="button" value="返回" onclick="javascript:window.history.go(-1)"/>
	</div>
</div>

</form>


</body>
<script type="text/javascript">

	function doSubmit(){
		var password = $("#password").val().trim();
		var mobile = $("#mobile").val().trim();
		if(password == "" || password == null){
			alert("请输入密码！");
			return false;
		}
		var newPassword = $("#newPassword").val().trim();
		var rePassword = $("#rePassword").val().trim();
		if(""!=newPassword){
			if(newPassword.indexOf(" ")!=-1){
				alert("密码中不能有空格");
				return false;	
			}
			if(newPassword.length<6 || newPassword.length>18){
				alert("密码长度必须在6-18位");
				return false;
			}
			if(newPassword != rePassword){
				alert("两次输入的密码不一样");
				return false;
			}
		}
		var regex = /^1[3|4|5|8]\d{9}$/;
		if(!regex.test(mobile)){
			alert("手机号格式不正确");
			return false;
		}
		$("#submitForm").submit();

	}
	
	var message = "${message}";
	$(function(){
		if("" != message && message != null){
			alert(message);
		}
	})
</script>
</html>