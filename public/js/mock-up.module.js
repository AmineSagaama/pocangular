var mockUpModule = angular.module('mock-up', []);


angular.module('mock-up', ['ngLoadingSpinner']).controller('mock-up-controller', function ($scope, $http) {

    $scope.callDiagnosticData = function () {
        var request = {
            method: 'POST',
            url: 'https://sandbox.api.europcar.com/DEV/connectedcar/v1/vehicles/' + $scope.vin + '/diagnosticData',
            headers: {
                'apikey': 'Europcar_48b1dfecc10c878871cd2933b4a987a4e32ae456',
                'Content-Type': 'application/json'
            },
            data: {id: "file"}
        }
        $http(request).then(function (response) {
            $scope.request = response.data.requestTime;
            $scope.response = response.data.responseTime;
            $scope.oil = response.data.oil.value;
            $scope.tank = response.data.fuelTank.value;
            $scope.pourcentage = response.data.fuelLevel.value;
            $scope.rl = response.data.tiresPressure.rearLeft.value;
            $scope.rr = response.data.tiresPressure.rearRight.value;
            $scope.fr = response.data.tiresPressure.frontRight.value;
            $scope.fl = response.data.tiresPressure.frontLeft.value;
            $scope.unitTank = response.data.fuelTank.unit;
            $scope.valueTank = response.data.fuelTank.value;
            $scope.unitLevel = response.data.fuelLevel.unit;
            $scope.valueLevel = response.data.fuelLevel.value;
            $scope.unitLifeTimeFuelEcon = response.data.lifeTimeFuelEcon.unit;
            $scope.valueLifeTimeFuelEcon = response.data.lifeTimeFuelEcon.value;
            $scope.unitOdometer = response.data.odometer.unit;
            $scope.valueOdometer = response.data.odometer.value;
            $scope.unitOil = response.data.oil.unit;
            $scope.valueOil = response.data.oil.value;
            $scope.unitPlacardFront = response.data.placardFront.unit;
            $scope.valuePlacardFront = response.data.placardFront.value;
            $scope.unitPlacardRear = response.data.placardRear.unit;
            $scope.valuePlacardRear = response.data.placardRear.value;
            $scope.valueSeatBelt = response.data.seatBelt.status;

        })
    }

    $scope.callAlertCommand = function () {
        var request = {
            method: 'POST',
            url: 'https://sandbox.api.europcar.com/DEV/connectedcar/v1/vehicles/' + $scope.vin + '/commands/alert',
            headers: {
                'apikey': 'Europcar_48b1dfecc10c878871cd2933b4a987a4e32ae456',
                'Content-Type': 'application/json'
            },
            data: {id: "file"}
        }
        $http(request).then(function (response) {
            $scope.request = response.data.commandResponse.requestTime;
            $scope.response = response.data.commandResponse.completionTime;
            $scope.statusAlert = response.data.commandResponse.status;
            $scope.typeAlert = response.data.commandResponse.type;

        })
    }

    $scope.callUnlockDoorsCommand = function () {
        var request = {
            method: 'POST',
            url: 'https://sandbox.api.europcar.com/DEV/connectedcar/v1/vehicles/' + $scope.vin + '/commands/unlockDoors',
            headers: {
                'apikey': 'Europcar_48b1dfecc10c878871cd2933b4a987a4e32ae456',
                'Content-Type': 'application/json'
            },
            data: {id: "file"}
        }
        $http(request).then(function (response) {
            $scope.request = response.data.commandResponse.requestTime;
            $scope.response = response.data.commandResponse.completionTime;
            $scope.statusUnlockDoors = response.data.commandResponse.status;
            $scope.typeUnlockDoors = response.data.commandResponse.type;

        })
    }

    $scope.callLockDoorsCommand = function () {
        var request = {
            method: 'POST',
            url: 'https://sandbox.api.europcar.com/DEV/connectedcar/v1/vehicles/' + $scope.vin + '/commands/lockDoors',
            headers: {
                'apikey': 'Europcar_48b1dfecc10c878871cd2933b4a987a4e32ae456',
                'Content-Type': 'application/json'
            },
            data: {id: "file"}
        }
        $http(request).then(function (response) {
            $scope.request = response.data.commandResponse.requestTime;
            $scope.response = response.data.commandResponse.completionTime;
            $scope.statusLockDoors = response.data.commandResponse.status;
            $scope.typeLockDoors = response.data.commandResponse.type;

        })
    }

});