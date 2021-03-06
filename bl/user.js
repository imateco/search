'use strict';

let bl = {
	"model": null,
	"localConfig": null,
	
	"handleError": (soajs, errCode, err) => {
		if (err) {
			soajs.log.error(err.message);
		}
		return ({
			"code": errCode,
			"msg": bl.localConfig.errors[errCode] + ((err && errCode === 602) ? err.message : "")
		});
	},
	
	"mt": {
		"getModel": (soajs, options) => {
			let mongoCore = null;
			if (options && options.mongoCore) {
				mongoCore = options.mongoCore;
			}
			return new bl.model(soajs, bl.localConfig, mongoCore);
		},
		"closeModel": (modelObj) => {
			modelObj.closeConnection();
		}
	},
	
	"search": (soajs, inputmaskData, options, cb) => {
		if (!inputmaskData) {
			return cb(bl.handleError(soajs, 400, null));
		}
		let modelObj = bl.mt.getModel(soajs, options);

		modelObj.search(inputmaskData, (err, result) => {
			bl.mt.closeModel(modelObj);
			if (err) {
				return cb(bl.handleError(soajs, 602, err));
			}
			return cb(null, result);
		});
	},
	"count": (soajs, inputmaskData, options, cb) => {
		if (!inputmaskData) {
			return cb(bl.handleError(soajs, 400, null));
		}
		let modelObj = bl.mt.getModel(soajs, options);

		modelObj.count(inputmaskData, (err, result) => {
			bl.mt.closeModel(modelObj);
			if (err) {
				return cb(bl.handleError(soajs, 602, err));
			}
			return cb(null, result);
		});
	}
};

module.exports = bl;
