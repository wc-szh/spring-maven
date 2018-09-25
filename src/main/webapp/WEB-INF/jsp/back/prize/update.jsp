<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- <meta http-equiv="Access-Control-Allow-Origin" content="*"> -->
<title>添加奖品</title>
<link rel="stylesheet" href="${base }/common/css/back_index.css"/>
<script type="text/javascript" src="${base}/common/js/jquery-1.7.2.min.js"></script>
<script src="${base}/common/js/jquery-form.js" type="text/javascript"></script>

<script type="text/javascript">
	function checkData(){
		var name = $("#prizeName").val();
		var desc = $("#prizeDesc").val();
		var prob = $("#prizeProb").val();
		var limit = $("#dayLimit").val();
		var num = $("#allNum").val();
		if(name == null || name == "" ){
			alert("请填写奖品名称");
			$(this).attr("data",0);
			return false;
		}else if(desc == null || desc == ""){
			alert("请填写奖品描述");
			$(this).attr("data",0);
			return false;
		}else if(prob == null || isNaN(prob) || prob >=1 || prob < 0.000001){
			alert("中奖概率格式错误！应为0.000001~1的小数");
			$(this).attr("data",0);
			return false;
		}else if(num == null || num == "" || isNaN(num)){
			alert("奖品总数格式错误！纯数字");
			$(this).attr("data",0);
			return false;
		}else if(limit == null || limit == "" || isNaN(limit)){
			alert("每天送出数量限制格式错误！纯数字");
			$(this).attr("data",0);
			return false;
		}
	}
</script>
</head>
<body>
<form action="${backBase}/prize/update_prize.do" id="submitForm" method="post" onsubmit="return checkData();">
<input type="hidden" value="${prize.id }" name="id"/>
	<div class="back_add">
		<div class="back_add_title">修改抽奖奖品</div>
		<div class="back_add_line">
			<div class="back_add_label">类型</div>
			<div class="back_add_value">
				<select name="prizeLevel" id="level" disabled>
					<option value="">请选择奖品类型</option>
					<option value="1" <c:if test="${prize.prizeLevel != null &&prize.prizeLevel==1 }">selected</c:if>>特等奖</option>
					<option value="2" <c:if test="${prize.prizeLevel != null &&prize.prizeLevel==2 }">selected</c:if>>一等奖</option>
					<option value="3" <c:if test="${prize.prizeLevel != null &&prize.prizeLevel==3 }">selected</c:if>>二等奖</option>
					<option value="4" <c:if test="${prize.prizeLevel != null &&prize.prizeLevel==4 }">selected</c:if>>三等奖</option>
					<option value="5" <c:if test="${prize.prizeLevel != null &&prize.prizeLevel==5 }">selected</c:if>>四等奖</option>
				</select>
			</div>
		</div>
		<div class="back_add_line banner_mold">
			<div class="back_add_label">奖品图片</div>
			<div class="back_add_value">
				<img src="${prize.prizePic }" style="width:40px;height:40px;"/>
			</div>
		</div>
		<div class="back_add_line banner_mold">
			<div class="back_add_label">奖品名称</div>
			<div class="back_add_value"><input type="text" id="prizeName" name="prizeName" maxlength="30" value="${prize.prizeName }" placeholder="输入奖品名称"/></div>
		</div>
		<div class="back_add_line banner_mold">
			<div class="back_add_label">奖品描述</div>
			<div class="back_add_value"><input type="text" id="prizeDesc" name="prizeDesc" maxlength="300" value="${prize.prizeDesc }" placeholder="输入奖品描述"/></div>
		</div>
		<div class="back_add_line banner_mold">
			<div class="back_add_label">中奖概率（0.000001~1）</div>
			<div class="back_add_value"><input type="text" id="prizeProb" name="prizeProb" maxlength="10" value='<fmt:formatNumber value="${prize.prizeProb}" pattern="0.000000"/>' placeholder="输入奖品中奖概率"/></div>
		</div>
		<div class="back_add_line banner_mold">
			<div class="back_add_label">奖品总数（个）</div>
			<div class="back_add_value"><input type="text" id="allNum" name="allNum" maxlength="10" value="${prize.allNum}" placeholder="输入奖品总数"/></div>
		</div>
		<div class="back_add_line banner_mold">
			<div class="back_add_label">送出限制（个/天）</div>
			<div class="back_add_value"><input type="text" id="dayLimit" name="dayLimit" maxlength="10" value="${prize.dayLimit}" placeholder="输入奖品送出限制"/></div>
		</div>
		<div class="back_add_submit">
			<input type="submit" value="确认修改" />
		</div>
		
	</div>
</form>
<style>
	.file_div{width: 100%;
    height: 30px;
    background: #5AA1FD;
    color: white;
    cursor: pointer;
    width: 100%;
    height: 30px;
    position:relative;}
    .file_div>div{position:absolute;top:0px;left:0px;width:100%;height:30px;}
    .upload_pic{ 
       width: 100%;
    height: 30px;
     filter:alpha(opacity=0);
    -moz-opacity:0;
    opacity:0;
    z-index:3;
    cursor:pointer; }
</style>

</body>
</html>