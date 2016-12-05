const gulp = require('gulp'),
	connect = require('gulp-connect'),
	wwwPath = './';
const args = require('minimist')(process.argv.slice(2));

//base需要的内容

//1.gulp default ， 根据传参来选择

gulp.task('default', function(){
	console.log(args);
});

gulp.task('server', function(){
	connect.server({
        root: wwwPath,
        port: 8001 ,
        livereload: true
    });
});