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
<div class="back_condition_div">
<form action="${backBase}/member/list.do" method="post" id="submitForm">
	<select name="sortType">
		<option value="">选择排序方式</option>
		<option value="1" <c:if test="${sortType != null && sortType == 1  }">selected</c:if>>最近登入</option>
		<option value="2" <c:if test="${sortType != null && sortType == 2  }">selected</c:if>>登录最多</option>
		<option value="3" <c:if test="${sortType != null && sortType == 3  }">selected</c:if>>按注册时间</option>
	</select>	
	<input type="text" id="username" name="username" placeholder="请输入用户名" value="${username}"/>
	<input type="text" id="nickName" name="nickName" placeholder="请输入昵称" value="${nickName}"/>
	<input type="submit" value="确定"/>
</form>
</div>

	<div class="back_member">
		<div class="back_member_head">
			<div class="back_member_head1 w005">编号</div>
			<div class="back_member_head1 w020">昵称</div>
			<div class="back_member_head1 w005">性别</div>
			<div class="back_member_head1 w015">首次登录</div>
			<div class="back_member_head1 w015">最后登录</div>
			<div class="back_member_head1 w010">登录数</div>
			<!-- <div class="back_member_head1 w250">操作</div> -->
		</div>
		<c:choose>
  			<c:when test="${pagination != null && pagination.list != null && fn:length(pagination.list) != 0}">  
			<c:forEach items="${pagination.list}" var="user">
				<div class="back_member_body">
					<div class="back_member_body1 w005" title="${user.id }">${user.id }</div>
					<div class="back_member_body1 w020" title="${user.nickName }">${user.nickName }</div>
					<div class="back_member_body1 w005" >
					    <!--sex值为0时，显示男  -->
						<c:choose>
							<c:when test="${user.sex  == '0'}">  未知 </c:when> 
							<c:when test="${user.sex  == '1'}">  男  </c:when> 
							<c:when test="${user.sex  == '2'}">  女 </c:when> 
						</c:choose>	
					</div>
				 	<div class="back_member_body1 w015" ><fmt:formatDate value="${user.firstLoginTime}" type="both"/></div> 
					<div class="back_member_body1 w015" ><fmt:formatDate value="${user.lastLoginTime}" type="both"/></div>
					<div class="back_member_body1 w010 cptW" onclick="location.href='${backBase}/member/login_list.do?id=${user.id}'" title="${user.loginTimes }">
						${user.loginTimes }
					</div>
					<!-- <div class="back_member_body1 w250">
						<a href="">修改</a> | <a href="">删除</a>
					</div> -->
				</div>
			</c:forEach>
			</c:when>
			<c:otherwise>
				<div class="">
					<div class="" style="margin:20px;">暂无数据</div>
				</div>
			</c:otherwise>
		</c:choose>
		<form action="${backBase }/member/list.do" id="paginationForm"  method="post">
			<input type="hidden" value="" id="paginationNo" name="pageNo"/>
			<input type="hidden" value="${username}" name="username"/>
			<input type="hidden" value="${nickName}" name="nickName"/>
			<input type="hidden" value="${sortType}" name="sortType"/>
		</form>
	</div>
	<%@include file="../include/my_page.jsp" %>
	<script type="text/javascript">
		var msg = "${message}";
		if(msg != null && "" != msg){
			alert(msg);
		}
	</script>
</body>
</html>