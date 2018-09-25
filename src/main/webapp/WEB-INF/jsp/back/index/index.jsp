<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Clarks后台系统</title>
<link rel="stylesheet" href="${base }/common/css/back_index.css"/>
<script src="${base }/common/js/jquery-1.7.2.min.js" type="text/javascript"></script>
<script src="${base }/common/js/back_index.js" type="text/javascript"></script>
</head>
<body class="linear">

<div class="back_index1">Clarks后台系统
	<div class="back_index4">
		欢迎您：${user.userName } 
		<a href="${backBase}/useradmin/changePassword.do?id=${user.id}" target="content">修改个人信息</a>
		<a href="${backBase}/loginOut.do" style="color:black;font-size:16px;">注销</a>
		<br/>
		时间：<span id="current_time">0000年00月00日 00:00:00</span>
	</div>
</div>
<div class="back_index2">
<ul class="index_ul">
	<li class="index_system">
		<a class="index_system_menu">用户</a>
		<ul class="index_system_ul">
			<li class="index_system_li_bg select_menu"><a href="${backBase }/member/list.do" target="content">用户列表</a></li>
			<li class="index_system_li_bg select_menu"><a href="${backBase }/member/prize_record.do" target="content">中奖记录</a></li>
		</ul>
	</li>
	 <c:if test="${user.level != null && user.level == 0 }"> 
	<li class="index_system">
		<a class="index_system_menu">管理员</a>
		<ul class="index_system_ul">
			<li class="index_system_li_bg select_menu"><a href="${backBase }/useradmin/list.do" target="content">管理员列表</a></li>
			<li class="index_system_li_bg select_menu"><a href="${backBase }/useradmin/add.do" target="content">添加管理员</a></li>
		</ul>
	</li>
	 </c:if> 
	<li class="index_system">
		<a class="index_system_menu">系统设置</a>
		<ul class="index_system_ul">
			<li class="index_system_li_bg select_menu"><a href="${backBase }/system_list.do" target="content">查看</a></li>
			<li class="index_system_li_bg select_menu"><a href="${backBase }/edit.do" target="content">设置</a></li>
			<li class="index_system_li_bg select_menu"><a href="${backBase }/prize/list.do" target="content">奖品设置</a></li>
		</ul>
	</li>
	<li class="index_system">
		<a class="index_system_menu">统计数据</a>
		<ul class="index_system_ul">
			<li class="index_system_li_bg select_menu"><a href="${backBase }/statistic/stat_user.do" target="content">用户信息</a></li>
			<li class="index_system_li_bg select_menu"><a href="${backBase }/statistic/dayList.do" target="content">页面统计</a></li>
		</ul>
	</li>
</ul>
</div>
<div class="back_index3">
<iframe name="content" style="width:100%;height:100%;border:0px;"></iframe>
</div>
</body>
</html>