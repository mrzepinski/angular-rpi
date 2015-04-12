angular-rpi
===========

AngularJS Reading Position Indicator

Based on http://css-tricks.com/reading-position-indicator

[DEMO](http://mrzepinski.github.io/angular-rpi/)

![](http://i.imgur.com/l0CP6kJ.png)

### Usage:

Load a module `['angular-rpi']`
and simply add:

````
<!-- CSS -->
<link rel="stylesheet" href="dist/css/angular-rpi.min.css" />

<!-- JS -->
<script type="text/javascript" src="dist/js/angular-rpi.min.js"></script>
```

to your HTML, and then use it as a directive:


```
<rpi></rpi>
```

### Modify and build

You can change default styles for the progress bar by editing `angular-rpi.scss`,
or override it in your own styles.

To build just type:
`npm install` & `bower install` & `gulp`

It will create CSS from SCSS file, and minify JS & CSS files.

### Contribution

Feel free to commit your code here :)
