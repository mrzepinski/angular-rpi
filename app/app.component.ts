import {Component, OnInit} from 'angular2/core';
import {AngularRpi} from './angular-rpi';

@Component({
  selector: 'app',
  directives: [AngularRpi],
  styles: [`
    body {
      margin: 0 auto;
      width: 760px;
      font-family: Arial, sans-serif;
      font-size: 22px;
      text-align: justify;
      color: #666;
    }
  `],
  templateUrl: 'app/app.html'
})

export class App implements OnInit {
  ngOnInit(): any {
    console.log('App initialized!');
  }
}
