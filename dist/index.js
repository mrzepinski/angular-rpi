System.register("index", ["angular2/angular2", "angular-rpi"], function($__export) {
  "use strict";
  var __moduleName = "index";
  var Component,
      View,
      bootstrap,
      AngularRpi,
      Main;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      AngularRpi = $__m.AngularRpi;
    }],
    execute: function() {
      Main = function() {
        function Main() {}
        return ($traceurRuntime.createClass)(Main, {}, {});
      }();
      Object.defineProperty(Main, "annotations", {get: function() {
          return [new Component({selector: 'main'}), new View({
            directives: [AngularRpi],
            template: "<angular-rpi></angular-rpi>"
          })];
        }});
      bootstrap(Main);
    }
  };
});
