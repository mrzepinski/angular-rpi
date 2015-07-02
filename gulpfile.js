'use strict';

var concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    del = require('del'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    traceur = require('gulp-traceur'),
    uglify = require('gulp-uglify'),
    webserver = require('gulp-webserver'),
    dist = 'dist',
    src = 'src',
    paths = {
        dist_lib: dist + '/lib',
        js: src + '/**/*.js',
        html: src + '/**/*.html',
        scss: src + '/**/*.scss'
    };

// run init tasks
gulp.task('default', ['dependencies', 'angular2', 'js', 'html', 'css']);

// run development task
gulp.task('dev', ['watch', 'serve']);

// watch for changes and run the relevant task
gulp.task('watch', function () {
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.scss, ['css']);
});

// serve the build dir
gulp.task('serve', function () {
    gulp.src(dist)
        .pipe(webserver({
            open: true
        }));
});

// clean dist directory
gulp.task('clean', function (cb) {
    del([dist], cb);
});

// move dependencies into build dir
gulp.task('dependencies', function () {
    return gulp.src([
        'node_modules/angular2/node_modules/rx/dist/rx.all.js',
        'node_modules/angular2/node_modules/traceur/bin/traceur.js',
        'node_modules/angular2/node_modules/traceur/bin/traceur-runtime.js',
        'node_modules/angular2/node_modules/zone.js/zone.js',
        'node_modules/es6-module-loader/dist/es6-module-loader.js',
        'node_modules/es6-module-loader/dist/es6-module-loader.js.map',
        'node_modules/systemjs/dist/system.js',
        'node_modules/systemjs/dist/system.js.map'
    ])
        .pipe(gulp.dest(paths.dist_lib));
});

// tanspile, concat & move angular
gulp.task('angular2', function () {
    return gulp.src([
        traceur.RUNTIME_PATH,
        'node_modules/angular2/es6/prod/*.es6',
        'node_modules/angular2/es6/prod/src/**/*.es6'
    ], {
        base: 'node_modules/angular2/es6/prod'
    })
        .pipe(rename(function (path) {
            path.dirname = 'angular2/' + path.dirname;
            path.extname = '';
        }))
        .pipe(traceur({
            modules: 'instantiate',
            moduleName: true
        }))
        .pipe(concat('angular2.js'))
        .pipe(gulp.dest(paths.dist_lib));
});

// transpile & move js
gulp.task('js', function () {
    return gulp.src(paths.js)
        .pipe(rename({
            extname: ''
        }))
        .pipe(traceur({
            modules: 'instantiate',
            moduleName: true,
            annotations: true,
            types: true
        }))
        .pipe(rename({
            extname: '.js'
        }))
        .pipe(gulp.dest(dist))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(dist));
});

// move html
gulp.task('html', function () {
    return gulp.src(paths.html)
        .pipe(gulp.dest(dist))
});

// create css
gulp.task('scss', function () {
    return gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest(dist));
});

// move css
gulp.task('css', ['scss'], function () {
    return gulp.src(dist + '/**/*.css')
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(dist));
});
