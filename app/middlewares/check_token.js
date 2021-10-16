'use strict';

const _ = require('lodash');

module.exports = function* (next){
	const ctx = this;
	const helpers = ctx.custom.helpers;

	const authorizationToken = helpers.headers.getBearerToken(ctx);

	if (_.isNil(authorizationToken)) {
		ctx.body = helpers.response.generateErrorResponseString(4031, 'Missing Bearer Token.');
		return;
	}

	const redisKey = `auth:token:${authorizationToken}`;
	const userString = yield ctx.custom.redis.get(redisKey);
	if (_.isNil(userString)) {
		ctx.body = helpers.response.generateErrorResponseString(4032, 'Invalid Bearer Token.');
		return;
	}

	const user = JSON.parse(userString);

	// Temporary allow non-verified user
	// if (!user.email_verified) {
	// 	ctx.body = helpers.response.generateErrorResponseString(4033, 'Account is not yet verified.');
	// 	return;
	// }

	// Set user to context
	_.set(ctx, 'custom.user', user);
	yield next;
};
