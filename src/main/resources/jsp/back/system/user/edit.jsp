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
<form action="${backBase}/user/update.do" method="post" id="submitForm">
<div class="back_edit">
	<div class="back_edit_title">修改用户</div>

	<div class="back_edit_line">
			<div class="back_edit_label">用户名</div>
			<div class="back_edit_value"><input type="text" id="userName" name="userName" value="${adminUser.userName }" disabled="disabled"/></div>
	</div>
	<div class="back_edit_line">
			<div class="back_edit_label">密码</div>
			<div class="back_edit_value"><input type="password" id="password" name="password" value=""/></div>
	</div>
	<div class="back_edit_line">
			<div class="back_edit_label">手机号</div>
			<div class="back_edit_value"><input type="text" id="mobile" name="mobile" value="${adminUser.mobile}"/></div>
	</div>
	<div class="back_edit_line">
			<div class="back_edit_label">QQ</div>
			<div class="back_edit_value"><input type="text" name="qq" value="${adminUser.qq }"/></div>
	</div>
	<%-- <div class="back_edit_line">
			<div class="back_add_label">管理员等级</div>
			<div class="back_add_value">
				<select name="level">
					<option value="1" <c:if test="${adminUser.level==1}">selected</c:if>>普通管理员</option>
				</select>
			</div>
	</div> --%>
	<div class="back_edit_line">
			<div class="back_edit_label">状态</div>
			<div class="back_edit_value"><input type="radio" name="status" value="0" checked="checked"/>正常&nbsp;&nbsp;<input type="radio" name="status" value="1"/>禁用</div>
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
		var userName = $("#userName").val().trim();
		var mobile = $("#mobile").val().trim();
		if(userName=="" || userName.length<=0){
			alert("用户名必须填写");
			return false;
		}
		if(userName.indexOf(" ")!=-1){
			alert("用户名中不能有空格");
			return false;	
		}
		if(userName.length<3 || userName.length>10){
			alert("用户名长度必须在3-10位");
			return false;
		}
		var password = $("#password").val().trim();
		if(""!=password){
			if(password.indexOf(" ")!=-1){
				alert("密码中不能有空格");
				return false;	
			}
			if(password.length<6 || password.length>18){
				alert("密码长度必须在6-18位");
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
		if("用户不存在"==message){
			alert("用户不存在");
		}
		if("更新用户失败"==message){
			alert("更新用户失败");
		}
	})
</script>
</html>