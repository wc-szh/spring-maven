<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!-- 将分页的参数全部加到页面的form表单中 -->
<style>
	.m_page{width:100%;height:25px;text-align:center;}
	.pageBtn{cursor:pointer;}
	.pageBtnOn{background:grey;border: 1px solid grey;}
	.pageBtnOff{cursor:default;background: #D0CFCF;border: 1px solid #D0CFCF;}
	.page_ul>li{float:left;list-style:none;}
	.page_li_btn{width:50px;height:23px;border-radius:5px;color:white;line-height:25px;margin-right:5px;font-size:12px;text-align:center;}
	.page_li_input{width:30px;height:21px;border:1px solid grey;text-align:center;}
	.page_li_no{height:25px;line-height:25px;margin-right:5px;}
	.page_li_num{font-size: 12px;line-height: 25px;height: 25px;margin-right: 10px;color: #635C5C;}
	.page_go_btn{width: 40px;height: 25px;border: 1px solid grey;border-radius: 5px;color: white;line-height: 23px;background: grey;margin-right: 5px;font-size: 12px;text-align: center;cursor: pointer;}
</style>

<c:choose>
   <c:when test="${pagination != null && pagination.list != null}">  
	<div class="m_page">
	    <ul class="page_ul">
	    	<li class="page_li_num pageBtn" page="1">共（${pagination.total }）条</li>
	    	<c:choose>
  			<c:when test="${pagination.pageNum == 1 }">  
		    	<li class="page_li_btn pageBtnOff" page="1">首页</li>
		    	<li class="page_li_btn pageBtnOff" page="${pagination.prePage }">上一页</li>
	    	</c:when>
	    	<c:otherwise>
		    	<li class="page_li_btn pageBtn pageBtnOn" page="1">首页</li>
		    	<li class="page_li_btn pageBtn pageBtnOn" page="${pagination.prePage }">上一页</li>
	    	</c:otherwise>
	    	</c:choose>
	    	<li class="page_li_no">${pagination.pageNum }/${pagination.pages }</li>
	    	<c:choose>
	    		<c:when test="${pagination.pages == pagination.pageNum }">
			    	<li class="page_li_btn pageBtnOff" page="${pagination.nextPage }">下一页</li>
			    	<li class="page_li_btn pageBtnOff" page="${pagination.pages }">尾页</li>
	    		</c:when>
	    		<c:otherwise>
			    	<li class="page_li_btn pageBtn pageBtnOn" page="${pagination.nextPage }">下一页</li>
			    	<li class="page_li_btn pageBtn pageBtnOn" page="${pagination.pages }">尾页</li>
	    		</c:otherwise>
	    	</c:choose>
    	    <li class="page_li_trun">
                <input id="myCurrentPage" class="page_li_input" type="text" value="${pagination.pageNum }" onkeypress="return IsNum(event)" />
                <input class="pageBtn page_go_btn" type="button" value="跳转"/>
            </li>
   		</ul>
		</div>
	<div class="clearfix"></div>
	<script type="text/javascript">
		$(function(){
			$(".pageBtn").click(function() {
				var pageNum = $(this).attr("page");
				if(pageNum === undefined){
					pageNum = $("#myCurrentPage").val();
					if(!/^\d+$/.test(pageNum)){
						alert("请输入正确的页数");
						return;
					}
				}
				$("#paginationNo").val( pageNum );
				$("#paginationForm").submit();
			});
			
		});
	</script>
	
	    	     <script language="javascript" type="text/javascript">
	            function IsNum(e) {
	            var k = window.event ? e.keyCode : e.which;
	            if (((k >= 48) && (k <= 57)) || k == 8 || k == 0) {
	            } else {
	                if (window.event) {
	                    window.event.returnValue = false;
	                }
	                else {
	                    e.preventDefault(); //for firefox 
	                }
	            }
	        } 
	    </script>	
	    
 </c:when>
</c:choose>
