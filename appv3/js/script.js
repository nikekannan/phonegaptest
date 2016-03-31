var app = angular.module('uniApp', []); 

//controllers
app.controller('appController', function($scope, $timeout) {
	$scope.signinScreen = true;
	$scope.initialSetup = false;
	$scope.categoryList = false;
	$scope.timeTableList = false;
	$scope.timeTableDetails = false;
	$scope.classListScreen = false;
	$scope.generateClass = false;
	$scope.classDetailScreen = false;
	$scope.studentListScreen = false;
	$scope.studentChatScreen = false;
	$scope.teachersScreen = false;
	$scope.projectListScreen = false;
	$scope.classDetailDataScreen = false;
	$scope.resultScreen = false;
	$scope.resultDetailScreen = false;
	$scope.mapScreen = false;
	$scope.examScreen = false;
	$scope.progressScreen = false;
	$scope.mapScreen1 = false;
	$scope.mapScreen2 = false;
	$scope.mapScreen3 = false;
	$scope.vlS = "s";
	$scope.homeScreen = function() {
		$scope.categoryList = true;
		$scope.signinScreen = false;
		$scope.initialSetup = false;
		$scope.timeTableList = false;
		$scope.timeTableDetails = false;
		$scope.classListScreen = false;
		$scope.generateClass = false;
		$scope.classDetailScreen = false;
		$scope.studentListScreen = false;
		$scope.studentChatScreen = false;
		$scope.teachersScreen = false;
		$scope.projectListScreen = false;
		$scope.examScreen = false;
		$scope.classDetailDataScreen = false;
		$scope.resultScreen = false;
		$scope.resultDetailScreen = false;
		$scope.mapScreen = false;
	}
	$scope.signin = function() {
		$scope.signinScreen = false;
		$scope.progressScreen = true;
		 $timeout(function(){
			$scope.progressScreen = false;
			$scope.initialSetup = true;
		 }, 2000);   
	}
	$scope.updateInit = function() {
		$scope.initialSetup = false;
		$scope.progressScreen = true;
		$timeout(function(){
			$scope.progressScreen = false;
			$scope.categoryList = true;
		 }, 2000);
	}
	$scope.timeTableLists = function() {
		$scope.categoryList = false;
		$scope.timeTableList = true;
	}
	$scope.backTimetableList = function() {
		$scope.timeTableList = true;
		$scope.timeTableDetails = false
		$scope.generateClass = false;
	}
	$scope.timeTableDetail = function() {
		$scope.timeTableList = false;
		$scope.timeTableDetails = true;
	}
	$scope.mapGen1 = function() {
		$scope.timeTableDetails = false;
		$scope.mapScreen1 = true;
	}
	$scope.backMapGen1 = function() {
		$scope.timeTableDetails = true;
		$scope.mapScreen1 = false;
	}
	$scope.classList = function() {
		$scope.categoryList = false;
		$scope.classListScreen = true;
	}
	$scope.generateClassList = function() {
		$scope.generateClass = true;
	}
	$scope.classDetails = function() {
		$scope.classListScreen = false;
		$scope.generateClass = false;
		$scope.classDetailScreen = true;
	}
	$scope.backClasList = function() {
		$scope.classListScreen = true;
		$scope.generateClass = false;
		$scope.classDetailScreen = false;
	}
	$scope.studentList = function() {
		$scope.classDetailScreen = false;
		$scope.studentListScreen = true;
	}
	$scope.backClassCategory = function() {
		$scope.classDetailScreen = true;
		$scope.studentListScreen = false;
		$scope.teachersScreen = false;
		$scope.projectListScreen = false;
		$scope.examScreen = false;
		$scope.classDetailDataScreen = false;
	}
	$scope.studentChats = function() {
		$scope.studentListScreen = false;
		$scope.studentChatScreen = true;
	}
	$scope.backStudentList = function() {
		$scope.studentListScreen = true;
		$scope.studentChatScreen = false;
	}
	$scope.teachersList = function() {
		$scope.classDetailScreen = false;
		$scope.teachersScreen = true;
	}
	$scope.mapGen2 = function() {
		$scope.teachersScreen = false;
		$scope.mapScreen2 = true;
	}
	$scope.backMapGen2 = function() {
		$scope.teachersScreen = true;
		$scope.mapScreen2 = false;
	}
	$scope.projectsList = function() {
		$scope.classDetailScreen = false;
		$scope.projectListScreen = true;
	}
	$scope.examsList = function() {
		$scope.classDetailScreen = false;
		$scope.examScreen = true;
	}
	$scope.mapGen3 = function() {
		$scope.examScreen = false;
		$scope.mapScreen3 = true;
	}
	$scope.backMapGen3 = function() {
		$scope.examScreen = true;
		$scope.mapScreen3 = false;
	}
	$scope.classDetailList = function() {
		$scope.classDetailScreen = false;
		$scope.classDetailDataScreen = true;
	}
	$scope.results = function() {
		$scope.categoryList = false;
		$scope.resultScreen = true;
	}
	$scope.resultDetails = function() {
		$scope.resultScreen = false;
		$scope.resultDetailScreen = true;
	}
	$scope.backResults = function() {
		$scope.resultScreen = true;
		$scope.resultDetailScreen = false;
	}
	$scope.mapGen = function() {
		$scope.mapScreen = true;
		$scope.categoryList = false;
		$scope.signinScreen = false;
		$scope.initialSetup = false;
		$scope.timeTableList = false;
		$scope.timeTableDetails = false;
		$scope.classListScreen = false;
		$scope.generateClass = false;
		$scope.classDetailScreen = false;
		$scope.studentListScreen = false;
		$scope.studentChatScreen = false;
		$scope.teachersScreen = false;
		$scope.projectListScreen = false;
		$scope.classDetailDataScreen = false;
		$scope.examScreen = false;
		$scope.resultScreen = false;
		$scope.resultDetailScreen = false;
		setTimeout( function() {
			var myCenter=new google.maps.LatLng(45.434046,12.340284);
			var mapProp = {
			  center:myCenter,
			  zoom:18,
			  mapTypeId:google.maps.MapTypeId.HYBRID
			  };
			var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
		}, 1000);
	}
});