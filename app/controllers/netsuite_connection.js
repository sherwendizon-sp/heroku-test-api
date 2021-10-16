'use strict';

const _ = require('lodash');

module.exports = {
	// Start Owner's Module
	getAllRolesAndRoleInformation: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const result = yield helpers.netsuite_helper.getAllRolesAndRoleInformation();
		ctx.body = result;
	},

	getAllRolesWithOwners: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const result = yield helpers.netsuite_helper.getAllRolesWithOwners();
		ctx.body = result;
	},

	getAllRolesWithoutOwners: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const result = yield helpers.netsuite_helper.getAllRolesWithoutOwners();
		ctx.body = result;
	},

	getAllOwnerEmployees: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const result = yield helpers.netsuite_helper.getAllOwnerEmployees();
		ctx.body = result;
	},
	
	updateRoleOwners: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const body = ctx.request.body;
		const result = yield helpers.netsuite_helper.updateRoleOwners(JSON.stringify(body));
		ctx.body = result;
	},
	
	removeRoleOwners: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const body = ctx.request.body;

		var ids = body.ids;
		ids = ids.join(',');

		const result = yield helpers.netsuite_helper.removeRoleOwners(ids);
		ctx.body = result;
	},
		
	createOwnerNotes: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const body = ctx.request.body;

		const date = body.date;
		const setBy = body.setBy;
		const type = body.type;
		const field = body.field;
		const oldVal = body.oldVal;
		const newVal = body.newVal;
		const role = body.role;

		const result = yield helpers.netsuite_helper.createOwnerNotes(date, setBy, type, field, oldVal, newVal, role);
		ctx.body = result;
	},
		
	getAllOwnerNotes: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;

		const result = yield helpers.netsuite_helper.getAllOwnerNotes();
		ctx.body = result;
	},	
	// End Owner's Module

	// Start Review Module
	getAllReviewRecords: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const result = yield helpers.netsuite_helper.getAllReviewRecords();
		ctx.body = result;
	},
	
	getAllReviewHistory: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const result = yield helpers.netsuite_helper.getAllReviewHistory();
		ctx.body = result;
	},

	createReview: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const body = ctx.request.body;

		const type = body.type;
		const name = body.name;
		const role = body.role;
		const frequency = body.frequency;

		const result = yield helpers.netsuite_helper.createReview(type, name, role, frequency);
		ctx.body = result;
	},
	
	updateReviewStatus: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const body = ctx.request.body;

		const reviewid = body.reviewid;
		const groupid = body.groupid;
		const status = body.status;

		const result = yield helpers.netsuite_helper.updateReviewStatus(reviewid, groupid, status);
		ctx.body = result;
	},

	getAllReviewNotesByType: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const reviewType = ctx.params.id;
		const result = yield helpers.netsuite_helper.getAllReviewNotesByType(reviewType);
		ctx.body = result;
	},


	getAllPermissions: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		var result = yield helpers.netsuite_helper.getAllPermissions();
		result = result.replace(/<\!--.*?-->/g, '');
		ctx.body = result;
	},
		
	updateChangeRequestStatus: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const body = ctx.request.body;

		const name = body.name;
		const roleid = body.roleid;

		const result = yield helpers.netsuite_helper.updateChangeRequestStatus(name, roleid);
		ctx.body = result;
	},
		
	getPermissionMembershipReviewChangeRequestStatus: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const body = ctx.request.body;

		const crName = body.crName;

		const result = yield helpers.netsuite_helper.getPermissionMembershipReviewChangeRequestStatus(crName);
		ctx.body = result;
	},	
	// End Review Module

    getRolesAndEmployeesAssociated: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const result = yield helpers.netsuite_helper.getRolesAndEmployeesAssociated();
		ctx.body = result;
	},

	getRolesAndPermissionsAssociated: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const result = yield helpers.netsuite_helper.getRolesAndPermissionsAssociated();
		ctx.body = result;
	},

	getAllResourceAccessReviewRecords: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const result = yield helpers.netsuite_helper.getAllResourceAccessReviewRecords();
		ctx.body = result;
	},

	getAllActiveEmployees: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const result = yield helpers.netsuite_helper.getAllActiveEmployees();
		ctx.body = result;
	},

	getAllAccessRequests: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const result = yield helpers.netsuite_helper.getAllAccessRequests();
		ctx.body = result;
	},	

	createAccessRequest: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const body = ctx.request.body;

		const name = body.name;
		const role = body.role;
		const owner = body.owner;
		const assignee = body.assignee;

		const result = yield helpers.netsuite_helper.createAccessRequest(name, role, owner, assignee);
		ctx.body = result;
	},

	createResource: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const body = ctx.request.body;

		const role = body.role;
		const owner = body.owner;
		const access = body.access;

		const result = yield helpers.netsuite_helper.createResource(role, owner, access);
		ctx.body = result;
	},

	updateAccessRequestStatus: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const body = ctx.request.body;

		const type = body.type;
		const id = body.id;
		const status = body.status;

		const result = yield helpers.netsuite_helper.updateAccessRequestStatus(type, id, status);
		ctx.body = result;
	},

	inactivateReviewOrAccessRequest: function* () {
		const ctx = this;
		const helpers = ctx.custom.helpers;
		const body = ctx.request.body;

		const type = body.type;
		var ids = body.ids;
		ids = ids.join(',');

		const result = yield helpers.netsuite_helper.inactivateReviewOrAccessRequest(type, ids);
		ctx.body = result;
	}
};