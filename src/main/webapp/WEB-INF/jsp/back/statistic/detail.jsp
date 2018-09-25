<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>统计页面</title>
<link rel="stylesheet" href="${base }/common/css/back_index.css"/>
<script src="${base }/common/js/jquery-1.7.2.min.js" type="text/javascript"></script>

</head>
<body>
<div class="back_member">
		<div class="back_member_head">
			<div class="back_member_head1 w010">日期</div>
			<div class="back_member_head1 w015">注册人数</div>
			<div class="back_member_head1 w015">抽奖人数</div>
			<div class="back_member_head1 w015">访问量/PV</div>
			<div class="back_member_head1 w015">独立访客/UV</div>
			<!-- <div class="back_member_head1 w200">页面</div> -->
		</div>
		<c:choose>
  			<c:when test="${pagination != null && pagination.list != null && fn:length(pagination.list) != 0}">  
			<c:forEach items="${pagination.list}" var="statistic">
				<div class="back_member_body">
					<%-- <div class="back_member_body1 w015" ><fmt:formatDate value="${list.addTime}" type="date"/></div> --%>
					<%-- <div class="back_member_body1 w010" title="${statistic.statisticDate}">${statistic.statisticDate}</div> --%>
					<div class="back_member_body1 w010" title="<fmt:formatDate value='${statistic.statisticDate}' pattern='yyyy-MM-dd'/>"><fmt:formatDate value='${statistic.statisticDate}' pattern='yyyy-MM-dd'/></div>
					<div class="back_member_body1 w015" title="${statistic.dayRegisterSum }">${statistic.dayRegisterSum }</div>
					<div class="back_member_body1 w015" title="${statistic.dayDrawSum }">${statistic.dayDrawSum }</div>
					<div class="back_member_body1 w015" title="${statistic.dayPv }">${statistic.dayPv }</div>
					<div class="back_member_body1 w015" title="${statistic.dayUv }">${statistic.dayUv  }</div>
					<%-- <div class="back_member_body1 w200" title="${list.pageUrl }">${list.pageUrl }</div> --%>
					
					<fmt:formatDate value='${servertime}' pattern='yyyy/MM/dd'/>
				</div>
			</c:forEach>
			</c:when>
			<c:otherwise>
				<div class="">
					<div class="" style="margin:20px;">暂无数据</div>
				</div>
			</c:otherwise>
		</c:choose>
		<form action="${backBase }/statistic/dayList.do" id="paginationForm"  method="post">
			<input type="hidden" value="${pageNo }" id="paginationNo" name="pageNo"/>
<%-- 			<input type="hidden" value="${pageUrl}" name="pageUrl"/>
			<input type="hidden" value="${dayDate}" name="dayDate"/> --%>
		</form>
	</div>
	<%@include file="../include/my_page.jsp" %>
	
	
</body>
</html>