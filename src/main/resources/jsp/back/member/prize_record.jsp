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
<form action="${backBase}/member/prize_record.do" method="post" id="submitForm">
	<select name="prizeLevel">
		<option value="">选择奖品等级</option>
		<option value="1" <c:if test="${prizeLevel != null && prizeLevel == 1  }">selected</c:if>>特等奖</option>
		<option value="2" <c:if test="${prizeLevel != null && prizeLevel == 2  }">selected</c:if>>一等奖</option>
		<option value="3" <c:if test="${prizeLevel != null && prizeLevel == 3  }">selected</c:if>>二等奖</option>
		<option value="4" <c:if test="${prizeLevel != null && prizeLevel == 4  }">selected</c:if>>三等奖</option>
		<option value="5" <c:if test="${prizeLevel != null && prizeLevel == 5  }">selected</c:if>>四等奖</option>
	</select>	
	<select name="isGet">
		<option value="">选择领取状态</option>
		<option value="0" <c:if test="${isGet != null && isGet == 0  }">selected</c:if>>未领取</option>
		<option value="1" <c:if test="${isGet != null && isGet == 1  }">selected</c:if>>已领取</option>
	</select>	
	<input type="text" id="nickName" name="nickName" placeholder="请输入昵称" value="${nickName}"/>
	<input type="submit" value="确定"/>
</form>
</div>
	<div class="back_member">
		<div class="back_member_head">
			<div class="back_member_head1 w005">编号</div>
			<div class="back_member_head1 w020">用户名</div>
			<div class="back_member_head1 w010">奖品等级</div>
			<div class="back_member_head1 w015">奖品名称</div>
			<div class="back_member_head1 w010">中奖时间</div>
			<div class="back_member_head1 w010">状态</div>
			<div class="back_member_head1 w010">操作</div>
		</div>
		<c:choose>
  			<c:when test="${pagination != null && pagination.list != null && fn:length(pagination.list) != 0}">  
			<c:forEach items="${pagination.list}" var="list">
				<div class="back_member_body">
					<div class="back_member_body1 w005" title="${list.id }">${list.id }</div>
					<div class="back_member_body1 w020" title="${list.user.nickName }">${list.user.nickName }</div>
					<div class="back_member_body1 w010" title="${list.prize.prizeLevel }">
						<c:if test="${list.prize.prizeLevel!=null}">
							<c:if test="${list.prize.prizeLevel==1}">特等奖</c:if>
							<c:if test="${list.prize.prizeLevel==2}">一等奖</c:if>
							<c:if test="${list.prize.prizeLevel==3}">二等奖</c:if>
							<c:if test="${list.prize.prizeLevel==4}">三等奖</c:if>
							<c:if test="${list.prize.prizeLevel==5}">四等奖</c:if>
						</c:if>
					</div>
					<div class="back_member_body1 w015" >${list.prize.prizeName }</div>
					<div class="back_member_body1 w010" ><fmt:formatDate value="${list.date}" type="both"/></div>
					<div class="back_member_body1 w010" title="${list.isGet }">
							<c:if test="${list.isGet==0}">未领取</c:if>
							<c:if test="${list.isGet==1}">已领取</c:if>
					</div>
					<div class="back_member_body1 w010" >
						<c:choose>
				  			<c:when test="${list.prize.prizeLevel==1 && list.isGet==0 || list.prize.prizeLevel==2 && list.isGet==0}">  
							 <a href="${backBase }/member/show_fill_msg.do?id=${list.id}" style="color:blue">查看</a>
							</c:when>
							<c:otherwise>
								无
							</c:otherwise>
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
		<form action="${backBase }/member/prize_record.do" id="paginationForm"  method="post">
			<input type="hidden" value="" id="paginationNo" name="pageNo"/>
			<input type="hidden" value="${prize.prize.prizeLevel }" name="prizeLevel"/>
			<input type="hidden" value="${nickName }"  name="nickName"/>
			<input type="hidden" value="${isGet }"  name="isGet"/>
		</form>
	</div>
	<%@include file="../include/my_page.jsp" %>
	<script type="text/javascript">
		var msg = "${msg}";
		if(msg != null && "" != msg){
			alert(msg);
		}
	</script>
</body>
</html>