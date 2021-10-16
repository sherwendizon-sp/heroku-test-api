'use strict';

const development = require('./environment/development');
// const testing = require('./environment/testing');
// const production = require('./environment/production');

const configs = {
	development: development
	// testing: testing,
	// production: production
};

module.exports = /*configs[process.env.NODE_ENV] || */configs.development;
