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
		<form action="${backBase}/useradmin/list.do" method="post">
		
			<div><input type="text" id="keyWords" name="keyWords" placeholder="请输入用户名" value="${keyWords}"/>
			<input type="submit" value="搜索"/>
			</div>
		</form>
	</div>

	<div class="back_member">
		<div class="back_member_head">
			<div class="back_member_head1 w005">编号</div>
			<div class="back_member_head1 w010">用户名</div>
			<div class="back_member_head1 w010">手机号</div>
			<div class="back_member_head1 w010">QQ</div>
			<div class="back_member_head1 w015">注册时间</div>
			<div class="back_member_head1 w015">最后登录时间</div>
			<div class="back_member_head1 w005">会员等级</div>
			<div class="back_member_head1 w005">状态</div>
			<div class="back_member_head1 w015">操作</div>
		</div>
		<c:choose>
  			<c:when test="${pagination != null && pagination.list != null && fn:length(pagination.list) != 0}">  
			<c:forEach items="${pagination.list}" var="user">
				<div class="back_member_body">
					<div class="back_member_body1 w005" title="${user.id }">${user.id }</div>
					<div class="back_member_body1 w010" title="${user.userName }">${user.userName }</div>
					<div class="back_member_body1 w010" title="${user.mobile }">${user.mobile }</div>
					<div class="back_member_body1 w010" title="${user.qq}">${user.qq }</div>
					<div class="back_member_body1 w015" ><fmt:formatDate value="${user.registerTime}" type="both"/></div>
					<div class="back_member_body1 w015" ><fmt:formatDate value="${user.lastLoginTime}" type="both"/></div>
					<div class="back_member_body1 w005" title="${user.level}">
						<c:if test="${user.level == 0 }">超级管理员</c:if>
						<c:if test="${user.level == 1 }">普通管理员</c:if>
					</div>
					<div class="back_member_body1 w005" title="${user.status}" id="user_status_${user.id }">
						<c:choose>
							<c:when test="${0==user.status}">正常</c:when>
							<c:otherwise>禁用</c:otherwise>
						</c:choose>
					</div>
					<div class="back_member_body1 w015" >
						<c:choose>
							<c:when test="${0==user.status}">
								<a class="changeStatus cptB" id="changeStatus_${user.id }" dataId="${user.id}" data="1">禁用</a>
							</c:when>
							<c:when test="${1==user.status}">
								<a class="changeStatus cptB" id="changeStatus_${user.id }" dataId="${user.id}" data="0">启用</a>
							</c:when>
						</c:choose>
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
		<form action="${backBase }/useradmin/list.do" id="paginationForm"  method="post">
			<input type="hidden" value="" id="paginationNo" name="pageNo"/>
			<input type="hidden" value="${keyWords}" name="keyWords"/>
		</form>
	</div>
	<%@include file="../../include/my_page.jsp" %>
	<script type="text/javascript">
	$(function(){
		$(".changeStatus").click(function(){
			var id = $(this).attr("dataId");
			var status = $(this).attr("data");
			if(id == null || id == "" || status == null || status == ""){
				alert("请刷新后重试！");
				return ;
			}else{
				$.ajax({
					url:"${backBase}/useradmin/change_status.do",
					type:"post",
					data:{id:id,status:status},
					dataType:"json",
					success:function(data){
						if(data.status == 1){
							data = data.data;
							if(data.status == 0){
								$("#user_status_"+id).html("正常");
								$("#changeStatus_"+id).attr("data","1");
								$("#changeStatus_"+id).html("禁用");
							}else if(data.status == 1){
								$("#user_status_"+id).html("禁用");
								$("#changeStatus_"+id).attr("data","0");
								$("#changeStatus_"+id).html("启用");
							}
							return;
						}else{
							alert(data.info);
							return;
						}
					},error:function(request){
						alert("修改管理员状态出错了！");
						return;
					}
					
				})
			}
		})	
			
	})
		
	</script>
</body>
</html>
