const fs = require('fs'),
	dirTree = require('directory-tree'),
	jsonfile = require('jsonfile');


class Menu{
	constructor (){

	}

	getFiles(url='./dev/view') {
		return dirTree(url);
	}

	writeFile(path){
		var obj = this.getFiles();
		jsonfile.writeFile(path, obj, function (err) {
		  console.error(err);
		});
	}
}

let menu = new Menu();
menu.writeFile('./test.json');