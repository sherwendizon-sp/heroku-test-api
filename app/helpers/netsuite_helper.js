'use strict';
const appRoot = require('app-root-path');
const rp = require('request-promise');
const config = require(appRoot + '/config');

module.exports = {
	// Start Owner's Module
    getAllRolesAndRoleInformation: function* () {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4302&deploy=1&compid=TSTDRV1267181&h=8292426a44230dd942e4';
		const options = {
			method: 'GET',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},

	getAllRolesWithOwners: function* () {
		const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4302&deploy=1&compid=TSTDRV1267181&h=8292426a44230dd942e4&page=2';
		const options = {
			method: 'GET',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},

	getAllRolesWithoutOwners: function* () {
		const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4302&deploy=1&compid=TSTDRV1267181&h=8292426a44230dd942e4&page=1';
		const options = {
			method: 'GET',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},

    getAllOwnerEmployees: function* () {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4303&deploy=1&compid=TSTDRV1267181&h=3e811f95bd8c5094b862';
		const options = {
			method: 'GET',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},
	
    // getAllOwnerNotes: function* () {
    //     // const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4303&deploy=1&compid=TSTDRV1267181&h=3e811f95bd8c5094b862';
	// 	// const options = {
	// 	// 	method: 'GET',
	// 	// 	uri: uri,
	// 	// 	json: true
	// 	// };
	// 	// return yield rp(options);
	// 	const options = {
	// 		"1": {
	// 			"date": "17/09/2021",
	// 			"setBy": "Admin",
	// 			"type": "Change",
	// 			"field": "Add",
	// 			"oldValue": "John Doe",
	// 			"newValue": "Jane Doe",
	// 			"role": "Accountant"
	// 		},
	// 		"2": {
	// 			"date": "17/09/2021",
	// 			"setBy": "Admin",
	// 			"type": "Set",
	// 			"field": "Remove",
	// 			"oldValue": "Harry Potter",
	// 			"newValue": "",
	// 			"role": "Administrator"
	// 		},
	// 		"3": {
	// 			"date": "17/09/2021",
	// 			"setBy": "Admin",
	// 			"type": "Change",
	// 			"field": "Membership Owner",
	// 			"oldValue": "Hugh Jazz",
	// 			"newValue": "Eric Cartman",
	// 			"role": "CEO"
	// 		},
	// 		"4": {
	// 			"date": "17/09/2021",
	// 			"setBy": "Admin",
	// 			"type": "Change",
	// 			"field": "Permission Owner",
	// 			"oldValue": "Kyle Gass",
	// 			"newValue": "Henry Ford",
	// 			"role": "SoD Manager"
	// 		},
	// 		"5": {
	// 			"date": "17/09/2021",
	// 			"setBy": "Admin",
	// 			"type": "Set",
	// 			"field": "Access Owner",
	// 			"oldValue": "",
	// 			"newValue": "George Harrison",
	// 			"role": "IT Manager"
	// 		},
	// 		"6": {
	// 			"date": "17/09/2021",
	// 			"setBy": "Admin",
	// 			"type": "Change",
	// 			"field": "Reminder",
	// 			"oldValue": "Email",
	// 			"newValue": "",
	// 			"role": "Accountant"
	// 		},
	// 		"7": {
	// 			"date": "17/09/2021",
	// 			"setBy": "Admin",
	// 			"type": "Change",
	// 			"field": "Permission Owner",
	// 			"oldValue": "Matthew Crawley",
	// 			"newValue": "Henry Talbot",
	// 			"role": "Administrator"
	// 		},
	// 		"8": {
	// 			"date": "17/09/2021",
	// 			"setBy": "Admin",
	// 			"type": "Set",
	// 			"field": "Membership Owner",
	// 			"oldValue": "",
	// 			"newValue": "Peter Parker",
	// 			"role": "Manager"
	// 		},
	// 		"9": {
	// 			"date": "17/09/2021",
	// 			"setBy": "Admin",
	// 			"type": "Remove",
	// 			"field": "Membership Owner",
	// 			"oldValue": "Tony Stark",
	// 			"newValue": "",
	// 			"role": "System Administrator"
	// 		}
	// 	};
	// 	return yield options;
	// },	
	
	updateRoleOwners: function* (body) {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4305&deploy=1&compid=TSTDRV1267181&h=b7c003a8fc16c409dcfb&rolejson=' +body;
		const options = {
			method: 'GET',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},
	
	removeRoleOwners: function* (id) {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4306&deploy=1&compid=TSTDRV1267181&h=46ae8d8c2a63276254b2&roles=' +id;
		const options = {
			method: 'GET',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},
	
	createOwnerNotes: function* (date, setBy, type, field, oldVal, newVal, role) {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4310&deploy=1&compid=TSTDRV1267181&h=2b6b115fe222eda91fe1&isSubmit=true' + "date=" +date +"&setBy=" +escape(setBy) +"&type=" +type +"&field=" +escape(field) +"&oldVal=" +escape(oldVal) +"&newVal=" +escape(newVal) +"&role=" +escape(role);
		const options = {
			method: 'GET',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},
	
	getAllOwnerNotes: function* () {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4310&deploy=1&compid=TSTDRV1267181&h=2b6b115fe222eda91fe1';
		const options = {
			method: 'GET',
			uri: uri,
			json: true
		};
		return yield rp(options);
	}, 	 		
	// End Owner's Module

	// Start Review Module
    getAllReviewRecords: function* () {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4254&deploy=1&compid=TSTDRV1267181&h=8013a3f55d4eda83613a';
		const options = {
			method: 'GET',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},

    getAllReviewHistory: function* () {
        // const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4254&deploy=1&compid=TSTDRV1267181&h=8013a3f55d4eda83613a';
		// const options = {
		// 	method: 'GET',
		// 	uri: uri,
		// 	json: true
		// };
		// return yield rp(options);

		const options = {
			"1": {
				"reviewName": "Q1 2021",
				"roleName": "03: Inside Sales",
				"reviewType": "Both",
				"status": "Completed",
				"createdBy": "Trixie Sante",
				"createdOn": "03/24/2021",
				"finishedOn": "03/26/2021",
				"reviewsGroup":
					{
						"1": {
							"reviewName": "Q1 2021_Membership_03: Inside Sales",
							"type": "Membership",
							"frequency": "Quarterly",
							"status": "Completed",
							"lastReviewdOn": "11/11/2020",
							"reviews":{
								"1": {
									'1': { 'user': {'id': '1', 'name': 'Beverly Ucab'}, 'permission': [{'name': 'Adjust Inventory'},{'name': 'Company Bank Details' },{'name': 'Billing Data' }], 'otherroles': [{'name': 'Accountant'},{'name': 'Administrator' },{'name': 'Bill Creator' }], 'sodviolations': [{'name': 'Admin Permissions Rule'},{'name': 'Amortization Schedule Entries Rule'},{'name': 'Administrator Assignment Requires Approval'},{'name': 'Bank Reconciliations Rule'},{'name': 'Invoice & Journal Entry'}], 'status': 'Completed', 'reviewer': 'John Albura'},
									'2': { 'user': {'id': '2', 'name': 'Joanna Paclibar'}, 'permission': [{'name': 'Bills'},{'name': 'FAM - Expense/Income'},{'name': 'Lists Address' },{'name': 'Payment Aggregation' }], 'otherroles': [{'name': 'Employee Center'},{'name': 'SoD Manager' },{'name': 'User Access Owner' }], 'sodviolations': [{'name': 'Accounts Payable Approver'},{'name': 'Admin Permissions Rule'},{'name': 'Purchase Requisition Rule'}], 'status': 'Completed', 'reviewer': 'Maria Acain'},
									'3': { 'user': {'id': '3', 'name': 'Sherwen Dizon'}, 'permission': [{'name': 'Invoice'},{'name': 'Pending Role Evaluations' }], 'otherroles': [{'name': 'SDF Developer' },{'name': 'Strongpoint Developer Role' }], 'sodviolations': [{'name': 'ACH Processing'},{'name': 'A/R Register'},{'name': 'Customer & OTC Transactions'},{'name': 'Invoice & Journal Entry'}], 'status': 'Completed', 'reviewer': 'Marichu de Leon'},
									'4': { 'user': {'id': '4', 'name': 'Trixie Sante'}, 'permission': [{'name': 'Charge'},{'name': 'Reports Budget' },{'name': 'Pending Role Evaluations' }], 'otherroles': [{'name': 'Marketing Manager'},{'name': 'A/P Clerk' },{'name': 'User Access Owner' }], 'sodviolations': [{'name': 'Admin Permissions Rule'},{'name': 'Cash Managements Rule'}], 'status': 'Completed', 'reviewer': 'Nic Cano'},
									'5': { 'user': {'id': '5', 'name': 'Carlos Banawan'}, 'permission': [{'name': 'Credit Memo'},{'name': 'Lists Termination Reasons' },{'name': 'Mapping Setup'}, {'name': 'Reports Expenses' },{'name': 'Serial Numbers' }], 'otherroles': [{'name': 'Accountant' },{'name': 'Administrator' }], 'sodviolations': [{'name': 'Administrator Assignment Requires Approval'},{'name': 'Setup Permissions Needs Approval'},{'name': 'Accounts Payable Approver'},{'name': 'Admin Permissions Rule'}], 'status': 'Completed', 'reviewer': 'Enriqueta Marquez'},
									'6': { 'user': {'id': '6', 'name': 'Jade Jumao-as'}, 'permission': [{'name': 'Purchase Order'},{'name': 'Setup Billing Information' },{'name': 'Field References' }], 'otherroles': [{'name': 'A/R Reports' },{'name': 'Accountant' }], 'sodviolations': [{'name': 'A/R Reports'},{'name': 'A/R Register'},{'name': 'Customer & OTC Transactions'},{'name': 'Item Record'},{'name': 'Invoice & Journal Entry'},{'name': 'Bill and FAM Transactions'}], 'status': 'Completed', 'reviewer': 'Nic Cano'},
								}
							}
						},
						"2": {
							"reviewName": "Q1 2021_Permission_03: Inside Sales",
							"type": "Permission",
							"frequency": "Quarterly",
							"status": "Completed",
							"lastReviewdOn": "11/11/2020",
							"reviews": {
								"1": [
									{
										'permission': {'value': 'TRAN_INVADJST', 'text': 'Adjust Inventory' },
										'category': 'Transactions',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'TRAN_PAYMENTAUDIT', 'text': 'Access Payment Audit Log' },
										'category': 'Transactions',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'ADMI_ACCOUNTINGLIST', 'text': 'Accounting Lists' },
										'category': 'Setup',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'LIST_ACCOUNT', 'text': 'Accounts' },
										'category': 'Lists',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'LIST_AMORTIZATION', 'text': 'Amortization Schedules' },
										'category': 'Lists',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'TRAN_PURCHORDBILL', 'text': 'Bill Purchase Orders' },
										'category': 'Transactions',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'REPO_ACCOUNTDETAIL', 'text': 'Account Detail' },
										'category': 'Reports',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'ADMI_ACCOUNTING', 'text': 'Accounting Management' },
										'category': 'Setup',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'GRAP_AP', 'text': 'Accounts Payable Graphing' },
										'category': 'Reports',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'REPO_BALANCESHEET', 'text': 'Balance Sheet' },
										'category': 'Reports',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'LIST_BILLOFDISTRIBUTION', 'text': 'Bill Of Distribution' },
										'category': 'Lists',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'ADMI_DELETEDRECORD', 'text': 'Deleted Records' },
										'category': 'Setup',
										'level': 'View',
										'status': 'Completed'
									},
								]
							}
						}
					}
			},
			"2": {
				"reviewName": "Q1 2021",
				"roleName": "Marketing Director",
				"reviewType": "Both",
				"status": "Completed",
				"createdBy": "Trixie Sante",
				"createdOn": "03/24/2021",
				"finishedOn": "03/26/2021",
				"reviewsGroup":
					{
						"1": {
							"reviewName": "Q1 2021_Membership_Marketing Director",
							"type": "Membership",
							"frequency": "Quarterly",
							"status": "Completed",
							"lastReviewdOn": "11/11/2020",
							"reviews":{
								"1": {
									'1': { 'user': {'id': '1', 'name': 'Beverly Ucab'}, 'permission': [{'name': 'Adjust Inventory'},{'name': 'Company Bank Details' },{'name': 'Billing Data' }], 'otherroles': [{'name': 'Accountant'},{'name': 'Administrator' },{'name': 'Bill Creator' }], 'sodviolations': [{'name': 'Admin Permissions Rule'},{'name': 'Amortization Schedule Entries Rule'},{'name': 'Administrator Assignment Requires Approval'},{'name': 'Bank Reconciliations Rule'},{'name': 'Invoice & Journal Entry'}], 'status': 'Completed', 'reviewer': 'John Albura'},
									'2': { 'user': {'id': '2', 'name': 'Joanna Paclibar'}, 'permission': [{'name': 'Bills'},{'name': 'FAM - Expense/Income'},{'name': 'Lists Address' },{'name': 'Payment Aggregation' }], 'otherroles': [{'name': 'Employee Center'},{'name': 'SoD Manager' },{'name': 'User Access Owner' }], 'sodviolations': [{'name': 'Accounts Payable Approver'},{'name': 'Admin Permissions Rule'},{'name': 'Purchase Requisition Rule'}], 'status': 'Completed', 'reviewer': 'Maria Acain'},
									'3': { 'user': {'id': '3', 'name': 'Sherwen Dizon'}, 'permission': [{'name': 'Invoice'},{'name': 'Pending Role Evaluations' }], 'otherroles': [{'name': 'SDF Developer' },{'name': 'Strongpoint Developer Role' }], 'sodviolations': [{'name': 'ACH Processing'},{'name': 'A/R Register'},{'name': 'Customer & OTC Transactions'},{'name': 'Invoice & Journal Entry'}], 'status': 'Completed', 'reviewer': 'Marichu de Leon'},
									'4': { 'user': {'id': '4', 'name': 'Trixie Sante'}, 'permission': [{'name': 'Charge'},{'name': 'Reports Budget' },{'name': 'Pending Role Evaluations' }], 'otherroles': [{'name': 'Marketing Manager'},{'name': 'A/P Clerk' },{'name': 'User Access Owner' }], 'sodviolations': [{'name': 'Admin Permissions Rule'},{'name': 'Cash Managements Rule'}], 'status': 'Completed', 'reviewer': 'Nic Cano'},
									'5': { 'user': {'id': '5', 'name': 'Carlos Banawan'}, 'permission': [{'name': 'Credit Memo'},{'name': 'Lists Termination Reasons' },{'name': 'Mapping Setup'}, {'name': 'Reports Expenses' },{'name': 'Serial Numbers' }], 'otherroles': [{'name': 'Accountant' },{'name': 'Administrator' }], 'sodviolations': [{'name': 'Administrator Assignment Requires Approval'},{'name': 'Setup Permissions Needs Approval'},{'name': 'Accounts Payable Approver'},{'name': 'Admin Permissions Rule'}], 'status': 'Completed', 'reviewer': 'Enriqueta Marquez'},
									'6': { 'user': {'id': '6', 'name': 'Jade Jumao-as'}, 'permission': [{'name': 'Purchase Order'},{'name': 'Setup Billing Information' },{'name': 'Field References' }], 'otherroles': [{'name': 'A/R Reports' },{'name': 'Accountant' }], 'sodviolations': [{'name': 'A/R Reports'},{'name': 'A/R Register'},{'name': 'Customer & OTC Transactions'},{'name': 'Item Record'},{'name': 'Invoice & Journal Entry'},{'name': 'Bill and FAM Transactions'}], 'status': 'Completed', 'reviewer': 'Nic Cano'},
								}
							}
						},
						"2": {
							"reviewName": "Q1 2021_Permission_Marketing Director",
							"type": "Permission",
							"frequency": "Quarterly",
							"status": "Completed",
							"lastReviewdOn": "11/11/2020",
							"reviews": {
								"1": [
									{
										'permission': {'value': 'TRAN_INVADJST', 'text': 'Adjust Inventory' },
										'category': 'Transactions',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'TRAN_PAYMENTAUDIT', 'text': 'Access Payment Audit Log' },
										'category': 'Transactions',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'ADMI_ACCOUNTINGLIST', 'text': 'Accounting Lists' },
										'category': 'Setup',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'LIST_ACCOUNT', 'text': 'Accounts' },
										'category': 'Lists',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'LIST_AMORTIZATION', 'text': 'Amortization Schedules' },
										'category': 'Lists',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'TRAN_PURCHORDBILL', 'text': 'Bill Purchase Orders' },
										'category': 'Transactions',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'REPO_ACCOUNTDETAIL', 'text': 'Account Detail' },
										'category': 'Reports',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'ADMI_ACCOUNTING', 'text': 'Accounting Management' },
										'category': 'Setup',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'GRAP_AP', 'text': 'Accounts Payable Graphing' },
										'category': 'Reports',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'REPO_BALANCESHEET', 'text': 'Balance Sheet' },
										'category': 'Reports',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'LIST_BILLOFDISTRIBUTION', 'text': 'Bill Of Distribution' },
										'category': 'Lists',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'ADMI_DELETEDRECORD', 'text': 'Deleted Records' },
										'category': 'Setup',
										'level': 'View',
										'status': 'Completed'
									},
								]
							}
						}
					}
			},			
			"3": {
				"reviewName": "Q1 2021",
				"roleName": "09: Shipping",
				"reviewType": "Both",
				"status": "Completed",
				"createdBy": "Trixie Sante",
				"createdOn": "03/24/2021",
				"finishedOn": "03/26/2021",
				"reviewsGroup":
					{
						"1": {
							"reviewName": "Q1 2021_Membership_09: Shipping",
							"type": "Membership",
							"frequency": "Quarterly",
							"status": "Completed",
							"lastReviewdOn": "11/11/2020",
							"reviews":{
								"1": {
									'1': { 'user': {'id': '1', 'name': 'Beverly Ucab'}, 'permission': [{'name': 'Adjust Inventory'},{'name': 'Company Bank Details' },{'name': 'Billing Data' }], 'otherroles': [{'name': 'Accountant'},{'name': 'Administrator' },{'name': 'Bill Creator' }], 'sodviolations': [{'name': 'Admin Permissions Rule'},{'name': 'Amortization Schedule Entries Rule'},{'name': 'Administrator Assignment Requires Approval'},{'name': 'Bank Reconciliations Rule'},{'name': 'Invoice & Journal Entry'}], 'status': 'Completed', 'reviewer': 'John Albura'},
									'2': { 'user': {'id': '2', 'name': 'Joanna Paclibar'}, 'permission': [{'name': 'Bills'},{'name': 'FAM - Expense/Income'},{'name': 'Lists Address' },{'name': 'Payment Aggregation' }], 'otherroles': [{'name': 'Employee Center'},{'name': 'SoD Manager' },{'name': 'User Access Owner' }], 'sodviolations': [{'name': 'Accounts Payable Approver'},{'name': 'Admin Permissions Rule'},{'name': 'Purchase Requisition Rule'}], 'status': 'Completed', 'reviewer': 'Maria Acain'},
									'3': { 'user': {'id': '3', 'name': 'Sherwen Dizon'}, 'permission': [{'name': 'Invoice'},{'name': 'Pending Role Evaluations' }], 'otherroles': [{'name': 'SDF Developer' },{'name': 'Strongpoint Developer Role' }], 'sodviolations': [{'name': 'ACH Processing'},{'name': 'A/R Register'},{'name': 'Customer & OTC Transactions'},{'name': 'Invoice & Journal Entry'}], 'status': 'Completed', 'reviewer': 'Marichu de Leon'},
									'4': { 'user': {'id': '4', 'name': 'Trixie Sante'}, 'permission': [{'name': 'Charge'},{'name': 'Reports Budget' },{'name': 'Pending Role Evaluations' }], 'otherroles': [{'name': 'Marketing Manager'},{'name': 'A/P Clerk' },{'name': 'User Access Owner' }], 'sodviolations': [{'name': 'Admin Permissions Rule'},{'name': 'Cash Managements Rule'}], 'status': 'Completed', 'reviewer': 'Nic Cano'},
									'5': { 'user': {'id': '5', 'name': 'Carlos Banawan'}, 'permission': [{'name': 'Credit Memo'},{'name': 'Lists Termination Reasons' },{'name': 'Mapping Setup'}, {'name': 'Reports Expenses' },{'name': 'Serial Numbers' }], 'otherroles': [{'name': 'Accountant' },{'name': 'Administrator' }], 'sodviolations': [{'name': 'Administrator Assignment Requires Approval'},{'name': 'Setup Permissions Needs Approval'},{'name': 'Accounts Payable Approver'},{'name': 'Admin Permissions Rule'}], 'status': 'Completed', 'reviewer': 'Enriqueta Marquez'},
									'6': { 'user': {'id': '6', 'name': 'Jade Jumao-as'}, 'permission': [{'name': 'Purchase Order'},{'name': 'Setup Billing Information' },{'name': 'Field References' }], 'otherroles': [{'name': 'A/R Reports' },{'name': 'Accountant' }], 'sodviolations': [{'name': 'A/R Reports'},{'name': 'A/R Register'},{'name': 'Customer & OTC Transactions'},{'name': 'Item Record'},{'name': 'Invoice & Journal Entry'},{'name': 'Bill and FAM Transactions'}], 'status': 'Completed', 'reviewer': 'Nic Cano'},
								}
							}
						},
						"2": {
							"reviewName": "Q1 2021_Permission_09: Shipping",
							"type": "Permission",
							"frequency": "Quarterly",
							"status": "Completed",
							"lastReviewdOn": "11/11/2020",
							"reviews": {
								"1": [
									{
										'permission': {'value': 'TRAN_INVADJST', 'text': 'Adjust Inventory' },
										'category': 'Transactions',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'TRAN_PAYMENTAUDIT', 'text': 'Access Payment Audit Log' },
										'category': 'Transactions',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'ADMI_ACCOUNTINGLIST', 'text': 'Accounting Lists' },
										'category': 'Setup',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'LIST_ACCOUNT', 'text': 'Accounts' },
										'category': 'Lists',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'LIST_AMORTIZATION', 'text': 'Amortization Schedules' },
										'category': 'Lists',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'TRAN_PURCHORDBILL', 'text': 'Bill Purchase Orders' },
										'category': 'Transactions',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'REPO_ACCOUNTDETAIL', 'text': 'Account Detail' },
										'category': 'Reports',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'ADMI_ACCOUNTING', 'text': 'Accounting Management' },
										'category': 'Setup',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'GRAP_AP', 'text': 'Accounts Payable Graphing' },
										'category': 'Reports',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'REPO_BALANCESHEET', 'text': 'Balance Sheet' },
										'category': 'Reports',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'LIST_BILLOFDISTRIBUTION', 'text': 'Bill Of Distribution' },
										'category': 'Lists',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'ADMI_DELETEDRECORD', 'text': 'Deleted Records' },
										'category': 'Setup',
										'level': 'View',
										'status': 'Completed'
									},
								]
							}
						}
					}
			},
			"4": {
				"reviewName": "Q1 2021",
				"roleName": "Accountant",
				"reviewType": "Both",
				"status": "Completed",
				"createdBy": "Trixie Sante",
				"createdOn": "03/24/2021",
				"finishedOn": "03/26/2021",
				"reviewsGroup":
					{
						"1": {
							"reviewName": "Q1 2021_Membership_Accountant",
							"type": "Membership",
							"frequency": "Quarterly",
							"status": "Completed",
							"lastReviewdOn": "11/11/2020",
							"reviews":{
								"1": {
									'1': { 'user': {'id': '1', 'name': 'Beverly Ucab'}, 'permission': [{'name': 'Adjust Inventory'},{'name': 'Company Bank Details' },{'name': 'Billing Data' }], 'otherroles': [{'name': 'Accountant'},{'name': 'Administrator' },{'name': 'Bill Creator' }], 'sodviolations': [{'name': 'Admin Permissions Rule'},{'name': 'Amortization Schedule Entries Rule'},{'name': 'Administrator Assignment Requires Approval'},{'name': 'Bank Reconciliations Rule'},{'name': 'Invoice & Journal Entry'}], 'status': 'Completed', 'reviewer': 'John Albura'},
									'2': { 'user': {'id': '2', 'name': 'Joanna Paclibar'}, 'permission': [{'name': 'Bills'},{'name': 'FAM - Expense/Income'},{'name': 'Lists Address' },{'name': 'Payment Aggregation' }], 'otherroles': [{'name': 'Employee Center'},{'name': 'SoD Manager' },{'name': 'User Access Owner' }], 'sodviolations': [{'name': 'Accounts Payable Approver'},{'name': 'Admin Permissions Rule'},{'name': 'Purchase Requisition Rule'}], 'status': 'Completed', 'reviewer': 'Maria Acain'},
									'3': { 'user': {'id': '3', 'name': 'Sherwen Dizon'}, 'permission': [{'name': 'Invoice'},{'name': 'Pending Role Evaluations' }], 'otherroles': [{'name': 'SDF Developer' },{'name': 'Strongpoint Developer Role' }], 'sodviolations': [{'name': 'ACH Processing'},{'name': 'A/R Register'},{'name': 'Customer & OTC Transactions'},{'name': 'Invoice & Journal Entry'}], 'status': 'Completed', 'reviewer': 'Marichu de Leon'},
									'4': { 'user': {'id': '4', 'name': 'Trixie Sante'}, 'permission': [{'name': 'Charge'},{'name': 'Reports Budget' },{'name': 'Pending Role Evaluations' }], 'otherroles': [{'name': 'Marketing Manager'},{'name': 'A/P Clerk' },{'name': 'User Access Owner' }], 'sodviolations': [{'name': 'Admin Permissions Rule'},{'name': 'Cash Managements Rule'}], 'status': 'Completed', 'reviewer': 'Nic Cano'},
									'5': { 'user': {'id': '5', 'name': 'Carlos Banawan'}, 'permission': [{'name': 'Credit Memo'},{'name': 'Lists Termination Reasons' },{'name': 'Mapping Setup'}, {'name': 'Reports Expenses' },{'name': 'Serial Numbers' }], 'otherroles': [{'name': 'Accountant' },{'name': 'Administrator' }], 'sodviolations': [{'name': 'Administrator Assignment Requires Approval'},{'name': 'Setup Permissions Needs Approval'},{'name': 'Accounts Payable Approver'},{'name': 'Admin Permissions Rule'}], 'status': 'Completed', 'reviewer': 'Enriqueta Marquez'},
									'6': { 'user': {'id': '6', 'name': 'Jade Jumao-as'}, 'permission': [{'name': 'Purchase Order'},{'name': 'Setup Billing Information' },{'name': 'Field References' }], 'otherroles': [{'name': 'A/R Reports' },{'name': 'Accountant' }], 'sodviolations': [{'name': 'A/R Reports'},{'name': 'A/R Register'},{'name': 'Customer & OTC Transactions'},{'name': 'Item Record'},{'name': 'Invoice & Journal Entry'},{'name': 'Bill and FAM Transactions'}], 'status': 'Completed', 'reviewer': 'Nic Cano'},
								}
							}
						},
						"2": {
							"reviewName": "Q1 2021_Permission_Accountant",
							"type": "Permission",
							"frequency": "Quarterly",
							"status": "Completed",
							"lastReviewdOn": "11/11/2020",
							"reviews": {
								"1": [
									{
										'permission': {'value': 'TRAN_INVADJST', 'text': 'Adjust Inventory' },
										'category': 'Transactions',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'TRAN_PAYMENTAUDIT', 'text': 'Access Payment Audit Log' },
										'category': 'Transactions',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'ADMI_ACCOUNTINGLIST', 'text': 'Accounting Lists' },
										'category': 'Setup',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'LIST_ACCOUNT', 'text': 'Accounts' },
										'category': 'Lists',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'LIST_AMORTIZATION', 'text': 'Amortization Schedules' },
										'category': 'Lists',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'TRAN_PURCHORDBILL', 'text': 'Bill Purchase Orders' },
										'category': 'Transactions',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'REPO_ACCOUNTDETAIL', 'text': 'Account Detail' },
										'category': 'Reports',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'ADMI_ACCOUNTING', 'text': 'Accounting Management' },
										'category': 'Setup',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'GRAP_AP', 'text': 'Accounts Payable Graphing' },
										'category': 'Reports',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'REPO_BALANCESHEET', 'text': 'Balance Sheet' },
										'category': 'Reports',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'LIST_BILLOFDISTRIBUTION', 'text': 'Bill Of Distribution' },
										'category': 'Lists',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'ADMI_DELETEDRECORD', 'text': 'Deleted Records' },
										'category': 'Setup',
										'level': 'View',
										'status': 'Completed'
									},
								]
							}
						}
					}
			},
			"5": {
				"reviewName": "Q1 2021",
				"roleName": "Accountant (Reviewer)",
				"reviewType": "Both",
				"status": "Completed",
				"createdBy": "Trixie Sante",
				"createdOn": "03/24/2021",
				"finishedOn": "03/26/2021",
				"reviewsGroup":
					{
						"1": {
							"reviewName": "Q1 2021_Membership_Accountant (Reviewer)",
							"type": "Membership",
							"frequency": "Quarterly",
							"status": "Completed",
							"lastReviewdOn": "11/11/2020",
							"reviews":{
								"1": {
									'1': { 'user': {'id': '1', 'name': 'Beverly Ucab'}, 'permission': [{'name': 'Adjust Inventory'},{'name': 'Company Bank Details' },{'name': 'Billing Data' }], 'otherroles': [{'name': 'Accountant'},{'name': 'Administrator' },{'name': 'Bill Creator' }], 'sodviolations': [{'name': 'Admin Permissions Rule'},{'name': 'Amortization Schedule Entries Rule'},{'name': 'Administrator Assignment Requires Approval'},{'name': 'Bank Reconciliations Rule'},{'name': 'Invoice & Journal Entry'}], 'status': 'Completed', 'reviewer': 'John Albura'},
									'2': { 'user': {'id': '2', 'name': 'Joanna Paclibar'}, 'permission': [{'name': 'Bills'},{'name': 'FAM - Expense/Income'},{'name': 'Lists Address' },{'name': 'Payment Aggregation' }], 'otherroles': [{'name': 'Employee Center'},{'name': 'SoD Manager' },{'name': 'User Access Owner' }], 'sodviolations': [{'name': 'Accounts Payable Approver'},{'name': 'Admin Permissions Rule'},{'name': 'Purchase Requisition Rule'}], 'status': 'Completed', 'reviewer': 'Maria Acain'},
									'3': { 'user': {'id': '3', 'name': 'Sherwen Dizon'}, 'permission': [{'name': 'Invoice'},{'name': 'Pending Role Evaluations' }], 'otherroles': [{'name': 'SDF Developer' },{'name': 'Strongpoint Developer Role' }], 'sodviolations': [{'name': 'ACH Processing'},{'name': 'A/R Register'},{'name': 'Customer & OTC Transactions'},{'name': 'Invoice & Journal Entry'}], 'status': 'Completed', 'reviewer': 'Marichu de Leon'},
									'4': { 'user': {'id': '4', 'name': 'Trixie Sante'}, 'permission': [{'name': 'Charge'},{'name': 'Reports Budget' },{'name': 'Pending Role Evaluations' }], 'otherroles': [{'name': 'Marketing Manager'},{'name': 'A/P Clerk' },{'name': 'User Access Owner' }], 'sodviolations': [{'name': 'Admin Permissions Rule'},{'name': 'Cash Managements Rule'}], 'status': 'Completed', 'reviewer': 'Nic Cano'},
									'5': { 'user': {'id': '5', 'name': 'Carlos Banawan'}, 'permission': [{'name': 'Credit Memo'},{'name': 'Lists Termination Reasons' },{'name': 'Mapping Setup'}, {'name': 'Reports Expenses' },{'name': 'Serial Numbers' }], 'otherroles': [{'name': 'Accountant' },{'name': 'Administrator' }], 'sodviolations': [{'name': 'Administrator Assignment Requires Approval'},{'name': 'Setup Permissions Needs Approval'},{'name': 'Accounts Payable Approver'},{'name': 'Admin Permissions Rule'}], 'status': 'Completed', 'reviewer': 'Enriqueta Marquez'},
									'6': { 'user': {'id': '6', 'name': 'Jade Jumao-as'}, 'permission': [{'name': 'Purchase Order'},{'name': 'Setup Billing Information' },{'name': 'Field References' }], 'otherroles': [{'name': 'A/R Reports' },{'name': 'Accountant' }], 'sodviolations': [{'name': 'A/R Reports'},{'name': 'A/R Register'},{'name': 'Customer & OTC Transactions'},{'name': 'Item Record'},{'name': 'Invoice & Journal Entry'},{'name': 'Bill and FAM Transactions'}], 'status': 'Completed', 'reviewer': 'Nic Cano'},
								}
							}
						},
						"2": {
							"reviewName": "Q1 2021_Permission_Accountant (Reviewer)",
							"type": "Permission",
							"frequency": "Quarterly",
							"status": "Completed",
							"lastReviewdOn": "11/11/2020",
							"reviews": {
								"1": [
									{
										'permission': {'value': 'TRAN_INVADJST', 'text': 'Adjust Inventory' },
										'category': 'Transactions',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'TRAN_PAYMENTAUDIT', 'text': 'Access Payment Audit Log' },
										'category': 'Transactions',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'ADMI_ACCOUNTINGLIST', 'text': 'Accounting Lists' },
										'category': 'Setup',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'LIST_ACCOUNT', 'text': 'Accounts' },
										'category': 'Lists',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'LIST_AMORTIZATION', 'text': 'Amortization Schedules' },
										'category': 'Lists',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'TRAN_PURCHORDBILL', 'text': 'Bill Purchase Orders' },
										'category': 'Transactions',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'REPO_ACCOUNTDETAIL', 'text': 'Account Detail' },
										'category': 'Reports',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'ADMI_ACCOUNTING', 'text': 'Accounting Management' },
										'category': 'Setup',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'GRAP_AP', 'text': 'Accounts Payable Graphing' },
										'category': 'Reports',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'REPO_BALANCESHEET', 'text': 'Balance Sheet' },
										'category': 'Reports',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'LIST_BILLOFDISTRIBUTION', 'text': 'Bill Of Distribution' },
										'category': 'Lists',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'ADMI_DELETEDRECORD', 'text': 'Deleted Records' },
										'category': 'Setup',
										'level': 'View',
										'status': 'Completed'
									},
								]
							}
						}
					}
			},											
			"6": {
				"reviewName": "Q2 2021",
				"roleName": "Customer Center",
				"reviewType": "Both",
				"status": "Completed",
				"createdBy": "Bevs Ucabb",
				"createdOn": "05/12/2021",
				"finishedOn": "05/29/2021",
				"reviewsGroup":
					{
						"1": {
							"reviewName": "Q2 2021_Membership_Customer Center",
							"type": "Membership",
							"frequency": "Quarterly",
							"status": "Completed",
							"lastReviewdOn": "03/09/2021",
							"reviews":{
								"1": {
									'1': { 'user': {'id': '1', 'name': 'Beverly Ucab'}, 'permission': [{'name': 'Adjust Inventory'},{'name': 'Company Bank Details' },{'name': 'Billing Data' }], 'otherroles': [{'name': 'Accountant'},{'name': 'Administrator' },{'name': 'Bill Creator' }], 'sodviolations': [{'name': 'Admin Permissions Rule'},{'name': 'Amortization Schedule Entries Rule'},{'name': 'Administrator Assignment Requires Approval'},{'name': 'Bank Reconciliations Rule'},{'name': 'Invoice & Journal Entry'}], 'status': 'Completed', 'reviewer': 'John Albura'},
									'2': { 'user': {'id': '2', 'name': 'Joanna Paclibar'}, 'permission': [{'name': 'Bills'},{'name': 'FAM - Expense/Income'},{'name': 'Lists Address' },{'name': 'Payment Aggregation' }], 'otherroles': [{'name': 'Employee Center'},{'name': 'SoD Manager' },{'name': 'User Access Owner' }], 'sodviolations': [{'name': 'Accounts Payable Approver'},{'name': 'Admin Permissions Rule'},{'name': 'Purchase Requisition Rule'}], 'status': 'Completed', 'reviewer': 'Maria Acain'},
									'3': { 'user': {'id': '3', 'name': 'Sherwen Dizon'}, 'permission': [{'name': 'Invoice'},{'name': 'Pending Role Evaluations' }], 'otherroles': [{'name': 'SDF Developer' },{'name': 'Strongpoint Developer Role' }], 'sodviolations': [{'name': 'ACH Processing'},{'name': 'A/R Register'},{'name': 'Customer & OTC Transactions'},{'name': 'Invoice & Journal Entry'}], 'status': 'Completed', 'reviewer': 'Marichu de Leon'},
									'4': { 'user': {'id': '4', 'name': 'Trixie Sante'}, 'permission': [{'name': 'Charge'},{'name': 'Reports Budget' },{'name': 'Pending Role Evaluations' }], 'otherroles': [{'name': 'Marketing Manager'},{'name': 'A/P Clerk' },{'name': 'User Access Owner' }], 'sodviolations': [{'name': 'Admin Permissions Rule'},{'name': 'Cash Managements Rule'}], 'status': 'Completed', 'reviewer': 'Nic Cano'},
									'5': { 'user': {'id': '5', 'name': 'Carlos Banawan'}, 'permission': [{'name': 'Credit Memo'},{'name': 'Lists Termination Reasons' },{'name': 'Mapping Setup'}, {'name': 'Reports Expenses' },{'name': 'Serial Numbers' }], 'otherroles': [{'name': 'Accountant' },{'name': 'Administrator' }], 'sodviolations': [{'name': 'Administrator Assignment Requires Approval'},{'name': 'Setup Permissions Needs Approval'},{'name': 'Accounts Payable Approver'},{'name': 'Admin Permissions Rule'}], 'status': 'Completed', 'reviewer': 'Enriqueta Marquez'},
									'6': { 'user': {'id': '6', 'name': 'Jade Jumao-as'}, 'permission': [{'name': 'Purchase Order'},{'name': 'Setup Billing Information' },{'name': 'Field References' }], 'otherroles': [{'name': 'A/R Reports' },{'name': 'Accountant' }], 'sodviolations': [{'name': 'A/R Reports'},{'name': 'A/R Register'},{'name': 'Customer & OTC Transactions'},{'name': 'Item Record'},{'name': 'Invoice & Journal Entry'},{'name': 'Bill and FAM Transactions'}], 'status': 'Completed', 'reviewer': 'Nic Cano'},
								}
							}
						},
						"2": {
							"reviewName": "Q2 2021_Permission_Customer Center",
							"type": "Permission",
							"frequency": "Quarterly",
							"status": "Completed",
							"lastReviewdOn": "03/09/2021",
							"reviews": {
								"1": [
									{
										'permission': {'value': 'TRAN_INVADJST', 'text': 'Adjust Inventory' },
										'category': 'Transactions',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'TRAN_PAYMENTAUDIT', 'text': 'Access Payment Audit Log' },
										'category': 'Transactions',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'ADMI_ACCOUNTINGLIST', 'text': 'Accounting Lists' },
										'category': 'Setup',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'LIST_ACCOUNT', 'text': 'Accounts' },
										'category': 'Lists',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'LIST_AMORTIZATION', 'text': 'Amortization Schedules' },
										'category': 'Lists',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'TRAN_PURCHORDBILL', 'text': 'Bill Purchase Orders' },
										'category': 'Transactions',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'REPO_ACCOUNTDETAIL', 'text': 'Account Detail' },
										'category': 'Reports',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'ADMI_ACCOUNTING', 'text': 'Accounting Management' },
										'category': 'Setup',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'GRAP_AP', 'text': 'Accounts Payable Graphing' },
										'category': 'Reports',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'REPO_BALANCESHEET', 'text': 'Balance Sheet' },
										'category': 'Reports',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'LIST_BILLOFDISTRIBUTION', 'text': 'Bill Of Distribution' },
										'category': 'Lists',
										'level': 'View',
										'status': 'Completed'
									},
									{
										'permission': {'value': 'ADMI_DELETEDRECORD', 'text': 'Deleted Records' },
										'category': 'Setup',
										'level': 'View',
										'status': 'Completed'
									},
								]
							}
						}
					}
			},
			"7": {
				"reviewName": "FY 2020",
				"roleName": "Accountant",
				"reviewType": "Role Membership",
				"status": "Completed",
				"createdBy": "Joanna K. Paclibar",
				"createdOn": "12/16/2020",
				"finishedOn": "12/23/2020",
				"reviewsGroup":
					{
						"1": {
							"reviewName": "FY 2020_Membership_Accountant",
							"type": "Membership",
							"frequency": "Annual",
							"status": "Completed",
							"lastReviewdOn": "09/07/2020",
							"reviews":{
								"1": {
									'1': { 'user': {'id': '1', 'name': 'Beverly Ucab'}, 'permission': [{'name': 'Adjust Inventory'},{'name': 'Company Bank Details' },{'name': 'Billing Data' }], 'otherroles': [{'name': 'Accountant'},{'name': 'Administrator' },{'name': 'Bill Creator' }], 'sodviolations': [{'name': 'Admin Permissions Rule'},{'name': 'Amortization Schedule Entries Rule'},{'name': 'Administrator Assignment Requires Approval'},{'name': 'Bank Reconciliations Rule'},{'name': 'Invoice & Journal Entry'}], 'status': 'Completed', 'reviewer': 'John Albura'},
									'2': { 'user': {'id': '2', 'name': 'Joanna Paclibar'}, 'permission': [{'name': 'Bills'},{'name': 'FAM - Expense/Income'},{'name': 'Lists Address' },{'name': 'Payment Aggregation' }], 'otherroles': [{'name': 'Employee Center'},{'name': 'SoD Manager' },{'name': 'User Access Owner' }], 'sodviolations': [{'name': 'Accounts Payable Approver'},{'name': 'Admin Permissions Rule'},{'name': 'Purchase Requisition Rule'}], 'status': 'Completed', 'reviewer': 'Maria Acain'},
									'3': { 'user': {'id': '3', 'name': 'Sherwen Dizon'}, 'permission': [{'name': 'Invoice'},{'name': 'Pending Role Evaluations' }], 'otherroles': [{'name': 'SDF Developer' },{'name': 'Strongpoint Developer Role' }], 'sodviolations': [{'name': 'ACH Processing'},{'name': 'A/R Register'},{'name': 'Customer & OTC Transactions'},{'name': 'Invoice & Journal Entry'}], 'status': 'Completed', 'reviewer': 'Marichu de Leon'},
									'4': { 'user': {'id': '4', 'name': 'Trixie Sante'}, 'permission': [{'name': 'Charge'},{'name': 'Reports Budget' },{'name': 'Pending Role Evaluations' }], 'otherroles': [{'name': 'Marketing Manager'},{'name': 'A/P Clerk' },{'name': 'User Access Owner' }], 'sodviolations': [{'name': 'Admin Permissions Rule'},{'name': 'Cash Managements Rule'}], 'status': 'Completed', 'reviewer': 'Nic Cano'},
									'5': { 'user': {'id': '5', 'name': 'Carlos Banawan'}, 'permission': [{'name': 'Credit Memo'},{'name': 'Lists Termination Reasons' },{'name': 'Mapping Setup'}, {'name': 'Reports Expenses' },{'name': 'Serial Numbers' }], 'otherroles': [{'name': 'Accountant' },{'name': 'Administrator' }], 'sodviolations': [{'name': 'Administrator Assignment Requires Approval'},{'name': 'Setup Permissions Needs Approval'},{'name': 'Accounts Payable Approver'},{'name': 'Admin Permissions Rule'}], 'status': 'Completed', 'reviewer': 'Enriqueta Marquez'},
									'6': { 'user': {'id': '6', 'name': 'Jade Jumao-as'}, 'permission': [{'name': 'Purchase Order'},{'name': 'Setup Billing Information' },{'name': 'Field References' }], 'otherroles': [{'name': 'A/R Reports' },{'name': 'Accountant' }], 'sodviolations': [{'name': 'A/R Reports'},{'name': 'A/R Register'},{'name': 'Customer & OTC Transactions'},{'name': 'Item Record'},{'name': 'Invoice & Journal Entry'},{'name': 'Bill and FAM Transactions'}], 'status': 'Completed', 'reviewer': 'Nic Cano'},
								}
							}
						}
					}
			},
			"8": {
				"reviewName": "FY 2020",
				"roleName": "A/P Clerk",
				"reviewType": "Role Membership",
				"status": "Completed",
				"createdBy": "Joanna K. Paclibar",
				"createdOn": "12/16/2020",
				"finishedOn": "12/23/2020",
				"reviewsGroup":
					{
						"1": {
							"reviewName": "FY 2020_Membership_A/P Clerk",
							"type": "Membership",
							"frequency": "Annual",
							"status": "Completed",
							"lastReviewdOn": "09/07/2020",
							"reviews":{
								"1": {
									'1': { 'user': {'id': '1', 'name': 'Beverly Ucab'}, 'permission': [{'name': 'Adjust Inventory'},{'name': 'Company Bank Details' },{'name': 'Billing Data' }], 'otherroles': [{'name': 'Accountant'},{'name': 'Administrator' },{'name': 'Bill Creator' }], 'sodviolations': [{'name': 'Admin Permissions Rule'},{'name': 'Amortization Schedule Entries Rule'},{'name': 'Administrator Assignment Requires Approval'},{'name': 'Bank Reconciliations Rule'},{'name': 'Invoice & Journal Entry'}], 'status': 'Completed', 'reviewer': 'John Albura'},
									'2': { 'user': {'id': '2', 'name': 'Joanna Paclibar'}, 'permission': [{'name': 'Bills'},{'name': 'FAM - Expense/Income'},{'name': 'Lists Address' },{'name': 'Payment Aggregation' }], 'otherroles': [{'name': 'Employee Center'},{'name': 'SoD Manager' },{'name': 'User Access Owner' }], 'sodviolations': [{'name': 'Accounts Payable Approver'},{'name': 'Admin Permissions Rule'},{'name': 'Purchase Requisition Rule'}], 'status': 'Completed', 'reviewer': 'Maria Acain'},
									'3': { 'user': {'id': '3', 'name': 'Sherwen Dizon'}, 'permission': [{'name': 'Invoice'},{'name': 'Pending Role Evaluations' }], 'otherroles': [{'name': 'SDF Developer' },{'name': 'Strongpoint Developer Role' }], 'sodviolations': [{'name': 'ACH Processing'},{'name': 'A/R Register'},{'name': 'Customer & OTC Transactions'},{'name': 'Invoice & Journal Entry'}], 'status': 'Completed', 'reviewer': 'Marichu de Leon'},
									'4': { 'user': {'id': '4', 'name': 'Trixie Sante'}, 'permission': [{'name': 'Charge'},{'name': 'Reports Budget' },{'name': 'Pending Role Evaluations' }], 'otherroles': [{'name': 'Marketing Manager'},{'name': 'A/P Clerk' },{'name': 'User Access Owner' }], 'sodviolations': [{'name': 'Admin Permissions Rule'},{'name': 'Cash Managements Rule'}], 'status': 'Completed', 'reviewer': 'Nic Cano'},
									'5': { 'user': {'id': '5', 'name': 'Carlos Banawan'}, 'permission': [{'name': 'Credit Memo'},{'name': 'Lists Termination Reasons' },{'name': 'Mapping Setup'}, {'name': 'Reports Expenses' },{'name': 'Serial Numbers' }], 'otherroles': [{'name': 'Accountant' },{'name': 'Administrator' }], 'sodviolations': [{'name': 'Administrator Assignment Requires Approval'},{'name': 'Setup Permissions Needs Approval'},{'name': 'Accounts Payable Approver'},{'name': 'Admin Permissions Rule'}], 'status': 'Completed', 'reviewer': 'Enriqueta Marquez'},
									'6': { 'user': {'id': '6', 'name': 'Jade Jumao-as'}, 'permission': [{'name': 'Purchase Order'},{'name': 'Setup Billing Information' },{'name': 'Field References' }], 'otherroles': [{'name': 'A/R Reports' },{'name': 'Accountant' }], 'sodviolations': [{'name': 'A/R Reports'},{'name': 'A/R Register'},{'name': 'Customer & OTC Transactions'},{'name': 'Item Record'},{'name': 'Invoice & Journal Entry'},{'name': 'Bill and FAM Transactions'}], 'status': 'Completed', 'reviewer': 'Nic Cano'},
								}
							}
						}
					}
			},
			"9": {
				"reviewName": "FY 2020",
				"roleName": "A/R Clerk",
				"reviewType": "Role Membership",
				"status": "Completed",
				"createdBy": "Joanna K. Paclibar",
				"createdOn": "12/16/2020",
				"finishedOn": "12/23/2020",
				"reviewsGroup":
					{
						"1": {
							"reviewName": "FY 2020_Membership_A/R Clerk",
							"type": "Membership",
							"frequency": "Annual",
							"status": "Completed",
							"lastReviewdOn": "09/07/2020",
							"reviews":{
								"1": {
									'1': { 'user': {'id': '1', 'name': 'Beverly Ucab'}, 'permission': [{'name': 'Adjust Inventory'},{'name': 'Company Bank Details' },{'name': 'Billing Data' }], 'otherroles': [{'name': 'Accountant'},{'name': 'Administrator' },{'name': 'Bill Creator' }], 'sodviolations': [{'name': 'Admin Permissions Rule'},{'name': 'Amortization Schedule Entries Rule'},{'name': 'Administrator Assignment Requires Approval'},{'name': 'Bank Reconciliations Rule'},{'name': 'Invoice & Journal Entry'}], 'status': 'Completed', 'reviewer': 'John Albura'},
									'2': { 'user': {'id': '2', 'name': 'Joanna Paclibar'}, 'permission': [{'name': 'Bills'},{'name': 'FAM - Expense/Income'},{'name': 'Lists Address' },{'name': 'Payment Aggregation' }], 'otherroles': [{'name': 'Employee Center'},{'name': 'SoD Manager' },{'name': 'User Access Owner' }], 'sodviolations': [{'name': 'Accounts Payable Approver'},{'name': 'Admin Permissions Rule'},{'name': 'Purchase Requisition Rule'}], 'status': 'Completed', 'reviewer': 'Maria Acain'},
									'3': { 'user': {'id': '3', 'name': 'Sherwen Dizon'}, 'permission': [{'name': 'Invoice'},{'name': 'Pending Role Evaluations' }], 'otherroles': [{'name': 'SDF Developer' },{'name': 'Strongpoint Developer Role' }], 'sodviolations': [{'name': 'ACH Processing'},{'name': 'A/R Register'},{'name': 'Customer & OTC Transactions'},{'name': 'Invoice & Journal Entry'}], 'status': 'Completed', 'reviewer': 'Marichu de Leon'},
									'4': { 'user': {'id': '4', 'name': 'Trixie Sante'}, 'permission': [{'name': 'Charge'},{'name': 'Reports Budget' },{'name': 'Pending Role Evaluations' }], 'otherroles': [{'name': 'Marketing Manager'},{'name': 'A/P Clerk' },{'name': 'User Access Owner' }], 'sodviolations': [{'name': 'Admin Permissions Rule'},{'name': 'Cash Managements Rule'}], 'status': 'Completed', 'reviewer': 'Nic Cano'},
									'5': { 'user': {'id': '5', 'name': 'Carlos Banawan'}, 'permission': [{'name': 'Credit Memo'},{'name': 'Lists Termination Reasons' },{'name': 'Mapping Setup'}, {'name': 'Reports Expenses' },{'name': 'Serial Numbers' }], 'otherroles': [{'name': 'Accountant' },{'name': 'Administrator' }], 'sodviolations': [{'name': 'Administrator Assignment Requires Approval'},{'name': 'Setup Permissions Needs Approval'},{'name': 'Accounts Payable Approver'},{'name': 'Admin Permissions Rule'}], 'status': 'Completed', 'reviewer': 'Enriqueta Marquez'},
									'6': { 'user': {'id': '6', 'name': 'Jade Jumao-as'}, 'permission': [{'name': 'Purchase Order'},{'name': 'Setup Billing Information' },{'name': 'Field References' }], 'otherroles': [{'name': 'A/R Reports' },{'name': 'Accountant' }], 'sodviolations': [{'name': 'A/R Reports'},{'name': 'A/R Register'},{'name': 'Customer & OTC Transactions'},{'name': 'Item Record'},{'name': 'Invoice & Journal Entry'},{'name': 'Bill and FAM Transactions'}], 'status': 'Completed', 'reviewer': 'Nic Cano'},
								}
							}
						}
					}
			}									

		};
		return yield options;
	},	
	
	createReview: function* (type, name, role, frequency) {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4250&deploy=1&compid=TSTDRV1267181&h=e4487b84a6b3a1c57296&type=' +type +"&name=" +name +"&role=" +role +"&frequency=" +frequency;
		const options = {
			method: 'GET',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},
	
	updateReviewStatus: function* (reviewid, groupid, status) {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4257&deploy=1&compid=TSTDRV1267181&h=9ddaa24270b96f9526f9&reviewid=' +reviewid +"&groupid=" +groupid +"&status=" +escape(status);
		const options = {
			method: 'GET',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},

	getAllReviewNotesByType: function* (reviewType) {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4312&deploy=1&compid=TSTDRV1267181&h=cac669c15a76a48be28f&reviewType=' +reviewType;
		const options = {
			method: 'GET',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},

	getAllPermissions: function* () {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4313&deploy=1&compid=TSTDRV1267181&h=ecd193ff80e9c842d968';
		const options = {
			method: 'GET',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},

	updateChangeRequestStatus: function* (name, roleid) {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4308&deploy=1&compid=TSTDRV1267181&h=8d262f79f0349b653941&name=' +escape(name) +"&roleid=" +roleid;
		const options = {
			method: 'GET',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},

	getPermissionMembershipReviewChangeRequestStatus: function* (crName) {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4323&deploy=1&compid=TSTDRV1267181&h=8820caf78cb355237c46&crName=' +escape(crName);
		const options = {
			method: 'GET',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},	
	// End Review Module

    getRolesAndEmployeesAssociated: function* () {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4244&deploy=1&compid=TSTDRV1267181&h=7693e600f31edb7c4dfd';
		const options = {
			method: 'GET',
			uri: uri,
			json: true // Automatically parses the JSON string in the response
		};
		return yield rp(options);
	},

    getRolesAndPermissionsAssociated: function* () {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4245&deploy=1&compid=TSTDRV1267181&h=dec64db271591f4997a7';
		const options = {
			method: 'GET',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},

    getAllResourceAccessReviewRecords: function* () {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4252&deploy=1&compid=TSTDRV1267181&h=5230217b787bc5188c85';
		const options = {
			method: 'GET',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},

    getAllActiveEmployees: function* () {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4286&deploy=1&compid=TSTDRV1267181&h=83793623c7ac88e9327b';
		const options = {
			method: 'GET',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},

    getAllAccessRequests: function* () {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4255&deploy=1&compid=TSTDRV1267181&h=8d3245c5b6244c306624';
		const options = {
			method: 'GET',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},
    
	createAccessRequest: function* (name, role, owner, assignee) {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4256&deploy=1&compid=TSTDRV1267181&h=d168292a7ec68f2aac46&name=' +name +"&role=" +role +"&owner=" +owner +"&assignee=" +assignee;
		const options = {
			method: 'POST',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},
    
	createResource: function* (role, owner, access) {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4251&deploy=1&compid=TSTDRV1267181&h=5027a3fcb1f8d0042f99&role=' +role +"&owner=" +owner +"&access=" +access;
		const options = {
			method: 'POST',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},
    
	updateAccessRequestStatus: function* (type, id, status) {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4257&deploy=1&compid=TSTDRV1267181&h=9ddaa24270b96f9526f9&type=' +type +"&id=" +id +"&status=" +status;
		const options = {
			method: 'POST',
			uri: uri,
			json: true
		};
		return yield rp(options);
	},
    
	inactivateReviewOrAccessRequest: function* (type, id) {
        const uri = 'https://tstdrv1267181.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4301&deploy=1&compid=TSTDRV1267181&h=3811c58b3e892e964225&type=' +type +"&id=" +id;
		const options = {
			method: 'POST',
			uri: uri,
			json: true
		};
		return yield rp(options);
	}      
};