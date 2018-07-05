 var mainApp = angular.module("mainApp", []);
         
         mainApp.controller('testController', function($scope) {
			 
			 $("#searchDiv").show();
			  $("#detailsDiv").hide();
			  $scope.searchResult = null;
			  //initializing users's list array
			  
			    $scope.Users = [
                          { id: "1", Username: "Hameed.123", email:"Hameed.123@gmail.com", avatar:"assets/images/avatar1.jpg" },
                          { id: "4", Username: "asad", email:"asad.123@gmail.com", avatar:"assets/images/avatar1.jpg" },
                          { id: "5", Username: "ahsan" , email:"ahsan.123@gmail.com", avatar:"assets/images/avatar1.jpg" },
                          { id: "8", Username: "ali" , email:"ali.123@gmail.com", avatar:"assets/images/avatar1.jpg"},
                          { id: "10", Username: "aqeel" , email:"aqeel.123@gmail.com", avatar:"assets/images/avatar1.jpg"},
                          { id: "11", Username: "awiase" , email:"awiase.123@gmail.com", avatar:"assets/images/avatar1.jpg"},
                          { id: "12", Username: "saggar" , email:"saggar.123@gmail.com", avatar:"assets/images/avatar1.jpg"}
                    ];
					
			  $scope.submitSearch = function(){
				  debugger;
				  var textToBeSearched = $scope.searchText;
				   let index = $scope.Users.findIndex( Users => Users.Username === textToBeSearched );
				  if(index != -1){
					  // alert("User has been found!");
					  $scope.searchResult = $scope.Users.splice(index, 1);
					  $("#searchDiv").hide();
						$("#detailsDiv").show();
				  }
				  else{
					
					   $('#alertModal').modal('show');
					  $("#searchDiv").show();
						$("#detailsDiv").hide();
					  return
				  }
				  
			  }
			  
			   $scope.BackToSearch = function(){
				$("#searchDiv").show();
				$("#detailsDiv").hide();
			  }
           
         });
