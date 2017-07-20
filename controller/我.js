app.controller("Ctr2",function($scope,$http,$timeout){
	$http.get("http://127.0.01:8023/w.json").success(function(data){
		$scope.nav4 = data;
	})
	$timeout(function(){
		$("#w_menu li").click(function(){
			var index = $(this).index();
//			console.log($(this).index())
			$(this).addClass("w_li").siblings().removeClass("w_li");
			$(".w_menu1>ul").eq(index).show().siblings().hide();
		})
	},200)
})
