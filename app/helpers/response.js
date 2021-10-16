'use strict';

const _ = require('lodash');

module.exports = {
	generateNotFoundResponseString: function(objectName) {
		if (_.isNil(objectName)) {
			objectName = 'Object';
		}

		const response = this.generateResponse(404, `${objectName} not found.`);

		return JSON.stringify(response);
	},
	generateErrorResponseString: function(code , message = null) {
		if(_.isNil(message) || message === ''){
			message = this.getErrorMessage(code);
		}

		const response = this.generateResponse(code, message);

		return JSON.stringify(response);
	},
	generateResponseString: function(code, message, data){
		const response = this.generateResponse(code, message, data);

		return JSON.stringify(response);
	},
	generateResponse: function (code, message, data) {
		const response = {
			meta: {
				code: code,
				message: message,
			},
			data: data
		};

		if (_.isNil(data)) {
			delete response.data;
		}

		return response;
	},
	getErrorMessage : function(code){
		switch (code) {
			case 403:
				return 'Unauthorized';
			case 404:
				return 'Resource not found';
			case 500:
				return 'Internal Server Error';
			default:
		}

		return '';
	}
};
