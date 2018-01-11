module.exports = {
  GET: {
    '/test1': event => {
      return {
        message: 'test1',
        event
      }
    }
  }
}
