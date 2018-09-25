<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>系统用户编辑</title>
<link rel="stylesheet" href="${base }/common/css/back_index.css"/>
<script src="${base }/common/js/jquery-1.7.2.min.js" type="text/javascript"></script>
</head>
<body>

	<form action="${backBase}/update.do" method="post" >
	<div class="back_edit">
		<div class="back_edit_title">编辑系统信息</div>
	
		<div class="back_edit_line">
				<div class="back_edit_label">项目名</div>
				<div class="back_edit_value"><input type="text" id="projectName" name="projectName" value="${config.projectName}"/></div>
		</div>
		<div class="back_edit_line">
				<div class="back_edit_label">端口</div>
				<div class="back_edit_value"><input type="text" id="port" name="port" value="${config.port}" placeholder="端口"/></div>
		</div>
		<div class="back_edit_line">
				<div class="back_edit_label">资源服务器域名</div>
				<div class="back_edit_value"><input type="text" id="fileDomain" name="fileDomain" value="${config.fileDomain}" placeholder="资源服务器域名"/></div>
		</div>
		<div class="back_edit_line">
				<div class="back_edit_label">访问服务器域名</div>
				<div class="back_edit_value"><input type="text" id="requestdomain" name="requestdomain" value="${config.requestdomain}" placeholder="访问服务器域名"/></div>
		</div>
		<div class="back_edit_line">
				<div class="back_edit_label">用户抽奖密钥</div>
				<div class="back_edit_value"><input type="text" id="secretPass" name="secretPass" value="${config.secretPass}" placeholder=""/></div>
		</div>
		<div class="back_edit_line">
				<div class="back_edit_label">领取奖品密钥</div>
				<div class="back_edit_value"><input type="text" id="secretGet" name="secretGet" value="${config.secretGet}" placeholder="输入领取奖品的密钥"/></div>
		</div>
		<div class="back_edit_line">
				<div class="back_edit_label">第一关过关分</div>
				<div class="back_edit_value"><input type="text" id="firstLimit" name="firstLimit" value="${config.firstLimit}" placeholder="输入第一关过关分"/></div>
		</div>
		
		<div class="back_edit_submit">
			<input type="submit" value="提交"/>
		</div>
	</div>
</form>

</body>

</html>