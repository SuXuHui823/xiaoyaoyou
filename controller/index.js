app.controller("Ctr0",function($scope,$http,$timeout){
	$http.get("data/index.json").success(function(data){
		$scope.nav = data;
	})
	$timeout(function(){
			$("#mb").slideUp();
	},2000)
})
