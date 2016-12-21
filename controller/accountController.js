module.exports = function (appExtensions) {
	console.log("---------------------------");
	console.log("Inside Account Controller ");
	console.log("---------------------------");
	var accountController = {};

    //Function to handle and modify request body parameters
    accountController.authenticate = function (req, res, next) {
	    console.log('Inside accountController.authenticate()');
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

	return accountController;
}