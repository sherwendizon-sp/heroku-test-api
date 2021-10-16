'use strict';

const _ = require('lodash');
const TOKEN_TTL = 86400;

module.exports = {
	handleSuccessfulAuth: function* (ctx, user) {
		const redis = ctx.custom.redis;
		const helpers = ctx.custom.helpers;

		// Step 1: Create token
		const token = helpers.general_helper.generateRandomString();

		// Step 2: Save token to redis
		const key = `auth:token:${token}`;
		yield redis.set(key, JSON.stringify(user));
		yield redis.expire(key, TOKEN_TTL);
		yield redis.sadd(`auth:user:${user._id}`, token);

		// Step 3: Return token and user
		const data = {
			auth: {
				token: token
			},
			user: user
		};
		ctx.body = helpers.response.generateResponseString(200, 'Sign up successful', data);
	},

	deleteAllUserTokenFromRedis: function* (redis, user_id) {
		const smemberKey = `auth:user:${user_id}`;
		const tokens = yield redis.smembers(smemberKey);
		yield _.map(tokens, function* (token) {
			const key = `auth:token:${token}`;
			yield redis.del(key);
		});
		yield redis.del(smemberKey);
	}
};
