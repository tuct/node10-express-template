"use strict"

/**
 * Called on every invocation of the function
 * @param {*} event Wrapper around express request
 * @param {*} context Wrapper for express response 
 */
function handler(event, context){
    let err;
    const result =             {
        status: "You said: " + JSON.stringify(event.body)
    };
    context
        .status(200)
        .succeed(result);
}
/**
 * Configure express app on startup
 * e.g: add Compression to enable gzip ...
 * @param {*} app 
 */
function expressConfig(app){
    console.info("Initializing express app now");
    return app;
}

module.exports.handler = handler
module.exports.expressConfig = expressConfig
