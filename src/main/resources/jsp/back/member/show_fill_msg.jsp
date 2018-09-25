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
	<form action="${backBase }/member/sure_get.do" method="post" onsubmit="return confirm('确认将该记录标记为已领取吗？？')">
		<input type="hidden" value="${prizeRecord.id }" name="id"/>
		<div class="back_form">
			<div class="back_form_title">中奖信息</div>
		
			<div class="back_form_line">
					<div class="back_form_label w250">奖品</div>
					<div class="back_form_value w350" title="${prize.prizeName}">${prize.prizeName}</div>
			</div>
			<div class="back_form_line">
					<div class="back_form_label w250">中奖时间</div>
					<div class="back_form_value w350" ><fmt:formatDate value="${prizeRecord.date}" type="both"/></div>
			</div>
			<div class="back_form_line">
					<div class="back_form_label w250">姓名</div>
					<div class="back_form_value w350" title="${gameStatus.name}">${gameStatus.name}</div>
			</div>
			<div class="back_form_line">
					<div class="back_form_label w250">电话</div>
					<div class="back_form_value w350" title="${gameStatus.phone}">${gameStatus.phone}</div>
			</div>
			<div class="back_form_line">
					<div class="back_form_label w250">地址</div>
					<div class="back_form_value w350" title="${gameStatus.address}">${gameStatus.address}</div>
			</div>
			<div class="back_form_line">
					<div class="back_form_label w250">身份证号</div>
					<div class="back_form_value w350" title="${gameStatus.identityNo}">${gameStatus.identityNo}</div>
			</div>
			<div class="back_form_line">
					<div class="back_form_label w250">性别</div>
					<div class="back_form_value w350" title="${gameStatus.sex}">${gameStatus.sex}</div>
			</div>
			<div class="back_form_line">
					<div class="back_form_label w250">尺码</div>
					<div class="back_form_value w350" title="${gameStatus.size}">${gameStatus.size}</div>
			</div>
			<div class="back_edit_submit" style="width:600px;">
			<input type="submit" value="确认领取"/>
			</div>
		</div>
	</form>
</body>
</html>