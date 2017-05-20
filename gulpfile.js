const gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename')

const paths = {
    mainStylesheet: './src/scss/main.scss',
    stylesheets: './src/scss/**/*.scss',
    dist: {
        stylesheets: './public/css'
    }
}

//SASS
gulp
    .task('sass', () => {
        return gulp.src(paths.mainStylesheet)
            .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
            .pipe(rename({ extname: '.min.css' }))
            .pipe(gulp.dest(paths.dist.stylesheets))
    })

gulp
    .task('watch', () => {
        gulp.watch([paths.mainStylesheet, paths.stylesheets], ['sass'])
    })