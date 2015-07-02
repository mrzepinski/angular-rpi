System.register("angular-rpi", ["angular2/angular2"], function($__export) {
  "use strict";
  var __moduleName = "angular-rpi";
  var Component,
      View,
      AngularRpi;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }],
    execute: function() {
      AngularRpi = function() {
        function AngularRpi() {
          this.progress = '0%';
          var body = document.getElementsByTagName('body')[0],
              endPoint = 0,
              getEndPoint = function() {
                return body.scrollHeight - window.innerHeight;
              },
              setProgress = function() {
                var y = window.scrollY || window.pageYOffset;
                this.progress = [(y / endPoint * 100), '%'].join('');
              }.bind(this),
              updateMetrics = function() {
                endPoint = getEndPoint();
                setProgress();
              };
          endPoint = getEndPoint();
          updateMetrics();
          window.addEventListener('scroll', setProgress);
          window.addEventListener('resize', updateMetrics);
          console.info('AngularRpi Component Mounted Successfully');
        }
        return ($traceurRuntime.createClass)(AngularRpi, {}, {});
      }();
      $__export("AngularRpi", AngularRpi);
      Object.defineProperty(AngularRpi, "annotations", {get: function() {
          return [new Component({selector: 'angular-rpi'}), new View({templateUrl: 'angular-rpi.html'})];
        }});
    }
  };
});
