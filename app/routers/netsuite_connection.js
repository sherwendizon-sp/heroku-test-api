'use strict';

const Router = require('koa-router');
const appRoot = require('app-root-path');
const requireAll = require('require-all');

const middlewares = requireAll(appRoot + '/app/middlewares');
const controllers = requireAll(appRoot + '/app/controllers');

let router = new Router({
	prefix: '/netsuite'
});

// Start Owner's Module
// GET /netsuite/admin/all-roles'
router.get('/admin/all-roles', controllers.netsuite_connection.getAllRolesAndRoleInformation);

// GET /netsuite/admin/all-roles-with-owners'
router.get('/admin/all-roles-with-owners', controllers.netsuite_connection.getAllRolesWithOwners);

// GET /netsuite/admin/all-roles-without-owners'
router.get('/admin/all-roles-without-owners', controllers.netsuite_connection.getAllRolesWithoutOwners);

// GET /netsuite/admin/all-owner-employees'
router.get('/admin/all-owner-employees', controllers.netsuite_connection.getAllOwnerEmployees);

// GET /netsuite/admin/all-owner-notes'
router.get('/admin/all-owner-notes', controllers.netsuite_connection.getAllOwnerNotes);

// POST /netsuite/admin/create-owner-notes'
router.get('/admin/create-owner-notes', controllers.netsuite_connection.createOwnerNotes);

// POST /netsuite/admin/update-role-owners'
router.post('/admin/update-role-owners', controllers.netsuite_connection.updateRoleOwners);

// POST /netsuite/admin/remove-role-owners'
router.post('/admin/remove-role-owners', controllers.netsuite_connection.removeRoleOwners);
// End Owner's Module

// Start Review Module
// GET /netsuite/admin/all-review-records'
router.get('/admin/all-review-records', controllers.netsuite_connection.getAllReviewRecords);

// GET /netsuite/admin/all-review-history'
router.get('/admin/all-review-history', controllers.netsuite_connection.getAllReviewHistory);

// GET /netsuite/admin/all-review-notes/:id'
router.get('/admin/all-review-notes/:id', controllers.netsuite_connection.getAllReviewNotesByType);

// GET /netsuite/admin/all-permissions'
router.get('/admin/all-permissions', controllers.netsuite_connection.getAllPermissions);

// POST /netsuite/admin/create-review'
router.post('/admin/create-review', controllers.netsuite_connection.createReview);

// POST /netsuite/admin/update-review-status'
router.post('/admin/update-review-status', controllers.netsuite_connection.updateReviewStatus);

// POST /netsuite/admin/update-change-request'
router.post('/admin/update-change-request', controllers.netsuite_connection.updateChangeRequestStatus);

// POST /netsuite/admin/review-change-request-status'
router.post('/admin/review-change-request-status', controllers.netsuite_connection.getPermissionMembershipReviewChangeRequestStatus);
// End Review Module

// GET /netsuite/all-roles-employees'
router.get('/admin/all-roles-employees', controllers.netsuite_connection.getRolesAndEmployeesAssociated);

// GET /netsuite/all-roles-permissions'
router.get('/admin/all-roles-permissions', controllers.netsuite_connection.getRolesAndPermissionsAssociated);

// GET /netsuite/all-resource-access-review-records'
router.get('/admin/all-resource-access-review-records', controllers.netsuite_connection.getAllResourceAccessReviewRecords);

// GET /netsuite/all-employees'
router.get('/admin/all-employees', controllers.netsuite_connection.getAllActiveEmployees);

// GET /netsuite/all-access-requests'
router.get('/admin/all-access-requests', controllers.netsuite_connection.getAllAccessRequests);

// POST /netsuite/create-access-request'
router.post('/admin/create-access-request', controllers.netsuite_connection.createAccessRequest);

// POST /netsuite/create-resource'
router.post('/admin/create-resource', controllers.netsuite_connection.createResource);

// POST /netsuite/update-access-request-status'
router.post('/admin/update-access-request-status', controllers.netsuite_connection.updateAccessRequestStatus);

// POST /netsuite/inactivate-review-or-access-request'
router.post('/admin/inactivate-review-or-access-request', controllers.netsuite_connection.inactivateReviewOrAccessRequest);

module.exports = router;
