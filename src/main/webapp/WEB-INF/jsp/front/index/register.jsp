<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html >
<html>
<head>
<title>注册</title>
<meta charset="UTF-8">
<meta name="Description" content="">
<meta name="Keywords" content="">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="apple-mobile-web-app-title" content="" />
<meta name="apple-touch-fullscreen" content="YES" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="format-detection" content="telephone=no" />
<meta name="HandheldFriendly" content="true" />
<meta http-equiv="x-rim-auto-match" content="none" />
<meta name="format-detection" content="telephone=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<script type="text/javascript"
	src="${base }/common/js/jquery-1.7.2.min.js"></script>
</head>
<body>

	<style>
* {
	text-align: center;
}

#formDiv {
	margin: 200px auto 0px auto;
}
</style>
	<div id="formDiv">
		<div>注册</div>
		<div>
			<input type="text" id="username" value="" placeholder="输入用户名" />
		</div>
		<div>
			<input type="password" id="password" value="" placeholder="输入密码" />
		</div>
		<div>
			<input type="text" id="nickName" value="" placeholder="输入昵称" />
		</div>
		<div>选择性别：
			<input  type="radio" checked="checked" name="sex" value="0"/>男
			<input  type="radio"  name="sex" value="1"/>女
		</div>

		
		<div>
			<input type="button" value="注册" id="registerButton" />
		</div>
	</div>

	<script>
		$(function() {
			$("#registerButton").click(function() {
				var username = $("#username").val();
				var password = $("#password").val();
				var nickName = $("#nickName").val();
				var sex=$('input:radio[name="sex"]:checked').val();
				$.ajax({
					url : "${base}/register.cc",
					type : "post",
					dataType : "json",
					data : {
						username : username,
						password : password,
						nickName : nickName,
						sex : sex
					},
					success : function(data) {
						if (data.status == 1) {
							alert("注册成功");
							location.href = "${base}/toLogin.cc";
						} else {
							alert(data.info);
						}
					},
					error : function(e) {
						alert("出错了");
						console.log(e);
					}
				})
			})
		})
	</script>
</body>
</html>