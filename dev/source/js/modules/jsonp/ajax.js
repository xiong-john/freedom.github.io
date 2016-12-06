class Ajax{
	constructor(){
		this.ajaxRequest = XMLHttpRequest?new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		this.options = {
			url: '',
			type: 'GET',
			success: function (data) {
				console.log(data)
			},
			error: function () {
				
			}
		}

		let xml = this.ajaxRequest;
		function onreadystatechange() {
			console.log(this);
			if(xml.readyState == 4) {
				if(xml.status == 200) {
					this.options.success(xml.responseText);
				}else if(xml.status >= 400 && xml.status < 500 ) {

				}
			}
		}
		xml.onreadystatechange =  onreadystatechange.bind(this);
	}
	get(options = {}) {
		this.options = Object.assign(this.options, options);
		let xml = this.ajaxRequest;
		xml.open("GET",this.options.url,true);
		xml.send(null);
	}
	post(options = {}) {
		let xml = Object.assign(this.options,options);
		xml.open("POST",xml.url ,true);
		xml.send(null);
	}
	put() {

	}
	delete() {

	}
}

const ajax = new Ajax;