import {Component, View, bootstrap} from 'angular2/angular2';
import {AngularRpi} from 'angular-rpi';

@Component({
  selector: 'main'
})

@View({
  directives: [AngularRpi],
  template: `<angular-rpi></angular-rpi>`
})

class Main {

}

bootstrap(Main);
