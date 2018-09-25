<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>系统参数列表</title>
<link rel="stylesheet" href="${base }/common/css/back_index.css"/>
</head>
<body>
		<div class="back_form">
			<div class="back_form_title">系统参数</div>
		
			<div class="back_form_line">
					<div class="back_form_label w250">项目名</div>
					<div class="back_form_value w350" title="${config.projectName}">${config.projectName}</div>
			</div>
			<div class="back_form_line">
					<div class="back_form_label w250">端口</div>
					<div class="back_form_value w350" title="${config.port}">${config.port}</div>
			</div>
			<div class="back_form_line">
					<div class="back_form_label w250">资源服务器域名</div>
					<div class="back_form_value w350" title="${config.fileDomain}">${config.fileDomain}</div>
			</div>
			<div class="back_form_line">
					<div class="back_form_label w250">访问服务器域名</div>
					<div class="back_form_value w350" title="${config.requestdomain}">${config.requestdomain}</div>
			</div>
			<div class="back_form_line">
					<div class="back_form_label w250">用户抽奖密钥</div>
					<div class="back_form_value w350" title="${config.secretPass}">${config.secretPass}</div>
			</div>
			<div class="back_form_line">
					<div class="back_form_label w250">领取奖品密钥</div>
					<div class="back_form_value w350" title="${config.secretGet}">${config.secretGet}</div>
			</div>
			<div class="back_form_line">
					<div class="back_form_label w250">第一关过关分</div>
					<div class="back_form_value w350" title="${config.firstLimit}">${config.firstLimit}</div>
			</div>
		</div>
</body>
</html>