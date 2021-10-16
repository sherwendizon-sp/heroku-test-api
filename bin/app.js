'use strict';

const _ = require('lodash');
const Koa = require('koa');
const koaLogger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const responseTime = require('koa-response-time');

const appRoot = require('app-root-path');
const requireAll = require('require-all');

const routers = requireAll(`${appRoot}/app/routers`);
const helpers = requireAll(`${appRoot}/app/helpers`);
const middlewares = requireAll(`${appRoot}/app/middlewares`);

let app = Koa();

app.context.custom = {
	helpers: {},
	redis: null
};

_.each(helpers, function (dependency, key) {
	app.context.custom.helpers[key] = dependency;
});

// middlewares
app.use(koaLogger());
app.use(bodyParser());
app.use(responseTime());
app.use(middlewares.header.setHeader);
app.use(middlewares.error_handler.masterErrorHandler);

// admin routes
_.each(routers, function (router) {
	app.use(router.routes());
});

app.use(middlewares.error_handler.notFound);

module.exports = app;
