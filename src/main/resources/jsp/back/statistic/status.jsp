<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<link rel="stylesheet" href="${base }/common/css/back_index.css"/>
</head>
<body>
		<div class="back_form">
			<div class="back_form_title">统计数据</div>
		
			<div class="back_form_line">
					<div class="back_form_label w250">参与人数</div>
					<div class="back_form_value w350" title="${users.userNum}">${users.userNum}</div>
			</div>
			<div class="back_form_line">
					<div class="back_form_label w250">第一关参与数</div>
					<div class="back_form_value w350" title="${users.firstJoin}">${users.firstJoin}</div>
			</div>
			<div class="back_form_line">
					<div class="back_form_label w250">第一关通关数</div>
					<div class="back_form_value w350" title="${users.firstPass}">${users.firstPass}</div>
			</div>
			<div class="back_form_line">
					<div class="back_form_label w250">第二关参与数</div>
					<div class="back_form_value w350" title="${users.secondJoin}">${users.secondJoin}</div>
			</div>
			<div class="back_form_line">
					<div class="back_form_label w250">第二关通关数</div>
					<div class="back_form_value w350" title="${users.secondPass}">${users.secondPass}</div>
			</div>
			<div class="back_form_line">
					<div class="back_form_label w250">抽奖人数</div>
					<div class="back_form_value w350" title="${users.drawNum}">${users.drawNum}</div>
			</div>
		</div>
</body>
</html>