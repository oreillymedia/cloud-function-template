'use strict';

/*
*  @function httpHelloWorld
*  @param {object} request object received from the caller
*  @param {object} response object created in response to the request
*/
exports.httpHelloWorld = (request, response) => {
  response.status(200).send('Hello World!');
};

/*
*
*  @function eventHelloWorld
*  @param { Object } event read event from configured pubsub topic
*  @param { Function } callback function
*/
exports.eventHelloWorld = (event, callback) => {
  callback(`Hello ${event.data.name || 'World'}!`);
};
