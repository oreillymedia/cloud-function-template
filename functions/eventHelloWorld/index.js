'use strict';

/*
*  @function eventHelloWorld.handler
*  @param {Object} event read event from configured pubsub topic
*  @param {Function} callback function 
*/
exports.handler = (event, callback) => {
    console.log(`Hello World!`)
    callback();
};