'use strict';

const co = require('co');
const appRoot = require('app-root-path');
const requireAll = require('require-all');
const moment = require('moment-timezone');

const bin = requireAll(`${appRoot}/bin`, {recursive: true});
const app = bin.app;
const init = bin.init;
const port = 3001;
// const port = 5000 || 3000;

co(function* () {
	console.log('[!] Start');

	// app.context.custom.redis = init.redis();
	// console.log('[!] Redis initialized');

	moment.tz.setDefault('Etc/UTC');
	console.log('[!] Timezone set to UTC');

	app.listen(port);
	console.log('[!] Server started at port:' + port);
}).catch((err) => {
	console.log('Error starting server:', err);
	console.log(err.stack);
});
