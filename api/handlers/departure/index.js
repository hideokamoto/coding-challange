module.exports = {
  GET: {
    '/departure/{lineName}/{station}': event => {
      return {
        message: 'search stations',
        event
      }
    }
  }
}
