module.exports = function (appExtensions) {
    console.log("---------------------------");
    console.log("Inside JWTAuthorization Filter ");
    console.log("---------------------------");

    var jwtAuthorizationFilter = {};

    //authenticate 
    jwtAuthorizationFilter.OnAuthorization = function (req, res, next) {
        //User Authentication -Starts
        var response = {};
        try {
            //Validating AuthToken
            if (urlToExcludeFromAuthentication(req.path)) {
                //Executing next call back function
                next();
            }
            else if (!urlToExcludeFromAuthentication() && req.headers.authorization) {
                var token = req.headers.authorization;      
                //Checking for valid JWT Token
                appExtensions.utility.jwt.verify(token, appExtensions.app.get('superSecret'), function (err, decoded) {                    
                    if (err) {
                        if (err == "TokenExpiredError: jwt expired") {
                            appExtensions.logger.error("JWT Token Error " + err);
                            return res.json({ Success: false, Message: 'Session has been expired.' });
                        }
                        else {
                            res.send(unAuthorizedUser());
                        }
                    }
                    else {
                        if (typeof decoded == 'object') {
                            //Executing next call back function
                            next();
                        }
                        else {
                            res.send(unAuthorizedUser());
                        }
                    }
                });
            }
            else {
                res.send(unAuthorizedUser());
            }
        }
        catch (e) {
            response.Success = false;
            response.Message = appExtensions.appConfig.recordReterived_Failed_Message;
            response.ErrorDetails = e;
            appExtensions.logger.error("Exception: " + e);
        }
        //User Authentication -Ends
    }

    function unAuthorizedUser() {
        appExtensions.logger.error("UnAuthorised User Access at: " + appExtensions.utility.moment().format('DD-MM-YYYY HH:MM'));
        var response = {};
        response.Success = false;
        response.Message = "UnAuthorised User";
        return response;
    }

    function urlToExcludeFromAuthentication(apiPath) {
        console.log(apiPath);
        var isWhiteListed = false;
        for (var i = 0 ; i < appExtensions.appConfig.apiWhiteList.length ; i++) {           
            if (apiPath == appExtensions.appConfig.apiWhiteList[i]) {
                isWhiteListed = true;
                break;
            }            
        }
        return isWhiteListed;
    }

    return jwtAuthorizationFilter;
}