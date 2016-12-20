module.exports = function (db) {
	console.log("---------------------------");
	console.log("Inside Account DAO ");
	console.log("---------------------------");

	var accountDao = {};

    //authenticate 
	accountDao.authenticate = function (req, res, next) {
	    //request can be an array or object
	    db.account.find(req.authenticateRequest, function (err, result) {
	        if (err) {
	            res.Success = false;
	            console.log("Error in accountDao.authenticate()" + err);
	        }
	        else {
	            res.response = result;
	            res.Success = true;
	        }
	        next();
	    });
	}    
   
	return accountDao;
}