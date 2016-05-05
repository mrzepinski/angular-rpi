angular-rpi
===========

AngularJS Reading Position Indicator

Based on http://css-tricks.com/reading-position-indicator

![](http://i.imgur.com/l0CP6kJ.png)

### AngularJS

This is an `AngularJS 2.x.x` implementaton.
To use `AngularJS 1.x.x` you have to pick `1.x.x` version and look at branch [angular-1.x.x](https://github.com/mrzepinski/angular-rpi/tree/angular-1.x.x)


### Usage

```javascript
import {AngularRpi} from 'angular-rpi';
``` 

```javascript
@Component({
  directives: [AngularRpi],
  template: '<angular-rpi></angular-rpi>'
})
```

### To run code locally:
  ```javascript
  npm start
  ```

### You can generate JavaScript code based on TypeScript by:
  ```javascript
  npm run tcs
  ```
  
### To regenerate typings:
  ```javascript
  npm run typings
  ```

### Contribution

Feel free to commit your code here :)

### License

MIT
