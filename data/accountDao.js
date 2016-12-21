module.exports = function (db) {
	console.log("---------------------------");
	console.log("Inside Account DAO ");
	console.log("---------------------------");

	var accountDao = {};
    var response = {};

    //authenticate 
    accountDao.authenticate = function (req, res, next) {
        try {
            //request can be an array or object
            db.account.find(req.authenticateRequest, function (err, result) {
                if (err) {
                    res.Success = false;
                    appExtensions.logger.error("Error in accountDao.authenticate()" + err);
                }
                else {
                    res.response = result;
                    res.Success = true;
                }
                next();
            });
        } 
        catch (e) {           
            response.Success = false;
            response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            res.send(response);
            appExtensions.logger.error("Exception: " + e);
        };
	}    
   
	return accountDao;
}