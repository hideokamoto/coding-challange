module.exports = {
  GET: {
    '/station/{name}': event => {
      return {
        message: 'get station',
        event
      }
    },
    '/station/search': event => {
      return {
        message: 'search station',
        event
      }
    }
  }
}
