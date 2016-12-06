// 创建script对象
// 拼接url?cb=test&a=2&b=9
var roots = typeof window  == 'undefined' ? global : window ;
class Jsonp {

	constructor(a, b) {
		roots._jsonp = roots._jsonp || {};
		this.options = {
			data: {

			},
			success: function (data) {
				console.log(data)
			},
			url: '/',
		}
	}

	get(options) {
		options = this.options = Object.assign(this.options , options);
		let resultUrl = this.makeUrl(options.url, options.data, options.success);
		this.makeScript(resultUrl);
	}

	post() {

	}

	makeScript(url='') {
		let script = document.createElement('script');
		script.src = url;
		document.body.appendChild(script);
		script.onerror = function (e) {
			console.log(e)
		}
	}

	makeUrl(url, data, success) {
		if (!url) return '';
		let cbName = 'cb' + Math.ceil(Math.random() * 1000);
		_jsonp[cbName] = function (data) {
			try{
				success(data);
			}catch(e){
				// console.log(e)
			}finally{
				delete _jsonp[cbName];
			}
		};
		let query = 'cb=_jsonp.' + cbName;
		for (let i in data) {
			query += '&' + i + '=' + data[i];
		}
		return url + (url.match(/\?/) ? query : '?' + query);
	}
}

let jsonp = new Jsonp();
jsonp.makeUrl('asdfasdf');