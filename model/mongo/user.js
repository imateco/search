"use strict";

const colName = "users";
const core = require("soajs");
const Mongo = core.mongo;

let indexing = {};

function User(soajs, localConfig, mongoCore) {
	let __self = this;
	if (__self.log) {
		__self.log = soajs.log;
	} else {
		__self.log = (log) => {
			console.log(log);
		};
	}
	if (mongoCore) {
		__self.mongoCore = mongoCore;
		__self.mongoCoreExternal = true;
	}
	if (!__self.mongoCore) {
		__self.mongoCoreExternal = false;
		let tCode = soajs.tenant.code;
		if (soajs.tenant.type === "client" && soajs.tenant.main) {
			tCode = soajs.tenant.main.code;
		}
		__self.mongoCore = new Mongo(soajs.meta.tenantDB(soajs.registry.tenantMetaDB, localConfig.serviceName, tCode));
	}
	if (indexing && soajs && soajs.tenant && soajs.tenant.id && !indexing[soajs.tenant.id]) {
		indexing[soajs.tenant.id] = true;
		
		/*
		__self.mongoCore.createIndex(colName, {'tenant.id': 1}, {}, (err, index) => {
			soajs.log.debug("Index: " + index + " created with error: " + err);
		});
		*/
		
		soajs.log.debug("User: Indexes for " + soajs.tenant.id + " Updated!");
	}
}

User.prototype.search = function (data, cb) {
	let __self = this;
	let condition = {};
	let options = {};
	
	__self.mongoCore.find(colName, condition, options, (err, records) => {
		return cb(err, records);
	});
};

User.prototype.validateId = function (id, cb) {
	let __self = this;
	
	if (!id) {
		let error = new Error("User: must provide an id.");
		return cb(error, null);
	}
	
	try {
		id = __self.mongoCore.ObjectId(id);
		return cb(null, id);
	} catch (e) {
		__self.log(e.message);
		return cb(new Error("A valid ID is required"), null);
	}
};

User.prototype.closeConnection = function () {
	let __self = this;
	
	if (!__self.mongoCoreExternal) {
		__self.mongoCore.closeDb();
	}
};

module.exports = User;