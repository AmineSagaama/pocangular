var mockUpModule = angular.module('mock-up',[]);



angular.module('mock-up').
controller('mock-up-controller', function($scope,$http) {

       $scope.callDiagnosticData= function () {
           var request = {
               method: 'POST',
               url: 'https://sandbox.api.europcar.com/DEV/connectedcar/v1/vehicles/'+$scope.vin+'/diagnosticData',
               headers: {
                   'apikey': 'Europcar_48b1dfecc10c878871cd2933b4a987a4e32ae456',
                   'Content-Type':'application/json'
               },
               data: { id: "file"}
           }
           $http(request).then(function(response){
               $scope.request=response.data.requestTime;
               $scope.response=response.data.responseTime;
               $scope.oil=response.data.oil.value;
               $scope.tank=response.data.fuelTank.value;
               $scope.pourcentage=response.data.fuelLevel.value;
               $scope.rl=response.data.tiresPressure.rearLeft.value;
               $scope.rr=response.data.tiresPressure.rearRight.value;
               $scope.fr=response.data.tiresPressure.frontRight.value;
               $scope.fl=response.data.tiresPressure.frontLeft.value;
               $scope.mileage=response.data.odometer.value;

           })
       }

    });