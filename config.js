'use strict';

module.exports = {
	type: 'service',
	prerequisites: {
		cpu: '',
		memory: ''
	},
	"serviceVersion": 1,
	"serviceName": "search",
	"serviceGroup": "IMATECO",
	"servicePort": 4150,
	"requestTimeout": 30,
	"requestTimeoutRenewal": 5,
	"oauth": true,
	"extKeyRequired": true,
	
	"maintenance": {
		"readiness": "/heartbeat",
		"port": {"type": "maintenance"},
		"commands": [
			{"label": "Reload Registry", "path": "/reloadRegistry", "icon": "fas fa-undo"},
			{"label": "Resource Info", "path": "/resourceInfo", "icon": "fas fa-info"}
		]
	},
	
	//-------------------------------------
	"errors": {
		400: "Business logic required data are missing",
		
		500: "Nothing to Update!",
		501: "Item not found!",
		502: "Item is locked!",
		
		600: "Model configuration not found",
		601: "Model not found",
		602: "Model error: "
		
	},
	
	"schema": {
		
		"post": {
			'/search': {
				"_apiInfo": {
					"l": "This API allows you to search the URAC users",
					"group": "Search"
				},
				"name": {
					"source": ['body.name'],
					"required": true,
					"validation": {
						"type": "string"
					}
				}
				
			}
		}
	}
};