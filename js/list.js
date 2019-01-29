$(function () {

			// 获取当前index;
			var currentIndex=localStorage.getItem("currentIndex");
			console.log(currentIndex);
			if(currentIndex == 1){
				$(".second").hide();
				$(".third").hide();
			}
			else if(currentIndex == 2){
				$(".third").hide();
			}


			$(".title").click(function(){
				console.log($(this).next());
				if($(this).next().css("display") == "none"){
					$(this).find("span").css({
						"transform": "rotate(-180deg)",
					    "transition": "transform 0.2s"
					})
				}
				else{
					$(this).find("span").css({
						"transform": "rotate(-0deg)",
					    "transition": "transform 0.2s"
					})
				}
				$(this).next().animate({height:"toggle"});
				
			})
		});