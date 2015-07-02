angular-rpi
===========

AngularJS Reading Position Indicator

Based on http://css-tricks.com/reading-position-indicator

![](http://i.imgur.com/l0CP6kJ.png)

### AngularJS

This is an `AngularJS 2.x.x` implementaton.
To use `AngularJS 1.x.x` you have to pick `1.x.x` version and look at branch [angular-1.x.x](https://github.com/mrzepinski/angular-rpi/tree/angular-1.x.x)

To be honest - it is my first time with AngularJS 2.x.x branch ;)

### Usage

Import directive:
`import {AngularRpi} from 'angular-rpi';`

Create:
`@View({
    directives: [AngularRpi],
    template: '<angular-rpi></angular-rpi>'
})`

### Modify and build

You can change default styles for the progress bar by editing `angular-rpi.scss`,
or override it in your own styles.

To build just type:
`npm install` & `gulp`

It will create CSS from SCSS files, and minify JS & CSS files.

Run `gulp dev` to start serving the application (it'll also start watching for any changes you make).

### Contribution

Feel free to commit your code here :)

### License

MIT
