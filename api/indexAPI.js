/* Divide all of your api,facade ,data & other modules in different files and require them here
Note:
1) Single dot means accessing file from its own folder location
2) Double dots means accessing file from parent root location
*/
module.exports = function (appExtensions) {
	console.log("---------------------------");
	console.log("Inside Index API ");
	console.log("---------------------------");
    
    //https://github.com/robconery/massive-js
    //https://massive-js.readthedocs.io/en/latest/crud/
	var massive = require("massive");

    //Initiallising Database Connection
	var db = massive.connectSync({ connectionString: appExtensions.appConfig.db_ConnString });
	
	//Initiallising api
	var api = {};

	api.genericMasterAPI = require('./genericMasterAPI')(appExtensions, db);
	api.accountAPI = require('./accountAPI')(appExtensions, db);

	return api;
};