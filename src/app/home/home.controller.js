'use strict';

angular
    .module('exampleApp')
    .controller('ExampleAppHomeCtrl', [
        '$scope',
        ExampleAppHomeCtrl,
    ]);

function ExampleAppHomeCtrl(
    $scope,
) {
    $scope.time = new Date().getTime();
}
