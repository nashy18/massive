module.exports = function (appExtensions, database) {
	console.log("---------------------------");
	console.log("Inside Account API ");
	console.log("---------------------------");
    
    var accountController = require('../controller/accountController')(appExtensions);
	var accountFacade = require('../facade/accountFacade')(appExtensions);
	var accountDao = require('../data/accountDao')(database);

	//Authentication api
	appExtensions.app.post("/api/account/authentication", [accountController.authenticate, accountFacade.authenticateRequest, accountDao.authenticate, accountFacade.authenticateResponse]);
}