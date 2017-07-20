app.controller("Ctr1",function($scope,$http,$timeout){
	$http.get("http://127.0.01:8023/tz.json").success(function(data){
		$scope.nav2 = data;
		$scope.main=data.menu1[0]
		$scope.xuan=function(){
			$scope.main=data.menu1[0]
		}
		$scope.xuan1=function(){
			$scope.main=data.menu1[1]
		}
	})
	$timeout(function(){
		$("#menu1 li").click(function(){
			var index = $(this).index();
//			console.log($(this).index());
			$(this).addClass("li0").siblings().removeClass("li0");
		})
		var mySwiper = new Swiper(".swiper-contrainer",{
			loop:true,
			speed:1000,
			autoplay:500,
			pagination:".swiper-pagination",
			autoplayDisableOnInteraction:false
		});
	},200)
})

