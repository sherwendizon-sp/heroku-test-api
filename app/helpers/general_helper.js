'use strict';

module.exports = {
	generateRandomString: function (length = 20, digitOnly = false) {
		let text = '';
		let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		if(digitOnly){
			possible = '023456789';
		}

		for( var i=0; i < length; i++){
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}

		return text;
	}
};
