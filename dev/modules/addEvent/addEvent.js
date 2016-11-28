function addEventListener(target, eventType, callback) {
	if(target.addEventListener) {
		addEventListener =  function (target, eventType, callback) {
			target.addEventListener(eventType, callback, false);
		};
	} else {
		addEventListener = function (target, eventType, callback) {
			target.attachEvent("on" + eventType, callback);
		}
	}

	addEventListener(target, eventType, callback);
}

module.exports = addEventListener;