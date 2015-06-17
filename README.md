# typed-bone

SPA site starter using Typescript, Browserify and Backbone

## Install

Clone this repository, then

```bash
npm install
```

This will install the project and its dependencies to be able to develop

[Browser-sync](http://www.browsersync.io/)  
[Browserify](http://browserify.org/)  
[Stylus](https://learnboost.github.io/stylus/)  
[Watchify](https://github.com/substack/watchify)  
[Tsify](https://www.npmjs.com/package/tsify)

## Vendor

Packages used on the end code.
Feel free to add more ( npm install --save [packageName] )

[BackboneJS](http://backbonejs.org/)  
[jQuery](https://jquery.com/)  
[GSAP/Tweenmax](http://www.greensock.com/gsap-js/)  
[Underscore](http://underscorejs.org/)


## Tasks

Have a look to the 'scripts' field in package.json ;)

### start

Launches a browser-sync server on port 9000 with livereload, open default browser and start watching

```bash
npm start
```

### start:server

Launches a browser-sync server on port 9000, watch for changes only for /static files and open default browser.

```bash
npm run start:server
```

### build

Bundle all JS and CSS static files.

```bash
npm run build
```

### build:js

Bundle the main.js static file.

```bash
npm run build:js
```

### build:js:vendor

Bundle the v.js static file from /src/scripts/vendor/vendor.js  
By default, it contains Backbone, jQuery, Underscore and TweenMax on the window object.  
Feel free to add more.

```bash
npm run build:js:vendor
```

### build:css

Bundle the main.css static file.

```bash
npm run build:css
```

### watch

Watch and rebundle all JS and CSS static files.

```bash
npm run watch
```

### watch:js

Watch /src/scripts/ and rebundle the main.js static file.

```bash
npm run watch:js
```

### watch:css

Watch /src/styles/ and rebundle the main.css static file.

```bash
npm run watch:css
```