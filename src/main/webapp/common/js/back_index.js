$(function(){
		$(".index_system_menu").click(function(){
			$(".index_system_ul").removeClass("slide");
			$(".index_system_menu").removeClass("Bg9CB9AF");
			$(".index_system_menu").removeClass("Bg86AEA0");
			$(this).next().addClass("slide");
			if($(this).next().hasClass("down")){
				$(this).addClass("Bg9CB9AF");
				$(".slide").slideUp(300);
				$(this).next().removeClass("down");
			}else{
				$(this).addClass("Bg86AEA0");
				$(".slide").slideDown(300);
				$(this).next().addClass("down");
			}
			$(".index_system_ul").not(".slide").removeClass("down");
			$(".index_system_ul").not(".slide").slideUp(300);
		});
		
		
		$(".select_menu").click(function(){
			$(".select_menu").addClass("index_system_li_bg");
			$(this).removeClass("index_system_li_bg");
		})
		
	});

$(function(){
		setInterval(timeGoing,1000);
	})
	
	function timeGoing(){
		var year = new Date().getFullYear();		
		var month = new Date().getMonth()+1;		
		var day = new Date().getDate();		
		var hour = new Date().getHours()>=10?(new Date().getHours()):"0"+(new Date().getHours());		
		var min = new Date().getMinutes() >=10?(new Date().getMinutes()):"0"+(new Date().getMinutes());		
		var second = new Date().getSeconds() >= 10?new Date().getSeconds() :"0"+new Date().getSeconds();
		//var mmm = new Date().getMilliseconds();
		$("#current_time").html(year+"年"+ month+"月"+day+"日"+ hour+":"+min+":"+second);
		
	}