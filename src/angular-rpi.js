import {Component, HostListener} from '@angular/core';

@Component({
    selector: 'angular-rpi',
    templateUrl: 'angular-rpi.html'
})

export class AngularRpi {
    constructor() {
        this.progress = '0%';
        this.endPoint = 0;

        this.endPoint = this.getEndPoint();
        this.updateMetrics();

        console.info('AngularRpi Component Mounted Successfully');
    }

    getEndPoint() {
        const body = document.getElementsByTagName('body')[0];
        return body.scrollHeight - window.innerHeight;
    }

    @HostListener('window:scroll')
    setProgress() {
        const y = window.scrollY || window.pageYOffset;
        this.progress = `${(y / this.endPoint * 100)}%`;
    }

    @HostListener('window:resize')
    updateMetrics () {
        this.endPoint = this.getEndPoint();
        this.setProgress();
    };
}
