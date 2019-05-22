'use strict';

const ocLazyLoadProviderConfig = {
    modules: [{
        name: 'HomePageModule',
        file: [
            'src/app/home/home.controller.js',
        ],
    }],
};

angular
    .module('exampleApp')
    .config([
        '$stateProvider', '$locationProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
        appConfig,
    ]);

function appConfig(
    $stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider
) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.hashPrefix('!');

    $stateProvider
        .state('index', {
            url: "/",
            views: {
                lazyLoadView: {
                    controller: 'ExampleAppHomeCtrl',
                    templateUrl: 'src/app/home/home.template.html',
                },
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadExampleAppHome: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load([{
                        cache: false,
                        files: [
                            'src/app/home/home.controller.js'
                        ],
                    }]);
                }]
            }
        });

    $ocLazyLoadProvider.config(ocLazyLoadProviderConfig);
}
