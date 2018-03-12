
'use strict';
/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 * @returns {String} response context sent string
 */
exports.helloGET = (req, res) => {
  res.send('Hello World!');
};
