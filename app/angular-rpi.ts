import {Component, HostListener} from 'angular2/core';

@Component({
  selector: 'angular-rpi',
  templateUrl: 'app/angular-rpi.html',
  styleUrls: ['app/angular-rpi.css']
})

export class AngularRpi {
  private static body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  private progress : string;
  private endPoint : number;

  constructor () {
    this.progress = '0%';
    this.endPoint = 0;

    this.endPoint = this.getEndPoint();
    this.updateMetrics();
  }

  getEndPoint () : number {
    return AngularRpi.body.scrollHeight - window.innerHeight;
  }

  @HostListener('window:scroll', ['$event'])
  setProgress () {
    const y : number = window.scrollY || window.pageYOffset;
    this.progress = `${(y / this.endPoint * 100)}%`;
  }

  @HostListener('window:resize', ['$event'])
  updateMetrics () {
    this.endPoint = this.getEndPoint();
    this.setProgress();
  }
}
