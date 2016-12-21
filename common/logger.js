module.exports = function (appConfig) {
//http://stackoverflow.com/questions/12016474/node-js-logging
//https://github.com/winstonjs/winston
    
/*Usage:
    var logger = require('./logger');
    logger.info("Message");
    logger.warn("Message");
    logger.error("Message");
                    or
    logger.log('info', "Message");
    logger.log('warn', "Message");
    logger.log('error', ""Message");
*/
    var winston = require('winston');
    
    var logger = new (winston.Logger)({
        transports: [
            new (winston.transports.Console)({ json: false, timestamp: true }),
            new winston.transports.File({ filename: 'logs/debug.log', json: false })
        ],
        exceptionHandlers: [
            new (winston.transports.Console)({ json: false, timestamp: true }),
            new winston.transports.File({ filename: 'logs/exceptions.log', json: false })
        ],
        exitOnError: false
    });
    
    return logger;
}