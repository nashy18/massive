module.exports = function (appExtensions) {
	console.log("---------------------------");
	console.log("Inside Generic Master Facade ");
	console.log("---------------------------");

	var genericMasterFacade = {};

    //Code to handle and modify request body parameters - Starts

    //Function to do updateRequest operation
	genericMasterFacade.saveRequest = function (req, res, next) {
	    console.log('Inside genericMasterFacade.saveRequest()');
	    var response = {};
	    try {
	        //UserId Property should be there inside request.body object
	        req.saveRequest = appExtensions.utility.attachCommonFields(req.body, req.method);
	        next();
	    }
	    catch (e) {
	        response.Success = false;
	        response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
	        res.send(response);
	    }
	}

    //Function to do updateRequest operation
	genericMasterFacade.updateRequest = function (req, res, next) {
	    console.log('Inside genericMasterFacade.updateRequest()');
	    var response = {};
	    try {
	        req.body.id = req.params.id;
	        //UserId Property should be there inside request.body object
	        req.updateRequest = appExtensions.utility.attachCommonFields(req.body, req.method);
	        next();
	    }
	    catch (e) {
	        response.Success = false;
	        response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
	        res.send(response);
	    }
	}

    //Function to do getAllRequest operation
	genericMasterFacade.getAllRequest = function (req, res, next) {
	    console.log('Inside genericMasterFacade.getAllRequest()');
	    var response = {};
	    try {
	        next();
	    }
	    catch (e) {
	        response.Success = false;
	        response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
	        res.send(response);
	    }
	}

    //Function to do getByIdRequest operation
	genericMasterFacade.getByIdRequest = function (req, res, next) {
	    console.log('Inside genericMasterFacade.getByIdRequest()');
	    var response = {};
	    try {
	        next();
	    }
	    catch (e) {
	        response.Success = false;
	        response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
	        res.send(response);
	    }
	}

    //Function to do searchByAttributeRequest operation
	genericMasterFacade.searchByAttributeRequest = function (req, res, next) {
	    console.log('Inside genericMasterFacade.searchByAttributeRequest()');
	    var response = {};
	    try {
	        req.searchRequest = req.body;
	        next();
	    }
	    catch (e) {
	        response.Success = false;
	        response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
	        res.send(response);
	    }
	}

    //Function to do server side paginationRequest search (by attributes : optional)
	genericMasterFacade.paginationRequest = function (req, res, next) {
	    console.log('Inside genericMasterFacade.paginationRequest()');
	    var response = {};
	    try {
	        req.paginationRquest = req.body;
	        req.paginationRquest.limit = req.query.limit;
	        req.paginationRquest.offset = ((parseInt(req.query.page) - 1) * parseInt(req.query.limit)).toString();
	        next();
	    }
	    catch (e) {
	        response.Success = false;
	        response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
	        res.send(response);
	    }
	}

    //Function to do deleteRequest operation
	genericMasterFacade.deleteRequest = function (req, res, next) {
	    console.log('Inside genericMasterFacade.deleteRequest()');
	    var response = {};
	    try {
	        next();
	    }
	    catch (e) {
	        response.Success = false;
	        response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
	        res.send(response);
	    }
	}

    //Code to handle and modify request body parameters - Ends

    //Code for handling Response object parameters -Starts


    //Function to do saveResponse Operation
	genericMasterFacade.saveResponse = function (req, res, next) {
	    console.log('Inside genericMasterFacade.saveResponse()');
	    var response = {};
	    try {
	        if (res.Success) {
	            response.Records = res.response;
	            response.Success = true;
	            response.Message = appExtensions.appConfig.recordReterived_Success_Message;
	        }
	        else {
	            response.Success = false;
	            response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
	            response.Error = res.Error;
	        }
	        res.send(response);
	    }
	    catch (e) {
	        response.Success = false;
	        response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
	        res.send(response);
	    }
	}

    //Function to do updateResponse operation
	genericMasterFacade.updateResponse = function (req, res, next) {
	    console.log('Inside genericMasterFacade.updateResponse()');
	    var response = {};
	    try {
	        if (res.Success) {
	            response.Records = res.response;
	            response.Success = true;
	            response.Message = appExtensions.appConfig.recordReterived_Success_Message;
            }
            else {
                response.Success = false;
                response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
                response.Error = res.Error;
	        }
	        res.send(response);
	    }
	    catch (e) {
	        response.Success = false;
	        response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
	        res.send(response);
	    }
	}

    //Function to do getAllResponse operation
	genericMasterFacade.getAllResponse = function (req, res, next) {
	    console.log('Inside genericMasterFacade.getAllResponse()');
	    var response = {};
	    try {
	        if (res.Success) {
	            if (req.path.match('user') && response.Records.length) {
	                for (var i = 0; i < response.Records.length; i++) {
	                    //removing Passoword Property from each object of records array
	                    delete response.Records[i].Password;
	                }
	            }
	            response.Records = res.response;
	            response.Success = true;
	            response.Message = appExtensions.appConfig.recordReterived_Success_Message;
            }
            else {
                response.Success = false;
                response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
                response.Error = res.Error;
	        }
	        res.send(response);
	    }
	    catch (e) {
	        response.Success = false;
	        response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
	        res.send(response);
	    }
	}

    //Function to do getByIdResponse operation
	genericMasterFacade.getByIdResponse = function (req, res, next) {
	    console.log('Inside genericMasterFacade.getByIdResponse()');
	    var response = {};
	    try {
	        if (res.Success) {
	            response.Records = res.response;
	            if (req.path.match('account') && response.Records) {
	                delete response.Records.password;
	            }
	            response.Success = true;
	            response.Message = appExtensions.appConfig.recordReterived_Success_Message;
            }
            else {
                response.Success = false;
                response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
                response.Error = res.Error;
	        }
	        res.send(response);
	    }
	    catch (e) {
	        response.Success = false;
	        response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
	        res.send(response);
	    }
	}

    //Function to do searchByAttributeResponse operation
	genericMasterFacade.searchByAttributeResponse = function (req, res, next) {
	    console.log('Inside genericMasterFacade.searchByAttributeResponse()');
	    var response = {};
	    try {
	        if (res.Success) {
	            if (req.path.match('user') && response.Records.length) {
	                for (var i = 0; i < response.Records.length; i++) {
	                    //removing Passoword Property from each object of records array
	                    delete response.Records[i].Password;
	                }
	            }
	            response.Records = res.response;
	            response.Success = true;
	            response.Message = appExtensions.appConfig.recordReterived_Success_Message;
            }
            else {
                response.Success = false;
                response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
                response.Error = res.Error;
	        }
	        res.send(response);
	    }
	    catch (e) {
	        response.Success = false;
	        response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
	        res.send(response);
	    }
	}

    //Function to do server side paginationResponse search (by attributes : optional)
	genericMasterFacade.paginationResponse = function (req, res, next) {
	    console.log('Inside genericMasterFacade.paginationResponse()');
	    var response = {};
	    try {
	        if (res.Success) {
	            response.Records = res.response;
	            if (req.path.match('account') && response.Records.length) {
	                for (var i = 0; i < response.Records.length; i++) {
	                    //removing Passoword Property from each object of records array
	                    delete response.Records[i].Password;
	                }
	            }
	            response.Success = true;
	            response.Message = appExtensions.appConfig.recordReterived_Success_Message;	           
	        }
	        else {
	            response.Success = false;
	            response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
	            response.Error = res.Error;
	        }
	        res.send(response);
	    }
	    catch (e) {
	        response.Success = false;
	        response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
	        res.send(response);
	    }
	}

    //Function to do deleteResponse operation
	genericMasterFacade.deleteResponse = function (req, res, next) {
	    console.log('Inside genericMasterFacade.deleteResponse()');
	    var response = {};
	    try {
	        if (res.Success) {
	            response.Records = res.response;
	            response.Success = true;
	            response.Message = appExtensions.appConfig.recordReterived_Success_Message;
	        }
	        else {
	            response.Success = false;
	            response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
	            response.Error = res.Error;
	        }
	        res.send(response);
	    }
	    catch (e) {
	        response.Success = false;
	        response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
	        res.send(response);
	    }
	}

    //Code for handling Response object parameters -Ends

	
	return genericMasterFacade;
}