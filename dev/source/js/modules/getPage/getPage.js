// import {myMember} from "./../jsonp";
class PageFetcher {
	constructor() {
		this.ajax = new Ajax();
	}

	getPage(url = '', callback) {
		this.ajax.get({
			url: url,
			success: callback
		});
	}

	inject(url = '', selector) {
		let elem = document.querySelectorAll(selector);
		if(!elem) return false;
		this.getPage(url, data => {
			elem.forEach(function (e) {
				e.innerHTML = data;
			});
		});
	}
}

const pageFetcher = new PageFetcher();