'use strict';

angular
    .module('exampleApp')
    .controller('ExampleAppAdminCtrl', [
        '$scope',
        ExampleAppAdminCtrl,
    ]);

function ExampleAppAdminCtrl(
    $scope,
) {
    $scope.time = new Date().getTime();
}
