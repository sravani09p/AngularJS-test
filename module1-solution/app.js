(function () {

    'use strict';
    angular.module('ATApp',[])
    .controller('ATController',ATController);
    ATController.$inject=['$scope'];
    function ATController($scope){
      $scope.count="";
      $scope.result="";

      $scope.checkIfToomuch=function(string){
        var res=string.split(',');
        var len=res.length;

        for(var i=0;i<len;i++){
          if((res[i]=="") | (res[i]==null)){
            res.splice(i,1);
          }
        }var l=res.length;

         if(l==0){

           $scope.result="Please enter data first";

         }
         else if (l>3)
         {
           $scope.result="Too much!";
         }
         else if (l<=3) {
           $scope.result="Enjoy!";

         }

      };



    }

})();
