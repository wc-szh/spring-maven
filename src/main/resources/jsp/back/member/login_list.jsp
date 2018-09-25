<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${base }/common/css/back_index.css"/>
<script src="${base }/common/js/jquery-1.7.2.min.js" type="text/javascript"></script>
<title></title>
</head>
<body>
	<div class="back_member">
		<div class="back_member_head">
			<div class="back_member_head1 w80">编号</div>
			<div class="back_member_head1 w250">username</div>
			<div class="back_member_head1 w150">登入时间</div>
			<div class="back_member_head1 w180">登入ip</div>
		</div>
		<c:choose>
  			<c:when test="${pagination != null && pagination.list != null && fn:length(pagination.list) != 0}">  
			<c:forEach items="${pagination.list}" var="loginRecord">
				<div class="back_member_body">
					<div class="back_member_body1 w80" title="${loginRecord.id }">${loginRecord.id }</div>
					<div class="back_member_body1 w250" title="${loginRecord.username }">${loginRecord.username }</div>
					<div class="back_member_body1 w150"><fmt:formatDate value="${loginRecord.loginDate}" type="both"/></div>
					<div class="back_member_body1 w180" title="${loginRecord.loginIp }">${loginRecord.loginIp }</div>
				</div>
			</c:forEach>
			</c:when>
			<c:otherwise>
				<div class="">
					<div class="" style="margin:20px;">暂无数据</div>
				</div>
			</c:otherwise>
		</c:choose>
		<form action="${backBase }/member/login_list.do" id="paginationForm"  method="post">
			<input type="hidden" value="" id="paginationNo" name="pageNo"/>
			<input type="hidden" value="${id}" name="id"/>
		</form>
	</div>
	<%@include file="../include/my_page.jsp" %>
</body>
</html>