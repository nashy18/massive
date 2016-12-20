module.exports = function (db) {
	console.log("---------------------------");
	console.log("Inside Generic Master DAO ");
	console.log("---------------------------");

	var genericMasterDao = {};

    //Save 
	genericMasterDao.save = function (req, res, next) {
	    //request can be an array or object
	    //no PK does an INSERT
	    db[req.params.table].insert(req.saveRequest, function (err, result) {
	        if (err) {
	            res.Success = false;
	            res.Error = err;
	            console.log("Error in genericMasterDao.save()" + err);
	        }
	        else {
	            res.response = result;
	            res.Success = true;
	        }
	        console.log("Result" + JSON.stringify(result));
	        next();
	    });
	}

    //Update 
	genericMasterDao.update = function (req, res, next) {
	    //request can be an array or object, Id should be there as PK
	    //include the PK in the criteria for an update
	    db[req.params.table].save(req.updateRequest, function (err, result) {
	        //result with new id returned
	        if (err) {
	            res.Success = false;
	            res.Error = err;
	            console.log("Error in genericMasterDao.update()" + err);
	        }
	        else {
	            res.response = result;
	            res.Success = true;
	        }
	        console.log("Result" + JSON.stringify(result));
	        next();
	    });
	}

    //Get By Id
	genericMasterDao.getById = function (req, res, next) {
	    db[req.params.table].find(parseInt(req.params.id), function (err, result) {
	        if (err) {
	            res.Success = false;
	            res.Error = err;
	            console.log("Error in genericMasterDao.getById()" + err);
	        }
	        else {
	            res.response = result;
	            res.Success = true;
	        }
	        console.log("Result" + JSON.stringify(result));
	        next();
	    });
	}

    //Get All
	genericMasterDao.getAll = function (req, res, next) {
	    db[req.params.table].find({}, function (err, result) {
	        if (err) {
	            res.Success = false;
	            res.Error = err;
	            console.log("Error in genericMasterDao.getAll()" + err);
	        }
	        else {
	            res.response = result;
	            res.Success = true;
	        }
	        console.log("Result" + JSON.stringify(result));
	        next();
	    });
	}

    //Search By Attributes
	genericMasterDao.search = function (req, res, next) {
	    db[req.params.table].find(req.searchRequest, function (err, result) {
	        if (err) {
	            res.Success = false;
	            res.Error = err;
	            console.log("Error in genericMasterDao.search()" + err);
	        }
	        else {
	            res.response = result;
	            res.Success = true;
	        }
	        console.log("Result" + JSON.stringify(result));
	        next();
	    });
	}

    //Delete Record
	genericMasterDao.delete = function (req, res, next) {
	    db[req.params.table].destroy({ id: req.params.id }, function (err, result) {
	        if (err) {
	            res.Success = false;
	            console.log("Error in genericMasterDao.remove()" + err);
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

    //Server Side Pagination Search By Attributes
	genericMasterDao.pagination = function (req, res, next) {
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
	            console.log("Error in genericMasterDao.pagination()" + err);
	        }
	        else {	            
	            res.response = result;
	            res.Success = true;
	        }
	        console.log("Result" + JSON.stringify(result));
	        next();
	    });
	}
   
	return genericMasterDao;
}