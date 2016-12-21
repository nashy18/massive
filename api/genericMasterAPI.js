module.exports = function (appExtensions, database) {
	console.log("---------------------------");
	console.log("Inside Generic Master API ");
    console.log("---------------------------");
    
    var genericMasterController = require('../controller/genericMasterController')(appExtensions);
	var genericMasterFacade = require('../facade/genericMasterFacade')(appExtensions);
    var genericMasterDao = require('../data/genericMasterDao')(database);

	//Routing Starts
	//https://expressjs.com/en/guide/routing.html

	//Generic APIs - Starts

	//Generic API to do GetAll operation of any table -- GET ALL
	appExtensions.app.get("/api/:table", [genericMasterController.getAll , genericMasterFacade.getAllRequest, genericMasterDao.getAll, genericMasterFacade.getAllResponse]);

	//generic api to do getbyid operation of any table -- GET BY ID
	appExtensions.app.get("/api/:table/:id", [genericMasterController.getById , genericMasterFacade.getByIdRequest, genericMasterDao.getById, genericMasterFacade.getByIdResponse]);

	 //generic api to do save operation of any table -- SAVE
	appExtensions.app.post("/api/:table", [genericMasterController.save, genericMasterFacade.saveRequest, genericMasterDao.save, genericMasterFacade.saveResponse]);

	 //generic api to do update operation of any table -- UPDATE
	appExtensions.app.put("/api/:table/:id", [genericMasterController.update, genericMasterFacade.updateRequest, genericMasterDao.update, genericMasterFacade.updateResponse]);

	//generic api to do hard delete operation of any table by id -- DELETE
	appExtensions.app.delete("/api/:table/:id", [genericMasterController.delete, genericMasterFacade.deleteRequest, genericMasterDao.delete, genericMasterFacade.deleteResponse]);

	//generic api to do search by attributes operation of any table -- SEARCH
	appExtensions.app.post("/api/search/:table", [genericMasterController.searchByAttribute, genericMasterFacade.searchByAttributeRequest, genericMasterDao.search, genericMasterFacade.searchByAttributeResponse]);
	 
	//generic api to do server side pagination search by attributes operation of any table -- PAGINATION
	appExtensions.app.post("/api/paged/:table", [genericMasterController.pagination, genericMasterFacade.paginationRequest, genericMasterDao.pagination, genericMasterFacade.paginationResponse]);
	 
	//Generic APIs - Ends
}