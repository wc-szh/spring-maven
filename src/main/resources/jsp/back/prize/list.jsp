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
<title>抽奖奖品列表</title>
</head>
<body>
	<div class="back_condition_div">
		<input type="button" value="点击添加" onclick="location.href='${backBase}/prize/to_add.do'"/>
	</div>
	<div class="back_member">
		<div class="back_member_head">
			<div class="back_member_head1 w005">编号</div>
			<div class="back_member_head1 w005">图片</div>
			<div class="back_member_head1 w005">奖品类别</div>
			<div class="back_member_head1 w010">奖品名称</div>
			<div class="back_member_head1 w015">奖品描述</div>
			<div class="back_member_head1 w010">中奖概率</div>
			<div class="back_member_head1 w005">总数</div>
			<div class="back_member_head1 w005">送出</div>
			<div class="back_member_head1 w005">领取</div>
			<div class="back_member_head1 w010">限制（个/天）</div>
			<div class="back_member_head1 w010">操作</div>
		</div>
		<c:choose>
  			<c:when test="${pagination != null && pagination.list != null && fn:length(pagination.list) != 0}">  
			<c:forEach items="${pagination.list}" var="list">
				<div class="back_member_body">
					<div class="back_member_body1 w005" title="${list.id }">${list.id}</div>
					<div class="back_member_body1 w005" title="${list.prizePic }">
					<img alt="奖品图片" src="${list.prizePic}" height="40" width="50"/>
					</div>
					<div class="back_member_body1 w005" title="${list.prizeLevel}">
						<c:if test="${list.prizeLevel!=null}">
							<c:if test="${list.prizeLevel==1}">特等奖</c:if>
							<c:if test="${list.prizeLevel==2}">一等奖</c:if>
							<c:if test="${list.prizeLevel==3}">二等奖</c:if>
							<c:if test="${list.prizeLevel==4}">三等奖</c:if>
							<c:if test="${list.prizeLevel==5}">四等奖</c:if>
						</c:if>
					</div>
					<div class="back_member_body1 w010" title="${list.prizeName }">${list.prizeName}</div>
					<div class="back_member_body1 w015" id="status_${list.prizeDesc }">${list.prizeDesc }</div>
					<div class="back_member_body1 w010" title="${list.prizeProb }"><fmt:formatNumber value=" ${list.prizeProb}" pattern="0.000000"/></div>
					<div class="back_member_body1 w005" title="${list.allNum }">${list.allNum}</div>
					<div class="back_member_body1 w005" title="${list.sendNum }">${list.sendNum}</div>
					<div class="back_member_body1 w005" title="${list.getNum }">${list.getNum}</div>
					<div class="back_member_body1 w010" title="${list.dayLimit }">${list.dayLimit}</div>
					<div class="back_member_body1 w010">
						<a href="${backBase }/prize/to_update.do?id=${list.id}">修改</a> |
						<a href="${backBase }/prize/delete_prize.do?id=${list.id}" onclick="return confirm('确定删除吗？')">删除</a>
					</div>
				</div>
			</c:forEach>
			</c:when>
			<c:otherwise>
				<div class="">
					<div class="" style="margin:20px;">暂无数据</div>
				</div>
			</c:otherwise>
		</c:choose>
		<form action="${backBase }/prize/list.do" id="paginationForm"  method="post">
			<input type="hidden" value="" id="paginationNo" name="pageNo"/>
		</form>
	</div>
	<%@include file="../include/my_page.jsp" %>
</body>
<script type="text/javascript">
	var message = "${msg}";
	$(function(){
		if(message != null && message != ""){
			alert(message);
		}
	});

</script>
</html>
