<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%  %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>图片上传</title>
<script src="${base}/common/js/jquery-1.7.2.min.js" type="text/javascript"></script>
<script src="${base}/common/js/jquery-form.js" type="text/javascript"></script>
<script type="text/javascript">
//上传图片
function uploadPic(){
	var picName = $("#pic").val();
	var extname = picName.substring(picName.lastIndexOf(".")+1,picName.length);  
	extname = extname.toLowerCase();//处理了大小写  
    if(extname!= "jpeg"&&extname!= "jpg"&&extname!= "gif"&&extname!= "png"){  
      $("#picTip").html("<span style='color:Red'>错误提示:格式不正确,支持的图片格式为：JPEG、GIF、PNG、JPG！</span>");  
      return false;  
     }  
    var file = document.getElementById("pic").files;    
    var size = file[0].size; 
    if(size>2097152){  
         $("#picTip").html("<span style='color:Red'>错误提示:所选择的图片太大，图片大小最多支持2M!</span>");   
         return false;  
     }  
	
  //定义参数
	var options = {
		url : "${backBase}/frontupload/uploadPic.pc",
		dataType : "json",
		type :  "post",
		success : function(data){
			//回调 二个路径  
			//url
			//path
			$("#allImgUrl").attr("src",data.imgUrl);
			$("#imgUrl").val(data.imgUrl);
		}
	};
	//jquery.form使用方式
	$("#picForm").ajaxSubmit(options);
}
function uploadPic2(){
	var picName = $("#pic2").val();
	var extname = picName.substring(picName.lastIndexOf(".")+1,picName.length);  
	extname = extname.toLowerCase();//处理了大小写  
    if(extname!= "jpeg"&&extname!= "jpg"&&extname!= "gif"&&extname!= "png"){  
      $("#picTip2").html("<span style='color:Red'>错误提示:格式不正确,支持的图片格式为：JPEG、GIF、PNG！</span>");  
      return false;  
     }  
    var file = document.getElementById("pic").files;    
    var size = file[0].size; 
    if(size>2097152){  
         $("#picTip2").html("<span style='color:Red'>错误提示:所选择的图片太大，图片大小最多支持2M!</span>");   
         return false;  
     }  
	
  //定义参数
	var options = {
		url : "${backBase}/frontupload/uploadPic.pc",
		dataType : "json",
		type :  "post",
		success : function(data){
			//回调 二个路径  
			//url
			//path
			$("#allImgUrl2").attr("src",data.imgUrl);
			$("#imgUrl2").val(data.imgUrl);
		}
	};
	//jquery.form使用方式
	$("#picForm2").ajaxSubmit(options);
}
function uploadPic3(){
	var picName = $("#pic3").val();
	var extname = picName.substring(picName.lastIndexOf(".")+1,picName.length);  
	extname = extname.toLowerCase();//处理了大小写  
    if(extname!= "jpeg"&&extname!= "jpg"&&extname!= "gif"&&extname!= "png"){  
      $("#picTip3").html("<span style='color:Red'>错误提示:格式不正确,支持的图片格式为：JPEG、GIF、PNG！</span>");  
      return false;  
     }  
    var file = document.getElementById("pic").files;    
    var size = file[0].size; 
    if(size>2097152){  
         $("#picTip3").html("<span style='color:Red'>错误提示:所选择的图片太大，图片大小最多支持2M!</span>");   
         return false;  
     }  
	
  //定义参数
	var options = {
		url : "${backBase}/frontupload/uploadPic.pc",
		dataType : "json",
		type :  "post",
		success : function(data){
			//回调 二个路径  
			//url
			//path
			$("#allImgUrl3").attr("src",data.imgUrl);
			path = path + $("#imgUrl3").val(data.imgUrl);
			alert(path);
		}
	};
	//jquery.form使用方式
	$("#picForm3").ajaxSubmit(options);
}

function doSubmit(){
	var path="";
	var path1 = $("#imgUrl").val();
	var path2 = $("#imgUrl2").val();
	var path3 = $("#imgUrl3").val();
	if(""==path1){
		alert("图片必须上传");
		return false;
	}
	path = path + path1;
	if(""!=path2){
		path = path + ","+ path2;
	}
	if(""!=path3){
		path = path + "," + path3;
	}
	$("#im").val(path);
	$("#submitForm").submit();
}

</script>
</head>
<body>
<form id="picForm"  method="post" enctype="multipart/form-data">
 <div id="picTip"></div>  
	<img width="100" height="100" id="allImgUrl"/>
	<input type="hidden" name="imgUrl" id="imgUrl"/>
	<input type="file" onchange="uploadPic()" id="pic" name="file"/>
	<input type="submit" value="提交"/>
</form>
<form id="picForm2" method="post" enctype="multipart/form-data">
 <div id="picTip2"></div>  
	<img width="100" height="100" id="allImgUrl2"/>
	<input type="hidden" name="imgUrl" id="imgUrl2"/>
	<input type="file" onchange="uploadPic2()" id="pic2" name="file"/>
	<input type="submit" value="提交"/>
</form>
<form id="picForm3" method="post" enctype="multipart/form-data">
 <div id="picTip3"></div>  
	<img width="100" height="100" id="allImgUrl3"/>
	<input type="hidden" name="imgUrl" id="imgUrl3"/>
	<input type="file" onchange="uploadPic3()" id="pic3" name="file"/>
	<input type="submit" value="提交"/>
</form>

<form id="submitForm" action="saveImgUrl.pc" method="post">
	<input type="hidden" name="path" id="im"/>
	<input type="button" onclick="doSubmit()" value="提交"/>
</form>

</body>
</html>