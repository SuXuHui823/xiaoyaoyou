app.controller("Ctr",function($scope,$http){
	$http.get("http://127.0.01:8023/wyj.json").success(function(data){
		$scope.nav1 = data;
	})
})
