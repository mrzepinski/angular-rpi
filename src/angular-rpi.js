import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'angular-rpi'
})

@View({
    templateUrl: 'angular-rpi.html'
})

export class AngularRpi {

    constructor() {
        this.progress = '0%';

        let body = document.getElementsByTagName('body')[0],
            endPoint = 0,
            getEndPoint = function () {
                return body.scrollHeight - window.innerHeight;
            },
            setProgress = function () {
                let y = window.scrollY || window.pageYOffset;
                this.progress = [(y / endPoint * 100), '%'].join('');
            }.bind(this),
            updateMetrics = function () {
                endPoint = getEndPoint();
                setProgress();
            };

        endPoint = getEndPoint();
        updateMetrics();
        window.addEventListener('scroll', setProgress);
        window.addEventListener('resize', updateMetrics);

        console.info('AngularRpi Component Mounted Successfully');
    }

}
