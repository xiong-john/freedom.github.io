const gulp = require('gulp'),
	connect = require('gulp-connect'),
	markdown = require('gulp-markdown'),
	wwwPath = './',
	viewPath = './dev/view/',
	pagePath = viewPath + 'pages/'
	mdPath = viewPath + 'md/';
	
const args = require('minimist')(process.argv.slice(2));

gulp.task('watch', function () {
	
	gulp.watch(mdPath + '/*.md', function () {
		gulp.run('markdown');
	});
});

gulp.task('default', ['server', 'watch'],function(){
	console.log(args);
});

gulp.task('server', function(){
	connect.server({
        root: wwwPath,
        port: 8001 ,
        livereload: true
    });
});

gulp.task('markdown', function () {
	gulp.src(mdPath + '/*.md')
		.pipe(markdown({
			highlight: function (code, lang, callback) {
			    require('pygmentize-bundled')({ lang: lang, format: 'html' },  , function (err, result) {
			      callback(err, result.toString());
			    });
			},
			gfm: true
		}))
		.pipe(gulp.dest(pagePath));
});