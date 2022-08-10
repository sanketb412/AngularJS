
// var app = angular.module("myApp", []);

// app.controller("Controller1", function($scope, $rootScope) {
    
//     $scope.name1="Sanket Bagde";
//     $scope.designation="Angular Developer";
//     $rootScope.msg1="Hi Controller1"

// });

// app.controller("Controller2", function($scope, $rootScope) {

//     $scope.name2="Vicky Bagde";
//     $scope.designation="Software Developer";
//     $rootScope.msg2="Hi Controller2"

// })


// ----------------------------------------------------------------------------------------------
// for Data Binding

// var app = angular.module("mymodule", []);

// app.controller("mycontroller", function($scope) {
//     $scope.firstname="Sanket";
//     $scope.lastname="Bagde";
//     $scope.technology="AngularJS";
// })


// ----------------------------------------------------------------------------------------------
// for custom directives

// var app = angular.module("myApp", []);

// app.directive("myFirstDirective", function(){
//     return {
//         template:"<h1>Sanket Bagde</h1>"
//     }
// })


// ----------------------------------------------------------------------------------------------
// for Scope in custom directives
// var app = angular.module("test", []);

// app.controller("myController", function($scope){
//     $scope.name = "Sanket";
//     $scope.reverseName = function(){
//         $scope.name = $scope.name.split('').reverse().join('');
//     };
// });

// app.directive("myDirective", function() {
//     return {
//         restrict: "EA",    //for attribute and element
//         // scope: false, //for shared scope (will change controller value)
//         // scope: true, //for inheriate scope (will not change controller value)
//         // scope: {}, //for isolate Scope (no effect on controller and directive. both are independent)
//         template: "<div> Your name is : {{name}}</div>" +
//                     "Change your name : <input type='text' ng-model='name' />"
//     };
// });


// ----------------------------------------------------------------------------------------------
// for custom Filters