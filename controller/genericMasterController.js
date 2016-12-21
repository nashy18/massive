module.exports = function (appExtensions) {
	console.log("---------------------------");
	console.log("Inside Generic Master Controller ");
	console.log("---------------------------");

	var genericMasterController = {};

    //Function to do updateRequest operation
    genericMasterController.save = function (req, res, next) {
	    console.log('Inside genericMasterController.saveRequest()');
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

    //Function to do updateRequest operation
    genericMasterController.update = function (req, res, next) {
	    console.log('Inside genericMasterController.updateRequest()');
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

    //Function to do getAllRequest operation
    genericMasterController.getAll = function (req, res, next) {
	    console.log('Inside genericMasterController.getAllRequest()');
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
    genericMasterController.getById = function (req, res, next) {
	    console.log('Inside genericMasterController.getByIdRequest()');
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
    genericMasterController.searchByAttribute = function (req, res, next) {
	    console.log('Inside genericMasterController.searchByAttributeRequest()');
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

    //Function to do server side paginationRequest search (by attributes : optional)
    genericMasterController.pagination = function (req, res, next) {
	    console.log('Inside genericMasterController.paginationRequest()');
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

    //Function to do deleteRequest operation
    genericMasterController.delete = function (req, res, next) {
	    console.log('Inside genericMasterController.deleteRequest()');
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

	return genericMasterController;
}