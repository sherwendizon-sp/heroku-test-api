'use strict';

const _ = require('lodash');

module.exports = {
	getBearerToken: function (ctx) {
		const headers = ctx.request.headers;

		if (_.isNil(headers.authorization)) {
			return null;
		}

		const auth = headers.authorization;
		const parts = auth.split(' ');

		if (parts.length < 2) {
			return null;
		}

		const schema = _.get(parts, '[0]', '').toLowerCase();

		if ('bearer' != schema) {
			return null;
		}

		return parts.slice(1).join(' ');
	}
};
