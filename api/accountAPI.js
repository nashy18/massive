module.exports = function (appExtensions, database) {
	console.log("---------------------------");
	console.log("Inside Account API ");
	console.log("---------------------------");

	var accountFacade = require('../facade/accountFacade')(appExtensions);
	var accountDao = require('../data/accountDao')(database);

	//Authentication api
	appExtensions.app.post("/api/account/authentication", [accountFacade.authenticateRequest, accountDao.authenticate, accountFacade.authenticateResponse]);
}