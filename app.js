$app = angular.module('labApp', []);

$app.controller('labAppController', function($scope) {
	
	$scope.message = "Catalogo";
	
	$scope.title = "Lista de contato";
	
	$scope.team = [{name:"Cavalcante", hability:"22"},
						{name:"Thomaz", hability:"28"},
						{name:"Alfredo", hability:"30"}];
	
	$scope.addMember = function($member){
		$scope.team.push(angular.copy($member));
		}	
	$scope.removeMember = function(x){
		$scope.team.splice(x,1);
		}
});

$app.controller('labFootController', function($scope){
	$scope.footer = "@Todos os direitos reservados.";
});