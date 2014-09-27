// AngularJS-RPI - Maciej Rzepinski
// https://github.com/mrzepinski/angular-rpi - MIT License
'use strict';

angular.module('angular-rpi', []).directive('rpi', [
    '$window', '$document',
    function ($window, $document) {
        return {
            restrict: 'E',
            link: function ($scope, $element, $attrs) {
                var w = angular.element($window),
                    e = angular.element($element),
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
                        e.append(progressContainer);
                    },
                    getEndPoint = function () {
                        return body[0].scrollHeight - window.innerHeight;
                    },
                    updateMetrics = function () {
                        endPoint = getEndPoint();
                        setProgress();
                    },
                    setProgress = function () {
                        var y = window.scrollY || window.pageYOffset;
                        progress = (y / endPoint) * 100;
                        progressBar[0].style.width =  progress + '%';
                    },
                    init = function () {
                        createElements();
                        endPoint = getEndPoint();
                        updateMetrics();
                        w.on('scroll', setProgress);
                        w.on('resize', updateMetrics.bind(null));
                    };

                init();
            }
        };
    }
]);
