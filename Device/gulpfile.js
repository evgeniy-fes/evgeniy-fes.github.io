const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload  = browserSync.reload;
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const fileinclude = require('gulp-file-include');
const rename = require('gulp-rename');
const stripCssComments = require('gulp-strip-css-comments');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const merge2 = require('merge2');
const uglify = require('gulp-uglify');


// Compile Sass & Inject Into Browser
gulp.task('style', function() {
    return gulp.src([
        'src/css/**/*.scss'
    ])
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['node_modules']
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(stripCssComments())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("build/css"))
        .pipe(browserSync.stream());
});


// Watch Sass & Serve
// gulp.task('serve', ['sass'], function() {
//     browserSync.init({
//         server: "./src"  
//     });

//     gulp.watch(['src/scss/*.scss'], ['sass']);
//     gulp.watch("src/*.html").on('change', browserSync.reload);
// });

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: ['build'],
            directory: true
        }
    });
    // gulp.watch(['./js/**/*.js'], {cwd: 'dist'}, reload);
});


gulp.task('html', function() {
    return gulp.src('src/*.html')
        // .pipe(rigger())
        // .pipe(htmlbeautify({
        //     indentSize: 0
        // }))
        // .pipe(changed('dist', { hasChanged: changed.compareContents }))
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(gulp.dest('build'));
        // .pipe(reload({stream: true}));
});


gulp.task('fonts', () => {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('build/fonts'));
});

gulp.task('images', () => {
    return gulp.src('src/images/**/*')
        .pipe(gulp.dest('build/images'));
});

gulp.task('js', () => {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js', // ???????? ???????? ???? ????????????
        'node_modules/slick-carousel/slick/slick.min.js', // ???????? ???????? ???? ??????????
        'src/js/*.js' // ???????? ???? ???????????? ?????????? ???? ?? src ??????????
    ])
        .pipe(concat('main.min.js'))  // ?????????????????????? ???????? ???????????? js ?? ???????? ????????
        .pipe(uglify()) // ???????????????????????? js-??????????
        .pipe(gulp.dest('build/js')) // ?????????? ?? ?????????? ?????? js
        .pipe(browserSync.stream());

});

gulp.task('watch', function() {
    gulp.watch(['src/css/**/*.scss'], ['style']).on('change', browserSync.stream);
    gulp.watch(['src/**/*.html'], ['html']).on('change', reload);
    gulp.watch(['src/js/**/*.js'], ['js']).on('change', reload);
});

// Default Task
gulp.task('default', ['serve','style','html','js','images','fonts','watch']);