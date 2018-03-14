'use strict';


// this example shows an http response event type
exports.helloWorld = (request, response) => {
  response.status(200).send('Hello World!');
};

// this example shows an pub/sub event type
exports.pubSub = (event, callback) => {
  callback();
};
