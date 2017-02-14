var gulp = require('gulp'),
    sync = require('run-sequence'),
    serve = require('browser-sync'),
    webpack = require('gulp-webpack');

var paths = {
    app: ['src/**/*.{js,css,html}']
};

gulp.task('build', function () {
    return gulp.src('./src/main.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist'));
});

gulp.task('serve', function () {
    serve({
        port: 3000,
        open: true,
        ghostMode: {
            clicks: true,
            forms: true,
            scroll: true
        },
        server: {
            baseDir: 'dist'
        }
    });
});

gulp.task('watch', function () {
    gulp.watch(paths.app, ['build', serve.reload]);
});

gulp.task('default', function (done) {
    sync('build', 'serve', 'watch', done);
});