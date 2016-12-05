// 创建script对象
// 拼接url?cb=test&a=2&b=9
var roots = typeof window  == 'undefined' ? global : window ;
class Jsonp {
	constructor(a, b) {
		roots._jsonp = roots._jsonp || {

		};
	}

	get(options = {
		url: '/',
		data: {

		},
		success: function() {

		},
	}) {
		this.options = options;
		let resultUrl = this.makeUrl('asdfasf', options.data, options.success);
		this.makeScript(resultUrl);
	}

	post() {

	}

	makeScript(url='') {
		let script = document.createElement('script');
		script.src = url;
		document.body.appendChild(script);
	}

	makeUrl(url, data, success = function() {}) {
		if (!url) return '';
		let cbName = 'cb' + Math.ceil(Math.random() * 1000);
		roots[cbName] = success;
		let query = 'cb=jsonp.' + cbName;
		for (let i in data) {
			query += '&' + i + '=' + data[i];
		}
		return url.match(/\?/) ? '?' + query : query;
	}
}

let jsonp = new Jsonp();
jsonp.makeUrl('asdfasdf');