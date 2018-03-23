'use strict';

/*
*  @function httpHelloWorld.handler
*  @param {object} request object received from the caller
*  @param {object} response object created in response to the request
*/
exports.handler = (request, response) => {
  response.status(200).send('Hello World!');
};
