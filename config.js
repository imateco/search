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
	"oauth": false,
	"extKeyRequired": true,
	"description": "This is the search microservice for imateco.",
	"maintenance": {
		"readiness": "/heartbeat",
		"port": {"type": "maintenance"},
		"commands": [
			{"label": "Reload Registry", "path": "/reloadRegistry", "icon": "fas fa-undo"},
			{"label": "Resource Info", "path": "/resourceInfo", "icon": "fas fa-info"}
		]
	},
	"tags": ["urac", "search"],
	"attributes": {
		"addon": ["search", "profile"]
	},
	"program": ["imateco"],
	"documentation": {
		"readme": "/README.md",
		"release": "/RELEASE.md"
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
					"required": false,
					"validation": {
						"type": "string"
					}
				},
                                "location": {
                                        "source": ['body.location'],
                                        "required": false,
                                        "validation": {
                                                "type": "string"
                                        }
                                },
                                "knowBest": {
                                        "source": ['body.knowBest'],
                                        "required": false,
                                        "validation": {
                                                "type": "string"
                                        }
                                },
                                "yearsExperience": {
                                        "source": ['body.yearsExperience'],
                                        "required": false,
                                        "validation": {
                                                "type": "string"
                                        }
                                },
                                "workedStartup": {
                                        "source": ['body.workedStartup'],
                                        "required": false,
                                        "validation": {
                                                "type": "string"
                                        }
                                },
                                "commitFulltime": {
                                        "source": ['body.commitFulltime'],
                                        "required": false,
                                        "validation": {
                                                "type": "string"
                                        }
                                },
                                "willingRelocate": {
                                        "source": ['body.willingRelocate'],
                                        "required": false,
                                        "validation": {
                                                "type": "string"
                                        }
                                },
                                "equity": {
                                        "source": ['body.equity'],
                                        "required": false,
                                        "validation": {
                                                "type": "string"
                                        }
                                },
                                "whenStart": {
                                        "source": ['body.whenStart'],
                                        "required": false,
                                        "validation": {
                                                "type": "string"
                                        }
                                },
				"start": {
                                        "source": ['body.start'],
                                        "required": true,
                                        "validation": {
                                                "type": "integer"
                                        }
                                },
				"limit": {
                                        "source": ['body.limit'],
                                        "required": true,
                                        "validation": {
                                                "type": "integer"
                                        }
                                }
                        },
                        '/count': {
				"_apiInfo": {
					"l": "This API allows you to count the URAC users",
					"group": "Search"
				},
				"name": {
					"source": ['body.name'],
					"required": false,
					"validation": {
						"type": "string"
					}
				},
                                "location": {
                                        "source": ['body.location'],
                                        "required": false,
                                        "validation": {
                                                "type": "string"
                                        }
                                },
                                "knowBest": {
                                        "source": ['body.knowBest'],
                                        "required": false,
                                        "validation": {
                                                "type": "string"
                                        }
                                },
                                "yearsExperience": {
                                        "source": ['body.yearsExperience'],
                                        "required": false,
                                        "validation": {
                                                "type": "string"
                                        }
                                },
                                "workedStartup": {
                                        "source": ['body.workedStartup'],
                                        "required": false,
                                        "validation": {
                                                "type": "string"
                                        }
                                },
                                "commitFulltime": {
                                        "source": ['body.commitFulltime'],
                                        "required": false,
                                        "validation": {
                                                "type": "string"
                                        }
                                },
                                "willingRelocate": {
                                        "source": ['body.willingRelocate'],
                                        "required": false,
                                        "validation": {
                                                "type": "string"
                                        }
                                },
                                "equity": {
                                        "source": ['body.equity'],
                                        "required": false,
                                        "validation": {
                                                "type": "string"
                                        }
                                },
                                "whenStart": {
                                        "source": ['body.whenStart'],
                                        "required": false,
                                        "validation": {
                                                "type": "string"
                                        }
                                }
			}
		}
	}
};
