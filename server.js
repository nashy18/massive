//Initiallising Global variables and node modules
var express = require("express");
var bodyParser = require("body-parser");
//Getting Application Configuration
var appConfig = require('./config/appSettings.json');
var app = express();
//Getting utility functions
var utility = require('./common/utils')(appConfig);

//Getting logger module
var logger = require('./common/logger')(appConfig);

//To Store AuthToken
const _authToken = appConfig.authToken;

var _appExtensions = {};
_appExtensions.app = app;
_appExtensions.utility = utility;
_appExtensions.appConfig = appConfig;
_appExtensions.logger = logger;

//http://expressjs.com/en/guide/using-middleware.html
app.use(express.static(__dirname + "/web"));
app.use(bodyParser.json());

//Setting JWT Secret Key
app.set('superSecret', appConfig.authToken); // secret variable

//Getting utility functions
var jwtAuthorization = require('./security/jwtAuthorizationFilter')(_appExtensions);

//CORS Middleware
app.use(function (req, res, next) {
    //http://enable-cors.org/server_expressjs.html
    //Enabling CORS -Starts
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    //Enabling CORS -Ends
    next();
});

//Middleware: To be executed in between request and response
app.use(function(req, res, next) { 
    //Calling function for JWT Authentication
	jwtAuthorization.OnAuthorization(req, res, next);
});


//Initiallising API Routes
var routes = require('./api/indexAPI')(_appExtensions);


//Setting up server
var server = app.listen(process.env.PORT || appConfig.nodeServerPortNo, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 }); 


// define the home page route, running index.html when server runs
app.get('/', function (req, res) {
    res.sendFile('/index.html');
});