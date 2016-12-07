//根据文件夹生成文章目录

//TODO 文章目录结构
//分页，相关，标题，链接等
class Menu{
	constructor (){
		this.pagePath = './dev/view/pages';
		this.cfgPath = './cfg/server/pages.json';
		this.getFiles();
		this.rebuildPage();
	}

	getFiles(url = this.pagePath) {
		let dirTree = require('directory-tree');
		return this.menu = dirTree(url);
	}

	writeFile(){
		let jsonfile = require('jsonfile');
		jsonfile.writeFile(this.cfgPath, this.menu, function (err) {
		  console.error(err);
		});
	}
	rebuildPage() {
		console.log(this.menu)
		this.menu.children.forEach(elem => {
			let path = elem.path;
			this.readFromServer('/' + path);
		});
	}
	readFromServer(url='/dev/view/pages/oop.html', callback=function(){}){
		let host = 'http://localhost:8001',
			rename = require('gulp-rename'),
			gulp = require('gulp'),
			read = require('node-read'),
			inject = require('gulp-inject-string'),
			pagePath = './';

		read(host + url, function(err, article, res) {
			// console.log(article.content)
			if(err) {
				gulp.src(pagePath + url)
					.pipe(inject.wrap('<html><head></head><body>','</body></html>'))
					.pipe(gulp.dest(pagePath + '/dev/view/pages'));
			}
		   callback();

		   // // HTML 
		   // console.log(article.html);
		   
		   // // DOM
		   // console.log(article.title);
		  
		});
	}
}

let menu = new Menu();
menu.writeFile();