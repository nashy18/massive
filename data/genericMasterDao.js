module.exports = function (db) {
	console.log("---------------------------");
	console.log("Inside Generic Master DAO ");
	console.log("---------------------------");

    var genericMasterDao = {};
    var response = {};

    //Save 
	genericMasterDao.save = function (req, res, next) {	    
        try {
            //request can be an array or object
            //no PK does an INSERT
            db[req.params.table].insert(req.saveRequest, function (err, result) {
                if (err) {
                    res.Success = false;
                    res.Error = err;
                    appExtensions.logger.error("Error in genericMasterDao.save(): for api :"+ req.path + " and request body: "+ JSON.stringify(req.saveRequest)+". Error: " + err);
                }
                else {
                    res.response = result;
                    res.Success = true;
                }
                console.log("Result" + JSON.stringify(result));
                next();
            });
        } 
        catch (e) {
            response.Success = false;
            response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
            res.send(response);
        };
            
	}

    //Update 
	genericMasterDao.update = function (req, res, next) {	    
        try {
            //request can be an array or object, Id should be there as PK
            //include the PK in the criteria for an update
            db[req.params.table].save(req.updateRequest, function (err, result) {
                //result with new id returned
                if (err) {
                    res.Success = false;
                    res.Error = err;
                    appExtensions.logger.error("Error in genericMasterDao.update(): for api :" + req.path + " and request body: " + JSON.stringify(req.saveRequest) +". Error: " + err);
                }
                else {
                    res.response = result;
                    res.Success = true;
                }
                console.log("Result" + JSON.stringify(result));
                next();
            });
        } 
        catch (e) {
            response.Success = false;
            response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
            res.send(response);
        };
	}

    //Get By Id
	genericMasterDao.getById = function (req, res, next) {	  
        try {
            db[req.params.table].find(parseInt(req.params.id), function (err, result) {
                if (err) {
                    res.Success = false;
                    res.Error = err;
                    appExtensions.logger.error("Error in genericMasterDao.getById(): for api :" +  req.path + " and request body: " + JSON.stringify(req.saveRequest) +  ". Error: " + err);
                }
                else {
                    res.response = result;
                    res.Success = true;
                }
                console.log("Result" + JSON.stringify(result));
                next();
            });
        } 
        catch (e) {
            response.Success = false;
            response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
            res.send(response);
        };
	}

    //Get All
	genericMasterDao.getAll = function (req, res, next) {	    
        try {
            db[req.params.table].find({}, function (err, result) {
                if (err) {
                    res.Success = false;
                    res.Error = err;
                    appExtensions.logger.error("Error in genericMasterDao.getAll(): for api :" + req.path + " and request body: " + JSON.stringify(req.saveRequest) +". Error: " + err);
                }
                else {
                    res.response = result;
                    res.Success = true;
                }
                console.log("Result" + JSON.stringify(result));
                next();
            });
        } 
        catch (e) {
            response.Success = false;
            response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
            res.send(response);
        };
	}

    //Search By Attributes
	genericMasterDao.search = function (req, res, next) {	   
        try {
            db[req.params.table].find(req.searchRequest, function (err, result) {
                if (err) {
                    res.Success = false;
                    res.Error = err;
                    appExtensions.logger.error("Error in genericMasterDao.search(): for api :" + req.path + " and request body: " + JSON.stringify(req.saveRequest) + ". Error: " + err);
                }
                else {
                    res.response = result;
                    res.Success = true;
                }
                console.log("Result" + JSON.stringify(result));
                next();
            });
        } 
        catch (e) {
            response.Success = false;
            response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
            res.send(response);
        };
	}

    //Delete Record
	genericMasterDao.delete = function (req, res, next) {	  
        try {
            db[req.params.table].destroy({ id: req.params.id }, function (err, result) {
                if (err) {
                    res.Success = false;
                    appExtensions.logger.error("Error in genericMasterDao.delete(): for api :" + req.path + " and request body: " + JSON.stringify(req.saveRequest) + ". Error: " + err);
                    res.Error = err;
                }
                else {
                    res.response = result;
                    res.Success = true;
                }
                console.log("Result" + JSON.stringify(result));
                next();
            });
        } 
        catch (e) {
            response.Success = false;
            response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
            res.send(response);
        };
	}

    //Server Side Pagination Search By Attributes
	genericMasterDao.pagination = function (req, res, next) {	   
        try {
            //Send in an ORDER clause and a LIMIT with OFFSET
            var options = {
                limit: req.paginationRquest.limit,
                order: "id",
                offset: req.paginationRquest.offset
            };
            delete req.paginationRquest.limit;
            delete req.paginationRquest.offset
            db[req.params.table].find(req.paginationRquest, options, function (err, result) {
                if (err) {
                    res.Success = false;
                    res.Error = err;
                    appExtensions.logger.error("Error in genericMasterDao.pagination(): for api :" + req.path + " and request body: " + JSON.stringify(req.saveRequest) + ". Error: " + err);
                }
                else {
                    res.response = result;
                    res.Success = true;
                }
                console.log("Result" + JSON.stringify(result));
                next();
            });
        } 
        catch (e) {
            response.Success = false;
            response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = "Exception: " + e;
            appExtensions.logger.error("Exception: " + e);
            res.send(response);
        };
	}
   
	return genericMasterDao;
}