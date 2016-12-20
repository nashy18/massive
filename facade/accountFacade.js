module.exports = function (appExtensions, db) {
	console.log("---------------------------");
	console.log("Inside Account Facade ");
	console.log("---------------------------");
	var accountFacade = {};

    //Function to handle and modify request body parameters
	accountFacade.authenticateRequest = function (req, res, next) {
	    console.log('Inside accountFacade.authenticateRequest()');
	    var response = {};
	    try {
	        req.authenticateRequest = {};
	        req.authenticateRequest.password = appExtensions.utility.encrypt(req.body.password);
	        req.authenticateRequest.email = req.body.email;
	        next();
	    }
	    catch (e) {
	        response.Success = false;
	        response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
	        response.ErrorDetails = "Exception: " + e;
	        res.send(response);
	        console.log("Exception: " + e);
	    }
	}

    //Function to handle and modify authenticate response object
	accountFacade.authenticateResponse = function (req, res, next) {
	    console.log('Inside accountFacade.authenticateResponse()');
	    var response = {};
	    try {
	        if (res.Success && res.response.length > 0) {
	            var token = appExtensions.utility.jwt.sign(res.response[0], appExtensions.app.get('superSecret'), {
	                expiresIn: appExtensions.appConfig.jwtTokenExpiryTime //expiresIn 3 Hours
	            });
	            response.Records = res.response[0];
	            delete response.Records.Password;
	            response.AuthToken = token;
	            response.Message = "Authentication Successfull";
	            response.Success = true;	           		
	        }
	        else {
	            response.Message = "Invalid UserName or Password";
	            response.Success = false;
	        }
	        res.send(response);
	    }
	    catch (e) {
	        response.Success = false;
	        response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
	        response.ErrorDetails = "Exception: " + e;
	        res.send(response);
	        console.log("Exception: " + e);
	    }
	}

	return accountFacade;
}