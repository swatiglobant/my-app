(function() {
    'use strict';

    angular
    .module('myApp')
    .controller('MainController', MainController)
    .controller('DirectivesCtrl', DirectivesCtrl)
    .directive('myImage', myImage)
    .controller('ServiceCtrl', ServiceCtrl)
    .filter('myFilter', myFilter)
    .controller('FilterCtrl', FilterCtrl)
    .controller('FormCtrl', FormCtrl);

    /** @ngInject */
    function MainController($timeout, webDevTec, toastr) {
        var vm = this;

        vm.awesomeThings = [];
        vm.classAnimation = '';
        vm.creationDate = 1441690556021;
        vm.showToastr = showToastr;

        activate();

        function activate() {
            getWebDevTec();
            $timeout(function() {
                vm.classAnimation = 'rubberBand';
            }, 4000);
        }

        function showToastr() {
            toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
            vm.classAnimation = '';
        }

        function getWebDevTec() {
            vm.awesomeThings = webDevTec.getTec();

            angular.forEach(vm.awesomeThings, function(awesomeThing) {
                awesomeThing.rank = Math.random();
            });
        }
    }

    function ServiceCtrl($scope, $q, myService) {
        $scope.array = [];
        myService.getData().then(function (data) {
            $scope.array = data.data;
        }, function (error) {
            console.log(error.statusText);
        });
    }
    function FormCtrl($scope) {
        $scope.users = [];
        $scope.add = function () {
            $scope.users.push({'name':$scope.username, 'email':$scope.email, 'phone':$scope.phone});
            $scope.username="";
            $scope.email="";
            $scope.phone="";
        }
    }
    function myFilter() {
        return function (number) {
            if(isNaN(number) || number < 1) {
                return number;
            }
            else {
                var lastDigit = number % 10;
                if(lastDigit === 1) {
                    return number + 'st'
                } else if(lastDigit === 2) {
                    return number + 'nd'
                } else if (lastDigit === 3) {
                    return number + 'rd'
                } else if (lastDigit > 3 || lastDigit === 0) {
                    return number + 'th'
                }
            }
        }
    }

    function FilterCtrl($scope) {
        $scope.numbers = [10, 221, 4, 3, 11, 55, 22, 101, 'Swati', 99];
    }

    function DirectivesCtrl() {
        var tmp = this;
        tmp.images = [
            {"url":"assets/images/img/motorola-xoom.0.jpg"},
            {"url":"assets/images/img/motorola-xoom.1.jpg"},
            {"url":"assets/images/img/motorola-xoom.2.jpg"},
            {"url":"assets/images/img/motorola-xoom-with-wi-fi.0.jpg"},
            {"url":"assets/images/img/motorola-xoom-with-wi-fi.1.jpg"}
        ];
        tmp.curIndex = 0;
        tmp.curImage = tmp.images[tmp.curIndex];
        tmp.prevImg = function () {
            if(tmp.curIndex-1 < 0) {
                tmp.curIndex = tmp.images.length - 1;
                tmp.curImage = tmp.images[tmp.curIndex];
            } else {
                tmp.curIndex = tmp.curIndex - 1;
                tmp.curImage = tmp.images[tmp.curIndex];
            }
        };
        tmp.nextImg = function () {
            if(tmp.curIndex+1 >= tmp.images.length) {
                tmp.curIndex = 0;
                tmp.curImage = tmp.images[tmp.curIndex];
            } else {
                tmp.curIndex = tmp.curIndex + 1;
                tmp.curImage = tmp.images[tmp.curIndex];
            }
        };
    }
    function myImage() {
        return {
            restrict: 'E',
            scope:{
                curScope: '=info'
            },
            templateUrl: 'app/main/Directive.html'
        };
    }
})();
