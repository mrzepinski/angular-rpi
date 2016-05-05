import {Component, HostListener} from 'angular2/core';

@Component({
  selector: 'angular-rpi',
  templateUrl: 'app/angular-rpi.html',
  styles: [`
    .angular-rpi {
      z-index: 9999;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 5px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: none;
      background-color: transparent;
      color: red;
    }
    
    .angular-rpi::-webkit-progress-bar {
      background-color: transparent;
    }
  
    .angular-rpi::-webkit-progress-value {
      background-color: red;
    }
  
    .angular-rpi::-moz-progress-bar {
      background-color: red;
    }
  
    .angular-rpi__container {
      width: 100%;
      background-color: transparent;
      position: fixed;
      top: 0;
      left: 0;
      height: 5px;
      display: block;
    }
  
    .angular-rpi__progress {
      background-color: red;
      width: 0;
      display: block;
      height: inherit;
    }
  `]
})

export class AngularRpi {
  private progress: string;
  private endPoint: number;

  constructor () {
    this.progress = '0%';
    this.endPoint = 0;

    this.endPoint = this.getEndPoint();
    this.updateMetrics();
  }

  getEndPoint (): number {
    const body = document.getElementsByTagName('body')[0];
    return body.scrollHeight - window.innerHeight;
  }

  @HostListener('window:scroll', ['$event'])
  setProgress () {
    const y = window.scrollY || window.pageYOffset;
    this.progress = `${(y / this.endPoint * 100)}%`;
  }

  @HostListener('window:resize', ['$event'])
  updateMetrics () {
    this.endPoint = this.getEndPoint();
    this.setProgress();
  }
}
