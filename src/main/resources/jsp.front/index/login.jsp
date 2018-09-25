<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html >
<html>
<head>
<title>登入游戏</title>
<meta charset="UTF-8">
    <meta name="Description" content="">
    <meta name="Keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta name="apple-mobile-web-app-title" content=""/>
    <meta name="apple-touch-fullscreen" content="YES"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="HandheldFriendly" content="true"/>
    <meta http-equiv="x-rim-auto-match" content="none"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<script type="text/javascript" src="${base }/common/js/jquery-1.7.2.min.js"></script>
</head>
<body>

<style>
	* { text-align: center; }
	#formDiv{margin: 200px auto 0px auto;} 
</style>
	<div id="formDiv">
		<!-- 登入表单 -->
		<form action="${base }/login.cc" method="post" >
			<div>登入</div>
			<div><input type="text" name="username" value="" placeholder="输入用户名" /></div>
			<div><input type="password" name="password" value="" placeholder="输入密码"/></div>
			<div><input type="submit" value="登入" /><a href="${base }/toRegister.cc" >注册</a></div>
		</form>
	</div>

<script type="text/javascript">
	$(function() {
		var msg = "${msg}";
		if (msg && msg != "") {
			alert(msg);
		}
	})
</script>
</body>
</html>