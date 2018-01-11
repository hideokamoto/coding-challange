module.exports = {
  GET: {
    '/test': event => {
      return {
        message: 'test',
        event
      }
    }
  }
}
