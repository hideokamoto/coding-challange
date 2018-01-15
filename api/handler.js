'use strict'
const { exec } = require('./utils')

module.exports.departure = (event, context, callback) =>
  exec('./handlers/departure/index', event, callback)
