'use strict';

module.exports = {
	notFound: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;

		ctx.body = helpers.response.generateErrorResponseString(404);
	},
	masterErrorHandler: function* (next) {
		const ctx = this;

		try {
			yield next;
		} catch (e) {
			console.error('[!] ===================== [!]');
			console.error('[!] Internal Server Error [!]');
			console.error(e);
			console.error('[!] ===================== [!]');
			console.error(e.stack);
			console.error('[!] ===================== [!]');
			ctx.body = ctx.custom.helpers.response.generateErrorResponseString(500);
		}
	}
};
