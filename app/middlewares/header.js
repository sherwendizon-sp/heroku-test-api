'use strict';

module.exports = {
	setHeader: function* (next){
		const ctx = this;
		ctx.type = 'application/json';
		ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
		ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
		ctx.set('Access-Control-Allow-Origin', '*');
		yield next;
	}
};
