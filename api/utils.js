const BbPromise = require('bluebird')
const invokeHandlers = (event, handlers) => {
  const { httpMethod, resource } = event
  if (typeof handlers[httpMethod] === 'undefined') {
    return new Error(`Method: ${httpMethod} is unregisterd`)
  }
  if (Object.keys(handlers[httpMethod]).indexOf(resource) < 0) {
    return new Error(`API: ${resource} is unregisterd`)
  }
  return handlers[httpMethod][resource](event)
}

const responseBuilder = (statusCode, body) => {
  body = body || {}
  const response = {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(body)
  }
  return response
}

const promiseWrapper = target => {
  if (target instanceof Error) return BbPromise.reject(target)
  return BbPromise.resolve(target)
}

const exec = (handlersPath, event, callback) => {
  try {
    console.log(`start to run ${event.httpMethod} ${event.resource}`)
    const handlers = require(handlersPath)
    const result = invokeHandlers(event, handlers)
    if (result instanceof Error) throw result
    return promiseWrapper(result)
      .then(response => callback(null, responseBuilder(200, response)))
      .catch(err =>
        callback(
          null,
          responseBuilder(500, {
            message: err.message || 'Internal server error'
          })
        )
      )
  } catch (e) {
    console.log(e) // eslint-disable-line
    return promiseWrapper(e).catch(err =>
      callback(
        null,
        responseBuilder(500, { message: err.message || 'internal error' })
      )
    )
  }
}

module.exports.invokeHandlers = invokeHandlers
module.exports.responseBuilder = responseBuilder
module.exports.exec = exec
