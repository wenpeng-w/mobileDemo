$(function(){
	//选项卡工具
	function scroll(func){
		var beforeScrollTop = $(document).scrollTop();
		$(window).scroll(function(){
			var nowScrollTop = $(document).scrollTop();
			differ = nowScrollTop - beforeScrollTop;
			if(differ === 0){
				return false;
			}else{
				func(nowScrollTop,differ > 0 ? "down" : "up");
			}
			beforeScrollTop = nowScrollTop;
		});
	};
	scroll(function(top,direction) {
		var tabTools = $("#tab_tools");
		var suffice = 400;
		if(top > suffice){
			if(direction == "down"){
				tabTools.removeClass("show-tools");
			}
			if(direction == "up"){
				tabTools.addClass("show-tools");
			}
		}else{
			tabTools.removeClass("show-tools");
		}
		
		//返回顶部
		tabTools.on("touchend",function(){
			$("html,body").stop().animate({scrollTop: 0},600);
		});
	});
	
	//城市选择
//	var cityall = [
//					{
//						"id":1,
//						"pinyinName":"ankang",
//						"hanziName":"安康"
//					},
//					{
//						"id":2,
//						"pinyinName":"beijing",
//						"hanziName":"北京"
//					}
//				];
//	for(var i=0,l=cityall.length;i<l;i++){
//		var pinyinName = cityall[i].pinyinName;
//		if(pinyinName.substr(i,1).toLocaleLowerCase() == "a"){
//			console.log("key"+':'+cityall[i].hanziName);
//		}
//	}
//	function creatCityWrap(){
//		var city_all_ele = "<div class='city-all'><h4>"+ A +"</h4></div>";
//		var city_all_ul = "<ul class='city-tab'></ul>";
//		city_all_ele.append(city_all_ul);
//	}
});
