/* 
   angular-rpi v1.0.1
   git://github.com/mrzepinski/angular-rpi.git
   MIT License - Maciej Rzepinski
 */

(function (angular, undefined) {
    'use strict';

    var rpi = angular.module('angular-rpi', []);

    rpi.directive('rpi', [
        '$window', '$document',
        function ($window, $document) {
            return {
                restrict: 'E',
                link: function ($scope, $element) {
                    var windowEl = angular.element($window),
                        body = $document.find('body').eq(0),
                        progress = 0,
                        progressContainer,
                        progressBar,
                        endPoint,
                        createElements = function () {
                            progressContainer = angular.element('<div></div>');
                            progressBar = angular.element('<div></div>');

                            progressContainer.attr('class', 'progress-container');
                            progressBar.attr('class', 'progress-bar');

                            progressContainer.append(progressBar);
                            $element.append(progressContainer);
                        },
                        getEndPoint = function () {
                            return body[0].scrollHeight - windowEl[0].innerHeight;
                        },
                        updateMetrics = function () {
                            endPoint = getEndPoint();
                            setProgress();
                        },
                        setProgress = function () {
                            var y = windowEl[0].scrollY || windowEl[0].pageYOffset;
                            progress = (y / endPoint) * 100;
                            progressBar[0].style.width =  [progress, '%'].join('');
                        },
                        init = function () {
                            createElements();
                            endPoint = getEndPoint();
                            updateMetrics();
                            windowEl.on('scroll', setProgress);
                            windowEl.on('resize', updateMetrics);
                        };

                    init();

                    $scope.$on('$destroy', function () {
                        windowEl.off('scroll', setProgress);
                        windowEl.off('resize', updateMetrics);
                    });
                }
            };
        }
    ]);
})(window.angular);
