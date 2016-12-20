module.exports = function (appExtensions, database) {
	console.log("---------------------------");
	console.log("Inside Generic Master API ");
	console.log("---------------------------");
	var genericMasterFacade = require('../facade/genericMasterFacade')(appExtensions);
	var genericMasterDao = require('../data/genericMasterDao')(database);
	//Routing Starts
	//https://expressjs.com/en/guide/routing.html

	//Generic APIs - Starts

	//Generic API to do GetAll operation of any table -- GET ALL
	appExtensions.app.get("/api/:table", [genericMasterFacade.getAllRequest, genericMasterDao.getAll, genericMasterFacade.getAllResponse]);

	//generic api to do getbyid operation of any table -- GET BY ID
	appExtensions.app.get("/api/:table/:id", [genericMasterFacade.getByIdRequest, genericMasterDao.getById, genericMasterFacade.getByIdResponse]);

	 //generic api to do save operation of any table -- SAVE
	appExtensions.app.post("/api/:table", [genericMasterFacade.saveRequest, genericMasterDao.save, genericMasterFacade.saveResponse]);

	 //generic api to do update operation of any table -- UPDATE
	appExtensions.app.put("/api/:table/:id", [genericMasterFacade.updateRequest, genericMasterDao.update, genericMasterFacade.updateResponse]);

	//generic api to do hard delete operation of any table by id -- DELETE
	appExtensions.app.delete("/api/:table/:id", [genericMasterFacade.deleteRequest, genericMasterDao.delete, genericMasterFacade.deleteResponse]);

	//generic api to do search by attributes operation of any table -- SEARCH
	appExtensions.app.post("/api/search/:table", [genericMasterFacade.searchByAttributeRequest, genericMasterDao.search, genericMasterFacade.searchByAttributeResponse]);
	 
	//generic api to do server side pagination search by attributes operation of any table -- PAGINATION
	appExtensions.app.post("/api/paged/:table", [genericMasterFacade.paginationRequest, genericMasterDao.pagination, genericMasterFacade.paginationResponse]);
	 
	//Generic APIs - Ends
}