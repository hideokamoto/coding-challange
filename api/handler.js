'use strict';
const { exec } = require('./utils')

module.exports.station = (event, context, callback) =>
  exec('./handlers/departure/index', event, callback)
module.exports.departure = (event, context, callback) =>
  exec('./handlers/departure/index', event, callback)
