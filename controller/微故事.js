app.controller("Ctr3",function($scope,$http){
	$http.get("http://127.0.01:8023/wgs.json").success(function(data){
		$scope.nav3 = data;
	})
})
