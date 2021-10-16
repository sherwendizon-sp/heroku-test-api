'use strict';

exports.getPasswordResetAttempts = (redis, user) =>
	redis.get(`password-reset-attempts:${user._id}`);

exports.startPasswordResetAttempts = (redis, user) =>
	redis.set(`password-reset-attempts:${user._id}`, 1, 'EX', 86400);

exports.increasePasswordResetAttempts = (redis, user) =>
	redis.incr(`password-reset-attempts:${user._id}`);

exports.savePasswordResetToken = (redis, token, user) =>
	redis.set(`password-reset:${token}`, JSON.stringify(user), 'EX', 86400);

exports.getPasswordResetToken = (redis, token) =>
	redis.get(`password-reset:${token}`);

exports.deletePasswordResetToken = (redis, token) =>
	redis.del(`password-reset:${token}`);

exports.saveEmailVerificationToken = (redis, token, user) =>
	redis.set(`email-verification:${token}`, JSON.stringify(user), 'EX', 86400);

exports.getEmailVerificationToken = (redis, token) =>
	redis.get(`email-verification:${token}`);

exports.deleteEmailVerificationToken = (redis, token) =>
	redis.del(`email-verification:${token}`);
