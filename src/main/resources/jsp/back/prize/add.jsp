<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
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
	
		function uploadImg(){
			var isUping = $(this).attr("data");
			if(isUping == 1){
				alert("正在执行操作！请勿多点！");
				return false;
			}else{
				$(this).attr("data",1);
			}
			var level = $("#final_level").val();
			var name = $("#final_name").val();
			var desc = $("#final_desc").val();
			var prob = $("#final_prob").val();
			var limit = $("#final_limit").val();
			var num = $("#final_num").val();
			if(""==level || level==null){
				alert("请选择奖品类型");
				$(this).attr("data",0);
				return false;
			}else if(name == null || name == "" ){
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
			var picName = $("#pic").val();
			var extname = picName.substring(picName.lastIndexOf(".")+1,picName.length);  
			extname = extname.toLowerCase();//处理了大小写  
		    if(extname!= "jpeg"&&extname!= "jpg"&&extname!= "gif"&&extname!= "png"){  
		     	alert("错误提示:格式不正确,支持的图片格式为：JPEG、GIF、PNG、GIF！");  
				$(this).attr("data",0);
		      	return false;  
		    }
			var options = {
					url:"${backBase}/upload_pic.do",
					type:"post",
					dataType:"json",
					success:function(data){
						if(data.status == 1){
							data = data.data;
							$("#final_pic").val(data.imgUrl);
							 $("#submitForm").submit(); 
						}else{
							alert(data.info);
						}
						$("#subBtn").attr("data",0);
						return;
					},error:function(request){
						alert("出错");
						$("#subBtn").attr("data",0);
						return;
					}
			}
			$("#fileForm").ajaxSubmit(options);
		}
	
	$(function(){
		$("#level").change(function(){
			var type = $(this).val();
			$("#final_level").val(type);
		})
		$("#name").change(function(){
			var name = $(this).val();
			$("#final_name").val(name);
		})
		$("#desc").change(function(){
			var desc = $(this).val();
			$("#final_desc").val(desc);
		})
		$("#prob").change(function(){
			var prob = $(this).val();
			$("#final_prob").val(prob);
		})
		$("#limit").change(function(){
			var limit = $(this).val();
			$("#final_limit").val(limit);
		})
		$("#pic").change(function(){
			$(".file_name").html($(this).val());
		})
		$("#num").change(function(){
			$("#final_num").val($(this).val());
		})
	})
	
</script>
</head>
<body>
<form action="${backBase}/prize/add_prize.do" id="submitForm" method="post" >
	<input type="hidden" name="prizeLevel" id="final_level"/>
	<input type="hidden" name="prizeName" id="final_name"/>
	<input type="hidden" name="prizePic" id="final_pic"/>
	<input type="hidden" name="prizeDesc" id="final_desc"/>
	<input type="hidden" name="prizeProb" id="final_prob"/>
	<input type="hidden" name="allNum" id="final_num"/>
	<input type="hidden" name="dayLimit" id="final_limit" value="1"/>
</form>
<div class="back_add">
	<div class="back_add_title">添加抽奖奖品</div>
	<div class="back_add_line">
		<div class="back_add_label">类型</div>
		<div class="back_add_value">
			<select name="prizeLevel" id="level">
				<option value="">请选择奖品类型</option>
				<option value="1">特等奖</option>
				<option value="2">一等奖</option>
				<option value="3">二等奖</option>
				<option value="4">三等奖</option>
				<option value="5">四等奖</option>
			</select>
		</div>
	</div>
	<div class="back_add_line banner_mold">
		<div class="back_add_label">奖品名称</div>
		<div class="back_add_value"><input type="text" id="name" name="prizeName" maxlength="30" value="" placeholder="输入奖品名称"/></div>
	</div>
	<div class="back_add_line banner_mold">
		<div class="back_add_label">奖品描述</div>
		<div class="back_add_value"><input type="text" id="desc" name="prizeDesc" maxlength="300"  placeholder="输入奖品描述"/></div>
	</div>
	<div class="back_add_line banner_mold">
		<div class="back_add_label">中奖概率（0.000001~1）</div>
		<div class="back_add_value"><input type="text" id="prob" name="prizeProb" maxlength="10"  placeholder="输入奖品中奖概率"/></div>
	</div>
	<div class="back_add_line banner_mold">
		<div class="back_add_label">奖品总数（个）</div>
		<div class="back_add_value"><input type="text" id="num" name="allNum" maxlength="10"  placeholder="输入奖品总数"/></div>
	</div>
	<div class="back_add_line banner_mold">
		<div class="back_add_label">送出限制（个/天）</div>
		<div class="back_add_value"><input type="text" id="limit" name="dayLimit" maxlength="10" value="1" placeholder="输入奖品送出限制"/></div>
	</div>
	<div class="back_add_line">
		<div id="imgUrl"></div>
		<div class="back_add_label" >奖品图片</div>
		<div class="back_add_value">
			<div class="file_div">
				<div class="file_name">点击上传</div>
				<form id="fileForm" enctype="multipart/form-data" method="post" >
					<input type="file" id="pic" class="upload_pic" name="file"/>
				</form>
			</div>
		</div>
	</div>
	<div class="back_add_submit">
		<input type="button" id="subBtn"  onclick="uploadImg()" data="0" value="提交"/>
	</div>
	
</div>
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