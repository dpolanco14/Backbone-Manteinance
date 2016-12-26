var gulp = require('gulp'),
    server = require('gulp-server-livereload'),
    handlebars = require('gulp-handlebars'),
    declare = require('gulp-declare'),
    wrap = require('gulp-wrap'),
    concat = require('gulp-concat');

var config = {
    dirName: './app/',
    srcTemplates: './app/templates/**/*',
    destTemplates: './app/templates/'
};

/**
 * Run livereload server
 */
gulp.task('webserver', function () {
    gulp.src('./app/')
        .pipe(server({
            open: true,
            livereload: {
                defaultFile: 'index.html',
                enable: true,
                filter: function (filePath, cb) {
                    cb(!(/node_modules/.test(filePath)));
                }
            }
        }));
});


/**
 * Compiles all handlebars files
 */
gulp.task('templates', function () {
    return gulp.src(config.srcTemplates)
        .pipe(handlebars({
            handlebars: require('handlebars')
        }))
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace: 'APP.templates',
            noRedeclare: true, // Avoid duplicate declarations 
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest(config.destTemplates, {
            overwrite: true
        }));
});

/**
 * Watchers
 */
gulp.task('watch', function () {
    gulp.watch(config.srcTemplates, ['templates']);
});

gulp.task('default', ['templates', 'webserver', 'watch']);